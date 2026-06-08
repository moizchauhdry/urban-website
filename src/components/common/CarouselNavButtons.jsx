import { ChevronLeft, ChevronRight } from 'lucide-react'

/**
 * Shared prev/next controls for carousels (reviews, fleet, services, why).
 */
export default function CarouselNavButtons({
  onPrev,
  onNext,
  prevLabel = 'Previous',
  nextLabel = 'Next',
  className = '',
}) {
  return (
    <div className={`review-nav${className ? ` ${className}` : ''}`}>
      <button type="button" onClick={onPrev} aria-label={prevLabel}>
        <ChevronLeft size={18} strokeWidth={2} aria-hidden="true" />
      </button>
      <button type="button" onClick={onNext} aria-label={nextLabel}>
        <ChevronRight size={18} strokeWidth={2} aria-hidden="true" />
      </button>
    </div>
  )
}
