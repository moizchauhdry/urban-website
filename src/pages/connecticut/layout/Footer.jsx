import { Link } from 'react-router-dom'
import { FooterBrandLogo } from '../../../components/layout/BrandLogo.jsx'
import FooterBookNow from '../../../components/layout/FooterBookNow.jsx'
import { useHomeLogoClick } from '../../../hooks/useHomeLogoClick.js'
import Icon from '../../../components/common/Icon.jsx'

import {
  CONNECTICUT_HOME,
  FLORIDA_HOME,
  ILLINOIS_HOME,
  NEW_YORK_HOME,
  ABOUT_US,
  BOOK_NOW,
  CONTACT_US,
  OUR_SERVICES,
  PRIVACY_POLICY,
} from '../../../config/routes.js'

export default function Footer({ logoPath = '/' }) {
  const onHomeLogoClick = useHomeLogoClick()

  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="logo footer-logo" onClick={onHomeLogoClick}>
              <FooterBrandLogo />
            </Link>
            <div className="footer-contact">
              <a href="tel:8888816610">
                <Icon name="phone" size={14} /> (888) 881-6610
              </a>
              <a href="mailto:info@urbanelitelimo.com">
                <Icon name="envelope" size={14} /> info@urbanelitelimo.com
              </a>
            </div>
            <FooterBookNow />
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li>
                <Link to={BOOK_NOW}>Book Now</Link>
              </li>
              <li>
                <Link to={ABOUT_US}>About Us</Link>
              </li>
              <li>
                <Link to={OUR_SERVICES}>Services</Link>
              </li>
              <li>
                <Link to={CONTACT_US}>Contact Us</Link>
              </li>
              <li>
                <Link to={PRIVACY_POLICY}>Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>States</h4>
            <ul>
              <li>
                <Link to={CONNECTICUT_HOME}>Connecticut</Link>
              </li>
              <li>
                <Link to={ILLINOIS_HOME}>Illinois</Link>
              </li>
              <li>
                <Link to={NEW_YORK_HOME}>New York</Link>
              </li>
              <li>
                <Link to={FLORIDA_HOME}>Florida</Link>
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
