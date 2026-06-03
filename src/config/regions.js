/**
 * Public URL paths on urbanelitelimo.com (one app deploy; Apache routes each slug).
 * After adding a slug, update deploy/apache-wordpress-snippet.txt RewriteRule and rebuild.
 */
export const REGIONS = [
  { slug: 'connecticut', label: 'Connecticut Car Service' },
  { slug: 'florida', label: 'Florida Car Service' },
  { slug: 'illinois', label: 'Illinois Car Service' },
  { slug: 'new-york', label: 'New York Car Service' },
]

export const REGION_SLUGS = REGIONS.map((r) => r.slug)

/** In-app routes at site root (no region prefix). */
export const APP_ROUTE_SEGMENTS = ['about', 'services', 'contact']

export function isRegionSlug(segment) {
  return REGION_SLUGS.includes(segment)
}
