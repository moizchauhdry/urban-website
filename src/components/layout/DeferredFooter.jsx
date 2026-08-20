import { lazy, Suspense, useEffect, useState } from 'react'
import { isPhoneViewport } from '../../config/breakpoints.js'

const Footer = lazy(() => import('./landing/LandingFooter.jsx'))

/** Footer is below the fold — on phones, delay longer to protect LCP. */
export default function DeferredFooter(props) {
  const [ready, setReady] = useState(() => typeof window !== 'undefined' && !isPhoneViewport())

  useEffect(() => {
    if (ready) return undefined
    if (typeof requestIdleCallback !== 'undefined') {
      const id = requestIdleCallback(() => setReady(true), { timeout: 3500 })
      return () => cancelIdleCallback(id)
    }
    const timer = window.setTimeout(() => setReady(true), 2500)
    return () => window.clearTimeout(timer)
  }, [ready])

  if (!ready) {
    return <div className="footer-skeleton" aria-hidden="true" />
  }

  return (
    <Suspense fallback={<div className="footer-skeleton" aria-hidden="true" />}>
      <Footer {...props} />
    </Suspense>
  )
}
