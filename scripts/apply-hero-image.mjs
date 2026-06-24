import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const srcImage = path.join(root, 'src/assets/hero_image.webp')

const EXCLUDED_ASSET_SUFFIXES = [
  'assets/connecticut/hero',
  'assets/florida/hero',
  'assets/newyork/hero',
  'assets/other-pages/miami-to-key-west-car-service/hero',
]

const EXCLUDED_HERO_BG_SUFFIXES = [
  'src/pages/connecticut/hero/heroBg.js',
  'src/pages/newyork/hero/heroBg.js',
  'src/pages/florida/hero/heroBg.js',
  'src/pages/other-pages/miami-to-key-west-car-service/hero/heroBg.js',
  'src/pages/fifa/hero/heroBg.js',
]

function walkHeroAssetDirs(dir, list = []) {
  if (!fs.existsSync(dir)) return list
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      if (entry.name === 'hero') list.push(full)
      else walkHeroAssetDirs(full, list)
    }
  }
  return list
}

function relPosix(p) {
  return path.relative(root, p).split(path.sep).join('/')
}

function isExcludedAsset(dir) {
  const rel = relPosix(dir)
  return EXCLUDED_ASSET_SUFFIXES.some((s) => rel === s)
}

function heroBgContent(importPath) {
  return `import heroBg from '${importPath}'

export const HERO_BG_DEFAULT = heroBg
export const HERO_BG_SRCSET = \`\${heroBg} 800w, \${heroBg} 1440w\`
export const HERO_BG_SIZES = '(max-width: 1024px) 800px, 1440px'
export const HERO_BG_WIDTH = 1440
export const HERO_BG_HEIGHT = 810
`
}

function importPathForHeroBg(heroBgFile, assetHeroDir) {
  const heroBgDir = path.dirname(heroBgFile)
  const imagePath = path.join(assetHeroDir, 'hero_image.webp')
  let rel = path.relative(heroBgDir, imagePath).split(path.sep).join('/')
  if (!rel.startsWith('.')) rel = `./${rel}`
  return rel
}

if (!fs.existsSync(srcImage)) {
  console.error('Missing source image:', srcImage)
  process.exit(1)
}

const assetDirs = [
  ...walkHeroAssetDirs(path.join(root, 'src/assets')),
].filter((d) => !isExcludedAsset(d))

let copied = 0
for (const dir of assetDirs) {
  const dest = path.join(dir, 'hero_image.webp')
  fs.copyFileSync(srcImage, dest)
  copied += 1
}

const heroBgFiles = []
function walkHeroBg(dir) {
  if (!fs.existsSync(dir)) return
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) walkHeroBg(full)
    else if (entry.name === 'heroBg.js') heroBgFiles.push(full)
  }
}
walkHeroBg(path.join(root, 'src/pages'))

let updated = 0
for (const heroBgFile of heroBgFiles) {
  const rel = relPosix(heroBgFile)
  if (EXCLUDED_HERO_BG_SUFFIXES.some((s) => rel === s)) continue

  const parts = rel.split('/')
  let assetHeroDir
  if (parts.includes('other-pages')) {
    const slug = parts[parts.indexOf('other-pages') + 1]
    assetHeroDir = path.join(root, 'src/assets/other-pages', slug, 'hero')
  } else if (parts.includes('illinois')) {
    const segment = parts[parts.indexOf('illinois') + 1]
    assetHeroDir = path.join(root, 'src/assets/illinois', segment, 'hero')
  } else if (parts.includes('home')) {
    assetHeroDir = path.join(root, 'src/assets/home/hero')
  } else {
    continue
  }

  if (!fs.existsSync(assetHeroDir)) {
    console.warn('No asset hero dir for', rel)
    continue
  }

  const importPath = importPathForHeroBg(heroBgFile, assetHeroDir)
  fs.writeFileSync(heroBgFile, heroBgContent(importPath), 'utf8')
  updated += 1
}

console.log(`Copied hero_image.webp to ${copied} folders`)
console.log(`Updated ${updated} heroBg.js files`)
