import { lazy, Suspense } from 'react'
import SuspenseLoader from '../components/layout/SuspenseLoader.jsx'

const BookNowPageContent = lazy(() => import('./book-now/BookNowPage.jsx'))

export default function BookNowPage() {
  return (
    <Suspense fallback={<SuspenseLoader />}>
      <BookNowPageContent />
    </Suspense>
  )
}
