import heroHome from '../../assets/hero/pages/home-800.webp'
import heroHomeSm from '../../assets/hero/pages/home-800.webp'
import heroHomeLg from '../../assets/hero/pages/home-1440.webp'

/** Home page hero — isolated so landings never enter the home critical path. */
export const HOME_HERO = {
  variant: 'home',
  sectionClass: 'hero hero--home',
  background: {
    default: heroHome,
    sm: heroHomeSm,
    lg: heroHomeLg,
    sizes: '(max-width: 1024px) 800px, 1440px',
    width: 1440,
    height: 810,
  },
  titleInner: (
    <>
      <span className="hero-title-line">Premium White Glove</span>{' '}
      <span className="hero-title-line">
        <span className="hero-title-line--highlight">Chauffeur Service</span>
      </span>
      <span className="hero-title-line hero-title-line--accent"> in USA</span>
    </>
  ),
  descriptionInner: (
    <>
      Urban Elite Limo delivers premium white-glove chauffeur services across the USA.
      Experience luxury, comfort, and professionalism in every ride.
      Serving Westchester, Connecticut, New York, Massachusetts, Miami, Chicago & More.
    </>
  ),
}
