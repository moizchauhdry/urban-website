import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/** Inject hero LCP preload into built HTML so the image fetch starts before JS runs. */
function injectHeroPreload() {
  let base = '/'
  return {
    name: 'inject-hero-preload',
    apply: 'build',
    configResolved(config) {
      base = config.base
    },
    transformIndexHtml: {
      order: 'post',
      handler(html, ctx) {
        if (!ctx.bundle) return html

        const heroAsset = Object.values(ctx.bundle).find(
          (item) => item.type === 'asset' && /hero-bg/i.test(item.fileName),
        )
        if (!heroAsset) return html

        const href = `${base}${heroAsset.fileName}`.replace(/([^:]\/)\/+/g, '$1')
        const tag = `<link rel="preload" as="image" href="${href}" fetchpriority="high" />`

        return html.replace('</head>', `    ${tag}\n  </head>`)
      },
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/connecticut-black-car-service/' : '/',
  plugins: [react(), injectHeroPreload()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react-phone-number-input') || id.includes('libphonenumber')) {
            return 'phone-input'
          }
          if (id.includes('@googlemaps/js-api-loader')) {
            return 'google-maps'
          }
          if (id.includes('node_modules/react-dom') || id.includes('node_modules/react/')) {
            return 'react-vendor'
          }
        },
      },
    },
  },
}))
