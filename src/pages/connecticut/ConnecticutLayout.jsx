import { Outlet, useLocation } from 'react-router-dom'
import LandingPageShell from '../../components/layout/LandingPageShell.jsx'
import { CONNECTICUT_HOME } from '../../config/routes.js'

/** Layout chrome for the connecticut car service landing page. */
export default function ConnecticutLayout() {
  const location = useLocation()
  const isHome = location.pathname === CONNECTICUT_HOME

  return (
    <LandingPageShell
      homePath={CONNECTICUT_HOME}
      headerVariant="connecticut"
      headerKey={location.pathname}
      isHome={isHome}
    >
      <Outlet />
    </LandingPageShell>
  )
}
