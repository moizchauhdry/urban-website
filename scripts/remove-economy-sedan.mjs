import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const srcRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../src')

function walk(dir, acc = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name)
    if (ent.isDirectory()) walk(p, acc)
    else if (ent.name === 'fleetItems.js') acc.push(p)
  }
  return acc
}

const importPattern = /\r?\nimport economySedan from [^\r\n]+\r?\n/
const blockPattern = /\r?\n  \{\r?\n    id: 'economy',[\s\S]*?\r?\n  \},/

let patched = 0

for (const file of walk(srcRoot)) {
  let content = fs.readFileSync(file, 'utf8')
  if (!content.includes("id: 'economy'")) continue

  const next = content.replace(importPattern, '\n').replace(blockPattern, '')
  if (next === content) {
    console.warn('Could not patch:', path.relative(srcRoot, file))
    continue
  }

  fs.writeFileSync(file, next)
  patched++
}

console.log(`Removed Economy Sedan from ${patched} fleetItems.js files`)
