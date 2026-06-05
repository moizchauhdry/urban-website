import { lazy, Suspense } from 'react'
import heroBg from '../../assets/icons/hero-bg.webp'
import Icon from '../common/Icon.jsx'

const HeroBookingForm = lazy(() => import('./HeroBookingForm.jsx'))

/** Connecticut hero + booking card */
export default function Hero() {
  return (
    <section className="hero">
      <img
        src={heroBg}
        alt=""
        className="hero-bg-img"
        width={800}
        height={458}
        fetchPriority="high"
        loading="eager"
        decoding="async"
        aria-hidden="true"
      />
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <Icon name="star" size={11} /> Rated #1 car and Limo Service
          </div>
          <h1 className="hero-title">
            <span className="hero-title-line">Premium Connecticut</span>{' '}
            <span className="hero-title-line">Car Service</span>
          </h1>
          <p className="hero-desc">
            Travel in comfort with a Connecticut car service designed for people who want a smooth and stress free
            experience. From local trips to airport rides our drivers make every journey easy. Enjoy calm pickups,
            friendly service and dependable transport to JFK , LGA or NYC without rushing or worrying about traffic.
            Your ride stays simple, safe and well planned.
          </p>
          <a href="tel:8888816610" className="hero-phone">
            <Icon name="phone" size={16} /> (888) 881-6610
          </a>
          <div className="hero-features">
            <div className="feat">
              <Icon name="shield-halved" size={14} /> Licensed & Insured
            </div>
            <div className="feat">
              <Icon name="car" size={14} /> Latest Model Fleet
            </div>
            <div className="feat">
              <Icon name="id-card" size={14} /> Licensed Chauffeurs
            </div>
            <div className="feat">
              <Icon name="plane" size={14} /> flight monitoring
            </div>
          </div>
        </div>

        <Suspense fallback={<div className="booking-card booking-card--loading" aria-hidden="true" />}>
          <HeroBookingForm />
        </Suspense>
      </div>
    </section>
  )
}
