/** Public URL folder name (matches WordPress page slug). */
export const SITE_APP_SEGMENT = 'connecticut-black-car-and-limo-service'

export const DEFAULT_DEPLOY_PATH = `/${SITE_APP_SEGMENT}/`

/** Shared deploy path normalizer (safe for vite.config and the app). */
export function normalizeDeployPath(raw) {
  const path = (raw ?? DEFAULT_DEPLOY_PATH).trim() || DEFAULT_DEPLOY_PATH
  if (path === '/' || path === './') return DEFAULT_DEPLOY_PATH
  const withLeading = path.startsWith('/') ? path : `/${path}`
  return withLeading.endsWith('/') ? withLeading : `${withLeading}/`
}
