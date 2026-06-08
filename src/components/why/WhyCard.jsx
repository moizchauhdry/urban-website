import {
  Car,
  Clock,
  Headset,
  IdCard,
  MapPin,
  Sparkles,
} from 'lucide-react'

const ICONS = {
  car: Car,
  clock: Clock,
  'location-dot': MapPin,
  headset: Headset,
  'id-badge': IdCard,
  'clean-fleet': Sparkles,
}

export default function WhyCard({ item }) {
  const IconComponent = ICONS[item.icon] ?? Car

  return (
    <article className="why-card">
      <div className="why-icon">
        <IconComponent
          size={28}
          strokeWidth={1.75}
          aria-hidden="true"
        />
      </div>
      <h4>{item.title}</h4>
      <p>{item.description}</p>
    </article>
  )
}
