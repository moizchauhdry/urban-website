import FleetSection from '../../components/sections/FleetSection.jsx'
import ReviewsSection from '../../components/sections/ReviewsSection.jsx'
import ServicesSection from '../../components/sections/ServicesSection.jsx'
import WhyDifferentSection from '../../components/sections/WhyDifferentSection.jsx'
import TrustedStats from '../../components/sections/TrustedStats.jsx'
import HowItWorks from '../../components/sections/HowItWorks.jsx'
import JourneySection from '../../components/sections/JourneySection.jsx'
import FaqSection from '../../components/sections/FaqSection.jsx'
import TopDestinationsSection from './TopDestinationsSection.jsx'
import TopAirportsSection from './TopAirportsSection.jsx'

/** Below-the-fold home sections — lazy-loaded after hero paints. */
export default function HomeBelowFold() {
  return (
    <>
      <FleetSection />
      <ReviewsSection />
      <ServicesSection />
      <WhyDifferentSection />
      <TrustedStats />
      <HowItWorks />
      <JourneySection />
      <TopDestinationsSection />
      <TopAirportsSection />
      <FaqSection variant="home" />
    </>
  )
}
