import { memo, useCallback, useEffect, useId, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import BlackStarIcon from '../common/BlackStarIcon.jsx'

function ReviewStars() {
  return (
    <div className="review-stars">
      {Array.from({ length: 5 }, (_, i) => (
        <BlackStarIcon key={i} size={14} className="review-star-icon" />
      ))}
    </div>
  )
}

function ReviewCardInner({ author, text }) {
  const textRef = useRef(null)
  const [isClamped, setIsClamped] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const titleId = useId()

  const checkClamp = useCallback(() => {
    const el = textRef.current
    if (!el) return
    setIsClamped(el.scrollHeight > el.clientHeight + 1)
  }, [])

  useEffect(() => {
    checkClamp()
    const el = textRef.current
    if (!el) return undefined
    const ro = new ResizeObserver(checkClamp)
    ro.observe(el)
    return () => ro.disconnect()
  }, [text, checkClamp])

  useEffect(() => {
    if (!isOpen) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [isOpen])

  const openModal = useCallback(() => setIsOpen(true), [])
  const closeModal = useCallback(() => setIsOpen(false), [])

  return (
    <>
      <div className="review-card">
        <ReviewStars />
        <div className={`review-text-wrap${isClamped ? ' is-clamped' : ''}`}>
          <p ref={textRef} className="review-text">
            {text}
          </p>
          {isClamped && (
            <button type="button" className="review-show-all" onClick={openModal}>
              Show all
            </button>
          )}
        </div>
        <div className="review-author">— {author}</div>
      </div>

      {isOpen &&
        createPortal(
          <div
            className="review-modal-backdrop"
            onClick={closeModal}
            role="presentation"
          >
            <div
              className="review-card review-card--modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="review-modal-close"
                onClick={closeModal}
                aria-label="Close review"
              >
                ×
              </button>
              <ReviewStars />
              <p id={titleId} className="review-text review-text--full">
                {text}
              </p>
              <div className="review-author">— {author}</div>
            </div>
          </div>,
          document.body,
        )}
    </>
  )
}

export const ReviewCard = memo(ReviewCardInner)
