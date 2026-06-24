
import Hero from './hero/Hero.jsx'
import MatchDayServices from './match-day-services/MatchDayServices.jsx'
import FifaAirportsSection from './airports/FifaAirportsSection.jsx'
import PopularRoutesSection from './popular-routes/PopularRoutesSection.jsx'
import JourneySection from './journey/JourneySection.jsx'
import StadiumCoverageSection from './stadium-coverage/StadiumCoverageSection.jsx'
import MatchDayExperienceSection from './match-day-experience/MatchDayExperienceSection.jsx'
import Fleet from '../connecticut/fleet/Fleet.jsx'
import WhyUsSection from './why-us/WhyUsSection.jsx'
import BeautifulGameSection from './beautiful-game/BeautifulGameSection.jsx'
import ReviewsSection from '../connecticut/reviews/ReviewsSection.jsx'
import DontMissOutSection from './dont-miss-out/DontMissOutSection.jsx'

/** FIFA World Cup 2026 landing page (preview at /fifa — not in main nav). */
export default function Home() {

  return (
    <>
      <Hero />
      <MatchDayServices />
      <MatchDayExperienceSection />
      <Fleet
        title="Match-Day Vehicle Fleet"
        subtitle="From solo fans to 56-person groups find the right vehicle for your FIFA experience."
      />
      <FifaAirportsSection />
      <PopularRoutesSection />
      <JourneySection />
      <StadiumCoverageSection />
      <WhyUsSection />
      <ReviewsSection />
      <BeautifulGameSection />
      <DontMissOutSection />
    </>
  )
}
