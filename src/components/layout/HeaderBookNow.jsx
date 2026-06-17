import { Link, useLocation } from 'react-router-dom'

/** Header “Book Now” — native hash navigation, no bookingNav on the critical path. */
export default function HeaderBookNow({ homePath = '/' }) {
  const { pathname } = useLocation()
  const onThankYou = /\/thank-you\/?$/.test(pathname)

  if (!onThankYou && pathname === homePath) {
    return (
      <a href="#hero-booking" className="btn-book">
        Book Now
      </a>
    )
  }

  return (
    <Link to={{ pathname: homePath, hash: 'hero-booking' }} className="btn-book">
      Book Now
    </Link>
  )
}
