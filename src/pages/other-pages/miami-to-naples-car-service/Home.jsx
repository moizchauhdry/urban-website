import { useEffect } from 'react'
import Hero from './hero/Hero.jsx'
import Fleet from './fleet/Fleet.jsx'
import WhyDifferent from './why-different/WhyDifferent.jsx'
import PlanningBanner from './planning-banner/PlanningBanner.jsx'
import ReviewsSection from './reviews/ReviewsSection.jsx'
import Services from './services/Services.jsx'
import ContentBlocks from './content-blocks/ContentBlocks.jsx'
import TrustedStats from './trusted-stats/TrustedStats.jsx'
import HowItWorks from './how-it-works/HowItWorks.jsx'
import JourneySection from './journey/JourneySection.jsx'
import AirportsSection from './airports/AirportsSection.jsx'
import FaqSection from './faqs/FaqSection.jsx'

/** Miami to Naples Car Service landing page. */
export default function Home() {
  useEffect(() => {
    document.title = "Miami to Naples Car Service | Urban Elite Limo"
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
