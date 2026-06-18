import { lazy, Suspense, useMemo } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { OTHER_PAGE_SLUGS } from './registry.js'

const layouts = import.meta.glob('./*/PageLayout.jsx')

function resolveLayoutLoader(slug) {
  const direct = `./${slug}/PageLayout.jsx`
  if (layouts[direct]) return layouts[direct]

  const match = Object.entries(layouts).find(([key]) =>
    key.replace(/\\/g, '/').endsWith(`/${slug}/PageLayout.jsx`),
  )
  return match?.[1] ?? null
}

/** Single entry for all /other-pages/:slug routes (not linked in main nav). */
export default function OtherPageShell() {
  const { slug } = useParams()

  const loader = useMemo(() => (slug ? resolveLayoutLoader(slug) : null), [slug])

  if (!slug || !OTHER_PAGE_SLUGS.has(slug) || !loader) {
    return <Navigate to="/" replace />
  }

  const PageLayout = lazy(loader)

  return (
    <Suspense fallback={null}>
      <PageLayout />
    </Suspense>
  )
}
