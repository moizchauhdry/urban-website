import { memo } from 'react'
import BlackStarIcon from '../common/BlackStarIcon.jsx'

function ReviewCardInner({ author, text }) {
  return (
    <div className="review-card">
      <div className="review-stars">
        {Array.from({ length: 5 }, (_, i) => (
          <BlackStarIcon key={i} size={14} className="review-star-icon" />
        ))}
      </div>
      <p className="review-text">{text}</p>
      <div className="review-author">— {author}</div>
    </div>
  )
}

export const ReviewCard = memo(ReviewCardInner)
