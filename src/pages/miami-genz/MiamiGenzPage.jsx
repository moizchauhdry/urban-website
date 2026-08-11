import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { BOOK_NOW, FLEET } from '../../config/routes.js'
import HeroDeferredBooking from '../../features/booking/HeroDeferredBooking.jsx'
import '../../styles/genz-miami.css'
import GenZHeader, { GenZTicker } from './GenZHeader.jsx'
import { ArrowRight, ArrowUpRight, FeatureIcon, StarIcon } from './GenZIcons.jsx'
import {
  BRAND,
  BRAND_FULL,
  FEATURES,
  FOOTER_COLS,
  HERO,
  OCCASIONS,
  STEPS,
  WHIPS,
} from './data.js'
import { REVIEWS as SITE_REVIEWS } from '../../data/reviews.js'

function Hero() {
  return (
    <section className="gz-hero" aria-labelledby="gz-hero-title">
      <div className="gz-hero__sky" aria-hidden="true" />
      <div className="gz-hero__waves" aria-hidden="true">
        <span className="gz-hero__wave gz-hero__wave--1" />
        <span className="gz-hero__wave gz-hero__wave--2" />
        <span className="gz-hero__wave gz-hero__wave--3" />
      </div>

      <div className="gz-hero__media gz-hero__media--mobile" aria-hidden="true">
        <img
          src={HERO.mobileImage}
          alt=""
          className="gz-hero__img gz-hero__img--mobile"
          width={1080}
          height={1920}
        />
        <div className="gz-hero__shade gz-hero__shade--mobile" />
      </div>

      <div className="gz-hero__media gz-hero__media--desktop" aria-hidden="true">
        <img src={HERO.image} alt="" className="gz-hero__img" width={1600} height={900} />
        <div className="gz-hero__shade" />
      </div>

      <div className="gz-hero__nav">
        <div className="gz-hero__nav-inner">
          <GenZHeader />
        </div>
      </div>

      <div className="gz-hero__inner">
        <div className="gz-hero__copy">
          <h1 id="gz-hero-title" className="gz-hero__title">
            {HERO.title}
          </h1>
          <p className="gz-hero__sub">{HERO.sub}</p>
        </div>

        <div className="gz-hero__form">
          <HeroDeferredBooking />
        </div>
      </div>
    </section>
  )
}

function Features() {
  return (
    <section className="gz-features" aria-label="Why ride with us">
      <ul className="gz-features__list">
        {FEATURES.map((f) => (
          <li key={f.label} className="gz-features__item">
            <FeatureIcon name={f.icon} className="gz-features__icon" />
            <span>{f.label}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

function WhipSection() {
  return (
    <section className="gz-whip" id="fleet" aria-labelledby="gz-whip-title">
      <div className="gz-whip__head">
        <h2 id="gz-whip-title" className="gz-whip__title">
          Shore
          <br />
          fleet
        </h2>
        <p className="gz-whip__sub">
          Sedans, SUVs, and buses detailed for Miami heat — flat rates from the terminal to the tide.
        </p>
      </div>

      <div className="gz-whip__grid">
        {WHIPS.map((car) => (
          <article
            key={car.id}
            className={`gz-whip-card${car.featured ? ' gz-whip-card--featured' : ''}`}
            data-whip={car.id}
          >
            {car.badge ? <span className="gz-whip-card__badge">{car.badge}</span> : null}
            <div className="gz-whip-card__media">
              <img src={car.image} alt={car.name} width={640} height={360} loading="lazy" />
            </div>
            <h3 className="gz-whip-card__name">{car.name}</h3>
            <p className="gz-whip-card__note">{car.note}</p>
            <div className="gz-whip-card__tags">
              <span className="gz-chip">{car.seats}</span>
              <span className="gz-chip">{car.bags}</span>
            </div>
            <Link to={BOOK_NOW} className="gz-btn gz-btn--white gz-whip-card__cta">
              Book this ride
            </Link>
          </article>
        ))}
      </div>

      <div className="gz-whip__foot">
        <Link to={FLEET} className="gz-btn gz-btn--black-pill">
          See full fleet <span className="gz-whip__arrow">→</span>
        </Link>
      </div>
    </section>
  )
}

function Occasions() {
  return (
    <section className="gz-occasions" aria-labelledby="gz-occasions-title">
      <div className="gz-occasions__head">
        <h2 id="gz-occasions-title" className="gz-occasions__title">
          <span>Where the</span>
          <span className="gz-occasions__accent">shore takes you</span>
        </h2>
        <p className="gz-occasions__sub">
          South Beach mornings, cruise mornings, late Ocean Drive nights — one flat rate, same calm pickup.
        </p>
      </div>

      <div className="gz-occasions__grid">
        {OCCASIONS.map((item) => (
          <Link
            key={item.id}
            to={BOOK_NOW}
            className={`gz-occ-card${item.wide ? ' gz-occ-card--wide' : ''}`}
          >
            <img src={item.image} alt="" className="gz-occ-card__img" loading="lazy" />
            <div className="gz-occ-card__shade" />
            <span className="gz-occ-card__title">
              {item.title}
              <ArrowUpRight className="gz-occ-card__arrow" />
            </span>
            <span className="gz-occ-card__price">{item.price}</span>
          </Link>
        ))}

        <Link to={BOOK_NOW} className="gz-occ-card gz-occ-card--cta">
          <span className="gz-occ-card__cta-text">
            Plan any
            <br />
            shore stop
          </span>
          <ArrowUpRight className="gz-occ-card__cta-arrow" />
        </Link>
      </div>
    </section>
  )
}

function Reviews() {
  const viewportRef = useRef(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)

  function updateNav() {
    const el = viewportRef.current
    if (!el) return
    setCanPrev(el.scrollLeft > 4)
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 4)
  }

  useEffect(() => {
    const el = viewportRef.current
    if (!el) return undefined
    updateNav()
    el.addEventListener('scroll', updateNav, { passive: true })
    window.addEventListener('resize', updateNav)
    return () => {
      el.removeEventListener('scroll', updateNav)
      window.removeEventListener('resize', updateNav)
    }
  }, [])

  function scrollByCard(dir) {
    const el = viewportRef.current
    if (!el) return
    const card = el.querySelector('.gz-phone')
    const styles = card ? getComputedStyle(el.querySelector('.gz-reviews__track')) : null
    const gap = styles ? Number.parseFloat(styles.columnGap || styles.gap || '12') || 12 : 12
    const amount = card ? card.getBoundingClientRect().width + gap : 316
    el.scrollBy({ left: dir * amount, behavior: 'smooth' })
  }

  return (
    <section className="gz-reviews" aria-labelledby="gz-reviews-title">
      <div className="gz-reviews__intro">
        <h2 id="gz-reviews-title" className="gz-reviews__title">
          Riders on the shore
        </h2>
        <p className="gz-reviews__sub">Real trips. Real calm. Same Miami heat.</p>
      </div>

      <div className="gz-reviews__shell">
        <button
          type="button"
          className="gz-reviews__nav gz-reviews__nav--prev"
          onClick={() => scrollByCard(-1)}
          disabled={!canPrev}
          aria-label="Previous review"
        >
          <ArrowRight className="gz-reviews__nav-icon gz-reviews__nav-icon--prev" />
        </button>

        <div className="gz-reviews__viewport" ref={viewportRef}>
          <div className="gz-reviews__track">
            {SITE_REVIEWS.map((r) => (
              <article key={r.id} className="gz-phone">
                <div className="gz-phone__status">
                  <span>9:41</span>
                  <span className="gz-phone__status-icons" aria-hidden="true">
                    ▮▮▮ ◎ ■
                  </span>
                </div>
                <div className="gz-phone__post">
                  <span className="gz-phone__avatar" aria-hidden="true">
                    {r.author.slice(0, 1)}
                  </span>
                  <div className="gz-phone__meta">
                    <strong>{r.author}</strong>
                    <span>Verified rider</span>
                  </div>
                  <p className="gz-phone__text">{r.text}</p>
                  <div className="gz-phone__stars" aria-label="5 stars">
                    {Array.from({ length: 5 }).map((_, si) => (
                      <StarIcon key={si} className="gz-phone__star" />
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="gz-reviews__nav gz-reviews__nav--next"
          onClick={() => scrollByCard(1)}
          disabled={!canNext}
          aria-label="Next review"
        >
          <ArrowRight className="gz-reviews__nav-icon" />
        </button>
      </div>
    </section>
  )
}

function HowItWorks() {
  return (
    <section className="gz-how" aria-labelledby="gz-how-title">
      <div className="gz-how__head">
        <h2 id="gz-how-title" className="gz-how__title">
          How it
          <br />
          works
        </h2>
        <span className="gz-how__scribble" aria-hidden="true">
          →
        </span>
      </div>
      <ol className="gz-how__steps">
        {STEPS.map((step) => (
          <li key={step.n} className="gz-how__step">
            <span className="gz-how__n">{step.n}</span>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}

function FinalCta() {
  return (
    <section className="gz-cta" id="cta" aria-labelledby="gz-cta-title">
      <div className="gz-cta__glow" aria-hidden="true" />
      <div className="gz-cta__inner">
        <h2 id="gz-cta-title" className="gz-cta__title">
          <span className="gz-cta__title-top">The tide can wait.</span>
          <span className="gz-cta__title-bottom">Your ride shouldn&apos;t.</span>
        </h2>
        <Link to={BOOK_NOW} className="gz-cta__btn">
          Book your shore ride <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="gz-footer">
      <div className="gz-footer__row">
        <div className="gz-footer__brand">{BRAND}</div>
        <div className="gz-footer__grid">
          {FOOTER_COLS.map((col) => (
            <div key={col.title} className="gz-footer__col">
              <h3>{col.title}</h3>
              <ul>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="gz-footer__col">
            <h3>Follow Us</h3>
            <div className="gz-footer__social">
              <a href="https://www.instagram.com/" aria-label="Instagram" target="_blank" rel="noreferrer">
                IG
              </a>
              <a href="https://www.tiktok.com/" aria-label="TikTok" target="_blank" rel="noreferrer">
                TT
              </a>
              <a href="https://x.com/" aria-label="X" target="_blank" rel="noreferrer">
                X
              </a>
              <a href="https://www.youtube.com/" aria-label="YouTube" target="_blank" rel="noreferrer">
                YT
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className="gz-footer__copy">
        © {new Date().getFullYear()} {BRAND_FULL}. All rights reserved. Miami Beach & beyond.
      </p>
    </footer>
  )
}

/** Miami Beach coastal redesign of /miami-car-service. */
export default function MiamiGenzPage() {
  return (
    <div className="gz-page">
      <GenZTicker />
      <Hero />
      <Features />
      <WhipSection />
      <Occasions />
      <Reviews />
      <HowItWorks />
      <FinalCta />
      <Footer />
    </div>
  )
}
