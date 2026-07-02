import LandingHero from '../../../components/hero/LandingHero.jsx'
import FleetSection from '../../../components/sections/FleetSection.jsx'
import WhyDifferentSection from '../../../components/sections/WhyDifferentSection.jsx'
import PlanningBanner from '../../../components/sections/PlanningBanner.jsx'
import ReviewsSection from '../../../components/sections/ReviewsSection.jsx'
import ServicesSection from '../../../components/sections/ServicesSection.jsx'
import RouteCardsSection from '../../../components/route-cards/RouteCardsSection.jsx'
import { ROUTE_CARDS } from './route-cards/routeCardItems.js'
import TrustedStats from '../../../components/sections/TrustedStats.jsx'
import HowItWorks from '../../../components/sections/HowItWorks.jsx'
import JourneySection from '../../../components/sections/JourneySection.jsx'
import RegionalAirportsSection from '../../../components/sections/RegionalAirportsSection.jsx'
import FaqSection from '../../../components/sections/FaqSection.jsx'

/** Milwaukee to O'Hare Car Service landing page. */
export default function Home() {

  return (
    <>
      <LandingHero pageKey="milwaukee-to-ohare-car-service" />
      <FleetSection />
      <WhyDifferentSection />
      <PlanningBanner />
      <ReviewsSection />
      <ServicesSection imagePrefix="op-milwaukee-to-ohare-car-service" />
      <RouteCardsSection cards={ROUTE_CARDS} />
      <TrustedStats />
      <HowItWorks />
      <JourneySection />
      <RegionalAirportsSection pageKey="other-pages/milwaukee-to-ohare-car-service" />
      <FaqSection />
    </>
  )
}
