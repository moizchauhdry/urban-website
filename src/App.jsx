import { lazy, Suspense } from 'react'
import AppRoutes from './routes/AppRoutes.jsx'
import GlobalLoadingHandler from './components/layout/GlobalLoadingHandler.jsx'
import ScrollToTop from './components/layout/ScrollToTop.jsx'
import SiteLoader from './components/layout/SiteLoader.jsx'
import SuspenseLoader from './components/layout/SuspenseLoader.jsx'
import { LoadingProvider } from './context/LoadingContext.jsx'

const ScrollHideChrome = lazy(() => import('./components/layout/ScrollHideChrome.jsx'))
const PageMetadata = lazy(() => import('./components/layout/PageMetadata.jsx'))

export default function App() {
  return (
    <LoadingProvider>
      <ScrollToTop />
      <GlobalLoadingHandler />
      <SiteLoader />
      <Suspense fallback={<SuspenseLoader />}>
        <ScrollHideChrome />
        <PageMetadata />
      </Suspense>
      <AppRoutes />
    </LoadingProvider>
  )
}
