/** Remove trailing index.html so React Router sees `/` not `/index.html`. */
export function normalizeAppUrl() {
  if (typeof window === 'undefined') return

  const { pathname, search, hash } = window.location
  if (!pathname.endsWith('/index.html')) return

  const base = pathname.slice(0, -'/index.html'.length) || '/'
  const withSlash = base.endsWith('/') ? base : `${base}/`
  window.history.replaceState(null, '', `${withSlash}${search}${hash}`)
}
