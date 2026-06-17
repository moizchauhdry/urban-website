import fs from 'fs'
import path from 'path'

const srcRoot = path.resolve('src/pages')

function walk(dir, files = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name)
    if (ent.isDirectory()) walk(p, files)
    else if (ent.name === 'Header.jsx' || ent.name === 'Footer.jsx') files.push(p)
  }
  return files
}

for (const file of walk(srcRoot)) {
  let content = fs.readFileSync(file, 'utf8')
  const orig = content

  content = content.replace(
    /className="logo-img brand-logo brand-logo--header"`n\s+width=\{104\}`n\s+height=\{38\}`n\s+decoding="async"/g,
    'className="logo-img brand-logo brand-logo--header"\n            width={104}\n            height={38}\n            decoding="async"',
  )
  content = content.replace(
    /className="logo-img brand-logo brand-logo--footer"`n\s+width=\{142\}`n\s+height=\{52\}`n\s+decoding="async"/g,
    'className="logo-img brand-logo brand-logo--footer"\n                width={142}\n                height={52}\n                decoding="async"',
  )
  content = content.replace(/\s*style=\{\{ aspectRatio: '104 \/ 38' \}\}/g, '')
  content = content.replace(/\s*style=\{\{ aspectRatio: '142 \/ 52' \}\}/g, '')
  content = content.replace(
    /className="logo-img"\n\s+width=\{104\}/g,
    'className="logo-img brand-logo brand-logo--header"\n            width={104}',
  )
  content = content.replace(
    /className="logo-img"\n\s+width=\{142\}/g,
    'className="logo-img brand-logo brand-logo--footer"\n                width={142}',
  )

  if (content !== orig) fs.writeFileSync(file, content)
}

console.log('Fixed layout logos')
