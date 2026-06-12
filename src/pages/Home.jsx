import { useEffect } from 'react'
import Hero from '../components/sections/Hero.jsx'
import Fleet from '../components/sections/Fleet.jsx'
import WhyDifferent from '../components/sections/WhyDifferent.jsx'
import PlanningBanner from '../components/sections/PlanningBanner.jsx'
import ReviewsSection from '../components/sections/ReviewsSection.jsx'
import Services from '../components/sections/Services.jsx'
import ContentBlocks from '../components/sections/ContentBlocks.jsx'
import TrustedStats from '../components/sections/TrustedStats.jsx'
import HowItWorks from '../components/sections/HowItWorks.jsx'
import JourneySection from '../components/sections/JourneySection.jsx'
import AirportsSection from '../components/sections/AirportsSection.jsx'
import FaqSection from '../components/sections/FaqSection.jsx'

export default function Home() {
  useEffect(() => {
    document.title =
      'Reliable Connecticut Car Service for Airports and Long Distance Travel | Urban Elite Limo'
  }, [])

  return (
    <>
      <Hero />
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
    </>
  )
}
