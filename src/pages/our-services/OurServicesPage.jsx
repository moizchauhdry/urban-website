import { useEffect } from 'react'
import ServicesHero from './ServicesHero.jsx'
import ServicesGrid from './ServicesGrid.jsx'
import ServicesReviewsSection from './ServicesReviewsSection.jsx'

/** Dedicated Our Services page. */
export default function OurServicesPage() {
  useEffect(() => {
    document.title = 'Our Services | Urban Elite Limo'
  }, [])

  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <ServicesReviewsSection />
    </>
  )
}
