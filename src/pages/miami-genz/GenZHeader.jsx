import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { HeaderBrandLogo } from '../../components/layout/BrandLogo.jsx'
import { AIRPORT_NAV_ITEMS } from '../../config/airportNav.js'
import {
  ABOUT_US,
  BOOK_NOW,
  CONTACT_US,
  FLEET,
  MAIN_HOME,
  OUR_SERVICES,
} from '../../config/routes.js'
import { BOSTON_HOME, BOSTON_SUBPAGES } from '../../pages/boston/routes.js'
import { CONNECTICUT_HOME, CONNECTICUT_SUBPAGES } from '../../pages/connecticut/routes.js'
import { FLORIDA_HOME, FLORIDA_MIAMI_SUBPAGES } from '../../pages/florida/routes.js'
import { NEW_YORK_HOME, NEW_YORK_SUBPAGES } from '../../pages/newyork/routes.js'
import { TICKER_ITEMS } from './data.js'
import { MenuIcon } from './GenZIcons.jsx'

const NAV_LINKS = [
  { label: 'Home', to: MAIN_HOME },
  { label: 'About Us', to: ABOUT_US },
  { label: 'Fleet', to: FLEET },
  { label: 'Our Services', to: OUR_SERVICES },
  { label: 'Contact Us', to: CONTACT_US },
]

const SERVICE_AREAS = [
  {
    id: 'florida',
    label: 'Florida Car Service',
    to: FLORIDA_HOME,
    children: FLORIDA_MIAMI_SUBPAGES,
  },
  {
    id: 'connecticut',
    label: 'Connecticut Car Service',
    to: CONNECTICUT_HOME,
    children: CONNECTICUT_SUBPAGES,
  },
  {
    id: 'new-york',
    label: 'New York Car Service',
    to: NEW_YORK_HOME,
    children: NEW_YORK_SUBPAGES,
  },
  {
    id: 'boston',
    label: 'Boston Car Service',
    to: BOSTON_HOME,
    children: BOSTON_SUBPAGES,
  },
]

function Ticker({ items, className = '' }) {
  const loop = [...items, ...items, ...items, ...items]
  return (
    <div className={`gz-ticker ${className}`} aria-hidden="true">
      <div className="gz-ticker__track">
        {loop.map((item, i) => (
          <span key={`${item}-${i}`} className="gz-ticker__item">
            {item}
            <span className="gz-ticker__sep">-</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export function GenZTicker() {
  return <Ticker items={TICKER_ITEMS} />
}

function DesktopDropdown({ label, children }) {
  return (
    <div className="gz-nav__dd">
      <button type="button" className="gz-nav__dd-trigger">
        {label}
        <ChevronDown className="gz-nav__dd-chev" size={14} strokeWidth={2.5} aria-hidden="true" />
      </button>
      <div className="gz-nav__dd-panel">{children}</div>
    </div>
  )
}

function MobileAccordion({ label, children }) {
  return (
    <details className="gz-mobile-menu__details">
      <summary className="gz-mobile-menu__summary">
        <span>{label}</span>
        <ChevronDown className="gz-mobile-menu__chev" size={16} strokeWidth={2.5} aria-hidden="true" />
      </summary>
      <div className="gz-mobile-menu__sub">{children}</div>
    </details>
  )
}

export default function GenZHeader() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <header className="gz-header">
      <Link to={MAIN_HOME} className="gz-logo" onClick={() => setOpen(false)}>
        <HeaderBrandLogo />
      </Link>

      <nav className="gz-nav" aria-label="Primary">
        {NAV_LINKS.slice(0, 3).map((item) => (
          <NavLink
            key={item.label}
            to={item.to}
            className={({ isActive }) =>
              `gz-nav__link${isActive ? ' gz-nav__link--active' : ''}`
            }
          >
            {item.label}
          </NavLink>
        ))}

        <DesktopDropdown label="Service Areas">
          {SERVICE_AREAS.map((area) => (
            <div key={area.id} className="gz-nav__nested">
              <Link to={area.to} className="gz-nav__dd-link gz-nav__dd-link--parent">
                {area.label}
                <ChevronRight className="gz-nav__nested-chev" size={14} strokeWidth={2.5} aria-hidden="true" />
              </Link>
              <div className="gz-nav__nested-panel">
                <Link to={area.to} className="gz-nav__dd-link">
                  {area.label}
                </Link>
                {area.children.map((child) => (
                  <Link key={child.path} to={child.path} className="gz-nav__dd-link">
                    {child.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </DesktopDropdown>

        <DesktopDropdown label="Airports">
          {AIRPORT_NAV_ITEMS.map((item) => (
            <Link key={item.path} to={item.path} className="gz-nav__dd-link">
              {item.label}
            </Link>
          ))}
        </DesktopDropdown>

        {NAV_LINKS.slice(3).map((item) => (
          <NavLink
            key={item.label}
            to={item.to}
            className={({ isActive }) =>
              `gz-nav__link${isActive ? ' gz-nav__link--active' : ''}`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="gz-header__end">
        <Link to={BOOK_NOW} className="gz-btn gz-btn--outline gz-header__cta">
          Book shore ride
        </Link>
        <button
          type="button"
          className="gz-header__menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <MenuIcon className="gz-header__menu-icon" />
        </button>
      </div>

      {open ? (
        <div className="gz-mobile-menu">
          <nav className="gz-mobile-menu__nav" aria-label="Mobile">
            {NAV_LINKS.slice(0, 3).map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                className="gz-mobile-menu__link"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}

            <MobileAccordion label="Service Areas">
              {SERVICE_AREAS.map((area) => (
                <MobileAccordion key={area.id} label={area.label}>
                  <Link
                    to={area.to}
                    className="gz-mobile-menu__sublink"
                    onClick={() => setOpen(false)}
                  >
                    {area.label}
                  </Link>
                  {area.children.map((child) => (
                    <Link
                      key={child.path}
                      to={child.path}
                      className="gz-mobile-menu__sublink"
                      onClick={() => setOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </MobileAccordion>
              ))}
            </MobileAccordion>

            <MobileAccordion label="Airports">
              {AIRPORT_NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="gz-mobile-menu__sublink"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </MobileAccordion>

            {NAV_LINKS.slice(3).map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                className="gz-mobile-menu__link"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}

            <Link to={BOOK_NOW} className="gz-btn gz-btn--primary" onClick={() => setOpen(false)}>
              Book shore ride
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  )
}

export function GenZMarquee({ items }) {
  return <Ticker items={items} className="gz-ticker--marquee" />
}
