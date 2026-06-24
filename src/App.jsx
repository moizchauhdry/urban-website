import AppRoutes from './routes/AppRoutes.jsx'
import ScrollHideChrome from './components/layout/ScrollHideChrome.jsx'
import ScrollToTop from './components/layout/ScrollToTop.jsx'
import PageMetadata from './components/layout/PageMetadata.jsx'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <ScrollHideChrome />
      <PageMetadata />
      <AppRoutes />
    </>
  )
}
