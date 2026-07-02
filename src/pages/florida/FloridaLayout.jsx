import { Outlet, useLocation } from 'react-router-dom'
import LandingPageShell from '../../components/layout/LandingPageShell.jsx'
import { FLORIDA_HOME } from '../../config/routes.js'

/** Layout chrome for the florida car service landing page. */
export default function FloridaLayout() {
  const location = useLocation()
  const isHome = location.pathname === FLORIDA_HOME

  return (
    <LandingPageShell
      homePath={FLORIDA_HOME}
      headerVariant="standard"
      headerKey={location.pathname}
      isHome={isHome}
    >
      <Outlet />
    </LandingPageShell>
  )
}
