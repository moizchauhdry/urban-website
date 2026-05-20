/**
 * “Our Services” grid (used on Home and Services page).
 */
export default function Services() {
  return (
    <section className="section bg-muted-services">
      <div className="container">
        <h2 className="section-title">Our services</h2>
        <p className="section-sub">
          From airport rides to city travel, we&apos;ve got every trip covered with comfort and style.
        </p>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-img s1" />
            <div className="service-body">
              <h3>Christmas Car Service</h3>
              <p>
                Enjoy premium holiday transportation with professional chauffeurs ensuring comfort, safety, and reliable
                group travel for festive events, family gatherings, and seasonal celebrations.
              </p>
            </div>
          </div>
          <div className="service-card">
            <div className="service-img s2" />
            <div className="service-body">
              <h3>Prom & Parties Transfers</h3>
              <p>
                Make prom and parties unforgettable with luxury vehicles, professional chauffeurs, and safe, premium
                rides ensuring a night full of memories.
              </p>
            </div>
          </div>
          <div className="service-card">
            <div className="service-img s3" />
            <div className="service-body">
              <h3>Pier & Cruise Transfers</h3>
              <p>
                Begin your cruise travel stress-free with timely, comfortable port transfers provided by professional,
                courteous chauffeurs ensuring smooth travel.
              </p>
            </div>
          </div>
          <div className="service-card">
            <div className="service-img s4" />
            <div className="service-body">
              <h3>Events & Entertainment Service</h3>
              <p>
                Premium car service for concerts, events, or shows with chauffeurs delivering luxury, safety, and
                reliable group travel every time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
