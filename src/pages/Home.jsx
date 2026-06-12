import { useEffect } from 'react'
import Hero from '../components/sections/Hero.jsx'
import LazyInView from '../components/common/LazyInView.jsx'

const loadFleet = () => import('../components/sections/Fleet.jsx')
const loadWhyDifferent = () => import('../components/sections/WhyDifferent.jsx')
const loadPlanningBanner = () => import('../components/sections/PlanningBanner.jsx')
const loadReviewsSection = () => import('../components/sections/ReviewsSection.jsx')
const loadServices = () => import('../components/sections/Services.jsx')
const loadContentBlocks = () => import('../components/sections/ContentBlocks.jsx')
const loadTrustedStats = () => import('../components/sections/TrustedStats.jsx')
const loadHowItWorks = () => import('../components/sections/HowItWorks.jsx')
const loadJourneySection = () => import('../components/sections/JourneySection.jsx')
const loadAirportsSection = () => import('../components/sections/AirportsSection.jsx')
const loadFaqSection = () => import('../components/sections/FaqSection.jsx')

export default function Home() {
  useEffect(() => {
    document.title =
      'Reliable Connecticut Car Service for Airports and Long Distance Travel | Urban Elite Limo'
  }, [])

  return (
    <>
      <Hero />
      <LazyInView load={loadFleet} />
      <LazyInView load={loadWhyDifferent} />
      <LazyInView load={loadPlanningBanner} />
      <LazyInView load={loadReviewsSection} />
      <LazyInView load={loadServices} />
      <LazyInView load={loadContentBlocks} />
      <LazyInView load={loadTrustedStats} />
      <LazyInView load={loadHowItWorks} />
      <LazyInView load={loadJourneySection} />
      <LazyInView load={loadAirportsSection} />
      <LazyInView load={loadFaqSection} />
    </>
  )
}
