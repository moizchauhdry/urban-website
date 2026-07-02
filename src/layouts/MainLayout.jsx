import { Outlet, useLocation } from 'react-router-dom'
import LandingHeader from '../components/layout/landing/LandingHeader.jsx'
import DeferredFooter from '../components/layout/DeferredFooter.jsx'
import { useUrbanEliteInteractions } from '../hooks/useUrbanEliteInteractions.js'
import { useScrollReveal } from '../hooks/useScrollReveal.js'
import { useScrollToBookingHash } from '../hooks/useScrollToBookingHash.js'
import {
  ABOUT_US,
  BOOK_NOW,
  CONTACT_US,
  FLEET,
  MAIN_HOME,
  OUR_SERVICES,
  PRIVACY_POLICY,
  THANK_YOU,
} from '../config/routes.js'

/** Routes that use MainLayout header/footer (main site pages). */
const MAIN_SITE_PATHS = new Set([
  MAIN_HOME,
  ABOUT_US,
  OUR_SERVICES,
  CONTACT_US,
  FLEET,
  BOOK_NOW,
  PRIVACY_POLICY,
  THANK_YOU,
])

/**
 * Root layout for all routes. Main site pages get global header/footer;
 * landing pages render their own chrome via LandingPageShell in child layouts.
 */
export default function MainLayout() {
  const location = useLocation()
  const isMainSite = MAIN_SITE_PATHS.has(location.pathname)

  useUrbanEliteInteractions(location.pathname === MAIN_HOME)
  useScrollReveal()
  useScrollToBookingHash()

  if (!isMainSite) {
    return <Outlet />
  }

  return (
    <>
      <LandingHeader key={location.pathname} homePath={MAIN_HOME} variant="connecticut" />
      <Outlet />
      <DeferredFooter />
    </>
  )
}
