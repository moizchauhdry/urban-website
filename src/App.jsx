import { lazy, Suspense } from 'react'
import AppRoutes from './routes/AppRoutes.jsx'
import ScrollToTop from './components/layout/ScrollToTop.jsx'

const ScrollHideChrome = lazy(() => import('./components/layout/ScrollHideChrome.jsx'))
const PageMetadata = lazy(() => import('./components/layout/PageMetadata.jsx'))

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={null}>
        <ScrollHideChrome />
        <PageMetadata />
      </Suspense>
      <AppRoutes />
    </>
  )
}
