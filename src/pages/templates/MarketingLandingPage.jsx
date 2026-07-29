import { lazy, Suspense } from 'react'
import LandingHero from '../../components/hero/LandingHero.jsx'
import SuspenseLoader from '../../components/layout/SuspenseLoader.jsx'
import ViewportLazy from '../../components/common/ViewportLazy.jsx'

const MarketingBelowFold = lazy(() => import('./MarketingBelowFold.jsx'))

/**
 * Shared marketing landing shell — hero paints first; sections load near viewport.
 * Same UI as previous per-page Home.jsx clones; much smaller critical path.
 *
 * @param {{
 *   heroKey: string
 *   routeCardsKey: string
 *   airportsKey: string
 *   imagePrefix?: string
 * }} props
 */
export default function MarketingLandingPage({
  heroKey,
  routeCardsKey,
  airportsKey,
  imagePrefix = '',
}) {
  return (
    <>
      <LandingHero pageKey={heroKey} />
      <ViewportLazy minHeight={800}>
        <Suspense fallback={<SuspenseLoader />}>
          <MarketingBelowFold
            routeCardsKey={routeCardsKey}
            airportsKey={airportsKey}
            imagePrefix={imagePrefix}
          />
        </Suspense>
      </ViewportLazy>
    </>
  )
}
