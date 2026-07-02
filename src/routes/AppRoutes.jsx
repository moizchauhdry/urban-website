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
        {/* Main site */}
        <Route path="/" element={<HomePage />} />
        <Route
          path="/about-us"
          element={
            <SuspenseRoute>
              <AboutPage />
            </SuspenseRoute>
          }
        />
        <Route
          path="/our-services"
          element={
            <SuspenseRoute>
              <ServicesPage />
            </SuspenseRoute>
          }
        />
        <Route
          path="/contact-us"
          element={
            <SuspenseRoute>
              <ContactPage />
            </SuspenseRoute>
          }
        />
        <Route
          path="/fleet"
          element={
            <SuspenseRoute>
              <FleetPage />
            </SuspenseRoute>
          }
        />
        <Route
          path="/book-now"
          element={
            <SuspenseRoute>
              <BookNowPage />
            </SuspenseRoute>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <SuspenseRoute>
              <PrivacyPolicyPage />
            </SuspenseRoute>
          }
        />
        <Route
          path="/thank-you"
          element={
            <SuspenseRoute>
              <ThankYouPage />
            </SuspenseRoute>
          }
        />

        {/* Regional hub landing pages */}
        <Route
          element={
            <SuspenseRoute>
              <ConnecticutLayout />
            </SuspenseRoute>
          }
        >
          <Route
            path="/connecticut-car-service"
            element={
              <SuspenseRoute>
                <ConnecticutHome />
              </SuspenseRoute>
            }
          />
        </Route>
        <Route
          element={
            <SuspenseRoute>
              <FloridaLayout />
            </SuspenseRoute>
          }
        >
          <Route
            path="/florida-car-service"
            element={
              <SuspenseRoute>
                <FloridaHome />
              </SuspenseRoute>
            }
          />
        </Route>
        <Route
          element={
            <SuspenseRoute>
              <NewYorkLayout />
            </SuspenseRoute>
          }
        >
          <Route
            path="/new-york-car-service"
            element={
              <SuspenseRoute>
                <NewYorkHome />
              </SuspenseRoute>
            }
          />
        </Route>
        <Route
          element={
            <SuspenseRoute>
              <IllinoisLayout />
            </SuspenseRoute>
          }
        >
          <Route
            path="/illinois-car-service"
            element={
              <SuspenseRoute>
                <IllinoisHome />
              </SuspenseRoute>
            }
          />
        </Route>
        <Route
          element={
            <SuspenseRoute>
              <ChicagoChauffeurLayout />
            </SuspenseRoute>
          }
        >
          <Route
            path="/illinois-car-service/chicago-chauffeur-service"
            element={
              <SuspenseRoute>
                <ChicagoChauffeurHome />
              </SuspenseRoute>
            }
          />
        </Route>
        <Route
          element={
            <SuspenseRoute>
              <ChicagoLimoLayout />
            </SuspenseRoute>
          }
        >
          <Route
            path="/illinois-car-service/chicago-limo-service"
            element={
              <SuspenseRoute>
                <ChicagoLimoHome />
              </SuspenseRoute>
            }
          />
        </Route>

        {/* FIFA World Cup 2026 — preview only; not in main nav */}
        <Route
          element={
            <SuspenseRoute>
              <FifaLayout />
            </SuspenseRoute>
          }
        >
          <Route
            path="/fifa"
            element={
              <SuspenseRoute>
                <FifaHome />
              </SuspenseRoute>
            }
          />
        </Route>

        {/* Legacy other-pages URL */}
        <Route path="/other-pages/:slug" element={<OtherPageLegacyRedirect />} />

        {/* City / airport landing pages — must stay last (catch-all slug) */}
        <Route
          path="/:slug"
          element={
            <SuspenseRoute>
              <OtherPageShell />
            </SuspenseRoute>
          }
        />
      </Route>
    </Routes>
  )
}
