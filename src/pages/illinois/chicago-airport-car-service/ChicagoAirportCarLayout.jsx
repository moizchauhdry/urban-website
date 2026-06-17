import { Outlet, useLocation } from 'react-router-dom'
import Header from './layout/Header.jsx'
import Footer from './layout/Footer.jsx'
import { useUrbanEliteInteractions } from '../../../hooks/useUrbanEliteInteractions.js'
import { useScrollReveal } from '../../../hooks/useScrollReveal.js'

const CHICAGO_AIRPORT_CAR_HOME = '/illinois-car-service/chicago-airport-car-service'

/** Layout chrome for Chicago Airport Car Service. */
export default function ChicagoAirportCarLayout() {
  const location = useLocation()
  const isHome = location.pathname === CHICAGO_AIRPORT_CAR_HOME

  useUrbanEliteInteractions(isHome)
  useScrollReveal()

  return (
    <>
      <Header key={location.pathname} />
      <Outlet />
      <Footer />
    </>
  )
}
