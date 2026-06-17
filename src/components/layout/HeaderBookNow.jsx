import { Link, useLocation } from 'react-router-dom'
import { getBookNowTarget, scrollToHeroBooking } from '../../config/bookingNav.js'

/** Header “Book Now” — scrolls to hero form on landing pages, otherwise links there. */
export default function HeaderBookNow({ homePath = '/' }) {
  const { pathname } = useLocation()
  const onThankYou = /\/thank-you\/?$/.test(pathname)
  const target = getBookNowTarget(pathname)

  if (!onThankYou && pathname === homePath) {
    return (
      <a
        href={target}
        className="btn-book"
        onClick={(e) => {
          e.preventDefault()
          scrollToHeroBooking()
        }}
      >
        Book Now
      </a>
    )
  }

  return (
    <Link to={target} className="btn-book">
      Book Now
    </Link>
  )
}
