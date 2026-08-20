import fleetHeroSm from '../../assets/hero/pages/fleet-800.webp'
import fleetHeroLg from '../../assets/hero/pages/fleet-1440.webp'

/** Full-width hero image for the dedicated fleet page. */
export default function FleetHero() {
  return (
    <section className="fleet-page-hero" aria-label="Fleet hero">
      <img
        src={fleetHeroSm}
        srcSet={`${fleetHeroSm} 800w, ${fleetHeroLg} 1440w`}
        sizes="100vw"
        alt=""
        className="fleet-page-hero__img"
        width={1440}
        height={630}
        fetchPriority="high"
        loading="eager"
        decoding="sync"
        aria-hidden="true"
      />
    </section>
  )
}
