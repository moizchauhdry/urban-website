import Home from './Home.jsx'
import Header from './layout/Header.jsx'
import DeferredFooter from '../../../components/layout/DeferredFooter.jsx'
import { PAGE_HOME } from './layout/navConfig.js'
import { useUrbanEliteInteractions } from '../../../hooks/useUrbanEliteInteractions.js'
import { useScrollReveal } from '../../../hooks/useScrollReveal.js'
import { useScrollToBookingHash } from '../../../hooks/useScrollToBookingHash.js'
import '../../../styles/other-pages/lga-airport-car-service.css'

/** Layout for LGA Airport Car Service. */
export default function PageLayout() {
  useUrbanEliteInteractions(true)
  useScrollReveal()
  useScrollToBookingHash()

  return (
    <>
      <Header logoPath={PAGE_HOME} />
      <Home />
      <DeferredFooter logoPath={PAGE_HOME} />
    </>
  )
}
