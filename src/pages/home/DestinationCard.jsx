/**
 * @param {{ city: string, state: string, image: string }} props
 */
export default function DestinationCard({ city, state, image }) {
  return (
    <article className="home-destination-card">
      <div className="home-destination-card__media">
        <img
          className="home-destination-card__img"
          src={image}
          alt=""
          loading="lazy"
          decoding="async"
          draggable={false}
        />
      </div>
      <div className="home-destination-card__body">
        <h3>
          {city}, {state}
        </h3>
      </div>
    </article>
  )
}
