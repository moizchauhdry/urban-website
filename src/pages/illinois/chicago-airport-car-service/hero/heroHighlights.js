import phoneIcon from '../../../../assets/illinois/chicago-airport-car-service/hero/phone-icon.png'
import fullyLicensedIcon from '../../../../assets/illinois/chicago-airport-car-service/hero/fully-licensed.png'
import latestModelIcon from '../../../../assets/illinois/chicago-airport-car-service/hero/latest-modal.png'
import chauffeursIcon from '../../../../assets/illinois/chicago-airport-car-service/hero/chauffeurs.png'
import flightIcon from '../../../../assets/illinois/chicago-airport-car-service/hero/flight.png'

export const HERO_PHONE = {
  href: 'tel:3124263330',
  label: '(312) 426-3330',
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
