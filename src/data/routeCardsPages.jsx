import { buildLuxuryRouteCards } from '../utils/buildLuxuryRouteCards.js'
import { DESTINATION_PAGES } from './destinationPacks.js'
import img1 from '../assets/content-blocks/car-service1.webp'
import img2 from '../assets/content-blocks/car-service2.webp'
import img3 from '../assets/content-blocks/car-service3.webp'
import miami1 from '../assets/content-blocks/miami-1.webp'
import miami2 from '../assets/content-blocks/miami-2.webp'
import miami3 from '../assets/content-blocks/miami-3.webp'
import connecticut1 from '../assets/content-blocks/connecticut-1.webp'
import connecticut2 from '../assets/content-blocks/connecticut-2.webp'
import connecticut3 from '../assets/content-blocks/connecticut-3.webp'
import newyork1 from '../assets/content-blocks/newyork-1.webp'
import newyork2 from '../assets/content-blocks/newyork-2.webp'
import newyork3 from '../assets/content-blocks/newyork-3.webp'
import newjersey1 from '../assets/content-blocks/newjersey-1.webp'
import newjersey2 from '../assets/content-blocks/newjersey-2.webp'
import newjersey3 from '../assets/content-blocks/newjersey-3.webp'
import boston1 from '../assets/content-blocks/boston-1.webp'
import boston2 from '../assets/content-blocks/boston-2.webp'
import boston3 from '../assets/content-blocks/boston-3.webp'
import chicago1 from '../assets/content-blocks/chicago-1.webp'
import chicago2 from '../assets/content-blocks/chicago-2.webp'
import chicago3 from '../assets/content-blocks/chicago-3.webp'
import milwaukee1 from '../assets/content-blocks/milwaukee-1.webp'
import milwaukee2 from '../assets/content-blocks/milwaukee-2.webp'
import milwaukee3 from '../assets/content-blocks/milwaukee-3.webp'
import atlanta1 from '../assets/content-blocks/atlanta-1.webp'
import atlanta2 from '../assets/content-blocks/atlanta-2.webp'
import atlanta3 from '../assets/content-blocks/atlanta-3.webp'
import texas1 from '../assets/content-blocks/texas-1.webp'
import texas2 from '../assets/content-blocks/texas-2.webp'
import texas3 from '../assets/content-blocks/texas-3.webp'
import florida1 from '../assets/content-blocks/florida-1.webp'
import florida2 from '../assets/content-blocks/florida-2.webp'
import florida3 from '../assets/content-blocks/florida-3.webp'

const IMAGES = [img1, img2, img3]

const MIAMI_IMAGES = [miami1, miami2, miami3]

const DESTINATION_IMAGES = {
  connecticut: [connecticut1, connecticut2, connecticut3],
  newyork: [newyork1, newyork2, newyork3],
  newjersey: [newjersey1, newjersey2, newjersey3],
  boston: [boston1, boston2, boston3],
  chicago: [chicago1, chicago2, chicago3],
  milwaukee: [milwaukee1, milwaukee2, milwaukee3],
  atlanta: [atlanta1, atlanta2, atlanta3],
  texas: [texas1, texas2, texas3],
  florida: [florida1, florida2, florida3],
}

/** Miami-area pages — keep in sync with the hero art list in landingBackground.js. */
const MIAMI_PAGES = [
  'miami-car-service',
  'miami-chauffeur-service',
  'miami-airport-car-service',
  'miami-airport-limo-service',
  'miami-to-orlando-car-service',
  'miami-to-naples-car-service',
  'miami-to-fort-lauderdale-car-service',
  'west-palm-beach-to-miami-limo-service',
]

/** Pages that use their own city photography instead of the shared set. */
const PAGE_IMAGES = {
  ...Object.fromEntries(MIAMI_PAGES.map((key) => [key, MIAMI_IMAGES])),
  ...Object.fromEntries(
    Object.entries(DESTINATION_PAGES).flatMap(([id, pages]) =>
      pages.map((page) => [page, DESTINATION_IMAGES[id]]),
    ),
  ),
}

/** Slugs whose rail label is not a straight hyphen-to-space uppercase conversion. */
const RAIL_LABEL_OVERRIDES = {
  connecticut: 'CONNECTICUT CAR SERVICE',
  florida: 'FLORIDA CAR SERVICE',
  illinois: 'ILLINOIS CAR SERVICE',
  newyork: 'NEW YORK CAR SERVICE',
}

/** @param {string} slug */
function railLabelFor(slug) {
  return RAIL_LABEL_OVERRIDES[slug] ?? slug.replace(/-/g, ' ').toUpperCase()
}

/** @param {Array<object>} cards */
function withImages(cards, images = IMAGES) {
  return cards.map((card, index) => ({ ...card, imageSrc: images[index % images.length] }))
}

/**
 * Pages with auto-generated route cards.
 * String = variant detected from slug; object = explicit variant and/or rail label.
 * @type {Array<string | { key: string, variant?: 'regional' | 'airport' | 'route' | 'luxury', railLabel?: string }>}
 */
const LUXURY_ROUTE_PAGES = [
  'florida',
  'illinois',
  'newyork',
  'atlanta-car-service',
  'boston-car-service',
  'connecticut-car-service',
  'florida-car-service',
  'illinois-car-service',
  'manhattan-car-service',
  'miami-car-service',
  'milwaukee-car-service',
  'new-york-car-service',
  'norwalk-ct-car-service',
  'texas-car-service',
  'westchester-county-car-service',
  'wisconsin-car-service',
  { key: 'chicago-chauffeur-service', variant: 'luxury' },
  { key: 'chicago-limo-service', variant: 'luxury' },
  { key: 'chicago-airport-car-service', variant: 'airport' },
  { key: 'luxury-new-jersey-car-service', variant: 'luxury' },
  { key: 'miami-airport-car-service', variant: 'airport' },
  { key: 'miami-airport-limo-service', variant: 'luxury' },
  { key: 'miami-chauffeur-service', variant: 'luxury' },
  { key: 'miami-to-fort-lauderdale-car-service', variant: 'route' },
  { key: 'miami-to-naples-car-service', variant: 'route' },
  { key: 'miami-to-orlando-car-service', variant: 'route' },
  { key: 'milwaukee-airport-limo-service', variant: 'luxury' },
  { key: 'milwaukee-chauffeur-service', variant: 'luxury' },
  { key: 'milwaukee-limo-service', variant: 'luxury' },
  { key: 'milwaukee-to-chicago-car-service', variant: 'route' },
  { key: 'milwaukee-to-ohare-car-service', variant: 'route' },
  { key: 'nyc-limo-service', variant: 'luxury' },
  { key: 'west-palm-beach-to-miami-limo-service', variant: 'route' },
]

/** Page-specific route card copy — images are attached automatically. */
const CUSTOM_ROUTE_CARDS = {
  connecticut: [
    {
      id: 'everyday',
      railLabel: 'CONNECTICUT CAR SERVICE',
      title: 'Connecticut Car Service for Everyday Travel',
      description:
        'A premium Connecticut car service should feel like having someone you trust behind the wheel. Many travelers choose us for calm, comfortable and predictable rides throughout Connecticut.',
      description2:
        'Whether you are heading to work, meeting friends or planning a family outing, you get a clean car, a licensed driver and a smooth trip without the usual rush or confusion.',
    },
    {
      id: 'airport',
      railLabel: 'CONNECTICUT CAR SERVICE',
      title: 'Airport Transportation for Connecticut',
      description:
        'Flying already comes with enough pressure so your airport ride should not add more stress. Our service is built around reliable pickups, luggage help and smart routing.',
      description2:
        'Your driver arrives early so you can relax instead of racing the clock. Business travelers, families and frequent flyers all get the same calm, professional experience.',
    },
    {
      id: 'long-distance',
      railLabel: 'CONNECTICUT CAR SERVICE',
      title: 'Long Distance & City-to-City Rides',
      description:
        'Long distance travel should feel calm, not overwhelming. When you book Connecticut car service for intercity or airport transfers, you get space for luggage and a comfortable cabin.',
      description2:
        'Licensed chauffeurs keep the full journey simple from pickup to drop-off, whether across Connecticut or connecting to a major hub.',
    },
  ],
  'bdl-airport-car-service': [
    {
      id: 'everyday',
      railLabel: 'BDL AIRPORT CAR SERVICE',
      title: 'Trip Planning Before Departure',
      description:
        'Your journey begins with proper planning through our BDL Airport Car Service. When you schedule a ride, we collect essential details such as pickup time, flight number, and destination so everything is organized in advance. This helps eliminate confusion on the travel day and keeps everything structured.',
      description2:
        'We also make sure every Bradley airport car service reservation is reviewed for timing accuracy so your departure or arrival is handled without unnecessary waiting.',
    },
    {
      id: 'airport',
      railLabel: 'BDL AIRPORT CAR SERVICE',
      title: 'Driver Assignment & Route Preparation',
      description:
        'Before your trip begins, a professional chauffeur is assigned specifically for your ride. Each Bradley airport limo trip includes pre-planned routing based on traffic conditions, distance, and airport timing requirements.',
      description2:
        'This preparation allows your connecticut airport limo service to avoid delays and ensures the most efficient route is selected for your journey to or from Bradley Airport.',
    },
    {
      id: 'long-distance',
      railLabel: 'BDL AIRPORT CAR SERVICE',
      title: 'Pickup Experience at Any Location',
      description:
        'Whether you are at home, a hotel, office, or meeting point, our BDL airport car service ensures your pickup is coordinated exactly as scheduled. The chauffeur arrives at the designated spot with full trip details already confirmed.',
      description2:
        'This approach keeps every Bradley airport car service organized and reduces the need for back-and-forth communication during travel.',
    },
  ],
  'bos-airport-car-service': [
    {
      id: 'everyday',
      railLabel: 'BOSTON AIRPORT CAR SERVICE',
      title: 'Premium BOS Airport Limo Service',
      description:
        'Our BOS airport limo service delivers a premium travel experience with professional chauffeurs and luxury vehicles that uplifts your travel experience. From real-time flight tracking to punctual pickups and drop-offs, every detail is carefully managed to ensure a smooth and stress-free journey.',
      description2:
        "Whether it's a standard BOS car service or an executive limousine experience, every journey is delivered with unmatched comfort, reliability, and professionalism.",
    },
    {
      id: 'airport',
      railLabel: 'BOS AIRPORT CAR SERVICE',
      title: 'BOS Car Service Across Boston & Nearby Areas',
      description:
        'We provide fast and reliable BOS car service across major locations including Boston, Cambridge, Brookline, and nearby Massachusetts cities. Our BOS car service offers premium airport transfers from Boston Logan International Airport to any city or state in the USA. Wherever your destination is, we deliver consistent luxury, comfort, and reliability.',
      description2:
        'From short-distance rides to long interstate journeys, every trip is carefully planned to ensure a seamless travel experience.',
    },
    {
      id: 'long-distance',
      railLabel: 'BOS AIRPORT CAR SERVICE',
      title: 'Why Choose Our Logan Airport Car Service',
      description:
        'Choosing our Logan Airport car service means choosing professionalism, safety, and luxury combined. From luxury sedans and SUVs to spacious executive vehicles, our fleet is designed to meet every travel need with comfort, safety, and style. Each vehicle is well-maintained, clean, and equipped to ensure a smooth BOS airport transportation experience for both individuals and groups.',
      description2:
        'Our dedicated support team is available 24/7 to assist with bookings, schedule changes, and real-time travel updates. From the moment you reserve your ride until you reach your destination, we ensure a responsive and reliable service experience at every step.',
    },
  ],
  'boston-chauffeur-service': [
    {
      id: 'everyday',
      railLabel: 'BOSTON CHAUFFEUR SERVICE',
      title: 'Your Professional Boston Chauffeur Alternative to Taxis',
      description:
        'Boston is a city of meetings, campuses, and historic neighborhoods — and a professional chauffeur keeps every stop on schedule. Urban Elite Boston chauffeur service gives you a dedicated driver, a late-model luxury vehicle, and the freedom to work or relax while we handle parking, traffic, and timing.',
      description2:
        'Choose Business Class for back-to-back meetings, an SUV for groups and luggage, or First Class when the occasion calls for a polished arrival at the Boston Symphony, a Back Bay dinner, or a corporate event.',
    },
    {
      id: 'airport',
      railLabel: 'BOSTON CHAUFFEUR SERVICE',
      title: 'Logan Airport & City Chauffeur Transfers',
      description:
        'Count on a reliable Boston chauffeur every time you fly. We track your Logan flight in real time, adjust for delays, and meet you with a coordinated greet so you never wait at the curb. Complimentary wait time is built into every airport pickup — punctual, professional, and ready when you are.',
      description2:
        'We cover transfers across Boston, Cambridge, Brookline, Seaport, and nearby Massachusetts destinations, plus private rides toward Cape Cod, Connecticut, and New York when your itinerary extends beyond the city.',
    },
    {
      id: 'hourly',
      railLabel: 'BOSTON CHAUFFEUR SERVICE',
      title: 'Hourly Chauffeur Service Across Greater Boston',
      description:
        'Reserve a chauffeur by the hour when you need a car on standby. Shop Newbury Street, tour Harvard and MIT, attend meetings in the Financial District, or catch a game at Fenway — your driver waits while you do, then takes you to the next stop without rideshare uncertainty.',
      description2:
        'Transparent pricing, licensed chauffeurs, and 24/7 booking support make Urban Elite a dependable Boston chauffeur partner for business travelers, families, and visitors who want a calm, premium ride every time.',
    },
  ],
  'boston-limo-service': [
    {
      id: 'everyday',
      railLabel: 'BOSTON LIMO SERVICE',
      title: 'Refined Boston Limo Service for Every Occasion',
      description:
        'A Boston limo service should feel intentional — clean presentation, a professional chauffeur, and a cabin built for comfort. Urban Elite delivers black-car and limousine transportation for airport runs, hotel transfers, corporate travel, weddings, and nights at the ballet or Symphony Hall.',
      description2:
        'Whether you need a sedan for two or an SUV for your group, every vehicle is detailed, late-model, and ready to make your arrival feel effortless.',
    },
    {
      id: 'airport',
      railLabel: 'BOSTON LIMO SERVICE',
      title: 'Logan Airport Limousine Transfers',
      description:
        'Avoid the taxi line at Boston Logan with a pre-booked limousine transfer. Your chauffeur tracks your flight, manages luggage, and provides a private ride into downtown Boston, Cambridge, or your hotel — with clear, upfront rates and no surge pricing.',
      description2:
        'From early departures to late arrivals, our Boston limo service keeps airport travel punctual, private, and stress-free for executives, families, and leisure travelers alike.',
    },
    {
      id: 'events',
      railLabel: 'BOSTON LIMO SERVICE',
      title: 'Executive & Event Limo Service in Boston',
      description:
        'Customize your Boston limousine experience for the moment: First Class for a Michelin-star dinner, SUV class for teams heading to a conference, or hourly service for multi-stop evenings across Back Bay, Seaport, and the North End.',
      description2:
        'Fifteen minutes of complimentary wait time on standard bookings, professional chauffeurs who know the city, and 24/7 support mean your Boston limo service stays reliable from the first confirmation to the final drop-off.',
    },
  ],
  'connecticut-to-boston-car-service': [
    {
      id: 'transfers',
      railLabel: 'CONNECTICUT TO BOSTON CAR SERVICE',
      title: 'Private Connecticut to Boston Transfers',
      description:
        'Long-distance travel between Connecticut and Boston should feel calm, not exhausting. Our Connecticut to Boston car service provides door-to-door private transfers with professional chauffeurs, spacious luxury vehicles, and carefully planned routing so you arrive ready — not drained from highway traffic.',
      description2:
        'Ideal for business trips, campus visits, medical appointments, and weekend getaways when you want a direct ride without train connections or parking hassles.',
    },
    {
      id: 'coverage',
      railLabel: 'CONNECTICUT TO BOSTON CAR SERVICE',
      title: 'Serving Hartford, Stamford, Greenwich & All of CT',
      description:
        'We pick up across Connecticut — including Hartford, Stamford, Greenwich, New Haven, Fairfield, Norwalk, and Danbury — and take you to downtown Boston, Cambridge, Brookline, Logan Airport, or your hotel. Return trips from Boston to Connecticut are available on the same professional standard.',
      description2:
        'Every ride includes a clean cabin, luggage assistance, and a chauffeur focused on punctuality so your Connecticut to Boston transfer stays on schedule from start to finish.',
    },
    {
      id: 'comfort',
      railLabel: 'CONNECTICUT TO BOSTON CAR SERVICE',
      title: 'Comfortable Intercity Travel You Can Plan Ahead',
      description:
        'Book your Connecticut to Boston car service in advance and lock in a clear pickup time. Whether you need an early start to Logan, a midday meeting in the Financial District, or an evening arrival for a show, we coordinate the trip details so you can focus on what matters.',
      description2:
        'With 24/7 support, luxury sedans and SUVs, and reliable long-distance chauffeurs, Urban Elite is a trusted choice for Connecticut travelers who expect a premium ride into Boston.',
    },
  ],
  'ct-to-jfk-airport-car-service': [
    {
      id: 'transfers',
      railLabel: 'CT TO JFK AIRPORT CAR SERVICE',
      title: 'Professional Airport Transfers',
      description:
        'Our CT to JFK Airport Car Service is designed for travelers who want a reliable and comfortable ride to John F. Kennedy International Airport. We provide private transportation for business trips, family travel, and airport transfers across Connecticut. From car service from CT to JFK to JFK to Connecticut car service, our chauffeurs focus on punctuality, safety, and a first-class travel experience.',
    },
    {
      id: 'hartford',
      railLabel: 'CT TO JFK AIRPORT CAR SERVICE',
      title: 'Serving Hartford and All of Connecticut',
      description:
        'If you need a car service from Hartford to JFK or anywhere else in Connecticut, our service is built to make long-distance airport travel easy. We offer clean vehicles, professional drivers, and convenient pickup options for passengers traveling to and from JFK. Our CT limousine service to JFK gives you a smooth and comfortable ride experience.',
    },
    {
      id: 'comfort',
      railLabel: 'CT TO JFK AIRPORT CAR SERVICE',
      title: 'Comfortable and Reliable Travel',
      description:
        'For airport transportation between Connecticut and JFK, our CT to JFK Airport Car Service offers door-to-door travel with scheduled pickups and private vehicles. We handle trips from Hartford and other Connecticut locations, making it easy to plan airport transportation ahead of time. Our service is a strong choice for early departures, late arrivals, and long-distance travel plans that need attention to timing.',
    },
  ],
  'danbury-ct-car-service': [
    {
      id: 'private',
      railLabel: 'DANBURY CT CAR SERVICE',
      title: 'Private Travel in Danbury',
      description:
        'Our Danbury CT Car Service is a great choice for passengers who want direct transportation without the stress of driving, parking, or waiting around. We provide Danbury car service for daily travel, meetings, and special plans, with clean vehicles and a polished travel experience. If you are looking for a Danbury CT limo service, we make every ride feel organized and comfortable.',
    },
    {
      id: 'airport',
      railLabel: 'DANBURY CT CAR SERVICE',
      title: 'Airport Rides and City Transfers',
      description:
        'For longer trips, our car service from Danbury CT to JFK gives travelers a private and dependable way to reach the airport. We also provide transportation to major airports like JFK, LGA, Newark, BDL, and HPN, helping passengers plan their travel with less hassle. In addition, we offer service to Manhattan for business, hotel, and personal trips when you need a direct ride into the city.',
    },
    {
      id: 'limo',
      railLabel: 'DANBURY CT CAR SERVICE',
      title: 'Limo Service for Special Occasions',
      description:
        'When the ride needs a more refined touch, our Danbury limo and Danbury CT limo service options are a strong choice for formal events, business travel, and private outings. These services are ideal for clients who want a higher level of presentation along with professional chauffeur support. From Danbury limo bookings to Danbury CT limo service trips, we focus on delivering a smooth and elevated experience.',
    },
  ],
  'fairfield-ct-car-service': [
    {
      id: 'everyday',
      railLabel: 'FAIRFIELD CT CAR SERVICE',
      title: 'Private Rides for Everyday Plans',
      description:
        'Our Fairfield CT car service is designed for passengers who want a private ride that fits into a busy schedule. From office meetings to personal appointments, it offers a straightforward way to get around without the stress of parking or traffic. If you are looking for a dependable Fairfield CT car service for daily travel, this is a convenient option.',
    },
    {
      id: 'airport',
      railLabel: 'FAIRFIELD CT CAR SERVICE',
      title: 'Airport Travel Made Simple',
      description:
        'We also provide a trusted Fairfield CT airport car service for travelers heading to or from major airports, including JFK, LGA, Newark, BDL, and HPN. Whether you need car service Fairfield CT to JFK or a ride arranged for another flight, the trip is handled with care and attention to timing. This makes it easier to plan airport travel without last-minute stress.',
    },
    {
      id: 'refined',
      railLabel: 'FAIRFIELD CT CAR SERVICE',
      title: 'A More Refined Way to Travel',
      description:
        'When the occasion calls for something more elevated, our Fairfield CT limo and limo service in Fairfield CT bring a more polished experience to the ride. These services are a strong fit for dinners, events, client pickups, and other moments where presentation matters. With clean vehicles and professional chauffeurs, the trip feels organized from the start.',
    },
  ],
  'greenwich-ct-car-service': [
    {
      id: 'airport',
      railLabel: 'GREENWICH CT CAR SERVICE',
      title: 'Airport Transportation in Greenwich CT',
      description:
        'Traveling to or from the airport should never feel stressful. Our Greenwich CT airport transportation service offers timely pickups, flight monitoring, and assistance with luggage to make your journey easier. We provide transfers to all major airports including:',
      listItems: [
        'JFK International Airport',
        'LaGuardia Airport',
        'Newark Liberty International Airport',
        'Bradley International Airport',
      ],
      description2:
        "Whether you're a frequent flyer or occasional traveler, our service ensures a smooth and relaxed airport experience from start to finish.",
    },
    {
      id: 'corporate',
      railLabel: 'GREENWICH CT CAR SERVICE',
      title: 'Corporate & Executive Car Service',
      description:
        'For business professionals, timing and reliability are everything. Our corporate car service in Greenwich CT ensures you arrive at meetings, events, and conferences on time and in style.',
      description2:
        'With a quiet, comfortable cabin and professional chauffeurs, you can focus on work while we handle the road. Ideal for executives, corporate teams, and VIP clients.',
    },
    {
      id: 'long-distance',
      railLabel: 'GREENWICH CT CAR SERVICE',
      title: 'Long Distance & City-to-City Transfers',
      description:
        'Need to travel beyond Greenwich? Our long-distance car service in Connecticut is perfect for intercity travel. Enjoy spacious seating, smooth rides, and experienced drivers who make long journeys comfortable and efficient. We provide city-to-city transfers across:',
      listItems: ['Connecticut', 'New York City', 'Boston', 'New Jersey and surrounding areas'],
    },
  ],
  'hartford-ct-car-service': [
    {
      id: 'airport',
      railLabel: 'HARTFORD CT CAR SERVICE',
      title: 'A Better Way to Reach the Airport',
      description:
        'Skip the stress of parking, traffic, and last-minute ride delays with our Hartford airport car service. We offer scheduled transportation for travelers heading to the airport, ensuring your ride is arranged around your departure time. If you are searching for car service Hartford CT airport travel, our service gives you a direct and seamless option.',
    },
    {
      id: 'long-distance',
      railLabel: 'HARTFORD CT CAR SERVICE',
      title: 'Long-Distance Travel with Style',
      description:
        "For passengers traveling out of Connecticut, our car service from Hartford to JFK offers a private and well-managed way to reach one of the region's busiest airports. We also provide transportation to LGA, Newark, BDL, and HPN, giving travelers flexible options for both business and leisure trips.",
      description2:
        'This service is ideal for corporate travelers, families, and frequent flyers who value an efficient ride with a higher level of service. Our Hartford CT car service makes long airport trips easier to plan and more pleasant to take.',
    },
    {
      id: 'refined',
      railLabel: 'HARTFORD CT CAR SERVICE',
      title: 'Refined Transportation for Any Occasion',
      description:
        'When the trip calls for something more elevated, our limo service Hartford CT delivers a luxury-focused experience for airport transportation, events, and private travel. Our Hartford car service is available for those who want clean vehicles, experienced chauffeurs, and a professional atmosphere. Whether you need Hartford CT car service for a flight or car service from Hartford to JFK for a longer journey, we make every ride feel organized and upscale.',
    },
  ],
  'jfk-airport-car-service': [
    {
      id: 'everyday',
      railLabel: 'JFK AIRPORT CAR SERVICE',
      title: 'Premium JFK Airport Limo Service',
      description:
        'Our JFK airport limo service delivers a premium travel experience with professional chauffeurs and luxury vehicles that uplifts your travel experience. From real-time flight tracking to punctual pickups and drop-offs, every detail is carefully managed to ensure a smooth and stress-free journey.',
      description2:
        "Whether it's a standard JFK car service or an executive limousine experience, every journey is delivered with unmatched comfort, reliability, and professionalism.",
    },
    {
      id: 'airport',
      railLabel: 'JFK AIRPORT CAR SERVICE',
      title: 'JFK Car Service Across New York & Nearby Areas',
      description:
        'We provide fast and reliable JFK car service across major locations including Manhattan, Long Island, and New Jersey, Connecticut. Our JFK car service offers premium airport transfers from JFK Airport to any city or state in the USA. Wherever your destination is, we deliver consistent luxury, comfort, and reliability.',
      description2:
        'From short-distance rides to long interstate journeys, every trip is carefully planned to ensure a seamless travel experience.',
    },
    {
      id: 'long-distance',
      railLabel: 'JFK AIRPORT CAR SERVICE',
      title: 'Why Choose Our Kennedy Car Service',
      description:
        'Choosing our Kennedy car service means choosing professionalism, safety, and luxury combined. From luxury sedans and SUVs to spacious executive vehicles, our fleet is designed to meet every travel need with comfort, safety, and style. Each vehicle is well-maintained, clean, and equipped to ensure a smooth JFK airport transportation experience for both individuals and groups.',
      description2:
        'Our dedicated support team is available 24/7 to assist with bookings, schedule changes, and real-time travel updates. From the moment you reserve your ride until you reach your destination, we ensure a responsive and reliable service experience at every step.',
    },
  ],
  'lga-airport-car-service': [
    {
      id: 'everyday',
      railLabel: 'LGA AIRPORT CAR SERVICE',
      title: 'LGA Airport Car Service – Easy Booking Process',
      description:
        'Booking your LGA Airport Car Service is quick and simple. You can reserve your ride online or by phone by sharing your pickup details, flight information, luggage count, and preferred vehicle type.',
      description2:
        'Once confirmed, your booking is scheduled and handled with clear trip details for smooth coordination.',
    },
    {
      id: 'airport',
      railLabel: 'LGA AIRPORT CAR SERVICE',
      title: 'Flight Tracking & Pickup Coordination',
      description:
        'For arriving flights, we monitor schedules in real time and adjust pickup timing based on actual landing updates. This ensures your LaGuardia car service is arranged at the right time, whether your flight arrives early or is delayed.',
      description2:
        'Your chauffeur is assigned in advance and prepared for timely coordination at pickup.',
    },
    {
      id: 'long-distance',
      railLabel: 'LGA AIRPORT CAR SERVICE',
      title: 'Flexible Travel Options Across All Needs',
      description:
        'Our LaGuardia limo service is designed to support different travel needs, including airport transfers, hotel pickups, business travel, and long-distance rides.',
      description2:
        'Whether you need a laguardia car service for a short trip or extended travel, we offer multiple vehicle options such as sedans, SUVs, Sprinter vans, and executive cars based on comfort and group size.',
    },
  ],
  'new-haven-ct-car-service': [
    {
      id: 'airport',
      railLabel: 'NEW HAVEN CT CAR SERVICE',
      title: 'Airport Transportation Made Simple',
      description:
        'Our New Haven CT Car Service offers direct transportation for travelers heading to and from New Haven. Whether you are traveling to LGA, JFK, HPN, or EWR, arriving from the airport, or planning a business trip, our chauffeurs provide a smooth ride with attention to timing and route planning. If you need a New Haven car service for airport travel, we make the process simple from pickup to drop-off.',
    },
    {
      id: 'yale',
      railLabel: 'NEW HAVEN CT CAR SERVICE',
      title: 'Travel Around Yale and the City',
      description:
        'We also provide private transportation for passengers traveling to and from Yale University, downtown New Haven, hotels, and other well-known destinations in the city. Many riders choose our limo New Haven CT and New Haven limo options when they want a polished ride for campus visits, academic events, meetings, or special occasions. Our service is a practical choice for anyone who needs a professional ride around the city with a better level of presentation.',
    },
    {
      id: 'jfk',
      railLabel: 'NEW HAVEN CT CAR SERVICE',
      title: 'JFK and Nearby Airport Service',
      description: (
        <>
          If you are looking for a New Haven limo service to JFK, we provide long-distance airport transportation that
          is arranged around your flight time. Our service is a good option for passengers who want a private ride
          instead of dealing with parking or public transit. We also offer New Haven CT car service for return trips and
          scheduled airport transfers, giving you a straightforward way to travel between New Haven and major airports like{' '}
          <strong>LGA, JFK, HPN, and EWR.</strong>
        </>
      ),
    },
  ],
  'newark-airport-service': [
    {
      id: 'everyday',
      railLabel: 'NEWARK AIRPORT SERVICE',
      title: 'Newark Airport Service – Easy Booking Process',
      description:
        'Booking your Newark Airport Service is quick and straightforward. You can reserve your ride online or by phone by providing your pickup location, flight details, luggage count, and preferred vehicle type. Once confirmed, your booking is scheduled immediately and managed with clear trip instructions for easy coordination.',
      description2:
        'Our system is designed to make every car service to Newark Airport simple, organized, and stress-free from start to finish.',
    },
    {
      id: 'airport',
      railLabel: 'NEWARK AIRPORT SERVICE',
      title: 'Flight Monitoring & Pickup Coordination',
      description:
        'For all arriving flights, we track real-time updates and adjust pickup timing based on actual landing information. This helps ensure your Newark Airport car service is scheduled at the correct time, even if your flight is early or delayed.',
      description2:
        'Your chauffeur is assigned before arrival for all Newark Airport transfers, allowing precise coordination for pickups and drop-offs. Every black car service Newark Airport booking is planned with attention to timing, traffic conditions, and route selection for efficient travel.',
    },
    {
      id: 'long-distance',
      railLabel: 'NEWARK AIRPORT SERVICE',
      title: 'Newark Limo Service & City Transfers',
      description:
        'Our Newark limo service is designed for convenient transportation between Newark Airport and major cities. Whether you are booking a limo service to Newark Airport or a ride from the airport, we ensure well-managed travel arrangements.',
      description2:
        'We regularly operate routes like car service Newark to Manhattan, car service from Newark Airport to Manhattan, and car service Newark to NYC, keeping every trip properly scheduled and coordinated.',
    },
  ],
  'stamford-ct-car-service': [
    {
      id: 'schedule',
      railLabel: 'STAMFORD CT CAR SERVICE',
      title: 'Travel That Fits a Busy Schedule',
      description:
        'When time matters, our Stamford CT Car Service gives you a direct way to move between home, office, and the airport without the stress of driving yourself. Travelers choose our service for its simple booking process, punctual pickups, and attention to timing. If you need a Stamford car service that works around your day, we make each ride efficient and well-organized.',
    },
    {
      id: 'airports',
      railLabel: 'STAMFORD CT CAR SERVICE',
      title: 'Direct Service to Major Airports',
      description:
        "For passengers heading out of Connecticut, our car service Stamford to JFK offers a private route to one of the region's busiest airports. We also provide transportation to LGA, Newark, BDL, and HPN, giving travelers flexible options for both business and leisure trips.",
      description2:
        'This is a practical choice for frequent flyers, corporate travelers, and families who want a smooth transfer without the uncertainty of parking or rideshare delays. Our Stamford CT car service helps make long-distance airport travel feel controlled and straightforward.',
    },
    {
      id: 'special',
      railLabel: 'STAMFORD CT CAR SERVICE',
      title: 'Elevated Rides for Special Occasions',
      description:
        'For moments that call for something more refined, our limo Stamford CT and Stamford limo options bring a polished touch to private transportation. Whether you are booking a limo service Stamford CT for a formal event or arranging Stamford limo service for a guest pickup, our chauffeurs and vehicles are selected to create a more upscale experience. We also provide limo Stamford CT travel for clients who want comfort, presentation, and professionalism in one ride.',
    },
  ],
}

function buildLuxuryPages() {
  return Object.fromEntries(
    LUXURY_ROUTE_PAGES.map((entry) => {
      const key = typeof entry === 'string' ? entry : entry.key
      const variant = typeof entry === 'object' ? entry.variant : undefined
      const railLabel =
        (typeof entry === 'object' && entry.railLabel) || railLabelFor(key)
      return [key, buildLuxuryRouteCards({ railLabel, images: PAGE_IMAGES[key] ?? IMAGES, variant })]
    }),
  )
}

function buildCustomPages() {
  return Object.fromEntries(
    Object.entries(CUSTOM_ROUTE_CARDS).map(([key, cards]) => [
      key,
      withImages(cards, PAGE_IMAGES[key] ?? IMAGES),
    ]),
  )
}

/** Shared route card content — edit entries here when adding or updating landing pages. */
export const ROUTE_CARDS_PAGES = {
  ...buildLuxuryPages(),
  ...buildCustomPages(),
}

/** @param {string} pageKey */
export function getRouteCards(pageKey) {
  const cards = ROUTE_CARDS_PAGES[pageKey]
  if (!cards) throw new Error(`Unknown route cards page key: ${pageKey}`)
  return cards
}
