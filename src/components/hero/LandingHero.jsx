import { useCallback, useEffect, useRef, useState } from 'react'
import { getHomeHero, loadLandingHero } from '../../data/heroes/index.js'
import { HERO_FEATURES, HERO_PHONE } from '../../data/heroHighlights.js'
import { FIFA_HERO_FEATURES, FIFA_HOST_FLAGS } from '../../data/fifaHero.js'
import trustPilotLogo from '../../assets/reviews/trust-pilot.svg'
import Icon from '../icons/Icon.jsx'
import HeroDeferredBooking from '../../features/booking/HeroDeferredBooking.jsx'
import HeroLiveBadge from './HeroLiveBadge.jsx'
import HeroMobileBenefits from './HeroMobileBenefits.jsx'

const DESKTOP_MQ = '(min-width: 721px)'

function removeStaticHeroLcp() {
  document.getElementById('static-hero-lcp')?.remove()
}

function hasStaticHeroLcp() {
  return Boolean(document.getElementById('static-hero-lcp'))
}

function buildSrcSet(background) {
  if (background.sm && background.lg) {
    return `${background.sm} 800w, ${background.lg} 1440w`
  }
  return `${background.default} 800w, ${background.default} 1440w`
}

function HeroBackground({ background, onReady, deferMount = false }) {
  if (deferMount) return null

  return (
    <img
      ref={onReady}
      src={background.default}
      srcSet={buildSrcSet(background)}
      sizes={background.sizes}
      alt=""
      className="hero-bg-img"
      width={background.width}
      height={background.height}
      fetchPriority="high"
      loading="eager"
      decoding="sync"
      aria-hidden="true"
    />
  )
}

function LandingHeroContent({ config, showDesktopExtras }) {
  const { titleInner, descriptionInner, titleClassName = 'hero-title' } = config

  return (
    <>
      <HeroLiveBadge />
      <h1 className={titleClassName}>{titleInner}</h1>
      <HeroMobileBenefits />
      <p className={config.descClassName ?? 'hero-desc'}>{descriptionInner}</p>
      <a href={HERO_PHONE.href} className="hero-phone">
        <Icon name={HERO_PHONE.icon} size={20} className="hero-phone-icon" />
        {HERO_PHONE.label}
      </a>
      {showDesktopExtras !== false ? (
        <div className="hero-features">
          {HERO_FEATURES.map((feat) => (
            <div className="feat" key={feat.label}>
              <Icon name={feat.icon} size={20} className="feat-icon" />
              {feat.label}
            </div>
          ))}
        </div>
      ) : null}
    </>
  )
}

function FifaFeatureIcon({ name }) {
  if (name === 'dollar') {
    return <span className="fifa-hero__feature-dollar">$</span>
  }

  const paths = {
    headset: (
      <>
        <path d="M3 14v-3a9 9 0 0 1 18 0v3" />
        <path d="M21 16a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h3zM3 16a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H3z" />
      </>
    ),
    car: (
      <>
        <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
        <circle cx="7" cy="17" r="2" />
        <path d="M9 17h6" />
        <circle cx="17" cy="17" r="2" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </>
    ),
  }

  return (
    <svg
      className="icon"
      width={14}
      height={14}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name] ?? null}
    </svg>
  )
}

function FifaHeroContent({ config }) {
  const { titleInner, descriptionInner } = config

  return (
    <>
      <HeroLiveBadge />

      <ul className="fifa-hero__features" aria-label="Service highlights">
        {FIFA_HERO_FEATURES.map((feat) => (
          <li className="fifa-hero__feature" key={feat.label}>
            <span className="fifa-hero__feature-icon" aria-hidden="true">
              <FifaFeatureIcon name={feat.icon} />
            </span>
            {feat.label}
          </li>
        ))}
      </ul>

      <h1 className="hero-title fifa-hero__title">{titleInner}</h1>
      <p className="hero-desc fifa-hero__desc">{descriptionInner}</p>

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
            <Icon name="shield-halved" size={18} className="fifa-hero__trust-icon" />
            Licensed
          </span>
        </div>
      </div>
    </>
  )
}

function useHeroConfig(pageKey) {
  const isHome = pageKey === 'home'
  const [config, setConfig] = useState(() => (isHome ? getHomeHero() : null))
  const [error, setError] = useState(null)

  useEffect(() => {
    if (pageKey === 'home') {
      setConfig(getHomeHero())
      setError(null)
      return undefined
    }

    let cancelled = false
    setConfig(null)
    setError(null)
    loadLandingHero(pageKey)
      .then((next) => {
        if (!cancelled) setConfig(next)
      })
      .catch((err) => {
        if (!cancelled) setError(err)
      })
    return () => {
      cancelled = true
    }
  }, [pageKey])

  return { config, error }
}

/** Shared hero for landing pages, home, and FIFA — content keyed by pageKey. */
export default function LandingHero({ pageKey }) {
  const { config, error } = useHeroConfig(pageKey)

  const isHome = pageKey === 'home'
  const isFifa = config?.variant === 'fifa'

  const staticRemoved = useRef(false)
  const [showDesktopExtras, setShowDesktopExtras] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(DESKTOP_MQ).matches : false,
  )
  const [useReactHeroBg, setUseReactHeroBg] = useState(() =>
    isHome ? typeof window !== 'undefined' && !hasStaticHeroLcp() : true,
  )

  const onHeroBgReady = useCallback(
    (node) => {
      if (!node) return
      const done = () => {
        if (staticRemoved.current) return
        staticRemoved.current = true
        removeStaticHeroLcp()
        if (isHome) setUseReactHeroBg(true)
      }
      if (node.complete && node.naturalWidth > 0) {
        done()
        return
      }
      node.addEventListener('load', done, { once: true })
    },
    [isHome],
  )

  useEffect(() => {
    // Non-home: drop the HTML-injected home LCP image once this route's hero owns the viewport.
    if (!isHome) {
      const staticImg = document.getElementById('static-hero-lcp')
      if (staticImg instanceof HTMLImageElement) {
        const drop = () => {
          if (staticRemoved.current) return
          staticRemoved.current = true
          removeStaticHeroLcp()
        }
        if (staticImg.complete && staticImg.naturalWidth > 0) drop()
        else {
          staticImg.addEventListener('load', drop, { once: true })
          staticImg.addEventListener('error', drop, { once: true })
        }
      }
      return undefined
    }

    // Home: never tear down #static-hero-lcp until it has painted — an 800ms forced
    // swap was aborting LCP under Slow 4G and driving ~7s Lighthouse LCP.
    const staticImg = document.getElementById('static-hero-lcp')
    if (!(staticImg instanceof HTMLImageElement)) {
      setUseReactHeroBg(true)
      return undefined
    }

    const mountReactBg = () => {
      if (staticRemoved.current) return
      setUseReactHeroBg(true)
    }

    if (staticImg.complete && staticImg.naturalWidth > 0) {
      mountReactBg()
      return undefined
    }

    staticImg.addEventListener('load', mountReactBg, { once: true })
    staticImg.addEventListener('error', mountReactBg, { once: true })
    return () => {
      staticImg.removeEventListener('load', mountReactBg)
      staticImg.removeEventListener('error', mountReactBg)
    }
  }, [isHome])

  useEffect(() => {
    if (!isHome) return undefined
    const mq = window.matchMedia(DESKTOP_MQ)
    const onChange = () => setShowDesktopExtras(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [isHome])

  if (error) {
    throw error
  }

  if (!config) {
    return <section className="hero" aria-busy="true" />
  }

  const showBg = !isHome || useReactHeroBg
  const desktopFeatures = isHome ? (showDesktopExtras ? 'lazy' : false) : true

  if (isFifa) {
    return (
      <section className={config.sectionClass}>
        <HeroBackground background={config.background} onReady={onHeroBgReady} />
        <div className="fifa-hero__overlay" aria-hidden="true" />
        <div className="container">
          <div className="hero-content fifa-hero__content">
            <FifaHeroContent config={config} />
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

  return (
    <section className={config.sectionClass}>
      <HeroBackground
        background={config.background}
        onReady={onHeroBgReady}
        deferMount={isHome && !showBg}
      />
      <div className="container">
        <div className="hero-content">
          <LandingHeroContent config={config} showDesktopExtras={desktopFeatures} />
        </div>

        <HeroDeferredBooking />
      </div>
    </section>
  )
}
