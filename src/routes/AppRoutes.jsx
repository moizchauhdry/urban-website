import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout.jsx'
import HomePage from '../pages/home/HomePage.jsx'

const AboutPage = lazy(() => import('../pages/AboutPage.jsx'))
const ServicesPage = lazy(() => import('../pages/ServicesPage.jsx'))
const ContactPage = lazy(() => import('../pages/ContactPage.jsx'))
const FleetPage = lazy(() => import('../pages/FleetPage.jsx'))

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
      </Route>

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
    </Routes>
  )
}
