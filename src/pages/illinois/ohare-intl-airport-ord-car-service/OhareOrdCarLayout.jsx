import { Outlet, useLocation } from 'react-router-dom'
import Header from './layout/Header.jsx'
import DeferredFooter from '../../../components/layout/DeferredFooter.jsx'
import { useUrbanEliteInteractions } from '../../../hooks/useUrbanEliteInteractions.js'
import { useScrollReveal } from '../../../hooks/useScrollReveal.js'
import { useScrollToBookingHash } from '../../../hooks/useScrollToBookingHash.js'

const OHARE_ORD_CAR_HOME = '/illinois-car-service/ohare-intl-airport-ord-car-service'

/** Layout chrome for O'Hare Intl Airport (ORD) Car Service. */
export default function OhareOrdCarLayout() {
  const location = useLocation()
  const isHome = location.pathname === OHARE_ORD_CAR_HOME

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
