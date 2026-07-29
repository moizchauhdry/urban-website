/**
 * Split heroPages.jsx into home (critical path) + landings (lazy).
 * Run: node scripts/split-hero-pages.mjs
 */
import fs from 'node:fs'
import path from 'node:path'

const ROOT = path.resolve(import.meta.dirname, '..')
const SRC = path.join(ROOT, 'src/data/heroPages.jsx')
const OUT_DIR = path.join(ROOT, 'src/data/heroes')

const src = fs.readFileSync(SRC, 'utf8')

fs.mkdirSync(OUT_DIR, { recursive: true })

const homeFile = `import heroHome from '../../assets/hero/pages/home-800.webp'
import heroHomeSm from '../../assets/hero/pages/home-800.webp'
import heroHomeLg from '../../assets/hero/pages/home-1440.webp'

/** Home page hero — isolated so landings never enter the home critical path. */
export const HOME_HERO = {
  variant: 'home',
  sectionClass: 'hero hero--home',
  background: {
    default: heroHome,
    sm: heroHomeSm,
    lg: heroHomeLg,
    sizes: '(max-width: 1024px) 800px, 1440px',
    width: 1440,
    height: 810,
  },
  titleInner: (
    <>
      <span className="hero-title-line">Premium White Glove</span>{' '}
      <span className="hero-title-line">
        <span className="hero-title-line--highlight">Chauffeur Service</span>
      </span>
      <span className="hero-title-line hero-title-line--accent"> in USA</span>
    </>
  ),
  descriptionInner: (
    <>
      Urban Elite Limo delivers premium white-glove chauffeur services across the USA.
      Experience luxury, comfort, and professionalism in every ride.
      Serving Westchester, Connecticut, New York, Massachusetts, Miami, Chicago & More.
    </>
  ),
}
`

fs.writeFileSync(path.join(OUT_DIR, 'home.jsx'), homeFile)

let landings = src
  .replace(/import heroHome from[^\n]+\n/g, '')
  .replace(/import heroHomeSm from[^\n]+\n/g, '')
  .replace(/import heroHomeLg from[^\n]+\n/g, '')
  .replace(/\n  'home': \{[\s\S]*?\n  \},/, '')

landings = landings
  .replace(
    '/** Shared hero content — edit entries here when adding or updating landing pages. */\nexport const HERO_PAGES',
    '/** Landing + FIFA heroes — dynamically imported off the home critical path. */\nexport const HERO_PAGES',
  )
  .replace('export function getHeroPage(pageKey)', 'export function getLandingHeroPage(pageKey)')
  .replace('Unknown hero page key', 'Unknown landing hero page key')

fs.writeFileSync(path.join(OUT_DIR, 'landings.jsx'), landings)

const indexFile = `import { HOME_HERO } from './home.jsx'

/** @param {string} pageKey */
export function getHomeHero() {
  return HOME_HERO
}

/** Sync API for home only; landings must use loadLandingHero. */
export function getHeroPage(pageKey) {
  if (pageKey === 'home') return HOME_HERO
  throw new Error(
    \`getHeroPage sync only supports "home". Use loadLandingHero("\${pageKey}") for landings.\`,
  )
}

/** @param {string} pageKey */
export async function loadLandingHero(pageKey) {
  if (pageKey === 'home') return HOME_HERO
  const { getLandingHeroPage } = await import('./landings.jsx')
  return getLandingHeroPage(pageKey)
}
`

fs.writeFileSync(path.join(OUT_DIR, 'index.js'), indexFile)

console.log('Wrote', path.join(OUT_DIR, 'home.jsx'))
console.log('Wrote', path.join(OUT_DIR, 'landings.jsx'), `(${fs.statSync(path.join(OUT_DIR, 'landings.jsx')).size} bytes)`)
console.log('Wrote', path.join(OUT_DIR, 'index.js'))
