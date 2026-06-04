import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { REGION_PATHS } from './src/config/regions.js'
import { normalizeDeployPath } from './src/config/deployPath.js'

const deployPath = normalizeDeployPath(process.env.VITE_DEPLOY_PATH)
const deploySegment = deployPath.replace(/^\/|\/$/g, '')

function appSpaFallback(publicPaths, basePath) {
  const escaped = publicPaths.map((p) => p.replace(/-/g, '\\-').replace(/\//g, '/'))
  const appPath = new RegExp(`^/(${escaped.join('|')})(/|$)`)
  const skip = new RegExp(
    `^/${deploySegment}/assets/|^(?:/@|src|node_modules|api)(?:/|$)|\\.[a-zA-Z0-9]+$`,
  )

  const middleware = (req, _res, next) => {
    const path = req.url?.split('?')[0] ?? ''
    if (skip.test(path)) {
      next()
      return
    }
    if (appPath.test(path)) {
      req.url = basePath
    }
    next()
  }

  return {
    name: 'app-spa-fallback',
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
  plugins: [react(), appSpaFallback(REGION_PATHS, deployPath)],
})
