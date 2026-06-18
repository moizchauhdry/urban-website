import Icon from '../../../components/common/Icon.jsx'

/**
 * @param {{ icon: string, title: string, description: string }} props
 */
export default function WhyUsCard({ icon, title, description }) {
  return (
    <article className="fifa-why-card">
      <span className="fifa-why-card__icon" aria-hidden="true">
        {icon === 'dollar' ? (
          <span className="fifa-why-card__dollar">$</span>
        ) : (
          <Icon name={icon} size={18} />
        )}
      </span>
      <h3 className="fifa-why-card__title">{title}</h3>
      <p className="fifa-why-card__desc">{description}</p>
    </article>
  )
}
