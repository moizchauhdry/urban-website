import { getRegionBySlug, getRegionFromPathname } from '../config/regions.js'
import { DEPLOY_SEGMENT } from '../config/deploy.js'

/**
 * React Router basename from the public URL, e.g. `/connecticut-black-car-and-limo-service`.
 */
export function getRouterBasename() {
  if (typeof window === 'undefined') return undefined

  const region = getRegionFromPathname(window.location.pathname)
  if (region) return `/${region.path}`

  const parts = window.location.pathname.split('/').filter(Boolean)
  if (parts[0] === DEPLOY_SEGMENT && parts.length === 1) {
    return `/${DEPLOY_SEGMENT}`
  }

  return undefined
}

/** Active region slug from the URL, e.g. `connecticut`, or null. */
export function getCurrentRegionSlug() {
  if (typeof window === 'undefined') return null
  return getRegionFromPathname(window.location.pathname)?.slug ?? null
}

/** Prefix for in-app links on the current deployment. */
export function getAppBase() {
  const basename = getRouterBasename()
  return basename ? `${basename}/` : '/'
}

/** Regional landing URL from site root. */
export function regionUrl(slug) {
  const region = getRegionBySlug(slug)
  return region ? `/${region.path}` : `/${slug.replace(/^\//, '')}`
}

/** Hash link on the current base. */
export function appHash(fragment) {
  const id = fragment.replace(/^#/, '')
  return `${getAppBase()}#${id}`
}
