import { Link } from 'react-router-dom'
import Icon from '../common/Icon.jsx'
import { CONNECTICUT_HOME, CONNECTICUT_SUBPAGES } from '../../pages/connecticut/routes.js'

/**
 * Connecticut entry in Service Areas — desktop nested flyout + mobile nested details.
 */
export function ConnecticutDesktopSubmenu() {
  return (
    <div className="has-sub-nested">
      <Link to={CONNECTICUT_HOME} className="has-sub-nested__trigger">
        Connecticut Car Service
        <Icon name="arrow-right" size={10} className="nav-chevron nav-chevron--right" />
      </Link>
      <div className="submenu-nested">
        {CONNECTICUT_SUBPAGES.map((item) => (
          <Link key={item.path} to={item.path}>
            {item.label}
          </Link>
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
        <Link className="mobile-menu__sublink" to={CONNECTICUT_HOME} onClick={close}>
          Connecticut Car Service
        </Link>
        {CONNECTICUT_SUBPAGES.map((item) => (
          <Link key={item.path} className="mobile-menu__sublink" to={item.path} onClick={close}>
            {item.label}
          </Link>
        ))}
      </div>
    </details>
  )
}
