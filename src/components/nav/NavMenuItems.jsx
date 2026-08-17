import { useCallback, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import {
  BOSTON_HOME,
  CONNECTICUT_HOME,
  FLEET,
  ILLINOIS_HOME,
  MAIN_HOME,
  MIAMI_CAR_SERVICE,
  NEW_YORK_HOME,
  OUR_SERVICES,
} from '../../config/routes.js'
import { AIRPORT_NAV_ITEMS } from '../../config/airportNav.js'
import { BOSTON_SUBPAGES } from '../../pages/boston/routes.js'
import { CONNECTICUT_SUBPAGES } from '../../pages/connecticut/routes.js'
import { FLORIDA_MIAMI_SUBPAGES } from '../../pages/florida/routes.js'
import { ILLINOIS_SUBPAGES } from '../../pages/illinois/routes.js'
import { NEW_YORK_SUBPAGES } from '../../pages/newyork/routes.js'
import {
  AirportsDesktopSubmenu,
  AirportsMobileSubmenu,
} from './AirportsSubmenu.jsx'
import { desktopMenuLinkClass, mobileMenuLinkClass } from './navActive.js'
import {
  ServiceAreasDesktopSubmenu,
  ServiceAreasMobileSubmenu,
} from './ServiceAreasSubmenu.jsx'

const SERVICE_AREA_PATHS = [
  CONNECTICUT_HOME,
  ...CONNECTICUT_SUBPAGES.map((item) => item.path),
  NEW_YORK_HOME,
  ...NEW_YORK_SUBPAGES.map((item) => item.path),
  BOSTON_HOME,
  ...BOSTON_SUBPAGES.map((item) => item.path),
  ILLINOIS_HOME,
  ...ILLINOIS_SUBPAGES.map((item) => item.path),
  MIAMI_CAR_SERVICE,
  ...FLORIDA_MIAMI_SUBPAGES.map((item) => item.path),
  '/florida-car-service',
  '/westchester-county-car-service',
  '/texas-car-service',
  '/atlanta-car-service',
  '/milwaukee-car-service',
  '/wisconsin-car-service',
  '/luxury-new-jersey-car-service',
]

const AIRPORT_PATHS = AIRPORT_NAV_ITEMS.map((item) => item.path)

/** @param {string} pathname @param {string[]} paths */
function pathIsActive(pathname, paths) {
  return paths.some(
    (path) => pathname === path || pathname.startsWith(`${path}/`),
  )
}

function closeDesktopDropdowns() {
  document.querySelectorAll('.menu .has-sub').forEach((el) => {
    el.classList.add('has-sub--force-closed')
  })
  document.querySelectorAll('.menu .has-sub-nested').forEach((el) => {
    el.classList.add('has-sub-nested--force-closed')
  })
  if (document.activeElement instanceof HTMLElement) {
    document.activeElement.blur()
  }
}

function reopenDesktopDropdown(event) {
  event.currentTarget.classList.remove('has-sub--force-closed')
  event.currentTarget
    .querySelectorAll('.has-sub-nested--force-closed')
    .forEach((el) => el.classList.remove('has-sub-nested--force-closed'))
}

/**
 * Shared primary navigation — Home always routes to the main homepage.
 * Service area logos use `logoPath` on Header/Footer separately.
 */
export default function NavMenuItems({ variant = 'desktop', onNavigate }) {
  const close = onNavigate ?? (() => {})
  const { pathname } = useLocation()
  const serviceAreasActive = pathIsActive(pathname, SERVICE_AREA_PATHS)
  const airportsActive = pathIsActive(pathname, AIRPORT_PATHS)

  useEffect(() => {
    if (variant !== 'desktop') return undefined
    closeDesktopDropdowns()
  }, [pathname, variant])

  const onSubmenuClick = useCallback((event) => {
    if (event.target.closest('a[href]')) {
      closeDesktopDropdowns()
    }
  }, [])

  if (variant === 'desktop') {
    return (
      <>
        <NavLink to={MAIN_HOME} end className={desktopMenuLinkClass}>
          Home
        </NavLink>
        <NavLink to={FLEET} className={desktopMenuLinkClass}>
          Fleet
        </NavLink>
        <div
          className={`has-sub${serviceAreasActive ? ' has-sub--active' : ''}`}
          onMouseEnter={reopenDesktopDropdown}
          onClick={onSubmenuClick}
        >
          <button
            type="button"
            className={`has-sub__trigger${serviceAreasActive ? ' menu-link--active' : ''}`}
            aria-current={serviceAreasActive ? 'page' : undefined}
          >
            Service Areas
            <span className="nav-chevron nav-chevron--down" aria-hidden="true" />
          </button>
          <ServiceAreasDesktopSubmenu />
        </div>
        <div
          className={`has-sub${airportsActive ? ' has-sub--active' : ''}`}
          onMouseEnter={reopenDesktopDropdown}
          onClick={onSubmenuClick}
        >
          <button
            type="button"
            className={`has-sub__trigger${airportsActive ? ' menu-link--active' : ''}`}
            aria-current={airportsActive ? 'page' : undefined}
          >
            Airports
            <span className="nav-chevron nav-chevron--down" aria-hidden="true" />
          </button>
          <AirportsDesktopSubmenu />
        </div>
        <NavLink to={OUR_SERVICES} className={desktopMenuLinkClass}>
          Our Services
        </NavLink>
      </>
    )
  }

  return (
    <>
      <NavLink className={mobileMenuLinkClass} to={MAIN_HOME} end onClick={close}>
        Home
      </NavLink>
      <NavLink className={mobileMenuLinkClass} to={FLEET} onClick={close}>
        Fleet
      </NavLink>

      <ServiceAreasMobileSubmenu onNavigate={close} active={serviceAreasActive} />

      <AirportsMobileSubmenu onNavigate={close} active={airportsActive} />

      <NavLink className={mobileMenuLinkClass} to={OUR_SERVICES} onClick={close}>
        Our Services
      </NavLink>
    </>
  )
}
