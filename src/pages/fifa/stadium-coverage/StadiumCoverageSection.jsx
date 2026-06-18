import StadiumCoverageCard from './StadiumCoverageCard.jsx'
import { STADIUM_COVERAGE } from './stadiumCoverage.js'

/** FIFA 2026 stadium coverage grid. */
export default function StadiumCoverageSection() {
  return (
    <section className="section fifa-stadiums scroll-reveal-section">
      <div className="container">
        <div className="fifa-stadiums__head">
          <h2 className="fifa-stadiums__title">FIFA 2026 Stadium Coverage</h2>
          <p className="fifa-stadiums__sub">
            Priority drop-off and post-match pickup at every official FIFA 2026 venue. Our chauffeurs know every stadium
            approach, security lane, and quickest exit — so your match day stays effortless from kick-off to final
            whistle.
          </p>
        </div>

        <div className="fifa-stadiums__grid">
          {STADIUM_COVERAGE.map((stadium) => (
            <StadiumCoverageCard key={stadium.id} {...stadium} />
          ))}
        </div>
      </div>
    </section>
  )
}
