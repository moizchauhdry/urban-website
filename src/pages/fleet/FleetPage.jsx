import { lazy, Suspense } from 'react'
import FleetHero from './FleetHero.jsx'
import ViewportLazy from '../../components/common/ViewportLazy.jsx'

const FleetVehicles = lazy(() => import('./FleetVehicles.jsx'))
const TrustedStats = lazy(() => import('../../components/sections/TrustedStats.jsx'))
const ReviewsSection = lazy(() => import('../../components/sections/ReviewsSection.jsx'))

/** Dedicated fleet page — hero, vehicle grid, trust stats, and reviews. */
export default function FleetPage() {
  return (
    <>
      <FleetHero />
      <ViewportLazy
        minHeight={800}
        rootMargin="480px 0px"
        deferMs={0}
        mobileRootMargin="120px 0px"
        mobileDeferMs={2800}
      >
        <Suspense fallback={null}>
          <FleetVehicles />
          <TrustedStats />
          <ReviewsSection variant="fleet" />
        </Suspense>
      </ViewportLazy>
    </>
  )
}
