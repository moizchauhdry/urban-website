import { useCallback, useEffect, useRef } from 'react'
import {
  HERO_BG_DEFAULT,
  HERO_BG_HEIGHT,
  HERO_BG_SIZES,
  HERO_BG_SRCSET,
  HERO_BG_WIDTH,
} from './heroBg.js'
import { HERO_FEATURES, HERO_PHONE } from './heroHighlights.js'
import HeroDeferredBooking from '../../../../components/hero/HeroDeferredBooking.jsx'
import HeroLiveBadge from '../../../../components/hero/HeroLiveBadge.jsx'

function removeStaticHeroLcp() {
  document.getElementById('static-hero-lcp')?.remove()
}

/** Milwaukee Car Service hero + booking card */
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
    <section className="hero">
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
      <div className="container">
        <div className="hero-content">
          <HeroLiveBadge />
          <h1 className="hero-title">
            <span className="hero-title-line hero-title-line--highlight">{"Milwaukee"}</span>{' '}
            <span className="hero-title-line">{"Car Service"}</span>
          </h1>
          <p className="hero-desc">
            Travel in comfort with {"Milwaukee Car Service"} designed for people who want a smooth and stress free
            experience. From local trips to airport rides our drivers make every journey easy. Enjoy calm pickups,
            friendly service and dependable transport without rushing or worrying about traffic.
            Your ride stays simple, safe and well planned throughout {"Milwaukee"}.
          </p>
          <a href={HERO_PHONE.href} className="hero-phone">
            <img
              src={HERO_PHONE.icon}
              alt={HERO_PHONE.iconAlt}
              className="hero-phone-icon"
              width={20}
              height={20}
              decoding="async"
              draggable={false}
            />
            {HERO_PHONE.label}
          </a>
          <div className="hero-features">
            {HERO_FEATURES.map((feat) => (
              <div className="feat" key={feat.label}>
                <img
                  src={feat.icon}
                  alt={feat.iconAlt}
                  className="feat-icon"
                  width={20}
                  height={20}
                  decoding="async"
                  draggable={false}
                />
                {feat.label}
              </div>
            ))}
          </div>
        </div>

        <HeroDeferredBooking />
      </div>
    </section>
  )
}
