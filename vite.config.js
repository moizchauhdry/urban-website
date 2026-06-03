import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { getRegionPaths } from './src/config/regions.js'
import { normalizeDeployPath } from './src/config/deployPath.js'

const deployPath = normalizeDeployPath(process.env.VITE_DEPLOY_PATH)
const deploySegment = deployPath.replace(/^\/|\/$/g, '')
const regionPaths = getRegionPaths(deploySegment)

/** Dev/preview: `/moiz`, `/moiz/connecticut`, etc. serve the SPA. */
function moizSpaFallback(regionPaths, basePath) {
  const escaped = regionPaths.map((p) => p.replace(/-/g, '\\-').replace(/\//g, '/'))
  const regionPath = new RegExp(`^/(${escaped.join('|')})(/|$)`)
  const appRoot = new RegExp(`^/${deploySegment}/?$`)
  const skip = new RegExp(
    `^/${deploySegment}/assets/|^(?:/@|src|node_modules|api)(?:/|$)|\\.[a-zA-Z0-9]+$`,
  )

  const middleware = (req, _res, next) => {
    const path = req.url?.split('?')[0] ?? ''
    if (skip.test(path)) {
      next()
      return
    }
    if (appRoot.test(path) || regionPath.test(path)) {
      req.url = basePath
    }
    next()
  }

  return {
    name: 'moiz-spa-fallback',
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
  plugins: [react(), moizSpaFallback(regionPaths, deployPath)],
})
