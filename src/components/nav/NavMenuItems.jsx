import { Link, NavLink } from 'react-router-dom'
import Icon from '../common/Icon.jsx'
import {
  ABOUT_US,
  CONTACT_US,
  FLEET,
  MAIN_HOME,
  OUR_SERVICES,
} from '../../config/routes.js'
import {
  ServiceAreasDesktopSubmenu,
  ServiceAreasMobileSubmenu,
} from './ServiceAreasSubmenu.jsx'

/**
 * Shared primary navigation — Home always routes to the main homepage.
 * Service area logos use `logoPath` on Header/Footer separately.
 */
export default function NavMenuItems({ variant = 'desktop', onNavigate }) {
  const close = onNavigate ?? (() => {})

  if (variant === 'desktop') {
    return (
      <>
        <Link to={MAIN_HOME}>Home</Link>
        <NavLink
          to={ABOUT_US}
          className={({ isActive }) => (isActive ? 'menu-link menu-link--active' : undefined)}
        >
          About Us
        </NavLink>
        <NavLink
          to={FLEET}
          className={({ isActive }) => (isActive ? 'menu-link menu-link--active' : undefined)}
        >
          Fleet
        </NavLink>
        <div className="has-sub">
          <a href="#" className="has-sub__trigger">
            Service Areas
            <Icon name="chevron-down" size={10} className="nav-chevron" />
          </a>
          <ServiceAreasDesktopSubmenu />
        </div>
        <NavLink
          to={OUR_SERVICES}
          className={({ isActive }) => (isActive ? 'menu-link menu-link--active' : undefined)}
        >
          Our Services
        </NavLink>
        <NavLink
          to={CONTACT_US}
          className={({ isActive }) => (isActive ? 'menu-link menu-link--active' : undefined)}
        >
          Contact Us
        </NavLink>
      </>
    )
  }

  return (
    <>
      <Link className="mobile-menu__link" to={MAIN_HOME} onClick={close}>
        Home
      </Link>
      <NavLink
        className={({ isActive }) =>
          `mobile-menu__link${isActive ? ' mobile-menu__link--active' : ''}`
        }
        to={ABOUT_US}
        onClick={close}
      >
        About Us
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `mobile-menu__link${isActive ? ' mobile-menu__link--active' : ''}`
        }
        to={FLEET}
        onClick={close}
      >
        Fleet
      </NavLink>

      <ServiceAreasMobileSubmenu onNavigate={close} />

      <NavLink
        className={({ isActive }) =>
          `mobile-menu__link${isActive ? ' mobile-menu__link--active' : ''}`
        }
        to={OUR_SERVICES}
        onClick={close}
      >
        Our Services
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `mobile-menu__link${isActive ? ' mobile-menu__link--active' : ''}`
        }
        to={CONTACT_US}
        onClick={close}
      >
        Contact Us
      </NavLink>
    </>
  )
}
