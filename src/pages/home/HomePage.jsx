import { lazy, Suspense } from 'react'
import HomeHero from './HomeHero.jsx'
import ViewportLazy from '../../components/common/ViewportLazy.jsx'

const HomeBelowFold = lazy(() => import('./HomeBelowFold.jsx'))

/** Main home page for Urban Elite Limo. */
export default function HomePage() {


  return (
    <>
      <HomeHero />
      <ViewportLazy minHeight={800}>
        <Suspense fallback={null}>
          <HomeBelowFold />
        </Suspense>
      </ViewportLazy>
    </>
  )
}
