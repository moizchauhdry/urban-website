/**
 * Fix Illinois scaffold post-processing: layouts, nav, footers.
 * Run: node scripts/patch-illinois-post.mjs
 */
import fs from 'node:fs/promises'
import path from 'node:path'

const ROOT = path.resolve(import.meta.dirname, '..')
const manifest = JSON.parse(
  await fs.readFile(path.join(ROOT, 'src/illinois/pages.manifest.json'), 'utf8')
)

function navMenuItems(homeConst, route) {
  return `import { Link } from 'react-router-dom'
import Icon from '../../../components/common/Icon.jsx'
import { ext } from './navConfig.js'
import {
  ServiceAreasDesktopSubmenu,
  ServiceAreasMobileSubmenu,
} from '../../../components/nav/ServiceAreasSubmenu.jsx'

const ${homeConst} = '${route}'

export default function NavMenuItems({ variant = 'desktop', onNavigate }) {
  const close = onNavigate ?? (() => {})

  if (variant === 'desktop') {
    return (
      <>
        <Link to={${homeConst}}>Home</Link>
        <a href={ext('/about-us/')}>About Us</a>
        <a href={\`\${${homeConst}}#fleet\`}>Fleet</a>
        <div className="has-sub">
          <a href="#" className="has-sub__trigger">
            Service Areas
            <Icon name="chevron-down" size={10} className="nav-chevron" />
          </a>
          <ServiceAreasDesktopSubmenu />
        </div>
        <a href={ext('/our-services/')}>Our Services</a>
        <a href={ext('/contact-us/')}>Contact Us</a>
      </>
    )
  }

  return (
    <>
      <Link className="mobile-menu__link" to={${homeConst}} onClick={close}>
        Home
      </Link>
      <a className="mobile-menu__link" href={ext('/about-us/')} onClick={close}>
        About Us
      </a>
      <a className="mobile-menu__link" href={\`\${${homeConst}}#fleet\`} onClick={close}>
        Fleet
      </a>

      <ServiceAreasMobileSubmenu onNavigate={close} />

      <a className="mobile-menu__link" href={ext('/our-services/')} onClick={close}>
        Our Services
      </a>
      <a className="mobile-menu__link" href={ext('/contact-us/')} onClick={close}>
        Contact Us
      </a>
    </>
  )
}
`
}

function footerContent(homeConst, route, assetFolder) {
  return `import { Link } from 'react-router-dom'
import urbanFooterLogo from '../../../assets/illinois/${assetFolder}/layout/urban-footer-logo.svg'
import { useHomeLogoClick } from '../../../hooks/useHomeLogoClick.js'
import Icon from '../../../components/common/Icon.jsx'

const ${homeConst} = '${route}'

export default function Footer() {
  const onHomeLogoClick = useHomeLogoClick(${homeConst})

  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to={${homeConst}} className="logo footer-logo" onClick={onHomeLogoClick}>
              <img
                src={urbanFooterLogo}
                alt="Urban Elite Limo"
                className="logo-img"
                width={142}
                height={52}
                decoding="async"
              />
            </Link>
            <div className="footer-contact">
              <a href="tel:8888816610">
                <Icon name="phone" size={14} /> (888) 881-6610
              </a>
              <a href="mailto:info@urbanelitelimo.com">
                <Icon name="envelope" size={14} /> info@urbanelitelimo.com
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="https://urbanelitelimo.com/about-us/">About Us</a>
              </li>
              <li>
                <a href="https://urbanelitelimo.com/our-services/">Services</a>
              </li>
              <li>
                <a href="https://urbanelitelimo.com/contact-us/">Contact Us</a>
              </li>
              <li>
                <a href="https://urbanelitelimo.com/privacy-policy/">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>States</h4>
            <ul>
              <li>
                <Link to="/">Connecticut</Link>
              </li>
              <li>
                <Link to="/illinois-car-service">Illinois</Link>
              </li>
              <li>
                <Link to="/new-york-car-service">New York</Link>
              </li>
              <li>
                <Link to="/florida-car-service">Florida</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Follow Us</h4>
            <div className="footer-social">
              <a href="#" aria-label="Facebook">
                <Icon name="facebook-f" size={16} />
              </a>
              <a href="#" aria-label="Twitter">
                <Icon name="twitter" size={16} />
              </a>
              <a href="#" aria-label="YouTube">
                <Icon name="youtube" size={16} />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">© 2025 Urban Elite Limo. All Rights Reserved.</div>
      </div>
    </footer>
  )
}
`
}

async function patchLayout(page) {
  const layoutPath = path.join(ROOT, 'src/illinois', page.folder, `${page.layoutFile}.jsx`)
  let content = await fs.readFile(layoutPath, 'utf8')
  content = content.replaceAll("from '../hooks/", "from '../../hooks/")
  await fs.writeFile(layoutPath, content)
}

async function main() {
  for (const page of manifest) {
    const base = path.join(ROOT, 'src/illinois', page.folder)
    await fs.writeFile(path.join(base, 'layout/NavMenuItems.jsx'), navMenuItems(page.homeConst, page.route))
    await fs.writeFile(path.join(base, 'layout/Footer.jsx'), footerContent(page.homeConst, page.route, page.folder))
    await patchLayout(page)
    console.log(`✓ patched ${page.folder}`)
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
