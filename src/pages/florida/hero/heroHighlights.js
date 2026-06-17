import phoneIcon from '../../../assets/florida/hero/phone-icon.png'
import fullyLicensedIcon from '../../../assets/florida/hero/fully-licensed.png'
import latestModelIcon from '../../../assets/florida/hero/latest-modal.png'
import chauffeursIcon from '../../../assets/florida/hero/chauffeurs.png'
import flightIcon from '../../../assets/florida/hero/flight.png'

export const HERO_PHONE = {
  href: 'tel:3059983599',
  label: '(305) 998-3599',
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
