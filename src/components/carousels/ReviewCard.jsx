import { memo } from 'react'
import { Star } from 'lucide-react'

const STAR_SIZE = 14

function ReviewCardInner({ author, text }) {
  return (
    <div className="review-card">
      <div className="review-stars">
        {Array.from({ length: 5 }, (_, i) => (
          <Star
            key={i}
            size={STAR_SIZE}
            fill="var(--accent)"
            stroke="var(--accent)"
            strokeWidth={1.5}
            className="review-star-icon"
            aria-hidden="true"
          />
        ))}
      </div>
      <p className="review-text">{text}</p>
      <div className="review-author">— {author}</div>
    </div>
  )
}

export const ReviewCard = memo(ReviewCardInner)
