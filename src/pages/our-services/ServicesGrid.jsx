import ServicePageCard from './ServicePageCard.jsx'
import { SERVICE_PAGE_ITEMS } from './serviceItems.js'

/** @param {typeof SERVICE_PAGE_ITEMS} items */
function groupServiceItems(items) {
  const groups = []
  for (let i = 0; i < items.length; i += 3) {
    groups.push(items.slice(i, i + 3))
  }
  return groups
}

/** Service categories grid for the Our Services page. */
export default function ServicesGrid() {
  const groups = groupServiceItems(SERVICE_PAGE_ITEMS)

  return (
    <section className="section services-page-section">
      <div className="container">
        <h1 className="section-title">Explore Our Wide Range Services</h1>
        <p className="section-sub">
          Experience the future of mobility with our cutting-edge fleet, premium vehicles and seamless
          experience.
        </p>

        <div className="services-page-grid">
          {groups.map((group) => {
            const isPair = group.length < 3
            const mosaicClass = isPair
              ? 'services-page-mosaic services-page-mosaic--pair'
              : 'services-page-mosaic'

            return (
              <div key={group.map((item) => item.id).join('-')} className={mosaicClass}>
                {group.map((item, index) => (
                  <ServicePageCard
                    key={item.id}
                    title={item.title}
                    tag={item.tag}
                    image={item.image}
                    featured={!isPair && index === 0}
                  />
                ))}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
