import BlackStarIcon from '../../../components/common/BlackStarIcon.jsx'
import Icon from '../../../components/common/Icon.jsx'

const ICONS = {
  car: 'car',
  clock: 'clock',
  'location-dot': 'location-dot',
  headset: 'headset',
  'id-badge': 'id-badge',
  'clean-fleet': 'clean-fleet',
}

export default function WhyCard({ item }) {
  const iconName = ICONS[item.icon] ?? 'car'

  return (
    <article className="why-card">
      <div className="why-icon">
        {item.icon === 'clean-fleet' ? (
          <BlackStarIcon size={24} className="why-star-icon" />
        ) : (
          <Icon name={iconName} size={28} />
        )}
      </div>
      <h4>{item.title}</h4>
      <p>{item.description}</p>
    </article>
  )
}
