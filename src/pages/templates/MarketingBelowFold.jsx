import FleetSection from '../../components/sections/FleetSection.jsx'
import WhyDifferentSection from '../../components/sections/WhyDifferentSection.jsx'
import PlanningBanner from '../../components/sections/PlanningBanner.jsx'
import ReviewsSection from '../../components/sections/ReviewsSection.jsx'
import ServicesSection from '../../components/sections/ServicesSection.jsx'
import RouteCardsSection from '../../components/route-cards/RouteCardsSection.jsx'
import TrustedStats from '../../components/sections/TrustedStats.jsx'
import HowItWorks from '../../components/sections/HowItWorks.jsx'
import JourneySection from '../../components/sections/JourneySection.jsx'
import RegionalAirportsSection from '../../components/sections/RegionalAirportsSection.jsx'
import FaqSection from '../../components/sections/FaqSection.jsx'

/**
 * Below-the-fold stack shared by all marketing landings (hubs + SEO pages).
 *
 * @param {{
 *   routeCardsKey: string
 *   airportsKey: string
 * }} props
 */
export default function MarketingBelowFold({
  routeCardsKey,
  airportsKey,
}) {
  return (
    <>
      <FleetSection />
      <WhyDifferentSection />
      <PlanningBanner />
      <ReviewsSection />
      <ServicesSection />
      <RouteCardsSection pageKey={routeCardsKey} />
      <TrustedStats />
      <HowItWorks />
      <JourneySection />
      <RegionalAirportsSection pageKey={airportsKey} />
      <FaqSection />
    </>
  )
}
