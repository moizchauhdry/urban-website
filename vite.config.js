import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * Inject hero LCP preload + static hero img so mobile paints before React boots.
 * Also strip heavy phone-input / google-maps preloads that hurt mobile bandwidth.
 */
function injectHeroLcp() {
  let base = '/'
  const devHeroSm = '/src/assets/connecticut/hero/hero-bg-800.webp'
  const devHeroLg = '/src/assets/connecticut/hero/hero-bg-1440.webp'

  const injectTags = (html, smHref, lgHref) => {
    const srcset = `${smHref} 800w, ${lgHref} 1440w`
    const sizes = '(max-width: 1024px) 800px, 1440px'
    const preload = `<link rel="preload" as="image" href="${smHref}" imagesrcset="${srcset}" imagesizes="${sizes}" fetchpriority="high" />`
    const staticHero = `<img id="static-hero-lcp" src="${smHref}" srcset="${srcset}" sizes="${sizes}" alt="" width="1440" height="708" fetchpriority="high" decoding="async" style="position:absolute;top:0;left:0;width:100%;height:min(680px,85vh);object-fit:cover;object-position:center;z-index:0;pointer-events:none" />`

    return html
      .replace(/<link rel="modulepreload"[^>]*phone-input[^>]*>\s*/g, '')
      .replace(/<link rel="modulepreload"[^>]*google-maps[^>]*>\s*/g, '')
      .replace(/<link rel="modulepreload"[^>]*\/Services-[^>]*>\s*/g, '')
      .replace(/<link rel="modulepreload"[^>]*lucide-[^>]*>\s*/g, '')
      .replace(/<link rel="stylesheet"[^>]*phone-input[^>]*>\s*/g, '')
      .replace('<meta name="viewport"', `${preload}\n    <meta name="viewport"`)
      .replace('<div id="root"></div>', `${staticHero}\n    <div id="root"></div>`)
  }

  return {
    name: 'inject-hero-lcp',
    configResolved(config) {
      base = config.base
    },
    transformIndexHtml: {
      order: 'post',
      handler(html, ctx) {
        if (ctx.bundle) {
          const findHeroAsset = (pattern) =>
            Object.values(ctx.bundle).find(
              (item) => item.type === 'asset' && pattern.test(item.fileName),
            )

          const heroSm = findHeroAsset(/hero-bg-800/i)
          const heroLg = findHeroAsset(/hero-bg-1440/i)
          if (!heroSm || !heroLg) return html

          const toHref = (fileName) =>
            `${base}${fileName}`.replace(/([^:]\/)\/+/g, '$1')
          return injectTags(html, toHref(heroSm.fileName), toHref(heroLg.fileName))
        }

        return injectTags(html, devHeroSm, devHeroLg)
      },
    },
  }
}

function resolveBase(mode) {
  const override = process.env.VITE_BASE_PATH?.trim()
  if (override) return override.endsWith('/') ? override : `${override}/`

  // Vercel and local preview serve from domain root — wrong base breaks LCP (404 assets).
  if (process.env.VERCEL || mode === 'development') return '/'

  return '/connecticut-black-car-service/'
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  base: resolveBase(mode),
  plugins: [react(), injectHeroLcp()],
  build: {
    modulePreload: {
      resolveDependencies(_filename, deps) {
        return deps.filter(
          (dep) =>
            !dep.includes('phone-input') &&
            !dep.includes('google-maps') &&
            !dep.includes('lucide'),
        )
      },
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react-phone-number-input') || id.includes('libphonenumber')) {
            return 'phone-input'
          }
          if (id.includes('@googlemaps/js-api-loader')) {
            return 'google-maps'
          }
          if (id.includes('node_modules/lucide-react')) {
            return 'lucide'
          }
          if (id.includes('node_modules/react-router')) {
            return 'router'
          }
          if (id.includes('node_modules/react-dom') || id.includes('node_modules/react/')) {
            return 'react-vendor'
          }
        },
      },
    },
  },
}))
