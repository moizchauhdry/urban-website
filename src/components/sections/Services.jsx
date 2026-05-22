import ServicesCarousel from '../services/ServicesCarousel.jsx'

/**
 * “Our Services” carousel (Home and Services page).
 */
export default function Services() {
  return (
    <section className="section bg-muted-services">
      <div className="container">
        <ServicesCarousel />
      </div>
    </section>
  )
}
