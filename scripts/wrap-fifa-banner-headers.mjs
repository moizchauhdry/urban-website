import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const srcRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../src')
const connecticutHeader = path.join(srcRoot, 'pages/connecticut/layout/Header.jsx')

function walk(dir, acc = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name)
    if (ent.isDirectory()) walk(p, acc)
    else if (ent.name === 'Header.jsx') acc.push(p)
  }
  return acc
}

const headers = walk(srcRoot).filter((f) => path.resolve(f) !== path.resolve(connecticutHeader))

let patched = 0
const skipped = []

for (const file of headers) {
  let content = fs.readFileSync(file, 'utf8')

  if (content.includes('site-top-chrome')) {
    continue
  }

  if (!content.includes('FifaPromoBanner')) {
    skipped.push(`${path.relative(srcRoot, file)} (missing FifaPromoBanner)`)
    continue
  }

  content = content.replace(
    /return \(\r?\n    <>\r?\n    <header/,
    "return (\r\n    <div className={`site-top-chrome${mobileMenuOpen ? ' site-top-chrome--menu-open' : ''}`}>\r\n    <header",
  )

  content = content.replace(
    /    <FifaPromoBanner \/>\r?\n    <\/>\r?\n  \)\r?\n}/,
    '    <FifaPromoBanner />\r\n    </div>\r\n  )\r\n}',
  )

  if (content.includes('return (\n    <>')) {
    skipped.push(`${path.relative(srcRoot, file)} (fragment wrapper not updated)`)
    continue
  }

  fs.writeFileSync(file, content)
  patched++
}

console.log(`Wrapped ${patched} headers with site-top-chrome`)
if (skipped.length) {
  console.log('Skipped:')
  skipped.forEach((line) => console.log(` - ${line}`))
}
