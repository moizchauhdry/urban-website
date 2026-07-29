/**
 * Landing page keys for MarketingLandingPage.
 * Dedicated hub routes use short hero keys; SEO catch-all slugs use slug-as-key.
 */

/** @typedef {{ heroKey: string, routeCardsKey: string, airportsKey: string, imagePrefix: string }} LandingConfig */

/** @type {Record<string, LandingConfig>} */
export const HUB_LANDING_CONFIG = {
  connecticut: {
    heroKey: 'connecticut',
    routeCardsKey: 'connecticut',
    airportsKey: 'connecticut',
    imagePrefix: '',
  },
  florida: {
    heroKey: 'florida',
    routeCardsKey: 'florida',
    airportsKey: 'florida',
    imagePrefix: 'fl',
  },
  newyork: {
    heroKey: 'newyork',
    routeCardsKey: 'newyork',
    airportsKey: 'newyork',
    imagePrefix: 'ny',
  },
  illinois: {
    heroKey: 'illinois',
    routeCardsKey: 'illinois',
    airportsKey: 'illinois/illinois',
    imagePrefix: 'il',
  },
  'chicago-chauffeur': {
    heroKey: 'chicago-chauffeur',
    routeCardsKey: 'chicago-chauffeur-service',
    airportsKey: 'illinois/chicago-chauffeur-service',
    imagePrefix: 'il-chi-chauff',
  },
  'chicago-limo': {
    heroKey: 'chicago-limo',
    routeCardsKey: 'chicago-limo-service',
    airportsKey: 'illinois/chicago-limo-service',
    imagePrefix: 'il-chi-limo',
  },
}

/** Hub path slugs that have dedicated AppRoutes (not served via other-pages catch-all). */
export const DEDICATED_HUB_SLUGS = new Set([
  'connecticut-car-service',
  'florida-car-service',
  'new-york-car-service',
  'illinois-car-service',
])

/**
 * Config for SEO / other-pages catch-all slug.
 * @param {string} slug
 * @returns {LandingConfig}
 */
export function getOtherPageLandingConfig(slug) {
  return {
    heroKey: slug,
    routeCardsKey: slug,
    airportsKey: `other-pages/${slug}`,
    imagePrefix: `op-${slug}`,
  }
}
