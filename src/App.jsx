import { lazy, Suspense, useEffect, useState } from 'react'
import AppRoutes from './routes/AppRoutes.jsx'
import ScrollToTop from './components/layout/ScrollToTop.jsx'
import { isPhoneViewport } from './config/breakpoints.js'

const SmoothScroll = lazy(() => import('./components/layout/SmoothScroll.jsx'))
const ScrollHideChrome = lazy(() => import('./components/layout/ScrollHideChrome.jsx'))
const PageMetadata = lazy(() => import('./components/layout/PageMetadata.jsx'))

function DeferredSmoothScroll() {
  const [ready, setReady] = useState(() => typeof window !== 'undefined' && !isPhoneViewport())

  useEffect(() => {
    if (ready) return undefined
    if (typeof window.requestIdleCallback === 'function') {
      const id = window.requestIdleCallback(() => setReady(true), { timeout: 3500 })
      return () => window.cancelIdleCallback?.(id)
    }
    const timer = window.setTimeout(() => setReady(true), 2500)
    return () => window.clearTimeout(timer)
  }, [ready])

  if (!ready) return null
  return (
    <Suspense fallback={null}>
      <SmoothScroll />
    </Suspense>
  )
}

export default function App() {
  return (
    <>
      <DeferredSmoothScroll />
      <ScrollToTop />
      <Suspense fallback={null}>
        <ScrollHideChrome />
        <PageMetadata />
      </Suspense>
      <AppRoutes />
    </>
  )
}
