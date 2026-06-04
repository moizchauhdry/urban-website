import { SITE_APP_SEGMENT } from './deployPath.js'

/**
 * Public URL and deploy folder: `/connecticut-black-car-service/`.
 */
export const REGIONS = [
  {
    slug: 'connecticut',
    path: SITE_APP_SEGMENT,
    label: 'Connecticut Car Service',
  },
]

export const REGION_PATHS = REGIONS.map((r) => r.path)

/** Other states still on WordPress (shown in nav/footer). */
export const SERVICE_AREA_LINKS = [
  {
    label: 'Florida Car Service',
    href: 'https://urbanelitelimo.com/state/florida-car-service/',
  },
  {
    label: 'Illinois Car Service',
    href: 'https://urbanelitelimo.com/state/illinois-car-service/',
  },
  {
    label: 'New York Car Service',
    href: 'https://urbanelitelimo.com/state/new-york-car-service/',
  },
]

export function getRegionBySlug(slug) {
  return REGIONS.find((r) => r.slug === slug) ?? null
}

export function getRegionFromPathname(pathname) {
  const normalized = pathname.replace(/\/$/, '') || '/'
  const publicBase = `/${SITE_APP_SEGMENT}`

  if (normalized === publicBase || normalized.startsWith(`${publicBase}/`)) {
    return REGIONS[0]
  }

  return null
}
