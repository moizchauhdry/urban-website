import { Link } from 'react-router-dom'
import Icon from '../common/Icon.jsx'
import { FLORIDA_HOME, FLORIDA_MIAMI_SUBPAGES } from '../../pages/florida/routes.js'

/**
 * Florida entry in Service Areas — desktop nested flyout + mobile nested details.
 */
export function FloridaDesktopSubmenu() {
  return (
    <div className="has-sub-nested">
      <Link to={FLORIDA_HOME} className="has-sub-nested__trigger">
        Florida Car Service
        <Icon name="arrow-right" size={10} className="nav-chevron nav-chevron--right" />
      </Link>
      <div className="submenu-nested">
        {FLORIDA_MIAMI_SUBPAGES.map((item) => (
          <Link key={item.path} to={item.path}>
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  )
}

export function FloridaMobileSubmenu({ onNavigate }) {
  const close = onNavigate ?? (() => {})

  return (
    <details className="mobile-menu__details mobile-menu__details--nested">
      <summary className="mobile-menu__summary">
        <span>Florida Car Service</span>
        <Icon name="chevron-down" size={12} className="mobile-menu__chev" />
      </summary>
      <div className="mobile-menu__sub">
        <Link className="mobile-menu__sublink" to={FLORIDA_HOME} onClick={close}>
          Florida Car Service
        </Link>
        {FLORIDA_MIAMI_SUBPAGES.map((item) => (
          <Link key={item.path} className="mobile-menu__sublink" to={item.path} onClick={close}>
            {item.label}
          </Link>
        ))}
      </div>
    </details>
  )
}
