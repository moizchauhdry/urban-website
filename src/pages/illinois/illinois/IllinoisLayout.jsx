import { Outlet, useLocation } from 'react-router-dom'
import LandingPageShell from '../../../components/layout/LandingPageShell.jsx'
import { ILLINOIS_HOME } from '../../../config/routes.js'

/** Layout chrome for Illinois car service landing page. */
export default function IllinoisLayout() {
  const location = useLocation()
  const isHome = location.pathname === ILLINOIS_HOME

  return (
    <LandingPageShell
      homePath={ILLINOIS_HOME}
      headerVariant="standard"
      headerKey={location.pathname}
      isHome={isHome}
    >
      <Outlet />
    </LandingPageShell>
  )
}
