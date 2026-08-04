/**
 * Generate other-pages landing pages from the Connecticut template.
 * Run: node scripts/generate-other-pages.mjs
 */
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const CT_PAGES = path.join(ROOT, 'src/pages/connecticut')
const OP_PAGES = path.join(ROOT, 'src/pages/other-pages')

const PAGE_TITLES = [
  'Miami Chauffeur Service',
  'Norwalk CT Car Service',
  'Greenwich CT Car Service',
  'Danbury CT Car Service',
  'Fairfield CT Car Service',
  'Stamford CT Car Service',
  'Hartford CT Car Service',
  'New Haven CT Car Service',
  'Miami to Orlando Car Service',
  'Miami to Naples Car Service',
  'West palm beach to Miami Limo Service',
  'Miami to Fort Lauderdale car service',
  'Miami Car Service',
  'Luxury New Jersey Car Service',
  'Milwaukee to Chicago Car Service',
  "Milwaukee to O'Hare Car Service",
  'Milwaukee Chauffeur Service',
  'Milwaukee Limo Service',
  'Milwaukee Car Service',
  'LGA Airport Car Service',
  'CT to JFK Airport Car Service',
  'Miami Airport Limo Service',
  'Miami Airport Car Service',
  'Chicago Airport Car Service',
  'Milwaukee Airport Limo Service',
  'BDL Airport Car Service',
  'JFK Airport Car Service',
  // State landing pages
  'Manhattan Car Service',
  'Atlanta Car Service',
  'Florida Car Service',
  'New York Car Service',
  'Texas Car Service',
  'Boston Car Service',
  'Illinois Car Service',
  'Wisconsin Car Service',
  'Connecticut Car Service',
  'NYC Limo Service',
  'Newark Airport Service',
  'Westchester County Car Service',
]

function slugify(title) {
  return title
    .replace(/^select\s+/i, '')
    .toLowerCase()
    .replace(/[''’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}


function heroLines(title) {
  const t = title.replace(/^select\s+/i, '').trim()
  const matchers = [
    /^(.+?)\s+(Car Service)$/i,
    /^(.+?)\s+(Chauffeur Service)$/i,
    /^(.+?)\s+(Limo Service)$/i,
    /^(.+?)\s+(Airport Limo Service)$/i,
    /^(.+?)\s+(Airport Car Service)$/i,
    /^(.+?)\s+(Airport Service)$/i,
  ]
  for (const re of matchers) {
    const m = t.match(re)
    if (m) return { line1: m[1].trim(), line2: m[2].trim() }
  }
  const mid = Math.ceil(t.split(' ').length / 2)
  const words = t.split(' ')
  return { line1: words.slice(0, mid).join(' '), line2: words.slice(mid).join(' ') || 'Car Service' }
}

function regionLabel(title) {
  const t = title.replace(/^select\s+/i, '').trim()
  return t
    .replace(/\s+(Car|Chauffeur|Limo|Airport)\s+Service$/i, '')
    .replace(/\s+car service$/i, '')
    .trim()
}

function airportEntry(code) {
  return { code, file: `${code.toLowerCase()}.webp` }
}

function getAirports(title) {
  const t = title.toLowerCase()

  if (t.startsWith('florida') || t === 'florida car service') {
    return ['MIA', 'FLL', 'MCO', 'TPA'].map(airportEntry)
  }
  if (t.startsWith('atlanta')) {
    return ['ATL', 'MIA', 'FLL', 'MCO'].map(airportEntry)
  }
  if (t.startsWith('illinois') || t.startsWith('wisconsin')) {
    return ['ORD', 'MDW', 'MKE', 'JFK'].map(airportEntry)
  }
  if (t.startsWith('texas')) {
    return ['DFW', 'IAH', 'AUS', 'DAL'].map(airportEntry)
  }
  if (t.startsWith('manhattan') || t.startsWith('new york') || t.startsWith('boston') || t.startsWith('nyc') || t.includes('westchester')) {
    return ['JFK', 'LGA', 'EWR', 'BDL'].map(airportEntry)
  }
  if (t.includes('newark')) {
    return ['EWR', 'JFK', 'LGA', 'BDL'].map(airportEntry)
  }
  if (t.startsWith('connecticut')) {
    return ['JFK', 'LGA', 'BDL', 'EWR'].map(airportEntry)
  }

  if (t.includes('miami') || t.includes('key west') || t.includes('naples') || t.includes('fort lauderdale') || t.includes('palm beach')) {
    return ['MIA', 'FLL', 'MCO', 'TPA'].map(airportEntry)
  }
  if (t.includes('milwaukee') || t.includes('chicago') || t.includes('o’hare') || t.includes("o'hare")) {
    return ['ORD', 'MDW', 'MKE', 'JFK'].map(airportEntry)
  }
  if (t.includes('jfk')) {
    return ['JFK', 'LGA', 'EWR', 'BDL'].map(airportEntry)
  }
  if (t.includes('lga')) {
    return ['LGA', 'JFK', 'EWR', 'BDL'].map(airportEntry)
  }
  if (t.includes('bdl')) {
    return ['BDL', 'JFK', 'LGA', 'EWR'].map(airportEntry)
  }
  return ['JFK', 'LGA', 'BDL', 'EWR'].map(airportEntry)
}

async function copyDir(src, dest) {
  await fs.cp(src, dest, { recursive: true, force: true })
}

async function walkFiles(dir) {
  const out = []
  const entries = await fs.readdir(dir, { withFileTypes: true })
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) out.push(...(await walkFiles(full)))
    else out.push(full)
  }
  return out
}

function patchFileContent(content, ctx) {
  const { slug, title, pageHome } = ctx
  let out = content
  out = out.replace(/from '(\.\.\/){3}/g, "from '../../../../")
  out = out.replace(/import '(\.\.\/){3}/g, "import '../../../../")
  out = out.replace(/import\('(\.\.\/){3}/g, "import('../../../../")
  out = out.replace(/assets\/connecticut\//g, 'assets/')
  out = out.replace(/ConnecticutLayout/g, 'PageLayout')
  out = out.replace(
    /export \{ CONNECTICUT_HOME \} from '\.\.\/\.\.\/\.\.\/config\/routes\.js'/g,
    `export const PAGE_HOME = '${pageHome}'`,
  )
  out = out.replace(/Connecticut car service landing page/g, `${title} landing page`)
  out = out.replace(
    /Reliable Connecticut Car Service for Airports and Long Distance Travel \| Urban Elite Limo/g,
    `${title} | Urban Elite Limo`,
  )
  out = out.replace(/Connecticut hero \+ booking card/g, `${title} hero + booking card`)
  out = out.replace(/Layout chrome for the Connecticut car service landing page/g, `Layout for ${title}`)
  return out
}

function buildHeroBgJs() {
  return `import heroBgSm from '../../../../assets/hero/pages/landing.webp'
import heroBgLg from '../../../../assets/hero/pages/landing.webp'

export const HERO_BG_DEFAULT = heroBgSm
export const HERO_BG_SRCSET = \`\${heroBgSm} 800w, \${heroBgLg} 1440w\`
export const HERO_BG_SIZES = '(max-width: 1024px) 800px, 1440px'
export const HERO_BG_WIDTH = 1440
export const HERO_BG_HEIGHT = 810
`
}

function buildHeroHighlightsJs() {
  const base = '../../../../assets/hero/features'
  return `import phoneIcon from '${base}/phone-icon.png'
import fullyLicensedIcon from '${base}/fully-licensed.png'
import latestModelIcon from '${base}/latest-modal.png'
import chauffeursIcon from '${base}/chauffeurs.png'
import flightIcon from '${base}/flight.png'

export const HERO_PHONE = {
  href: 'tel:8888816610',
  label: '(888) 881-6610',
  icon: phoneIcon,
  iconAlt: '',
}

/** @type {Array<{ label: string, icon: string, iconAlt: string }>} */
export const HERO_FEATURES = [
  { label: 'Licensed & Insured', icon: fullyLicensedIcon, iconAlt: '' },
  { label: 'Latest Model Fleet', icon: latestModelIcon, iconAlt: '' },
  { label: 'Licensed Chauffeurs', icon: chauffeursIcon, iconAlt: '' },
  { label: 'flight monitoring', icon: flightIcon, iconAlt: '' },
]
`
}

function buildJourneySectionJsx() {
  const base = '../../../../assets/journey'
  return `import leftCar from '${base}/left.webp'
import rightCar from '${base}/right.webp'
import BookNowLink from '../../../../components/layout/BookNowLink.jsx'

export default function JourneySection() {
  return (
    <section className="journey">
      <div className="journey-car-slot journey-car-slot--left" aria-hidden="true">
        <img src={leftCar} alt="" className="journey-car-img" width={425} height={244} loading="lazy" draggable={false} decoding="async" />
      </div>
      <div className="journey-car-slot journey-car-slot--right" aria-hidden="true">
        <img src={rightCar} alt="" className="journey-car-img" width={407} height={274} loading="lazy" draggable={false} decoding="async" />
      </div>
      <div className="container">
        <h2>Start Your Journey Today</h2>
        <p>
          Join Thousands of satisfied customers and experience premium car and chauffeur service like never before.
        </p>
        <BookNowLink />
      </div>
    </section>
  )
}
`
}

function buildHeroJsx(ctx) {
  const { lines, region, title } = ctx
  const titleJson = JSON.stringify(title)
  const regionJson = JSON.stringify(region)
  const line1Json = JSON.stringify(lines.line1)
  const line2Json = JSON.stringify(lines.line2)
  return `import { useCallback, useEffect, useRef } from 'react'
import {
  HERO_BG_DEFAULT,
  HERO_BG_HEIGHT,
  HERO_BG_SIZES,
  HERO_BG_SRCSET,
  HERO_BG_WIDTH,
} from './heroBg.js'
import Icon from '../../../../components/common/Icon.jsx'
import { HERO_FEATURES, HERO_PHONE } from './heroHighlights.js'
import HeroDeferredBooking from '../../../../components/hero/HeroDeferredBooking.jsx'

function removeStaticHeroLcp() {
  document.getElementById('static-hero-lcp')?.remove()
}

/** ${title} hero + booking card */
export default function Hero() {
  const staticRemoved = useRef(false)

  const onHeroBgReady = useCallback((node) => {
    if (!node) return
    if (node.complete && node.naturalWidth > 0) {
      if (!staticRemoved.current) {
        staticRemoved.current = true
        removeStaticHeroLcp()
      }
      return
    }
    const onLoad = () => {
      if (staticRemoved.current) return
      staticRemoved.current = true
      removeStaticHeroLcp()
    }
    node.addEventListener('load', onLoad, { once: true })
  }, [])

  useEffect(() => {
    const staticImg = document.getElementById('static-hero-lcp')
    if (staticImg instanceof HTMLImageElement && staticImg.complete && staticImg.naturalWidth > 0) {
      if (!staticRemoved.current) {
        staticRemoved.current = true
        removeStaticHeroLcp()
      }
    }
  }, [])

  return (
    <section className="hero">
      <img
        ref={onHeroBgReady}
        src={HERO_BG_DEFAULT}
        srcSet={HERO_BG_SRCSET}
        sizes={HERO_BG_SIZES}
        alt=""
        className="hero-bg-img"
        width={HERO_BG_WIDTH}
        height={HERO_BG_HEIGHT}
        fetchPriority="high"
        loading="eager"
        decoding="async"
        aria-hidden="true"
      />
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <Icon name="star" size={11} /> Rated #1 car and Limo Service
          </div>
          <h1 className="hero-title">
            <span className="hero-title-line">{${line1Json}}</span>{' '}
            <span className="hero-title-line">{${line2Json}}</span>
          </h1>
          <p className="hero-desc">
            Travel in comfort with {${titleJson}} designed for people who want a smooth and stress free
            experience. From local trips to airport rides our drivers make every journey easy. Enjoy calm pickups,
            friendly service and dependable transport without rushing or worrying about traffic.
            Your ride stays simple, safe and well planned throughout {${regionJson}}.
          </p>
          <a href={HERO_PHONE.href} className="hero-phone">
            <img
              src={HERO_PHONE.icon}
              alt={HERO_PHONE.iconAlt}
              className="hero-phone-icon"
              width={20}
              height={20}
              decoding="async"
              draggable={false}
            />
            {HERO_PHONE.label}
          </a>
          <div className="hero-features">
            {HERO_FEATURES.map((feat) => (
              <div className="feat" key={feat.label}>
                <img
                  src={feat.icon}
                  alt={feat.iconAlt}
                  className="feat-icon"
                  width={20}
                  height={20}
                  decoding="async"
                  draggable={false}
                />
                {feat.label}
              </div>
            ))}
          </div>
        </div>

        <HeroDeferredBooking />
      </div>
    </section>
  )
}
`
}

function buildContentBlocks(ctx) {
  const { title, region, prefix } = ctx
  const titleJson = JSON.stringify(title)
  const regionJson = JSON.stringify(region)
  const titleLower = JSON.stringify(title.toLowerCase())
  return `export default function ContentBlocks() {
  return (
    <section className="section">
      <div className="container">
        <div className="content-block">
          <div>
            <h2>{${titleJson}} for Everyday Travel</h2>
            <p>
              A premium {${titleLower}} should feel like having someone you trust behind the wheel. Many travelers
              choose us because they want a ride that is calm, comfortable and predictable. Whether you are heading to
              work, meeting friends or planning a family outing, our service makes the travel part easy throughout
              {${regionJson}}. You get a clean car, a licensed driver and a smooth trip without the usual rush or confusion.
            </p>
            <a href="#hero-booking" className="btn-yellow">
              Get a Free Quote
            </a>
          </div>
          <div className="content-img ${prefix}-i1" />
        </div>

        <div className="content-block reverse">
          <div>
            <h2>Airport Transportation for {${regionJson}}</h2>
            <p>
              Flying already comes with enough pressure so your airport ride should not add more stress. Our {${titleLower}}
              is built around reliable pickups, luggage help and smart routing. Your driver arrives early so you can relax
              instead of racing the clock. Business travelers, families and frequent flyers all get the same calm, professional
              experience from door to terminal.
            </p>
            <a href="#hero-booking" className="btn-yellow">
              Get a Free Quote
            </a>
          </div>
          <div className="content-img ${prefix}-i2" />
        </div>

        <div className="content-block">
          <div>
            <h2>Long Distance &amp; City-to-City Rides</h2>
            <p>
              Long distance travel should feel calm, not overwhelming. When you book {${titleLower}} for intercity
              or airport transfers, you get space for luggage, licensed chauffeurs and a comfortable cabin for the full
              journey. Whether you are traveling across {${regionJson}} or connecting to a major hub, we keep the trip simple
              from pickup to drop-off.
            </p>
            <a href="#hero-booking" className="btn-yellow">
              Get a Free Quote
            </a>
          </div>
          <div className="content-img ${prefix}-i3" />
        </div>
      </div>
    </section>
  )
}
`
}

function buildAirportsSection(ctx) {
  const { slug } = ctx
  const pageKey = `other-pages/${slug}`
  return `import RegionalAirportsSection from '../../../../components/sections/RegionalAirportsSection.jsx'

export default function AirportsSection() {
  return <RegionalAirportsSection pageKey="${pageKey}" />
}
`
}


`
}

async function generatePage(title) {
  const slug = slugify(title)
  const pageHome = `/${slug}`
  const region = regionLabel(title)
  const lines = heroLines(title)
  const airports = getAirports(title)
  const ctx = { slug, title, pageHome, region, lines, airports }

  // Pages render via MarketingLandingPage + PageLayout — shared global styles, no per-slug CSS.
  await fs.mkdir(path.join(OP_PAGES, slug), { recursive: true })

  return { slug, title, pageHome }
}

async function writeRegistry(pages) {
  const body = `/** Auto-generated — run node scripts/generate-other-pages.mjs to refresh */\nexport const OTHER_PAGES = ${JSON.stringify(pages, null, 2)}\n\nexport const OTHER_PAGE_SLUGS = new Set(OTHER_PAGES.map((p) => p.slug))\n\nexport const OTHER_PAGE_LINKS = OTHER_PAGES.map((p) => ({\n  title: p.title,\n  slug: p.slug,\n  path: p.pageHome,\n  localUrl: \`http://localhost:5173\${p.pageHome}\`,\n}))\n`
  await fs.writeFile(path.join(OP_PAGES, 'registry.js'), body)
}

async function writeLinksMarkdown(pages) {
  const lines = ['# Other Pages — Localhost Links', '', 'Base URL: `http://localhost:5173`', '']
  for (const p of pages) {
    lines.push(`- **${p.title}** — http://localhost:5173${p.pageHome}`)
  }
  await fs.writeFile(path.join(OP_PAGES, 'LINKS.md'), `${lines.join('\n')}\n`)
}

await fs.mkdir(OP_PAGES, { recursive: true })
const pages = []
for (const title of PAGE_TITLES) {
  const page = await generatePage(title)
  pages.push(page)
  console.log(`✓ ${page.slug}`)
}
await writeRegistry(pages)
await writeLinksMarkdown(pages)
console.log(`\nGenerated ${pages.length} other pages.`)
