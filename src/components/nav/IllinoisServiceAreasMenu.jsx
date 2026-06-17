import { Link } from 'react-router-dom'
import Icon from '../common/Icon.jsx'
import { ILLINOIS_HOME, ILLINOIS_SUBPAGES } from '../../pages/illinois/routes.js'

/**
 * Illinois entry in Service Areas — desktop nested flyout + mobile nested details.
 */
export function IllinoisDesktopSubmenu() {
  return (
    <div className="has-sub-nested">
      <Link to={ILLINOIS_HOME} className="has-sub-nested__trigger">
        Illinois Car Service
        <Icon name="arrow-right" size={10} className="nav-chevron nav-chevron--right" />
      </Link>
      <div className="submenu-nested">
        {ILLINOIS_SUBPAGES.map((item) => (
          <Link key={item.path} to={item.path}>
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  )
}

export function IllinoisMobileSubmenu({ onNavigate }) {
  const close = onNavigate ?? (() => {})

  return (
    <details className="mobile-menu__details mobile-menu__details--nested">
      <summary className="mobile-menu__summary">
        <span>Illinois Car Service</span>
        <Icon name="chevron-down" size={12} className="mobile-menu__chev" />
      </summary>
      <div className="mobile-menu__sub">
        <Link className="mobile-menu__sublink" to={ILLINOIS_HOME} onClick={close}>
          Illinois Car Service
        </Link>
        {ILLINOIS_SUBPAGES.map((item) => (
          <Link key={item.path} className="mobile-menu__sublink" to={item.path} onClick={close}>
            {item.label}
          </Link>
        ))}
      </div>
    </details>
  )
}
