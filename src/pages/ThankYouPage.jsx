import { lazy, Suspense } from 'react'

const ThankYouPageContent = lazy(() => import('./thank-you/ThankYouPage.jsx'))

export default function ThankYouPage() {
  return (
    <Suspense fallback={null}>
      <ThankYouPageContent />
    </Suspense>
  )
}
