import Icon from '../common/Icon.jsx'
import { ConnecticutDesktopSubmenu, ConnecticutMobileSubmenu } from './ConnecticutServiceAreasMenu.jsx'
import { FloridaDesktopSubmenu, FloridaMobileSubmenu } from './FloridaServiceAreasMenu.jsx'
import { IllinoisDesktopSubmenu, IllinoisMobileSubmenu } from './IllinoisServiceAreasMenu.jsx'
import { NewYorkDesktopSubmenu, NewYorkMobileSubmenu } from './NewYorkServiceAreasMenu.jsx'

/** Desktop Service Areas submenu links (shared across all regions). */
export function ServiceAreasDesktopSubmenu() {
  return (
    <div className="submenu">
      <ConnecticutDesktopSubmenu />
      <NewYorkDesktopSubmenu />
      <FloridaDesktopSubmenu />
      <IllinoisDesktopSubmenu />
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
        <ConnecticutMobileSubmenu onNavigate={close} />
        <NewYorkMobileSubmenu onNavigate={close} />
        <FloridaMobileSubmenu onNavigate={close} />
        <IllinoisMobileSubmenu onNavigate={close} />
      </div>
    </details>
  )
}
