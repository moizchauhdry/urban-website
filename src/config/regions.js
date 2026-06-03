/**
 * Regional pages under the deploy prefix, e.g. `/moiz/connecticut`.
 * `slug` is the URL segment after `/moiz/`.
 */
export const REGIONS = [
  { slug: 'connecticut', label: 'Connecticut Car Service' },
  { slug: 'florida', label: 'Florida Car Service' },
  { slug: 'illinois', label: 'Illinois Car Service' },
  { slug: 'new-york', label: 'New York Car Service' },
]

export const REGION_SLUGS = REGIONS.map((r) => r.slug)

export function getRegionBySlug(slug) {
  return REGIONS.find((r) => r.slug === slug) ?? null
}

/** Full path after domain, e.g. `moiz/connecticut` */
export function regionBasePath(region, deploySegment) {
  return `${deploySegment}/${region.slug}`
}

export function getRegionPaths(deploySegment) {
  return REGIONS.map((r) => regionBasePath(r, deploySegment))
}

export function getRegionFromPathname(pathname, deploySegment) {
  const parts = pathname.replace(/\/$/, '').split('/').filter(Boolean)
  if (parts[0] !== deploySegment || parts.length < 2) return null
  return getRegionBySlug(parts[1]) ?? null
}
