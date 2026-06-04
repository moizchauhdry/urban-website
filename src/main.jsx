import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './styles/global.css'
import 'react-phone-number-input/style.css'
import './index.css'
import App from './App.jsx'
import { RegionProvider } from './context/RegionContext.jsx'
import { getRouterBasename } from './lib/appBase.js'
import { normalizeAppUrl } from './lib/browserPath.js'

normalizeAppUrl()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={getRouterBasename()}>
      <RegionProvider>
        <App />
      </RegionProvider>
    </BrowserRouter>
  </StrictMode>,
)
