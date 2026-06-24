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

function cleanJsxArtifacts(text) {
  return text
    .replace(/\{"([^"]*)"\}/g, '$1')
    .replace(/\{'([^']*)'\}/g, '$1')
}

let fixed = 0
for (const file of walk(path.join(root, 'src/pages'))) {
  let src = fs.readFileSync(file, 'utf8')
  const next = cleanJsxArtifacts(src)
  if (next !== src) {
    fs.writeFileSync(file, next, 'utf8')
    fixed += 1
  }
}

console.log(`Cleaned ${fixed} routeCardItems.js files`)
