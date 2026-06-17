import { lazy, Suspense } from 'react'

const AboutUsPage = lazy(() => import('./about-us/AboutUsPage.jsx'))

export default function AboutPage() {
  return (
    <Suspense fallback={null}>
      <AboutUsPage />
    </Suspense>
  )
}
