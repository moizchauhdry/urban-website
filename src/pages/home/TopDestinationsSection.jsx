import DestinationCard from './DestinationCard.jsx'
import HomeStepCarousel from '../../components/common/HomeStepCarousel.jsx'
import { DESTINATION_ITEMS } from './destinationItems.js'

/** Top destinations — contained carousel; steps left every 1s after a 1s pause. */
export default function TopDestinationsSection() {
  return (
    <section className="section home-destinations-section">
      <div className="container">
        <div className="home-destinations-head">
          <h2 className="section-title">Top Destination</h2>
          <p className="section-sub home-destinations-sub">
            From coast to coast — premium rides, no matter the city.
          </p>
        </div>

        <HomeStepCarousel
          className="home-destinations-carousel"
          controlsClassName="home-destinations-nav"
          items={DESTINATION_ITEMS}
          renderItem={(item) => (
            <DestinationCard city={item.city} state={item.state} image={item.image} />
          )}
          startDelayMs={1000}
          stepIntervalMs={1000}
        />
      </div>
    </section>
  )
}
