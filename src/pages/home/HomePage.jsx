import { lazy, Suspense, useEffect } from 'react'
import HomeHero from './HomeHero.jsx'
import ViewportLazy from '../../components/common/ViewportLazy.jsx'

const HomeBelowFold = lazy(() => import('./HomeBelowFold.jsx'))

/** Main home page for Urban Elite Limo. */
export default function HomePage() {
  useEffect(() => {
    document.title = 'Premium Car Service | Urban Elite Limo'
  }, [])

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
