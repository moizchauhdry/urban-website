/**
 * Public URL paths on urbanelitelimo.com (files live once under /moiz/ on the server).
 * `path` = URL after the domain; `slug` = internal id for app logic.
 */
export const REGIONS = [
  {
    slug: 'connecticut',
    path: 'connecticut-black-car-and-limo-service',
    label: 'Connecticut Car Service',
  },
  {
    slug: 'florida',
    path: 'moiz/florida',
    label: 'Florida Car Service',
  },
  {
    slug: 'illinois',
    path: 'moiz/illinois',
    label: 'Illinois Car Service',
  },
  {
    slug: 'new-york',
    path: 'moiz/new-york',
    label: 'New York Car Service',
  },
]

export const REGION_SLUGS = REGIONS.map((r) => r.slug)

/** Paths used in dev server + Apache rewrites, e.g. `connecticut-black-car-and-limo-service` */
export const REGION_PATHS = REGIONS.map((r) => r.path)

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
