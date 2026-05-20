import { useMemo, useState } from 'react'
import { getExampleNumber } from 'libphonenumber-js/max'
import examples from 'libphonenumber-js/examples.mobile.json'
import PhoneInput, { getCountries, getCountryCallingCode } from 'react-phone-number-input/max'
import en from 'react-phone-number-input/locale/en.json'
import heroBg from '../../assets/icons/hero-bg.svg'
import {
  HERO_BOOKING_INITIAL,
  buildHeroBookingPayload,
  submitHeroBooking,
} from '../../services/heroBooking.js'

function nationalExamplePlaceholder(country) {
  if (!country) return 'Enter a phone number'
  try {
    const n = getExampleNumber(country, examples)
    return n ? n.formatNational() : 'Enter a phone number'
  } catch {
    return 'Enter a phone number'
  }
}

function buildLabelsWithCallingCodes() {
  const out = { ...en }
  for (const country of getCountries()) {
    try {
      const dial = getCountryCallingCode(country)
      const name = en[country] || country
      out[country] = `${name} +${dial}`
    } catch {
      /* keep default label */
    }
  }
  return out
}

/**
 * Connecticut hero + booking card (same markup/classes as the PHP include).
 * Hero background: `hero-bg.svg` only (bundled by Vite).
 */
export default function Hero() {
  const [phone, setPhone] = useState(undefined)
  const [phoneCountry, setPhoneCountry] = useState('US')
  const phoneLabels = useMemo(() => buildLabelsWithCallingCodes(), [])
  const phonePlaceholder = useMemo(() => nationalExamplePlaceholder(phoneCountry), [phoneCountry])
  const [formData, setFormData] = useState(HERO_BOOKING_INITIAL)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleBookingType = (bookingType) => {
    setFormData((prev) => ({ ...prev, bookingType }))
  }

  const resetForm = () => {
    setFormData({ ...HERO_BOOKING_INITIAL })
    setPhone(undefined)
    setPhoneCountry('US')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = buildHeroBookingPayload({
      ...formData,
      phone: phone || formData.phone,
    })

    setIsSubmitting(true)
    try {
      await submitHeroBooking(payload)
      resetForm()
      window.alert('Booking submitted!')
    } catch (err) {
      console.error('[Hero booking]', err)
      window.alert('Something went wrong. Please try again or call (888) 881-6610.')
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <i className="fa-solid fa-star" /> Rated #1 car and Limo Service
          </div>
          <h1>Premium Connecticut Car Service</h1>
          <p className="hero-desc">
            Travel in comfort with a Connecticut car service designed for people who want a smooth and stress free
            experience. From local trips to airport rides our drivers make every journey easy. Enjoy calm pickups,
            friendly service and dependable transport to JFK , LGA or NYC without rushing or worrying about traffic.
            Your ride stays simple, safe and well planned.
          </p>
          <a href="tel:8888816610" className="hero-phone">
            <i className="fa-solid fa-phone" /> (888) 881-6610
          </a>
          <div className="hero-features">
            <div className="feat">
              <i className="fa-solid fa-shield-halved" /> Licensed & Insured
            </div>
            <div className="feat">
              <i className="fa-solid fa-car" /> Latest Model Fleet
            </div>
            <div className="feat">
              <i className="fa-solid fa-id-card" /> Licensed Chauffeurs
            </div>
            <div className="feat">
              <i className="fa-solid fa-plane" /> flight monitoring
            </div>
          </div>
        </div>

        <div className="booking-card">
          <div className="form-tabs">
            <button
              type="button"
              className={`form-tab${formData.bookingType === 'distance' ? ' active' : ''}`}
              data-tab="distance"
              onClick={() => handleBookingType('distance')}
            >
              Distance
            </button>
            <button
              type="button"
              className={`form-tab${formData.bookingType === 'hourly' ? ' active' : ''}`}
              data-tab="hourly"
              onClick={() => handleBookingType('hourly')}
            >
              Hourly
            </button>
          </div>
          <form className="form-grid" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name*</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                autoComplete="name"
                required
              />
            </div>
            <div className="form-group">
              <label>Email*</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                required
              />
            </div>
            <div className="form-group form-group-phone">
              <label htmlFor="hero-phone">Phone Number*</label>
              <PhoneInput
                id="hero-phone"
                name="phone"
                className="hero-phone-input"
                defaultCountry="US"
                countryOptionsOrder={['US', 'GB', 'CA', '…']}
                labels={phoneLabels}
                placeholder={phonePlaceholder}
                international={false}
                countryCallingCodeEditable={false}
                limitMaxLength
                smartCaret
                value={phone}
                onChange={setPhone}
                onCountryChange={(c) => setPhoneCountry(c || 'US')}
                autoComplete="tel-national"
                required
              />
            </div>
            <div className="form-group">
              <label>Select Date*</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Select Time*</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Select Fleet</label>
              <select name="fleet" value={formData.fleet} onChange={handleChange}>
                <option value="">—Please choose an option—</option>
                <option value="Economy Sedan">Economy Sedan</option>
                <option value="Luxury Sedan">Luxury Sedan</option>
                <option value="Mini SUV">Mini SUV</option>
                <option value="Full-Size SUVs">Full-Size SUVs</option>
                <option value="Premium SUVs">Premium SUVs</option>
                <option value="Sprinter Van">Sprinter Van</option>
                <option value="Stretch Limo">Stretch Limo</option>
              </select>
            </div>
            <div className="form-group">
              <label>Pick-up</label>
              <input
                type="text"
                name="pickup"
                value={formData.pickup}
                onChange={handleChange}
                autoComplete="street-address"
              />
            </div>
            <div className="form-group">
              <label>Destination</label>
              <input
                type="text"
                name="destination"
                value={formData.destination}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Service Type</label>
              <select name="serviceType" value={formData.serviceType} onChange={handleChange}>
                <option value="">—Please choose an option—</option>
                <option value="Airport Pickup">Airport Pickup</option>
                <option value="Airport Dropoff">Airport Dropoff</option>
                <option value="Sight Seeing">Sight Seeing</option>
                <option value="Night Out">Night Out</option>
                <option value="Wedding">Wedding</option>
                <option value="Party">Party</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div className="form-group">
              <label>Travel</label>
              <select name="travel" value={formData.travel} onChange={handleChange}>
                <option value="">—Please choose an option—</option>
                <option value="One way">One way</option>
                <option value="Round Trip">Round Trip</option>
              </select>
            </div>
            <div className="form-group-pair-inline-mobile">
              <div className="form-group">
                <label>No of Passenger</label>
                <input
                  type="number"
                  name="passengers"
                  value={formData.passengers}
                  onChange={handleChange}
                  min="1"
                />
              </div>
              <div className="form-group">
                <label>No of Luggage</label>
                <input
                  type="number"
                  name="luggage"
                  value={formData.luggage}
                  onChange={handleChange}
                  min="0"
                />
              </div>
            </div>
            <button type="submit" className="btn-submit full" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting…' : 'Book Now!'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
