import contactHeroSm from '../../assets/hero/pages/contact-800.webp'
import contactHeroLg from '../../assets/hero/pages/contact-1440.webp'

const CONTACT_HERO_SRCSET = `${contactHeroSm} 800w, ${contactHeroLg} 1440w`
const CONTACT_HERO_SIZES = '100vw'

/** Full-width hero for the Contact Us page. */
export default function ContactHero() {
  return (
    <section className="contact-page-hero" aria-label="Contact Us hero">
      <img
        src={contactHeroSm}
        srcSet={CONTACT_HERO_SRCSET}
        sizes={CONTACT_HERO_SIZES}
        alt=""
        className="contact-page-hero__img"
        width={1440}
        height={960}
        fetchPriority="high"
        loading="eager"
        decoding="sync"
        aria-hidden="true"
      />
    </section>
  )
}
