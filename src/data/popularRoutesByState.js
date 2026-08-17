import { FLORIDA_HOME, FLORIDA_MIAMI_SUBPAGES, MIAMI_POPULAR_ROUTES } from '../pages/florida/routes.js'
import { CONNECTICUT_SUBPAGES } from '../pages/connecticut/routes.js'
import { NEW_YORK_HOME, NEW_YORK_SUBPAGES } from '../pages/newyork/routes.js'
import { ILLINOIS_HOME, ILLINOIS_SUBPAGES } from '../pages/illinois/routes.js'
import { BOSTON_SUBPAGES } from '../pages/boston/routes.js'

/**
 * @typedef {{ label: string, path: string }} PopularRoute
 */

/** @type {PopularRoute[]} */
const CONNECTICUT_POPULAR_ROUTES = [
  { label: 'Norwalk CT Car Service', path: '/norwalk-ct-car-service' },
  { label: 'Greenwich CT Car Service', path: '/greenwich-ct-car-service' },
  { label: 'Stamford CT Car Service', path: '/stamford-ct-car-service' },
  { label: 'Hartford CT Car Service', path: '/hartford-ct-car-service' },
  { label: 'New Haven CT Car Service', path: '/new-haven-ct-car-service' },
  { label: 'BDL Airport Car Service', path: '/bdl-airport-car-service' },
]

/** @type {PopularRoute[]} */
const NEW_YORK_POPULAR_ROUTES = [
  { label: 'Manhattan Car Service', path: '/manhattan-car-service' },
  { label: 'NYC Limo Service', path: '/nyc-limo-service' },
  { label: 'JFK Airport Car Service', path: '/jfk-airport-car-service' },
  { label: 'LGA Airport Car Service', path: '/lga-airport-car-service' },
  { label: 'Newark Airport Service', path: '/newark-airport-service' },
  { label: 'Westchester County Car Service', path: '/westchester-county-car-service' },
]

/** @type {PopularRoute[]} */
const ILLINOIS_POPULAR_ROUTES = [
  { label: 'Chicago Chauffeur Service', path: '/illinois-car-service/chicago-chauffeur-service' },
  { label: 'Chicago Limo Service', path: '/illinois-car-service/chicago-limo-service' },
  { label: 'Chicago Airport Car Service', path: '/chicago-airport-car-service' },
  { label: 'Milwaukee to Chicago', path: '/milwaukee-to-chicago-car-service' },
  { label: "Milwaukee to O'Hare", path: '/milwaukee-to-ohare-car-service' },
  { label: 'Milwaukee Car Service', path: '/milwaukee-car-service' },
]

/** @type {PopularRoute[]} */
const BOSTON_POPULAR_ROUTES = [
  { label: 'Boston Car Service', path: '/boston-car-service' },
  { label: 'Boston Chauffeur Service', path: '/boston-chauffeur-service' },
  { label: 'Boston Limo Service', path: '/boston-limo-service' },
  { label: 'BOS Airport Car Service', path: '/bos-airport-car-service' },
  { label: 'Connecticut to Boston', path: '/connecticut-to-boston-car-service' },
]

/** @type {PopularRoute[]} */
const WISCONSIN_POPULAR_ROUTES = [
  { label: 'Milwaukee Car Service', path: '/milwaukee-car-service' },
  { label: 'Milwaukee Chauffeur Service', path: '/milwaukee-chauffeur-service' },
  { label: 'Milwaukee Limo Service', path: '/milwaukee-limo-service' },
  { label: 'Milwaukee Airport Limo', path: '/milwaukee-airport-limo-service' },
  { label: 'Milwaukee to Chicago', path: '/milwaukee-to-chicago-car-service' },
  { label: "Milwaukee to O'Hare", path: '/milwaukee-to-ohare-car-service' },
]

/** @type {PopularRoute[]} */
const NEW_JERSEY_POPULAR_ROUTES = [
  { label: 'Luxury New Jersey Car Service', path: '/luxury-new-jersey-car-service' },
  { label: 'Newark Airport Service', path: '/newark-airport-service' },
  { label: 'Manhattan Car Service', path: '/manhattan-car-service' },
  { label: 'JFK Airport Car Service', path: '/jfk-airport-car-service' },
  { label: 'LGA Airport Car Service', path: '/lga-airport-car-service' },
  { label: 'NYC Limo Service', path: '/nyc-limo-service' },
]

/** @type {PopularRoute[]} */
const GEORGIA_POPULAR_ROUTES = [
  { label: 'Atlanta Car Service', path: '/atlanta-car-service' },
  { label: 'Florida Car Service', path: FLORIDA_HOME },
  { label: 'Miami Car Service', path: '/miami-car-service' },
  { label: 'Miami Airport Car Service', path: '/miami-airport-car-service' },
]

/** @type {PopularRoute[]} */
const TEXAS_POPULAR_ROUTES = [
  { label: 'Texas Car Service', path: '/texas-car-service' },
  { label: 'Florida Car Service', path: FLORIDA_HOME },
  { label: 'New York Car Service', path: NEW_YORK_HOME },
  { label: 'Illinois Car Service', path: ILLINOIS_HOME },
]

/** @param {{ path: string }} item */
function slugFromPath(item) {
  return item.path.replace(/^\//, '')
}

/** Hub + related page keys that belong to each state cluster. */
const STATE_PAGE_KEYS = {
  connecticut: new Set([
    'connecticut',
    'connecticut-car-service',
    'bdl-airport-car-service',
    'ct-to-jfk-airport-car-service',
    ...CONNECTICUT_SUBPAGES.map(slugFromPath),
  ]),
  florida: new Set([
    'florida',
    'florida-car-service',
    ...FLORIDA_MIAMI_SUBPAGES.map(slugFromPath),
  ]),
  newyork: new Set([
    'newyork',
    'new-york-car-service',
    'jfk-airport-car-service',
    'lga-airport-car-service',
    'newark-airport-service',
    'westchester-county-car-service',
    ...NEW_YORK_SUBPAGES.map(slugFromPath),
  ]),
  illinois: new Set([
    'illinois',
    'illinois-car-service',
    'chicago-chauffeur-service',
    'chicago-limo-service',
    'chicago-airport-car-service',
    ...ILLINOIS_SUBPAGES.map(slugFromPath),
  ]),
  wisconsin: new Set([
    'wisconsin-car-service',
    'milwaukee-car-service',
    'milwaukee-chauffeur-service',
    'milwaukee-limo-service',
    'milwaukee-airport-limo-service',
    'milwaukee-to-chicago-car-service',
    'milwaukee-to-ohare-car-service',
  ]),
  boston: new Set([
    'boston-car-service',
    ...BOSTON_SUBPAGES.map(slugFromPath),
  ]),
  newjersey: new Set(['luxury-new-jersey-car-service']),
  georgia: new Set(['atlanta-car-service']),
  texas: new Set(['texas-car-service']),
}

/** @type {Record<string, PopularRoute[]>} */
const STATE_POPULAR_ROUTES = {
  connecticut: CONNECTICUT_POPULAR_ROUTES,
  florida: MIAMI_POPULAR_ROUTES,
  newyork: NEW_YORK_POPULAR_ROUTES,
  illinois: ILLINOIS_POPULAR_ROUTES,
  wisconsin: WISCONSIN_POPULAR_ROUTES,
  boston: BOSTON_POPULAR_ROUTES,
  newjersey: NEW_JERSEY_POPULAR_ROUTES,
  georgia: GEORGIA_POPULAR_ROUTES,
  texas: TEXAS_POPULAR_ROUTES,
}

/** @param {string} pageKey */
function resolveState(pageKey) {
  const key = pageKey.replace(/^\//, '')
  for (const [state, pages] of Object.entries(STATE_PAGE_KEYS)) {
    if (pages.has(key)) return state
  }
  if (key.includes('miami') || key.includes('florida') || key.includes('palm-beach')) return 'florida'
  if (key.includes('-ct-') || key.includes('connecticut') || key.includes('bdl-airport')) {
    return 'connecticut'
  }
  if (key.includes('milwaukee') || key.includes('wisconsin') || key.includes('ohare')) {
    return 'wisconsin'
  }
  if (key.includes('chicago') || key.includes('illinois')) return 'illinois'
  if (key.includes('boston') || key.includes('bos-airport')) return 'boston'
  if (key.includes('jersey')) return 'newjersey'
  if (
    key.includes('manhattan') ||
    key.includes('new-york') ||
    key.includes('nyc') ||
    key.includes('jfk') ||
    key.includes('lga') ||
    key.includes('newark') ||
    key.includes('westchester')
  ) {
    return 'newyork'
  }
  if (key.includes('atlanta')) return 'georgia'
  if (key.includes('texas')) return 'texas'
  return null
}

/**
 * Popular in-state routes for a landing page content block.
 * Excludes the current page from the list.
 * @param {string} pageKey
 * @returns {PopularRoute[] | null}
 */
export function getPopularRoutesForPage(pageKey) {
  const state = resolveState(pageKey)
  if (!state) return null
  const routes = STATE_POPULAR_ROUTES[state]
  if (!routes?.length) return null

  const currentPath = pageKey.startsWith('/') ? pageKey : `/${pageKey}`

  return routes.filter((route) => route.path !== currentPath && route.path !== `/${pageKey}`)
}
