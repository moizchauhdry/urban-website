import { Outlet, useLocation } from 'react-router-dom'
import Header from './layout/Header.jsx'
import DeferredFooter from '../../components/layout/DeferredFooter.jsx'
import { useUrbanEliteInteractions } from '../../hooks/useUrbanEliteInteractions.js'
import { useScrollReveal } from '../../hooks/useScrollReveal.js'
import { useScrollToBookingHash } from '../../hooks/useScrollToBookingHash.js'

const FLORIDA_HOME = '/florida-car-service'

/** Layout chrome for the Florida car service landing page. */
export default function FloridaLayout() {
  const location = useLocation()
  const isHome = location.pathname === FLORIDA_HOME

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
