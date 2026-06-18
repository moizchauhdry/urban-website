import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FIFA_HOME } from '../../config/routes.js'
import footballIcon from '../../assets/football.png'

const BANNER_TEXT =
  'FIFA World Cup 2026 is coming — Book your exclusive stadium transfers in Canada, USA & Mexico'

function BannerIcon() {
  return (
    <img
      src={footballIcon}
      alt=""
      className="fifa-promo-banner__icon"
      width={18}
      height={18}
      decoding="async"
      aria-hidden="true"
    />
  )
}

function BannerMessage({ className = '' }) {
  return (
    <span className={`fifa-promo-banner__message ${className}`.trim()}>
      <BannerIcon />
      <span className="fifa-promo-banner__copy">{BANNER_TEXT}</span>
    </span>
  )
}

export default function FifaPromoBanner() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  const dismiss = () => {
    setVisible(false)
  }

  return (
    <div className="fifa-promo-banner" role="region" aria-label="FIFA World Cup 2026 promotion">
      <div className="container fifa-promo-banner__inner">
        <div className="fifa-promo-banner__text">
          <BannerMessage className="fifa-promo-banner__message--static" />
          <div className="fifa-promo-banner__marquee" aria-hidden="true">
            <div className="fifa-promo-banner__marquee-track">
              <BannerMessage />
              <BannerMessage />
            </div>
          </div>
        </div>
        <div className="fifa-promo-banner__actions">
          <Link to={FIFA_HOME} className="fifa-promo-banner__cta">
            Explore FIFA
          </Link>
          <button type="button" className="fifa-promo-banner__close" onClick={dismiss} aria-label="Dismiss promotion">
            ×
          </button>
        </div>
      </div>
    </div>
  )
}
