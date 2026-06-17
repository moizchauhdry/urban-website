/**
 * Scaffold Illinois region pages from Florida template.
 * Run: node scripts/scaffold-illinois.mjs
 */
import fs from 'node:fs/promises'
import path from 'node:path'

const ROOT = path.resolve(import.meta.dirname, '..')
const FLORIDA_SRC = path.join(ROOT, 'src/florida')
const FLORIDA_ASSETS = path.join(ROOT, 'src/assets/florida')
const ILLINOIS_SRC = path.join(ROOT, 'src/illinois')
const ILLINOIS_ASSETS = path.join(ROOT, 'src/assets/illinois')

/** @type {Array<{
 *   folder: string
 *   route: string
 *   layoutFile: string
 *   homeConst: string
 *   cssPrefix: string
 *   regionName: string
 *   heroLine1: string
 *   heroAirports: string
 *   docTitle: string
 *   navLabel: string
 * }>} */
const PAGES = [
  {
    folder: 'illinois',
    route: '/illinois-car-service',
    layoutFile: 'IllinoisLayout',
    homeConst: 'ILLINOIS_HOME',
    cssPrefix: 'il',
    regionName: 'Illinois',
    heroLine1: 'Premium Illinois',
    heroAirports: 'ORD, Midway or downtown Chicago',
    docTitle:
      'Reliable Illinois Car Service for Airports and Long Distance Travel | Urban Elite Limo',
    navLabel: 'Illinois Car Service',
  },
  {
    folder: 'ohare-intl-airport-ord-limo-service',
    route: '/illinois-car-service/ohare-intl-airport-ord-limo-service',
    layoutFile: 'OhareOrdLimoLayout',
    homeConst: 'OHARE_ORD_LIMO_HOME',
    cssPrefix: 'il-ord-limo',
    regionName: "O'Hare Intl Airport (ORD) Limo",
    heroLine1: "O'Hare Intl Airport (ORD) Limo",
    heroAirports: "O'Hare (ORD) terminals and Chicago",
    docTitle:
      "O'Hare Intl Airport (ORD) Limo Service | Urban Elite Limo",
    navLabel: "O'Hare Intl Airport (ORD) Limo Service",
  },
  {
    folder: 'ohare-intl-airport-ord-car-service',
    route: '/illinois-car-service/ohare-intl-airport-ord-car-service',
    layoutFile: 'OhareOrdCarLayout',
    homeConst: 'OHARE_ORD_CAR_HOME',
    cssPrefix: 'il-ord-car',
    regionName: "O'Hare Intl Airport (ORD) Car",
    heroLine1: "O'Hare Intl Airport (ORD) Car",
    heroAirports: "O'Hare (ORD) and the greater Chicago area",
    docTitle:
      "O'Hare Intl Airport (ORD) Car Service | Urban Elite Limo",
    navLabel: "O'Hare Intl Airport (ORD) Car Service",
  },
  {
    folder: 'chicago-chauffeur-service',
    route: '/illinois-car-service/chicago-chauffeur-service',
    layoutFile: 'ChicagoChauffeurLayout',
    homeConst: 'CHICAGO_CHAUFFEUR_HOME',
    cssPrefix: 'il-chi-chauff',
    regionName: 'Chicago Chauffeur',
    heroLine1: 'Chicago Chauffeur',
    heroAirports: 'Chicago business districts and airports',
    docTitle: 'Chicago Chauffeur Service | Urban Elite Limo',
    navLabel: 'Chicago Chauffeur Service',
  },
  {
    folder: 'chicago-airport-car-service',
    route: '/illinois-car-service/chicago-airport-car-service',
    layoutFile: 'ChicagoAirportCarLayout',
    homeConst: 'CHICAGO_AIRPORT_CAR_HOME',
    cssPrefix: 'il-chi-airport',
    regionName: 'Chicago Airport Car',
    heroLine1: 'Chicago Airport Car',
    heroAirports: 'ORD, Midway and Chicago airports',
    docTitle: 'Chicago Airport Car Service | Urban Elite Limo',
    navLabel: 'Chicago Airport Car Service',
  },
  {
    folder: 'chicago-limo-service',
    route: '/illinois-car-service/chicago-limo-service',
    layoutFile: 'ChicagoLimoLayout',
    homeConst: 'CHICAGO_LIMO_HOME',
    cssPrefix: 'il-chi-limo',
    regionName: 'Chicago Limo',
    heroLine1: 'Chicago Limo',
    heroAirports: 'Chicago events, airports and special occasions',
    docTitle: 'Chicago Limo Service | Urban Elite Limo',
    navLabel: 'Chicago Limo Service',
  },
]

async function copyDir(src, dest) {
  await fs.cp(src, dest, { recursive: true })
}

async function walkFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) files.push(...(await walkFiles(full)))
    else if (/\.(jsx?|js)$/.test(entry.name)) files.push(full)
  }
  return files
}

function transformContent(content, page) {
  const assetBase = `../../../assets/illinois/${page.folder}/`
  let c = content

  c = c.replaceAll('../../assets/florida/', assetBase)
  c = c.replaceAll('../../hooks/', '../../../hooks/')
  c = c.replaceAll('../../components/', '../../../components/')
  c = c.replaceAll('/florida-car-service', page.route)
  c = c.replaceAll('FLORIDA_HOME', page.homeConst)
  c = c.replaceAll('FloridaLayout', page.layoutFile)
  c = c.replaceAll(/fl-s(\d)/g, `${page.cssPrefix}-s$1`)
  c = c.replaceAll(/fl-i(\d)/g, `${page.cssPrefix}-i$1`)
  c = c.replaceAll(/fl-a(\d)/g, `${page.cssPrefix}-a$1`)

  if (c.includes('FloridaLayout.jsx') || c.includes('function FloridaLayout')) {
    // already handled
  }

  c = c.replaceAll('/** Layout chrome for the Florida car service landing page. */', `/** Layout chrome for ${page.navLabel}. */`)
  c = c.replaceAll('/** Florida hero + booking card */', `/** ${page.navLabel} hero + booking card */`)
  c = c.replaceAll('<span className="hero-title-line">Premium Florida</span>', `<span className="hero-title-line">${page.heroLine1}</span>`)
  c = c.replaceAll(
    'Travel in comfort with a Florida car service designed for people who want a smooth and stress free\n            experience. From local trips to airport rides our drivers make every journey easy. Enjoy calm pickups,\n            friendly service and dependable transport to MIA, FLL or Orlando without rushing or worrying about traffic.',
    `Travel in comfort with a ${page.regionName.toLowerCase()} service designed for people who want a smooth and stress free\n            experience. From local trips to airport rides our drivers make every journey easy. Enjoy calm pickups,\n            friendly service and dependable transport to ${page.heroAirports} without rushing or worrying about traffic.`
  )
  c = c.replaceAll(
    "'Reliable Florida Car Service for Airports and Long Distance Travel | Urban Elite Limo'",
    JSON.stringify(page.docTitle)
  )

  // Content blocks
  c = c.replaceAll('Florida Car Service for Everyday Travel', `${page.regionName} Service for Everyday Travel`)
  c = c.replaceAll('A premium Florida car service', `A premium ${page.regionName.toLowerCase()} service`)
  c = c.replaceAll('regular trip across Florida', 'regular trip across Illinois')
  c = c.replaceAll('Airport Car Service Florida for Smooth Travel Days', `Airport Car Service ${page.regionName} for Smooth Travel Days`)
  c = c.replaceAll('airport car\n              service Florida is', `airport car\n              service ${page.regionName} is`)
  c = c.replaceAll('Florida Car Service to Miami and Orlando Made Comfortable', `${page.regionName} Service Across Chicago Made Comfortable`)
  c = c.replaceAll('car service from Florida to\n              Miami or Orlando', 'car service across Chicago and Illinois')
  c = c.replaceAll('limo service to MIA or MCO', 'limo service to ORD or MDW')

  // Airports - Chicago area
  c = c.replaceAll('<h3>MIA</h3>', '<h3>ORD</h3>')
  c = c.replaceAll('<h3>FLL</h3>', '<h3>MDW</h3>')
  c = c.replaceAll('<h3>MCO</h3>', '<h3>RFD</h3>')
  c = c.replaceAll('<h3>TPA</h3>', '<h3>PIA</h3>')

  return c
}

async function scaffoldPage(page) {
  const destSrc = path.join(ILLINOIS_SRC, page.folder)
  const destAssets = path.join(ILLINOIS_ASSETS, page.folder)

  await fs.rm(destSrc, { recursive: true, force: true })
  await fs.rm(destAssets, { recursive: true, force: true })
  await copyDir(FLORIDA_SRC, destSrc)
  await copyDir(FLORIDA_ASSETS, destAssets)

  await fs.rename(
    path.join(destSrc, 'FloridaLayout.jsx'),
    path.join(destSrc, `${page.layoutFile}.jsx`)
  )

  const files = await walkFiles(destSrc)
  for (const file of files) {
    const content = await fs.readFile(file, 'utf8')
    await fs.writeFile(file, transformContent(content, page))
  }

  console.log(`✓ ${page.folder}`)
}

function generateCssRules() {
  const airports = ['ord', 'mdw', 'rfd', 'pia']
  const airportFiles = ['mia.webp', 'fll.webp', 'mco.webp', 'tpa.webp']
  const lines = ['\n/* Illinois region page assets (generated) */']

  for (const page of PAGES) {
    const p = page.cssPrefix
    const assetPath = `../assets/illinois/${page.folder}`
    lines.push(`\n/* ${page.navLabel} */`)
    for (let i = 1; i <= 6; i++) {
      lines.push(`.service-img.${p}-s${i}{background-image:url('${assetPath}/services/service${i}.webp')}`)
    }
    for (let i = 1; i <= 3; i++) {
      lines.push(`.content-img.${p}-i${i}{background-image:url('${assetPath}/content-blocks/car-service${i}.webp')}`)
    }
    for (let i = 0; i < 4; i++) {
      lines.push(
        `.airport-card.${p}-a${i + 1}{background-image:linear-gradient(180deg,rgba(0,0,0,.2),rgba(0,0,0,.6)),url('${assetPath}/airports/${airportFiles[i]}')}`
      )
    }
  }

  return lines.join('\n')
}

async function patchGlobalCss(cssBlock) {
  const cssPath = path.join(ROOT, 'src/styles/global.css')
  let css = await fs.readFile(cssPath, 'utf8')
  const marker = '/* Illinois region page assets (generated) */'
  const start = css.indexOf(marker)
  if (start !== -1) {
    const end = css.indexOf('\n/* FAQs */', start)
    css = css.slice(0, start) + cssBlock + '\n' + css.slice(end)
  } else {
    const insertAt = css.indexOf('\n/* FAQs */')
    css = css.slice(0, insertAt) + cssBlock + css.slice(insertAt)
  }
  await fs.writeFile(cssPath, css)
}

async function main() {
  await fs.mkdir(ILLINOIS_SRC, { recursive: true })
  await fs.mkdir(ILLINOIS_ASSETS, { recursive: true })

  for (const page of PAGES) {
    await scaffoldPage(page)
  }

  const cssBlock = generateCssRules()
  await patchGlobalCss(cssBlock)

  const manifestPath = path.join(ILLINOIS_SRC, 'pages.manifest.json')
  await fs.writeFile(manifestPath, JSON.stringify(PAGES, null, 2))
  console.log('\nDone. Manifest:', manifestPath)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
