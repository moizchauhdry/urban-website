/** Shared deploy path normalizer (safe for vite.config and the app). */
export function normalizeDeployPath(raw) {
  const path = (raw ?? '/urban-app/').trim() || '/urban-app/'
  if (path === '/' || path === './') return '/urban-app/'
  const withLeading = path.startsWith('/') ? path : `/${path}`
  return withLeading.endsWith('/') ? withLeading : `${withLeading}/`
}
