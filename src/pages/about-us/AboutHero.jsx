import aboutHeroSm from '../../assets/about-us/hero/about-hero-800.webp'
import aboutHeroLg from '../../assets/about-us/hero/about-hero-1440.webp'

const ABOUT_HERO_SRCSET = `${aboutHeroSm} 800w, ${aboutHeroLg} 1440w`
const ABOUT_HERO_SIZES = '100vw'

/** Full-width hero for the About Us page. */
export default function AboutHero() {
  return (
    <section className="about-page-hero" aria-label="About Us hero">
      <img
        src={aboutHeroLg}
        srcSet={ABOUT_HERO_SRCSET}
        sizes={ABOUT_HERO_SIZES}
        alt=""
        className="about-page-hero__img"
        width={1440}
        height={960}
        fetchPriority="high"
        loading="eager"
        decoding="async"
        aria-hidden="true"
      />
    </section>
  )
}
