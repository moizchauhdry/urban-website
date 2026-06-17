import contactHero from '../../assets/contact-us/hero/contact-hero.png'

/** Full-width hero for the Contact Us page. */
export default function ContactHero() {
  return (
    <section className="contact-page-hero" aria-label="Contact Us hero">
      <img
        src={contactHero}
        alt=""
        className="contact-page-hero__img"
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
