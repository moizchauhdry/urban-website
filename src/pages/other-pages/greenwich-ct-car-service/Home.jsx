
import Hero from './hero/Hero.jsx'
import Fleet from './fleet/Fleet.jsx'
import WhyDifferent from './why-different/WhyDifferent.jsx'
import PlanningBanner from './planning-banner/PlanningBanner.jsx'
import ReviewsSection from './reviews/ReviewsSection.jsx'
import Services from './services/Services.jsx'
import RouteCards from './route-cards/RouteCards.jsx'
import TrustedStats from './trusted-stats/TrustedStats.jsx'
import HowItWorks from './how-it-works/HowItWorks.jsx'
import JourneySection from './journey/JourneySection.jsx'
import AirportsSection from './airports/AirportsSection.jsx'
import FaqSection from './faqs/FaqSection.jsx'

/** Greenwich CT Car Service landing page. */
export default function Home() {

  return (
    <>
      <Hero />
      <Fleet />
      <WhyDifferent />
      <PlanningBanner />
      <ReviewsSection />
      <Services />
      <RouteCards />
      <TrustedStats />
      <HowItWorks />
      <JourneySection />
      <AirportsSection />
      <FaqSection />
    </>
  )
}
