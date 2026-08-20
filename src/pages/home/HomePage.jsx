import LandingHero from '../../components/hero/LandingHero.jsx'
import { lazy, Suspense } from 'react'
import ViewportLazy from '../../components/common/ViewportLazy.jsx'

const HomeBelowFold = lazy(() => import('./HomeBelowFold.jsx'))

/** Main home page for Urban Elite Limo. */
export default function HomePage() {
  return (
    <>
      <LandingHero pageKey="home" />
      <ViewportLazy
        minHeight={800}
        rootMargin="640px 0px"
        deferMs={0}
        mobileRootMargin="120px 0px"
        mobileDeferMs={2800}
      >
        <Suspense fallback={null}>
          <HomeBelowFold />
        </Suspense>
      </ViewportLazy>
    </>
  )
}
