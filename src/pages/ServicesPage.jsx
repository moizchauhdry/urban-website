import { lazy, Suspense, useEffect } from 'react'

const Services = lazy(() => import('../components/sections/Services.jsx'))

export default function ServicesPage() {
  useEffect(() => {
    document.title = 'Our Services | Urban Elite Limo'
  }, [])

  return (
    <Suspense fallback={null}>
      <Services />
    </Suspense>
  )
}
