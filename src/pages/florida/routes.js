/** Florida car service routes shared across navigation. */
export { FLORIDA_HOME } from '../../config/routes.js'

/** Miami-area pages from other-pages (Service Areas nested menu). */
/** @type {{ label: string, path: string }[]} */
export const FLORIDA_MIAMI_SUBPAGES = [
  { label: 'Miami Car Service', path: '/miami-car-service' },
  { label: 'Miami Chauffeur Service', path: '/miami-chauffeur-service' },
  { label: 'Miami Airport Car Service', path: '/miami-airport-car-service' },
  { label: 'Miami Airport Limo Service', path: '/miami-airport-limo-service' },
  { label: 'Miami to Orlando Car Service', path: '/miami-to-orlando-car-service' },
  { label: 'Miami to Naples Car Service', path: '/miami-to-naples-car-service' },
  { label: 'Miami to Fort Lauderdale Car Service', path: '/miami-to-fort-lauderdale-car-service' },
  { label: 'West Palm Beach to Miami Limo Service', path: '/west-palm-beach-to-miami-limo-service' },
]

/** Popular Miami route links for content-block footers (short labels). */
/** @type {{ label: string, path: string }[]} */
export const MIAMI_POPULAR_ROUTES = [
  { label: 'Miami to Fort Lauderdale', path: '/miami-to-fort-lauderdale-car-service' },
  { label: 'Miami to Orlando', path: '/miami-to-orlando-car-service' },
  { label: 'Miami to Naples', path: '/miami-to-naples-car-service' },
  { label: 'Palm Beach to Miami', path: '/west-palm-beach-to-miami-limo-service' },
  { label: 'Miami Airport Car Service', path: '/miami-airport-car-service' },
  { label: 'Miami Chauffeur Service', path: '/miami-chauffeur-service' },
]

/** @param {string} pageKey */
export function isMiamiPageKey(pageKey) {
  return FLORIDA_MIAMI_SUBPAGES.some((item) => item.path === `/${pageKey}`)
}
