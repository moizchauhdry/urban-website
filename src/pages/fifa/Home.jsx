import '../../styles/fifa.css'
import { lazy, Suspense } from 'react'
import LandingHero from '../../components/hero/LandingHero.jsx'
import ViewportLazy from '../../components/common/ViewportLazy.jsx'

const FifaBelowFold = lazy(() => import('./FifaBelowFold.jsx'))

/** FIFA World Cup 2026 landing page (preview at /fifa — not in main nav). */
export default function Home() {
  return (
    <>
      <LandingHero pageKey="fifa" />
      <ViewportLazy
        minHeight={800}
        rootMargin="640px 0px"
        deferMs={0}
        mobileRootMargin="120px 0px"
        mobileDeferMs={2800}
      >
        <Suspense fallback={null}>
          <FifaBelowFold />
        </Suspense>
      </ViewportLazy>
    </>
  )
}
