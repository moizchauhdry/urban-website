import { useEffect, useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  getThankYouPath,
  HERO_BOOKING_PREFILL_EVENT,
  resolveBookingHome,
} from '../../config/bookingNav.js'
import { getExampleNumber } from 'libphonenumber-js/min'
import examples from 'libphonenumber-js/examples.mobile.json'
import PhoneInput, { getCountries, getCountryCallingCode } from 'react-phone-number-input'
import en from 'react-phone-number-input/locale/en.json'
import {
  HERO_BOOKING_INITIAL,
  HERO_DURATION_OPTIONS,
  buildHeroBookingPayload,
  fetchBookingStoreData,
  getMinBookingDate,
  submitHeroBooking,
} from './heroBooking.js'
import PlacesAutocompleteInput from './PlacesAutocompleteInput.jsx'
import 'react-phone-number-input/style.css'

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

/** Tab keys are fixed by the submit endpoints (/distance, /hourly); labels come from the API. */
function buildBookingTypeTabs(serviceTypes) {
  const fromApi = (serviceTypes ?? [])
    .map((opt) => {
      const key = opt.label.trim().toLowerCase()
      if (key !== 'distance' && key !== 'hourly') return null
      return { key, label: opt.label.trim().replace(/^./, (c) => c.toUpperCase()) }
    })
    .filter(Boolean)

  if (fromApi.length) return fromApi
  return [
    { key: 'distance', label: 'Distance' },
    { key: 'hourly', label: 'Hourly' },
  ]
}

/** Hero booking card — Distance & Hourly tabs (lazy-loaded with phone input + Google Places). */
export default function HeroBookingForm() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [phone, setPhone] = useState(undefined)
  const [phoneCountry, setPhoneCountry] = useState('US')
  const phoneLabels = useMemo(() => buildLabelsWithCallingCodes(), [])
  const phonePlaceholder = useMemo(() => nationalExamplePlaceholder(phoneCountry), [phoneCountry])
  const [formData, setFormData] = useState(HERO_BOOKING_INITIAL)
  const [storeData, setStoreData] = useState(null)
  const [storeDataError, setStoreDataError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showFieldErrors, setShowFieldErrors] = useState(false)
  const minBookingDate = useMemo(() => getMinBookingDate(), [])

  const isHourly = formData.bookingType === 'hourly'
  const isLoadingOptions = !storeData && !storeDataError

  const bookingTypeTabs = useMemo(() => buildBookingTypeTabs(storeData?.serviceTypes), [storeData])
  const fleetOptions = storeData?.vehicles ?? []
  const serviceOptions = storeData?.services ?? []
  const travelOptions = storeData?.travelTypes ?? []

  useEffect(() => {
    const onPrefill = (event) => {
      const detail = event.detail
      if (!detail || typeof detail !== 'object') return
      setFormData((prev) => ({
        ...prev,
        ...(detail.destination != null ? { destination: detail.destination } : {}),
        ...(detail.pickup != null ? { pickup: detail.pickup } : {}),
        ...(detail.serviceType != null ? { serviceType: detail.serviceType } : {}),
      }))
    }

    window.addEventListener(HERO_BOOKING_PREFILL_EVENT, onPrefill)
    return () => window.removeEventListener(HERO_BOOKING_PREFILL_EVENT, onPrefill)
  }, [])

  useEffect(() => {
    let cancelled = false

    setStoreDataError('')
    fetchBookingStoreData()
      .then((data) => {
        if (!cancelled) {
          setStoreData(data)
          setStoreDataError('')
        }
      })
      .catch((err) => {
        if (!cancelled) {
          console.error('[Hero booking] store data', err)
          setStoreDataError(
            'Booking options could not be loaded. Please refresh or call (888) 881-6610.',
          )
        }
      })

    return () => {
      cancelled = true
    }
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === 'date' && value && value < minBookingDate) return
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleBookingType = (bookingType) => {
    setFormData((prev) => ({
      ...prev,
      bookingType,
      hours: bookingType === 'hourly' ? prev.hours : '',
      travel: bookingType === 'distance' ? prev.travel : '',
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget

    if (!form.checkValidity()) {
      setShowFieldErrors(true)
      form.querySelector(':invalid')?.focus()
      return
    }

    setShowFieldErrors(false)
    const payload = buildHeroBookingPayload({
      ...formData,
      phone: phone || formData.phone,
      // Hourly has no travel select — default to the portal's first travel type.
      travel: formData.travel || travelOptions[0]?.value || '',
    })

    setIsSubmitting(true)
    try {
      await submitHeroBooking(payload)
      const bookingHome = resolveBookingHome(pathname)
      navigate(getThankYouPath(bookingHome, { email: payload.email, phone: payload.phone }), {
        state: { returnPath: bookingHome },
      })
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
        {bookingTypeTabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            className={`form-tab${formData.bookingType === tab.key ? ' active' : ''}`}
            data-tab={tab.key}
            onClick={() => handleBookingType(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <form
        className={`form-grid${showFieldErrors ? ' form-grid--attempted' : ''}`}
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="form-group">
          <label htmlFor="hero-name">Name*</label>
          <input
            id="hero-name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            autoComplete="name"
            placeholder="Enter your full name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="hero-email">Email</label>
          <input
            id="hero-email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            placeholder="Enter your email address"
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
          <label htmlFor="hero-date">Select Date*</label>
          <input
            id="hero-date"
            type="date"
            name="date"
            value={formData.date}
            min={minBookingDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="hero-time">Select Time*</label>
          <input
            id="hero-time"
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="hero-fleet">Select Fleet*</label>
          <select
            id="hero-fleet"
            name="fleet"
            value={formData.fleet}
            onChange={handleChange}
            required
            disabled={fleetOptions.length === 0}
            className={isLoadingOptions ? 'field-loading' : undefined}
            aria-busy={isLoadingOptions}
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
          {storeDataError ? (
            <p className="places-autocomplete-hint places-autocomplete-hint--error">{storeDataError}</p>
          ) : null}
        </div>

        {isHourly ? (
          <>
            <div className="form-group">
              <label htmlFor="hero-duration">Duration*</label>
              <select
                id="hero-duration"
                name="hours"
                value={formData.hours}
                onChange={handleChange}
                required
              >
                <option value="">—Please choose an option—</option>
                {HERO_DURATION_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="hero-pickup">Pickup*</label>
              <PlacesAutocompleteInput
                id="hero-pickup"
                name="pickup"
                value={formData.pickup}
                onChange={handleChange}
                placeholder="Search pick-up address"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="hero-destination">Destination*</label>
              <PlacesAutocompleteInput
                id="hero-destination"
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                placeholder="Search destination address"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="hero-service-type">Service Type*</label>
              <select
                id="hero-service-type"
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                required
                disabled={serviceOptions.length === 0}
                className={isLoadingOptions ? 'field-loading' : undefined}
                aria-busy={isLoadingOptions}
              >
                <option value="">
                  {serviceOptions.length === 0 ? 'Loading options…' : '—Please choose an option—'}
                </option>
                {serviceOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </>
        ) : (
          <>
            <div className="form-group">
              <label htmlFor="hero-pickup">Pick-up*</label>
              <PlacesAutocompleteInput
                id="hero-pickup"
                name="pickup"
                value={formData.pickup}
                onChange={handleChange}
                placeholder="Search pick-up address"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="hero-destination">Destination*</label>
              <PlacesAutocompleteInput
                id="hero-destination"
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                placeholder="Search destination address"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="hero-service-type">Service Type*</label>
              <select
                id="hero-service-type"
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                required
                disabled={serviceOptions.length === 0}
                className={isLoadingOptions ? 'field-loading' : undefined}
                aria-busy={isLoadingOptions}
              >
                <option value="">
                  {serviceOptions.length === 0 ? 'Loading options…' : '—Please choose an option—'}
                </option>
                {serviceOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="hero-travel">Travel*</label>
              <select
                id="hero-travel"
                name="travel"
                value={formData.travel}
                onChange={handleChange}
                required
                disabled={travelOptions.length === 0}
                className={isLoadingOptions ? 'field-loading' : undefined}
                aria-busy={isLoadingOptions}
              >
                <option value="">
                  {travelOptions.length === 0 ? 'Loading options…' : '—Please choose an option—'}
                </option>
                {travelOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </>
        )}

        <div className="form-group">
          <label htmlFor="hero-passengers">No of Passenger*</label>
          <input
            id="hero-passengers"
            type="number"
            name="passengers"
            value={formData.passengers}
            onChange={handleChange}
            min="1"
            placeholder="e.g. 2"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="hero-luggage">No of Luggage*</label>
          <input
            id="hero-luggage"
            type="number"
            name="luggage"
            value={formData.luggage}
            onChange={handleChange}
            min="0"
            placeholder="e.g. 1"
            required
          />
        </div>
        <button type="submit" className="btn-submit full" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting…' : 'Book Now !'}
        </button>
      </form>
    </div>
  )
}
