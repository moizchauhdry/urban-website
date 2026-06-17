import Icon from '../../components/common/Icon.jsx'

export default function AboutFeatureCard({ feature }) {
  return (
    <article className="about-feature-card">
      <div className="about-feature-card__icon">
        <Icon name={feature.icon} size={28} />
      </div>
      <h3>{feature.title}</h3>
      <p>{feature.description}</p>
    </article>
  )
}
