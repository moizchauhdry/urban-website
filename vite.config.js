import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * Inject hero LCP preload + static hero img so mobile paints before React boots.
 * Also strip heavy phone-input preloads that hurt mobile bandwidth.
 */
function injectHeroLcp() {
  let base = '/'
  return {
    name: 'inject-hero-lcp',
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
        const preload = `<link rel="preload" as="image" href="${href}" fetchpriority="high" />`
        const staticHero = `<img id="static-hero-lcp" src="${href}" alt="" width="800" height="458" fetchpriority="high" decoding="async" style="position:absolute;top:0;left:0;width:100%;height:min(680px,85vh);object-fit:cover;object-position:center;z-index:0;pointer-events:none" />`

        let out = html
          .replace(/<link rel="modulepreload"[^>]*phone-input[^>]*>\s*/g, '')
          .replace(/<link rel="modulepreload"[^>]*google-maps[^>]*>\s*/g, '')
          .replace(/<link rel="stylesheet"[^>]*phone-input[^>]*>\s*/g, '')
          .replace('</head>', `    ${preload}\n  </head>`)
          .replace('<div id="root"></div>', `${staticHero}\n    <div id="root"></div>`)

        return out
      },
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/connecticut-black-car-service/' : '/',
  plugins: [react(), injectHeroLcp()],
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
