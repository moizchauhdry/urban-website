
import FleetHero from './FleetHero.jsx'
import FleetVehicles from './FleetVehicles.jsx'
import TrustedStats from '../connecticut/trusted-stats/TrustedStats.jsx'
import FleetReviewsSection from './FleetReviewsSection.jsx'

/** Dedicated fleet page — hero, vehicle grid, trust stats, and reviews. */
export default function FleetPage() {


  return (
    <>
      <FleetHero />
      <FleetVehicles />
      <TrustedStats />
      <FleetReviewsSection />
    </>
  )
}
