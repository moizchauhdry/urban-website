import { Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout.jsx'
import Home from '../pages/Home.jsx'
import AboutPage from '../pages/AboutPage.jsx'
import ServicesPage from '../pages/ServicesPage.jsx'
import ContactPage from '../pages/ContactPage.jsx'

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/index.html" element={<Navigate to="/" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
