import heroImg from '../../assets/genz/hero-escalade.png'
import heroMobileImg from '../../assets/genz/hero-mobile.png'
import partyBusImg from '../../assets/genz/party-bus2.jpg'
import concertsImg from '../../assets/genz/hero-party.jpg'
import birthdaysImg from '../../assets/genz/birthdays.webp'
import wineImg from '../../assets/genz/wine.webp'
import luxurySedan from '../../assets/fleet/luxury-sedan.webp'
import escalade from '../../assets/fleet/full-size-suv2.webp'
import partyBusFleet from '../../assets/fleet/party-bus.webp'
import miaImg from '../../assets/airports/mia.webp'

export const BRAND = 'URBAN ELITE'
export const BRAND_FULL = 'Urban Elite'

export const TICKER_ITEMS = [
  'SOUTH BEACH READY',
  'FLAT RATE TO THE SAND',
  'MIA · FLL · PORT',
  'NO SURGE · EVER',
]

export const MARQUEE_ITEMS = ['BOOK THE SHORE', 'TRACK YOUR RIDE', 'ARRIVE UNHURRIED']

export const HERO = {
  image: heroImg,
  mobileImage: heroMobileImg,
  title: 'Miami car service',
  sub: 'Quiet black-car rides from the airport to the sand — South Beach, Key Biscayne, and every shore stop in between.',
}

export const FEATURES = [
  { icon: 'tag', label: 'Flat shore rates' },
  { icon: 'pin', label: 'Live car tracking' },
  { icon: 'users', label: 'Group-ready fleet' },
  { icon: 'clock', label: '24/7 beach runs' },
]

export const WHIPS = [
  {
    id: 'sedan',
    name: 'Luxury Sedan',
    image: luxurySedan,
    seats: '3 seats',
    bags: '2 bags',
    featured: false,
    note: 'Airport to hotel, no fuss',
  },
  {
    id: 'escalade',
    name: 'Escalade',
    image: escalade,
    seats: '6 seats',
    bags: '6 bags',
    featured: true,
    badge: 'Shore favorite',
    note: 'Room for the whole crew',
  },
  {
    id: 'party-bus',
    name: 'Party Bus',
    image: partyBusFleet,
    seats: '20 seats',
    bags: 'Aux ready',
    featured: false,
    note: 'Ocean Drive nights',
  },
]

export const OCCASIONS = [
  {
    id: 'south-beach',
    title: 'South Beach',
    image: concertsImg,
    price: 'From $89',
    wide: true,
  },
  {
    id: 'airport',
    title: 'MIA & FLL',
    image: miaImg,
    price: 'Flight-tracked',
  },
  {
    id: 'cruise',
    title: 'Cruise port',
    image: wineImg,
    price: 'From $99',
  },
  {
    id: 'nights',
    title: 'Beach nights',
    image: partyBusImg,
    price: 'From $89',
  },
  {
    id: 'getaways',
    title: 'Key getaways',
    image: birthdaysImg,
    price: 'From $149',
    wide: true,
  },
]

export const STEPS = [
  {
    n: '01',
    title: 'Share your shore',
    body: 'Pickup, drop-off, and timing — hotel, pier, or terminal.',
  },
  {
    n: '02',
    title: 'Choose your ride',
    body: 'Sedan, SUV, or bus. Flat rate before you confirm.',
  },
  {
    n: '03',
    title: 'Arrive unhurried',
    body: 'Your driver meets you curb-side. You keep the ocean pace.',
  },
]

export const FOOTER_COLS = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', to: '/about-us' },
      { label: 'Our Services', to: '/our-services' },
      { label: 'Fleet', to: '/fleet' },
      { label: 'Contact', to: '/contact-us' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Book Now', to: '/book-now' },
      { label: 'Privacy Policy', to: '/privacy-policy' },
      { label: 'Terms of Service', to: '/terms-of-service' },
    ],
  },
  {
    title: 'Popular',
    links: [
      { label: 'Miami Airport', to: '/miami-airport-car-service' },
      { label: 'Fort Lauderdale', to: '/miami-to-fort-lauderdale-car-service' },
      { label: 'Orlando', to: '/miami-to-orlando-car-service' },
      { label: 'Florida Hub', to: '/florida-car-service' },
    ],
  },
]
