/** Longest paths first so nested Illinois routes resolve correctly. */
export const BOOKING_HOME_PATHS = [
  '/illinois-car-service/ohare-intl-airport-ord-limo-service',
  '/illinois-car-service/ohare-intl-airport-ord-car-service',
  '/illinois-car-service/chicago-chauffeur-service',
  '/illinois-car-service/chicago-airport-car-service',
  '/illinois-car-service/chicago-limo-service',
  '/fifa',
  '/connecticut-car-service',
  '/florida-car-service',
  '/new-york-car-service',
  '/illinois-car-service',
  '/book-now',
  '/',
]

export const HERO_BOOKING_ID = 'hero-booking'
export const HERO_BOOKING_HASH = `#${HERO_BOOKING_ID}`

export function stripThankYouSuffix(pathname) {
  return pathname.replace(/\/thank-you\/?$/, '') || '/'
}

/** Closest landing page that has the hero booking form. */
export function resolveBookingHome(pathname) {
  const base = stripThankYouSuffix(pathname)
  const exact = BOOKING_HOME_PATHS.find((home) => home === base)
  if (exact) return exact
  return '/'
}

/** Digits-only phone for thank-you URL query (matches production format). */
export function formatThankYouPhone(phone) {
  return String(phone ?? '').replace(/\D/g, '')
}

/**
 * Thank-you URL after hero form submit — always /thank-you/ with email & phone query params.
 * @param {string} [_bookingHome] Kept for callers; path is always site-wide /thank-you/.
 * @param {{ email?: string, phone?: string }} [contact]
 */
export function getThankYouPath(_bookingHome = '/', contact = {}) {
  const email = contact.email?.trim()
  const phone = formatThankYouPhone(contact.phone)
  const parts = []

  if (email) parts.push(`email=${email}`)
  if (phone) parts.push(`phone=${phone}`)

  const query = parts.join('&')
  return query ? `/thank-you?${query}` : '/thank-you'
}

export function getBookNowTarget(pathname) {
  const onThankYou = /\/thank-you\/?$/.test(pathname)
  const home = resolveBookingHome(pathname)
  if (!onThankYou && pathname === home) return HERO_BOOKING_HASH
  return `${home}${HERO_BOOKING_HASH}`
}

export function scrollToHeroBooking() {
  const el = document.getElementById(HERO_BOOKING_ID)
  if (!el) return false
  el.scrollIntoView({ behavior: 'smooth', block: 'center' })
  return true
}

export const HERO_BOOKING_PREFILL_EVENT = 'hero-booking-prefill'

/** Push values into the hero booking form (listened to by HeroBookingForm). */
export function prefillHeroBooking(detail) {
  window.dispatchEvent(new CustomEvent(HERO_BOOKING_PREFILL_EVENT, { detail }))
}

export function scrollToHeroBookingWithPrefill(detail) {
  prefillHeroBooking(detail)
  return scrollToHeroBooking()
}
