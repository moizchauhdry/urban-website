import MarketingLandingPage from './MarketingLandingPage.jsx'
import { HUB_LANDING_CONFIG } from './landingConfigs.js'

/**
 * Shared entry for dedicated region hub routes (CT / FL / NY / IL / Chicago).
 * One chunk instead of six identical Home.jsx wrappers.
 *
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
