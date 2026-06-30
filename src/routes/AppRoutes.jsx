import { lazy, Suspense } from 'react'
import { Navigate, Routes, Route, useParams } from 'react-router-dom'
import SuspenseLoader from '../components/layout/SuspenseLoader.jsx'
import MainLayout from '../layouts/MainLayout.jsx'
import HomePage from '../pages/home/HomePage.jsx'

const AboutPage = lazy(() => import('../pages/AboutPage.jsx'))
const ServicesPage = lazy(() => import('../pages/ServicesPage.jsx'))
const ContactPage = lazy(() => import('../pages/ContactPage.jsx'))
const FleetPage = lazy(() => import('../pages/FleetPage.jsx'))
const BookNowPage = lazy(() => import('../pages/BookNowPage.jsx'))
const PrivacyPolicyPage = lazy(() => import('../pages/PrivacyPolicyPage.jsx'))
const ThankYouPage = lazy(() => import('../pages/ThankYouPage.jsx'))

const ConnecticutLayout = lazy(() => import('../pages/connecticut/ConnecticutLayout.jsx'))
const FloridaLayout = lazy(() => import('../pages/florida/FloridaLayout.jsx'))
const NewYorkLayout = lazy(() => import('../pages/newyork/NewYorkLayout.jsx'))
const IllinoisLayout = lazy(() => import('../pages/illinois/illinois/IllinoisLayout.jsx'))
const ChicagoChauffeurLayout = lazy(
  () => import('../pages/illinois/chicago-chauffeur-service/ChicagoChauffeurLayout.jsx'),
)
const ChicagoLimoLayout = lazy(
  () => import('../pages/illinois/chicago-limo-service/ChicagoLimoLayout.jsx'),
)

const ConnecticutHome = lazy(() => import('../pages/connecticut/Home.jsx'))
const FloridaHome = lazy(() => import('../pages/florida/Home.jsx'))
const NewYorkHome = lazy(() => import('../pages/newyork/Home.jsx'))
const IllinoisHome = lazy(() => import('../pages/illinois/illinois/Home.jsx'))
const ChicagoChauffeurHome = lazy(
  () => import('../pages/illinois/chicago-chauffeur-service/Home.jsx'),
)
const ChicagoLimoHome = lazy(() => import('../pages/illinois/chicago-limo-service/Home.jsx'))

const OtherPageShell = lazy(() => import('../pages/other-pages/OtherPageShell.jsx'))
const FifaLayout = lazy(() => import('../pages/fifa/FifaLayout.jsx'))
const FifaHome = lazy(() => import('../pages/fifa/Home.jsx'))

function OtherPageLegacyRedirect() {
  const { slug } = useParams()
  return <Navigate to={slug ? `/${slug}` : '/'} replace />
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/about-us"
          element={
            <Suspense fallback={<SuspenseLoader />}>
              <AboutPage />
            </Suspense>
          }
        />
        <Route
          path="/our-services"
          element={
            <Suspense fallback={<SuspenseLoader />}>
              <ServicesPage />
            </Suspense>
          }
        />
        <Route
          path="/contact-us"
          element={
            <Suspense fallback={<SuspenseLoader />}>
              <ContactPage />
            </Suspense>
          }
        />
        <Route
          path="/fleet"
          element={
            <Suspense fallback={<SuspenseLoader />}>
              <FleetPage />
            </Suspense>
          }
        />
        <Route
          path="/book-now"
          element={
            <Suspense fallback={<SuspenseLoader />}>
              <BookNowPage />
            </Suspense>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <Suspense fallback={<SuspenseLoader />}>
              <PrivacyPolicyPage />
            </Suspense>
          }
        />
        <Route
          path="/thank-you"
          element={
            <Suspense fallback={<SuspenseLoader />}>
              <ThankYouPage />
            </Suspense>
          }
        />
      </Route>

      <Route
        element={
          <Suspense fallback={<SuspenseLoader />}>
            <ConnecticutLayout />
          </Suspense>
        }
      >
        <Route
          path="/connecticut-car-service"
          element={
            <Suspense fallback={<SuspenseLoader />}>
              <ConnecticutHome />
            </Suspense>
          }
        />
      </Route>
      <Route
        element={
          <Suspense fallback={<SuspenseLoader />}>
            <FloridaLayout />
          </Suspense>
        }
      >
        <Route
          path="/florida-car-service"
          element={
            <Suspense fallback={<SuspenseLoader />}>
              <FloridaHome />
            </Suspense>
          }
        />
      </Route>
      <Route
        element={
          <Suspense fallback={<SuspenseLoader />}>
            <NewYorkLayout />
          </Suspense>
        }
      >
        <Route
          path="/new-york-car-service"
          element={
            <Suspense fallback={<SuspenseLoader />}>
              <NewYorkHome />
            </Suspense>
          }
        />
      </Route>
      <Route
        element={
          <Suspense fallback={<SuspenseLoader />}>
            <IllinoisLayout />
          </Suspense>
        }
      >
        <Route
          path="/illinois-car-service"
          element={
            <Suspense fallback={<SuspenseLoader />}>
              <IllinoisHome />
            </Suspense>
          }
        />
      </Route>
      <Route
        element={
          <Suspense fallback={<SuspenseLoader />}>
            <ChicagoChauffeurLayout />
          </Suspense>
        }
      >
        <Route
          path="/illinois-car-service/chicago-chauffeur-service"
          element={
            <Suspense fallback={<SuspenseLoader />}>
              <ChicagoChauffeurHome />
            </Suspense>
          }
        />
      </Route>
      <Route
        element={
          <Suspense fallback={<SuspenseLoader />}>
            <ChicagoLimoLayout />
          </Suspense>
        }
      >
        <Route
          path="/illinois-car-service/chicago-limo-service"
          element={
            <Suspense fallback={<SuspenseLoader />}>
              <ChicagoLimoHome />
            </Suspense>
          }
        />
      </Route>

      {/* FIFA World Cup 2026 — preview only; not in main nav */}
      <Route
        element={
          <Suspense fallback={<SuspenseLoader />}>
            <FifaLayout />
          </Suspense>
        }
      >
        <Route
          path="/fifa"
          element={
            <Suspense fallback={<SuspenseLoader />}>
              <FifaHome />
            </Suspense>
          }
        />
      </Route>

      {/* Extra landing pages — not in main nav; preview at /:slug */}
      <Route path="/other-pages/:slug" element={<OtherPageLegacyRedirect />} />
      <Route
        path="/:slug"
        element={
          <Suspense fallback={<SuspenseLoader />}>
            <OtherPageShell />
          </Suspense>
        }
      />
    </Routes>
  )
}
