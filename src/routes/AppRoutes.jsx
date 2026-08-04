import { lazy, Suspense } from 'react'
import { Navigate, Routes, Route, useParams } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout.jsx'
import HomePage from '../pages/home/HomePage.jsx'

const AboutUsPage = lazy(() => import('../pages/about-us/AboutUsPage.jsx'))
const OurServicesPage = lazy(() => import('../pages/our-services/OurServicesPage.jsx'))
const ContactUsPage = lazy(() => import('../pages/contact-us/ContactUsPage.jsx'))
const FleetPageInner = lazy(() => import('../pages/fleet/FleetPage.jsx'))
const BookNowPageInner = lazy(() => import('../pages/book-now/BookNowPage.jsx'))
const PrivacyPolicyPageInner = lazy(() => import('../pages/privacy-policy/PrivacyPolicyPage.jsx'))
const TermsOfServicePageInner = lazy(() => import('../pages/terms-of-service/TermsOfServicePage.jsx'))
const ThankYouPageInner = lazy(() => import('../pages/thank-you/ThankYouPage.jsx'))
const HubLandingPage = lazy(() => import('../pages/templates/HubLandingPage.jsx'))
const OtherPageLayout = lazy(() => import('../pages/other-pages/PageLayout.jsx'))
const FifaHome = lazy(() => import('../pages/fifa/Home.jsx'))

function SuspenseRoute({ children }) {
  return <Suspense fallback={null}>{children}</Suspense>
}

function HubRoute({ hub }) {
  return (
    <SuspenseRoute>
      <HubLandingPage hub={hub} />
    </SuspenseRoute>
  )
}

function OtherPageLegacyRedirect() {
  const { slug } = useParams()
  return <Navigate to={slug ? `/${slug}` : '/'} replace />
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />

        <Route path="/about-us" element={<SuspenseRoute><AboutUsPage /></SuspenseRoute>} />
        <Route path="/our-services" element={<SuspenseRoute><OurServicesPage /></SuspenseRoute>} />
        <Route path="/contact-us" element={<SuspenseRoute><ContactUsPage /></SuspenseRoute>} />
        <Route path="/fleet" element={<SuspenseRoute><FleetPageInner /></SuspenseRoute>} />
        <Route path="/book-now" element={<SuspenseRoute><BookNowPageInner /></SuspenseRoute>} />
        <Route path="/privacy-policy" element={<SuspenseRoute><PrivacyPolicyPageInner /></SuspenseRoute>} />
        <Route path="/terms-of-service" element={<SuspenseRoute><TermsOfServicePageInner /></SuspenseRoute>} />
        <Route path="/thank-you" element={<SuspenseRoute><ThankYouPageInner /></SuspenseRoute>} />

        <Route path="/connecticut-car-service" element={<HubRoute hub="connecticut" />} />
        <Route path="/florida-car-service" element={<HubRoute hub="florida" />} />
        <Route path="/new-york-car-service" element={<HubRoute hub="newyork" />} />
        <Route path="/illinois-car-service" element={<HubRoute hub="illinois" />} />
        <Route
          path="/illinois-car-service/chicago-chauffeur-service"
          element={<HubRoute hub="chicago-chauffeur" />}
        />
        <Route
          path="/illinois-car-service/chicago-limo-service"
          element={<HubRoute hub="chicago-limo" />}
        />

        <Route path="/fifa" element={<SuspenseRoute><FifaHome /></SuspenseRoute>} />
        <Route path="/other-pages/:slug" element={<OtherPageLegacyRedirect />} />
        <Route path="/:slug" element={<SuspenseRoute><OtherPageLayout /></SuspenseRoute>} />
      </Route>
    </Routes>
  )
}
