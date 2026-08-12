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

/** Pathname (no trailing slash) → hero asset stem used in src/assets/hero/pages/{stem}-800.webp */
const LANDING_HERO_STEM_BY_PATH = {
  '/miami-car-service': 'miami',
  '/miami-chauffeur-service': 'miami',
  '/miami-to-orlando-car-service': 'miami',
  '/miami-to-naples-car-service': 'miami',
  '/miami-to-fort-lauderdale-car-service': 'miami',
  '/west-palm-beach-to-miami-limo-service': 'miami',
  '/miami-airport-car-service': 'mia',
  '/miami-airport-limo-service': 'mia',
  '/connecticut': 'connecticut',
  '/connecticut-car-service': 'connecticut',
  '/norwalk-ct-car-service': 'norwalk',
  '/greenwich-ct-car-service': 'greenwich',
  '/danbury-ct-car-service': 'danbury',
  '/fairfield-ct-car-service': 'fairfield',
  '/stamford-ct-car-service': 'stamford',
  '/hartford-ct-car-service': 'hartford',
  '/new-haven-ct-car-service': 'newhaven',
  '/bdl-airport-car-service': 'bdl',
  '/newyork': 'newyork',
  '/new-york-car-service': 'newyork',
  '/manhattan-car-service': 'manhattan',
  '/nyc-limo-service': 'newyork',
  '/jfk-airport-car-service': 'jfk',
  '/lga-airport-car-service': 'lga',
  '/westchester-county-car-service': 'newyork',
  '/ct-to-jfk-airport-car-service': 'jfk',
  '/luxury-new-jersey-car-service': 'newjersey',
  '/newark-airport-service': 'ewr',
  '/boston-car-service': 'boston',
  '/boston-chauffeur-service': 'boston-chauffeur',
  '/boston-limo-service': 'boston-limo',
  '/bos-airport-car-service': 'bos',
  '/connecticut-to-boston-car-service': 'ct-boston',
  '/illinois': 'chicago',
  '/illinois-car-service': 'chicago',
  '/chicago-chauffeur': 'chicago',
  '/chicago-limo': 'chicago',
  '/chicago-chauffeur-service': 'chicago',
  '/chicago-limo-service': 'chicago',
  '/chicago-airport-car-service': 'ord',
  '/milwaukee-to-chicago-car-service': 'chicago',
  '/milwaukee-to-ohare-car-service': 'ord',
  '/wisconsin-car-service': 'milwaukee',
  '/milwaukee-car-service': 'milwaukee',
  '/milwaukee-chauffeur-service': 'milwaukee',
  '/milwaukee-limo-service': 'milwaukee',
  '/milwaukee-airport-limo-service': 'mke',
  '/atlanta-car-service': 'atlanta',
  '/texas-car-service': 'texas',
  '/florida': 'florida',
  '/florida-car-service': 'florida',
}

/**
 * Hero LCP preload, static hero img, inlined critical CSS, async main stylesheet,
 * and latin font preloads.
 */
function injectHeroLcp() {
  let base = '/'
  const devHeroSm = '/src/assets/hero/pages/home-800.webp'
  const devHeroLg = '/src/assets/hero/pages/home-1440.webp'

  const landingSizes = '(max-width: 720px) 800px, (max-width: 1024px) 800px, 1440px'

  const buildLandingPreloadScript = (stemHrefs) => {
    const assetsJson = JSON.stringify(stemHrefs)
    const pathsJson = JSON.stringify(LANDING_HERO_STEM_BY_PATH)
    return `<script>(function(){var p=location.pathname.replace(/\\/$/, '')||'/';if(p==='/')return;var paths=${pathsJson};var assets=${assetsJson};var stem=paths[p]||'landing';var a=assets[stem]||assets.landing;if(!a||!a.sm)return;var l=document.createElement('link');l.id='landing-lcp-preload';l.rel='preload';l.as='image';l.href=a.sm;l.setAttribute('imagesrcset',a.sm+' 800w, '+a.lg+' 1440w');l.setAttribute('imagesizes','${landingSizes}');l.fetchPriority='high';document.head.appendChild(l);})();</script>`
  }

  const applyOptimizations = (html, hero, fontHrefs = [], landingPreloadScript = '') => {
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

    if (landingPreloadScript) {
      out = out.replace(
        '<script>\n      (function () {\n        var path = location.pathname.replace(/\\/\\$/, \'\') || \'/\';\n        if (path !== \'/\') document.documentElement.classList.add(\'route-not-home\');\n      })();\n    </script>',
        (match) => `${match}\n    ${landingPreloadScript}`,
      )
      // Fallback if HTML formatting differs
      if (!out.includes('landing-lcp-preload') && !out.includes(landingPreloadScript.slice(0, 40))) {
        out = out.replace(
          "document.documentElement.classList.add('route-not-home');",
          `document.documentElement.classList.add('route-not-home');`,
        )
        out = out.replace('</head>', `    ${landingPreloadScript}\n  </head>`)
      }
    }

    if (hero) {
      const { smHref, lgHref } = hero
      const srcset = `${smHref} 800w, ${lgHref} 1440w`
      const sizes = landingSizes
      const preload = `<link id="home-lcp-preload" rel="preload" as="image" href="${smHref}" imagesrcset="${srcset}" imagesizes="${sizes}" fetchpriority="high" />`
      const dropHomeLcp = `<script>if(document.documentElement.classList.contains('route-not-home')){document.getElementById('home-lcp-preload')?.remove()}</script>`
      const staticHero = `<img id="static-hero-lcp" src="${smHref}" srcset="${srcset}" sizes="${sizes}" alt="" width="1440" height="810" fetchpriority="high" decoding="async" style="position:absolute;top:0;left:0;width:100%;height:min(680px,85vh);object-fit:cover;object-position:center;z-index:0;pointer-events:none" />`
      const dropHomeImg = `<script>if(document.documentElement.classList.contains('route-not-home')){document.getElementById('static-hero-lcp')?.remove()}</script>`
      out = out
        .replace('<meta name="viewport"', `${preload}\n    ${dropHomeLcp}\n    <meta name="viewport"`)
        .replace('<div id="root"></div>', `${staticHero}\n    ${dropHomeImg}\n    <div id="root"></div>`)
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

          const stems = new Set(['landing', ...Object.values(LANDING_HERO_STEM_BY_PATH)])
          const stemHrefs = {}
          for (const stem of stems) {
            const sm = findHeroAsset(new RegExp(`${stem}-800[^/]*\\.webp$`, 'i'))
            if (!sm) continue
            const lg = findHeroAsset(new RegExp(`${stem}-1440[^/]*\\.webp$`, 'i')) || sm
            stemHrefs[stem] = { sm: toHref(sm.fileName), lg: toHref(lg.fileName) }
          }

          return applyOptimizations(html, hero, fontHrefs, buildLandingPreloadScript(stemHrefs))
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
