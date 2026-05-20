import { Link } from 'react-router-dom'
import { ext } from './navConfig.js'

/**
 * Shared link tree: `variant="desktop"` matches original horizontal menu;
 * `variant="mobile"` adds touch-friendly classes, optional close handler, and expandable Service Areas.
 */
export default function NavMenuItems({ variant = 'desktop', onNavigate }) {
  const close = onNavigate ?? (() => {})

  if (variant === 'desktop') {
    return (
      <>
        <Link to="/">Home</Link>
        <a href={ext('/about-us/')}>About Us</a>
        <a href="/#fleet">Fleet</a>
        <div className="has-sub">
          <a href="#">Service Areas</a>
          <div className="submenu">
            <a href="#">Connecticut Car Service</a>
            <a href="https://urbanelitelimo.com/state/florida-car-service/">Florida Car Service</a>
            <a href="https://urbanelitelimo.com/state/illinois-car-service/">Illinois Car Service</a>
            <a href="https://urbanelitelimo.com/state/new-york-car-service/">New York Car Service</a>
          </div>
        </div>
        <a href={ext('/our-services/')}>Our Services</a>
        <a href={ext('/contact-us/')}>Contact Us</a>
      </>
    )
  }

  return (
    <>
      <Link className="mobile-menu__link" to="/" onClick={close}>
        Home
      </Link>
      <a className="mobile-menu__link" href={ext('/about-us/')} onClick={close}>
        About Us
      </a>
      <a className="mobile-menu__link" href="/#fleet" onClick={close}>
        Fleet
      </a>

      <details className="mobile-menu__details">
        <summary className="mobile-menu__summary">
          <span>Service Areas</span>
          <i className="fa-solid fa-chevron-down mobile-menu__chev" aria-hidden />
        </summary>
        <div className="mobile-menu__sub">
          <a className="mobile-menu__sublink" href="#" onClick={close}>
            Connecticut Car Service
          </a>
          <a
            className="mobile-menu__sublink"
            href="https://urbanelitelimo.com/state/florida-car-service/"
            onClick={close}
          >
            Florida Car Service
          </a>
          <a
            className="mobile-menu__sublink"
            href="https://urbanelitelimo.com/state/illinois-car-service/"
            onClick={close}
          >
            Illinois Car Service
          </a>
          <a
            className="mobile-menu__sublink"
            href="https://urbanelitelimo.com/state/new-york-car-service/"
            onClick={close}
          >
            New York Car Service
          </a>
        </div>
      </details>

      <a className="mobile-menu__link" href={ext('/our-services/')} onClick={close}>
        Our Services
      </a>
      <a className="mobile-menu__link" href={ext('/contact-us/')} onClick={close}>
        Contact Us
      </a>
    </>
  )
}
