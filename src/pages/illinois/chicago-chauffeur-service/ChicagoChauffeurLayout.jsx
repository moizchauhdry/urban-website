import { Outlet, useLocation } from 'react-router-dom'
import Header from './layout/Header.jsx'
import DeferredFooter from '../../../components/layout/DeferredFooter.jsx'
import { useUrbanEliteInteractions } from '../../../hooks/useUrbanEliteInteractions.js'
import { useScrollReveal } from '../../../hooks/useScrollReveal.js'
import { useScrollToBookingHash } from '../../../hooks/useScrollToBookingHash.js'

const CHICAGO_CHAUFFEUR_HOME = '/illinois-car-service/chicago-chauffeur-service'

/** Layout chrome for Chicago Chauffeur Service. */
export default function ChicagoChauffeurLayout() {
  const location = useLocation()
  const isHome = location.pathname === CHICAGO_CHAUFFEUR_HOME

  useUrbanEliteInteractions(isHome)
  useScrollReveal()
  useScrollToBookingHash()

  return (
    <>
      <Header key={location.pathname} />
      <Outlet />
      <DeferredFooter />
    </>
  )
}
