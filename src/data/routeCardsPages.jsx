import { buildLuxuryRouteCards } from '../utils/buildLuxuryRouteCards.js'
import { DESTINATION_PAGES } from './destinationPacks.js'
import img1 from '../assets/content-blocks/car-service1.webp'
import img2 from '../assets/content-blocks/car-service2.webp'
import miami1 from '../assets/content-blocks/miami-1.webp'
import miami3 from '../assets/content-blocks/miami-3.webp'
import connecticut1 from '../assets/content-blocks/connecticut-1.webp'
import connecticut2 from '../assets/content-blocks/connecticut-2.webp'
import newyork1 from '../assets/content-blocks/newyork-1.webp'
import newyork2 from '../assets/content-blocks/newyork-2.webp'
import newjersey1 from '../assets/content-blocks/newjersey-1.webp'
import newjersey2 from '../assets/content-blocks/newjersey-2.webp'
import boston1 from '../assets/content-blocks/boston-1.webp'
import boston2 from '../assets/content-blocks/boston-2.webp'
import chicago1 from '../assets/content-blocks/chicago-1.webp'
import chicago2 from '../assets/content-blocks/chicago-2.webp'
import milwaukee1 from '../assets/content-blocks/milwaukee-1.webp'
import milwaukee2 from '../assets/content-blocks/milwaukee-2.webp'
import atlanta1 from '../assets/content-blocks/atlanta-1.webp'
import atlanta2 from '../assets/content-blocks/atlanta-2.webp'
import texas1 from '../assets/content-blocks/texas-1.webp'
import texas2 from '../assets/content-blocks/texas-2.webp'
import florida1 from '../assets/content-blocks/florida-1.webp'
import florida2 from '../assets/content-blocks/florida-2.webp'
import journey1 from '../assets/content-blocks/journey-1.webp'
import journey2 from '../assets/content-blocks/journey-2.webp'
import journey3 from '../assets/content-blocks/journey-3.webp'
import journey4 from '../assets/content-blocks/journey-4.webp'
import journey5 from '../assets/content-blocks/journey-5.webp'

const IMAGES = [img1, img2]

/** Third content-block images — passenger journey / chauffeur vibe. */
const JOURNEY_IMAGES = [journey1, journey2, journey3, journey4, journey5]

const MIAMI_IMAGES = [miami1, miami3]

const DESTINATION_IMAGES = {
  connecticut: [connecticut1, connecticut2],
  newyork: [newyork1, newyork2],
  newjersey: [newjersey1, newjersey2],
  boston: [boston1, boston2],
  chicago: [chicago1, chicago2],
  milwaukee: [milwaukee1, milwaukee2],
  atlanta: [atlanta1, atlanta2],
  texas: [texas1, texas2],
  florida: [florida1, florida2],
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
  'milwaukee-car-service',
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
      id: 'professional',
      railLabel: 'BOSTON AIRPORT CAR SERVICE',
      title: 'Professional Logan Airport Car Service',
      description:
        'When you reserve Urban Elite chauffeur service at Logan Airport (BOS), a licensed professional chauffeur meets you and gets you to your Boston destination on time. We also provide Logan Airport car service to Providence, Nashua, Plymouth, city hotels, and the Boston Convention and Exhibition Center when you are in town for business.',
      description2:
        'Enjoy a one-hour grace period after landing so you have time to deboard and reach the pickup area. Share your flight number when you book and we track your progress in the air, adjusting for delays so transportation to and from Logan is the least of your worries.',
    },
    {
      id: 'terminals',
      railLabel: 'BOS AIRPORT CAR SERVICE',
      title: 'From Your Flight to Your Urban Elite Ride',
      description:
        'Your chauffeur waits at the Limousine Stand for your terminal: Terminal A (mostly Delta) — exit baggage through Door #A102, cross two lanes to the signed Limousine Stand. Terminal B (American and United) — proceed through Door #B102 or #B113 and through the garage. Terminal C international — elevator to the third floor, sky bridge to central parking, ground floor, left exit, cross three lanes to meet your chauffeur.',
      description2:
        'Terminal E international — exit through Door #E104 after Arrivals, cross two lanes to your chauffeur. Emirates guests meet at the Emirates Stand after Customs. You are greeted personally and delivered to your door in style — ideal transportation to and from Logan Airport.',
    },
    {
      id: 'layover',
      railLabel: 'BOS AIRPORT CAR SERVICE',
      title: 'The Ticket to a Leisurely Layover at Logan',
      description:
        'Facing a long layover? Book Logan Airport chauffeur service and explore the city. With Urban Elite hourly chauffeur service, a professional Boston driver picks you up soon after arrival and has you back in time for your connecting flight.',
      description2:
        'Downtown is about fifteen minutes away — on a four- or five-hour layover, visit the Museum of Fine Arts, Boston Common, or the New England Aquarium. Whether you live here or are visiting for the first time, we handle the day\'s travel so you make the most of every minute.',
    },
  ],
  'boston-chauffeur-service': [
    {
      id: 'reliable',
      railLabel: 'BOSTON CHAUFFEUR SERVICE',
      title: "Boston's Reliable Chauffeur Service",
      description:
        'Boston may be smaller than New York, but it has a distinctive culture the world recognizes — the accent, the sports teams, the Irish pubs, and neighborhoods with real character. Once you arrive, Urban Elite Boston chauffeur service takes you wherever you need to go with a locally knowledgeable professional behind the wheel.',
      description2:
        'Ask your chauffeur for the inside scoop on what to see and where to eat. With so much to explore, we are a polished alternative to a Boston taxi — calm, private, and ready for every stop on your itinerary.',
    },
    {
      id: 'style',
      railLabel: 'BOSTON CHAUFFEUR SERVICE',
      title: 'Getting About Boston in Style',
      description:
        'Boston is a beautiful city to explore, and one visit rarely covers it all. A stylish Urban Elite limousine or black car service helps you arrive on time and relaxed, wherever you choose to go across the city.',
      description2:
        'Traveling with a larger group? A business van keeps up to five together — ideal for last-minute prep before a meeting. Want something extra? First Class delivers you to a conference, restaurant, or theater in consummate style. We also provide luxurious private transfers between Boston and New York when your plans extend beyond the city.',
    },
    {
      id: 'flexibility',
      railLabel: 'BOSTON CHAUFFEUR SERVICE',
      title: 'Flexibility in Boston with Urban Elite',
      description:
        'Skip the scramble into downtown after landing. A reliable Boston airport transfer from Logan International gets you from your flight into the city — a stylish, comfortable alternative to public transit and taxi queues, with flight tracking, meet and greet, and baggage help.',
      description2:
        'Book your Boston chauffeur service online in minutes. Quotes are clear up front with no surprise add-ons during checkout, so you can plan travel costs with confidence — taxes and fees are spelled out before you confirm.',
    },
  ],
  'boston-limo-service': [
    {
      id: 'limousine',
      railLabel: 'BOSTON LIMO SERVICE',
      title: 'Limousine Service in Boston',
      description:
        "Boston, New England's largest and best-known city, is a center of history, culture, and higher learning — and one of the country's most important seaports and economic hubs. It is also home to biotechnology, life sciences, and high-tech companies that shape the global economy.",
      description2:
        'Business travelers know that getting around quickly and comfortably matters, especially for conferences and meetings. Traveling with a large party or need a specific vehicle class? Urban Elite Boston limo service offers a range of sizes and classes to match your plans.',
    },
    {
      id: 'black-car',
      railLabel: 'BOSTON LIMO SERVICE',
      title: 'Get Around Boston with a Black Car Hire',
      description:
        'Our Boston limo service is built around high standards: professional chauffeurs and a late-model fleet ready for solo trips or groups. Locally knowledgeable drivers get you where you need to be efficiently — without taxi lines or learning a new transit system.',
      description2:
        'Urban Elite limousine service takes you door to door at clear, affordable rates. We are here to keep every journey as stress-free and comfortable as possible.',
    },
    {
      id: 'airport',
      railLabel: 'BOSTON LIMO SERVICE',
      title: 'Airport Limo in Boston',
      description:
        'Need a ride to or from the airport? We cover Logan International and Worcester Regional with an efficient Boston airport limo transfer. Your chauffeur assists with luggage and gets you to your destination safely, on time, and in comfort.',
      description2:
        'Book your Boston airport car service online in minutes — choose destination, date, time, and vehicle class, and we handle the rest. Costs are calculated up front with no hidden fees, so you can budget with confidence. A polished taxi alternative designed to keep travel smooth.',
    },
  ],
  'connecticut-to-boston-car-service': [
    {
      id: 'escape',
      railLabel: 'CONNECTICUT TO BOSTON CAR SERVICE',
      title: 'Escape the City in Style',
      description:
        'Getting between Boston and New Haven is seamless with a private driver door to door. Travel across Massachusetts and into Connecticut in a premium vehicle without train delays, strikes, or crowded airports. Skip hunting for a New Haven taxi — relax or work in the back seat while we get you there hassle-free.',
      description2:
        'Our chauffeurs are New England locals, so you have peace of mind on the road. Whether you are visiting Boston for the Red Sox, its history, or Logan Airport access, a private city-to-city car service from New Haven is a convenient way to travel.',
    },
    {
      id: 'stress-free',
      railLabel: 'CONNECTICUT TO BOSTON CAR SERVICE',
      title: 'Stress-Free from Start to Finish',
      description:
        'Skip airports, train stations, and rental car counters. With our long-distance chauffeur service there are no crowds, queues, or transfers — just a private journey from one city to the next.',
      description2:
        'Travel in a top-class vehicle with a professional chauffeur. Wherever you are headed, you enjoy comfort and peace of mind, arriving refreshed, on time, and ready for what is next.',
    },
    {
      id: 'yale',
      railLabel: 'CONNECTICUT TO BOSTON CAR SERVICE',
      title: 'Travel Between Boston and Yale University',
      description:
        'New Haven is best known for Yale, its famous Ivy League university. Spend time exploring the grounds before strolling Hillhouse Avenue — once described by both Charles Dickens and Mark Twain as “the most beautiful street in America.”',
      description2:
        'Urban Elite premium New Haven limo and Connecticut to Boston car service covers tolls, gas, and taxes so you can travel with complete peace of mind. We also offer other city-to-city routes across New England when your plans extend beyond Boston.',
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
  'norwalk-ct-car-service': [
    {
      id: 'executive',
      railLabel: 'NORWALK CT CAR SERVICE',
      title: 'Executive Chauffeur Rides for Every Occasion in Fairfield County',
      description:
        'Choose Urban Elite as your Norwalk car service and move through Connecticut and the New York metro in premium comfort. Whether you are commuting to Stamford for business, arranging airport transfers, or planning a night at The Wall Street Theater or SoNo Collection, every trip is pre-booked and tailored to your needs.',
      description2:
        'Enjoy quiet privacy, WiFi, bottled water, and an immaculate executive car that arrives on your schedule. Local drivers who know Norwalk’s neighborhoods keep every ride efficient and comfortable. Flying out or meeting clients? Set up a dependable transfer to JFK or connect downtown with New York car service for events and lunches.',
    },
    {
      id: 'explore',
      railLabel: 'NORWALK CT CAR SERVICE',
      title: 'Explore Norwalk’s History, Entertainment, and Shoreline',
      description:
        'With Urban Elite Norwalk car service, visit the Maritime Aquarium, Lockwood-Mathews Mansion, or Calf Pasture Beach without parking hassles or on-demand wait times. Book hourly for a multi-stop day: Stepping Stones Museum, a concert at Levitt Pavilion, or dining and shopping along North Main Street.',
      description2:
        'For special occasions, reserve a chauffeur for wedding parties, wine tours, or nights on the town — and choose a vehicle that fits your group. When you want Connecticut’s coastal culture, we take scenic routes or connect you to New Haven and Greenwich for regional adventures.',
    },
    {
      id: 'transfers',
      railLabel: 'NORWALK CT CAR SERVICE',
      title: 'Reliable Transfers, Group Travel, and Intercity Comfort',
      description:
        'Start or end your journey with a Norwalk car service built for comfort, punctuality, and peace of mind. Airport runs are simple with real-time flight tracking, meet and greet, and help with every bag — so travel to LaGuardia, JFK, or Newark stays smooth.',
      description2:
        'Professionals count on us for client meetings in Westport or Greenwich; families appreciate direct rides for school events and day trips to Sleepy Hollow. Need to go further? Book New York chauffeur service for all-day, city-to-city, or hourly travel throughout the Tri-State area.',
    },
  ],
  'greenwich-ct-car-service': [
    {
      id: 'premium',
      railLabel: 'GREENWICH CT CAR SERVICE',
      title: 'Discover Premium Chauffeur Services in Greenwich',
      description:
        'Experience the convenience and luxury of Urban Elite chauffeur service in Greenwich, CT — a polished alternative to traditional taxis. Business Class vehicles, including Mercedes-Benz E-Class, deliver a comfortable, sophisticated ride with all-inclusive pricing and professional chauffeurs.',
      description2:
        'Enhance every visit with seamless travel across Fairfield County and into New York. Whether you need a quiet commute, a client pickup, or a night on Greenwich Avenue, we keep the journey calm and on schedule.',
    },
    {
      id: 'airport',
      railLabel: 'GREENWICH CT CAR SERVICE',
      title: 'Reliable Airport Transfers from Greenwich',
      description:
        'Whether you are heading to JFK, LaGuardia, Newark, Westchester County (HPN), or Bradley (BDL), Urban Elite keeps the trip smooth. Skip the unpredictability of taxis with premium airport transfers featuring real-time flight tracking and complimentary waiting time after landing.',
      description2:
        'Meet and greet, luggage help, and punctual chauffeurs make flying in or out of Greenwich straightforward — reliable comfort from curb to cabin.',
    },
    {
      id: 'explore',
      railLabel: 'GREENWICH CT CAR SERVICE',
      title: 'Explore the Historic Charm of Greenwich',
      description:
        'Greenwich is a captivating Connecticut town with waterfront neighborhoods, cultural attractions, and one of New England’s most walkable main streets. Visit the Bruce Museum, spend an afternoon at Greenwich Point, stroll Greenwich Avenue, or take in Long Island Sound views from Old Greenwich and Belle Haven.',
      description2:
        'With dining, shopping, and easy access to Manhattan when plans take you into the city, Greenwich has something for everyone. Urban Elite chauffeur service lets you experience it in style — a luxurious way to explore this famous Fairfield County destination.',
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
      id: 'reliable',
      railLabel: 'JFK AIRPORT CAR SERVICE',
      title: 'Your Reliable Car Service to and from JFK',
      description:
        'Booking Urban Elite professional car service to JFK gives you a ride tailored to your exact needs. Personalized meet and greet means your chauffeur meets you at baggage claim (domestic) or just outside Customs (international), helps with luggage, and takes you to your waiting vehicle — then to the front door of your destination.',
      description2:
        'Traveling with family? A Business Van or SUV Class vehicle seats up to five with room for bags. Experience late-model luxury like a Chevrolet Suburban or Cadillac Escalade — the perfect antidote after a flight. We are also a trusted NYC airport car service for connecting flights between JFK, LaGuardia, and Newark.',
    },
    {
      id: 'navigating',
      railLabel: 'JFK AIRPORT CAR SERVICE',
      title: 'Navigating JFK with Urban Elite',
      description:
        'JFK is the busiest airport on the East Coast, processing nearly 30 million passengers a year. With a hub that busy, car service to or from JFK takes the stress out of travel — private, professional guidance through the crowds no matter which of the six terminals you land at.',
      description2:
        'JFK is conveniently located for trips into NYC. Times Square is roughly an 18-mile journey, often about 40 minutes — time you can use to rest, make a call, or plan the day ahead in privacy and comfort.',
    },
    {
      id: 'nyc-beyond',
      railLabel: 'JFK AIRPORT CAR SERVICE',
      title: 'Car Service Across NYC and Beyond',
      description:
        'Book Urban Elite car service to JFK when you need a professional ride to an outbound flight — and we will be there to pick you up when you return. Our trusted service takes you from JFK across the city and beyond.',
      description2:
        'Need a transfer between airports for a connecting flight? Count on us for JFK to LaGuardia, Newark to JFK, and other NYC-area airport links — experience and professionalism every mile.',
    },
  ],
  'lga-airport-car-service': [
    {
      id: 'book',
      railLabel: 'LGA AIRPORT CAR SERVICE',
      title: 'Book Your Reliable Car Service for LaGuardia Airport (LGA)',
      description:
        'Head straight from the airport to your hotel — or to the Theatre District, a restaurant, or a private residence. Wherever you are going, Urban Elite covers the last miles of your journey. With limousine service at LaGuardia, you get flight monitoring and delay adjustment so weather or mechanical delays do not leave you without a ride.',
      description2:
        'Your chauffeur waits a full hour after you land, so you can deboard and clear arrivals without rushing. At the pickup zone, we assist with luggage and take you into the city in a high-end vehicle. Skip the NYC taxi scramble — reserve an affordable, professional New York car service for LaGuardia from Urban Elite.',
    },
    {
      id: 'getting-through',
      railLabel: 'LGA AIRPORT CAR SERVICE',
      title: 'Getting Through LaGuardia with Urban Elite',
      description:
        'Travel should feel like an adventure, not a stressful scramble. Alongside excellent car service across New York, Urban Elite offers trusted LaGuardia airport transfers. For arriving flights, your chauffeur meets you with a coordinated greet after you collect your bags — then escorts you to a comfortable waiting vehicle.',
      description2:
        'Departing guests are met curbside for a calm drop-off at the terminal. Connecting between airports? We handle inter-airport transfers with the same punctual, professional standard so you stay on schedule between LGA, JFK, and Newark.',
    },
    {
      id: 'layover',
      railLabel: 'LGA AIRPORT CAR SERVICE',
      title: 'Spend Your Time at LaGuardia Wisely',
      description:
        'Facing a long stopover? Stick around the airport, or reserve Urban Elite hourly chauffeur service and go landside for sightseeing. Book enough time for a quick tour — Empire State Building, Rockefeller Center, Brooklyn Bridge — then return to LGA for your departing flight.',
      description2:
        'Short on time or unable to leave the airport? Enjoy LGA restaurants and quieter lounge spaces to work, rest, or make calls before the next leg. Either way, we help you make the most of every minute around LaGuardia.',
    },
  ],
  'miami-car-service': [
    {
      id: 'private-ride',
      railLabel: 'MIAMI CAR SERVICE',
      title: 'Your Private Ride with Urban Elite',
      description:
        'Miami is one of America\'s most celebrated destinations — a picturesque city packed with nightlife, world-class dining, and scenery at every turn. A professional black car service in Miami from Urban Elite gets you wherever you need to be in complete comfort and style, and gives business travelers the polished arrival that makes a real impression.',
      description2:
        'Traveling with a larger party? A business van keeps you and four others together for the ride. Looking for something more refined? Our First Class service pairs elegance with late-model luxury vehicles. Every Urban Elite chauffeur in Miami is a local professional, so you can relax knowing you will arrive exactly where you need to be, right on time.',
    },
    {
      id: 'explore',
      railLabel: 'MIAMI CAR SERVICE',
      title: 'Explore Miami with a Private Car Service',
      description:
        'Door-to-door limousine service in Miami is the perfect way to see the city on your own terms. Ride down to South Beach to sample outstanding food and soak up the scene around you. Miami is famous for its blend of cultures, and the local cuisine reflects it — fantastic Haitian, Cuban, and South American restaurants are everywhere, and each one offers a real taste of the city.',
      description2:
        'Whatever your plans, Urban Elite car service is the ideal way to get around 24 hours a day, 7 days a week — especially with our by-the-hour Miami car service, which keeps a chauffeur on standby for multi-stop days. Leave the ground transportation to us and concentrate on enjoying yourself.',
    },
    {
      id: 'airport',
      railLabel: 'MIAMI CAR SERVICE',
      title: 'Get to Miami International Airport (MIA) in a Private Car',
      description:
        'Miami is a sprawling metropolis that stretches for miles and is no stranger to extreme weather — which makes a private black car service the smartest way to get across it. Whether you arrive on business or for leisure, a high-quality Miami airport car service from Urban Elite delivers you to your exact accommodation efficiently and with minimal fuss.',
      description2:
        'Your sharply attired chauffeur meets you in Arrivals, helps with your bags, and settles you into your waiting vehicle — exactly what you need to unwind after a long flight. Book your professional Miami taxi alternative online or by phone: the price you see at booking is the price you pay, with taxes, fees, and gratuities included.',
    },
  ],
  'new-haven-ct-car-service': [
    {
      id: 'nyc',
      railLabel: 'NEW HAVEN CT CAR SERVICE',
      title: 'New Haven Car Service ',
      description:
        'Wondering how to get from New Haven to NYC or vice versa? Urban Elite professional car service from NYC to New Haven means you arrive in Connecticut relaxed and ready for the day ahead. New Haven is home to Yale, one of the most famous academic institutions on the planet — and if you are a student returning after the holidays, we can help.',
      description2:
        'Airport transfers from JFK or LaGuardia to New Haven get you home quickly. Live in New Haven and heading into the Big Apple for a celebratory evening? Our Connecticut to NYC car service is the finishing touch — travel within Manhattan to a restaurant or nightspot, then ride back in stylish Connecticut limo service.',
    },
    {
      id: 'stress-free',
      railLabel: 'NEW HAVEN CT CAR SERVICE',
      title: 'Stress-Free from Start to Finish',
      description:
        'Skip airports, train stations, and rental car counters. With our long-distance chauffeur service there are no crowds, queues, or transfers — just a private journey from one city to the next.',
      description2:
        'Travel in a top-class vehicle driven by a professional chauffeur. Wherever you are headed, you enjoy comfort and peace of mind, arriving refreshed, on time, and ready for what is next.',
    },
    {
      id: 'northeast',
      railLabel: 'NEW HAVEN CT CAR SERVICE',
      title: 'Long Distance Car Service Across the Northeast',
      description:
        'Urban Elite is a clear, reliable choice for serene, stress-free car service from New York to New Haven — and the same standard across New York and beyond. We operate a reliable and professional car service for long-distance routes throughout the region.',
      description2:
        'Book ahead for a private ride that keeps intercity travel calm, punctual, and comfortable end to end.',
    },
  ],
  'newark-airport-service': [
    {
      id: 'quality',
      railLabel: 'NEWARK AIRPORT SERVICE',
      title: 'Urban Elite Quality for EWR',
      description:
        'Urban Elite delivers premium Newark airport shuttle and transfer service. Just touched down at EWR after a long flight? The next step is getting to your front door — arrive in peace and quiet with a private Newark airport transfer and the personal space you need to unwind.',
      description2:
        'Choose flexibility with a variety of vehicles that suit your needs. Traveling with family or friends? Experience the comfort of a Chevrolet Suburban, Cadillac Escalade, or similar SUV or van. Local professional chauffeurs track your flight in the air and adjust for delays. Home, hotel, or workplace — we get you there in style.',
    },
    {
      id: 'passing-through',
      railLabel: 'NEWARK AIRPORT SERVICE',
      title: 'Passing Through Newark Liberty International',
      description:
        'Newark Liberty International Airport hosts over twenty million passengers a year, making it one of the busiest hubs on the East Coast. An Urban Elite Newark airport transfer takes the stress and confusion out of this bustling airfield.',
      description2:
        'Your chauffeur greets you at baggage claim (domestic) or just outside Customs (international), then guides you to a waiting late-model vehicle for a seamless ride to your destination. Landing at Newark and connecting nearby? Depend on us for EWR to JFK, LaGuardia to Newark, and other inter-airport transfers.',
    },
    {
      id: 'region',
      railLabel: 'NEWARK AIRPORT SERVICE',
      title: 'Newark Airport Transfer Across the Region',
      description:
        'Booking a Newark airport transfer with Urban Elite means being dropped at your precise destination — anywhere in the New York metropolitan area and beyond. From Manhattan and New Jersey to Connecticut and Long Island, we are a reliable EWR transportation solution for business and leisure travel.',
      description2:
        'Door-to-door service, clear pickup coordination, and professional chauffeurs keep every Newark Airport ride calm, punctual, and comfortable.',
    },
  ],
  'stamford-ct-car-service': [
    {
      id: 'travel',
      railLabel: 'STAMFORD CT CAR SERVICE',
      title: 'A New Way to Travel in Fairfield County',
      description:
        'If your Stamford calendar is packed with client meetings, Broadway shows at the Palace Theatre, or college visits at UConn Stamford, Urban Elite luxury chauffeur service changes how you plan. Skip scrambling for a last-minute ride and book your Stamford car service in advance.',
      description2:
        'Every quote is provided up front, so fare surprises are a thing of the past. When your plans include a flight, we handle the airport journey with a reliable JFK transfer that includes flight tracking, meet and greet, and luggage support — any hour of the day.',
    },
    {
      id: 'explore',
      railLabel: 'STAMFORD CT CAR SERVICE',
      title: "See Stamford's Art, Waterfront, and Events Without Worry",
      description:
        'Navigating Stamford with Urban Elite means you reach your destination without parking headaches or rideshare uncertainty. Whether it is a morning at the Stamford Museum & Nature Center, lunch at Harbor Point, or an evening at Curtain Call, your car waits as long as you need and adapts when plans shift.',
      description2:
        'Arrange multi-hour bookings for a day of stops, or plan a group outing to Cove Island Park. When regional travel is in order, connect easily to Manhattan with New York car service — work, relax, or enjoy the Connecticut countryside every mile of the way.',
    },
    {
      id: 'business',
      railLabel: 'STAMFORD CT CAR SERVICE',
      title: 'Custom Business Support, Group Rides, and Easy Airport Transfers',
      description:
        'For pitch meetings or multi-stop days across Fairfield County, Urban Elite offers flexible bookings and support for large parties with sedans, SUVs, or executive vans. Drivers adapt routes on short notice when schedules change or delays pop up.',
      description2:
        'Travelers from Westchester, locals landing at LaGuardia, and families in town get a smooth process with meet and greet, real-time updates, and hourly options. Coordinate longer plans or executive arrivals with trusted New York chauffeur service — local expertise with every ride.',
    },
  ],
  'nyc-limo-service': [
    {
      id: 'occasions',
      railLabel: 'NYC LIMO SERVICE',
      title: 'NYC Limo Service for Any Occasion',
      description:
        'Urban Elite limo service in NYC is ready for nearly any moment that calls for a polished arrival. We finish important days in style, bring loved ones home safely, and get you to the terminal with time to spare. Count on luxury, reliable, and professional New York limousine service for:',
      listItems: [
        'Weddings',
        'Anniversary and birthday celebrations',
        'Sporting events',
        'Prom nights',
      ],
      description2:
        'Rates are clear at booking — the quote you confirm is the price you pay. Prefer something extra special? Step into First Class or an Escalade limo and cruise Manhattan\'s iconic streets in a late-model luxury vehicle built for a true New York City black car experience.',
    },
    {
      id: 'quality',
      railLabel: 'NYC LIMO SERVICE',
      title: 'Quality You Can Rely On',
      description:
        'Booking NYC limo service with Urban Elite means a ride held to a high professional standard. Your experienced chauffeur is supported by a team focused on timing, routing, and a calm cabin from the first mile to the last.',
      description2:
        'Heading to MetLife Stadium with friends for a Giants game? Choose an SUV or business van with room for your group without giving up comfort or style — including options like a Cadillac Escalade, full-size SUV, or similar. Flying out? Our NYC airport transportation keeps JFK, LaGuardia, and Newark transfers punctual so you can rest easy about making your flight.',
    },
    {
      id: 'coverage',
      railLabel: 'NYC LIMO SERVICE',
      title: 'Limo Hire Across the New York Area',
      description:
        'Urban Elite\'s limo service in NYC is built to take the stress out of getting around. Whatever the occasion or the hour, we aim to deliver you rested and ready. Need a limousine to Manhattan for an important meeting? We\'re there. Planning a polished prom ride in Brooklyn? You can count on us.',
      description2:
        'We also handle longer private journeys across the metro area — including Manhattan, Brooklyn, Queens, the Bronx, Staten Island, Westchester, and New Jersey — so every trip stays peaceful, private, and on schedule.',
    },
  ],
  'new-york-car-service': [
    {
      id: 'rates',
      railLabel: 'NEW YORK CAR SERVICE',
      title: 'Car Service in New York at Reasonable Rates',
      description:
        'Few cities are as instantly recognizable as New York — a place known worldwide for its restaurants, hotels, museums, and parks. Urban Elite New York car service gets you where you need to go in comfort and style, without the unpredictability of a street hail.',
      description2:
        'A trusted chauffeur helps you arrive polished and on time for business or leisure. Prefer to travel as a group? A business van or SUV keeps colleagues together so you can prepare on the way.',
    },
    {
      id: 'airport',
      railLabel: 'NEW YORK CAR SERVICE',
      title: (
        <>
          Airport Transportation for
          <br />
          New York
        </>
      ),
      description:
        'A private black car transfer to Newark, JFK, or LaGuardia is available at a clear, reasonable rate — an ideal alternative to a New York taxi whether you are flying for business, pleasure, or a mix of both.',
      description2:
        'Your chauffeur arrives early with luggage help and smart routing, so airport travel stays calm instead of racing the clock.',
    },
    {
      id: 'day-trips',
      railLabel: 'NEW YORK CAR SERVICE',
      title: 'Day Trips from New York',
      description:
        'Urban Elite can also take you beyond the Big Apple. Skip crowded trains and airport lines and ride the East Coast with a professional chauffeur — space to work, relax, or travel with family in a top-tier vehicle.',
      description2:
        'Start a summer getaway with a comfortable ride to the Hamptons, use the cabin for focused work on the drive to Philadelphia, or cross state lines with private car service toward Washington, D.C. Door-to-door comfort beats a cramped seat on mass transit every time.',
    },
  ],
  'manhattan-car-service': [
    {
      id: 'reliable',
      railLabel: 'MANHATTAN CAR SERVICE',
      title: 'Your Reliable Car Service in Manhattan',
      description:
        'After a long flight, you want a straight path from the terminal to your hotel — no delays, no curb chaos. Urban Elite Manhattan limousine and car service covers landings at JFK, LaGuardia, and Newark with professional chauffeurs who track your flight and adjust for unexpected delays.',
      description2:
        'Wherever you are arriving from, you get the same high standard of reliability. For the rest of your stay in Manhattan, leave the logistics to us so you can focus on the city, not the traffic.',
    },
    {
      id: 'black-car',
      railLabel: 'MANHATTAN CAR SERVICE',
      title: "Manhattan's Trusted Black Car Service",
      description:
        'Getting around Manhattan\'s busy streets can be tricky, as any seasoned visitor knows. Our chauffeurs know the borough well — feel free to ask for tips on where to go and where to eat while we get you there with ease and comfort.',
      description2:
        'Book hourly Manhattan car service when you want a driver on standby for flexible multi-stop days. For special occasions, a private Manhattan chauffeur adds polish to an important meeting, anniversary dinner, or birthday celebration.',
    },
    {
      id: 'airports',
      railLabel: 'MANHATTAN CAR SERVICE',
      title: 'Your JFK, LaGuardia, or Newark Car Service',
      description:
        'Getting to or from one of New York\'s busy airports can be stressful — whether it is your first visit or your hundredth. Trust that leg of the trip to an experienced Urban Elite professional.',
      description2:
        'Reserve a Manhattan airport transfer online in minutes, or call our support team anytime with questions about your booking. We are available around the clock to help — book your trusted Manhattan car service today.',
    },
  ],
}

/** Evenly rotate the 5 journey photos as each page's third content-block image. */
const JOURNEY_BY_PAGE = (() => {
  const keys = [
    ...LUXURY_ROUTE_PAGES.map((entry) => (typeof entry === 'string' ? entry : entry.key)),
    ...Object.keys(CUSTOM_ROUTE_CARDS),
    ...Object.keys(PAGE_IMAGES),
  ]
  return Object.fromEntries(
    [...new Set(keys)]
      .sort()
      .map((key, index) => [key, JOURNEY_IMAGES[index % JOURNEY_IMAGES.length]]),
  )
})()

/** @param {string[]} base @param {string} pageKey */
function imagesForPage(base, pageKey) {
  const images = [...base]
  images[2] = JOURNEY_BY_PAGE[pageKey] ?? JOURNEY_IMAGES[0]
  return images
}

function buildLuxuryPages() {
  return Object.fromEntries(
    LUXURY_ROUTE_PAGES.map((entry) => {
      const key = typeof entry === 'string' ? entry : entry.key
      const variant = typeof entry === 'object' ? entry.variant : undefined
      const railLabel =
        (typeof entry === 'object' && entry.railLabel) || railLabelFor(key)
      const images = imagesForPage(PAGE_IMAGES[key] ?? IMAGES, key)
      return [key, buildLuxuryRouteCards({ railLabel, images, variant })]
    }),
  )
}

function buildCustomPages() {
  return Object.fromEntries(
    Object.entries(CUSTOM_ROUTE_CARDS).map(([key, cards]) => [
      key,
      withImages(cards, imagesForPage(PAGE_IMAGES[key] ?? IMAGES, key)),
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
