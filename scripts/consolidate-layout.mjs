/**
 * Point landing layouts at shared components and remove per-page layout/ folders.
 * Run: node scripts/consolidate-layout.mjs
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const PAGES = path.join(ROOT, 'src/pages')

const REGIONAL = {
  connecticut: {
    homePath: 'CONNECTICUT_HOME',
    headerVariant: 'connecticut',
    importRoutes: true,
    outlet: true,
  },
  florida: {
    homePath: 'FLORIDA_HOME',
    headerVariant: 'standard',
    importRoutes: true,
    outlet: true,
  },
  newyork: {
    homePath: 'NEW_YORK_HOME',
    headerVariant: 'standard',
    importRoutes: true,
    outlet: true,
  },
}

const ILLINOIS_LAYOUTS = {
  'illinois/illinois/IllinoisLayout.jsx': {
    homePath: 'ILLINOIS_HOME',
    layoutName: 'IllinoisLayout',
    comment: 'Illinois car service landing page.',
  },
  'illinois/chicago-limo-service/ChicagoLimoLayout.jsx': {
    homePath: 'CHICAGO_LIMO_HOME',
    layoutName: 'ChicagoLimoLayout',
    comment: 'Chicago Limo Service.',
  },
  'illinois/chicago-chauffeur-service/ChicagoChauffeurLayout.jsx': {
    homePath: 'CHICAGO_CHAUFFEUR_HOME',
    layoutName: 'ChicagoChauffeurLayout',
    comment: 'Chicago Chauffeur Service.',
  },
}

function relImport(fromDir, target) {
  const rel = path.relative(fromDir, path.join(ROOT, target)).replace(/\\/g, '/')
  return rel.startsWith('.') ? rel : `./${rel}`
}

function readPageHome(navConfigPath) {
  if (!fs.existsSync(navConfigPath)) return null
  const content = fs.readFileSync(navConfigPath, 'utf8')
  const pageHome = content.match(/export const PAGE_HOME = '([^']+)'/)?.[1]
  if (pageHome) return pageHome
  const connecticut = content.match(/export \{ CONNECTICUT_HOME \}/)
  if (connecticut) return null
  return null
}

function writeRegionalLayout(pageKey, config) {
  const layoutFile = path.join(PAGES, pageKey, `${pageKey[0].toUpperCase()}${pageKey.slice(1)}Layout.jsx`)
  const actualFile =
    pageKey === 'connecticut'
      ? path.join(PAGES, 'connecticut/ConnecticutLayout.jsx')
      : pageKey === 'florida'
        ? path.join(PAGES, 'florida/FloridaLayout.jsx')
        : path.join(PAGES, 'newyork/NewYorkLayout.jsx')

  const dir = path.dirname(actualFile)
  const shellImport = relImport(dir, 'src/components/layout/LandingPageShell.jsx')
  const routesImport = relImport(dir, 'src/config/routes.js')
  const layoutName =
    pageKey === 'connecticut'
      ? 'ConnecticutLayout'
      : pageKey === 'florida'
        ? 'FloridaLayout'
        : 'NewYorkLayout'

  const content = `import { Outlet, useLocation } from 'react-router-dom'
import LandingPageShell from '${shellImport}'
import { ${config.homePath} } from '${routesImport}'

/** Layout chrome for the ${pageKey} car service landing page. */
export default function ${layoutName}() {
  const location = useLocation()
  const isHome = location.pathname === ${config.homePath}

  return (
    <LandingPageShell
      homePath={${config.homePath}}
      headerVariant="${config.headerVariant}"
      headerKey={location.pathname}
      isHome={isHome}
    >
      <Outlet />
    </LandingPageShell>
  )
}
`
  fs.writeFileSync(actualFile, content)
}

function writeIllinoisLayout(relPath, config) {
  const filePath = path.join(PAGES, relPath)
  const dir = path.dirname(filePath)
  const shellImport = relImport(dir, 'src/components/layout/LandingPageShell.jsx')
  const routesImport = relImport(dir, 'src/config/routes.js')

  const content = `import { Outlet, useLocation } from 'react-router-dom'
import LandingPageShell from '${shellImport}'
import { ${config.homePath} } from '${routesImport}'

/** Layout chrome for ${config.comment} */
export default function ${config.layoutName}() {
  const location = useLocation()
  const isHome = location.pathname === ${config.homePath}

  return (
    <LandingPageShell
      homePath={${config.homePath}}
      headerVariant="standard"
      headerKey={location.pathname}
      isHome={isHome}
    >
      <Outlet />
    </LandingPageShell>
  )
}
`
  fs.writeFileSync(filePath, content)
}

function writeFifaLayout() {
  const filePath = path.join(PAGES, 'fifa/FifaLayout.jsx')
  const dir = path.dirname(filePath)
  const shellImport = relImport(dir, 'src/components/layout/LandingPageShell.jsx')
  const routesImport = relImport(dir, 'src/config/routes.js')
  const cssImport = relImport(dir, 'src/styles/fifa.css')

  const content = `import { Outlet, useLocation } from 'react-router-dom'
import LandingPageShell from '${shellImport}'
import { FIFA_HOME } from '${routesImport}'
import '${cssImport}'

/** FIFA World Cup 2026 landing page layout (preview only — not in main nav). */
export default function FifaLayout() {
  const location = useLocation()
  const isHome = location.pathname === FIFA_HOME

  return (
    <LandingPageShell
      homePath={FIFA_HOME}
      headerVariant="connecticut"
      headerKey={location.pathname}
      isHome={isHome}
      wrapperClassName="fifa-page"
    >
      <Outlet />
    </LandingPageShell>
  )
}
`
  fs.writeFileSync(filePath, content)
}

function writeOtherPageLayout(pageDir, pageHome, slug) {
  const filePath = path.join(pageDir, 'PageLayout.jsx')
  const dir = path.dirname(filePath)
  const shellImport = relImport(dir, 'src/components/layout/LandingPageShell.jsx')
  const cssImport = relImport(dir, `src/styles/other-pages/${slug}.css`)
  const title = slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')

  const content = `import Home from './Home.jsx'
import LandingPageShell from '${shellImport}'
import '${cssImport}'

const PAGE_HOME = '${pageHome}'

/** Layout for ${title}. */
export default function PageLayout() {
  return (
    <LandingPageShell homePath={PAGE_HOME} headerVariant="standard" isHome>
      <Home />
    </LandingPageShell>
  )
}
`
  fs.writeFileSync(filePath, content)
}

function rmLayoutDir(dir) {
  const layoutDir = path.join(dir, 'layout')
  if (fs.existsSync(layoutDir)) {
    fs.rmSync(layoutDir, { recursive: true, force: true })
    return true
  }
  return false
}

for (const [key, config] of Object.entries(REGIONAL)) {
  writeRegionalLayout(key, config)
  rmLayoutDir(path.join(PAGES, key))
}

for (const [relPath, config] of Object.entries(ILLINOIS_LAYOUTS)) {
  writeIllinoisLayout(relPath, config)
  rmLayoutDir(path.join(PAGES, path.dirname(relPath)))
}

writeFifaLayout()
rmLayoutDir(path.join(PAGES, 'fifa'))

let otherPages = 0
const otherPagesRoot = path.join(PAGES, 'other-pages')
for (const slug of fs.readdirSync(otherPagesRoot, { withFileTypes: true })) {
  if (!slug.isDirectory()) continue
  const pageDir = path.join(otherPagesRoot, slug.name)
  if (!fs.existsSync(path.join(pageDir, 'PageLayout.jsx'))) continue
  const pageHome = readPageHome(path.join(pageDir, 'layout/navConfig.js'))
  if (!pageHome) {
    console.warn('skip (no PAGE_HOME):', slug.name)
    continue
  }
  writeOtherPageLayout(pageDir, pageHome, slug.name)
  rmLayoutDir(pageDir)
  otherPages++
}

console.log(`Updated regional/illinois/fifa layouts and ${otherPages} other-pages. Removed layout/ folders.`)
