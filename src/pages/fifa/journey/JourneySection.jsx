import leftCar from '../../../assets/connecticut/journey/left-img.webp'
import rightCar from '../../../assets/connecticut/journey/right-img.webp'
import BookNowLink from '../../../components/layout/BookNowLink.jsx'

/** Custom route CTA — same layout as the home journey section. */
export default function JourneySection() {
  return (
    <section className="journey scroll-reveal-section">
      <div className="journey-car-slot journey-car-slot--left" aria-hidden="true">
        <img
          src={leftCar}
          alt=""
          className="journey-car-img"
          width={425}
          height={244}
          loading="lazy"
          draggable={false}
          decoding="async"
        />
      </div>
      <div className="journey-car-slot journey-car-slot--right" aria-hidden="true">
        <img
          src={rightCar}
          alt=""
          className="journey-car-img"
          width={407}
          height={274}
          loading="lazy"
          draggable={false}
          decoding="async"
        />
      </div>
      <div className="container">
        <h2>Don&apos;t see your route?</h2>
        <p>
          Build a custom route for any pickup and drop-off across all three host countries.
        </p>
        <BookNowLink>Build a Custom Route</BookNowLink>
      </div>
    </section>
  )
}
