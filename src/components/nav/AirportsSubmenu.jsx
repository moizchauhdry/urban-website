import { NavLink } from 'react-router-dom'
import Icon from '../common/Icon.jsx'
import { AIRPORT_NAV_ITEMS } from '../../config/airportNav.js'
import { desktopSubmenuLinkClass, mobileSubmenuLinkClass } from './navActive.js'

/** Desktop Airports submenu links (shared across all regions). */
export function AirportsDesktopSubmenu() {
  return (
    <div className="submenu">
      {AIRPORT_NAV_ITEMS.map((item) => (
        <NavLink key={item.path} to={item.path} className={desktopSubmenuLinkClass}>
          {item.label}
        </NavLink>
      ))}
    </div>
  )
}

/** Mobile Airports nested links (shared across all regions). */
export function AirportsMobileSubmenu({ onNavigate, active = false }) {
  const close = onNavigate ?? (() => {})

  return (
    <details className={`mobile-menu__details${active ? ' mobile-menu__details--active' : ''}`}>
      <summary className={`mobile-menu__summary${active ? ' mobile-menu__link--active' : ''}`}>
        <span>Airports</span>
        <Icon name="chevron-down" size={12} className="mobile-menu__chev" />
      </summary>
      <div className="mobile-menu__sub">
        {AIRPORT_NAV_ITEMS.map((item) => (
          <NavLink
            key={item.path}
            className={mobileSubmenuLinkClass}
            to={item.path}
            onClick={close}
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </details>
  )
}
