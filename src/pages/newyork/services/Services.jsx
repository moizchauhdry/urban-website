import ServicesCarousel from '../../../components/carousels/ServicesCarousel.jsx'
import { SERVICE_ITEMS } from './serviceItems.js'

/**
 * “Our Services” carousel (Home and Services page).
 */
export default function Services() {
  return (
    <section className="section bg-muted-services">
      <div className="container">
        <ServicesCarousel items={SERVICE_ITEMS} />
      </div>
    </section>
  )
}
