import { lazy, Suspense, useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { HeaderBrandLogo } from '../../../components/layout/BrandLogo.jsx'
import HeaderBookNow from '../../../components/layout/HeaderBookNow.jsx'
import HeaderNavPhone from '../../../components/layout/HeaderNavPhone.jsx'
import { useHomeLogoClick } from '../../../hooks/useHomeLogoClick.js'
import { useMobileScrollLock } from '../../../hooks/useMobileScrollLock.js'
import Navbar from './Navbar.jsx'

const FifaPromoBanner = lazy(() => import('../../../components/layout/FifaPromoBanner.jsx'))
const MobileMenuPanel = lazy(() => import('./MobileMenuPanel.jsx'))
const PANEL_ID = 'site-mobile-menu'

import { COMPACT_NAV_MQ } from '../../../config/breakpoints.js'

const MOBILE_MQ = COMPACT_NAV_MQ

/**
 * Desktop / tablet: sticky header (≥721px). Compact nav with hamburger (≤984px).
 * Phone (≤720px): fixed header hides on scroll down, reappears on scroll up.
 */
export default function Header({ logoPath = '/' }) {
  const onHomeLogoClick = useHomeLogoClick()
  const headerAnchorRef = useRef(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showPromoBanner, setShowPromoBanner] = useState(false)

  const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), [])
  const toggleMobileMenu = useCallback(() => setMobileMenuOpen((o) => !o), [])

  useEffect(() => {
    if (typeof requestIdleCallback !== 'undefined') {
      const id = requestIdleCallback(() => setShowPromoBanner(true), { timeout: 3200 })
      return () => cancelIdleCallback(id)
    }
    const timer = window.setTimeout(() => setShowPromoBanner(true), 1500)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_MQ)
    const onChange = () => {
      if (!mq.matches) closeMobileMenu()
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [closeMobileMenu])

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
        <Navbar />
        <HeaderNavPhone />
        <HeaderBookNow homePath={logoPath} />
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

      {mobileMenuOpen ? (
        <Suspense fallback={null}>
          <MobileMenuPanel
            open={mobileMenuOpen}
            onClose={closeMobileMenu}
            anchorRef={headerAnchorRef}
          />
        </Suspense>
      ) : null}
    </header>
    {showPromoBanner ? (
      <Suspense fallback={null}>
        <FifaPromoBanner />
      </Suspense>
    ) : null}
    </div>
  )
}