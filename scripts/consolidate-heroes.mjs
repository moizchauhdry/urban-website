/**
 * Build src/data/heroPages.jsx from existing page heroes, wire Home.jsx files,
 * and delete per-page hero folders.
 *
 * Run: node scripts/consolidate-heroes.mjs
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const PAGES = path.join(ROOT, 'src/pages')
const DATA_DIR = path.join(ROOT, 'src/data')
const HERO_PAGES_FILE = path.join(DATA_DIR, 'heroPages.jsx')

const PAGE_KEYS = {
  'connecticut/hero/Hero.jsx': 'connecticut',
  'florida/hero/Hero.jsx': 'florida',
  'newyork/hero/Hero.jsx': 'newyork',
  'illinois/illinois/hero/Hero.jsx': 'illinois',
  'illinois/chicago-limo-service/hero/Hero.jsx': 'chicago-limo',
  'illinois/chicago-chauffeur-service/hero/Hero.jsx': 'chicago-chauffeur',
  'fifa/hero/Hero.jsx': 'fifa',
  'home/HomeHero.jsx': 'home',
}

const HOME_IMPORT_TARGETS = [
  { file: 'home/HomePage.jsx', pageKey: 'home', component: 'HomeHero' },
]

function findHeroFiles() {
  const heroes = { ...PAGE_KEYS }
  const opRoot = path.join(PAGES, 'other-pages')
  for (const slug of fs.readdirSync(opRoot, { withFileTypes: true })) {
    if (!slug.isDirectory()) continue
    const heroPath = path.join(opRoot, slug.name, 'hero', 'Hero.jsx')
    if (fs.existsSync(heroPath)) {
      heroes[`other-pages/${slug.name}/hero/Hero.jsx`] = slug.name
    }
  }
  return heroes
}

function extractSectionClass(heroSource) {
  const m = heroSource.match(/<section className="([^"]+)"/)
  return m?.[1] ?? 'hero'
}

function extractInner(heroSource, tag, classPrefix) {
  const re = new RegExp(`<${tag} className="${classPrefix}[^"]*">([\\s\\S]*?)<\\/${tag}>`)
  return mTrim(heroSource.match(re)?.[1])
}

function mTrim(s) {
  return s?.trim() ?? ''
}

function readHeroBg(heroDir) {
  const bgPath = path.join(heroDir, 'heroBg.js')
  if (!fs.existsSync(bgPath)) return null
  const bg = fs.readFileSync(bgPath, 'utf8')
  const imports = [...bg.matchAll(/import (\w+) from '([^']+)'/g)]
  const defaultExport = bg.match(/export const HERO_BG_DEFAULT = (\w+)/)?.[1]
  const sizes = bg.match(/export const HERO_BG_SIZES = '([^']+)'/)?.[1]
  const width = bg.match(/export const HERO_BG_WIDTH = (\d+)/)?.[1]
  const height = bg.match(/export const HERO_BG_HEIGHT = (\d+)/)?.[1]
  const srcSetExpr = bg.match(/export const HERO_BG_SRCSET = `([^`]+)`/)?.[1]

  let sm = null
  let lg = null
  if (srcSetExpr) {
    const parts = srcSetExpr.split(',').map((p) => p.trim())
    for (const part of parts) {
      let wm = part.match(/^(\w+)\s+(\d+)w$/)
      if (!wm) wm = part.match(/^\$\{(\w+)\}\s+(\d+)w$/)
      if (!wm) continue
      if (wm[2] === '800') sm = wm[1]
      if (wm[2] === '1440') lg = wm[1]
    }
  }

  return { imports, defaultExport, sm, lg, sizes, width, height, bgPath }
}

function assetImportPath(bgFile, assetPath, targetFile) {
  const abs = path.resolve(path.dirname(bgFile), assetPath)
  let rel = path.relative(path.dirname(targetFile), abs).replace(/\\/g, '/')
  if (!rel.startsWith('.')) rel = `./${rel}`
  return rel
}

function varNameForPageKey(pageKey) {
  return `heroBg_${pageKey.replace(/-/g, '_')}`
}

function buildRegistry() {
  const heroFiles = findHeroFiles()
  const importLines = new Map()
  const entries = []

  for (const [relPath, pageKey] of Object.entries(heroFiles)) {
    const heroFile = path.join(PAGES, relPath)
    const heroDir = path.dirname(heroFile)
    const source = fs.readFileSync(heroFile, 'utf8')
    const sectionClass = extractSectionClass(source)
    const titleInner = extractInner(source, 'h1', 'hero-title')
    const descriptionInner = extractInner(source, 'p', 'hero-desc')
    const isHome = pageKey === 'home'
    const isFifa = pageKey === 'fifa'

    const bgDir = isHome ? path.join(PAGES, 'home/hero') : isFifa ? heroDir : heroDir
    const bg = readHeroBg(bgDir)
    let bgBlock = 'null'

    if (bg) {
      const importMap = {}
      const bgVar = varNameForPageKey(pageKey)

      for (const [, name, assetPath] of bg.imports) {
        const importName = isHome
          ? `${name}_home`
          : name === bg.defaultExport
            ? bgVar
            : `${name}_${pageKey.replace(/-/g, '_')}`
        const rel = assetImportPath(bg.bgPath, assetPath, HERO_PAGES_FILE)
        if (!importLines.has(importName)) {
          importLines.set(importName, `import ${importName} from '${rel}'`)
        }
        importMap[name] = importName
      }

      const defaultVar = importMap[bg.defaultExport] ?? bgVar
      const smVar = bg.sm ? importMap[bg.sm] : null
      const lgVar = bg.lg ? importMap[bg.lg] : null

      const bgFields = [
        `default: ${defaultVar}`,
        smVar && lgVar && smVar !== lgVar ? `sm: ${smVar}` : null,
        smVar && lgVar && smVar !== lgVar ? `lg: ${lgVar}` : null,
        `sizes: '${bg.sizes}'`,
        `width: ${bg.width}`,
        `height: ${bg.height}`,
      ].filter(Boolean)

      bgBlock = `{ ${bgFields.join(', ')} }`
    }

    entries.push({
      pageKey,
      sectionClass,
      titleInner,
      descriptionInner,
      bgBlock,
      variant: isFifa ? 'fifa' : isHome ? 'home' : 'landing',
    })
  }

  return { importLines, entries }
}

function indentBlock(text, spaces) {
  const pad = ' '.repeat(spaces)
  return text
    .split('\n')
    .map((line) => (line.trim() ? `${pad}${line}` : line))
    .join('\n')
}

function generateHeroPagesJsx() {
  const { importLines, entries } = buildRegistry()

  const body = entries
    .map((e) => {
      return `  '${e.pageKey}': {
    variant: '${e.variant}',
    sectionClass: '${e.sectionClass}',
    background: ${e.bgBlock},
    titleInner: (
      <>
${indentBlock(e.titleInner, 8)}
      </>
    ),
    descriptionInner: (
      <>
${indentBlock(e.descriptionInner, 8)}
      </>
    ),
  },`
    })
    .join('\n')

  const content = `${[...importLines.values()].join('\n')}

/** @typedef {'landing' | 'home' | 'fifa'} HeroVariant */

/** Auto-generated — run node scripts/consolidate-heroes.mjs to refresh */
export const HERO_PAGES = {
${body}
}

/** @param {string} pageKey */
export function getHeroPage(pageKey) {
  const config = HERO_PAGES[pageKey]
  if (!config) throw new Error(\`Unknown hero page key: \${pageKey}\`)
  return config
}
`

  fs.writeFileSync(HERO_PAGES_FILE, content)
  console.log(`Generated heroPages.jsx with ${entries.length} entries.`)
}

function landingHeroImportDepth(fromFile) {
  const rel = path.relative(path.dirname(fromFile), path.join(ROOT, 'src/components/hero/LandingHero.jsx'))
  return rel.replace(/\\/g, '/')
}

function wireHomeFiles(heroFiles) {
  const wired = []

  for (const [relPath, pageKey] of Object.entries(heroFiles)) {
    if (relPath.endsWith('HomeHero.jsx')) continue
    const homeFile = path.join(PAGES, relPath.replace(/hero\/Hero\.jsx$/, 'Home.jsx'))
    if (!fs.existsSync(homeFile)) continue

    const importPath = landingHeroImportDepth(homeFile)
    let src = fs.readFileSync(homeFile, 'utf8')
    src = src.replace(/import Hero from '\.\/hero\/Hero\.jsx'\n?/, '')
    if (!src.includes('LandingHero')) {
      src = `import LandingHero from '${importPath}'\n${src}`
    }
    src = src.replace(/<Hero\s*\/>/g, `<LandingHero pageKey="${pageKey}" />`)
    fs.writeFileSync(homeFile, src)
    wired.push(homeFile)
  }

  for (const { file, pageKey, component } of HOME_IMPORT_TARGETS) {
    const homeFile = path.join(PAGES, file)
    if (!fs.existsSync(homeFile)) continue
    const importPath = landingHeroImportDepth(homeFile)
    let src = fs.readFileSync(homeFile, 'utf8')
    src = src.replace(new RegExp(`import ${component} from '\\./${component}\\.jsx'\\n?`), '')
    if (!src.includes('LandingHero')) {
      src = `import LandingHero from '${importPath}'\n${src}`
    }
    src = src.replace(new RegExp(`<${component}\\s*/>`), `<LandingHero pageKey="${pageKey}" />`)
    fs.writeFileSync(homeFile, src)
    wired.push(homeFile)
  }

  console.log(`Wired ${wired.length} page files to LandingHero.`)
}

function deleteHeroArtifacts(heroFiles) {
  let removed = 0

  for (const relPath of Object.keys(heroFiles)) {
    if (relPath === 'home/HomeHero.jsx') {
      const homeHero = path.join(PAGES, 'home/HomeHero.jsx')
      if (fs.existsSync(homeHero)) {
        fs.unlinkSync(homeHero)
        removed++
      }
      const homeHeroDir = path.join(PAGES, 'home/hero')
      if (fs.existsSync(homeHeroDir)) {
        fs.rmSync(homeHeroDir, { recursive: true, force: true })
        removed++
      }
      continue
    }

    const heroDir = path.join(PAGES, path.dirname(relPath))
    if (fs.existsSync(heroDir)) {
      fs.rmSync(heroDir, { recursive: true, force: true })
      removed++
    }
  }

  console.log(`Removed ${removed} hero files/folders.`)
}

const heroFiles = findHeroFiles()
generateHeroPagesJsx()
wireHomeFiles(heroFiles)
deleteHeroArtifacts(heroFiles)
