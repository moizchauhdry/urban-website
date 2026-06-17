import Icon from '../../components/common/Icon.jsx'
import ServicePageCard from './ServicePageCard.jsx'
import { SERVICE_PAGE_ITEMS } from './serviceItems.js'

/** Service categories grid for the Our Services page. */
export default function ServicesGrid() {
  return (
    <section className="section services-page-section">
      <div className="container">
        <div className="center-tag">
          <span className="section-tag section-tag--services">
            <Icon name="car-side" size={14} className="section-tag__icon" />
            Vehicle Categories
          </span>
        </div>
        <h1 className="section-title">Explore Our Wide Range Services</h1>
        <p className="section-sub">
          Experience the future of mobility with our cutting-edge fleet, premium vehicles and seamless
          experience.
        </p>

        <div className="services-page-grid">
          {SERVICE_PAGE_ITEMS.map((item) => (
            <ServicePageCard
              key={item.id}
              title={item.title}
              description={item.description}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
