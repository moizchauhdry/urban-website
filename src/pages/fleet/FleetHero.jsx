import fleetHero from '../../assets/fleet/hero/fleet-hero.webp'

/** Full-width hero image for the dedicated fleet page. */
export default function FleetHero() {
  return (
    <section className="fleet-page-hero" aria-label="Fleet hero">
      <img
        src={fleetHero}
        alt=""
        className="fleet-page-hero__img"
        width={1440}
        height={480}
        fetchPriority="high"
        loading="eager"
        decoding="async"
        aria-hidden="true"
      />
    </section>
  )
}
