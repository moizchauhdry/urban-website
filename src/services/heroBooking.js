/**
 * Hero booking payload — shape matches the hero form for a future API.
 * @typedef {Object} HeroBookingPayload
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
 * @property {string} submittedAt ISO timestamp
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
}

/**
 * Build the payload sent to the API (or logged during development).
 * @param {typeof HERO_BOOKING_INITIAL} formData
 * @returns {HeroBookingPayload}
 */
export function buildHeroBookingPayload(formData) {
  return {
    ...formData,
    submittedAt: new Date().toISOString(),
  }
}

/**
 * Submit hero booking. Replace the body with `fetch()` when the API is ready.
 * @param {HeroBookingPayload} payload
 * @returns {Promise<{ ok: true, payload: HeroBookingPayload }>}
 */
export async function submitHeroBooking(payload) {
  if (import.meta.env.DEV) {
    console.info('[Hero booking]', payload)
  }

  // TODO: integrate API
  // const res = await fetch(`${import.meta.env.VITE_API_URL}/bookings`, {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(payload),
  // })
  // if (!res.ok) throw new Error('Booking failed')

  return { ok: true, payload }
}
