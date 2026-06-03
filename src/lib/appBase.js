import {
  getRegionBySlug,
  getRegionFromPathname,
  regionBasePath,
} from '../config/regions.js'
import { DEPLOY_SEGMENT } from '../config/deploy.js'

/**
 * React Router basename, e.g. `/moiz/connecticut` or `/moiz` for the app root.
 */
export function getRouterBasename() {
  if (typeof window === 'undefined') return undefined

  const parts = window.location.pathname.split('/').filter(Boolean)
  if (parts[0] !== DEPLOY_SEGMENT) return undefined

  if (parts.length === 1) return `/${DEPLOY_SEGMENT}`

  const region = getRegionBySlug(parts[1])
  return region ? `/${regionBasePath(region, DEPLOY_SEGMENT)}` : undefined
}

/** Active region slug from the URL, e.g. `connecticut`, or null at `/moiz/`. */
export function getCurrentRegionSlug() {
  if (typeof window === 'undefined') return null
  return getRegionFromPathname(window.location.pathname, DEPLOY_SEGMENT)?.slug ?? null
}

/** Prefix for in-app links on the current deployment. */
export function getAppBase() {
  const basename = getRouterBasename()
  return basename ? `${basename}/` : '/'
}

/** Regional landing URL, e.g. `/moiz/connecticut`. */
export function regionUrl(slug) {
  const region = getRegionBySlug(slug)
  return region
    ? `/${regionBasePath(region, DEPLOY_SEGMENT)}`
    : `/${DEPLOY_SEGMENT}/${slug.replace(/^\//, '')}`
}

/** Hash link on the current base, e.g. `/moiz/connecticut/#fleet`. */
export function appHash(fragment) {
  const id = fragment.replace(/^#/, '')
  return `${getAppBase()}#${id}`
}
