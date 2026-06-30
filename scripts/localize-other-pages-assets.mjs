/**
 * Point every other-page at assets in src/assets/other-pages/{slug}/.
 * Copies missing required files from regional folders, then removes unused assets.
 * Run: node scripts/localize-other-pages-assets.mjs
 */
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const OP_PAGES = path.join(ROOT, 'src/pages/other-pages')
const OP_ASSETS = path.join(ROOT, 'src/assets/other-pages')
const OP_STYLES = path.join(ROOT, 'src/styles/other-pages')
const ASSETS = path.join(ROOT, 'src/assets')

function getAirports(title) {
  const t = title.toLowerCase()

  if (t.startsWith('florida') || t === 'florida car service') {
    return [
      { code: 'MIA', file: 'mia.webp' },
      { code: 'FLL', file: 'fll.webp' },
      { code: 'MCO', file: 'mco.webp' },
      { code: 'TPA', file: 'tpa.webp' },
    ]
  }
  if (t.startsWith('atlanta')) {
    return [
      { code: 'ATL', file: 'mia.webp' },
      { code: 'MIA', file: 'fll.webp' },
      { code: 'FLL', file: 'mco.webp' },
      { code: 'MCO', file: 'tpa.webp' },
    ]
  }
  if (t.startsWith('illinois') || t.startsWith('wisconsin')) {
    return [
      { code: 'ORD', file: 'jfk.webp' },
      { code: 'MDW', file: 'lga.webp' },
      { code: 'MKE', file: 'bradley.webp' },
      { code: 'JFK', file: 'newark.webp' },
    ]
  }
  if (t.startsWith('texas')) {
    return [
      { code: 'DFW', file: 'jfk.webp' },
      { code: 'IAH', file: 'lga.webp' },
      { code: 'AUS', file: 'bradley.webp' },
      { code: 'DAL', file: 'newark.webp' },
    ]
  }
  if (
    t.startsWith('manhattan') ||
    t.startsWith('new york') ||
    t.startsWith('boston') ||
    t.startsWith('nyc') ||
    t.includes('westchester')
  ) {
    return [
      { code: 'JFK', file: 'jfk.webp' },
      { code: 'LGA', file: 'lga.webp' },
      { code: 'EWR', file: 'newark.webp' },
      { code: 'BDL', file: 'bradley.webp' },
    ]
  }
  if (t.includes('newark')) {
    return [
      { code: 'EWR', file: 'newark.webp' },
      { code: 'JFK', file: 'jfk.webp' },
      { code: 'LGA', file: 'lga.webp' },
      { code: 'BDL', file: 'bradley.webp' },
    ]
  }
  if (t.startsWith('connecticut')) {
    return [
      { code: 'JFK', file: 'jfk.webp' },
      { code: 'LGA', file: 'lga.webp' },
      { code: 'BDL', file: 'bradley.webp' },
      { code: 'EWR', file: 'newark.webp' },
    ]
  }
  if (
    t.includes('miami') ||
    t.includes('key west') ||
    t.includes('naples') ||
    t.includes('fort lauderdale') ||
    t.includes('palm beach')
  ) {
    return [
      { code: 'MIA', file: 'mia.webp' },
      { code: 'FLL', file: 'fll.webp' },
      { code: 'MCO', file: 'mco.webp' },
      { code: 'TPA', file: 'tpa.webp' },
    ]
  }
  if (t.includes('milwaukee') || t.includes('chicago') || t.includes('ohare')) {
    return [
      { code: 'ORD', file: 'jfk.webp' },
      { code: 'MDW', file: 'lga.webp' },
      { code: 'MKE', file: 'bradley.webp' },
      { code: 'JFK', file: 'newark.webp' },
    ]
  }
  if (t.includes('jfk')) {
    return [
      { code: 'JFK', file: 'jfk.webp' },
      { code: 'LGA', file: 'lga.webp' },
      { code: 'EWR', file: 'newark.webp' },
      { code: 'BDL', file: 'bradley.webp' },
    ]
  }
  if (t.includes('lga')) {
    return [
      { code: 'LGA', file: 'lga.webp' },
      { code: 'JFK', file: 'jfk.webp' },
      { code: 'EWR', file: 'newark.webp' },
      { code: 'BDL', file: 'bradley.webp' },
    ]
  }
  if (t.includes('bdl')) {
    return [
      { code: 'BDL', file: 'bradley.webp' },
      { code: 'JFK', file: 'jfk.webp' },
      { code: 'LGA', file: 'lga.webp' },
      { code: 'EWR', file: 'newark.webp' },
    ]
  }
  return [
    { code: 'JFK', file: 'jfk.webp' },
    { code: 'LGA', file: 'lga.webp' },
    { code: 'BDL', file: 'bradley.webp' },
    { code: 'EWR', file: 'newark.webp' },
  ]
}

function getAssetRoot(title) {
  const t = title.toLowerCase()

  if (t.startsWith('florida') || t.startsWith('atlanta')) return 'florida'
  if (
    t.startsWith('illinois') ||
    t.startsWith('wisconsin') ||
    t.includes('milwaukee') ||
    t.includes('chicago') ||
    t.includes('ohare')
  ) {
    return 'illinois/illinois'
  }
  if (
    t.startsWith('manhattan') ||
    t.startsWith('new york') ||
    t.startsWith('boston') ||
    t.startsWith('nyc') ||
    t.includes('newark') ||
    t.includes('westchester')
  ) {
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

function cssPrefix(slug) {
  return `op-${slug}`
}

function getRequiredRelativePaths(airports) {
  const files = [
    'hero/hero-bg-800.webp',
    'hero/hero-bg-1440.webp',
    'hero/phone-icon.png',
    'hero/fully-licensed.png',
    'hero/latest-modal.png',
    'hero/chauffeurs.png',
    'hero/flight.png',
    'journey/left-img.webp',
    'journey/right-img.webp',
    'faqs/faqs.webp',
    'reviews/trust-pilot.svg',
    'reviews/google.svg',
    ...Array.from({ length: 6 }, (_, i) => `services/service${i + 1}.webp`),
    ...Array.from({ length: 3 }, (_, i) => `content-blocks/car-service${i + 1}.webp`),
  ]
  for (const a of airports) files.push(`airports/${a.file}`)
  return files
}

function buildPageCss(ctx) {
  const { prefix, slug, airports, title } = ctx
  const assetBase = `../../assets/other-pages/${slug}`
  const lines = [
    `/* ${title} */`,
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
  airports.forEach((a, i) => {
    lines.push(
      `.airport-card.${prefix}-a${i + 1}{background-image:linear-gradient(180deg,rgba(0,0,0,.2),rgba(0,0,0,.6)),url('${assetBase}/airports/${a.file}')}`,
    )
  })
  return `${lines.join('\n')}\n`
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

async function readRegistry() {
  const registryPath = path.join(OP_PAGES, 'registry.js')
  const mod = await import(pathToFileURL(registryPath).href)
  return mod.OTHER_PAGES
}

async function fileExists(file) {
  try {
    await fs.access(file)
    return true
  } catch {
    return false
  }
}

async function copyIfMissing(relPath, slug, assetRoot) {
  const dest = path.join(OP_ASSETS, slug, relPath)
  if (await fileExists(dest)) return

  await fs.mkdir(path.dirname(dest), { recursive: true })

  const sources = [
    path.join(ASSETS, assetRoot, relPath),
    path.join(ASSETS, 'connecticut', relPath),
    path.join(ASSETS, 'florida', relPath),
    path.join(ASSETS, 'newyork', relPath),
    path.join(ASSETS, 'illinois/illinois', relPath),
  ]

  if (relPath === 'journey/left-img.webp') {
    sources.push(path.join(ASSETS, 'left_bmw.webp'))
  }
  if (relPath === 'journey/right-img.webp') {
    sources.push(path.join(ASSETS, 'right_audi.webp'))
  }

  for (const src of sources) {
    if (await fileExists(src)) {
      await fs.copyFile(src, dest)
      return
    }
  }

  console.warn(`  ⚠ missing source for ${slug}/${relPath}`)
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

async function pruneUnusedAssets(slug, keepRelative) {
  const assetDir = path.join(OP_ASSETS, slug)
  if (!(await fileExists(assetDir))) return 0

  const keep = new Set(keepRelative.map((p) => p.replace(/\\/g, '/')))
  const all = await walkFiles(assetDir)
  let removed = 0

  for (const file of all) {
    const rel = path.relative(assetDir, file).replace(/\\/g, '/')
    if (!keep.has(rel)) {
      await fs.rm(file, { force: true })
      removed++
    }
  }

  return removed
}

async function patchFaqSection(pageDir, slug) {
  const faqPath = path.join(pageDir, 'faqs', 'FaqSection.jsx')
  if (!(await fileExists(faqPath))) return

  let content = await fs.readFile(faqPath, 'utf8')
  content = content.replace(
    /import faqImage from ['"][^'"]+['"]/,
    `import faqImage from '../../../../assets/faqImage.js'`,
  )
  await fs.writeFile(faqPath, content)
}

async function patchReviewsSection(pageDir, slug) {
  const reviewsPath = path.join(pageDir, 'reviews', 'ReviewsSection.jsx')
  if (!(await fileExists(reviewsPath))) return

  let content = await fs.readFile(reviewsPath, 'utf8')
  const base = `../../../../assets/other-pages/${slug}/reviews`
  content = content.replace(
    /import trustPilot from ['"][^'"]+['"]/,
    `import trustPilot from '${base}/trust-pilot.svg'`,
  )
  content = content.replace(
    /import googleIcon from ['"][^'"]+['"]/,
    `import googleIcon from '${base}/google.svg'`,
  )
  await fs.writeFile(reviewsPath, content)
}

async function localizePage({ slug, title }) {
  const assetRoot = getAssetRoot(title)
  const airports = getAirports(title)
  const prefix = cssPrefix(slug)
  const required = getRequiredRelativePaths(airports)
  const pageDir = path.join(OP_PAGES, slug)
  const ctx = { slug, title, prefix, airports }

  await fs.mkdir(path.join(OP_ASSETS, slug), { recursive: true })

  for (const rel of required) {
    await copyIfMissing(rel, slug, assetRoot)
  }

  await fs.writeFile(path.join(OP_STYLES, `${slug}.css`), buildPageCss(ctx))
  await fs.writeFile(path.join(pageDir, 'hero', 'heroBg.js'), buildHeroBgJs(slug))
  await fs.writeFile(path.join(pageDir, 'hero', 'heroHighlights.js'), buildHeroHighlightsJs(slug))
  await fs.writeFile(path.join(pageDir, 'journey', 'JourneySection.jsx'), buildJourneySectionJsx(slug))
  await patchFaqSection(pageDir, slug)
  await patchReviewsSection(pageDir, slug)

  const removed = await pruneUnusedAssets(slug, required)
  return { slug, removed }
}

const pages = await readRegistry()
let totalRemoved = 0

for (const page of pages) {
  const result = await localizePage(page)
  totalRemoved += result.removed
  console.log(`✓ ${result.slug} (removed ${result.removed} unused assets)`)
}

console.log(`\nLocalized ${pages.length} pages. Removed ${totalRemoved} unused asset files total.`)
