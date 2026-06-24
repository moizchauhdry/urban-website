import { useMemo, useState } from 'react'
import Icon from '../../components/common/Icon.jsx'
import { FleetCard } from '../../components/carousels/FleetCard.jsx'
import FleetCategoryTabs from '../../components/fleet/FleetCategoryTabs.jsx'
import { filterFleetByCategory } from '../../constants/fleetCategories.js'
import { fleetPageItems } from './fleetItems.js'

/** Vehicle grid section for the dedicated fleet page. */
export default function FleetVehicles() {
  const [category, setCategory] = useState('sedan')
  const visibleItems = useMemo(
    () => filterFleetByCategory(fleetPageItems, category),
    [category],
  )

  return (
    <section className="section fleet-page-section">
      <div className="container">
        <div className="center-tag">
          <span className="section-tag section-tag--fleet">
            <Icon name="car-side" size={14} className="section-tag__icon" />
            Our Fleet
          </span>
        </div>
        <h1 className="section-title">Find Your Perfect Vehicle Type</h1>
        <p className="section-sub">
          Reliability and comfort are guaranteed. We have the latest model fleet to ensure a safe,
          sophisticated and luxury travel experience on every trip.
        </p>

        <FleetCategoryTabs active={category} onChange={setCategory} />

        <div className="fleet-grid fleet-page-grid">
          {visibleItems.map((item, index) => (
            <FleetCard key={item.id} item={item} priorityLoad={index < 3} />
          ))}
        </div>
      </div>
    </section>
  )
}
