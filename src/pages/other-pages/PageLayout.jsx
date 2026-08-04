import { Navigate, useParams } from 'react-router-dom'
import MarketingLandingPage from '../templates/MarketingLandingPage.jsx'
import { getOtherPageLandingConfig } from '../templates/landingConfigs.js'
import { OTHER_PAGE_SLUGS } from './registry.js'

/** Catch-all SEO landings — one shared template; styles come from shared global service/airport rules. */
export default function PageLayout() {
  const { slug } = useParams()

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
    />
  )
}
