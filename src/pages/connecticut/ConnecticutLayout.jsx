import { Outlet, useLocation } from 'react-router-dom'
import Header from './layout/Header.jsx'
import DeferredFooter from '../../components/layout/DeferredFooter.jsx'
import { CONNECTICUT_HOME } from './layout/navConfig.js'
import { useUrbanEliteInteractions } from '../../hooks/useUrbanEliteInteractions.js'
import { useScrollReveal } from '../../hooks/useScrollReveal.js'
import { useScrollToBookingHash } from '../../hooks/useScrollToBookingHash.js'

/** Layout chrome for the Connecticut car service landing page. */
export default function ConnecticutLayout() {
  const location = useLocation()
  const isHome = location.pathname === CONNECTICUT_HOME

  useUrbanEliteInteractions(isHome)
  useScrollReveal()
  useScrollToBookingHash()

  return (
    <>
      <Header key={location.pathname} logoPath={CONNECTICUT_HOME} />
      <Outlet />
      <DeferredFooter logoPath={CONNECTICUT_HOME} />
    </>
  )
}
