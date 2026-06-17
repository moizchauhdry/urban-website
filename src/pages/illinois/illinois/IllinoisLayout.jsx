import { Outlet, useLocation } from 'react-router-dom'
import Header from './layout/Header.jsx'
import DeferredFooter from '../../../components/layout/DeferredFooter.jsx'
import { useUrbanEliteInteractions } from '../../../hooks/useUrbanEliteInteractions.js'
import { useScrollReveal } from '../../../hooks/useScrollReveal.js'
import { useScrollToBookingHash } from '../../../hooks/useScrollToBookingHash.js'

const ILLINOIS_HOME = '/illinois-car-service'

/** Layout chrome for Illinois Car Service. */
export default function IllinoisLayout() {
  const location = useLocation()
  const isHome = location.pathname === ILLINOIS_HOME

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
