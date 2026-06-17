import { Outlet, useLocation } from 'react-router-dom'
import Header from './layout/Header.jsx'
import Footer from './layout/Footer.jsx'
import { useUrbanEliteInteractions } from '../../../hooks/useUrbanEliteInteractions.js'
import { useScrollReveal } from '../../../hooks/useScrollReveal.js'

const CHICAGO_LIMO_HOME = '/illinois-car-service/chicago-limo-service'

/** Layout chrome for Chicago Limo Service. */
export default function ChicagoLimoLayout() {
  const location = useLocation()
  const isHome = location.pathname === CHICAGO_LIMO_HOME

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
