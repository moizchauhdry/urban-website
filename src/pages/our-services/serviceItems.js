import airportTransfers from '../../assets/our-services/cards/Airport-Transfers.webp'
import hourlyCarService from '../../assets/our-services/cards/hourly.webp'
import weddingCarService from '../../assets/our-services/cards/Hourly-Night-Out-Service.webp'
import corporateTransfers from '../../assets/our-services/cards/corporate.webp'
import cityToCityTransfers from '../../assets/our-services/cards/City-to-City-Transfers.webp'
import nightOutService from '../../assets/our-services/cards/night.webp'
import eventsEntertainment from '../../assets/our-services/cards/event.webp'
import pierCruiseTransfers from '../../assets/our-services/cards/city-to-city.webp'
import promParties from '../../assets/our-services/cards/prom.webp'
import christmasCarService from '../../assets/our-services/cards/Christmas-Car-Service.webp'
import newYearCarService from '../../assets/our-services/cards/new-year.webp'

/** @typedef {{ id: string, title: string, tag: string, description: string, image: string }} ServicePageItem */

/** @type {ServicePageItem[]} */
export const SERVICE_PAGE_ITEMS = [
  {
    id: 'airport',
    title: 'Airport Transfers',
    tag: 'Most Booked',
    description:
      'Reliable airport transportation with professional chauffeurs, flight tracking, and luxury vehicles for stress-free arrivals and departures.',
    image: airportTransfers,
  },
  {
    id: 'corporate',
    title: 'Corporate Travel',
    tag: 'For Business',
    description:
      'Executive car service for business travelers with punctual pickups, discreet service, and premium comfort for every corporate journey.',
    image: corporateTransfers,
  },
  {
    id: 'events',
    title: 'Events & Entertainment Travel',
    tag: 'Occasions',
    description:
      'Premium transportation for concerts, sporting events, and shows with reliable group travel and professional chauffeurs.',
    image: eventsEntertainment,
  },
  {
    id: 'hourly',
    title: 'Hourly Car Service',
    tag: 'Flexible',
    description:
      'Flexible hourly chauffeur service for meetings, errands, and multi-stop itineraries with a dedicated driver at your disposal.',
    image: hourlyCarService,
  },
  {
    id: 'wedding',
    title: 'Wedding Car Service',
    tag: 'Weddings',
    description:
      'Elegant wedding transportation with immaculate vehicles and courteous chauffeurs to make your special day seamless and memorable.',
    image: weddingCarService,
  },
  {
    id: 'city-to-city',
    title: 'City To City Transfers',
    tag: 'Long Distance',
    description:
      'Long-distance private travel between cities in comfort with professional chauffeurs and spacious luxury vehicles for a relaxed ride.',
    image: cityToCityTransfers,
  },
  {
    id: 'night-out',
    title: 'Night Out Service',
    tag: 'Evening',
    description:
      'Enjoy your evening with a dedicated chauffeur ensuring safe, stylish transportation from start to finish of your night out.',
    image: nightOutService,
  },
  {
    id: 'cruise',
    title: 'Pier & Cruise Transfers',
    tag: 'Ports',
    description:
      'Timely port and pier transfers with luggage assistance and smooth rides so your cruise vacation starts and ends stress-free.',
    image: pierCruiseTransfers,
  },
  {
    id: 'prom',
    title: 'Prom & Parties Transfers',
    tag: 'Celebrations',
    description:
      'Make prom and celebrations unforgettable with luxury vehicles, professional chauffeurs, and safe premium rides all night long.',
    image: promParties,
  },
  {
    id: 'christmas',
    title: 'Christmas Car Service',
    tag: 'Holiday',
    description:
      'Premium holiday transportation for festive events and family gatherings with professional chauffeurs and reliable seasonal service.',
    image: christmasCarService,
  },
  {
    id: 'new-year',
    title: 'New Year Car Service',
    tag: 'New Year',
    description:
      'Ring in the New Year with luxury chauffeured rides offering comfort, punctuality, and smooth travel to every celebration.',
    image: newYearCarService,
  },
]
