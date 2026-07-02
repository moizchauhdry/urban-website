import { Outlet, useLocation } from 'react-router-dom'
import LandingPageShell from '../../components/layout/LandingPageShell.jsx'
import { FIFA_HOME } from '../../config/routes.js'
import '../../styles/fifa.css'

/** FIFA World Cup 2026 landing page layout (preview only — not in main nav). */
export default function FifaLayout() {
  const location = useLocation()
  const isHome = location.pathname === FIFA_HOME

  return (
    <LandingPageShell
      homePath={FIFA_HOME}
      headerVariant="connecticut"
      headerKey={location.pathname}
      isHome={isHome}
      wrapperClassName="fifa-page"
    >
      <Outlet />
    </LandingPageShell>
  )
}
