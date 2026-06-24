import { useCallback, useEffect, useRef } from 'react'
import {
  HERO_BG_DEFAULT,
  HERO_BG_HEIGHT,
  HERO_BG_SIZES,
  HERO_BG_SRCSET,
  HERO_BG_WIDTH,
} from './heroBg.js'
import { FIFA_HERO_FEATURES, FIFA_HOST_FLAGS } from './heroHighlights.js'
import HeroDeferredBooking from '../../../components/hero/HeroDeferredBooking.jsx'
import Icon from '../../../components/common/Icon.jsx'
import trustPilotLogo from '../../../assets/connecticut/reviews/trust-pilot.svg'
import licensedIcon from '../../../assets/connecticut/hero/fully-licensed.png'

function removeStaticHeroLcp() {
  document.getElementById('static-hero-lcp')?.remove()
}

/** FIFA World Cup 2026 hero + booking card */
export default function Hero() {
  const staticRemoved = useRef(false)

  const onHeroBgReady = useCallback((node) => {
    if (!node) return
    if (node.complete && node.naturalWidth > 0) {
      if (!staticRemoved.current) {
        staticRemoved.current = true
        removeStaticHeroLcp()
      }
      return
    }
    const onLoad = () => {
      if (staticRemoved.current) return
      staticRemoved.current = true
      removeStaticHeroLcp()
    }
    node.addEventListener('load', onLoad, { once: true })
  }, [])

  useEffect(() => {
    const staticImg = document.getElementById('static-hero-lcp')
    if (staticImg instanceof HTMLImageElement && staticImg.complete && staticImg.naturalWidth > 0) {
      if (!staticRemoved.current) {
        staticRemoved.current = true
        removeStaticHeroLcp()
      }
    }
  }, [])

  return (
    <section className="hero fifa-hero">
      <img
        ref={onHeroBgReady}
        src={HERO_BG_DEFAULT}
        srcSet={HERO_BG_SRCSET}
        sizes={HERO_BG_SIZES}
        alt=""
        className="hero-bg-img"
        width={HERO_BG_WIDTH}
        height={HERO_BG_HEIGHT}
        fetchPriority="high"
        loading="eager"
        decoding="async"
        aria-hidden="true"
      />
      <div className="fifa-hero__overlay" aria-hidden="true" />
      <div className="container">
        <div className="hero-content fifa-hero__content">
          <div className="hero-badge fifa-hero__badge">
            <span className="hero-badge-star" aria-hidden="true">
              ★
            </span>{' '}
            1,240+ Rides Completed For Events
          </div>

          <ul className="fifa-hero__features" aria-label="Service highlights">
            {FIFA_HERO_FEATURES.map((feat) => (
              <li className="fifa-hero__feature" key={feat.label}>
                <span className="fifa-hero__feature-icon" aria-hidden="true">
                  {feat.icon === 'dollar' ? (
                    <span className="fifa-hero__feature-dollar">$</span>
                  ) : (
                    <Icon name={feat.icon} size={14} />
                  )}
                </span>
                {feat.label}
              </li>
            ))}
          </ul>

          <h1 className="hero-title fifa-hero__title">
            Your Ride To <span className="fifa-hero__accent">FIFA 2026</span> Starts Here
          </h1>
          <p className="hero-desc fifa-hero__desc">
            Premium Chauffeur Service For Matches Across Canada, USA &amp; Mexico — Airport Transfers, Stadium Rides,
            And Full-Day Bookings For Fans, Groups, And VIPs.
          </p>

          <div className="fifa-hero__meta">
            <div className="fifa-hero__flags" aria-label="Host countries">
              {FIFA_HOST_FLAGS.map(({ code, label }) => (
                <span className="fifa-hero__flag" key={code}>
                  <span
                    className={`fifa-hero__flag-icon fifa-hero__flag-icon--${code.toLowerCase()}`}
                    aria-hidden="true"
                  />
                  {label}
                </span>
              ))}
            </div>

            <p className="fifa-hero__social-proof">
              <span className="fifa-hero__live-dot" aria-hidden="true" />
              186+ Fans Booked FIFA Rides This Week
            </p>

            <div className="fifa-hero__trust">
              <img src={trustPilotLogo} alt="Trustpilot" className="fifa-hero__trust-logo" width={88} height={22} />
              <span className="fifa-hero__trust-divider" aria-hidden="true" />
              <span className="fifa-hero__trust-licensed">
                <img src={licensedIcon} alt="" className="fifa-hero__trust-icon" width={18} height={18} />
                Licensed
              </span>
            </div>
          </div>
        </div>

        <div className="fifa-hero__booking">
          <div className="fifa-hero__early-bird">
            <p className="fifa-hero__early-bird-title">10% OFF FIFA Early Bird</p>
            <p className="fifa-hero__early-bird-desc">Book In The Next 30 Days &amp; Save On All Match-Day Rides</p>
          </div>
          <HeroDeferredBooking />
        </div>
      </div>
    </section>
  )
}
