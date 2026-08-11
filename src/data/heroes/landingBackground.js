import heroLandingSm from '../../assets/hero/pages/landing-800.webp'
import heroLandingLg from '../../assets/hero/pages/landing-1440.webp'
import heroMiamiSm from '../../assets/hero/pages/miami-800.webp'
import heroMiamiLg from '../../assets/hero/pages/miami-1440.webp'

/**
 * Shared landing hero art — sync-importable so service/airport pages can paint
 * the LCP image before the large landings.jsx chunk resolves.
 */
export const LANDING_BACKGROUND = {
  default: heroLandingSm,
  sm: heroLandingSm,
  lg: heroLandingLg,
  sizes: '(max-width: 720px) 100vw, (max-width: 1024px) 800px, 1440px',
  width: 1440,
  height: 810,
}

export const MIAMI_BACKGROUND = {
  ...LANDING_BACKGROUND,
  default: heroMiamiSm,
  sm: heroMiamiSm,
  lg: heroMiamiLg,
}

/** Miami-area pages — keep in sync with the backgrounds set in landings.jsx. */
const MIAMI_PAGES = [
  'miami-car-service',
  'miami-chauffeur-service',
  'miami-airport-car-service',
  'miami-airport-limo-service',
  'miami-to-orlando-car-service',
  'miami-to-naples-car-service',
  'miami-to-fort-lauderdale-car-service',
  'west-palm-beach-to-miami-limo-service',
]

/** Pages with their own hero art, keyed the same way as HERO_PAGES. */
const PAGE_BACKGROUNDS = Object.fromEntries(MIAMI_PAGES.map((key) => [key, MIAMI_BACKGROUND]))

/** @param {string} pageKey */
export function getLandingBackground(pageKey) {
  return PAGE_BACKGROUNDS[pageKey] ?? LANDING_BACKGROUND
}
