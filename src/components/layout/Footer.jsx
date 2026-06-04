import { Link } from 'react-router-dom'
import urbanFooterLogo from '../../assets/icons/urban-footer-logo.svg'
import { regionUrl } from '../../lib/appBase.js'
import { REGIONS, SERVICE_AREA_LINKS } from '../../config/regions.js'
import { useHomeLogoClick } from '../../hooks/useHomeLogoClick.js'

export default function Footer() {
  const onHomeLogoClick = useHomeLogoClick()

  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="logo footer-logo" onClick={onHomeLogoClick}>
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
                <i className="fa-solid fa-phone" /> (888) 881-6610
              </a>
              <a href="mailto:info@urbanelitelimo.com">
                <i className="fa-solid fa-envelope" /> info@urbanelitelimo.com
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
              {REGIONS.map(({ slug, label }) => (
                <li key={slug}>
                  <a href={regionUrl(slug)}>{label.replace(/ Car Service$/, '')}</a>
                </li>
              ))}
              {SERVICE_AREA_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a href={href}>{label.replace(/ Car Service$/, '')}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Follow Us</h4>
            <div className="footer-social">
              <a href="#">
                <i className="fa-brands fa-facebook-f" />
              </a>
              <a href="#">
                <i className="fa-brands fa-twitter" />
              </a>
              <a href="#">
                <i className="fa-brands fa-youtube" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">© 2025 Urban Elite Limo. All Rights Reserved.</div>
      </div>
    </footer>
  )
}
