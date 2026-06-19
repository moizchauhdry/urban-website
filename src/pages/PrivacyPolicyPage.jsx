import { lazy, Suspense } from 'react'

const PrivacyPolicyPageContent = lazy(() => import('./privacy-policy/PrivacyPolicyPage.jsx'))

export default function PrivacyPolicyPage() {
  return (
    <Suspense fallback={null}>
      <PrivacyPolicyPageContent />
    </Suspense>
  )
}
