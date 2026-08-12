/**
 * @param {{ city: string, state: string, image: string }} props
 */
export default function DestinationCard({ city, state, image }) {
  return (
    <article className="home-destination-card">
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
    </article>
  )
}
