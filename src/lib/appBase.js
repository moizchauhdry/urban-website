import { APP_ROUTE_SEGMENTS, isRegionSlug } from '../config/regions.js'
import { DEPLOY_SEGMENT } from '../config/deploy.js'

/**
 * React Router basename from the URL, e.g. `/connecticut` on
 * `urbanelitelimo.com/connecticut/` (routed to one deploy folder via Apache).
 */
export function getRouterBasename() {
  if (typeof window === 'undefined') return undefined

  const [first] = window.location.pathname.split('/').filter(Boolean)
  if (!first) return undefined
  if (first === DEPLOY_SEGMENT) return undefined
  if (APP_ROUTE_SEGMENTS.includes(first)) return undefined
  if (isRegionSlug(first)) return `/${first}`
  return undefined
}

/** Active region slug from the URL, e.g. `connecticut`, or null. */
export function getCurrentRegionSlug() {
  const basename = getRouterBasename()
  return basename ? basename.slice(1) : null
}

/** Prefix for in-app links on the current deployment (`/` or `/connecticut/`). */
export function getAppBase() {
  const basename = getRouterBasename()
  return basename ? `${basename}/` : '/'
}

/** Regional landing URL from site root, e.g. `/connecticut`. */
export function regionUrl(slug) {
  return `/${slug.replace(/^\//, '')}`
}

/** Hash link on the current base, e.g. `/connecticut/#fleet`. */
export function appHash(fragment) {
  const id = fragment.replace(/^#/, '')
  return `${getAppBase()}#${id}`
}
