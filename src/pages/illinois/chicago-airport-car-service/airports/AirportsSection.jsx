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
          <div className="airport-card il-chi-airport-a1">
            <div className="airport-card-body">
              <h3>ORD</h3>
              <p>Airport</p>
            </div>
          </div>
          <div className="airport-card il-chi-airport-a2">
            <div className="airport-card-body">
              <h3>MDW</h3>
              <p>Airport</p>
            </div>
          </div>
          <div className="airport-card il-chi-airport-a3">
            <div className="airport-card-body">
              <h3>RFD</h3>
              <p>Airport</p>
            </div>
          </div>
          <div className="airport-card il-chi-airport-a4">
            <div className="airport-card-body">
              <h3>PIA</h3>
              <p>Airport</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
