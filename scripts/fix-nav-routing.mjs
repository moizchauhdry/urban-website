import fs from 'fs'
import path from 'path'

const srcRoot = path.resolve('src')
const layoutDirs = []

function walk(dir) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name)
    if (ent.isDirectory()) {
      if (ent.name === 'layout') layoutDirs.push(p)
      else walk(p)
    }
  }
}

walk(path.join(srcRoot, 'pages'))

for (const dir of layoutDirs) {
  const rel = path.relative(srcRoot, dir).replace(/\\/g, '/')
  const depth = rel.split('/').length
  const prefix = '../'.repeat(depth) + 'components/nav/NavMenuItems.jsx'
  const configPrefix = '../'.repeat(depth) + 'config/routes.js'

  const navMenuItems = path.join(dir, 'NavMenuItems.jsx')
  if (fs.existsSync(navMenuItems)) {
    fs.writeFileSync(navMenuItems, `export { default } from '${prefix}'\n`)
  }

  const navbar = path.join(dir, 'Navbar.jsx')
  if (fs.existsSync(navbar)) {
    let content = fs.readFileSync(navbar, 'utf8')
    content = content.replace(/import NavMenuItems from '\.\/NavMenuItems\.jsx'/, `import NavMenuItems from '${prefix}'`)
    content = content.replace(
      /export default function Navbar\([^)]*\)/,
      'export default function Navbar()',
    )
    content = content.replace(/\s*homePath=\{homePath\}/g, '')
    content = content.replace(/<NavMenuItems variant="desktop"\s*\/>/, '<NavMenuItems variant="desktop" />')
    fs.writeFileSync(navbar, content)
  }

  const mobilePanel = path.join(dir, 'MobileMenuPanel.jsx')
  if (fs.existsSync(mobilePanel)) {
    let content = fs.readFileSync(mobilePanel, 'utf8')
    content = content.replace(/import NavMenuItems from '\.\/NavMenuItems\.jsx'/, `import NavMenuItems from '${prefix}'`)
    content = content.replace(/,\s*homePath\s*=\s*'\/'\s*\)/, ')')
    content = content.replace(/\s*homePath=\{homePath\}/g, '')
    fs.writeFileSync(mobilePanel, content)
  }

  const footer = path.join(dir, 'Footer.jsx')
  if (fs.existsSync(footer) && !footer.includes('connecticut\\layout')) {
    let content = fs.readFileSync(footer, 'utf8')
    if (content.includes('urbanelitelimo.com/about-us')) {
      if (!content.includes("from '../../../config/routes.js'") && !content.includes("from '../../../../config/routes.js'")) {
        const importLine = `import { ABOUT_US, CONTACT_US, FLORIDA_HOME, ILLINOIS_HOME, NEW_YORK_HOME, OUR_SERVICES, CONNECTICUT_HOME } from '${configPrefix}'\n`
        content = content.replace(/(import Icon[^\n]+\n)/, `$1${importLine}`)
      }
      content = content.replace(
        /<a href="https:\/\/urbanelitelimo\.com\/about-us\/">About Us<\/a>/g,
        '<Link to={ABOUT_US}>About Us</Link>',
      )
      content = content.replace(
        /<a href="https:\/\/urbanelitelimo\.com\/our-services\/">Services<\/a>/g,
        '<Link to={OUR_SERVICES}>Services</Link>',
      )
      content = content.replace(
        /<a href="https:\/\/urbanelitelimo\.com\/contact-us\/">Contact Us<\/a>/g,
        '<Link to={CONTACT_US}>Contact Us</Link>',
      )
      content = content.replace(/to="\/connecticut-car-service"/g, 'to={CONNECTICUT_HOME}')
      content = content.replace(/to="\/illinois-car-service"/g, 'to={ILLINOIS_HOME}')
      content = content.replace(/to="\/new-york-car-service"/g, 'to={NEW_YORK_HOME}')
      content = content.replace(/to="\/florida-car-service"/g, 'to={FLORIDA_HOME}')
      fs.writeFileSync(footer, content)
    }
  }
}

console.log('Updated', layoutDirs.length, 'layout folders')
