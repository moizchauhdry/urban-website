import { readFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const criticalCss = readFileSync(path.join(__dirname, 'src/styles/critical.css'), 'utf8')

const SKIP_MODULE_PRELOAD = [
  'phone-input',
  'google-maps',
  'lucide',
  '/Icon-',
  'bookingNav',
  'useScrollToBookingHash',
  'HomeBelowFold',
  'DeferredFooter',
  'HeroBookingForm',
  'FleetCarousel',
  'ReviewsCarousel',
  'ServicesCarousel',
  'ThankYouPage',
]

/**
 * Hero LCP preload, static hero img, inlined critical CSS, async main stylesheet.
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

    let out = html
      .replace(/<link rel="modulepreload"[^>]*>\s*/g, (tag) => {
        if (SKIP_MODULE_PRELOAD.some((s) => tag.includes(s))) return ''
        return tag
      })
      .replace(/<link rel="stylesheet"[^>]*phone-input[^>]*>\s*/g, '')
      .replace(
        /<!-- Critical shell:[\s\S]*?<\/style>/,
        `<style>${criticalCss}</style>`,
      )
      .replace('<meta name="viewport"', `${preload}\n    <meta name="viewport"`)
      .replace('<div id="root"></div>', `${staticHero}\n    <div id="root"></div>`)

    out = out.replace(
      /<link rel="stylesheet" crossorigin href="([^"]+\.css)">/,
      '<link rel="preload" as="style" href="$1" onload="this.onload=null;this.rel=\'stylesheet\'"><noscript><link rel="stylesheet" href="$1"></noscript>',
    )

    return out
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

function resolveBase() {
  const override = process.env.VITE_BASE_PATH?.trim()
  if (override) return override.endsWith('/') ? override : `${override}/`
  return '/'
}

// https://vite.dev/config/
export default defineConfig(() => ({
  base: resolveBase(),
  plugins: [react(), injectHeroLcp()],
  build: {
    target: 'es2020',
    cssMinify: true,
    modulePreload: {
      resolveDependencies(_filename, deps) {
        return deps.filter((dep) => !SKIP_MODULE_PRELOAD.some((s) => dep.includes(s)))
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
