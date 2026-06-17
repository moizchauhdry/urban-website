import leftCar from '../../../../assets/illinois/chicago-chauffeur-service/journey/left-img.webp'
import rightCar from '../../../../assets/illinois/chicago-chauffeur-service/journey/right-img.webp'
import BookNowLink from '../../../../components/layout/BookNowLink.jsx'

export default function JourneySection() {
  return (
    <section className="journey">
      <div className="journey-car-slot journey-car-slot--left" aria-hidden="true">
        <img src={leftCar} alt="" className="journey-car-img" width={425} height={244} loading="lazy" draggable={false} decoding="async" />
      </div>
      <div className="journey-car-slot journey-car-slot--right" aria-hidden="true">
        <img src={rightCar} alt="" className="journey-car-img" width={407} height={274} loading="lazy" draggable={false} decoding="async" />
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