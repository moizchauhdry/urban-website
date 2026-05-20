import { memo } from 'react'

function ReviewCardInner({ author, text }) {
  return (
    <div className="review-card">
      <div className="review-stars">
        <i className="fa-solid fa-star" />
        <i className="fa-solid fa-star" />
        <i className="fa-solid fa-star" />
        <i className="fa-solid fa-star" />
        <i className="fa-solid fa-star" />
      </div>
      <p className="review-text">{text}</p>
      <div className="review-author">— {author}</div>
    </div>
  )
}

export const ReviewCard = memo(ReviewCardInner)
