import SuspenseLoader from '../components/layout/SuspenseLoader.jsx'
import { lazy, Suspense } from 'react'

const OurServicesPage = lazy(() => import('./our-services/OurServicesPage.jsx'))

export default function ServicesPage() {
  return (
    <Suspense fallback={<SuspenseLoader />}>
      <OurServicesPage />
    </Suspense>
  )
}
