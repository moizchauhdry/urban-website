import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const SRC = path.join(ROOT, 'src')
const ASSETS = path.join(SRC, 'assets')

const CODE_EXT = new Set(['.js', '.jsx', '.ts', '.tsx', '.css', '.html', '.mjs'])
const ASSET_EXT = /\.(webp|png|jpe?g|gif|svg|ico|woff2?|ttf|eot|mp4|webm)$/i

function walk(dir, filter = () => true, acc = []) {
  if (!fs.existsSync(dir)) return acc
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name)
    if (e.isDirectory()) walk(p, filter, acc)
    else if (filter(p)) acc.push(p)
  }
  return acc
}

function norm(p) {
  return p.replace(/\\/g, '/')
}

function relAsset(absPath) {
  const rel = path.relative(ASSETS, absPath)
  if (rel.startsWith('..')) return null
  return norm(rel)
}

function addRef(set, absPath) {
  const rel = relAsset(absPath)
  if (rel && fs.existsSync(absPath)) set.add(rel)
}

/** @type {Set<string>} */
const referenced = new Set()

const codeFiles = [
  ...walk(SRC, (f) => CODE_EXT.has(path.extname(f).toLowerCase())),
  ...walk(path.join(ROOT, 'scripts'), (f) => CODE_EXT.has(path.extname(f).toLowerCase())),
  path.join(ROOT, 'vite.config.js'),
  path.join(ROOT, 'index.html'),
].filter((f) => fs.existsSync(f))

const importRe =
  /(?:import\s+[\w*\s{},]+\s+from\s+|import\s*\(\s*|url\s*\(\s*)['"]([^'"]+)['"]/g
const urlBareRe = /url\s*\(\s*['"]?([^'")\s]+)['"]?\s*\)/g

for (const file of codeFiles) {
  const text = fs.readFileSync(file, 'utf8')
  const dir = path.dirname(file)

  for (const re of [importRe, urlBareRe]) {
    re.lastIndex = 0
    let m
    while ((m = re.exec(text))) {
      const spec = m[1].split('?')[0]
      if (spec.startsWith('data:') || spec.startsWith('http')) continue
      if (!ASSET_EXT.test(spec) && !spec.includes('assets')) continue

      let abs
      if (spec.startsWith('/src/assets/')) {
        abs = path.join(ROOT, spec.slice(1))
      } else if (spec.startsWith('/assets/')) {
        abs = path.join(SRC, spec.slice(1))
      } else if (spec.includes('/assets/')) {
        const idx = spec.indexOf('/assets/')
        abs = path.join(SRC, spec.slice(idx + 1))
      } else if (spec.startsWith('.')) {
        abs = path.resolve(dir, spec)
      } else if (spec.startsWith('assets/')) {
        abs = path.join(SRC, spec)
      } else {
        continue
      }
      addRef(referenced, abs)
    }
  }
}

// import.meta.glob — all airport images
for (const f of walk(path.join(ASSETS, 'airports'))) addRef(referenced, f)

// vite.config hardcoded dev hero paths
addRef(referenced, path.join(ASSETS, 'home/hero/home-hero-800.webp'))
addRef(referenced, path.join(ASSETS, 'home/hero/home-hero-1440.webp'))

// public assets referenced from index.html
addRef(referenced, path.join(ROOT, 'public/favicon.svg'))
addRef(referenced, path.join(ROOT, 'public/urban-favicon.png'))

const allAssets = walk(ASSETS)
const unused = allAssets
  .filter((f) => {
    const rel = relAsset(f)
    return rel && !referenced.has(rel)
  })
  .map((f) => norm(path.relative(ROOT, f)))

const report = {
  total: allAssets.length,
  referenced: referenced.size,
  unused: unused.length,
  unusedPaths: unused.sort(),
}

fs.writeFileSync(path.join(ROOT, 'scripts', 'unused-assets-report.json'), JSON.stringify(report, null, 2))
console.log(`Assets: ${report.referenced} referenced, ${report.unused} unused of ${report.total}`)
for (const p of report.unusedPaths) console.log('  ' + p)
