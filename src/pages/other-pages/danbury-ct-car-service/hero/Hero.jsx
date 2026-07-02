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
import HeroMobileBenefits from '../../../../components/hero/HeroMobileBenefits.jsx'
import HeroLiveBadge from '../../../../components/hero/HeroLiveBadge.jsx'

function removeStaticHeroLcp() {
  document.getElementById('static-hero-lcp')?.remove()
}

/** Danbury CT Car Service hero + booking card */
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
            <span className="hero-title-line hero-title-line--highlight">{"Luxury Danbury Car Service"}</span>{' '}
            <span className="hero-title-line">{"You Can Rely On"}</span>
          </h1>
          <HeroMobileBenefits />
          <p className="hero-desc">
            Our Danbury CT Car Service offers private transportation for airport trips, business travel, and special
            occasions. Whether you need a Danbury car service for a local ride, a Danbury CT limo service for a group
            travel, or a Danbury limo for a special event, we provide a smooth and professional experience. It's a
            refined option for travelers who want punctual service and a comfortable ride throughout Danbury and beyond.
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
