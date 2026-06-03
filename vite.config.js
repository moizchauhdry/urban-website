import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { REGION_SLUGS } from './src/config/regions.js'
import { normalizeDeployPath } from './src/config/deployPath.js'

const deployPath = normalizeDeployPath(process.env.VITE_DEPLOY_PATH)
const deploySegment = deployPath.replace(/^\/|\/$/g, '')

/** Dev/preview: region URLs (e.g. /connecticut) serve the SPA from the deploy path. */
function regionSpaFallback(slugs, basePath) {
  const escaped = slugs.map((s) => s.replace(/-/g, '\\-'))
  const regionPath = new RegExp(`^/(${escaped.join('|')})(/|$)`)
  const skip = new RegExp(
    `^/(?:${deploySegment}|@|src|node_modules|assets|api)(?:/|$)|\\.[a-zA-Z0-9]+$`,
  )

  const middleware = (req, _res, next) => {
    const path = req.url?.split('?')[0] ?? ''
    if (!skip.test(path) && regionPath.test(path)) {
      req.url = basePath
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
  base: deployPath,
  plugins: [react(), regionSpaFallback(REGION_SLUGS, deployPath)],
})
