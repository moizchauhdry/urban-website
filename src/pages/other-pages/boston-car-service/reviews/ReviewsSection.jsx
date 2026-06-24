import { useEffect, useMemo, useState } from 'react'
import { REVIEWS } from './reviews.js'
import ReviewsCarousel from '../../../../components/carousels/ReviewsCarousel.jsx'
import trustPilot from '../../../../assets/other-pages/boston-car-service/reviews/trust-pilot.svg'
import googleIcon from '../../../../assets/other-pages/boston-car-service/reviews/google.svg'

function usePerView() {
  const [w, setW] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth : 1280,
  )
  useEffect(() => {
    const onResize = () => setW(window.innerWidth)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])
  if (w <= 720) return 1
  if (w <= 1024) return 2
  return 3
}

function chunkReviews(reviews, size) {
  const out = []
  for (let i = 0; i < reviews.length; i += size) {
    out.push(reviews.slice(i, i + size))
  }
  return out
}

export default function ReviewsSection() {
  const perView = usePerView()
  const pages = useMemo(() => chunkReviews(REVIEWS, perView), [perView])

  return (
    <section className="section">
      <div className="container">
        <div className="reviews-head">
          <h2 className="section-title">
            Read Reviews
            <br />
            Ride With Confidence
          </h2>
          <div className="reviews-rating">
            <strong className="reviews-rating-score">4.6/5</strong>
            <img className="reviews-rating-icon" src={googleIcon} alt="Google" width={34} height={34} loading="lazy" decoding="async" />
            <img className="reviews-rating-icon" src={trustPilot} alt="Trustpilot" width={34} height={34} loading="lazy" decoding="async" />
            <span className="google-text">Based on 150 reviews</span>
          </div>
        </div>

        <ReviewsCarousel
          key={perView}
          variant={perView === 3 ? 'window' : 'page'}
          {...(perView === 3 ? { reviews: REVIEWS, visible: 3 } : { pages })}
        />
      </div>
    </section>
  )
}
