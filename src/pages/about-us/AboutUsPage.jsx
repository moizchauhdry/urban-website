import { lazy, Suspense } from 'react'
import AboutHero from './AboutHero.jsx'
import ViewportLazy from '../../components/common/ViewportLazy.jsx'

const AboutIntro = lazy(() => import('./AboutIntro.jsx'))
const AboutFeatures = lazy(() => import('./AboutFeatures.jsx'))
const AboutStory = lazy(() => import('./AboutStory.jsx'))

/** Dedicated About Us page. */
export default function AboutUsPage() {
  return (
    <>
      <AboutHero />
      <ViewportLazy
        minHeight={600}
        rootMargin="480px 0px"
        deferMs={0}
        mobileRootMargin="120px 0px"
        mobileDeferMs={2800}
      >
        <Suspense fallback={null}>
          <AboutIntro />
          <AboutFeatures />
          <AboutStory />
        </Suspense>
      </ViewportLazy>
    </>
  )
}
