/**
 * Point landing pages at shared src/data/serviceItems.js and remove per-page copies.
 * Run: node scripts/consolidate-service-items.mjs
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const PAGES = path.join(ROOT, 'src/pages')

const PREFIX_MAP = {
  connecticut: '',
  florida: 'fl',
  newyork: 'ny',
  'illinois/illinois': 'il',
  'illinois/chicago-limo-service': 'il-chi-limo',
  'illinois/chicago-chauffeur-service': 'il-chi-chauff',
}

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(full, files)
    else if (entry.name === 'Home.jsx') files.push(full)
  }
  return files
}

function prefixFor(homePath) {
  const rel = path.relative(PAGES, path.dirname(homePath)).split(path.sep).join('/')
  if (PREFIX_MAP[rel] !== undefined) return PREFIX_MAP[rel]
  if (rel.startsWith('other-pages/')) return `op-${rel.split('/')[1]}`
  return null
}

let updated = 0

for (const homePath of walk(PAGES)) {
  if (homePath.includes(`${path.sep}home${path.sep}`)) continue
  if (homePath.includes(`${path.sep}fifa${path.sep}`)) continue

  let content = fs.readFileSync(homePath, 'utf8')
  if (!content.includes('serviceItems.js')) continue

  const prefix = prefixFor(homePath)
  if (prefix === null) {
    console.warn('skip (unknown prefix):', homePath)
    continue
  }

  content = content.replace(
    /import \{ SERVICE_ITEMS \} from '\.\/services\/serviceItems\.js'\n/,
    '',
  )
  content = content.replace(
    '<ServicesSection items={SERVICE_ITEMS} />',
    `<ServicesSection imagePrefix="${prefix}" />`,
  )
  fs.writeFileSync(homePath, content)
  updated++
}

const homeBelowFold = path.join(PAGES, 'home', 'HomeBelowFold.jsx')
let belowFold = fs.readFileSync(homeBelowFold, 'utf8')
belowFold = belowFold.replace(
  /import \{ SERVICE_ITEMS \} from '\.\.\/connecticut\/services\/serviceItems\.js'\n/,
  '',
)
belowFold = belowFold.replace(
  '<ServicesSection items={SERVICE_ITEMS} />',
  '<ServicesSection />',
)
fs.writeFileSync(homeBelowFold, belowFold)
updated++

let deleted = 0
function deleteLandingServiceItems(dir) {
  if (dir.includes(`${path.sep}our-services`)) return
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) deleteLandingServiceItems(full)
    else if (entry.name === 'serviceItems.js' && full.endsWith(`${path.sep}services${path.sep}serviceItems.js`)) {
      fs.unlinkSync(full)
      deleted++
      const servicesDir = path.dirname(full)
      if (fs.readdirSync(servicesDir).length === 0) fs.rmdirSync(servicesDir)
    }
  }
}
deleteLandingServiceItems(PAGES)

console.log(`Updated ${updated} files, deleted ${deleted} serviceItems.js copies.`)
