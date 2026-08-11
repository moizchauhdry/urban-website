import { lazy, Suspense } from 'react'
import Icon from '../../components/common/Icon.jsx'
import { HERO_FEATURES, HERO_PHONE } from '../../data/heroHighlights.js'

const HeroBookingForm = lazy(() => import('../../features/booking/HeroBookingForm.jsx'))

const BOOK_STEPS = [
  { n: '01', label: 'Tell us your route' },
  { n: '02', label: 'Pick your fleet' },
  { n: '03', label: 'We confirm in minutes' },
]

/** Dedicated booking page — editorial copy left, same-size form on the right. */
export default function BookNowPage() {
  return (
    <section className="book-now-page" aria-labelledby="book-now-title">
      <div className="container book-now-page__layout">
        <div className="book-now-page__copy">
          <h1 id="book-now-title" className="book-now-page__title">
            Book Your
            <span className="book-now-page__title-accent">Chauffeur</span>
          </h1>

          <p className="book-now-page__lead">
            Experience the future of mobility with our cutting-edge fleet. Premium vehicles and a
            seamless white-glove experience — across the USA.
          </p>

          <ol className="book-now-page__steps" aria-label="How booking works">
            {BOOK_STEPS.map((step) => (
              <li key={step.n}>
                <span className="book-now-page__step-n">{step.n}</span>
                <span className="book-now-page__step-label">{step.label}</span>
              </li>
            ))}
          </ol>

          <ul className="book-now-page__perks" aria-label="Why ride with us">
            {HERO_FEATURES.slice(0, 3).map((feat) => (
              <li key={feat.label}>
                <Icon name={feat.icon} size={16} className="book-now-page__perk-icon" />
                <span>{feat.label}</span>
              </li>
            ))}
          </ul>

          <a href={HERO_PHONE.href} className="book-now-page__phone">
            <Icon name={HERO_PHONE.icon} size={18} />
            {HERO_PHONE.label}
          </a>
        </div>

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
