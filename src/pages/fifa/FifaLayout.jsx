import { Outlet, useLocation } from 'react-router-dom'
import Header from '../connecticut/layout/Header.jsx'
import DeferredFooter from '../../components/layout/DeferredFooter.jsx'
import { FIFA_HOME } from './layout/navConfig.js'
import { useUrbanEliteInteractions } from '../../hooks/useUrbanEliteInteractions.js'
import { useScrollReveal } from '../../hooks/useScrollReveal.js'
import { useScrollToBookingHash } from '../../hooks/useScrollToBookingHash.js'
import '../../styles/fifa.css'

/** FIFA World Cup 2026 landing page layout (preview only — not in main nav). */
export default function FifaLayout() {
  const location = useLocation()
  const isHome = location.pathname === FIFA_HOME

  useUrbanEliteInteractions(isHome)
  useScrollReveal()
  useScrollToBookingHash()

  return (
    <div className="fifa-page">
      <Header key={location.pathname} logoPath={FIFA_HOME} />
      <Outlet />
      <DeferredFooter logoPath={FIFA_HOME} />
    </div>
  )
}
