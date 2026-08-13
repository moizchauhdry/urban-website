import { NavLink } from 'react-router-dom'
import Icon from '../common/Icon.jsx'
import { NEW_YORK_HOME, NEW_YORK_SUBPAGES } from '../../pages/newyork/routes.js'
import { desktopSubmenuLinkClass, mobileSubmenuLinkClass } from './navActive.js'

/**
 * New York entry in Service Areas — desktop nested flyout + mobile nested details.
 */
export function NewYorkDesktopSubmenu() {
  return (
    <div className="has-sub-nested">
      <NavLink to={NEW_YORK_HOME} className={({ isActive }) =>
        `has-sub-nested__trigger${isActive ? ' menu-link--active' : ''}`
      }>
        New York Car Service
        <Icon name="arrow-right" size={10} className="nav-chevron nav-chevron--right" />
      </NavLink>
      <div className="submenu-nested">
        {NEW_YORK_SUBPAGES.map((item) => (
          <NavLink key={item.path} to={item.path} className={desktopSubmenuLinkClass}>
            {item.label}
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export function NewYorkMobileSubmenu({ onNavigate }) {
  const close = onNavigate ?? (() => {})

  return (
    <details className="mobile-menu__details mobile-menu__details--nested">
      <summary className="mobile-menu__summary">
        <span>New York Car Service</span>
        <Icon name="chevron-down" size={12} className="mobile-menu__chev" />
      </summary>
      <div className="mobile-menu__sub">
        <NavLink className={mobileSubmenuLinkClass} to={NEW_YORK_HOME} end onClick={close}>
          New York Car Service
        </NavLink>
        {NEW_YORK_SUBPAGES.map((item) => (
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
