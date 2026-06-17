import { Link, useLocation } from 'react-router-dom'
import { getBookNowTarget, scrollToHeroBooking } from '../../config/bookingNav.js'

/** Section CTA — same behavior as the header Book Now button. */
export default function BookNowLink({ className = 'btn-yellow', children = 'Book Now!' }) {
  const { pathname } = useLocation()
  const target = getBookNowTarget(pathname)

  if (target.startsWith('#')) {
    return (
      <a
        href={target}
        className={className}
        onClick={(e) => {
          e.preventDefault()
          scrollToHeroBooking()
        }}
      >
        {children}
      </a>
    )
  }

  return (
    <Link to={target} className={className}>
      {children}
    </Link>
  )
}
