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

        const findHeroAsset = (pattern) =>
          Object.values(ctx.bundle).find(
            (item) => item.type === 'asset' && pattern.test(item.fileName),
          )

        const heroSm = findHeroAsset(/hero-bg-800/i)
        const heroLg = findHeroAsset(/hero-bg-1440/i)
        if (!heroSm || !heroLg) return html

        const toHref = (fileName) =>
          `${base}${fileName}`.replace(/([^:]\/)\/+/g, '$1')
        const smHref = toHref(heroSm.fileName)
        const lgHref = toHref(heroLg.fileName)
        const srcset = `${smHref} 800w, ${lgHref} 1440w`
        const sizes = '(max-width: 1024px) 800px, 1440px'

        const preload = `<link rel="preload" as="image" href="${smHref}" imagesrcset="${srcset}" imagesizes="${sizes}" fetchpriority="high" />`
        const staticHero = `<img id="static-hero-lcp" src="${lgHref}" srcset="${srcset}" sizes="${sizes}" alt="" width="1440" height="708" fetchpriority="high" decoding="async" style="position:absolute;top:0;left:0;width:100%;height:min(680px,85vh);object-fit:cover;object-position:center;z-index:0;pointer-events:none" />`

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
