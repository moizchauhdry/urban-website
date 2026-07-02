import { useCallback, useEffect, useRef, useState } from 'react'
import { getHeroPage } from '../../data/heroPages.jsx'
import { HERO_FEATURES, HERO_PHONE } from '../../data/heroHighlights.js'
import { FIFA_HERO_FEATURES, FIFA_HOST_FLAGS } from '../../data/fifaHero.js'
import trustPilotLogo from '../../assets/connecticut/reviews/trust-pilot.svg'
import licensedIcon from '../../assets/connecticut/hero/fully-licensed.png'
import HeroDeferredBooking from './HeroDeferredBooking.jsx'
import HeroLiveBadge from './HeroLiveBadge.jsx'
import HeroMobileBenefits from './HeroMobileBenefits.jsx'
import Icon from '../common/Icon.jsx'

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
      decoding="async"
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
      {showDesktopExtras !== false ? (
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
                loading={showDesktopExtras === 'lazy' ? 'lazy' : undefined}
                draggable={false}
              />
              {feat.label}
            </div>
          ))}
        </div>
      ) : null}
    </>
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
            <img src={licensedIcon} alt="" className="fifa-hero__trust-icon" width={18} height={18} />
            Licensed
          </span>
        </div>
      </div>
    </>
  )
}

/** Shared hero for landing pages, home, and FIFA — content keyed by pageKey. */
export default function LandingHero({ pageKey }) {
  const config = getHeroPage(pageKey)
  const isHome = config.variant === 'home'
  const isFifa = config.variant === 'fifa'

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
    if (isHome) {
      const staticImg = document.getElementById('static-hero-lcp')
      if (staticImg instanceof HTMLImageElement && staticImg.complete && staticImg.naturalWidth > 0) {
        if (!staticRemoved.current) {
          staticRemoved.current = true
          removeStaticHeroLcp()
          setUseReactHeroBg(true)
        }
        return undefined
      }

      const fallback = window.setTimeout(() => {
        if (staticRemoved.current) return
        staticRemoved.current = true
        removeStaticHeroLcp()
        setUseReactHeroBg(true)
      }, 800)

      return () => window.clearTimeout(fallback)
    }

    const staticImg = document.getElementById('static-hero-lcp')
    if (staticImg instanceof HTMLImageElement && staticImg.complete && staticImg.naturalWidth > 0) {
      if (!staticRemoved.current) {
        staticRemoved.current = true
        removeStaticHeroLcp()
      }
    }
    return undefined
  }, [isHome])

  useEffect(() => {
    if (!isHome) return undefined
    const mq = window.matchMedia(DESKTOP_MQ)
    const onChange = () => setShowDesktopExtras(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [isHome])

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
