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
const CT_ASSETS = path.join(ROOT, 'src/assets/connecticut')
const OP_PAGES = path.join(ROOT, 'src/pages/other-pages')
const OP_ASSETS = path.join(ROOT, 'src/assets/other-pages')
const OP_STYLES = path.join(ROOT, 'src/styles/other-pages')
const FL_AIRPORTS = path.join(ROOT, 'src/assets/florida/airports')
const CENTRAL_AIRPORTS = path.join(ROOT, 'src/assets/airports')

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

function cssPrefix(slug) {
  return `op-${slug}`
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

function getAssetRoot(title) {
  const t = title.toLowerCase()

  if (t.startsWith('florida') || t.startsWith('atlanta')) {
    return 'florida'
  }
  if (
    t.startsWith('illinois') ||
    t.startsWith('wisconsin') ||
    t.includes('milwaukee') ||
    t.includes('chicago') ||
    t.includes('ohare')
  ) {
    return 'illinois/illinois'
  }
  if (t.startsWith('manhattan') || t.startsWith('new york') || t.startsWith('boston') || t.startsWith('nyc') || t.includes('newark') || t.includes('westchester')) {
    return 'newyork'
  }
  if (
    t.includes('miami') ||
    t.includes('key west') ||
    t.includes('naples') ||
    t.includes('fort lauderdale') ||
    t.includes('palm beach')
  ) {
    return 'florida'
  }
  return 'connecticut'
}

/** Airport photos live under connecticut or florida — not every regional asset folder. */
function getAirportAssetRoot(title) {
  const t = title.toLowerCase()
  if (
    t.startsWith('florida') ||
    t.startsWith('atlanta') ||
    t.includes('miami') ||
    t.includes('key west') ||
    t.includes('naples') ||
    t.includes('fort lauderdale') ||
    t.includes('palm beach')
  ) {
    return 'florida'
  }
  return 'connecticut'
}

function patchFileContent(content, ctx) {
  const { slug, title, pageHome } = ctx
  let out = content
  out = out.replace(/from '(\.\.\/){3}/g, "from '../../../../")
  out = out.replace(/import '(\.\.\/){3}/g, "import '../../../../")
  out = out.replace(/import\('(\.\.\/){3}/g, "import('../../../../")
  out = out.replace(/assets\/connecticut\//g, `assets/other-pages/${slug}/`)
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

function buildHeroBgJs(slug) {
  return `import heroBgSm from '../../../../assets/other-pages/${slug}/hero/hero-bg-800.webp'
import heroBgLg from '../../../../assets/other-pages/${slug}/hero/hero-bg-1440.webp'

export const HERO_BG_DEFAULT = heroBgSm
export const HERO_BG_SRCSET = \`\${heroBgSm} 800w, \${heroBgLg} 1440w\`
export const HERO_BG_SIZES = '(max-width: 1024px) 800px, 1440px'
export const HERO_BG_WIDTH = 1440
export const HERO_BG_HEIGHT = 810
`
}

function buildHeroHighlightsJs(slug) {
  const base = `../../../../assets/other-pages/${slug}/hero`
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

function buildJourneySectionJsx(slug) {
  const base = `../../../../assets/other-pages/${slug}/journey`
  return `import leftCar from '${base}/left-img.webp'
import rightCar from '${base}/right-img.webp'
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

function buildPageCss(ctx) {
  const { prefix, slug } = ctx
  const assetBase = `../../assets/other-pages/${slug}`
  const lines = [
    `/* ${ctx.title} */`,
    `.service-img.${prefix}-s1{background-image:url('${assetBase}/services/service1.webp')}`,
    `.service-img.${prefix}-s2{background-image:url('${assetBase}/services/service2.webp')}`,
    `.service-img.${prefix}-s3{background-image:url('${assetBase}/services/service3.webp')}`,
    `.service-img.${prefix}-s4{background-image:url('${assetBase}/services/service4.webp')}`,
    `.service-img.${prefix}-s5{background-image:url('${assetBase}/services/service5.webp')}`,
    `.service-img.${prefix}-s6{background-image:url('${assetBase}/services/service6.webp')}`,
    `.content-img.${prefix}-i1{background-image:url('${assetBase}/content-blocks/car-service1.webp')}`,
    `.content-img.${prefix}-i2{background-image:url('${assetBase}/content-blocks/car-service2.webp')}`,
    `.content-img.${prefix}-i3{background-image:url('${assetBase}/content-blocks/car-service3.webp')}`,
  ]
  return `${lines.join('\n')}\n`
}

function isAirportLandingPage(title) {
  return title.toLowerCase().includes('airport')
}

function buildHome(ctx) {
  const docTitle = JSON.stringify(`${ctx.title} | Urban Elite Limo`)
  const includeAirports = !isAirportLandingPage(ctx.title)
  const airportsImport = includeAirports
    ? "import AirportsSection from './airports/AirportsSection.jsx'\n"
    : ''
  const airportsBlock = includeAirports ? '      <AirportsSection />\n' : ''

  return `import { useEffect } from 'react'
import Hero from './hero/Hero.jsx'
import Fleet from './fleet/Fleet.jsx'
import WhyDifferent from './why-different/WhyDifferent.jsx'
import PlanningBanner from './planning-banner/PlanningBanner.jsx'
import ReviewsSection from './reviews/ReviewsSection.jsx'
import Services from './services/Services.jsx'
import ContentBlocks from './content-blocks/ContentBlocks.jsx'
import TrustedStats from './trusted-stats/TrustedStats.jsx'
import HowItWorks from './how-it-works/HowItWorks.jsx'
import JourneySection from './journey/JourneySection.jsx'
${airportsImport}import FaqSection from './faqs/FaqSection.jsx'

/** ${ctx.title} landing page. */
export default function Home() {
  useEffect(() => {
    document.title = ${docTitle}
  }, [])

  return (
    <>
      <Hero />
      <Fleet />
      <WhyDifferent />
      <PlanningBanner />
      <ReviewsSection />
      <Services />
      <ContentBlocks />
      <TrustedStats />
      <HowItWorks />
      <JourneySection />
${airportsBlock}      <FaqSection />
    </>
  )
}
`
}

function buildPageLayout(ctx) {
  return `import Home from './Home.jsx'
import Header from './layout/Header.jsx'
import DeferredFooter from '../../../components/layout/DeferredFooter.jsx'
import { PAGE_HOME } from './layout/navConfig.js'
import { useUrbanEliteInteractions } from '../../../hooks/useUrbanEliteInteractions.js'
import { useScrollReveal } from '../../../hooks/useScrollReveal.js'
import { useScrollToBookingHash } from '../../../hooks/useScrollToBookingHash.js'
import '../../../styles/other-pages/${ctx.slug}.css'

/** Layout for ${ctx.title}. */
export default function PageLayout() {
  useUrbanEliteInteractions(true)
  useScrollReveal()
  useScrollToBookingHash()

  return (
    <>
      <Header logoPath={PAGE_HOME} />
      <Home />
      <DeferredFooter logoPath={PAGE_HOME} />
    </>
  )
}
`
}

function buildNavConfig(ctx) {
  return `export const PAGE_HOME = '${ctx.pageHome}'
export const SITE = 'https://urbanelitelimo.com'
export const ext = (path) => \`\${SITE}\${path}\`
`
}

function buildServiceItems(ctx) {
  const { prefix } = ctx
  return `/** @typedef {{ id: string, title: string, description: string, imageClass: string }} ServiceItem */

/** @type {ServiceItem[]} */
export const SERVICE_ITEMS = [
  {
    id: 'christmas',
    title: 'Christmas Car Service',
    description:
      'Enjoy premium holiday transportation with professional chauffeurs ensuring comfort, safety, and reliable group travel for festive events, family gatherings, and seasonal celebrations.',
    imageClass: '${prefix}-s1',
  },
  {
    id: 'prom',
    title: 'Prom & Parties Transfers',
    description:
      'Make prom and parties unforgettable with luxury vehicles, professional chauffeurs, and safe, premium rides ensuring a night full of memories.',
    imageClass: '${prefix}-s2',
  },
  {
    id: 'cruise',
    title: 'Pier & Cruise Transfers',
    description:
      'Begin your cruise travel stress-free with timely, comfortable port transfers provided by professional, courteous chauffeurs ensuring smooth travel.',
    imageClass: '${prefix}-s3',
  },
  {
    id: 'events',
    title: 'Events & Entertainment Service',
    description:
      'Premium car service for concerts, events, or shows with chauffeurs delivering luxury, safety, and reliable group travel every time.',
    imageClass: '${prefix}-s4',
  },
  {
    id: 'night-out',
    title: 'Night Out Service',
    description:
      'Enjoy complete flexibility with night out chauffeur service ensuring safety, comfort, and premium luxury throughout your entire night.',
    imageClass: '${prefix}-s5',
  },
  {
    id: 'new-year',
    title: 'New Year Car Service',
    description:
      'Begin your New Year celebrations stress-free with our luxury chauffeured rides offering comfort, punctuality, and smooth travel to every destination.',
    imageClass: '${prefix}-s6',
  },
]
`
}

async function ensureAirportAssets(slug, airports) {
  const airportDir = path.join(OP_ASSETS, slug, 'airports')
  await fs.mkdir(airportDir, { recursive: true })
  for (const a of airports) {
    const dest = path.join(airportDir, a.file)
    try {
      await fs.access(dest)
      continue
    } catch {
      /* copy below */
    }
    const code = a.code.toLowerCase()
    const legacyNames =
      code === 'bdl'
        ? ['bdl.webp', 'bradley.webp']
        : code === 'ewr'
          ? ['ewr.webp', 'newark.webp']
          : [a.file]
    const candidates = [
      ...legacyNames.flatMap((name) => [
        path.join(CENTRAL_AIRPORTS, name),
        path.join(FL_AIRPORTS, name),
        path.join(CT_ASSETS, 'airports', name),
      ]),
    ]
    for (const src of candidates) {
      try {
        await fs.access(src)
        await fs.copyFile(src, dest)
        break
      } catch {
        /* try next */
      }
    }
  }
}

async function generatePage(title) {
  const slug = slugify(title)
  const pageHome = `/${slug}`
  const prefix = cssPrefix(slug)
  const region = regionLabel(title)
  const lines = heroLines(title)
  const airports = getAirports(title)
  const ctx = { slug, title, prefix, pageHome, region, lines, airports }

  const pageDir = path.join(OP_PAGES, slug)
  const assetDir = path.join(OP_ASSETS, slug)

  await fs.rm(pageDir, { recursive: true, force: true })
  await fs.rm(assetDir, { recursive: true, force: true })
  await copyDir(CT_PAGES, pageDir)
  await copyDir(CT_ASSETS, assetDir)
  await ensureAirportAssets(slug, airports)

  const files = await walkFiles(pageDir)
  for (const file of files) {
    if (!/\.(jsx?|js)$/.test(file)) continue
    let content = await fs.readFile(file, 'utf8')
    content = patchFileContent(content, ctx)
    await fs.writeFile(file, content)
  }

  await fs.writeFile(path.join(pageDir, 'hero', 'Hero.jsx'), buildHeroJsx(ctx))
  await fs.writeFile(path.join(pageDir, 'hero', 'heroBg.js'), buildHeroBgJs(slug))
  await fs.writeFile(path.join(pageDir, 'hero', 'heroHighlights.js'), buildHeroHighlightsJs(slug))
  await fs.writeFile(path.join(pageDir, 'journey', 'JourneySection.jsx'), buildJourneySectionJsx(slug))
  await fs.writeFile(path.join(pageDir, 'Home.jsx'), buildHome(ctx))
  await fs.writeFile(path.join(pageDir, 'content-blocks', 'ContentBlocks.jsx'), buildContentBlocks(ctx))
  await fs.writeFile(path.join(pageDir, 'airports', 'AirportsSection.jsx'), buildAirportsSection(ctx))
  await fs.writeFile(path.join(pageDir, 'services', 'serviceItems.js'), buildServiceItems(ctx))
  await fs.writeFile(path.join(pageDir, 'layout', 'navConfig.js'), buildNavConfig(ctx))
  await fs.writeFile(path.join(pageDir, 'PageLayout.jsx'), buildPageLayout(ctx))
  await fs.copyFile(
    path.join(ROOT, 'scripts/other-pages-footer-template.jsx'),
    path.join(pageDir, 'layout', 'Footer.jsx'),
  )

  await fs.rm(path.join(pageDir, 'ConnecticutLayout.jsx'), { force: true })

  await fs.mkdir(OP_STYLES, { recursive: true })
  await fs.writeFile(path.join(OP_STYLES, `${slug}.css`), buildPageCss(ctx))

  return { slug, title, pageHome }
}

async function writeRegistry(pages) {
  const body = `/** Auto-generated — run node scripts/generate-other-pages.mjs to refresh */\nexport const OTHER_PAGES = ${JSON.stringify(pages, null, 2)}\n\nexport const OTHER_PAGE_SLUGS = new Set(OTHER_PAGES.map((p) => p.slug))\n\nexport const OTHER_PAGE_LINKS = OTHER_PAGES.map((p) => ({\n  title: p.title,\n  slug: p.slug,\n  path: p.pageHome,\n  localUrl: \`http://localhost:5173\${p.pageHome}\`,\n}))\n`
  await fs.writeFile(path.join(OP_PAGES, 'registry.js'), body)
}

async function writeShell() {
  const content = `import { lazy, Suspense, useMemo } from 'react'
import SuspenseLoader from '../../components/layout/SuspenseLoader.jsx'
import { Navigate, useParams } from 'react-router-dom'
import { OTHER_PAGE_SLUGS } from './registry.js'

const layouts = import.meta.glob('./*/PageLayout.jsx')

function resolveLayoutLoader(slug) {
  const direct = \`./\${slug}/PageLayout.jsx\`
  if (layouts[direct]) return layouts[direct]

  const match = Object.entries(layouts).find(([key]) =>
    key.replace(/\\\\/g, '/').endsWith(\`/\${slug}/PageLayout.jsx\`),
  )
  return match?.[1] ?? null
}

/** Single entry for all /other-pages/:slug routes (not linked in main nav). */
export default function OtherPageShell() {
  const { slug } = useParams()

  const loader = useMemo(() => (slug ? resolveLayoutLoader(slug) : null), [slug])

  if (!slug || !OTHER_PAGE_SLUGS.has(slug) || !loader) {
    return <Navigate to="/" replace />
  }

  const PageLayout = lazy(loader)

  return (
    <Suspense fallback={<SuspenseLoader />}>
      <PageLayout />
    </Suspense>
  )
}
`
  await fs.writeFile(path.join(OP_PAGES, 'OtherPageShell.jsx'), content)
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
await writeShell()
await writeLinksMarkdown(pages)
console.log(`\nGenerated ${pages.length} other pages.`)
