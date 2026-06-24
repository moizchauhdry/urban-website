import { Link } from 'react-router-dom'
import Icon from '../common/Icon.jsx'
import { NEW_YORK_HOME, NEW_YORK_SUBPAGES } from '../../pages/newyork/routes.js'

/**
 * New York entry in Service Areas — desktop nested flyout + mobile nested details.
 */
export function NewYorkDesktopSubmenu() {
  return (
    <div className="has-sub-nested">
      <Link to={NEW_YORK_HOME} className="has-sub-nested__trigger">
        New York Car Service
        <Icon name="arrow-right" size={10} className="nav-chevron nav-chevron--right" />
      </Link>
      <div className="submenu-nested">
        {NEW_YORK_SUBPAGES.map((item) => (
          <Link key={item.path} to={item.path}>
            {item.label}
          </Link>
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
        <Link className="mobile-menu__sublink" to={NEW_YORK_HOME} onClick={close}>
          New York Car Service
        </Link>
        {NEW_YORK_SUBPAGES.map((item) => (
          <Link key={item.path} className="mobile-menu__sublink" to={item.path} onClick={close}>
            {item.label}
          </Link>
        ))}
      </div>
    </details>
  )
}
