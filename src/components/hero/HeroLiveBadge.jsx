export default function HeroLiveBadge({ className = '' }) {
  return (
    <div className={`hero-badge hero-live-badge${className ? ` ${className}` : ''}`}>
      <span className="hero-live-badge__dot" aria-hidden="true" />
      1,284 rides completed in the last 24 hours
    </div>
  )
}
