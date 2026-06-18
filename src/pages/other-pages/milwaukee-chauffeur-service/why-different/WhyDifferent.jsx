import WhyCard from './WhyCard.jsx'
import WhyMobileCarousel from '../../../../components/carousels/WhyMobileCarousel.jsx'
import { whyItems } from './whyItems.js'
import { useMobileLayout } from '../../../../hooks/useMobileLayout.js'

export default function WhyDifferent() {
  const isMobile = useMobileLayout()

  return (
    <section className="section why">
      <div className="container">
        <div className="center-tag">
          <span className="section-tag">Why you should choose Us?</span>
        </div>
        <h2 className="section-title">What Makes us Different?</h2>
        <p className="section-sub">
          Choosing Urban Elite means choosing reliability, safety, and a
          seamless experience. We handle the details so you can focus on your
          destination.
        </p>

        {isMobile ? (
          <WhyMobileCarousel items={whyItems} />
        ) : (
          <div className="why-grid">
            {whyItems.map((item) => (
              <WhyCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
