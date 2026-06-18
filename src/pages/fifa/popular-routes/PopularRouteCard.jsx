import Icon from '../../../components/common/Icon.jsx'

/**
 * @param {{ badge?: string, category: string, from: string, to: string, duration: string }} props
 */
export default function PopularRouteCard({ badge, category, from, to, duration }) {
  return (
    <article className="fifa-route-card">
      {badge ? <span className="fifa-route-card__badge">{badge}</span> : null}
      <p className="fifa-route-card__category">{category}</p>
      <h3 className="fifa-route-card__route">
        {from} <span aria-hidden="true">→</span> {to}
      </h3>
      <p className="fifa-route-card__duration">
        <Icon name="clock" size={13} />
        {duration}
      </p>
      <a href="#hero-booking" className="fifa-route-card__link">
        Book This Route →
      </a>
    </article>
  )
}
