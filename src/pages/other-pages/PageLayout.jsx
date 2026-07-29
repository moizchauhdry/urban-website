import { useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import MarketingLandingPage from '../templates/MarketingLandingPage.jsx'
import { getOtherPageLandingConfig } from '../templates/landingConfigs.js'
import { OTHER_PAGE_SLUGS } from './registry.js'

const styleModules = import.meta.glob('../../styles/other-pages/*.css')

function normalizePath(path) {
  return path.replace(/\\/g, '/')
}

function loadPageStyles(slug) {
  const suffix = `/${slug}.css`
  const entry = Object.entries(styleModules).find(([key]) => normalizePath(key).endsWith(suffix))
  entry?.[1]?.()
}

/** Catch-all SEO landings — one shared template; no per-slug Home.jsx chunk. */
export default function PageLayout() {
  const { slug } = useParams()

  useEffect(() => {
    if (slug) loadPageStyles(slug)
  }, [slug])

  if (!slug || !OTHER_PAGE_SLUGS.has(slug)) {
    return <Navigate to="/" replace />
  }

  const config = getOtherPageLandingConfig(slug)

  return (
    <MarketingLandingPage
      key={slug}
      heroKey={config.heroKey}
      routeCardsKey={config.routeCardsKey}
      airportsKey={config.airportsKey}
      imagePrefix={config.imagePrefix}
    />
  )
}
