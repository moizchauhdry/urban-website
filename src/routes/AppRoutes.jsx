import { lazy, Suspense } from 'react'
import { Navigate, Routes, Route, useParams } from 'react-router-dom'
import SuspenseLoader from '../components/layout/SuspenseLoader.jsx'
import MainLayout from '../layouts/MainLayout.jsx'
import HomePage from '../pages/home/HomePage.jsx'

const AboutUsPage = lazy(() => import('../pages/about-us/AboutUsPage.jsx'))
const OurServicesPage = lazy(() => import('../pages/our-services/OurServicesPage.jsx'))
const ContactUsPage = lazy(() => import('../pages/contact-us/ContactUsPage.jsx'))
const FleetPageInner = lazy(() => import('../pages/fleet/FleetPage.jsx'))
const BookNowPageInner = lazy(() => import('../pages/book-now/BookNowPage.jsx'))
const PrivacyPolicyPageInner = lazy(() => import('../pages/privacy-policy/PrivacyPolicyPage.jsx'))
const ThankYouPageInner = lazy(() => import('../pages/thank-you/ThankYouPage.jsx'))

const ConnecticutHome = lazy(() => import('../pages/connecticut/Home.jsx'))
const FloridaHome = lazy(() => import('../pages/florida/Home.jsx'))
const NewYorkHome = lazy(() => import('../pages/newyork/Home.jsx'))
const IllinoisHome = lazy(() => import('../pages/illinois/illinois/Home.jsx'))
const ChicagoChauffeurHome = lazy(
  () => import('../pages/illinois/chicago-chauffeur-service/Home.jsx'),
)
const ChicagoLimoHome = lazy(() => import('../pages/illinois/chicago-limo-service/Home.jsx'))
const OtherPageLayout = lazy(() => import('../pages/other-pages/PageLayout.jsx'))
const FifaHome = lazy(() => import('../pages/fifa/Home.jsx'))

function SuspenseRoute({ children }) {
  return <Suspense fallback={<SuspenseLoader />}>{children}</Suspense>
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
        <Route path="/thank-you" element={<SuspenseRoute><ThankYouPageInner /></SuspenseRoute>} />

        <Route path="/connecticut-car-service" element={<SuspenseRoute><ConnecticutHome /></SuspenseRoute>} />
        <Route path="/florida-car-service" element={<SuspenseRoute><FloridaHome /></SuspenseRoute>} />
        <Route path="/new-york-car-service" element={<SuspenseRoute><NewYorkHome /></SuspenseRoute>} />
        <Route path="/illinois-car-service" element={<SuspenseRoute><IllinoisHome /></SuspenseRoute>} />
        <Route
          path="/illinois-car-service/chicago-chauffeur-service"
          element={<SuspenseRoute><ChicagoChauffeurHome /></SuspenseRoute>}
        />
        <Route
          path="/illinois-car-service/chicago-limo-service"
          element={<SuspenseRoute><ChicagoLimoHome /></SuspenseRoute>}
        />

        <Route path="/fifa" element={<SuspenseRoute><FifaHome /></SuspenseRoute>} />
        <Route path="/other-pages/:slug" element={<OtherPageLegacyRedirect />} />
        <Route path="/:slug" element={<SuspenseRoute><OtherPageLayout /></SuspenseRoute>} />
      </Route>
    </Routes>
  )
}
