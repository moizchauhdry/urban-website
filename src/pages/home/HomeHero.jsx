import { useCallback, useEffect, useRef, useState } from 'react'
import {
  HERO_BG_DEFAULT,
  HERO_BG_HEIGHT,
  HERO_BG_SIZES,
  HERO_BG_SRCSET,
  HERO_BG_WIDTH,
} from './hero/heroBg.js'
import { HERO_FEATURES, HERO_PHONE } from '../connecticut/hero/heroHighlights.js'
import HeroDeferredBooking from '../../components/hero/HeroDeferredBooking.jsx'
import HeroLiveBadge from '../../components/hero/HeroLiveBadge.jsx'
import HeroMobileBenefits from '../../components/hero/HeroMobileBenefits.jsx'

const DESKTOP_MQ = '(min-width: 721px)'

function removeStaticHeroLcp() {
  document.getElementById('static-hero-lcp')?.remove()
}

function hasStaticHeroLcp() {
  return Boolean(document.getElementById('static-hero-lcp'))
}

/** Home page hero — premium car service with booking form. */
export default function HomeHero() {
  const staticRemoved = useRef(false)
  const [showDesktopExtras, setShowDesktopExtras] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(DESKTOP_MQ).matches : false,
  )
  const [useReactHeroBg, setUseReactHeroBg] = useState(() =>
    typeof window !== 'undefined' ? !hasStaticHeroLcp() : false,
  )

  const onHeroBgReady = useCallback((node) => {
    if (!node) return
    const done = () => {
      if (staticRemoved.current) return
      staticRemoved.current = true
      removeStaticHeroLcp()
      setUseReactHeroBg(true)
    }
    if (node.complete && node.naturalWidth > 0) {
      done()
      return
    }
    node.addEventListener('load', done, { once: true })
  }, [])

  useEffect(() => {
    const staticImg = document.getElementById('static-hero-lcp')
    if (staticImg instanceof HTMLImageElement && staticImg.complete && staticImg.naturalWidth > 0) {
      if (!staticRemoved.current) {
        staticRemoved.current = true
        removeStaticHeroLcp()
        setUseReactHeroBg(true)
      }
      return undefined
    }

    // Fallback: mount in-section hero if static LCP never hands off (e.g. dev without HTML inject).
    const fallback = window.setTimeout(() => {
      if (staticRemoved.current) return
      staticRemoved.current = true
      removeStaticHeroLcp()
      setUseReactHeroBg(true)
    }, 800)

    return () => window.clearTimeout(fallback)
  }, [])

  useEffect(() => {
    const mq = window.matchMedia(DESKTOP_MQ)
    const onChange = () => setShowDesktopExtras(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return (
    <section className="hero hero--home">
      {useReactHeroBg ? (
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
      ) : null}
      <div className="container">
        <div className="hero-content">
          <HeroLiveBadge />
          <h1 className="hero-title">
            <span className="hero-title-line">Premium White Glove</span>{' '}
            <span className="hero-title-line">
              <span className="hero-title-line--highlight">Chauffeur Service</span>
            </span>
            <span className="hero-title-line hero-title-line--accent">in USA</span>
          </h1>
          <HeroMobileBenefits />
          <p className="hero-desc">
          Urban Elite Limo delivers premium white-glove chauffeur services across the USA.
Experience luxury, comfort, and professionalism in every ride.
Serving Westchester, Connecticut, New York, Massachusetts, Miami, Chicago & More.
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
          {showDesktopExtras ? (
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
                    loading="lazy"
                    draggable={false}
                  />
                  {feat.label}
                </div>
              ))}
            </div>
          ) : null}
        </div>

        <HeroDeferredBooking />
      </div>
    </section>
  )
}
