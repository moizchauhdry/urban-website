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
          <div className="airport-card fl-a1">
            <div className="airport-card-body">
              <h3>MIA</h3>
              <p>Airport</p>
            </div>
          </div>
          <div className="airport-card fl-a2">
            <div className="airport-card-body">
              <h3>FLL</h3>
              <p>Airport</p>
            </div>
          </div>
          <div className="airport-card fl-a3">
            <div className="airport-card-body">
              <h3>MCO</h3>
              <p>Airport</p>
            </div>
          </div>
          <div className="airport-card fl-a4">
            <div className="airport-card-body">
              <h3>TPA</h3>
              <p>Airport</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
