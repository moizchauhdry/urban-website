import Icon from '../../../components/common/Icon.jsx'

/**
 * @param {{ icon: string, title: string, description: string }} props
 */
export default function MatchDayServiceCard({ icon, title, description }) {
  return (
    <article className="fifa-match-day-card">
      <div className="fifa-match-day-card__icon" aria-hidden="true">
        <Icon name={icon} size={22} />
      </div>
      <h3 className="fifa-match-day-card__title">{title}</h3>
      <p className="fifa-match-day-card__desc">{description}</p>
    </article>
  )
}
