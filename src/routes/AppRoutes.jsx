import { lazy, Suspense } from 'react'
import { Navigate, Routes, Route, useParams } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout.jsx'
import HomePage from '../pages/home/HomePage.jsx'

const OurServicesPage = lazy(() => import('../pages/our-services/OurServicesPage.jsx'))
const FleetPageInner = lazy(() => import('../pages/fleet/FleetPage.jsx'))
const BookNowPageInner = lazy(() => import('../pages/book-now/BookNowPage.jsx'))
const PrivacyPolicyPageInner = lazy(() => import('../pages/privacy-policy/PrivacyPolicyPage.jsx'))
const TermsOfServicePageInner = lazy(() => import('../pages/terms-of-service/TermsOfServicePage.jsx'))
const ThankYouPageInner = lazy(() => import('../pages/thank-you/ThankYouPage.jsx'))
const MarketingLandingShell = lazy(() => import('../pages/templates/MarketingLandingShell.jsx'))
const FifaHome = lazy(() => import('../pages/fifa/Home.jsx'))

function SuspenseRoute({ children }) {
  return <Suspense fallback={null}>{children}</Suspense>
}

function OtherPageLegacyRedirect() {
  const { slug } = useParams()
  return <Navigate to={slug ? `/${slug}` : '/'} replace />
}

/** Empty child — parent MarketingLandingShell reads pathname and swaps data. */
function LandingProbe() {
  return null
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />

        <Route path="/about-us" element={<Navigate to="/" replace />} />
        <Route path="/our-services" element={<SuspenseRoute><OurServicesPage /></SuspenseRoute>} />
        <Route path="/contact-us" element={<Navigate to="/" replace />} />
        <Route path="/fleet" element={<SuspenseRoute><FleetPageInner /></SuspenseRoute>} />
        <Route path="/book-now" element={<SuspenseRoute><BookNowPageInner /></SuspenseRoute>} />
        <Route path="/privacy-policy" element={<SuspenseRoute><PrivacyPolicyPageInner /></SuspenseRoute>} />
        <Route path="/terms-of-service" element={<SuspenseRoute><TermsOfServicePageInner /></SuspenseRoute>} />
        <Route path="/thank-you" element={<SuspenseRoute><ThankYouPageInner /></SuspenseRoute>} />

        <Route path="/fifa" element={<SuspenseRoute><FifaHome /></SuspenseRoute>} />
        <Route path="/other-pages/:slug" element={<OtherPageLegacyRedirect />} />

        {/*
          One layout element for all marketing landings. Navigating between these
          paths keeps MarketingLandingShell mounted and only probes new page data.
        */}
        <Route
          element={
            <SuspenseRoute>
              <MarketingLandingShell />
            </SuspenseRoute>
          }
        >
          <Route path="connecticut-car-service" element={<LandingProbe />} />
          <Route path="florida-car-service" element={<LandingProbe />} />
          <Route path="new-york-car-service" element={<LandingProbe />} />
          <Route path="illinois-car-service" element={<LandingProbe />} />
          <Route
            path="illinois-car-service/chicago-chauffeur-service"
            element={<LandingProbe />}
          />
          <Route
            path="illinois-car-service/chicago-limo-service"
            element={<LandingProbe />}
          />
          <Route path=":slug" element={<LandingProbe />} />
        </Route>
      </Route>
    </Routes>
  )
}
