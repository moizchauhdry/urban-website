import { memo } from 'react'
import Icon from '../common/Icon.jsx'

function ReviewCardInner({ author, text }) {
  return (
    <div className="review-card">
      <div className="review-stars">
        {Array.from({ length: 5 }, (_, i) => (
          <Icon key={i} name="star" size={14} />
        ))}
      </div>
      <p className="review-text">{text}</p>
      <div className="review-author">— {author}</div>
    </div>
  )
}

export const ReviewCard = memo(ReviewCardInner)
