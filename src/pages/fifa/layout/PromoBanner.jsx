import { useState } from 'react'

const STORAGE_KEY = 'urban-fifa-promo-dismissed'

export default function PromoBanner() {
  const [visible, setVisible] = useState(() => {
    try {
      return sessionStorage.getItem(STORAGE_KEY) !== '1'
    } catch {
      return true
    }
  })

  if (!visible) return null

  const dismiss = () => {
    setVisible(false)
    try {
      sessionStorage.setItem(STORAGE_KEY, '1')
    } catch {
      /* ignore */
    }
  }

  return (
    <div className="fifa-promo-banner" role="region" aria-label="FIFA World Cup 2026 promotion">
      <div className="container fifa-promo-banner__inner">
        <p className="fifa-promo-banner__text">
          <span className="fifa-promo-banner__highlight">FIFA World Cup 2026</span> is coming — Book your exclusive
          stadium transfers in Canada, USA &amp; Mexico
        </p>
        <div className="fifa-promo-banner__actions">
          <a href="#hero-booking" className="fifa-promo-banner__cta">
            Explore FIFA
          </a>
          <button type="button" className="fifa-promo-banner__close" onClick={dismiss} aria-label="Dismiss promotion">
            ×
          </button>
        </div>
      </div>
    </div>
  )
}
