export default function HowItWorks() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">how it works</h2>
        <p className="section-sub">Book a Ride in 3 simple steps. It&apos;s that easy!</p>
        <div className="steps-grid">
          <div className="step">
            <div className="step-icon">
              <i className="fa-solid fa-car-side" />
            </div>
            <h3>Choose Your Car</h3>
            <p>Browse our premium fleet and select the perfect vehicle for your needs.</p>
          </div>
          <div className="step">
            <div className="step-icon">
              <i className="fa-solid fa-calendar-check" />
            </div>
            <h3>Book Instantly</h3>
            <p>Complete your reservation in under 2 minutes with our streamlined process.</p>
          </div>
          <div className="step">
            <div className="step-icon">
              <i className="fa-solid fa-route" />
            </div>
            <h3>Enjoy your Ride</h3>
            <p>Chauffeur assigned to your Ride and start your journey.</p>
          </div>
        </div>
        <div className="how-works-cta">
          <a href="#" className="btn-yellow">
            Get a Free Quote
          </a>
        </div>
      </div>
    </section>
  )
}
