import MarketingLandingPage from '../../templates/MarketingLandingPage.jsx'
import { HUB_LANDING_CONFIG } from '../../templates/landingConfigs.js'

const config = HUB_LANDING_CONFIG.illinois

/** Illinois car service landing page. */
export default function Home() {
  return (
    <MarketingLandingPage
      heroKey={config.heroKey}
      routeCardsKey={config.routeCardsKey}
      airportsKey={config.airportsKey}
      imagePrefix={config.imagePrefix}
    />
  )
}
