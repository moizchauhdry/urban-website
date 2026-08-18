import { lazy, Suspense } from 'react'
import ServicesHero from './ServicesHero.jsx'
import ViewportLazy from '../../components/common/ViewportLazy.jsx'

const ServicesGrid = lazy(() => import('./ServicesGrid.jsx'))
const ReviewsSection = lazy(() => import('../../components/sections/ReviewsSection.jsx'))

/** Dedicated Our Services page. */
export default function OurServicesPage() {
  return (
    <>
      <ServicesHero />
      <ViewportLazy
        minHeight={800}
        rootMargin="480px 0px"
        deferMs={0}
        mobileRootMargin="120px 0px"
        mobileDeferMs={2800}
      >
        <Suspense fallback={null}>
          <ServicesGrid />
          <ReviewsSection variant="services" />
        </Suspense>
      </ViewportLazy>
    </>
  )
}
