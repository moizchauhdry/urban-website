import Icon from '../../../components/common/Icon.jsx'

const STEPS = [
  {
    icon: 'car',
    title: 'Choose Your Car',
    description: 'Browse our premium fleet and select the perfect vehicle for your needs.',
  },
  {
    icon: 'calendar-check',
    title: 'Book Instantly',
    description: 'Complete your reservation in under 2 minutes with our streamlined process.',
  },
  {
    icon: 'route',
    title: 'Enjoy your Ride',
    description: 'Chauffeur assigned to your Ride and start your journey.',
  },
]

export default function HowItWorks() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">How it works</h2>
        <p className="section-sub">Book a Ride in 3 simple steps. It&apos;s that easy!</p>
        <div className="steps-grid">
          {STEPS.map((step) => (
            <div className="step" key={step.title}>
              <div className="step-icon">
                <Icon name={step.icon} size={28} />
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
        <div className="how-works-cta">
          <a href="#" className="btn-yellow">
            Get a Free Quote
          </a>
        </div>
      </div>
    </section>
  )
}
