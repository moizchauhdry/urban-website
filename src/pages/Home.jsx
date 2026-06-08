import { lazy, Suspense, useEffect } from 'react'
import ScrollRevealInit from '../components/common/ScrollRevealInit.jsx'
import Hero from '../components/sections/Hero.jsx'

const Fleet = lazy(() => import('../components/sections/Fleet.jsx'))
const WhyDifferent = lazy(() => import('../components/sections/WhyDifferent.jsx'))
const PlanningBanner = lazy(() => import('../components/sections/PlanningBanner.jsx'))
const ReviewsSection = lazy(() => import('../components/sections/ReviewsSection.jsx'))
const Services = lazy(() => import('../components/sections/Services.jsx'))
const ContentBlocks = lazy(() => import('../components/sections/ContentBlocks.jsx'))
const TrustedStats = lazy(() => import('../components/sections/TrustedStats.jsx'))
const HowItWorks = lazy(() => import('../components/sections/HowItWorks.jsx'))
const JourneySection = lazy(() => import('../components/sections/JourneySection.jsx'))
const AirportsSection = lazy(() => import('../components/sections/AirportsSection.jsx'))
const FaqSection = lazy(() => import('../components/sections/FaqSection.jsx'))

export default function Home() {
  useEffect(() => {
    document.title =
      'Reliable Connecticut Car Service for Airports and Long Distance Travel | Urban Elite Limo'
  }, [])

  return (
    <>
      <Hero />
      <Suspense fallback={null}>
        <ScrollRevealInit />
        <Fleet />
        <WhyDifferent />
        <PlanningBanner />
        <ReviewsSection />
        <Services />
        <ContentBlocks />
        <TrustedStats />
        <HowItWorks />
        <JourneySection />
        <AirportsSection />
        <FaqSection />
      </Suspense>
    </>
  )
}
