import { lazy, Suspense, useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { HeaderBrandLogo } from '../BrandLogo.jsx'
import HeaderBookNow from '../HeaderBookNow.jsx'
import HeaderNavPhone from '../HeaderNavPhone.jsx'
import SuspenseLoader from '../SuspenseLoader.jsx'
import FifaPromoBanner from '../FifaPromoBanner.jsx'
import { useHomeLogoClick } from '../../../hooks/useHomeLogoClick.js'
import { useMobileScrollLock } from '../../../hooks/useMobileScrollLock.js'
import { COMPACT_NAV_MQ, PHONE_MQ } from '../../../config/breakpoints.js'
import LandingNavbar from './LandingNavbar.jsx'
import LandingMobileMenuPanel, { PANEL_ID } from './LandingMobileMenuPanel.jsx'

const LazyFifaPromoBanner = lazy(() => import('../FifaPromoBanner.jsx'))

/**
 * @param {{
 *   homePath?: string
 *   variant?: 'connecticut' | 'standard'
 * }} props
 */
export default function LandingHeader({ homePath = '/', variant = 'standard' }) {
  const onHomeLogoClick = useHomeLogoClick()
  const headerAnchorRef = useRef(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showPromoBanner, setShowPromoBanner] = useState(variant === 'standard')

  const mobileMq = variant === 'connecticut' ? COMPACT_NAV_MQ : PHONE_MQ

  const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), [])
  const toggleMobileMenu = useCallback(() => setMobileMenuOpen((open) => !open), [])

  useEffect(() => {
    if (variant !== 'connecticut') return undefined
    if (typeof requestIdleCallback !== 'undefined') {
      const id = requestIdleCallback(() => setShowPromoBanner(true), { timeout: 3200 })
      return () => cancelIdleCallback(id)
    }
    const timer = window.setTimeout(() => setShowPromoBanner(true), 1500)
    return () => window.clearTimeout(timer)
  }, [variant])

  useEffect(() => {
    const mq = window.matchMedia(mobileMq)
    const onChange = () => {
      if (!mq.matches) closeMobileMenu()
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [closeMobileMenu, mobileMq])

  useMobileScrollLock(mobileMenuOpen)

  useEffect(() => {
    if (!mobileMenuOpen) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') closeMobileMenu()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [mobileMenuOpen, closeMobileMenu])

  return (
    <div className={`site-top-chrome${mobileMenuOpen ? ' site-top-chrome--menu-open' : ''}`}>
      <header
        ref={headerAnchorRef}
        className={mobileMenuOpen ? 'header--menu-open' : ''}
      >
        <div className="container nav">
          <Link to="/" className="logo" onClick={onHomeLogoClick}>
            <HeaderBrandLogo />
          </Link>
          <LandingNavbar variant={variant} />
          <HeaderNavPhone />
          <HeaderBookNow homePath={homePath} />
          <button
            type="button"
            className={`menu-toggle${mobileMenuOpen ? ' menu-toggle--open' : ''}`}
            aria-expanded={mobileMenuOpen}
            aria-controls={PANEL_ID}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            onClick={toggleMobileMenu}
          >
            <span className="menu-toggle-bars" aria-hidden>
              <span className="menu-toggle-line" />
              <span className="menu-toggle-line" />
              <span className="menu-toggle-line" />
            </span>
          </button>
        </div>

        <LandingMobileMenuPanel
          open={mobileMenuOpen}
          onClose={closeMobileMenu}
          anchorRef={headerAnchorRef}
        />
      </header>
      {showPromoBanner ? (
        variant === 'connecticut' ? (
          <Suspense fallback={<SuspenseLoader />}>
            <LazyFifaPromoBanner />
          </Suspense>
        ) : (
          <FifaPromoBanner />
        )
      ) : null}
    </div>
  )
}
