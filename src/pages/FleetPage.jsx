import { lazy, Suspense } from 'react'

const FleetPage = lazy(() => import('./fleet/FleetPage.jsx'))

export default function FleetPageRoute() {
  return (
    <Suspense fallback={null}>
      <FleetPage />
    </Suspense>
  )
}
