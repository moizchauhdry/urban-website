import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { HeaderBrandLogo } from '../../../components/layout/BrandLogo.jsx'
import { useHomeLogoClick } from '../../../hooks/useHomeLogoClick.js'
import { useMobileScrollLock } from '../../../hooks/useMobileScrollLock.js'
import MobileMenuPanel, { PANEL_ID } from './MobileMenuPanel.jsx'
import Navbar from './Navbar.jsx'

const MOBILE_MQ = '(max-width:720px)'

/**
 * Desktop: sticky header. Mobile (≤720px): scrolls with the page; when the menu
 * is open the bar is fixed at the top and scroll is locked behind the overlay.
 */
export default function Header({ logoPath = '/' }) {
  const onHomeLogoClick = useHomeLogoClick(logoPath)
  const headerAnchorRef = useRef(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), [])
  const toggleMobileMenu = useCallback(() => setMobileMenuOpen((o) => !o), [])

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
    <header
      ref={headerAnchorRef}
      className={mobileMenuOpen ? 'header--menu-open' : ''}
    >
      <div className="container nav">
        <Link to={logoPath} className="logo" onClick={onHomeLogoClick}>
          <HeaderBrandLogo />
        </Link>
        <Navbar />
        <a href="#" className="btn-book">
          Book Now
        </a>
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

      <MobileMenuPanel
        open={mobileMenuOpen}
        onClose={closeMobileMenu}
        anchorRef={headerAnchorRef}
      />
    </header>
  )
}
