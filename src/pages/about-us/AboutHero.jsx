import { ABOUT_US_PAGE } from '../../data/aboutUsPage.js'

/** Full-width hero for the About Us page. */
export default function AboutHero() {
  const { default: src, srcSet, sizes, width, height } = ABOUT_US_PAGE.hero

  return (
    <section className="about-page-hero" aria-label="About Us hero">
      <img
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        alt=""
        className="about-page-hero__img"
        width={width}
        height={height}
        fetchPriority="high"
        loading="eager"
        decoding="sync"
        aria-hidden="true"
      />
    </section>
  )
}
