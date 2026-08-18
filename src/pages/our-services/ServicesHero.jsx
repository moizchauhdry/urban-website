import servicesHeroSm from '../../assets/hero/pages/services-800.webp'
import servicesHeroLg from '../../assets/hero/pages/services-1440.webp'

/** Full-width hero for the Our Services page. */
export default function ServicesHero() {
  return (
    <section className="services-page-hero" aria-label="Our Services hero">
      <img
        src={servicesHeroSm}
        srcSet={`${servicesHeroSm} 800w, ${servicesHeroLg} 1440w`}
        sizes="100vw"
        alt=""
        className="services-page-hero__img"
        width={1440}
        height={810}
        fetchPriority="high"
        loading="eager"
        decoding="sync"
        aria-hidden="true"
      />
    </section>
  )
}
