import { BostonDesktopSubmenu, BostonMobileSubmenu } from './BostonServiceAreasMenu.jsx'
import { ConnecticutDesktopSubmenu, ConnecticutMobileSubmenu } from './ConnecticutServiceAreasMenu.jsx'
import { NewYorkDesktopSubmenu, NewYorkMobileSubmenu } from './NewYorkServiceAreasMenu.jsx'
import Icon from '../common/Icon.jsx'

/** Desktop Service Areas submenu links (shared across all regions). */
export function ServiceAreasDesktopSubmenu() {
  return (
    <div className="submenu">
      <ConnecticutDesktopSubmenu />
      <NewYorkDesktopSubmenu />
      <BostonDesktopSubmenu />
    </div>
  )
}

/** Mobile Service Areas accordion (shared across all regions). */
export function ServiceAreasMobileSubmenu({ onNavigate, active = false }) {
  const close = onNavigate ?? (() => {})

  return (
    <details className={`mobile-menu__details${active ? ' mobile-menu__details--active' : ''}`}>
      <summary className={`mobile-menu__summary${active ? ' mobile-menu__link--active' : ''}`}>
        <span>Service Areas</span>
        <Icon name="chevron-down" size={12} className="mobile-menu__chev" />
      </summary>
      <div className="mobile-menu__sub">
        <ConnecticutMobileSubmenu onNavigate={close} />
        <NewYorkMobileSubmenu onNavigate={close} />
        <BostonMobileSubmenu onNavigate={close} />
      </div>
    </details>
  )
}
