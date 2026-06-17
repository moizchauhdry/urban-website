/**
 * @param {{ code: string, image: string }} props
 */
export default function AirportCard({ code, image }) {
  return (
    <article className="home-airport-card">
      <img
        className="home-airport-card__img"
        src={image}
        alt=""
        loading="lazy"
        decoding="async"
        draggable={false}
      />
      <div className="home-airport-card__body">
        <h3>{code}</h3>
        <p>Airport</p>
      </div>
    </article>
  )
}
