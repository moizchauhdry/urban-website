/** Longest paths first so nested Illinois routes resolve correctly. */
export const BOOKING_HOME_PATHS = [
  '/illinois-car-service/ohare-intl-airport-ord-limo-service',
  '/illinois-car-service/ohare-intl-airport-ord-car-service',
  '/illinois-car-service/chicago-chauffeur-service',
  '/illinois-car-service/chicago-airport-car-service',
  '/illinois-car-service/chicago-limo-service',
  '/connecticut-car-service',
  '/florida-car-service',
  '/new-york-car-service',
  '/illinois-car-service',
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

export function getThankYouPath(bookingHome = '/') {
  if (bookingHome === '/') return '/thank-you'
  return `${bookingHome}/thank-you`
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
