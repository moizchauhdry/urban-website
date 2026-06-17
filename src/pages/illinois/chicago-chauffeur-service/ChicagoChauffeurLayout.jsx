import { Outlet, useLocation } from 'react-router-dom'
import Header from './layout/Header.jsx'
import Footer from './layout/Footer.jsx'
import { useUrbanEliteInteractions } from '../../../hooks/useUrbanEliteInteractions.js'
import { useScrollReveal } from '../../../hooks/useScrollReveal.js'

const CHICAGO_CHAUFFEUR_HOME = '/illinois-car-service/chicago-chauffeur-service'

/** Layout chrome for Chicago Chauffeur Service. */
export default function ChicagoChauffeurLayout() {
  const location = useLocation()
  const isHome = location.pathname === CHICAGO_CHAUFFEUR_HOME

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
