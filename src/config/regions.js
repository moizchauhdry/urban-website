import { SITE_APP_SEGMENT } from './deployPath.js'

/** App is served at `/connecticut-black-car-and-limo-service/` */
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
  return (
    REGIONS.find((r) => {
      const base = `/${r.path}`
      return normalized === base || normalized.startsWith(`${base}/`)
    }) ?? null
  )
}
