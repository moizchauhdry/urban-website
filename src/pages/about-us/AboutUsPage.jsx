import { useEffect } from 'react'
import AboutHero from './AboutHero.jsx'
import AboutIntro from './AboutIntro.jsx'
import AboutFeatures from './AboutFeatures.jsx'
import AboutStory from './AboutStory.jsx'

/** Dedicated About Us page. */
export default function AboutUsPage() {
  useEffect(() => {
    document.title = 'About Us | Urban Elite Limo'
  }, [])

  return (
    <>
      <AboutHero />
      <AboutIntro />
      <AboutFeatures />
      <AboutStory />
    </>
  )
}
