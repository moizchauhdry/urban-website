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
            fill="var(--yellow)"
            stroke="var(--yellow)"
            strokeWidth={1.5}
            aria-hidden="true"
            style={{ width: STAR_SIZE, height: STAR_SIZE, flexShrink: 0 }}
          />
        ))}
      </div>
      <p className="review-text">{text}</p>
      <div className="review-author">— {author}</div>
    </div>
  )
}

export const ReviewCard = memo(ReviewCardInner)
