import { lazy, Suspense } from 'react'
import { Navigate, Routes, Route, useLocation, useParams } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout.jsx'
import HomePage from '../pages/home/HomePage.jsx'
import { stripThankYouSuffix } from '../config/bookingNav.js'

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
const OhareOrdLimoLayout = lazy(
  () => import('../pages/illinois/ohare-intl-airport-ord-limo-service/OhareOrdLimoLayout.jsx'),
)
const OhareOrdCarLayout = lazy(
  () => import('../pages/illinois/ohare-intl-airport-ord-car-service/OhareOrdCarLayout.jsx'),
)
const ChicagoChauffeurLayout = lazy(
  () => import('../pages/illinois/chicago-chauffeur-service/ChicagoChauffeurLayout.jsx'),
)
const ChicagoAirportCarLayout = lazy(
  () => import('../pages/illinois/chicago-airport-car-service/ChicagoAirportCarLayout.jsx'),
)
const ChicagoLimoLayout = lazy(
  () => import('../pages/illinois/chicago-limo-service/ChicagoLimoLayout.jsx'),
)

const ConnecticutHome = lazy(() => import('../pages/connecticut/Home.jsx'))
const FloridaHome = lazy(() => import('../pages/florida/Home.jsx'))
const NewYorkHome = lazy(() => import('../pages/newyork/Home.jsx'))
const IllinoisHome = lazy(() => import('../pages/illinois/illinois/Home.jsx'))
const OhareOrdLimoHome = lazy(
  () => import('../pages/illinois/ohare-intl-airport-ord-limo-service/Home.jsx'),
)
const OhareOrdCarHome = lazy(
  () => import('../pages/illinois/ohare-intl-airport-ord-car-service/Home.jsx'),
)
const ChicagoChauffeurHome = lazy(
  () => import('../pages/illinois/chicago-chauffeur-service/Home.jsx'),
)
const ChicagoAirportCarHome = lazy(
  () => import('../pages/illinois/chicago-airport-car-service/Home.jsx'),
)
const ChicagoLimoHome = lazy(() => import('../pages/illinois/chicago-limo-service/Home.jsx'))

const OtherPageShell = lazy(() => import('../pages/other-pages/OtherPageShell.jsx'))
const FifaLayout = lazy(() => import('../pages/fifa/FifaLayout.jsx'))
const FifaHome = lazy(() => import('../pages/fifa/Home.jsx'))

function OtherPageLegacyRedirect() {
  const { slug } = useParams()
  return <Navigate to={slug ? `/${slug}` : '/'} replace />
}

/** Legacy regional thank-you URLs → single site-wide /thank-you. */
function ThankYouLegacyRedirect() {
  const location = useLocation()
  const returnPath = stripThankYouSuffix(location.pathname)
  return (
    <Navigate
      to={`/thank-you${location.search}`}
      replace
      state={{ returnPath }}
    />
  )
}

const THANK_YOU_LEGACY_PATHS = [
  '/book-now/thank-you',
  '/connecticut-car-service/thank-you',
  '/florida-car-service/thank-you',
  '/new-york-car-service/thank-you',
  '/illinois-car-service/thank-you',
  '/illinois-car-service/ohare-intl-airport-ord-limo-service/thank-you',
  '/illinois-car-service/ohare-intl-airport-ord-car-service/thank-you',
  '/illinois-car-service/chicago-chauffeur-service/thank-you',
  '/illinois-car-service/chicago-airport-car-service/thank-you',
  '/illinois-car-service/chicago-limo-service/thank-you',
  '/fifa/thank-you',
]

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/about-us"
          element={
            <Suspense fallback={null}>
              <AboutPage />
            </Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <Suspense fallback={null}>
              <AboutPage />
            </Suspense>
          }
        />
        <Route
          path="/our-services"
          element={
            <Suspense fallback={null}>
              <ServicesPage />
            </Suspense>
          }
        />
        <Route
          path="/services"
          element={
            <Suspense fallback={null}>
              <ServicesPage />
            </Suspense>
          }
        />
        <Route
          path="/contact-us"
          element={
            <Suspense fallback={null}>
              <ContactPage />
            </Suspense>
          }
        />
        <Route
          path="/contact"
          element={
            <Suspense fallback={null}>
              <ContactPage />
            </Suspense>
          }
        />
        <Route
          path="/fleet"
          element={
            <Suspense fallback={null}>
              <FleetPage />
            </Suspense>
          }
        />
        <Route
          path="/book-now"
          element={
            <Suspense fallback={null}>
              <BookNowPage />
            </Suspense>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <Suspense fallback={null}>
              <PrivacyPolicyPage />
            </Suspense>
          }
        />
        <Route
          path="/thank-you"
          element={
            <Suspense fallback={null}>
              <ThankYouPage />
            </Suspense>
          }
        />
      </Route>

      {THANK_YOU_LEGACY_PATHS.map((path) => (
        <Route key={path} path={path} element={<ThankYouLegacyRedirect />} />
      ))}

      <Route
        element={
          <Suspense fallback={null}>
            <ConnecticutLayout />
          </Suspense>
        }
      >
        <Route
          path="/connecticut-car-service"
          element={
            <Suspense fallback={null}>
              <ConnecticutHome />
            </Suspense>
          }
        />
      </Route>
      <Route
        element={
          <Suspense fallback={null}>
            <FloridaLayout />
          </Suspense>
        }
      >
        <Route
          path="/florida-car-service"
          element={
            <Suspense fallback={null}>
              <FloridaHome />
            </Suspense>
          }
        />
      </Route>
      <Route
        element={
          <Suspense fallback={null}>
            <NewYorkLayout />
          </Suspense>
        }
      >
        <Route
          path="/new-york-car-service"
          element={
            <Suspense fallback={null}>
              <NewYorkHome />
            </Suspense>
          }
        />
      </Route>
      <Route
        element={
          <Suspense fallback={null}>
            <IllinoisLayout />
          </Suspense>
        }
      >
        <Route
          path="/illinois-car-service"
          element={
            <Suspense fallback={null}>
              <IllinoisHome />
            </Suspense>
          }
        />
      </Route>
      <Route
        element={
          <Suspense fallback={null}>
            <OhareOrdLimoLayout />
          </Suspense>
        }
      >
        <Route
          path="/illinois-car-service/ohare-intl-airport-ord-limo-service"
          element={
            <Suspense fallback={null}>
              <OhareOrdLimoHome />
            </Suspense>
          }
        />
      </Route>
      <Route
        element={
          <Suspense fallback={null}>
            <OhareOrdCarLayout />
          </Suspense>
        }
      >
        <Route
          path="/illinois-car-service/ohare-intl-airport-ord-car-service"
          element={
            <Suspense fallback={null}>
              <OhareOrdCarHome />
            </Suspense>
          }
        />
      </Route>
      <Route
        element={
          <Suspense fallback={null}>
            <ChicagoChauffeurLayout />
          </Suspense>
        }
      >
        <Route
          path="/illinois-car-service/chicago-chauffeur-service"
          element={
            <Suspense fallback={null}>
              <ChicagoChauffeurHome />
            </Suspense>
          }
        />
      </Route>
      <Route
        element={
          <Suspense fallback={null}>
            <ChicagoAirportCarLayout />
          </Suspense>
        }
      >
        <Route
          path="/illinois-car-service/chicago-airport-car-service"
          element={
            <Suspense fallback={null}>
              <ChicagoAirportCarHome />
            </Suspense>
          }
        />
      </Route>
      <Route
        element={
          <Suspense fallback={null}>
            <ChicagoLimoLayout />
          </Suspense>
        }
      >
        <Route
          path="/illinois-car-service/chicago-limo-service"
          element={
            <Suspense fallback={null}>
              <ChicagoLimoHome />
            </Suspense>
          }
        />
      </Route>

      {/* FIFA World Cup 2026 — preview only; not in main nav */}
      <Route
        element={
          <Suspense fallback={null}>
            <FifaLayout />
          </Suspense>
        }
      >
        <Route
          path="/fifa"
          element={
            <Suspense fallback={null}>
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
          <Suspense fallback={null}>
            <OtherPageShell />
          </Suspense>
        }
      />
    </Routes>
  )
}
