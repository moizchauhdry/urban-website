import MarketingLandingPage from './MarketingLandingPage.jsx'
import { HUB_LANDING_CONFIG } from './landingConfigs.js'

/**
 * @deprecated Prefer MarketingLandingShell — kept for explicit hub props if needed.
 * @param {{ hub: keyof typeof HUB_LANDING_CONFIG }} props
 */
export default function HubLandingPage({ hub }) {
  const config = HUB_LANDING_CONFIG[hub]
  if (!config) {
    throw new Error(`Unknown hub landing key: ${hub}`)
  }

  return (
    <MarketingLandingPage
      heroKey={config.heroKey}
      routeCardsKey={config.routeCardsKey}
      airportsKey={config.airportsKey}
    />
  )
}
