import AboutFeatureCard from './AboutFeatureCard.jsx'
import { ABOUT_FEATURES } from './aboutFeatures.js'

/** Three-column feature highlights below the About intro. */
export default function AboutFeatures() {
  return (
    <section className="about-page-features">
      <div className="container">
        <div className="about-features-grid">
          {ABOUT_FEATURES.map((feature) => (
            <AboutFeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
