import FleetCarousel from '../../../../components/carousels/FleetCarousel.jsx'
import { fleetItems } from './fleetItems.js'

const DEFAULT_SUBTITLE =
  'Reliability and comfort are guaranteed. We Have the latest model Fleet to ensure a safe, sophisticated and Luxury Travel experience on every trip.'

/**
 * @param {{ tag?: string, title?: import('react').ReactNode, subtitle?: string }} props
 */
export default function Fleet({
  tag = 'Our Fleet',
  title = (
    <>
      Find Your Perfect
      <br />
      Vehicle Type
    </>
  ),
  subtitle = DEFAULT_SUBTITLE,
}) {
  return (
    <section className="section" id="fleet">
      <div className="container">
        <div className="center-tag">
          <span className="section-tag">{tag}</span>
        </div>
        <h2 className="section-title">{title}</h2>
        <p className="section-sub mb-0 sm:mb-6">{subtitle}</p>
        <FleetCarousel items={fleetItems} />
      </div>
    </section>
  )
}
