import AppRoutes from './routes/AppRoutes.jsx'
import ScrollHideChrome from './components/layout/ScrollHideChrome.jsx'
import ScrollToTop from './components/layout/ScrollToTop.jsx'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <ScrollHideChrome />
      <AppRoutes />
    </>
  )
}
