/**
 * Destination photo packs for service-area and airport landings.
 * Miami is handled separately and is not in this map.
 */

export const DESTINATION_PAGES = {
  connecticut: [
    'connecticut',
    'connecticut-car-service',
    'norwalk-ct-car-service',
    'greenwich-ct-car-service',
    'danbury-ct-car-service',
    'fairfield-ct-car-service',
    'stamford-ct-car-service',
    'hartford-ct-car-service',
    'new-haven-ct-car-service',
    'bdl-airport-car-service',
  ],
  newyork: [
    'newyork',
    'new-york-car-service',
    'manhattan-car-service',
    'nyc-limo-service',
    'jfk-airport-car-service',
    'lga-airport-car-service',
    'westchester-county-car-service',
    'ct-to-jfk-airport-car-service',
  ],
  newjersey: ['luxury-new-jersey-car-service', 'newark-airport-service'],
  boston: [
    'boston-car-service',
    'boston-chauffeur-service',
    'boston-limo-service',
    'bos-airport-car-service',
    'connecticut-to-boston-car-service',
  ],
  chicago: [
    'illinois',
    'illinois-car-service',
    'chicago-chauffeur',
    'chicago-limo',
    'chicago-chauffeur-service',
    'chicago-limo-service',
    'chicago-airport-car-service',
    'milwaukee-to-chicago-car-service',
    'milwaukee-to-ohare-car-service',
  ],
  milwaukee: [
    'wisconsin-car-service',
    'milwaukee-car-service',
    'milwaukee-chauffeur-service',
    'milwaukee-limo-service',
    'milwaukee-airport-limo-service',
  ],
  atlanta: ['atlanta-car-service'],
  texas: ['texas-car-service'],
  florida: ['florida', 'florida-car-service'],
}

const PAGE_TO_DESTINATION = Object.fromEntries(
  Object.entries(DESTINATION_PAGES).flatMap(([id, pages]) => pages.map((page) => [page, id])),
)

/** @param {string} pageKey */
export function getDestinationId(pageKey) {
  return PAGE_TO_DESTINATION[pageKey] ?? null
}
