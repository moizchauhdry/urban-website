import { Outlet, useLocation } from 'react-router-dom'
import LandingHeader from '../components/layout/landing/LandingHeader.jsx'
import DeferredFooter from '../components/layout/DeferredFooter.jsx'
import { useUrbanEliteInteractions } from '../hooks/useUrbanEliteInteractions.js'
import { useScrollReveal } from '../hooks/useScrollReveal.js'
import { useScrollToBookingHash } from '../hooks/useScrollToBookingHash.js'
import { resolveLayoutContext } from '../config/layoutContext.js'
import { MAIN_HOME } from '../config/routes.js'

/** Root layout — shared navbar and footer on every route. */
export default function MainLayout() {
  const location = useLocation()
  const { headerVariant, isHeroHome, wrapperClassName } = resolveLayoutContext(location.pathname)

  useUrbanEliteInteractions(isHeroHome)
  useScrollReveal()
  useScrollToBookingHash()

  const content = (
    <>
      <LandingHeader homePath={MAIN_HOME} variant={headerVariant} />
      <Outlet />
      <DeferredFooter />
    </>
  )

  if (wrapperClassName) {
    return <div className={wrapperClassName}>{content}</div>
  }

  return content
}
