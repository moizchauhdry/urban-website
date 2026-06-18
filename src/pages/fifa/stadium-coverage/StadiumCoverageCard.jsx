import { useLocation } from 'react-router-dom'
import Icon from '../../../components/common/Icon.jsx'
import {
  getBookNowTarget,
  prefillHeroBooking,
  scrollToHeroBooking,
} from '../../../config/bookingNav.js'

/**
 * @param {{ name: string, location: string, matches: string, description: string, featured?: boolean }} props
 */
export default function StadiumCoverageCard({ name, location, matches, description, featured = false }) {
  const { pathname } = useLocation()
  const href = getBookNowTarget(pathname)

  const onCardClick = (e) => {
    e.preventDefault()
    prefillHeroBooking({ destination: `${name}, ${location}` })
    scrollToHeroBooking()
  }

  return (
    <a
      href={href}
      className={`fifa-stadium-card fifa-stadium-card--clickable${featured ? ' fifa-stadium-card--featured' : ''}`}
      onClick={onCardClick}
      aria-label={`Book stadium transfer to ${name}, ${location}`}
    >
      <div className="fifa-stadium-card__top">
        <span className="fifa-stadium-card__pin" aria-hidden="true">
          <Icon name="location-dot" size={14} />
        </span>
        <span className="fifa-stadium-card__matches">{matches}</span>
      </div>
      <h3 className="fifa-stadium-card__name">{name}</h3>
      <p className="fifa-stadium-card__location">{location}</p>
      <p className="fifa-stadium-card__desc">{description}</p>
      <span className="fifa-stadium-card__link">Book Stadium Transfer →</span>
    </a>
  )
}
