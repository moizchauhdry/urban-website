import { lazy, Suspense, useMemo } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { OTHER_PAGE_SLUGS } from './registry.js'

const layouts = import.meta.glob('./*/PageLayout.jsx')

/** @type {Map<string, ReturnType<typeof lazy>>} */
const lazyLayoutCache = new Map()

function resolveLayoutLoader(slug) {
  const direct = `./${slug}/PageLayout.jsx`
  if (layouts[direct]) return layouts[direct]

  const match = Object.entries(layouts).find(([key]) =>
    key.replace(/\\/g, '/').endsWith(`/${slug}/PageLayout.jsx`),
  )
  return match?.[1] ?? null
}

function getLazyLayout(slug) {
  if (lazyLayoutCache.has(slug)) return lazyLayoutCache.get(slug)

  const loader = resolveLayoutLoader(slug)
  if (!loader) return null

  const LazyLayout = lazy(loader)
  lazyLayoutCache.set(slug, LazyLayout)
  return LazyLayout
}

/** Single entry for all /:slug routes (service-area city pages, etc.). */
export default function OtherPageShell() {
  const { slug } = useParams()

  const PageLayout = useMemo(() => (slug ? getLazyLayout(slug) : null), [slug])

  if (!slug || !OTHER_PAGE_SLUGS.has(slug) || !PageLayout) {
    return <Navigate to="/" replace />
  }

  return (
    <Suspense fallback={null}>
      <PageLayout key={slug} />
    </Suspense>
  )
}
