import Icon from '../common/Icon.jsx'

const ICONS = {
  car: 'car',
  clock: 'clock',
  'location-dot': 'location-dot',
  headset: 'headset',
  'id-badge': 'id-badge',
  'clean-fleet': 'star',
}

export default function WhyCard({ item }) {
  const iconName = ICONS[item.icon] ?? 'car'

  return (
    <article className="why-card">
      <div className="why-icon">
        <Icon name={iconName} size={28} />
      </div>
      <h4>{item.title}</h4>
      <p>{item.description}</p>
    </article>
  )
}
