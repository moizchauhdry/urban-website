/**
 * Point every heroBg.js at the shared site hero image.
 * Run: node scripts/sync-hero-bg.mjs
 */
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const PAGES = path.join(ROOT, 'src/pages')

async function walk(dir) {
  const out = []
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) out.push(...(await walk(full)))
    else if (entry.name === 'heroBg.js') out.push(full)
  }
  return out
}

function relImport(fromFile) {
  const fromDir = path.dirname(fromFile)
  const target = path.join(ROOT, 'src/config/siteHeroBg.js')
  let rel = path.relative(fromDir, target).replace(/\\/g, '/')
  if (!rel.startsWith('.')) rel = `./${rel}`
  return rel
}

const files = await walk(PAGES)
for (const file of files) {
  const imp = relImport(file)
  const content = `export {
  HERO_BG_DEFAULT,
  HERO_BG_HEIGHT,
  HERO_BG_SIZES,
  HERO_BG_SRCSET,
  HERO_BG_WIDTH,
} from '${imp}'
`
  await fs.writeFile(file, content)
  console.log(`✓ ${path.relative(ROOT, file)}`)
}

console.log(`\nUpdated ${files.length} heroBg.js files.`)
