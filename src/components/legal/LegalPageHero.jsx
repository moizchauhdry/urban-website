import privacyHeroSm from '../../assets/hero/pages/privacy-800.webp'
import privacyHeroLg from '../../assets/hero/pages/privacy-1440.webp'

/** Full-width hero banner for Privacy Policy and Terms of Service. */
export default function LegalPageHero({ label = 'Legal page hero' }) {
  return (
    <section className="legal-page-hero" aria-label={label}>
      <img
        src={privacyHeroSm}
        srcSet={`${privacyHeroSm} 800w, ${privacyHeroLg} 1440w`}
        sizes="100vw"
        alt=""
        className="legal-page-hero__img"
        width={1440}
        height={810}
        fetchPriority="high"
        loading="eager"
        decoding="async"
        aria-hidden="true"
      />
    </section>
  )
}
