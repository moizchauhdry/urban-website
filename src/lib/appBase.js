import { getRegionBySlug, getRegionFromPathname } from '../config/regions.js'
import { DEPLOY_SEGMENT } from '../config/deploy.js'

/**
 * React Router basename, e.g. `/connecticut-black-car-and-limo-service`.
 */
export function getRouterBasename() {
  if (typeof window === 'undefined') return undefined

  const region = getRegionFromPathname(window.location.pathname)
  if (region) return `/${region.path}`

  const parts = window.location.pathname.split('/').filter(Boolean)
  if (parts[0] === DEPLOY_SEGMENT) return `/${DEPLOY_SEGMENT}`

  return undefined
}

export function getCurrentRegionSlug() {
  if (typeof window === 'undefined') return null
  return getRegionFromPathname(window.location.pathname)?.slug ?? null
}

export function getAppBase() {
  const basename = getRouterBasename()
  return basename ? `${basename}/` : '/'
}

export function regionUrl(slug) {
  const region = getRegionBySlug(slug)
  return region ? `/${region.path}` : `/${slug.replace(/^\//, '')}`
}

export function appHash(fragment) {
  const id = fragment.replace(/^#/, '')
  return `${getAppBase()}#${id}`
}
