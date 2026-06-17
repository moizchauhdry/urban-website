import { Outlet, useLocation } from 'react-router-dom'
import Header from './layout/Header.jsx'
import Footer from './layout/Footer.jsx'
import { useUrbanEliteInteractions } from '../../../hooks/useUrbanEliteInteractions.js'
import { useScrollReveal } from '../../../hooks/useScrollReveal.js'
import { useScrollToBookingHash } from '../../../hooks/useScrollToBookingHash.js'

const OHARE_ORD_LIMO_HOME = '/illinois-car-service/ohare-intl-airport-ord-limo-service'

/** Layout chrome for O'Hare Intl Airport (ORD) Limo Service. */
export default function OhareOrdLimoLayout() {
  const location = useLocation()
  const isHome = location.pathname === OHARE_ORD_LIMO_HOME

  useUrbanEliteInteractions(isHome)
  useScrollReveal()
  useScrollToBookingHash()

  return (
    <>
      <Header key={location.pathname} />
      <Outlet />
      <Footer />
    </>
  )
}
