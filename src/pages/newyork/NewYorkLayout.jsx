import { Outlet, useLocation } from 'react-router-dom'
import LandingPageShell from '../../components/layout/LandingPageShell.jsx'
import { NEW_YORK_HOME } from '../../config/routes.js'

/** Layout chrome for the newyork car service landing page. */
export default function NewYorkLayout() {
  const location = useLocation()
  const isHome = location.pathname === NEW_YORK_HOME

  return (
    <LandingPageShell
      homePath={NEW_YORK_HOME}
      headerVariant="standard"
      headerKey={location.pathname}
      isHome={isHome}
    >
      <Outlet />
    </LandingPageShell>
  )
}
