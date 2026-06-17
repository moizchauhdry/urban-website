import { useEffect } from 'react'
import ContactHero from './ContactHero.jsx'
import ContactForm from './ContactForm.jsx'
import ContactMap from './ContactMap.jsx'

/** Dedicated Contact Us page. */
export default function ContactUsPage() {
  useEffect(() => {
    document.title = 'Contact Us | Urban Elite Limo'
  }, [])

  return (
    <>
      <ContactHero />
      <ContactForm />
      <ContactMap />
    </>
  )
}
