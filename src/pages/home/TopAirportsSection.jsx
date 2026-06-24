import AirportCard from './AirportCard.jsx'
import HomeStepCarousel from '../../components/common/HomeStepCarousel.jsx'
import { HOME_AIRPORT_ITEMS } from './airportItems.js'

/** Top airports — split layout; cards step left every 1s after a 1s pause. */
export default function TopAirportsSection() {
  return (
    <section className="home-airports-section">
      <div className="container home-airports-layout">
        <div className="home-airports-copy">
          <h2 className="section-title">Top Airports</h2>
          <p className="section-sub">
            Whether you&apos;re catching an early flight or arriving after a long journey, our airport transportation
            ensures a smooth and reliable ride. Travel in comfort with professional chauffeurs, punctual pickups, and
            luxury vehicles tailored for business travelers, families, and frequent flyers.
          </p>
        </div>

        <HomeStepCarousel
          className="home-airports-carousel"
          viewportClassName="home-airports-carousel-viewport"
          variant="airports"
          fixedCardWidth={200}
          loop
          items={HOME_AIRPORT_ITEMS}
          renderItem={(item) => <AirportCard code={item.code} image={item.image} />}
          startDelayMs={1000}
          stepIntervalMs={1000}
        />
      </div>
    </section>
  )
}
