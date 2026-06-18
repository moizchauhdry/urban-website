import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const srcRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../src')
const bannerPath = path.join(srcRoot, 'components/layout/FifaPromoBanner.jsx')
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
  if (content.includes('FifaPromoBanner')) continue

  const rel = path.relative(path.dirname(file), bannerPath).replace(/\\/g, '/')
  const importLine = `import FifaPromoBanner from '${rel}'\n`

  const lastImport = content.lastIndexOf('import ')
  const importEnd = content.indexOf('\n', lastImport)
  content = content.slice(0, importEnd + 1) + importLine + content.slice(importEnd + 1)

  if (!content.includes('return (\r\n    <header') && !content.includes('return (\n    <header')) {
    skipped.push(file)
    continue
  }

  content = content.replace('return (\r\n    <header', 'return (\r\n    <>\r\n    <header')
  content = content.replace('return (\n    <header', 'return (\n    <>\n    <header')
  content = content.replace(
    /    <\/header>\r?\n  \)\r?\n}/,
    '    </header>\r\n    <FifaPromoBanner />\r\n    </>\r\n  )\r\n}'
  )

  fs.writeFileSync(file, content)
  patched++
}

console.log(`Patched ${patched} of ${headers.length} headers`)
if (skipped.length) {
  console.log('Skipped (unexpected structure):')
  skipped.forEach((f) => console.log(' -', path.relative(srcRoot, f)))
}
