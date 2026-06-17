import { Outlet, useLocation } from 'react-router-dom'
import Header from './layout/Header.jsx'
import Footer from './layout/Footer.jsx'
import { useUrbanEliteInteractions } from '../../hooks/useUrbanEliteInteractions.js'
import { useScrollReveal } from '../../hooks/useScrollReveal.js'
import { useScrollToBookingHash } from '../../hooks/useScrollToBookingHash.js'

const NEWYORK_HOME = '/new-york-car-service'

/** Layout chrome for the New York car service landing page. */
export default function NewYorkLayout() {
  const location = useLocation()
  const isHome = location.pathname === NEWYORK_HOME

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
