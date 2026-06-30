import Icon from './Icon.jsx'

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
    <div className={`review-nav${className ? ` ${className}` : ''}`} data-no-loader>
      <button type="button" onClick={onPrev} aria-label={prevLabel}>
        <Icon name="arrow-left" size={18} />
      </button>
      <button type="button" onClick={onNext} aria-label={nextLabel}>
        <Icon name="arrow-right" size={18} />
      </button>
    </div>
  )
}
