import { lazy, Suspense } from 'react'

const ContactUsPage = lazy(() => import('./contact-us/ContactUsPage.jsx'))

export default function ContactPage() {
  return (
    <Suspense fallback={null}>
      <ContactUsPage />
    </Suspense>
  )
}
