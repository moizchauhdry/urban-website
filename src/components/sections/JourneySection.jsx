import defaultLeft from '../../assets/left_bmw.webp'
import defaultRight from '../../assets/right_audi.webp'
import BookNowLink from '../layout/BookNowLink.jsx'

/**
 * @param {{ leftImage?: string, rightImage?: string }} props
 */
export default function JourneySection({ leftImage = defaultLeft, rightImage = defaultRight }) {
  return (
    <section className="journey">
      <div className="journey-car-slot journey-car-slot--left" aria-hidden="true">
        <img
          src={leftImage}
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
          src={rightImage}
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
        <h2>Start Your Journey Today</h2>
        <p>
          Join Thousands of satisfied customers and experience premium car and chauffeur service like never before.
        </p>
        <BookNowLink />
      </div>
    </section>
  )
}
