import SuspenseLoader from '../components/layout/SuspenseLoader.jsx'
import { lazy, Suspense } from 'react'

const AboutUsPage = lazy(() => import('./about-us/AboutUsPage.jsx'))

export default function AboutPage() {
  return (
    <Suspense fallback={<SuspenseLoader />}>
      <AboutUsPage />
    </Suspense>
  )
}
