import { useCallback, useEffect, useId, useRef, useState } from 'react'
import { hasGoogleMapsApiKey, loadGoogleMapsPlaces } from '../../lib/loadGoogleMaps.js'

const MIN_CHARS = 2

function useDebouncedCallbackWithCancel(callback, delay) {
  const timeoutRef = useRef(null)
  const callbackRef = useRef(callback)

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  useEffect(
    () => () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    },
    [],
  )

  const cancel = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
  }, [])

  const debounced = useCallback(
    (...args) => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      timeoutRef.current = setTimeout(() => callbackRef.current(...args), delay)
    },
    [delay],
  )

  return { debounced, cancel }
}

/** @returns {Promise<Array<{ id: string, description: string, placePrediction?: object, legacyPrediction?: object }>>} */
async function fetchPlacePredictions(input, sessionToken) {
  const places = await loadGoogleMapsPlaces()
  const { AutocompleteSuggestion } = places

  if (AutocompleteSuggestion?.fetchAutocompleteSuggestions) {
    try {
      const { suggestions } = await AutocompleteSuggestion.fetchAutocompleteSuggestions({
        input,
        sessionToken,
        includedRegionCodes: ['us'],
        language: 'en',
        region: 'us',
      })

      if (!suggestions?.length) return []

      return suggestions
        .filter((s) => s.placePrediction)
        .map((s) => ({
          id: s.placePrediction.placeId,
          description: s.placePrediction.text?.toString?.() ?? String(s.placePrediction.text),
          placePrediction: s.placePrediction,
        }))
    } catch (err) {
      if (import.meta.env.DEV) {
        console.warn('[Places] AutocompleteSuggestion failed, trying legacy:', err)
      }
    }
  }

  return new Promise((resolve) => {
    const service = new window.google.maps.places.AutocompleteService()
    service.getPlacePredictions(
      {
        input,
        componentRestrictions: { country: 'us' },
        sessionToken,
      },
      (predictions, status) => {
        if (
          status !== window.google.maps.places.PlacesServiceStatus.OK ||
          !predictions?.length
        ) {
          if (import.meta.env.DEV && input.length >= MIN_CHARS) {
            console.warn('[Places] getPlacePredictions:', status)
          }
          resolve([])
          return
        }
        resolve(
          predictions.map((p) => ({
            id: p.place_id,
            description: p.description,
            legacyPrediction: p,
          })),
        )
      },
    )
  })
}

/**
 * Address input with Google Places suggestions.
 */
export default function PlacesAutocompleteInput({
  id,
  name,
  value,
  onChange,
  placeholder = 'Start typing an address…',
  autoComplete = 'off',
  disabled = false,
}) {
  const listId = useId()
  const wrapperRef = useRef(null)
  const onChangeRef = useRef(onChange)
  const sessionTokenRef = useRef(null)
  const placesLibRef = useRef(null)
  const placesReadyRef = useRef(false)
  const valueRef = useRef(value)
  const initPromiseRef = useRef(null)

  const [placesReady, setPlacesReady] = useState(false)
  const [loadError, setLoadError] = useState(null)
  const [suggestions, setSuggestions] = useState([])
  const [open, setOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(-1)
  const [loading, setLoading] = useState(false)

  const apiKeyMissing = !hasGoogleMapsApiKey()

  useEffect(() => {
    onChangeRef.current = onChange
    valueRef.current = value
  }, [onChange, value])

  const ensurePlacesLib = useCallback(() => {
    if (apiKeyMissing) {
      setLoadError('missing-key')
      return Promise.resolve(false)
    }
    if (placesReadyRef.current) return Promise.resolve(true)
    if (!initPromiseRef.current) {
      initPromiseRef.current = loadGoogleMapsPlaces()
        .then((lib) => {
          placesLibRef.current = lib
          sessionTokenRef.current = new lib.AutocompleteSessionToken()
          placesReadyRef.current = true
          setPlacesReady(true)
          setLoadError(null)
          return true
        })
        .catch((err) => {
          initPromiseRef.current = null
          placesReadyRef.current = false
          setLoadError(err.message)
          if (import.meta.env.DEV) {
            console.warn('[Places autocomplete]', err.message)
          }
          return false
        })
    }
    return initPromiseRef.current
  }, [apiKeyMissing])

  const runFetch = async (input) => {
    if (input.trim().length < MIN_CHARS) {
      setSuggestions([])
      setOpen(false)
      setLoading(false)
      return
    }

    const ready = await ensurePlacesLib()
    if (!ready || !placesReadyRef.current) {
      setLoading(false)
      return
    }

    setLoading(true)
    try {
      const results = await fetchPlacePredictions(input, sessionTokenRef.current)
      setSuggestions(results)
      setOpen(results.length > 0)
      setActiveIndex(-1)
    } catch (err) {
      if (import.meta.env.DEV) {
        console.warn('[Places autocomplete] fetch failed:', err)
      }
      setSuggestions([])
      setOpen(false)
    } finally {
      setLoading(false)
    }
  }

  const { debounced: debouncedFetch, cancel: cancelDebouncedFetch } =
    useDebouncedCallbackWithCancel((input) => {
      runFetch(input)
    }, 250)

  const refreshSessionToken = useCallback(() => {
    if (placesLibRef.current?.AutocompleteSessionToken) {
      sessionTokenRef.current = new placesLibRef.current.AutocompleteSessionToken()
    }
  }, [])

  /** Complete Places session in background (billing); UI uses suggestion text immediately. */
  const finalizePlaceSession = useCallback(
    (item) => {
      void (async () => {
        try {
          if (item.placePrediction?.toPlace) {
            const place = item.placePrediction.toPlace()
            await place.fetchFields({ fields: ['formattedAddress', 'displayName'] })
            refreshSessionToken()
          } else if (item.legacyPrediction) {
            const div = document.createElement('div')
            const placesService = new window.google.maps.places.PlacesService(div)
            await new Promise((resolve) => {
              placesService.getDetails(
                {
                  placeId: item.legacyPrediction.place_id,
                  fields: ['formatted_address', 'name'],
                  sessionToken: sessionTokenRef.current,
                },
                () => {
                  refreshSessionToken()
                  resolve()
                },
              )
            })
          }
        } catch (err) {
          if (import.meta.env.DEV) {
            console.warn('[Places] place details failed:', err)
          }
        }
      })()
    },
    [refreshSessionToken],
  )

  const selectPrediction = useCallback(
    (item) => {
      cancelDebouncedFetch()

      const address = item.description?.trim() ?? ''

      onChangeRef.current({ target: { name, value: address } })
      setSuggestions([])
      setOpen(false)
      setActiveIndex(-1)
      setLoading(false)

      finalizePlaceSession(item)
    },
    [cancelDebouncedFetch, finalizePlaceSession, name],
  )

  const handleInputChange = (e) => {
    onChange(e)
    debouncedFetch(e.target.value)
  }

  const handleKeyDown = (e) => {
    if (!open || !suggestions.length) return

    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveIndex((i) => (i < suggestions.length - 1 ? i + 1 : 0))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIndex((i) => (i > 0 ? i - 1 : suggestions.length - 1))
    } else if (e.key === 'Enter' && activeIndex >= 0) {
      e.preventDefault()
      selectPrediction(suggestions[activeIndex])
    } else if (e.key === 'Escape') {
      setOpen(false)
      setActiveIndex(-1)
    }
  }

  useEffect(() => {
    const onDocClick = (e) => {
      if (!wrapperRef.current?.contains(e.target)) {
        setOpen(false)
        setActiveIndex(-1)
      }
    }
    document.addEventListener('mousedown', onDocClick)
    return () => document.removeEventListener('mousedown', onDocClick)
  }, [])

  const showList = placesReady && open && suggestions.length > 0

  return (
    <div ref={wrapperRef} className="places-autocomplete">
      <input
        id={id}
        type="text"
        name={name}
        value={value}
        onChange={handleInputChange}
        onKeyDown={placesReady ? handleKeyDown : undefined}
        onFocus={() => {
          if (suggestions.length && placesReadyRef.current) setOpen(true)
        }}
        placeholder={placeholder}
        autoComplete={autoComplete}
        disabled={disabled}
        className={loading && placesReady ? 'places-autocomplete-input--loading' : undefined}
        role="combobox"
        aria-expanded={showList}
        aria-controls={listId}
        aria-autocomplete="list"
        aria-busy={loading}
      />
      {loading && placesReady ? (
        <span className="places-autocomplete-status" role="status" aria-live="polite">
          <span className="places-autocomplete-spinner" aria-hidden="true" />
          <span className="places-autocomplete-status-text">Searching…</span>
        </span>
      ) : null}
      {apiKeyMissing && import.meta.env.DEV && (
        <p className="places-autocomplete-hint">
          Add <code>VITE_GOOGLE_MAPS_API_KEY</code> to <code>.env</code> and restart{' '}
          <code>npm run dev</code>. Enable Maps JavaScript API + Places API in Google Cloud.
        </p>
      )}
      {loadError && loadError !== 'missing-key' && import.meta.env.DEV && (
        <p className="places-autocomplete-hint places-autocomplete-hint--error">{loadError}</p>
      )}
      {showList && (
        <ul id={listId} className="places-suggestions" role="listbox">
          {suggestions.map((item, index) => (
            <li key={item.id} role="option" aria-selected={index === activeIndex}>
              <button
                type="button"
                className={index === activeIndex ? 'is-active' : undefined}
                onMouseDown={(e) => {
                  e.preventDefault()
                  selectPrediction(item)
                }}
              >
                <span className="places-suggestions-main">{item.description}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
