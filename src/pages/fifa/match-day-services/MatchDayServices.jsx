import MatchDayServiceCard from './MatchDayServiceCard.jsx'
import { MATCH_DAY_ITEMS } from './matchDayItems.js'

/** Premium match-day services grid for the FIFA landing page. */
export default function MatchDayServices() {
  return (
    <section className="section fifa-match-day scroll-reveal-section">
      <div className="container">
        <div className="fifa-match-day__head">
          <span className="fifa-match-day__tag">The FIFA Experience</span>
          <h2 className="fifa-match-day__title">Premium Match-Day Services</h2>
          <p className="fifa-match-day__sub">
            Everything You Need For A Seamless FIFA 2026 Experience From Touchdown To Final Whistle.
          </p>
        </div>

        <div className="fifa-match-day__grid">
          {MATCH_DAY_ITEMS.map((item) => (
            <MatchDayServiceCard key={item.id} icon={item.icon} title={item.title} description={item.description} />
          ))}
        </div>
      </div>
    </section>
  )
}
