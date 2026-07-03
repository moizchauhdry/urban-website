import { lazy, Suspense, useEffect, useMemo } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import SuspenseLoader from '../../components/layout/SuspenseLoader.jsx'
import { OTHER_PAGE_SLUGS } from './registry.js'

const homeModules = import.meta.glob('./*/Home.jsx')
const styleModules = import.meta.glob('../../styles/other-pages/*.css')

/** @type {Map<string, ReturnType<typeof lazy>>} */
const lazyHomeCache = new Map()

function normalizePath(path) {
  return path.replace(/\\/g, '/')
}

function resolveHomeLoader(slug) {
  const direct = `./${slug}/Home.jsx`
  if (homeModules[direct]) return homeModules[direct]

  const match = Object.entries(homeModules).find(([key]) =>
    normalizePath(key).endsWith(`/${slug}/Home.jsx`),
  )
  return match?.[1] ?? null
}

function getLazyHome(slug) {
  if (lazyHomeCache.has(slug)) return lazyHomeCache.get(slug)

  const loader = resolveHomeLoader(slug)
  if (!loader) return null

  const LazyHome = lazy(loader)
  lazyHomeCache.set(slug, LazyHome)
  return LazyHome
}

function loadPageStyles(slug) {
  const suffix = `/${slug}.css`
  const entry = Object.entries(styleModules).find(([key]) => normalizePath(key).endsWith(suffix))
  entry?.[1]?.()
}

/** Single layout for all /:slug other-pages routes. */
export default function PageLayout() {
  const { slug } = useParams()
  const LazyHome = useMemo(() => (slug ? getLazyHome(slug) : null), [slug])

  useEffect(() => {
    if (slug) loadPageStyles(slug)
  }, [slug])

  if (!slug || !OTHER_PAGE_SLUGS.has(slug) || !LazyHome) {
    return <Navigate to="/" replace />
  }

  return (
    <Suspense fallback={<SuspenseLoader />}>
      <LazyHome key={slug} />
    </Suspense>
  )
}
