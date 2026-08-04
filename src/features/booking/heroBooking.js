/**
 * @typedef {Object} HeroBookingFormData
 * @property {'distance'|'hourly'} bookingType
 * @property {string} name
 * @property {string} email
 * @property {string} phone
 * @property {string} date
 * @property {string} time
 * @property {string} fleetw
 * @property {string} pickup
 * @property {string} destination
 * @property {string} serviceType
 * @property {string} travel
 * @property {string} passengers
 * @property {string} luggage
 * @property {string} hours
 */

export const HERO_BOOKING_INITIAL = {
  bookingType: 'distance',
  name: '',
  email: '',
  phone: '',
  date: '',
  time: '',
  fleet: '',
  pickup: '',
  destination: '',
  serviceType: '',
  travel: '',
  passengers: '',
  luggage: '',
  hours: '',
}

/** Today in the user's local timezone (YYYY-MM-DD) — earliest selectable pickup date. */
export function getMinBookingDate() {
  const d = new Date()
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

/** @param {string} dateStr YYYY-MM-DD */
export function isPastBookingDate(dateStr) {
  if (!dateStr?.trim()) return false
  return dateStr < getMinBookingDate()
}

export const HERO_DURATION_OPTIONS = [
  { value: '2', label: '2 Hours' },
  { value: '3', label: '3 Hours' },
  { value: '4', label: '4 Hours' },
  { value: '5', label: '5 Hours' },
  { value: '6', label: '6 Hours' },
  { value: '7', label: '7 Hours' },
  { value: '8', label: '8 Hours' },
  { value: '9', label: '9 Hours' },
  { value: '10', label: '10 Hours' },
  { value: '11', label: '11 Hours' },
  { value: '12', label: '12 Hours' },
  { value: '13', label: '13 Hours' },
]

/**
 * @param {HeroBookingFormData & { phone?: string }} formData
 */
export function buildHeroBookingPayload(formData) {
  return {
    ...formData,
    liveUrl: typeof window !== 'undefined' ? window.location.href : '',
    submittedAt: new Date().toISOString(),
  }
}

const DEFAULT_BOOKING_STORE_DATA_URL =
  'https://portal.arealimoservice.com/api/urban/booking/store-data'

function getBookingApiBaseUrl() {
  const base = import.meta.env.VITE_BOOKING_API_URL?.trim().replace(/\/$/, '')
  if (!base) {
    throw new Error(
      'Booking API is not configured. Add VITE_BOOKING_API_URL to your .env file (see SETUP.md).',
    )
  }
  return base
}

/** @param {'distance'|'hourly'} bookingType */
function getBookingSubmitUrl(bookingType) {
  if (bookingType !== 'distance' && bookingType !== 'hourly') {
    throw new Error('Invalid booking type')
  }
  return `${getBookingApiBaseUrl()}/${bookingType}`
}

/** @returns {string} */
function getBookingStoreDataUrl() {
  const override = import.meta.env.VITE_BOOKING_STORE_DATA_URL?.trim()
  if (override) return override.replace(/\/$/, '')

  const apiBase = import.meta.env.VITE_BOOKING_API_URL?.trim()
  if (apiBase) {
    const apiUrl = new URL(apiBase.replace(/\/$/, ''))
    return `${apiUrl.origin}/api/urban/booking/store-data`
  }

  return DEFAULT_BOOKING_STORE_DATA_URL
}

/** Fleet labels excluded from the booking form dropdown. */
const EXCLUDED_BOOKING_FLEET_LABELS = new Set(['economy sedan'])

/**
 * Normalize a portal option list ({ value, label, image? }) into select options.
 * The portal submit API matches on names, so the label doubles as the option value.
 * @param {unknown} list
 * @returns {Array<{ value: string, label: string, id: number|string|null, image: string|null }>}
 */
function parseStoreOptionList(list) {
  if (!Array.isArray(list)) return []
  return list
    .map((item) => {
      const label = String(item?.label ?? item?.name ?? '').trim()
      if (!label) return null
      return {
        value: label,
        label,
        id: item?.value ?? null,
        image: item?.image ?? null,
      }
    })
    .filter(Boolean)
}

/**
 * @typedef {Object} HeroBookingStoreData
 * @property {Array<{ value: string, label: string, id: number|string|null, image: string|null }>} vehicles
 * @property {Array<{ value: string, label: string }>} services
 * @property {Array<{ value: string, label: string }>} travelTypes
 * @property {Array<{ value: string, label: string }>} serviceTypes
 */

/** @type {Promise<HeroBookingStoreData>|null} */
let storeDataPromise = null

/**
 * Booking options (vehicles, services, travel types, tabs) from the portal store-data
 * endpoint. Cached for the session so the prefetch and the form share one request.
 *
 * Note: the response also contains `google_map_api_key` — it is intentionally ignored;
 * the Maps key must come from VITE_GOOGLE_MAPS_API_KEY in .env (see lib/loadGoogleMaps.js).
 *
 * @returns {Promise<HeroBookingStoreData>}
 */
export function fetchBookingStoreData() {
  if (!storeDataPromise) {
    storeDataPromise = (async () => {
      const controller = typeof AbortController !== 'undefined' ? new AbortController() : null
      const timeoutId =
        controller &&
        window.setTimeout(() => {
          controller.abort()
        }, 12000)

      try {
        const res = await fetch(getBookingStoreDataUrl(), {
          headers: { Accept: 'application/json' },
          signal: controller?.signal,
        })

        if (!res.ok) {
          throw new Error(`Could not load booking options (${res.status})`)
        }

        const json = await res.json()
        const data = json?.data ?? json

        const vehicles = parseStoreOptionList(data?.vehicles).filter(
          ({ label }) => !EXCLUDED_BOOKING_FLEET_LABELS.has(label.toLowerCase()),
        )
        const services = parseStoreOptionList(data?.services)
        const travelTypes = parseStoreOptionList(data?.travel_types)
        const serviceTypes = parseStoreOptionList(data?.service_types)

        if (!vehicles.length || !services.length || !travelTypes.length) {
          throw new Error('Booking options are missing from the portal response.')
        }

        return { vehicles, services, travelTypes, serviceTypes }
      } catch (err) {
        if (err?.name === 'AbortError') {
          throw new Error('Booking options timed out. Please refresh or call (888) 881-6610.')
        }
        throw err
      } finally {
        if (timeoutId) window.clearTimeout(timeoutId)
      }
    })().catch((err) => {
      // Reset so a later mount/retry can attempt the request again.
      storeDataPromise = null
      throw err
    })
  }
  return storeDataPromise
}

/** Kick off the store-data request early (e.g. while the form chunk is still loading). */
export function prefetchBookingStoreData() {
  fetchBookingStoreData().catch(() => {
    /* errors are surfaced when the form calls fetchBookingStoreData() */
  })
}

/** Canonical site URL sent to the portal (must match a website registered in the portal). */
function getBookingLiveUrl(fallbackUrl) {
  const override = import.meta.env.VITE_BOOKING_LIVE_URL?.trim()
  return override || fallbackUrl
}

/**
 * Request body for the booking API (field names must match portal expectations).
 * Travel/service/vehicle values are the portal store-data labels as-is.
 * @param {ReturnType<typeof buildHeroBookingPayload>} payload
 */
function buildApiRequestBody(payload) {
  const body = {
    project_name: 'ACS',
    name: payload.name,
    email: payload.email,
    phone: payload.phone,
    pickup_date: payload.date,
    pickup_time: payload.time,
    vehicle_id: payload.fleet,
    pickup_location: payload.pickup,
    drop_location: payload.destination,
    service: payload.serviceType,
    travel_type: payload.travel?.trim() || '',
    no_of_passengers: payload.passengers,
    no_of_luggage: payload.luggage,
    live_url: getBookingLiveUrl(payload.liveUrl),
  }

  if (payload.bookingType === 'hourly' && payload.hours) {
    body.no_of_hours = payload.hours
  }

  return body
}

/**
 * POST booking to API. Caller handles navigation to the on-site thank-you page.
 * @param {ReturnType<typeof buildHeroBookingPayload>} payload
 * @returns {Promise<{ ok: true }>}
 */
export async function submitHeroBooking(payload) {
  const serviceType = payload.bookingType
  if (serviceType !== 'distance' && serviceType !== 'hourly') {
    throw new Error('Invalid booking type')
  }

  if (serviceType === 'hourly' && !payload.hours?.trim()) {
    throw new Error('Please select a duration for hourly service.')
  }

  if (!payload.fleet?.trim()) {
    throw new Error('Please select a fleet.')
  }

  if (isPastBookingDate(payload.date)) {
    throw new Error('Please select today or a future date.')
  }

  const url = getBookingSubmitUrl(serviceType)
  const body = buildApiRequestBody(payload)

  if (import.meta.env.DEV) {
    console.info('[Hero booking] POST', url, body)
  }

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(body),
  })

  const contentType = res.headers.get('content-type') || ''
  let data = null
  if (contentType.includes('application/json')) {
    data = await res.json()
  } else if (!res.ok) {
    const text = await res.text()
    throw new Error(text || `Booking failed (${res.status})`)
  }

  if (!res.ok) {
    throw new Error(data?.message || data?.error || `Booking failed (${res.status})`)
  }

  if (data && data.success === false) {
    throw new Error(data.message || data.error || 'Booking could not be completed.')
  }

  return { ok: true }
}
