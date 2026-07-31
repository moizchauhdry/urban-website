import LandingHero from '../../components/hero/LandingHero.jsx'
import { lazy, Suspense } from 'react'

import ViewportLazy from '../../components/common/ViewportLazy.jsx'

const HomeBelowFold = lazy(() => import('./HomeBelowFold.jsx'))

/** Main home page for Urban Elite Limo. */
export default function HomePage() {


  return (
    <>
      <LandingHero pageKey="home" />
      <ViewportLazy minHeight={800}>
        <Suspense fallback={null}>
          <HomeBelowFold />
        </Suspense>
      </ViewportLazy>
    </>
  )
}
