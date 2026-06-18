import { lazy, Suspense } from 'react'

const BookNowPageContent = lazy(() => import('./book-now/BookNowPage.jsx'))

export default function BookNowPage() {
  return (
    <Suspense fallback={null}>
      <BookNowPageContent />
    </Suspense>
  )
}
