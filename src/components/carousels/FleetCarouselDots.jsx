/** Section + in-card dots — matches reference (gray circles, active black pill). */
export function FleetCarouselDots({ count, active, onSelect, ariaLabel = 'Fleet vehicles' }) {
  if (count < 2) return null

  return (
    <div className="fleet-carousel-dots" role="tablist" aria-label={ariaLabel}>
      {Array.from({ length: count }, (_, i) => (
        <button
          key={i}
          type="button"
          role="tab"
          aria-selected={i === active}
          aria-label={`Show slide ${i + 1} of ${count}`}
          className={`fleet-carousel-dot${i === active ? ' is-active' : ''}`}
          onClick={() => onSelect(i)}
        />
      ))}
    </div>
  )
}
