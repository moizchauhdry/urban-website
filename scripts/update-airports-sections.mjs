import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const SRC = path.join(ROOT, 'src')
const COMPONENT = path.join(SRC, 'components/sections/RegionalAirportsSection.jsx')

function pageKeyFromAirportsSectionPath(filePath) {
  const normalized = filePath.replace(/\\/g, '/')
  const match = normalized.match(/src\/pages\/(.+)\/airports\/AirportsSection\.jsx$/)
  if (!match) throw new Error(`Cannot derive page key from ${filePath}`)
  return match[1]
}

async function walk(dir) {
  const out = []
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) out.push(...(await walk(full)))
    else if (entry.name === 'AirportsSection.jsx' && full.includes(`${path.sep}airports${path.sep}`)) {
      out.push(full)
    }
  }
  return out
}

function relImport(fromFile) {
  let rel = path.relative(path.dirname(fromFile), COMPONENT).replace(/\\/g, '/')
  if (!rel.startsWith('.')) rel = `./${rel}`
  return rel
}

const files = await walk(SRC)
let updated = 0

for (const file of files) {
  const pageKey = pageKeyFromAirportsSectionPath(file)
  const importPath = relImport(file)

  const out = `import RegionalAirportsSection from '${importPath}'

export default function AirportsSection() {
  return <RegionalAirportsSection pageKey="${pageKey}" />
}
`

  await fs.writeFile(file, out)
  updated++
  console.log('Updated:', path.relative(ROOT, file), '→', pageKey)
}

console.log(`\nUpdated ${updated} files`)
