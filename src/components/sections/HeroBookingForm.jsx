import { useEffect, useMemo, useState } from 'react'
import { getExampleNumber } from 'libphonenumber-js/max'
import examples from 'libphonenumber-js/examples.mobile.json'
import PhoneInput, { getCountries, getCountryCallingCode } from 'react-phone-number-input/max'
import en from 'react-phone-number-input/locale/en.json'
import 'react-phone-number-input/style.css'
import {
  HERO_BOOKING_INITIAL,
  buildHeroBookingPayload,
  fetchBookingFleetOptions,
  submitHeroBooking,
} from '../../services/heroBooking.js'
import PlacesAutocompleteInput from '../common/PlacesAutocompleteInput.jsx'

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

/** Hero booking card — lazy-loaded (phone input + Google Places). */
export default function HeroBookingForm() {
  const [phone, setPhone] = useState(undefined)
  const [phoneCountry, setPhoneCountry] = useState('US')
  const phoneLabels = useMemo(() => buildLabelsWithCallingCodes(), [])
  const phonePlaceholder = useMemo(() => nationalExamplePlaceholder(phoneCountry), [phoneCountry])
  const [formData, setFormData] = useState(HERO_BOOKING_INITIAL)
  const [fleetOptions, setFleetOptions] = useState([])
  const [fleetOptionsError, setFleetOptionsError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    let cancelled = false

    fetchBookingFleetOptions()
      .then((options) => {
        if (!cancelled) {
          setFleetOptions(options)
          setFleetOptionsError('')
        }
      })
      .catch((err) => {
        if (!cancelled) {
          console.error('[Hero booking] fleet options', err)
          setFleetOptionsError('Fleet options could not be loaded. Please refresh or call (888) 881-6610.')
        }
      })

    return () => {
      cancelled = true
    }
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleBookingType = (bookingType) => {
    setFormData((prev) => ({
      ...prev,
      bookingType,
      hours: bookingType === 'hourly' ? prev.hours : '',
    }))
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
    } catch (err) {
      console.error('[Hero booking]', err)
      window.alert(
        err instanceof Error ? err.message : 'Something went wrong. Please try again or call (888) 881-6610.',
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
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
          <input type="text" name="name" value={formData.name} onChange={handleChange} autoComplete="name" required />
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
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Select Time*</label>
          <input type="time" name="time" value={formData.time} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Select Fleet*</label>
          <select
            name="fleet"
            value={formData.fleet}
            onChange={handleChange}
            required
            disabled={fleetOptions.length === 0}
          >
            <option value="">
              {fleetOptions.length === 0 ? 'Loading fleet options…' : '—Please choose an option—'}
            </option>
            {fleetOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {fleetOptionsError ? (
            <p className="places-autocomplete-hint places-autocomplete-hint--error">{fleetOptionsError}</p>
          ) : null}
        </div>
        {formData.bookingType === 'hourly' && (
          <div className="form-group full">
            <label htmlFor="hero-hours">Hours*</label>
            <input
              id="hero-hours"
              type="number"
              name="hours"
              value={formData.hours}
              onChange={handleChange}
              min="1"
              step="1"
              placeholder="Number of hours"
              required
            />
          </div>
        )}
        <div className="form-group">
          <label htmlFor="hero-pickup">Pick-up</label>
          <PlacesAutocompleteInput
            id="hero-pickup"
            name="pickup"
            value={formData.pickup}
            onChange={handleChange}
            placeholder="Search pick-up address"
          />
        </div>
        <div className="form-group">
          <label htmlFor="hero-destination">Destination</label>
          <PlacesAutocompleteInput
            id="hero-destination"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            placeholder="Search destination address"
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
            <input type="number" name="passengers" value={formData.passengers} onChange={handleChange} min="1" />
          </div>
          <div className="form-group">
            <label>No of Luggage</label>
            <input type="number" name="luggage" value={formData.luggage} onChange={handleChange} min="0" />
          </div>
        </div>
        <button type="submit" className="btn-submit full" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting…' : 'Book Now!'}
        </button>
      </form>
    </div>
  )
}
