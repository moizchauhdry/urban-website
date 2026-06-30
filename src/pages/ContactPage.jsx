import SuspenseLoader from '../components/layout/SuspenseLoader.jsx'
import { lazy, Suspense } from 'react'

const ContactUsPage = lazy(() => import('./contact-us/ContactUsPage.jsx'))

export default function ContactPage() {
  return (
    <Suspense fallback={<SuspenseLoader />}>
      <ContactUsPage />
    </Suspense>
  )
}
