import fs from 'fs'
import path from 'path'

const srcRoot = path.resolve('src')

function walk(dir, files = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name)
    if (ent.isDirectory()) walk(p, files)
    else if (/\.(jsx?|tsx?|mjs)$/.test(ent.name)) files.push(p)
  }
  return files
}

function upToSrc(filePath) {
  const dir = path.dirname(filePath)
  const rel = path.relative(srcRoot, dir)
  const depth = rel === '' ? 0 : rel.split(path.sep).length
  return '../'.repeat(depth)
}

function fixImportsInFile(filePath) {
  const prefix = upToSrc(filePath)
  let content = fs.readFileSync(filePath, 'utf8')
  const orig = content

  const targets = ['assets', 'components', 'hooks', 'lib', 'pages']

  for (const target of targets) {
    const correct = `${prefix}${target}/`
    const re = new RegExp(`(?:from |import\\()['"](?:\\.\\./)+${target}/`, 'g')
    content = content.replace(re, (match) => {
      const quote = match.includes("'") ? "'" : '"'
      const kw = match.startsWith('import(') ? 'import(' : 'from '
      return `${kw}${quote}${correct}`
    })
  }

  // components/nav: legacy top-level region paths
  if (filePath.includes(`${path.sep}components${path.sep}`)) {
    content = content.replace(
      /from ['"](?:\.\.\/)+connecticut\//g,
      "from '../../pages/connecticut/",
    )
    content = content.replace(
      /from ['"](?:\.\.\/)+illinois\/routes/g,
      "from '../../pages/illinois/routes",
    )
  }

  return content === orig ? null : content
}

const files = walk(srcRoot)
let changed = 0
for (const file of files) {
  const next = fixImportsInFile(file)
  if (next) {
    fs.writeFileSync(file, next)
    changed++
  }
}
console.log('Updated', changed, 'files')
