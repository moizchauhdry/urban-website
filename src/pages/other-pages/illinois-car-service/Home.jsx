import LandingHero from '../../../components/hero/LandingHero.jsx'
import FleetSection from '../../../components/sections/FleetSection.jsx'
import WhyDifferentSection from '../../../components/sections/WhyDifferentSection.jsx'
import PlanningBanner from '../../../components/sections/PlanningBanner.jsx'
import ReviewsSection from '../../../components/sections/ReviewsSection.jsx'
import ServicesSection from '../../../components/sections/ServicesSection.jsx'
import RouteCardsSection from '../../../components/route-cards/RouteCardsSection.jsx'
import TrustedStats from '../../../components/sections/TrustedStats.jsx'
import HowItWorks from '../../../components/sections/HowItWorks.jsx'
import JourneySection from '../../../components/sections/JourneySection.jsx'
import RegionalAirportsSection from '../../../components/sections/RegionalAirportsSection.jsx'
import FaqSection from '../../../components/sections/FaqSection.jsx'

/** Illinois Car Service landing page. */
export default function Home() {

  return (
    <>
      <LandingHero pageKey="illinois-car-service" />
      <FleetSection />
      <WhyDifferentSection />
      <PlanningBanner />
      <ReviewsSection />
      <ServicesSection imagePrefix="op-illinois-car-service" />
      <RouteCardsSection pageKey="illinois-car-service" />
      <TrustedStats />
      <HowItWorks />
      <JourneySection />
      <RegionalAirportsSection pageKey="other-pages/illinois-car-service" />
      <FaqSection />
    </>
  )
}
