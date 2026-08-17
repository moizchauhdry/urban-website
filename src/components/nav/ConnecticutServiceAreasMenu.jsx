import { NavLink } from 'react-router-dom'
import Icon from '../common/Icon.jsx'
import { CONNECTICUT_HOME, CONNECTICUT_SUBPAGES } from '../../pages/connecticut/routes.js'
import { desktopSubmenuLinkClass, mobileSubmenuLinkClass } from './navActive.js'

/**
 * Connecticut entry in Service Areas — desktop nested flyout + mobile nested details.
 */
export function ConnecticutDesktopSubmenu() {
  return (
    <div className="has-sub-nested">
      <NavLink to={CONNECTICUT_HOME} className={({ isActive }) =>
        `has-sub-nested__trigger${isActive ? ' menu-link--active' : ''}`
      }>
        Connecticut Car Service
        <Icon name="arrow-right" size={10} className="nav-chevron nav-chevron--right" />
      </NavLink>
      <div className="submenu-nested">
        {CONNECTICUT_SUBPAGES.map((item) => (
          <NavLink key={item.path} to={item.path} className={desktopSubmenuLinkClass}>
            {item.label}
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export function ConnecticutMobileSubmenu({ onNavigate }) {
  const close = onNavigate ?? (() => {})

  return (
    <details className="mobile-menu__details mobile-menu__details--nested">
      <summary className="mobile-menu__summary">
        <span>Connecticut Car Service</span>
        <Icon name="chevron-down" size={12} className="mobile-menu__chev" />
      </summary>
      <div className="mobile-menu__sub">
        <NavLink className={mobileSubmenuLinkClass} to={CONNECTICUT_HOME} end onClick={close}>
          Connecticut Car Service
        </NavLink>
        {CONNECTICUT_SUBPAGES.map((item) => (
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
