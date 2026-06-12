/**
 * Inert booking layout matching HeroBookingForm (distance tab) for stable slot height
 * while the lazy phone-input chunk loads — same classes, no interaction.
 */
export default function HeroBookingFormShell() {
  return (
    <div className="booking-card booking-card--shell" aria-hidden="true">
      <div className="form-tabs">
        <span className="form-tab active">Distance</span>
        <span className="form-tab">Hourly</span>
      </div>
      <div className="form-grid">
        <div className="form-group">
          <label>Name*</label>
          <input type="text" readOnly tabIndex={-1} defaultValue="" />
        </div>
        <div className="form-group">
          <label>Email*</label>
          <input type="email" readOnly tabIndex={-1} defaultValue="" />
        </div>
        <div className="form-group form-group-phone">
          <label>Phone Number*</label>
          <div className="booking-phone-shell">
            <input type="text" readOnly tabIndex={-1} defaultValue="" />
          </div>
        </div>
        <div className="form-group">
          <label>Select Date*</label>
          <input type="date" readOnly tabIndex={-1} defaultValue="" />
        </div>
        <div className="form-group">
          <label>Select Time*</label>
          <input type="time" readOnly tabIndex={-1} defaultValue="" />
        </div>
        <div className="form-group">
          <label>Select Fleet*</label>
          <select disabled tabIndex={-1} defaultValue="">
            <option value="">Loading fleet options…</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="hero-pickup-shell">Pick-up</label>
          <input
            id="hero-pickup-shell"
            type="text"
            readOnly
            tabIndex={-1}
            placeholder="Search pick-up address"
            defaultValue=""
          />
        </div>
        <div className="form-group">
          <label htmlFor="hero-destination-shell">Destination</label>
          <input
            id="hero-destination-shell"
            type="text"
            readOnly
            tabIndex={-1}
            placeholder="Search destination address"
            defaultValue=""
          />
        </div>
        <div className="form-group">
          <label>Service Type</label>
          <select disabled tabIndex={-1} defaultValue="">
            <option value="">—Please choose an option—</option>
          </select>
        </div>
        <div className="form-group">
          <label>Travel</label>
          <select disabled tabIndex={-1} defaultValue="">
            <option value="">—Please choose an option—</option>
          </select>
        </div>
        <div className="form-group-pair-inline-mobile">
          <div className="form-group">
            <label>No of Passenger</label>
            <input type="number" readOnly tabIndex={-1} defaultValue="" />
          </div>
          <div className="form-group">
            <label>No of Luggage</label>
            <input type="number" readOnly tabIndex={-1} defaultValue="" />
          </div>
        </div>
        <button type="button" className="btn-submit full" tabIndex={-1}>
          Book Now!
        </button>
      </div>
    </div>
  )
}
