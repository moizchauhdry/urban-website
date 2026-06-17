import fs from 'fs'
import path from 'path'

const srcRoot = path.resolve('src')
const sharedImport = "import HeroDeferredBooking from '../../../components/hero/HeroDeferredBooking.jsx'"
const sharedImportHome = "import HeroDeferredBooking from '../../components/hero/HeroDeferredBooking.jsx'"

function walk(dir, files = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name)
    if (ent.isDirectory()) walk(p, files)
    else if (ent.name === 'Hero.jsx' || ent.name === 'HomeHero.jsx') files.push(p)
  }
  return files
}

for (const file of walk(srcRoot)) {
  let content = fs.readFileSync(file, 'utf8')
  const orig = content
  content = content.replace(
    /import HeroDeferredBooking from '\.\/HeroDeferredBooking\.jsx'/,
    sharedImport,
  )
  content = content.replace(
    /import HeroDeferredBooking from '\.\.\/connecticut\/hero\/HeroDeferredBooking\.jsx'/,
    sharedImportHome,
  )
  if (content !== orig) {
    fs.writeFileSync(file, content)
    console.log('Updated', path.relative(srcRoot, file))
  }
}

// Replace regional hero booking files with re-exports
const reExportTargets = [
  'HeroBookingForm.jsx',
  'HeroBookingFormShell.jsx',
  'HeroDeferredBooking.jsx',
  'heroBooking.js',
]

function walkHero(dir, files = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name)
    if (ent.isDirectory()) walkHero(p, files)
    else if (ent.name === 'Hero.jsx') files.push(path.dirname(p))
  }
  return files
}

const heroDirs = walkHero(path.join(srcRoot, 'pages'))
for (const dir of heroDirs) {
  const rel = path.relative(srcRoot, dir).replace(/\\/g, '/')
  const depth = rel.split('/').length
  const prefix = '../'.repeat(depth) + 'components/hero/'

  for (const name of reExportTargets) {
    const target = path.join(dir, name)
    if (!fs.existsSync(target)) continue
    if (name.endsWith('.js')) {
      fs.writeFileSync(target, `export * from '${prefix}${name}'\n`)
    } else {
      fs.writeFileSync(target, `export { default } from '${prefix}${name}'\n`)
    }
  }
}

console.log('Re-exported hero booking modules in', heroDirs.length, 'regions')
