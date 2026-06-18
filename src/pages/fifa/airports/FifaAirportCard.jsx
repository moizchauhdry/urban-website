import Icon from '../../../components/common/Icon.jsx'

/**
 * @param {{ code: string, country: 'USA' | 'CANADA', name: string, city: string, linkText: string }} props
 */
export default function FifaAirportCard({ code, country, name, city, linkText }) {
  const countryClass = country === 'CANADA' ? 'fifa-airport-card__country--ca' : 'fifa-airport-card__country--us'

  return (
    <article className="fifa-airport-card">
      <div className="fifa-airport-card__top">
        <span className="fifa-airport-card__code">{code}</span>
        <span className={`fifa-airport-card__country ${countryClass}`}>{country}</span>
      </div>
      <h3 className="fifa-airport-card__name">{name}</h3>
      <p className="fifa-airport-card__city">
        <Icon name="location-dot" size={12} />
        {city}
      </p>
      <a href="#hero-booking" className="fifa-airport-card__link">
        {linkText} →
      </a>
    </article>
  )
}
