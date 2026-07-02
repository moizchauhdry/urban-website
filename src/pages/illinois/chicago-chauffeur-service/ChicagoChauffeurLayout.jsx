import { Outlet, useLocation } from 'react-router-dom'
import LandingPageShell from '../../../components/layout/LandingPageShell.jsx'
import { CHICAGO_CHAUFFEUR_HOME } from '../../../config/routes.js'

/** Layout chrome for Chicago Chauffeur Service. */
export default function ChicagoChauffeurLayout() {
  const location = useLocation()
  const isHome = location.pathname === CHICAGO_CHAUFFEUR_HOME

  return (
    <LandingPageShell
      homePath={CHICAGO_CHAUFFEUR_HOME}
      headerVariant="standard"
      headerKey={location.pathname}
      isHome={isHome}
    >
      <Outlet />
    </LandingPageShell>
  )
}
