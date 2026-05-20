import { useEffect } from 'react'
import About from '../components/sections/About.jsx'

export default function AboutPage() {
  useEffect(() => {
    document.title = 'About Us | Urban Elite Limo'
  }, [])

  return <About />
}
