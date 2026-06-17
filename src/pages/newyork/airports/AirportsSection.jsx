export default function AirportsSection() {
  return (
    <section className="airports">
      <div className="container">
        <h2 className="section-title">Top Airports</h2>
        <p className="section-sub">
          Whether you&apos;re catching an early flight or arriving after a long journey, our airport transportation ensures
          a smooth and reliable ride. Travel in comfort with professional chauffeurs, punctual pickups, and luxury vehicles
          tailored for business travelers, families, and frequent flyers.
        </p>
        <div className="airports-grid">
          <div className="airport-card ny-a1">
            <div className="airport-card-body">
              <h3>JFK</h3>
              <p>Airport</p>
            </div>
          </div>
          <div className="airport-card ny-a2">
            <div className="airport-card-body">
              <h3>LGA</h3>
              <p>Airport</p>
            </div>
          </div>
          <div className="airport-card ny-a3">
            <div className="airport-card-body">
              <h3>EWR</h3>
              <p>Airport</p>
            </div>
          </div>
          <div className="airport-card ny-a4">
            <div className="airport-card-body">
              <h3>HPN</h3>
              <p>Airport</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
