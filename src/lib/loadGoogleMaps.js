import { importLibrary, setOptions } from '@googlemaps/js-api-loader'

let loadPromise = null
let optionsConfigured = false

/**
 * Load the Places library (Autocomplete Data API).
 * Requires VITE_GOOGLE_MAPS_API_KEY in .env — restart dev server after adding it.
 */
export function loadGoogleMapsPlaces() {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY?.trim()
  if (!apiKey) {
    return Promise.reject(new Error('VITE_GOOGLE_MAPS_API_KEY is not set'))
  }

  if (!optionsConfigured) {
    setOptions({ key: apiKey, v: 'weekly' })
    optionsConfigured = true
  }

  if (!loadPromise) {
    loadPromise = importLibrary('places')
  }

  return loadPromise
}

export function hasGoogleMapsApiKey() {
  return Boolean(import.meta.env.VITE_GOOGLE_MAPS_API_KEY?.trim())
}
