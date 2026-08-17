import ServiceCard from '../carousels/ServiceCard.jsx'
import ServicesMobileCarousel from '../carousels/ServicesMobileCarousel.jsx'
import { useMobileLayout } from '../../hooks/useMobileLayout.js'

/**
 * @param {{ items?: Array<{ id: string, title: string, description: string, imageClass: string }> }} props
 */
export default function ServicesShowcase({ items = [] }) {
  const isMobile = useMobileLayout()

  if (!items.length) return null

  return (
    <div className="services-showcase">
      <h2 className="services-showcase__heading">Our Services</h2>
      <p className="services-showcase__sub">
        From airport rides to city travel, we&apos;ve got every trip covered with comfort and style.
      </p>
      {isMobile ? (
        <ServicesMobileCarousel items={items} />
      ) : (
        <div className="services-showcase__grid">
          {items.map((item) => (
            <ServiceCard
              key={item.id}
              title={item.title}
              description={item.description}
              imageClass={item.imageClass}
            />
          ))}
        </div>
      )}
    </div>
  )
}
