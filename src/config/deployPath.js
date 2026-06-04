/** Public URL (what visitors see in the browser). */
export const SITE_APP_SEGMENT = 'connecticut-black-car-and-limo-service'

/** Server folder where you upload dist/ (under /var/www/urbanelitelimo/). */
export const DEFAULT_DEPLOY_FOLDER = 'urban-app'

export const DEFAULT_DEPLOY_PATH = `/${DEFAULT_DEPLOY_FOLDER}/`

/** Shared deploy path normalizer (safe for vite.config and the app). */
export function normalizeDeployPath(raw) {
  const path = (raw ?? DEFAULT_DEPLOY_PATH).trim() || DEFAULT_DEPLOY_PATH
  if (path === '/' || path === './') return DEFAULT_DEPLOY_PATH
  const withLeading = path.startsWith('/') ? path : `/${path}`
  return withLeading.endsWith('/') ? withLeading : `${withLeading}/`
}
