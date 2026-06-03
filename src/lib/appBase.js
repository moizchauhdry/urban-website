import { APP_ROUTE_SEGMENTS, isRegionSlug } from '../config/regions.js'

/**
 * React Router basename from the URL, e.g. `/connecticut` when the app is served
 * from `urbanelitelimo.com/connecticut/`. Undefined at site root or local dev `/`.
 */
export function getRouterBasename() {
  if (typeof window === 'undefined') {
    const envBase = import.meta.env.VITE_BASE_PATH?.trim()
    if (envBase && envBase !== '/' && envBase !== './') {
      return envBase.replace(/\/$/, '')
    }
    return undefined
  }

  const [first] = window.location.pathname.split('/').filter(Boolean)
  if (!first) return undefined
  if (APP_ROUTE_SEGMENTS.includes(first)) return undefined
  if (isRegionSlug(first)) return `/${first}`
  return undefined
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
