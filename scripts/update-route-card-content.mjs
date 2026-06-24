import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const pagesRoot = path.join(root, 'src/pages')

const REGIONAL_PAGES = [
  { pagesDir: 'connecticut', title: 'Connecticut Car Service' },
  { pagesDir: 'florida', title: 'Florida Car Service' },
  { pagesDir: 'newyork', title: 'New York Car Service' },
  { pagesDir: 'illinois/illinois', title: 'Illinois Car Service' },
  { pagesDir: 'illinois/chicago-chauffeur-service', title: 'Chicago Chauffeur Service' },
  { pagesDir: 'illinois/chicago-airport-car-service', title: 'Chicago Airport Car Service' },
  { pagesDir: 'illinois/chicago-limo-service', title: 'Chicago Limo Service' },
  { pagesDir: 'illinois/ohare-intl-airport-ord-limo-service', title: "O'Hare Intl Airport (ORD) Limo Service" },
  { pagesDir: 'illinois/ohare-intl-airport-ord-car-service', title: "O'Hare Intl Airport (ORD) Car Service" },
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

function loadRegistryTitles() {
  const registrySrc = fs.readFileSync(
    path.join(pagesRoot, 'other-pages/registry.js'),
    'utf8',
  )
  const titles = new Map()
  for (const match of registrySrc.matchAll(/"slug": "([^"]+)"[\s\S]*?"title": "([^"]+)"/g)) {
    titles.set(match[1], match[2])
  }
  return titles
}

function titleForPageDir(relPageDir, registryTitles) {
  const regional = REGIONAL_PAGES.find((p) => p.pagesDir === relPageDir)
  if (regional) return regional.title

  if (relPageDir.startsWith('other-pages/')) {
    const slug = relPageDir.split('/')[1]
    return registryTitles.get(slug) ?? slug.replace(/-/g, ' ')
  }

  const slug = relPageDir.split('/').pop()
  return slug.replace(/-/g, ' ')
}

function walkRouteCardItems(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) walkRouteCardItems(full, files)
    else if (entry.name === 'routeCardItems.js') files.push(full)
  }
  return files
}

const registryTitles = loadRegistryTitles()
let updated = 0

for (const file of walkRouteCardItems(pagesRoot)) {
  const routeCardsDir = path.dirname(file)
  const pageDir = path.dirname(routeCardsDir)
  const relPageDir = path.relative(pagesRoot, pageDir).replace(/\\/g, '/')
  const pageTitle = titleForPageDir(relPageDir, registryTitles)

  writeRouteCardItems(routeCardsDir, pageTitle)
  updated += 1
  console.log(`Updated: ${relPageDir} → ${pageTitle}`)
}

console.log(`Updated route card content for ${updated} pages`)
