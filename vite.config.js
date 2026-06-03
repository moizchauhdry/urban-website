import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { REGION_SLUGS } from './src/config/regions.js'

/** Dev/preview: serve index.html for /connecticut, /florida, etc. */
function regionSpaFallback(slugs) {
  const escaped = slugs.map((s) => s.replace(/-/g, '\\-'))
  const regionPath = new RegExp(`^/(${escaped.join('|')})(/|$)`)
  const skip =
    /^\/(@|src|node_modules|assets|api)|\.[a-zA-Z0-9]+$|[?&]/

  const middleware = (req, _res, next) => {
    const path = req.url?.split('?')[0] ?? ''
    if (!skip.test(path) && regionPath.test(path)) {
      req.url = '/'
    }
    next()
  }

  return {
    name: 'region-spa-fallback',
    configureServer(server) {
      server.middlewares.use(middleware)
    },
    configurePreviewServer(server) {
      server.middlewares.use(middleware)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  // Relative assets: one build works in /connecticut/, /florida/, etc.
  base: process.env.VITE_BASE_PATH || './',
  plugins: [react(), regionSpaFallback(REGION_SLUGS)],
})
