import { useEffect } from 'react'
import Contact from '../components/sections/Contact.jsx'

export default function ContactPage() {
  useEffect(() => {
    document.title = 'Contact Us | Urban Elite Limo'
  }, [])

  return <Contact />
}
