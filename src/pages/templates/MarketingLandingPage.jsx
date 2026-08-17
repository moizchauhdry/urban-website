import { lazy, Suspense, useRef } from 'react'
import LandingHero from '../../components/hero/LandingHero.jsx'
import ViewportLazy from '../../components/common/ViewportLazy.jsx'

const MarketingBelowFold = lazy(() => import('./MarketingBelowFold.jsx'))

/**
 * Shared marketing landing shell — hero paints first; sections load near viewport.
 * Stays mounted across service-area / airport navigations; only keys change.
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
  // Once below-fold has been revealed, keep it mounted on later page probes.
  const belowFoldUnlocked = useRef(false)

  return (
    <>
      <LandingHero pageKey={heroKey} />
      <ViewportLazy
        minHeight={800}
        rootMargin="720px 0px"
        deferMs={belowFoldUnlocked.current ? 0 : 700}
        onVisible={() => {
          belowFoldUnlocked.current = true
        }}
      >
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
