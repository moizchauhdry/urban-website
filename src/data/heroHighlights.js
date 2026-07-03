import phoneIcon from '../assets/hero/features/phone-icon.png'
import fullyLicensedIcon from '../assets/hero/features/fully-licensed.png'
import latestModelIcon from '../assets/hero/features/latest-modal.png'
import chauffeursIcon from '../assets/hero/features/chauffeurs.png'
import flightIcon from '../assets/hero/features/flight.png'

export const HERO_PHONE = {
  href: 'tel:8888816610',
  label: '(888) 881-6610',
  icon: phoneIcon,
  iconAlt: '',
}

/** @type {Array<{ label: string, icon: string, iconAlt: string }>} */
export const HERO_FEATURES = [
  { label: 'Licensed & Insured', icon: fullyLicensedIcon, iconAlt: '' },
  { label: 'Latest Model Fleet', icon: latestModelIcon, iconAlt: '' },
  { label: 'Licensed Chauffeurs', icon: chauffeursIcon, iconAlt: '' },
  { label: 'flight monitoring', icon: flightIcon, iconAlt: '' },
]
