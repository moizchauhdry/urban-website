/** Shared deploy path normalizer (safe for vite.config and the app). */
export function normalizeDeployPath(raw) {
  const path = (raw ?? '/moiz/').trim() || '/moiz/'
  if (path === '/' || path === './') return '/moiz/'
  const withLeading = path.startsWith('/') ? path : `/${path}`
  return withLeading.endsWith('/') ? withLeading : `${withLeading}/`
}
