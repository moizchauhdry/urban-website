/**
 * Landing page keys for MarketingLandingPage.
 * Dedicated hub routes use short hero keys; SEO catch-all slugs use slug-as-key.
 */

import { OTHER_PAGE_SLUGS } from '../other-pages/registry.js'
import { normalizePathname } from '../../config/routes.js'

/** @typedef {{ heroKey: string, routeCardsKey: string, airportsKey: string }} LandingConfig */

/** @type {Record<string, LandingConfig>} */
export const HUB_LANDING_CONFIG = {
  connecticut: {
    heroKey: 'connecticut',
    routeCardsKey: 'connecticut',
    airportsKey: 'connecticut',
  },
  florida: {
    heroKey: 'florida',
    routeCardsKey: 'florida',
    airportsKey: 'florida',
  },
  newyork: {
    heroKey: 'newyork',
    routeCardsKey: 'newyork',
    airportsKey: 'newyork',
  },
  illinois: {
    heroKey: 'illinois',
    routeCardsKey: 'illinois',
    airportsKey: 'illinois/illinois',
  },
  'chicago-chauffeur': {
    heroKey: 'chicago-chauffeur',
    routeCardsKey: 'chicago-chauffeur-service',
    airportsKey: 'illinois/chicago-chauffeur-service',
  },
  'chicago-limo': {
    heroKey: 'chicago-limo',
    routeCardsKey: 'chicago-limo-service',
    airportsKey: 'illinois/chicago-limo-service',
  },
}

/** Hub pathnames that map to HUB_LANDING_CONFIG keys. */
export const HUB_PATH_TO_KEY = {
  '/connecticut-car-service': 'connecticut',
  '/florida-car-service': 'florida',
  '/new-york-car-service': 'newyork',
  '/illinois-car-service': 'illinois',
  '/illinois-car-service/chicago-chauffeur-service': 'chicago-chauffeur',
  '/illinois-car-service/chicago-limo-service': 'chicago-limo',
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
  }
}

/**
 * Resolve marketing landing data from the current pathname.
 * Shared shell probes this on every navigation — no remount required.
 * @param {string} pathname
 * @returns {LandingConfig | null}
 */
export function resolveLandingConfig(pathname) {
  const path = normalizePathname(pathname)
  const hubKey = HUB_PATH_TO_KEY[path]
  if (hubKey) {
    return HUB_LANDING_CONFIG[hubKey] ?? null
  }

  const slug = path.startsWith('/') ? path.slice(1) : path
  if (!slug || slug.includes('/')) return null
  if (!OTHER_PAGE_SLUGS.has(slug)) return null

  return getOtherPageLandingConfig(slug)
}
