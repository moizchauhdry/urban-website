/**
 * @typedef {Object} HeroBookingFormData
 * @property {'distance'|'hourly'} bookingType
 * @property {string} name
 * @property {string} email
 * @property {string} phone
 * @property {string} date
 * @property {string} time
 * @property {string} fleet
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

function getBookingApiBaseUrl() {
  const base = import.meta.env.VITE_BOOKING_API_URL?.trim().replace(/\/$/, '')
  if (!base) {
    throw new Error(
      'Booking API is not configured. Add VITE_BOOKING_API_URL to your .env file (see SETUP.md).',
    )
  }
  return base
}

/** @returns {string} */
function getBookingStoreDataUrl() {
  const override = import.meta.env.VITE_BOOKING_STORE_DATA_URL?.trim()
  if (override) return override.replace(/\/$/, '')

  const apiUrl = new URL(getBookingApiBaseUrl())
  return `${apiUrl.origin}/api/urban/booking/store-data`
}

/**
 * Fleet labels from the portal (vehicle_id must match these names exactly).
 * @returns {Promise<Array<{ value: string, label: string }>>}
 */
export async function fetchBookingFleetOptions() {
  const res = await fetch(getBookingStoreDataUrl(), {
    headers: { Accept: 'application/json' },
  })

  if (!res.ok) {
    throw new Error(`Could not load fleet options (${res.status})`)
  }

  const json = await res.json()
  const vehicles = json?.data?.vehicles
  if (!Array.isArray(vehicles) || vehicles.length === 0) {
    throw new Error('No fleet options available from the booking portal.')
  }

  return vehicles.map((vehicle) => ({
    value: vehicle.label,
    label: vehicle.label,
  }))
}

function getSuccessPageUrl() {
  const url = import.meta.env.VITE_BOOKING_SUCCESS_URL?.trim()
  if (!url) {
    throw new Error(
      'Success page URL is not configured. Add VITE_BOOKING_SUCCESS_URL to your .env file (see SETUP.md).',
    )
  }
  return url
}

/** Canonical site URL sent to the portal (must match a website registered in the portal). */
function getBookingLiveUrl(fallbackUrl) {
  const override = import.meta.env.VITE_BOOKING_LIVE_URL?.trim()
  return override || fallbackUrl
}

/**
 * Map form travel value to portal travel_type (matches areacarservice booking-form.js).
 * @param {string} travel
 */
function mapTravelType(travel) {
  const normalized = travel.trim().toLowerCase()
  if (normalized === 'round trip') return 'Round Trip'
  return 'One Way'
}

/**
 * Request body for the booking API (field names must match portal expectations).
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
    travel_type: mapTravelType(payload.travel || 'One way'),
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
 * POST booking to API, then redirect to the success page.
 * @param {ReturnType<typeof buildHeroBookingPayload>} payload
 * @returns {Promise<{ ok: true }>}
 */
export async function submitHeroBooking(payload) {
  const serviceType = payload.bookingType
  if (serviceType !== 'distance' && serviceType !== 'hourly') {
    throw new Error('Invalid booking type')
  }

  if (serviceType === 'hourly' && !payload.hours?.trim()) {
    throw new Error('Please enter the number of hours for hourly service.')
  }

  if (!payload.fleet?.trim()) {
    throw new Error('Please select a fleet.')
  }

  const url = `${getBookingApiBaseUrl()}/${serviceType}`
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

  window.location.assign(getSuccessPageUrl())
  return { ok: true }
}
