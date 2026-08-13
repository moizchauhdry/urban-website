/**
 * @param {{ city: string, state: string, image: string, blurb: string, href: string }} props
 */
export default function DestinationCard({ city, state, image, blurb, href }) {
  return (
    <article className="home-destination-card">
      <a className="home-destination-card__link" href={href}>
        <img
          className="home-destination-card__img"
          src={image}
          alt=""
          width={800}
          height={600}
          loading="lazy"
          decoding="async"
          draggable={false}
        />
        <div className="home-destination-card__overlay" aria-hidden="true" />
        <div className="home-destination-card__body">
          <h3>
            {city}, {state}
          </h3>
        </div>
        <div className="home-destination-card__menu" role="presentation">
          <p className="home-destination-card__menu-title">
            {city} car service
          </p>
          <p className="home-destination-card__menu-text">{blurb}</p>
          <span className="home-destination-card__menu-cta">View service</span>
        </div>
      </a>
    </article>
  )
}
