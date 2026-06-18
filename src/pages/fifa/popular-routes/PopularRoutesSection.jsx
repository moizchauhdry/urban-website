import PopularRouteCard from './PopularRouteCard.jsx'
import { POPULAR_ROUTES } from './popularRoutes.js'

/** Popular FIFA 2026 route cards. */
export default function PopularRoutesSection() {
  return (
    <section className="section fifa-routes scroll-reveal-section">
      <div className="container">
        <div className="fifa-routes__head">
          <span className="fifa-routes__tag">Top Routes</span>
          <h2 className="fifa-routes__title">Popular FIFA 2026 Routes</h2>
          <p className="fifa-routes__sub">
            Pre-planned match-day corridors — the fastest, most reliable way to every venue.
          </p>
        </div>

        <div className="fifa-routes__grid">
          {POPULAR_ROUTES.map((route) => (
            <PopularRouteCard key={route.id} {...route} />
          ))}
        </div>
      </div>
    </section>
  )
}
