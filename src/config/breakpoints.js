/** Compact nav (hamburger) through tablet widths — 730px up to 984px. */
export const TABLET_MAX_PX = 984

/** Phone layout — scrolling header, tightest spacing. */
export const PHONE_MAX_PX = 720

export const COMPACT_NAV_MQ = `(max-width: ${TABLET_MAX_PX}px)`
export const DESKTOP_NAV_MQ = `(min-width: ${TABLET_MAX_PX + 1}px)`
export const PHONE_MQ = `(max-width: ${PHONE_MAX_PX}px)`
export const TABLET_MQ = COMPACT_NAV_MQ
