import { lazy, Suspense } from 'react'
import LandingHero from '../../components/hero/LandingHero.jsx'
import ViewportLazy from '../../components/common/ViewportLazy.jsx'

const MarketingBelowFold = lazy(() => import('./MarketingBelowFold.jsx'))

/**
 * Shared marketing landing shell — hero paints first; sections load near viewport.
 *
 * @param {{
 *   heroKey: string
 *   routeCardsKey: string
 *   airportsKey: string
 * }} props
 */
export default function MarketingLandingPage({
  heroKey,
  routeCardsKey,
  airportsKey,
}) {
  return (
    <>
      <LandingHero pageKey={heroKey} />
      {/* Tight rootMargin + delayed observe keeps gsap/fleet off the LCP path */}
      <ViewportLazy minHeight={800} rootMargin="0px 0px" deferMs={2500}>
        <Suspense fallback={null}>
          <MarketingBelowFold
            routeCardsKey={routeCardsKey}
            airportsKey={airportsKey}
          />
        </Suspense>
      </ViewportLazy>
    </>
  )
}
