import { lazy, Suspense, useEffect, useState } from 'react'

const Footer = lazy(() => import('../../pages/connecticut/layout/Footer.jsx'))

/** Footer is below the fold — load after idle to shrink the initial JS parse cost. */
export default function DeferredFooter(props) {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (typeof requestIdleCallback !== 'undefined') {
      const id = requestIdleCallback(() => setReady(true), { timeout: 2500 })
      return () => cancelIdleCallback(id)
    }
    const timer = window.setTimeout(() => setReady(true), 1200)
    return () => window.clearTimeout(timer)
  }, [])

  if (!ready) {
    return <div className="footer-skeleton" aria-hidden="true" />
  }

  return (
    <Suspense fallback={<div className="footer-skeleton" aria-hidden="true" />}>
      <Footer {...props} />
    </Suspense>
  )
}
