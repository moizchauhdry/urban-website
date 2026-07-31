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
  'HeroDeferredBooking',
  'FleetCarousel',
  'ReviewsCarousel',
  'ServicesCarousel',
  'NavMenuItems',
  'routes-dLtvg4Ff',
  'useHomeLogoClick',
]

/**
 * Hero LCP preload, static hero img, inlined critical CSS, async main stylesheet,
 * and latin font preloads.
 */
function injectHeroLcp() {
  let base = '/'
  const devHeroSm = '/src/assets/hero/pages/home-800.webp'
  const devHeroLg = '/src/assets/hero/pages/home-1440.webp'

  const applyOptimizations = (html, hero, fontHrefs = []) => {
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

    out = out.replace(/<link rel="stylesheet"[^>]*>/g, (tag) => {
      if (SKIP_MODULE_PRELOAD.some((s) => tag.includes(s))) return ''
      const href = tag.match(/href="([^"]+)"/)?.[1]
      if (!href) return tag
      return `<link rel="preload" as="style" href="${href}" onload="this.onload=null;this.rel='stylesheet'"><noscript><link rel="stylesheet" href="${href}"></noscript>`
    })

    if (fontHrefs.length) {
      const fontPreloads = fontHrefs
        .map(
          (href) =>
            `<link rel="preload" as="font" type="font/woff2" href="${href}" crossorigin />`,
        )
        .join('\n    ')
      out = out.replace('<meta name="viewport"', `${fontPreloads}\n    <meta name="viewport"`)
    }

    if (hero) {
      const { smHref, lgHref } = hero
      const srcset = `${smHref} 800w, ${lgHref} 1440w`
      const sizes = '(max-width: 1024px) 800px, 1440px'
      const preload = `<link rel="preload" as="image" href="${smHref}" imagesrcset="${srcset}" imagesizes="${sizes}" fetchpriority="high" />`
      const staticHero = `<img id="static-hero-lcp" src="${smHref}" srcset="${srcset}" sizes="${sizes}" alt="" width="1440" height="810" fetchpriority="high" decoding="async" style="position:absolute;top:0;left:0;width:100%;height:min(680px,85vh);object-fit:cover;object-position:center;z-index:0;pointer-events:none" />`
      out = out
        .replace('<meta name="viewport"', `${preload}\n    <meta name="viewport"`)
        .replace('<div id="root"></div>', `${staticHero}\n    <div id="root"></div>`)
    }

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
        const toHref = (fileName) =>
          `${base}${fileName}`.replace(/([^:]\/)\/+/g, '$1')

        if (ctx.bundle) {
          const findHeroAsset = (pattern) =>
            Object.values(ctx.bundle).find(
              (item) => item.type === 'asset' && pattern.test(item.fileName),
            )

          // Match Vite-hashed names like home-800-xxxxx.webp (not legacy home-hero-800)
          const heroSm = findHeroAsset(/home-800[^/]*\.webp$/i)
          const heroLg = findHeroAsset(/home-1440[^/]*\.webp$/i) || heroSm
          const hero =
            heroSm
              ? { smHref: toHref(heroSm.fileName), lgHref: toHref(heroLg.fileName) }
              : null

          const fontHrefs = Object.values(ctx.bundle)
            .filter(
              (item) =>
                item.type === 'asset' &&
                /space-grotesk-latin-(400|700)-normal[^/]*\.woff2$/i.test(item.fileName),
            )
            .map((item) => toHref(item.fileName))

          return applyOptimizations(html, hero, fontHrefs)
        }

        return applyOptimizations(html, {
          smHref: devHeroSm,
          lgHref: devHeroLg,
        })
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
          if (id.includes('node_modules/lucide-react')) {
            return 'lucide'
          }
          if (id.includes('node_modules/gsap')) {
            return 'gsap'
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
