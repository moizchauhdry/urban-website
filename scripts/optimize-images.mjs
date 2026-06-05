/**
 * Resize + WebP fleet/hero photos for mobile (~800px display width).
 * Run: node scripts/optimize-images.mjs
 */
import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const ROOT = path.resolve(import.meta.dirname, '..')
const ASSETS = path.join(ROOT, 'src/assets/icons')
const MAX_WIDTH = 800
const WEBP_QUALITY = 78

const PHOTOS = [
  'full-size-suv3.png',
  'sprinter2.png',
  'limo2.jpg',
  'limo3.jpg',
  'luxury-sedan2.jpg',
  'luxury-sedan3.jpg',
  'economy-sedan2.jpg',
  'economy-sedan3.jpg',
  'full-size-suv2.jpg',
  'first-class-sedan2.jpeg',
  'first-class-sedan3.jpeg',
  'sprinter3.jpg',
  'party-bus2.jpg',
  'party-bus3.jpg',
  'moto-coach2.jpg',
  'bradley.png',
  'jfk.jpg',
  'lga.jpg',
]

const VECTOR_ASSETS = [
  'hero-bg.svg',
  'economy-sedan.svg',
  'first-class-sedan.svg',
  'luxury-sedan.svg',
  'full-size-suv.svg',
  'limo-final.svg',
  'sprinter.svg',
  'party-bus.svg',
  'moto-coach.svg',
  'left-img.svg',
  'right-img.svg',
  'faqs.svg',
]

async function toWebp(inputName) {
  const input = path.join(ASSETS, inputName)
  try {
    await fs.access(input)
  } catch {
    console.warn(`skip (missing): ${inputName}`)
    return null
  }

  const base = inputName.replace(/\.(png|jpe?g|svg)$/i, '')
  const output = path.join(ASSETS, `${base}.webp`)

  await sharp(input)
    .rotate()
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: WEBP_QUALITY, effort: 4 })
    .toFile(output)

  const { size } = await fs.stat(output)
  console.log(`✓ ${base}.webp (${Math.round(size / 1024)} KiB)`)
  return `${base}.webp`
}

console.log('Optimizing fleet + hero images…')
for (const name of PHOTOS) {
  await toWebp(name)
}
for (const name of VECTOR_ASSETS) {
  await toWebp(name)
}
console.log('Done.')
