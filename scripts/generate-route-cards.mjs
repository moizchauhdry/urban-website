import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const pagesRoot = path.join(root, 'src/pages')

const REGIONAL_PAGES = [
  { pagesDir: 'connecticut', assetsDir: 'connecticut', title: 'Connecticut Car Service' },
  { pagesDir: 'florida', assetsDir: 'florida', title: 'Florida Car Service' },
  { pagesDir: 'newyork', assetsDir: 'newyork', title: 'New York Car Service' },
  { pagesDir: 'illinois/illinois', assetsDir: 'illinois/illinois', title: 'Illinois Car Service' },
  { pagesDir: 'illinois/chicago-chauffeur-service', assetsDir: 'illinois/chicago-chauffeur-service', title: 'Chicago Chauffeur Service' },
  { pagesDir: 'illinois/chicago-limo-service', assetsDir: 'illinois/chicago-limo-service', title: 'Chicago Limo Service' },
]

function jsString(value) {
  return value.replace(/\\/g, '\\\\').replace(/'/g, "\\'")
}

function railLabelFromTitle(title) {
  return title.toUpperCase()
}

function buildRouteCardContent(pageTitle) {
  const keyword = pageTitle.toLowerCase()
  return {
    title: pageTitle,
    description: `Reliable and professional ${keyword} designed for a smooth, comfortable, and stress-free travel experience.`,
    description2:
      'Book in minutes and enjoy a seamless ride experience backed by professional drivers, punctual service, and premium vehicles.',
    railLabel: railLabelFromTitle(pageTitle),
  }
}

function writeRouteCardItems(routeCardsDir, pageTitle) {
  const content = buildRouteCardContent(pageTitle)

  const file = `export const ROUTE_CARDS = [
  {
    id: 'primary',
    layout: 'image-right',
    railLabel: '${jsString(content.railLabel)}',
    title: '${jsString(content.title)}',
    description:
      '${jsString(content.description)}',
    description2:
      '${jsString(content.description2)}',
    buttonVariant: 'accent',
  },
]
`

  fs.mkdirSync(routeCardsDir, { recursive: true })
  fs.writeFileSync(path.join(routeCardsDir, 'routeCardItems.js'), file, 'utf8')
}

function writeRouteCardsWrapper(routeCardsDir) {
  const rel = path.relative(path.join(root, 'src'), routeCardsDir)
  const depth = rel.split(path.sep).length
  const sectionImport = '../'.repeat(depth) + 'components/route-cards/RouteCardsSection.jsx'

  const file = `import RouteCardsSection from '${sectionImport}'
import { ROUTE_CARDS } from './routeCardItems.js'

export default function RouteCards() {
  return <RouteCardsSection cards={ROUTE_CARDS} />
}
`
  fs.writeFileSync(path.join(routeCardsDir, 'RouteCards.jsx'), file, 'utf8')
}

function updateHome(homePath) {
  let src = fs.readFileSync(homePath, 'utf8')
  if (src.includes('route-cards/RouteCards')) return

  src = src.replace(
    /import ContentBlocks from '\.\/content-blocks\/ContentBlocks\.jsx'/,
    "import RouteCards from './route-cards/RouteCards.jsx'",
  )
  src = src.replace(/<ContentBlocks\s*\/>/, '<RouteCards />')
  fs.writeFileSync(homePath, src, 'utf8')
}

function removeContentBlocks(pageDir) {
  const cb = path.join(pageDir, 'content-blocks', 'ContentBlocks.jsx')
  if (fs.existsSync(cb)) fs.unlinkSync(cb)
}

function parseContentBlocks(filePath) {
  return fs.existsSync(filePath)
}

let count = 0

for (const regional of REGIONAL_PAGES) {
  const pageDir = path.join(pagesRoot, regional.pagesDir)
  const contentBlocksPath = path.join(pageDir, 'content-blocks', 'ContentBlocks.jsx')
  const routeCardsDir = path.join(pageDir, 'route-cards')

  if (!parseContentBlocks(contentBlocksPath) && !fs.existsSync(path.join(routeCardsDir, 'routeCardItems.js'))) {
    console.warn('Skip (no content blocks):', regional.pagesDir)
    continue
  }

  writeRouteCardItems(routeCardsDir, regional.title)
  writeRouteCardsWrapper(routeCardsDir)
  updateHome(path.join(pageDir, 'Home.jsx'))
  removeContentBlocks(pageDir)
  count += 1
}

const otherPagesRoot = path.join(pagesRoot, 'other-pages')
const registryPath = path.join(otherPagesRoot, 'registry.js')
const registrySrc = fs.readFileSync(registryPath, 'utf8')

for (const slug of fs.readdirSync(otherPagesRoot)) {
  const pageDir = path.join(otherPagesRoot, slug)
  if (!fs.statSync(pageDir).isDirectory()) continue
  if (!fs.existsSync(path.join(pageDir, 'Home.jsx'))) continue

  const contentBlocksPath = path.join(pageDir, 'content-blocks', 'ContentBlocks.jsx')
  const hasRouteCards = fs.existsSync(path.join(pageDir, 'route-cards/routeCardItems.js'))
  if (!fs.existsSync(contentBlocksPath) && !hasRouteCards) continue

  const titleMatch = registrySrc.match(
    new RegExp(`"slug": "${slug}"[\\s\\S]*?"title": "([^"]+)"`),
  )
  const pageTitle = titleMatch?.[1] ?? slug.replace(/-/g, ' ')

  const routeCardsDir = path.join(pageDir, 'route-cards')
  writeRouteCardItems(routeCardsDir, pageTitle)
  writeRouteCardsWrapper(routeCardsDir)
  updateHome(path.join(pageDir, 'Home.jsx'))
  removeContentBlocks(pageDir)
  count += 1
}

console.log(`Generated route cards for ${count} pages`)
