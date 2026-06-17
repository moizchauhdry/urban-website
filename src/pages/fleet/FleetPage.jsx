import { useEffect } from 'react'
import FleetHero from './FleetHero.jsx'
import FleetVehicles from './FleetVehicles.jsx'
import TrustedStats from '../connecticut/trusted-stats/TrustedStats.jsx'
import FleetReviewsSection from './FleetReviewsSection.jsx'

/** Dedicated fleet page — hero, vehicle grid, trust stats, and reviews. */
export default function FleetPage() {
  useEffect(() => {
    document.title = 'Our Fleet | Urban Elite Limo'
  }, [])

  return (
    <>
      <FleetHero />
      <FleetVehicles />
      <TrustedStats />
      <FleetReviewsSection />
    </>
  )
}
