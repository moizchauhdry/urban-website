import { lazy, Suspense } from 'react'
import ContactHero from './ContactHero.jsx'
import ViewportLazy from '../../components/common/ViewportLazy.jsx'

const ContactForm = lazy(() => import('./ContactForm.jsx'))
const ContactMap = lazy(() => import('./ContactMap.jsx'))

/** Dedicated Contact Us page. */
export default function ContactUsPage() {
  return (
    <>
      <ContactHero />
      <ViewportLazy
        minHeight={600}
        rootMargin="480px 0px"
        deferMs={0}
        mobileRootMargin="120px 0px"
        mobileDeferMs={2800}
      >
        <Suspense fallback={null}>
          <ContactForm />
          <ContactMap />
        </Suspense>
      </ViewportLazy>
    </>
  )
}
