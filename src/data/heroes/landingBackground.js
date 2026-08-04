import heroLandingSm from '../../assets/hero/pages/landing-800.webp'
import heroLandingLg from '../../assets/hero/pages/landing-1440.webp'

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
