import { Outlet, useLocation } from 'react-router-dom'
import Header from '../pages/connecticut/layout/Header.jsx'
import DeferredFooter from '../components/layout/DeferredFooter.jsx'
import { useUrbanEliteInteractions } from '../hooks/useUrbanEliteInteractions.js'
import { useScrollReveal } from '../hooks/useScrollReveal.js'
import { useScrollToBookingHash } from '../hooks/useScrollToBookingHash.js'

/**
 * Shared chrome for every page (header + footer). Header is sticky on desktop;
 * on small viewports it scrolls with the page and pins while the mobile menu is open.
 * Interaction logic from the legacy `main.js` runs here so all routes behave the same.
 */
export default function MainLayout() {
  const location = useLocation()
  const isHome = location.pathname === '/'

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
