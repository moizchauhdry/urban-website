import WhyUsCard from './WhyUsCard.jsx'
import { WHY_US_ITEMS } from './whyUsItems.js'

/** Why Us grid for the FIFA landing page. */
export default function WhyUsSection() {
  return (
    <section className="section fifa-why-us scroll-reveal-section">
      <div className="container">
        <div className="fifa-why-us__head">
          <span className="fifa-why-us__tag">Why Us</span>
          <h2 className="fifa-why-us__title">Airports We Cover For FIFA 2026</h2>
          <p className="fifa-why-us__sub">
            Seamless chauffeured transfers from every major gateway near a FIFA 2026 host city. Your driver tracks your
            flight, greets you at arrivals, and delivers you in quiet luxury.
          </p>
        </div>

        <div className="fifa-why-us__grid">
          {WHY_US_ITEMS.map((item) => (
            <WhyUsCard key={item.id} icon={item.icon} title={item.title} description={item.description} />
          ))}
        </div>
      </div>
    </section>
  )
}
