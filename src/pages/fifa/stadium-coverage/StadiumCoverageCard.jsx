import Icon from '../../../components/common/Icon.jsx'

/**
 * @param {{ name: string, location: string, matches: string, description: string, featured?: boolean }} props
 */
export default function StadiumCoverageCard({ name, location, matches, description, featured = false }) {
  return (
    <article className={`fifa-stadium-card${featured ? ' fifa-stadium-card--featured' : ''}`}>
      <div className="fifa-stadium-card__top">
        <span className="fifa-stadium-card__pin" aria-hidden="true">
          <Icon name="location-dot" size={14} />
        </span>
        <span className="fifa-stadium-card__matches">{matches}</span>
      </div>
      <h3 className="fifa-stadium-card__name">{name}</h3>
      <p className="fifa-stadium-card__location">{location}</p>
      <p className="fifa-stadium-card__desc">{description}</p>
      <a href="#hero-booking" className="fifa-stadium-card__link">
        Book Stadium Transfer →
      </a>
    </article>
  )
}
