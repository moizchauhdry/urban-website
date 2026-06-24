import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(full, files)
    else if (entry.name === 'routeCardItems.js') files.push(full)
  }
  return files
}

let updated = 0
for (const file of walk(path.join(root, 'src/pages'))) {
  let src = fs.readFileSync(file, 'utf8')
  const next = src
    .replace(/^import routeCardImage from ['"].*['"]\r?\n\r?\n?/m, '')
    .replace(/\r?\n    image: routeCardImage,\r?\n/, '\n')

  if (next !== src) {
    fs.writeFileSync(file, next, 'utf8')
    updated += 1
  }
}

console.log(`Removed per-page image imports from ${updated} routeCardItems.js files`)
