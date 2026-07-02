import { Link } from 'react-router-dom'
import { BOOK_NOW } from '../../config/routes.js'

/** Site-wide "Get a Quote" CTA — always routes to the book-now form page. */
export default function QuoteLink({ className = 'btn-yellow', children = 'Get a Free Quote' }) {
  return (
    <Link to={BOOK_NOW} className={className}>
      {children}
    </Link>
  )
}
