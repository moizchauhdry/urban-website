import { Link } from 'react-router-dom'
import urbanFooterLogo from '../../assets/icons/urban-footer-logo.svg'
import { useHomeLogoClick } from '../../hooks/useHomeLogoClick.js'
import Icon from '../common/Icon.jsx'

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
                <a href="#">Connecticut</a>
              </li>
              <li>
                <a href="https://urbanelitelimo.com/state/illinois-car-service/">Illinois</a>
              </li>
              <li>
                <a href="https://urbanelitelimo.com/state/new-york-car-service/">New York</a>
              </li>
              <li>
                <a href="https://urbanelitelimo.com/state/florida-car-service/">Florida</a>
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
