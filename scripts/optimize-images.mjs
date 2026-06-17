/**
 * Resize + WebP fleet/hero photos for mobile (~800px display width).
 * Run: node scripts/optimize-images.mjs
 */
import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const ROOT = path.resolve(import.meta.dirname, '..')
const CONNECTICUT = path.join(ROOT, 'src/assets/connecticut')
const FLEET = path.join(CONNECTICUT, 'fleet')
const HERO = path.join(CONNECTICUT, 'hero')
const AIRPORTS = path.join(CONNECTICUT, 'airports')
const JOURNEY = path.join(CONNECTICUT, 'journey')
const FAQS = path.join(CONNECTICUT, 'faqs')
const MAX_WIDTH = 800
const WEBP_QUALITY = 78

const PHOTOS = [
  { dir: FLEET, name: 'full-size-suv3.png' },
  { dir: FLEET, name: 'sprinter2.png' },
  { dir: FLEET, name: 'limo2.jpg' },
  { dir: FLEET, name: 'limo3.jpg' },
  { dir: FLEET, name: 'luxury-sedan2.jpg' },
  { dir: FLEET, name: 'luxury-sedan3.jpg' },
  { dir: FLEET, name: 'economy-sedan2.jpg' },
  { dir: FLEET, name: 'economy-sedan3.jpg' },
  { dir: FLEET, name: 'full-size-suv2.jpg' },
  { dir: FLEET, name: 'first-class-sedan2.jpeg' },
  { dir: FLEET, name: 'first-class-sedan3.jpeg' },
  { dir: FLEET, name: 'sprinter3.jpg' },
  { dir: FLEET, name: 'party-bus2.jpg' },
  { dir: FLEET, name: 'party-bus3.jpg' },
  { dir: FLEET, name: 'moto-coach2.jpg' },
  { dir: AIRPORTS, name: 'bradley.png' },
  { dir: AIRPORTS, name: 'jfk.jpg' },
  { dir: AIRPORTS, name: 'lga.jpg' },
]

const VECTOR_ASSETS = [
  { dir: FLEET, name: 'economy-sedan.svg' },
  { dir: FLEET, name: 'first-class-sedan.svg' },
  { dir: FLEET, name: 'luxury-sedan.svg' },
  { dir: FLEET, name: 'full-size-suv.svg' },
  { dir: FLEET, name: 'limo-final.svg' },
  { dir: FLEET, name: 'sprinter.svg' },
  { dir: FLEET, name: 'party-bus.svg' },
  { dir: FLEET, name: 'moto-coach.svg' },
  { dir: JOURNEY, name: 'left-img.svg' },
  { dir: JOURNEY, name: 'right-img.svg' },
  { dir: FAQS, name: 'faqs.svg' },
]

async function toWebp({ dir, name }) {
  const input = path.join(dir, name)
  try {
    await fs.access(input)
  } catch {
    console.warn(`skip (missing): ${name}`)
    return null
  }

  const base = name.replace(/\.(png|jpe?g|svg)$/i, '')
  const output = path.join(dir, `${base}.webp`)

  await sharp(input)
    .rotate()
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: WEBP_QUALITY, effort: 4 })
    .toFile(output)

  const { size } = await fs.stat(output)
  console.log(`✓ ${base}.webp (${Math.round(size / 1024)} KiB)`)
  return `${base}.webp`
}

/** Hero: two responsive WebPs from SVG (800w mobile LCP, 1440w sharp desktop). */
async function optimizeHero() {
  const input = path.join(HERO, 'hero-bg.svg')
  try {
    await fs.access(input)
  } catch {
    console.warn('skip (missing): hero-bg.svg')
    return
  }

  const variants = [
    { name: 'hero-bg-800.webp', width: 800, quality: 82 },
    { name: 'hero-bg-1440.webp', width: 1440, quality: 85 },
  ]

  for (const { name, width, quality } of variants) {
    const output = path.join(HERO, name)
    await sharp(input, { density: 144 })
      .rotate()
      .resize({ width, withoutEnlargement: false })
      .webp({ quality, effort: 4 })
      .toFile(output)
    const { size } = await fs.stat(output)
    console.log(`✓ ${name} (${Math.round(size / 1024)} KiB)`)
  }
}

console.log('Optimizing fleet + hero images…')
await optimizeHero()
for (const entry of PHOTOS) {
  await toWebp(entry)
}
for (const entry of VECTOR_ASSETS) {
  await toWebp(entry)
}
console.log('Done.')
