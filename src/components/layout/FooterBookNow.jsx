import { Link } from 'react-router-dom'
import { BOOK_NOW } from '../../config/routes.js'

/** Footer CTA — opens the dedicated booking page. */
export default function FooterBookNow() {
  return (
    <Link to={BOOK_NOW} className="footer-book-now">
      Book Now
    </Link>
  )
}
