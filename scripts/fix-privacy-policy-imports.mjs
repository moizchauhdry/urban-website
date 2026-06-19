import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const pagesRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../src/pages')

function walk(dir, acc = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name)
    if (ent.isDirectory()) walk(p, acc)
    else if (ent.name === 'Footer.jsx') acc.push(p)
  }
  return acc
}

let fixed = 0

for (const file of walk(pagesRoot)) {
  let content = fs.readFileSync(file, 'utf8')
  if (!content.includes('PRIVACY_POLICY')) continue
  if (/import[\s\S]*?PRIVACY_POLICY[\s\S]*?from[\s\S]*?routes\.js/.test(content)) continue

  const next = content.replace(
    /import \{([\s\S]*?)\} from (['"][^'"]*config\/routes\.js['"];?)/,
    (match, imports, from) => {
      const trimmed = imports.trim().replace(/,\s*$/, '')
      return `import {${trimmed},\n  PRIVACY_POLICY,\n} from ${from}`
    },
  )

  if (next !== content) {
    fs.writeFileSync(file, next)
    fixed++
  }
}

console.log(`Fixed PRIVACY_POLICY imports in ${fixed} footer files`)
