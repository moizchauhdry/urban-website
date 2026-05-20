import { useEffect } from 'react'
import Services from '../components/sections/Services.jsx'

export default function ServicesPage() {
  useEffect(() => {
    document.title = 'Our Services | Urban Elite Limo'
  }, [])

  return <Services />
}
