import { lazy, Suspense } from 'react'
import Icon from '../../components/common/Icon.jsx'

const HeroBookingForm = lazy(() => import('../../components/hero/HeroBookingForm.jsx'))

/** Dedicated booking page — same form as the home hero, standalone layout. */
export default function BookNowPage() {

  return (
    <section className="section book-now-page">
      <div className="container">
        <div className="center-tag">
          <span className="section-tag section-tag--fleet">
            <Icon name="car-side" size={14} className="section-tag__icon" />
            Get A Free Quote
          </span>
        </div>
        <h1 className="section-title">Book Your Fleet</h1>
        <p className="section-sub book-now-page__sub">
          Experience The Future Of Mobility With Our Cutting Edge Fleet. Premium Vehicles &amp; Seamless Experience
        </p>

        <div id="hero-booking" className="book-now-page__form">
          <Suspense
            fallback={
              <div className="booking-card booking-card--loading" aria-hidden="true">
                Loading booking form…
              </div>
            }
          >
            <HeroBookingForm />
          </Suspense>
        </div>
      </div>
    </section>
  )
}
