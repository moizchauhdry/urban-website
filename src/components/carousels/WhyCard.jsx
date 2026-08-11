import { BadgeCheck, Car, Clock, Headset, MapPin, Sparkles } from 'lucide-react'

const WHY_ICONS = {
  car: Car,
  clock: Clock,
  'location-dot': MapPin,
  headset: Headset,
  'id-badge': BadgeCheck,
  'clean-fleet': Sparkles,
}

export default function WhyCard({ item }) {
  const LucideIcon = WHY_ICONS[item.icon] ?? Car

  return (
    <article className="why-card">
      <div className="why-icon" aria-hidden="true">
        <LucideIcon className="why-icon__svg" size={28} strokeWidth={1.75} />
      </div>
      <h4>{item.title}</h4>
      <p>{item.description}</p>
    </article>
  )
}
