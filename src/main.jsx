import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import '@fontsource/space-grotesk/latin-400.css'
import '@fontsource/space-grotesk/latin-700.css'
import './styles/global.css'
import App from './App.jsx'

/** Match Vite `base` in production (e.g. /connecticut-black-car-service/). */
const routerBasename = import.meta.env.BASE_URL.replace(/\/$/, '') || undefined

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={routerBasename}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)

/** Medium weights are not needed for first paint — load after idle. */
function loadSecondaryFonts() {
  void import('@fontsource/space-grotesk/latin-500.css')
  void import('@fontsource/space-grotesk/latin-600.css')
}
if (typeof requestIdleCallback !== 'undefined') {
  requestIdleCallback(loadSecondaryFonts, { timeout: 4000 })
} else {
  window.addEventListener('load', () => setTimeout(loadSecondaryFonts, 2000), { once: true })
}
