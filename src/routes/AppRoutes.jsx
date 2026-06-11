import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout.jsx'
import Home from '../pages/Home.jsx'

const AboutPage = lazy(() => import('../pages/AboutPage.jsx'))
const ServicesPage = lazy(() => import('../pages/ServicesPage.jsx'))
const ContactPage = lazy(() => import('../pages/ContactPage.jsx'))

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={
            <Suspense fallback={null}>
              <AboutPage />
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
          path="/contact"
          element={
            <Suspense fallback={null}>
              <ContactPage />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  )
}
