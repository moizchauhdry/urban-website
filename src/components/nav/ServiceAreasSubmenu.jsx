import { Link } from 'react-router-dom'
import Icon from '../common/Icon.jsx'
import { IllinoisDesktopSubmenu, IllinoisMobileSubmenu } from './IllinoisServiceAreasMenu.jsx'
import {
  CONNECTICUT_HOME,
  FLORIDA_HOME,
  NEW_YORK_HOME,
} from '../../config/routes.js'

/** Desktop Service Areas submenu links (shared across all regions). */
export function ServiceAreasDesktopSubmenu() {
  return (
    <div className="submenu">
      <Link to={CONNECTICUT_HOME}>Connecticut Car Service</Link>
      <Link to={FLORIDA_HOME}>Florida Car Service</Link>
      <IllinoisDesktopSubmenu />
      <Link to={NEW_YORK_HOME}>New York Car Service</Link>
    </div>
  )
}

/** Mobile Service Areas nested links (shared across all regions). */
export function ServiceAreasMobileSubmenu({ onNavigate }) {
  const close = onNavigate ?? (() => {})

  return (
    <details className="mobile-menu__details">
      <summary className="mobile-menu__summary">
        <span>Service Areas</span>
        <Icon name="chevron-down" size={12} className="mobile-menu__chev" />
      </summary>
      <div className="mobile-menu__sub">
        <Link className="mobile-menu__sublink" to={CONNECTICUT_HOME} onClick={close}>
          Connecticut Car Service
        </Link>
        <Link className="mobile-menu__sublink" to={FLORIDA_HOME} onClick={close}>
          Florida Car Service
        </Link>
        <IllinoisMobileSubmenu onNavigate={close} />
        <Link className="mobile-menu__sublink" to={NEW_YORK_HOME} onClick={close}>
          New York Car Service
        </Link>
      </div>
    </details>
  )
}
