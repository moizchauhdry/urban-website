import { FLEET_CATEGORIES } from '../../constants/fleetCategories.js'

/**
 * @param {{ active: string, onChange: (id: string) => void }} props
 */
export default function FleetCategoryTabs({ active, onChange }) {
  return (
    <div className="fleet-category-tabs" role="tablist" aria-label="Fleet categories">
      <div className="fleet-category-tabs__track">
        {FLEET_CATEGORIES.map((cat) => {
          const isActive = cat.id === active
          return (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`fleet-category-tabs__btn${isActive ? ' is-active' : ''}`}
              onClick={() => onChange(cat.id)}
            >
              {cat.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
