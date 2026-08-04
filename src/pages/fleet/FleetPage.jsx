
import FleetHero from './FleetHero.jsx'
import FleetVehicles from './FleetVehicles.jsx'
import TrustedStats from '../../components/sections/TrustedStats.jsx'
import ReviewsSection from '../../components/sections/ReviewsSection.jsx'

/** Dedicated fleet page — hero, vehicle grid, trust stats, and reviews. */
export default function FleetPage() {


  return (
    <>
      <FleetHero />
      <FleetVehicles />
      <TrustedStats />
      <ReviewsSection variant="fleet" />
    </>
  )
}
