import fs from 'fs'
import path from 'path'

const srcRoot = path.resolve('src')

function walk(dir, files = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name)
    if (ent.isDirectory()) walk(p, files)
    else if (ent.name === 'Services.jsx') files.push(p)
  }
  return files
}

for (const file of walk(path.join(srcRoot, 'pages'))) {
  let content = fs.readFileSync(file, 'utf8')
  if (!content.includes('ServicesCarousel')) continue
  if (content.includes('SERVICE_ITEMS')) continue

  const importLine = "import { SERVICE_ITEMS } from './serviceItems.js'\n"
  content = content.replace(
    /import ServicesCarousel from '[^']+'\n/,
    (m) => `${m}${importLine}`,
  )
  content = content.replace(
    /<ServicesCarousel\s*\/>/,
    '<ServicesCarousel items={SERVICE_ITEMS} />',
  )
  fs.writeFileSync(file, content)
  console.log('Updated', file)
}
