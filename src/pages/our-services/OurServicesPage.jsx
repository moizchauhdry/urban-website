
import ServicesHero from './ServicesHero.jsx'
import ServicesGrid from './ServicesGrid.jsx'
import ReviewsSection from '../../components/sections/ReviewsSection.jsx'

/** Dedicated Our Services page. */
export default function OurServicesPage() {


  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <ReviewsSection variant="services" />
    </>
  )
}
