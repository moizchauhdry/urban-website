import { Navigate, Outlet, useLocation } from 'react-router-dom'
import MarketingLandingPage from './MarketingLandingPage.jsx'
import { resolveLandingConfig } from './landingConfigs.js'

/**
 * Persistent shell for all service-area / airport / hub landings.
 * Parent layout route stays mounted; pathname only probes a new config.
 */
export default function MarketingLandingShell() {
  const { pathname } = useLocation()
  const config = resolveLandingConfig(pathname)

  if (!config) {
    return <Navigate to="/" replace />
  }

  return (
    <>
      <MarketingLandingPage
        heroKey={config.heroKey}
        routeCardsKey={config.routeCardsKey}
        airportsKey={config.airportsKey}
      />
      <Outlet />
    </>
  )
}
