/**
 * Point all regional Header/Footer components at shared BrandLogo.
 * Run: node scripts/wire-brand-logo.mjs
 */
import fs from 'node:fs'
import path from 'node:path'

const ROOT = path.resolve(import.meta.dirname, '..')
const pagesRoot = path.join(ROOT, 'src/pages')

function depthToComponents(filePath) {
  const rel = path.relative(pagesRoot, path.dirname(filePath))
  const depth = rel.split(path.sep).filter(Boolean).length
  return '../'.repeat(depth) + 'components/layout/BrandLogo.jsx'
}

function patchHeader(content, importPath) {
  let out = content
  out = out.replace(
    /import urbanLogo from ['"][^'"]+['"]\n/,
    `import { HeaderBrandLogo } from '${importPath}'\n`,
  )
  out = out.replace(
    /<img\s+src=\{urbanLogo\}[\s\S]*?\/>\s*/,
    '<HeaderBrandLogo />\n          ',
  )
  return out
}

function patchFooter(content, importPath) {
  let out = content
  out = out.replace(
    /import urbanFooterLogo from ['"][^'"]+['"]\n/,
    `import { FooterBrandLogo } from '${importPath}'\n`,
  )
  out = out.replace(
    /<img\s+src=\{urbanFooterLogo\}[\s\S]*?\/>\s*/,
    '<FooterBrandLogo />\n              ',
  )
  return out
}

let count = 0
for (const name of ['Header.jsx', 'Footer.jsx']) {
  const files = []
  function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name)
      if (entry.isDirectory()) walk(full)
      else if (entry.name === name && full.includes(`${path.sep}layout${path.sep}`)) files.push(full)
    }
  }
  walk(pagesRoot)

  for (const file of files) {
    const importPath = depthToComponents(file)
    const patch = name === 'Header.jsx' ? patchHeader : patchFooter
    const next = patch(fs.readFileSync(file, 'utf8'), importPath)
    fs.writeFileSync(file, next)
    count++
    console.log('Updated', path.relative(ROOT, file))
  }
}

console.log(`Done — ${count} layout files.`)
