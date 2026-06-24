import { Link } from 'react-router-dom'
import Icon from '../common/Icon.jsx'
import { AIRPORT_NAV_ITEMS } from '../../config/airportNav.js'

/** Desktop Airports submenu links (shared across all regions). */
export function AirportsDesktopSubmenu() {
  return (
    <div className="submenu">
      {AIRPORT_NAV_ITEMS.map((item) => (
        <Link key={item.path} to={item.path}>
          {item.label}
        </Link>
      ))}
    </div>
  )
}

/** Mobile Airports nested links (shared across all regions). */
export function AirportsMobileSubmenu({ onNavigate }) {
  const close = onNavigate ?? (() => {})

  return (
    <details className="mobile-menu__details">
      <summary className="mobile-menu__summary">
        <span>Airports</span>
        <Icon name="chevron-down" size={12} className="mobile-menu__chev" />
      </summary>
      <div className="mobile-menu__sub">
        {AIRPORT_NAV_ITEMS.map((item) => (
          <Link key={item.path} className="mobile-menu__sublink" to={item.path} onClick={close}>
            {item.label}
          </Link>
        ))}
      </div>
    </details>
  )
}
