import { Link } from 'react-router-dom'
import { appHash, regionUrl } from '../../lib/appBase.js'
import { REGIONS, SERVICE_AREA_LINKS } from '../../config/regions.js'
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
        <a href={appHash('fleet')}>Fleet</a>
        <div className="has-sub">
          <a href="#">Service Areas</a>
          <div className="submenu">
            {REGIONS.map(({ slug, label }) => (
              <a key={slug} href={regionUrl(slug)}>
                {label}
              </a>
            ))}
            {SERVICE_AREA_LINKS.map(({ label, href }) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
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
      <a className="mobile-menu__link" href={appHash('fleet')} onClick={close}>
        Fleet
      </a>

      <details className="mobile-menu__details">
        <summary className="mobile-menu__summary">
          <span>Service Areas</span>
          <i className="fa-solid fa-chevron-down mobile-menu__chev" aria-hidden />
        </summary>
        <div className="mobile-menu__sub">
          {REGIONS.map(({ slug, label }) => (
            <a
              key={slug}
              className="mobile-menu__sublink"
              href={regionUrl(slug)}
              onClick={close}
            >
              {label}
            </a>
          ))}
          {SERVICE_AREA_LINKS.map(({ label, href }) => (
            <a
              key={href}
              className="mobile-menu__sublink"
              href={href}
              onClick={close}
            >
              {label}
            </a>
          ))}
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
