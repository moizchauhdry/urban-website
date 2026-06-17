import aboutHero from '../../assets/about-us/hero/about-hero.jpg'

/** Full-width hero for the About Us page. */
export default function AboutHero() {
  return (
    <section className="about-page-hero" aria-label="About Us hero">
      <img
        src={aboutHero}
        alt=""
        className="about-page-hero__img"
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
