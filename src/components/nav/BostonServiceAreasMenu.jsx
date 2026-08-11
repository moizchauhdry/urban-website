import { Link } from 'react-router-dom'
import Icon from '../common/Icon.jsx'
import { BOSTON_HOME, BOSTON_SUBPAGES } from '../../pages/boston/routes.js'

/**
 * Boston entry in Service Areas — desktop nested flyout + mobile nested details.
 */
export function BostonDesktopSubmenu() {
  return (
    <div className="has-sub-nested">
      <Link to={BOSTON_HOME} className="has-sub-nested__trigger">
        Boston Car Service
        <Icon name="arrow-right" size={10} className="nav-chevron nav-chevron--right" />
      </Link>
      <div className="submenu-nested">
        {BOSTON_SUBPAGES.map((item) => (
          <Link key={item.path} to={item.path}>
            {item.label}
          </Link>
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
        <Link className="mobile-menu__sublink" to={BOSTON_HOME} onClick={close}>
          Boston Car Service
        </Link>
        {BOSTON_SUBPAGES.map((item) => (
          <Link key={item.path} className="mobile-menu__sublink" to={item.path} onClick={close}>
            {item.label}
          </Link>
        ))}
      </div>
    </details>
  )
}
