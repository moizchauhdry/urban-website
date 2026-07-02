import { Outlet, useLocation } from 'react-router-dom'
import LandingPageShell from '../../../components/layout/LandingPageShell.jsx'
import { CHICAGO_LIMO_HOME } from '../../../config/routes.js'

/** Layout chrome for Chicago Limo Service. */
export default function ChicagoLimoLayout() {
  const location = useLocation()
  const isHome = location.pathname === CHICAGO_LIMO_HOME

  return (
    <LandingPageShell
      homePath={CHICAGO_LIMO_HOME}
      headerVariant="standard"
      headerKey={location.pathname}
      isHome={isHome}
    >
      <Outlet />
    </LandingPageShell>
  )
}
