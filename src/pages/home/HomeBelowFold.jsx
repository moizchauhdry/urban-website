import Fleet from '../connecticut/fleet/Fleet.jsx'
import ReviewsSection from '../connecticut/reviews/ReviewsSection.jsx'
import Services from '../connecticut/services/Services.jsx'
import WhyDifferent from '../connecticut/why-different/WhyDifferent.jsx'
import TrustedStats from '../connecticut/trusted-stats/TrustedStats.jsx'
import HowItWorks from '../connecticut/how-it-works/HowItWorks.jsx'
import JourneySection from '../connecticut/journey/JourneySection.jsx'
import TopDestinationsSection from './TopDestinationsSection.jsx'
import TopAirportsSection from './TopAirportsSection.jsx'
import HomeFaqSection from './HomeFaqSection.jsx'

/** Below-the-fold home sections — lazy-loaded after hero paints. */
export default function HomeBelowFold() {
  return (
    <>
      <Fleet />
      <ReviewsSection />
      <Services />
      <WhyDifferent />
      <TrustedStats />
      <HowItWorks />
      <JourneySection />
      <TopDestinationsSection />
      <TopAirportsSection />
      <HomeFaqSection />
    </>
  )
}
