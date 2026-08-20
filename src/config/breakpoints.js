/** Compact nav (hamburger) through tablet widths — 730px up to 984px. */
export const TABLET_MAX_PX = 984

/** Phone layout — scrolling header, tightest spacing. */
export const PHONE_MAX_PX = 720

/** LCP image preload breakpoint — phones + tablets should prefer 800w heroes. */
export const LCP_MOBILE_MAX_PX = 1024

export const COMPACT_NAV_MQ = `(max-width: ${TABLET_MAX_PX}px)`
export const DESKTOP_NAV_MQ = `(min-width: ${TABLET_MAX_PX + 1}px)`
export const PHONE_MQ = `(max-width: ${PHONE_MAX_PX}px)`
export const LCP_MOBILE_MQ = `(max-width: ${LCP_MOBILE_MAX_PX}px)`
export const TABLET_MQ = COMPACT_NAV_MQ

/** True when the current viewport matches the phone layout. */
export function isPhoneViewport() {
  return typeof window !== 'undefined' && window.matchMedia(PHONE_MQ).matches
}

/** True when LCP should prefer the 800w hero (phones + most tablets). */
export function isLcpMobileViewport() {
  return typeof window !== 'undefined' && window.matchMedia(LCP_MOBILE_MQ).matches
}
