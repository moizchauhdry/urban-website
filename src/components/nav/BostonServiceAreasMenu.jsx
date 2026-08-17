import { NavLink } from 'react-router-dom'
import Icon from '../common/Icon.jsx'
import { BOSTON_HOME, BOSTON_SUBPAGES } from '../../pages/boston/routes.js'
import { desktopSubmenuLinkClass, mobileSubmenuLinkClass } from './navActive.js'

/**
 * Boston entry in Service Areas — desktop nested flyout + mobile nested details.
 */
export function BostonDesktopSubmenu() {
  return (
    <div className="has-sub-nested">
      <NavLink to={BOSTON_HOME} className={({ isActive }) =>
        `has-sub-nested__trigger${isActive ? ' menu-link--active' : ''}`
      }>
        Boston Car Service
        <Icon name="arrow-right" size={10} className="nav-chevron nav-chevron--right" />
      </NavLink>
      <div className="submenu-nested">
        {BOSTON_SUBPAGES.map((item) => (
          <NavLink key={item.path} to={item.path} className={desktopSubmenuLinkClass}>
            {item.label}
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export function BostonMobileSubmenu({ onNavigate }) {
  const close = onNavigate ?? (() => {})

  return (
    <details className="mobile-menu__details mobile-menu__details--nested">
      <summary className="mobile-menu__summary">
        <span>Boston Car Service</span>
        <Icon name="chevron-down" size={12} className="mobile-menu__chev" />
      </summary>
      <div className="mobile-menu__sub">
        <NavLink className={mobileSubmenuLinkClass} to={BOSTON_HOME} end onClick={close}>
          Boston Car Service
        </NavLink>
        {BOSTON_SUBPAGES.map((item) => (
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
