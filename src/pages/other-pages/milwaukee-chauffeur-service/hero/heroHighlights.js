import phoneIcon from '../../../../assets/illinois/illinois/hero/phone-icon.png'
import fullyLicensedIcon from '../../../../assets/illinois/illinois/hero/fully-licensed.png'
import latestModelIcon from '../../../../assets/illinois/illinois/hero/latest-modal.png'
import chauffeursIcon from '../../../../assets/illinois/illinois/hero/chauffeurs.png'
import flightIcon from '../../../../assets/illinois/illinois/hero/flight.png'

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
