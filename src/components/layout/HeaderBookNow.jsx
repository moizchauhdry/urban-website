import { Link } from 'react-router-dom'
import { BOOK_NOW } from '../../config/routes.js'

/** Header “Book Now” — opens the dedicated booking page. */
export default function HeaderBookNow() {
  return (
    <Link to={BOOK_NOW} className="btn-book">
      Book Now
    </Link>
  )
}
