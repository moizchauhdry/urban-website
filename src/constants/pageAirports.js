import { hasCentralAirportImage } from './airportImages.js'

/** @typedef {{ central: string[], extras: string[] }} AirportRegion */

/** Maximum airport cards shown in the Top Airports section. */
export const MAX_PAGE_AIRPORTS = 4

/** @type {Record<string, AirportRegion>} */
export const AIRPORT_REGIONS = {
  connecticut: {
    central: ['JFK', 'LGA', 'BDL', 'EWR'],
    extras: [],
  },
  newYork: {
    central: ['JFK', 'LGA', 'EWR', 'BDL'],
    extras: [],
  },
  newYorkMetro: {
    central: ['JFK', 'LGA', 'EWR', 'BDL'],
    extras: [],
  },
  newJersey: {
    central: ['EWR', 'JFK', 'LGA', 'BDL'],
    extras: [],
  },
  florida: {
    central: ['MIA', 'FLL', 'MCO'],
    extras: ['TPA'],
  },
  illinois: {
    central: ['ORD', 'MKE', 'MDW', 'RFD'],
    extras: [],
  },
  midwest: {
    central: ['ORD', 'MKE', 'MDW'],
    extras: [],
  },
  atlanta: {
    central: ['ATL', 'MIA', 'FLL', 'MCO'],
    extras: [],
  },
  texas: {
    central: ['DFW', 'AUS', 'DAL'],
    extras: ['IAH'],
  },
}

/**
 * @typedef {object} PageAirportConfig
 * @property {keyof typeof AIRPORT_REGIONS} region
 * @property {string[]} legacyOrder Original airport order used for CSS fallback classes
 * @property {string} [classPrefix] e.g. "fl-" or "ny-"
 * @property {string} [slugPrefix] e.g. "op-bdl-airport-car-service"
 * @property {'default' | 'short'} [variant]
 * @property {string[]} [extras] Page-specific extras overriding region extras
 */

/** @type {Record<string, PageAirportConfig>} */
export const PAGE_AIRPORT_CONFIG = {
  connecticut: {
    region: 'connecticut',
    legacyOrder: ['JFK', 'LGA', 'BDL', 'EWR'],
    classPrefix: '',
  },
  florida: {
    region: 'florida',
    legacyOrder: ['MIA', 'FLL', 'MCO', 'TPA'],
    classPrefix: 'fl-',
  },
  newyork: {
    region: 'newYork',
    legacyOrder: ['JFK', 'LGA', 'EWR', 'BDL'],
    classPrefix: 'ny-',
  },
  'illinois/illinois': {
    region: 'illinois',
    legacyOrder: ['ORD', 'MKE', 'MDW', 'RFD'],
    classPrefix: 'il-',
  },
  'illinois/chicago-chauffeur-service': {
    region: 'illinois',
    legacyOrder: ['ORD', 'MKE', 'MDW', 'RFD'],
    classPrefix: 'il-chi-chauff-',
  },
  'illinois/chicago-limo-service': {
    region: 'illinois',
    legacyOrder: ['ORD', 'MKE', 'MDW', 'RFD'],
    classPrefix: 'il-chi-limo-',
  },

  'other-pages/connecticut-car-service': {
    region: 'connecticut',
    legacyOrder: ['JFK', 'LGA', 'BDL', 'EWR'],
    slugPrefix: 'op-connecticut-car-service',
    variant: 'short',
  },
  'other-pages/stamford-ct-car-service': {
    region: 'connecticut',
    legacyOrder: ['JFK', 'LGA', 'BDL', 'EWR'],
    slugPrefix: 'op-stamford-ct-car-service',
    variant: 'short',
  },
  'other-pages/hartford-ct-car-service': {
    region: 'connecticut',
    legacyOrder: ['JFK', 'LGA', 'BDL', 'EWR'],
    slugPrefix: 'op-hartford-ct-car-service',
    variant: 'short',
  },
  'other-pages/danbury-ct-car-service': {
    region: 'connecticut',
    legacyOrder: ['JFK', 'LGA', 'BDL', 'EWR'],
    slugPrefix: 'op-danbury-ct-car-service',
    variant: 'short',
  },
  'other-pages/fairfield-ct-car-service': {
    region: 'connecticut',
    legacyOrder: ['JFK', 'LGA', 'BDL', 'EWR'],
    slugPrefix: 'op-fairfield-ct-car-service',
    variant: 'short',
  },
  'other-pages/greenwich-ct-car-service': {
    region: 'connecticut',
    legacyOrder: ['JFK', 'LGA', 'BDL', 'EWR'],
    slugPrefix: 'op-greenwich-ct-car-service',
    variant: 'short',
  },
  'other-pages/norwalk-ct-car-service': {
    region: 'connecticut',
    legacyOrder: ['JFK', 'LGA', 'BDL', 'EWR'],
    slugPrefix: 'op-norwalk-ct-car-service',
    variant: 'short',
  },
  'other-pages/new-haven-ct-car-service': {
    region: 'connecticut',
    legacyOrder: ['JFK', 'LGA', 'BDL', 'EWR'],
    slugPrefix: 'op-new-haven-ct-car-service',
    variant: 'short',
  },
  'other-pages/bdl-airport-car-service': {
    region: 'connecticut',
    legacyOrder: ['BDL', 'JFK', 'LGA', 'EWR'],
    slugPrefix: 'op-bdl-airport-car-service',
    variant: 'short',
  },
  'other-pages/ct-to-jfk-airport-car-service': {
    region: 'connecticut',
    legacyOrder: ['JFK', 'LGA', 'EWR', 'BDL'],
    slugPrefix: 'op-ct-to-jfk-airport-car-service',
    variant: 'short',
  },
  'other-pages/jfk-airport-car-service': {
    region: 'connecticut',
    legacyOrder: ['JFK', 'LGA', 'EWR', 'BDL'],
    slugPrefix: 'op-jfk-airport-car-service',
    variant: 'short',
  },
  'other-pages/lga-airport-car-service': {
    region: 'connecticut',
    legacyOrder: ['LGA', 'JFK', 'EWR', 'BDL'],
    slugPrefix: 'op-lga-airport-car-service',
    variant: 'short',
  },

  'other-pages/new-york-car-service': {
    region: 'newYorkMetro',
    legacyOrder: ['JFK', 'LGA', 'EWR', 'BDL'],
    slugPrefix: 'op-new-york-car-service',
    variant: 'short',
  },
  'other-pages/manhattan-car-service': {
    region: 'newYorkMetro',
    legacyOrder: ['JFK', 'LGA', 'EWR', 'BDL'],
    slugPrefix: 'op-manhattan-car-service',
    variant: 'short',
  },
  'other-pages/nyc-limo-service': {
    region: 'newYorkMetro',
    legacyOrder: ['JFK', 'LGA', 'EWR', 'BDL'],
    slugPrefix: 'op-nyc-limo-service',
    variant: 'short',
  },
  'other-pages/westchester-county-car-service': {
    region: 'newYorkMetro',
    legacyOrder: ['JFK', 'LGA', 'EWR', 'BDL'],
    slugPrefix: 'op-westchester-county-car-service',
    variant: 'short',
  },
  'other-pages/boston-car-service': {
    region: 'newYorkMetro',
    legacyOrder: ['JFK', 'LGA', 'EWR', 'BDL'],
    slugPrefix: 'op-boston-car-service',
    variant: 'short',
  },
  'other-pages/luxury-new-jersey-car-service': {
    region: 'newJersey',
    legacyOrder: ['JFK', 'LGA', 'BDL', 'EWR'],
    slugPrefix: 'op-luxury-new-jersey-car-service',
    variant: 'short',
  },
  'other-pages/newark-airport-service': {
    region: 'newJersey',
    legacyOrder: ['EWR', 'JFK', 'LGA', 'BDL'],
    slugPrefix: 'op-newark-airport-service',
    variant: 'short',
  },

  'other-pages/florida-car-service': {
    region: 'florida',
    legacyOrder: ['MIA', 'FLL', 'MCO', 'TPA'],
    slugPrefix: 'op-florida-car-service',
    variant: 'short',
  },
  'other-pages/miami-car-service': {
    region: 'florida',
    legacyOrder: ['MIA', 'FLL', 'MCO', 'TPA'],
    slugPrefix: 'op-miami-car-service',
    variant: 'short',
  },
  'other-pages/miami-chauffeur-service': {
    region: 'florida',
    legacyOrder: ['MIA', 'FLL', 'MCO', 'TPA'],
    slugPrefix: 'op-miami-chauffeur-service',
    variant: 'short',
  },
  'other-pages/miami-airport-car-service': {
    region: 'florida',
    legacyOrder: ['MIA', 'FLL', 'MCO', 'TPA'],
    slugPrefix: 'op-miami-airport-car-service',
    variant: 'short',
  },
  'other-pages/miami-airport-limo-service': {
    region: 'florida',
    legacyOrder: ['MIA', 'FLL', 'MCO', 'TPA'],
    slugPrefix: 'op-miami-airport-limo-service',
    variant: 'short',
  },
  'other-pages/miami-to-orlando-car-service': {
    region: 'florida',
    legacyOrder: ['MIA', 'FLL', 'MCO', 'TPA'],
    slugPrefix: 'op-miami-to-orlando-car-service',
    variant: 'short',
  },
  'other-pages/miami-to-naples-car-service': {
    region: 'florida',
    legacyOrder: ['MIA', 'FLL', 'MCO', 'TPA'],
    slugPrefix: 'op-miami-to-naples-car-service',
    variant: 'short',
  },
  'other-pages/miami-to-fort-lauderdale-car-service': {
    region: 'florida',
    legacyOrder: ['MIA', 'FLL', 'MCO', 'TPA'],
    slugPrefix: 'op-miami-to-fort-lauderdale-car-service',
    variant: 'short',
  },
  'other-pages/west-palm-beach-to-miami-limo-service': {
    region: 'florida',
    legacyOrder: ['MIA', 'FLL', 'MCO', 'TPA'],
    slugPrefix: 'op-west-palm-beach-to-miami-limo-service',
    variant: 'short',
  },

  'other-pages/illinois-car-service': {
    region: 'illinois',
    legacyOrder: ['ORD', 'MDW', 'MKE', 'JFK'],
    slugPrefix: 'op-illinois-car-service',
    variant: 'short',
  },
  'other-pages/chicago-airport-car-service': {
    region: 'midwest',
    legacyOrder: ['ORD', 'MDW', 'MKE', 'JFK'],
    slugPrefix: 'op-chicago-airport-car-service',
    variant: 'short',
  },
  'other-pages/wisconsin-car-service': {
    region: 'midwest',
    legacyOrder: ['ORD', 'MDW', 'MKE', 'JFK'],
    slugPrefix: 'op-wisconsin-car-service',
    variant: 'short',
  },
  'other-pages/milwaukee-car-service': {
    region: 'midwest',
    legacyOrder: ['ORD', 'MDW', 'MKE', 'JFK'],
    slugPrefix: 'op-milwaukee-car-service',
    variant: 'short',
  },
  'other-pages/milwaukee-chauffeur-service': {
    region: 'midwest',
    legacyOrder: ['ORD', 'MDW', 'MKE', 'JFK'],
    slugPrefix: 'op-milwaukee-chauffeur-service',
    variant: 'short',
  },
  'other-pages/milwaukee-limo-service': {
    region: 'midwest',
    legacyOrder: ['ORD', 'MDW', 'MKE', 'JFK'],
    slugPrefix: 'op-milwaukee-limo-service',
    variant: 'short',
  },
  'other-pages/milwaukee-airport-limo-service': {
    region: 'midwest',
    legacyOrder: ['ORD', 'MDW', 'MKE', 'JFK'],
    slugPrefix: 'op-milwaukee-airport-limo-service',
    variant: 'short',
  },
  'other-pages/milwaukee-to-chicago-car-service': {
    region: 'midwest',
    legacyOrder: ['ORD', 'MDW', 'MKE', 'JFK'],
    slugPrefix: 'op-milwaukee-to-chicago-car-service',
    variant: 'short',
  },
  'other-pages/milwaukee-to-ohare-car-service': {
    region: 'midwest',
    legacyOrder: ['ORD', 'MDW', 'MKE', 'JFK'],
    slugPrefix: 'op-milwaukee-to-ohare-car-service',
    variant: 'short',
  },

  'other-pages/atlanta-car-service': {
    region: 'atlanta',
    legacyOrder: ['ATL', 'MIA', 'FLL', 'MCO'],
    slugPrefix: 'op-atlanta-car-service',
    variant: 'short',
  },
  'other-pages/texas-car-service': {
    region: 'texas',
    legacyOrder: ['DFW', 'IAH', 'AUS', 'DAL'],
    slugPrefix: 'op-texas-car-service',
    variant: 'short',
  },
}

/**
 * @param {PageAirportConfig} config
 * @returns {Record<string, string>}
 */
function buildLegacyClassMap(config) {
  const map = {}
  config.legacyOrder.forEach((code, index) => {
    const slot = `a${index + 1}`
    if (config.slugPrefix) {
      map[code] = `${config.slugPrefix}-${slot}`
    } else {
      map[code] = `${config.classPrefix ?? ''}${slot}`
    }
  })
  return map
}

/**
 * Build airport cards: central images from assets/airports first, then regional extras.
 * @param {string} pageKey
 * @returns {Array<{ code: string, imageClass: string }>}
 */
export function getPageAirportItems(pageKey) {
  const config = PAGE_AIRPORT_CONFIG[pageKey]
  if (!config) {
    throw new Error(`Unknown airport page key: ${pageKey}`)
  }

  const region = AIRPORT_REGIONS[config.region]
  const legacyMap = buildLegacyClassMap(config)
  const extras = config.extras ?? region.extras

  const centralWithImages = region.central.filter((code) => hasCentralAirportImage(code))
  const codes = [...centralWithImages]

  for (const code of extras) {
    if (!codes.includes(code)) codes.push(code)
  }

  return codes.slice(0, MAX_PAGE_AIRPORTS).map((code) => ({
    code,
    imageClass: legacyMap[code] ?? '',
  }))
}

/** @param {string} pageKey */
export function getPageAirportVariant(pageKey) {
  return PAGE_AIRPORT_CONFIG[pageKey]?.variant ?? 'default'
}

/** Resolve page key from AirportsSection.jsx file path. */
export function pageKeyFromAirportsSectionPath(filePath) {
  const normalized = filePath.replace(/\\/g, '/')
  const match = normalized.match(/src\/pages\/(.+)\/airports\/AirportsSection\.jsx$/)
  if (!match) throw new Error(`Cannot derive page key from ${filePath}`)
  return match[1]
}
