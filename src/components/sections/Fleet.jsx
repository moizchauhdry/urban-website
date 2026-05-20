import FleetMobileCarousel from '../fleet/FleetMobileCarousel.jsx'
import { FleetCard } from '../fleet/FleetCard.jsx'
import { fleetItems } from '../../data/fleetItems.js'
import { useFleetMobileLayout } from '../../hooks/useFleetMobileLayout.js'

export default function Fleet() {
  const isMobileFleet = useFleetMobileLayout()

  return (
    <section className="section" id="fleet">
      <div className="container">
        <div className="center-tag">
          <span className="section-tag">Our Fleet</span>
        </div>
        <h2 className="section-title">
          Find your perfect
          <br />
          vehicle type
        </h2>
        <p className="section-sub">
          Reliability and comfort are guaranteed. We Have the latest model Fleet
          to ensure a safe, sophisticated and Luxury Travel experience on every
          trip.
        </p>

        {isMobileFleet ? (
          <FleetMobileCarousel items={fleetItems} />
        ) : (
          <div className="fleet-grid items-stretch">
            {fleetItems.map((item) => (
              <FleetCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
