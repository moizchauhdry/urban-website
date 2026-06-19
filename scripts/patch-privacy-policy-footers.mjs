import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const srcRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../src')
const connecticutFooter = path.join(srcRoot, 'pages/connecticut/layout/Footer.jsx')

function walk(dir, acc = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name)
    if (ent.isDirectory()) walk(p, acc)
    else if (ent.name === 'Footer.jsx') acc.push(p)
  }
  return acc
}

const footers = walk(srcRoot).filter((f) => path.resolve(f) !== path.resolve(connecticutFooter))

let patched = 0

for (const file of footers) {
  let content = fs.readFileSync(file, 'utf8')
  if (!content.includes('https://urbanelitelimo.com/privacy-policy/')) continue

  content = content.replace(
    /<a href="https:\/\/urbanelitelimo\.com\/privacy-policy\/">Privacy Policy<\/a>/g,
    '<Link to={PRIVACY_POLICY}>Privacy Policy</Link>',
  )

  if (!content.includes('PRIVACY_POLICY')) {
    content = content.replace(
      /(CONTACT_US,?)(\s*\} from ['"][^'"]*routes\.js['"];?)/,
      '$1,\n  PRIVACY_POLICY$2',
    )
    content = content.replace(
      /(OUR_SERVICES,?)(\s*\} from ['"][^'"]*routes\.js['"];?)/,
      '$1,\n  PRIVACY_POLICY$2',
    )
  }

  fs.writeFileSync(file, content)
  patched++
}

console.log(`Updated Privacy Policy links in ${patched} footer files`)
