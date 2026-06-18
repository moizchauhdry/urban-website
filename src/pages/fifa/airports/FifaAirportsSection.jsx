import FifaAirportCard from './FifaAirportCard.jsx'
import Icon from '../../../components/common/Icon.jsx'
import { FIFA_AIRPORT_FEATURES, FIFA_AIRPORTS } from './fifaAirports.js'

/** Airports covered for FIFA 2026 transfers. */
export default function FifaAirportsSection() {
  return (
    <section className="section fifa-airports scroll-reveal-section">
      <div className="container">
        <div className="fifa-airports__head">
          <h2 className="fifa-airports__title">Airports We Cover For FIFA 2026</h2>
          <p className="fifa-airports__sub">
            Seamless chauffeured transfers from every major gateway near a FIFA 2026 host city. Your driver tracks your
            flight, greets you at arrivals, and delivers you in quiet luxury.
          </p>
        </div>

        <div className="fifa-airports__features" aria-label="Airport service highlights">
          {FIFA_AIRPORT_FEATURES.map(({ icon, label }) => (
            <span className="fifa-airports__feature" key={label}>
              <Icon name={icon} size={14} />
              {label}
            </span>
          ))}
        </div>

        <div className="fifa-airports__grid">
          {FIFA_AIRPORTS.map((airport) => (
            <FifaAirportCard key={airport.code} {...airport} />
          ))}
        </div>

        <div className="fifa-airports__cta">
          <p className="fifa-airports__cta-text">
            Don&apos;t see your airport? We cover every FIFA 2026 gateway in North America.
          </p>
          <a href="#hero-booking" className="fifa-airports__cta-btn">
            Request Airport Transfer →
          </a>
        </div>
      </div>
    </section>
  )
}
