import servicesHero from '../../assets/our-services/hero/services-hero.webp'

/** Full-width hero for the Our Services page. */
export default function ServicesHero() {
  return (
    <section className="services-page-hero" aria-label="Our Services hero">
      <img
        src={servicesHero}
        alt=""
        className="services-page-hero__img"
        width={1920}
        height={640}
        fetchPriority="high"
        loading="eager"
        decoding="async"
        aria-hidden="true"
      />
    </section>
  )
}
