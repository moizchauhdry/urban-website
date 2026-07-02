import { buildLuxuryRouteCards } from '../utils/buildLuxuryRouteCards.js'
import img1_connecticut from '../assets/connecticut/content-blocks/car-service1.webp'
import img2_connecticut from '../assets/connecticut/content-blocks/car-service2.webp'
import img3_connecticut from '../assets/connecticut/content-blocks/car-service3.webp'
import img1_florida from '../assets/florida/content-blocks/car-service1.webp'
import img2_florida from '../assets/florida/content-blocks/car-service2.webp'
import img3_florida from '../assets/florida/content-blocks/car-service3.webp'
import img1_chicago_chauffeur_service from '../assets/illinois/chicago-chauffeur-service/content-blocks/car-service1.webp'
import img2_chicago_chauffeur_service from '../assets/illinois/chicago-chauffeur-service/content-blocks/car-service2.webp'
import img3_chicago_chauffeur_service from '../assets/illinois/chicago-chauffeur-service/content-blocks/car-service3.webp'
import img1_chicago_limo_service from '../assets/illinois/chicago-limo-service/content-blocks/car-service1.webp'
import img2_chicago_limo_service from '../assets/illinois/chicago-limo-service/content-blocks/car-service2.webp'
import img3_chicago_limo_service from '../assets/illinois/chicago-limo-service/content-blocks/car-service3.webp'
import img1_illinois from '../assets/illinois/illinois/content-blocks/car-service1.webp'
import img2_illinois from '../assets/illinois/illinois/content-blocks/car-service2.webp'
import img3_illinois from '../assets/illinois/illinois/content-blocks/car-service3.webp'
import img1_newyork from '../assets/newyork/content-blocks/car-service1.webp'
import img2_newyork from '../assets/newyork/content-blocks/car-service2.webp'
import img3_newyork from '../assets/newyork/content-blocks/car-service3.webp'
import img1_atlanta_car_service from '../assets/other-pages/atlanta-car-service/content-blocks/car-service1.webp'
import img2_atlanta_car_service from '../assets/other-pages/atlanta-car-service/content-blocks/car-service2.webp'
import img3_atlanta_car_service from '../assets/other-pages/atlanta-car-service/content-blocks/car-service3.webp'
import img1_bdl_airport_car_service from '../assets/other-pages/bdl-airport-car-service/content-blocks/car-service1.webp'
import img2_bdl_airport_car_service from '../assets/other-pages/bdl-airport-car-service/content-blocks/car-service2.webp'
import img3_bdl_airport_car_service from '../assets/other-pages/bdl-airport-car-service/content-blocks/car-service3.webp'
import img1_boston_car_service from '../assets/other-pages/boston-car-service/content-blocks/car-service1.webp'
import img2_boston_car_service from '../assets/other-pages/boston-car-service/content-blocks/car-service2.webp'
import img3_boston_car_service from '../assets/other-pages/boston-car-service/content-blocks/car-service3.webp'
import img1_chicago_airport_car_service from '../assets/other-pages/chicago-airport-car-service/content-blocks/car-service1.webp'
import img2_chicago_airport_car_service from '../assets/other-pages/chicago-airport-car-service/content-blocks/car-service2.webp'
import img3_chicago_airport_car_service from '../assets/other-pages/chicago-airport-car-service/content-blocks/car-service3.webp'
import img1_connecticut_car_service from '../assets/other-pages/connecticut-car-service/content-blocks/car-service1.webp'
import img2_connecticut_car_service from '../assets/other-pages/connecticut-car-service/content-blocks/car-service2.webp'
import img3_connecticut_car_service from '../assets/other-pages/connecticut-car-service/content-blocks/car-service3.webp'
import img1_ct_to_jfk_airport_car_service from '../assets/other-pages/ct-to-jfk-airport-car-service/content-blocks/car-service1.webp'
import img2_ct_to_jfk_airport_car_service from '../assets/other-pages/ct-to-jfk-airport-car-service/content-blocks/car-service2.webp'
import img3_ct_to_jfk_airport_car_service from '../assets/other-pages/ct-to-jfk-airport-car-service/content-blocks/car-service3.webp'
import img1_danbury_ct_car_service from '../assets/other-pages/danbury-ct-car-service/content-blocks/car-service1.webp'
import img2_danbury_ct_car_service from '../assets/other-pages/danbury-ct-car-service/content-blocks/car-service2.webp'
import img3_danbury_ct_car_service from '../assets/other-pages/danbury-ct-car-service/content-blocks/car-service3.webp'
import img1_fairfield_ct_car_service from '../assets/other-pages/fairfield-ct-car-service/content-blocks/car-service1.webp'
import img2_fairfield_ct_car_service from '../assets/other-pages/fairfield-ct-car-service/content-blocks/car-service2.webp'
import img3_fairfield_ct_car_service from '../assets/other-pages/fairfield-ct-car-service/content-blocks/car-service3.webp'
import img1_florida_car_service from '../assets/other-pages/florida-car-service/content-blocks/car-service1.webp'
import img2_florida_car_service from '../assets/other-pages/florida-car-service/content-blocks/car-service2.webp'
import img3_florida_car_service from '../assets/other-pages/florida-car-service/content-blocks/car-service3.webp'
import img1_greenwich_ct_car_service from '../assets/other-pages/greenwich-ct-car-service/content-blocks/car-service1.webp'
import img2_greenwich_ct_car_service from '../assets/other-pages/greenwich-ct-car-service/content-blocks/car-service2.webp'
import img3_greenwich_ct_car_service from '../assets/other-pages/greenwich-ct-car-service/content-blocks/car-service3.webp'
import img1_hartford_ct_car_service from '../assets/other-pages/hartford-ct-car-service/content-blocks/car-service1.webp'
import img2_hartford_ct_car_service from '../assets/other-pages/hartford-ct-car-service/content-blocks/car-service2.webp'
import img3_hartford_ct_car_service from '../assets/other-pages/hartford-ct-car-service/content-blocks/car-service3.webp'
import img1_illinois_car_service from '../assets/other-pages/illinois-car-service/content-blocks/car-service1.webp'
import img2_illinois_car_service from '../assets/other-pages/illinois-car-service/content-blocks/car-service2.webp'
import img3_illinois_car_service from '../assets/other-pages/illinois-car-service/content-blocks/car-service3.webp'
import img1_jfk_airport_car_service from '../assets/other-pages/jfk-airport-car-service/content-blocks/car-service1.webp'
import img2_jfk_airport_car_service from '../assets/other-pages/jfk-airport-car-service/content-blocks/car-service2.webp'
import img3_jfk_airport_car_service from '../assets/other-pages/jfk-airport-car-service/content-blocks/car-service3.webp'
import img1_lga_airport_car_service from '../assets/other-pages/lga-airport-car-service/content-blocks/car-service1.webp'
import img2_lga_airport_car_service from '../assets/other-pages/lga-airport-car-service/content-blocks/car-service2.webp'
import img3_lga_airport_car_service from '../assets/other-pages/lga-airport-car-service/content-blocks/car-service3.webp'
import img1_luxury_new_jersey_car_service from '../assets/other-pages/luxury-new-jersey-car-service/content-blocks/car-service1.webp'
import img2_luxury_new_jersey_car_service from '../assets/other-pages/luxury-new-jersey-car-service/content-blocks/car-service2.webp'
import img3_luxury_new_jersey_car_service from '../assets/other-pages/luxury-new-jersey-car-service/content-blocks/car-service3.webp'
import img1_manhattan_car_service from '../assets/other-pages/manhattan-car-service/content-blocks/car-service1.webp'
import img2_manhattan_car_service from '../assets/other-pages/manhattan-car-service/content-blocks/car-service2.webp'
import img3_manhattan_car_service from '../assets/other-pages/manhattan-car-service/content-blocks/car-service3.webp'
import img1_miami_airport_car_service from '../assets/other-pages/miami-airport-car-service/content-blocks/car-service1.webp'
import img2_miami_airport_car_service from '../assets/other-pages/miami-airport-car-service/content-blocks/car-service2.webp'
import img3_miami_airport_car_service from '../assets/other-pages/miami-airport-car-service/content-blocks/car-service3.webp'
import img1_miami_airport_limo_service from '../assets/other-pages/miami-airport-limo-service/content-blocks/car-service1.webp'
import img2_miami_airport_limo_service from '../assets/other-pages/miami-airport-limo-service/content-blocks/car-service2.webp'
import img3_miami_airport_limo_service from '../assets/other-pages/miami-airport-limo-service/content-blocks/car-service3.webp'
import img1_miami_car_service from '../assets/other-pages/miami-car-service/content-blocks/car-service1.webp'
import img2_miami_car_service from '../assets/other-pages/miami-car-service/content-blocks/car-service2.webp'
import img3_miami_car_service from '../assets/other-pages/miami-car-service/content-blocks/car-service3.webp'
import img1_miami_chauffeur_service from '../assets/other-pages/miami-chauffeur-service/content-blocks/car-service1.webp'
import img2_miami_chauffeur_service from '../assets/other-pages/miami-chauffeur-service/content-blocks/car-service2.webp'
import img3_miami_chauffeur_service from '../assets/other-pages/miami-chauffeur-service/content-blocks/car-service3.webp'
import img1_miami_to_fort_lauderdale_car_service from '../assets/other-pages/miami-to-fort-lauderdale-car-service/content-blocks/car-service1.webp'
import img2_miami_to_fort_lauderdale_car_service from '../assets/other-pages/miami-to-fort-lauderdale-car-service/content-blocks/car-service2.webp'
import img3_miami_to_fort_lauderdale_car_service from '../assets/other-pages/miami-to-fort-lauderdale-car-service/content-blocks/car-service3.webp'
import img1_miami_to_naples_car_service from '../assets/other-pages/miami-to-naples-car-service/content-blocks/car-service1.webp'
import img2_miami_to_naples_car_service from '../assets/other-pages/miami-to-naples-car-service/content-blocks/car-service2.webp'
import img3_miami_to_naples_car_service from '../assets/other-pages/miami-to-naples-car-service/content-blocks/car-service3.webp'
import img1_miami_to_orlando_car_service from '../assets/other-pages/miami-to-orlando-car-service/content-blocks/car-service1.webp'
import img2_miami_to_orlando_car_service from '../assets/other-pages/miami-to-orlando-car-service/content-blocks/car-service2.webp'
import img3_miami_to_orlando_car_service from '../assets/other-pages/miami-to-orlando-car-service/content-blocks/car-service3.webp'
import img1_milwaukee_airport_limo_service from '../assets/other-pages/milwaukee-airport-limo-service/content-blocks/car-service1.webp'
import img2_milwaukee_airport_limo_service from '../assets/other-pages/milwaukee-airport-limo-service/content-blocks/car-service2.webp'
import img3_milwaukee_airport_limo_service from '../assets/other-pages/milwaukee-airport-limo-service/content-blocks/car-service3.webp'
import img1_milwaukee_car_service from '../assets/other-pages/milwaukee-car-service/content-blocks/car-service1.webp'
import img2_milwaukee_car_service from '../assets/other-pages/milwaukee-car-service/content-blocks/car-service2.webp'
import img3_milwaukee_car_service from '../assets/other-pages/milwaukee-car-service/content-blocks/car-service3.webp'
import img1_milwaukee_chauffeur_service from '../assets/other-pages/milwaukee-chauffeur-service/content-blocks/car-service1.webp'
import img2_milwaukee_chauffeur_service from '../assets/other-pages/milwaukee-chauffeur-service/content-blocks/car-service2.webp'
import img3_milwaukee_chauffeur_service from '../assets/other-pages/milwaukee-chauffeur-service/content-blocks/car-service3.webp'
import img1_milwaukee_limo_service from '../assets/other-pages/milwaukee-limo-service/content-blocks/car-service1.webp'
import img2_milwaukee_limo_service from '../assets/other-pages/milwaukee-limo-service/content-blocks/car-service2.webp'
import img3_milwaukee_limo_service from '../assets/other-pages/milwaukee-limo-service/content-blocks/car-service3.webp'
import img1_milwaukee_to_chicago_car_service from '../assets/other-pages/milwaukee-to-chicago-car-service/content-blocks/car-service1.webp'
import img2_milwaukee_to_chicago_car_service from '../assets/other-pages/milwaukee-to-chicago-car-service/content-blocks/car-service2.webp'
import img3_milwaukee_to_chicago_car_service from '../assets/other-pages/milwaukee-to-chicago-car-service/content-blocks/car-service3.webp'
import img1_milwaukee_to_ohare_car_service from '../assets/other-pages/milwaukee-to-ohare-car-service/content-blocks/car-service1.webp'
import img2_milwaukee_to_ohare_car_service from '../assets/other-pages/milwaukee-to-ohare-car-service/content-blocks/car-service2.webp'
import img3_milwaukee_to_ohare_car_service from '../assets/other-pages/milwaukee-to-ohare-car-service/content-blocks/car-service3.webp'
import img1_new_haven_ct_car_service from '../assets/other-pages/new-haven-ct-car-service/content-blocks/car-service1.webp'
import img2_new_haven_ct_car_service from '../assets/other-pages/new-haven-ct-car-service/content-blocks/car-service2.webp'
import img3_new_haven_ct_car_service from '../assets/other-pages/new-haven-ct-car-service/content-blocks/car-service3.webp'
import img1_new_york_car_service from '../assets/other-pages/new-york-car-service/content-blocks/car-service1.webp'
import img2_new_york_car_service from '../assets/other-pages/new-york-car-service/content-blocks/car-service2.webp'
import img3_new_york_car_service from '../assets/other-pages/new-york-car-service/content-blocks/car-service3.webp'
import img1_newark_airport_service from '../assets/other-pages/newark-airport-service/content-blocks/car-service1.webp'
import img2_newark_airport_service from '../assets/other-pages/newark-airport-service/content-blocks/car-service2.webp'
import img3_newark_airport_service from '../assets/other-pages/newark-airport-service/content-blocks/car-service3.webp'
import img1_norwalk_ct_car_service from '../assets/other-pages/norwalk-ct-car-service/content-blocks/car-service1.webp'
import img2_norwalk_ct_car_service from '../assets/other-pages/norwalk-ct-car-service/content-blocks/car-service2.webp'
import img3_norwalk_ct_car_service from '../assets/other-pages/norwalk-ct-car-service/content-blocks/car-service3.webp'
import img1_nyc_limo_service from '../assets/other-pages/nyc-limo-service/content-blocks/car-service1.webp'
import img2_nyc_limo_service from '../assets/other-pages/nyc-limo-service/content-blocks/car-service2.webp'
import img3_nyc_limo_service from '../assets/other-pages/nyc-limo-service/content-blocks/car-service3.webp'
import img1_stamford_ct_car_service from '../assets/other-pages/stamford-ct-car-service/content-blocks/car-service1.webp'
import img2_stamford_ct_car_service from '../assets/other-pages/stamford-ct-car-service/content-blocks/car-service2.webp'
import img3_stamford_ct_car_service from '../assets/other-pages/stamford-ct-car-service/content-blocks/car-service3.webp'
import img1_texas_car_service from '../assets/other-pages/texas-car-service/content-blocks/car-service1.webp'
import img2_texas_car_service from '../assets/other-pages/texas-car-service/content-blocks/car-service2.webp'
import img3_texas_car_service from '../assets/other-pages/texas-car-service/content-blocks/car-service3.webp'
import img1_west_palm_beach_to_miami_limo_service from '../assets/other-pages/west-palm-beach-to-miami-limo-service/content-blocks/car-service1.webp'
import img2_west_palm_beach_to_miami_limo_service from '../assets/other-pages/west-palm-beach-to-miami-limo-service/content-blocks/car-service2.webp'
import img3_west_palm_beach_to_miami_limo_service from '../assets/other-pages/west-palm-beach-to-miami-limo-service/content-blocks/car-service3.webp'
import img1_westchester_county_car_service from '../assets/other-pages/westchester-county-car-service/content-blocks/car-service1.webp'
import img2_westchester_county_car_service from '../assets/other-pages/westchester-county-car-service/content-blocks/car-service2.webp'
import img3_westchester_county_car_service from '../assets/other-pages/westchester-county-car-service/content-blocks/car-service3.webp'
import img1_wisconsin_car_service from '../assets/other-pages/wisconsin-car-service/content-blocks/car-service1.webp'
import img2_wisconsin_car_service from '../assets/other-pages/wisconsin-car-service/content-blocks/car-service2.webp'
import img3_wisconsin_car_service from '../assets/other-pages/wisconsin-car-service/content-blocks/car-service3.webp'

/** Shared route card content — edit entries here when adding or updating landing pages. */
export const ROUTE_CARDS_PAGES = {
  'connecticut': [
  {
    id: 'everyday',
    railLabel: 'CONNECTICUT CAR SERVICE',
    title: 'Connecticut Car Service for Everyday Travel',
    description:
      'A premium Connecticut car service should feel like having someone you trust behind the wheel. Many travelers choose us for calm, comfortable and predictable rides throughout Connecticut.',
    description2:
      'Whether you are heading to work, meeting friends or planning a family outing, you get a clean car, a licensed driver and a smooth trip without the usual rush or confusion.',
    imageSrc: img1_connecticut,
  },
  {
    id: 'airport',
    railLabel: 'CONNECTICUT CAR SERVICE',
    title: 'Airport Transportation for Connecticut',
    description:
      'Flying already comes with enough pressure so your airport ride should not add more stress. Our service is built around reliable pickups, luggage help and smart routing.',
    description2:
      'Your driver arrives early so you can relax instead of racing the clock. Business travelers, families and frequent flyers all get the same calm, professional experience.',
    imageSrc: img2_connecticut,
  },
  {
    id: 'long-distance',
    railLabel: 'CONNECTICUT CAR SERVICE',
    title: 'Long Distance & City-to-City Rides',
    description:
      'Long distance travel should feel calm, not overwhelming. When you book Connecticut car service for intercity or airport transfers, you get space for luggage and a comfortable cabin.',
    description2:
      'Licensed chauffeurs keep the full journey simple from pickup to drop-off, whether across Connecticut or connecting to a major hub.',
    imageSrc: img3_connecticut,
  },
],
  'florida': buildLuxuryRouteCards({
    railLabel: 'FLORIDA CAR SERVICE',
    images: [img1_florida, img2_florida, img3_florida],
  }),
  'chicago-chauffeur-service': buildLuxuryRouteCards({
    railLabel: 'CHICAGO CHAUFFEUR SERVICE',
    images: [img1_chicago_chauffeur_service, img2_chicago_chauffeur_service, img3_chicago_chauffeur_service], variant: 'luxury',
  }),
  'chicago-limo-service': buildLuxuryRouteCards({
    railLabel: 'CHICAGO LIMO SERVICE',
    images: [img1_chicago_limo_service, img2_chicago_limo_service, img3_chicago_limo_service], variant: 'luxury',
  }),
  'illinois': buildLuxuryRouteCards({
    railLabel: 'ILLINOIS CAR SERVICE',
    images: [img1_illinois, img2_illinois, img3_illinois],
  }),
  'newyork': buildLuxuryRouteCards({
    railLabel: 'NEW YORK CAR SERVICE',
    images: [img1_newyork, img2_newyork, img3_newyork],
  }),
  'atlanta-car-service': buildLuxuryRouteCards({
    railLabel: 'ATLANTA CAR SERVICE',
    images: [img1_atlanta_car_service, img2_atlanta_car_service, img3_atlanta_car_service],
  }),
  'bdl-airport-car-service': [
  {
    id: 'everyday',
    railLabel: 'BDL AIRPORT CAR SERVICE',
    title: 'Trip Planning Before Departure',
    description:
      'Your journey begins with proper planning through our BDL Airport Car Service. When you schedule a ride, we collect essential details such as pickup time, flight number, and destination so everything is organized in advance. This helps eliminate confusion on the travel day and keeps everything structured.',
    description2:
      'We also make sure every Bradley airport car service reservation is reviewed for timing accuracy so your departure or arrival is handled without unnecessary waiting.',
    imageSrc: img1_bdl_airport_car_service,
  },
  {
    id: 'airport',
    railLabel: 'BDL AIRPORT CAR SERVICE',
    title: 'Driver Assignment & Route Preparation',
    description:
      'Before your trip begins, a professional chauffeur is assigned specifically for your ride. Each Bradley airport limo trip includes pre-planned routing based on traffic conditions, distance, and airport timing requirements.',
    description2:
      'This preparation allows your connecticut airport limo service to avoid delays and ensures the most efficient route is selected for your journey to or from Bradley Airport.',
    imageSrc: img2_bdl_airport_car_service,
  },
  {
    id: 'long-distance',
    railLabel: 'BDL AIRPORT CAR SERVICE',
    title: 'Pickup Experience at Any Location',
    description:
      'Whether you are at home, a hotel, office, or meeting point, our BDL airport car service ensures your pickup is coordinated exactly as scheduled. The chauffeur arrives at the designated spot with full trip details already confirmed.',
    description2:
      'This approach keeps every Bradley airport car service organized and reduces the need for back-and-forth communication during travel.',
    imageSrc: img3_bdl_airport_car_service,
  },
],
  'boston-car-service': buildLuxuryRouteCards({
    railLabel: 'BOSTON CAR SERVICE',
    images: [img1_boston_car_service, img2_boston_car_service, img3_boston_car_service],
  }),
  'chicago-airport-car-service': buildLuxuryRouteCards({
    railLabel: 'CHICAGO AIRPORT CAR SERVICE',
    images: [img1_chicago_airport_car_service, img2_chicago_airport_car_service, img3_chicago_airport_car_service], variant: 'airport',
  }),
  'connecticut-car-service': buildLuxuryRouteCards({
    railLabel: 'CONNECTICUT CAR SERVICE',
    images: [img1_connecticut_car_service, img2_connecticut_car_service, img3_connecticut_car_service],
  }),
  'ct-to-jfk-airport-car-service': [
  {
    id: 'transfers',
    railLabel: 'CT TO JFK AIRPORT CAR SERVICE',
    title: 'Professional Airport Transfers',
    description:
      'Our CT to JFK Airport Car Service is designed for travelers who want a reliable and comfortable ride to John F. Kennedy International Airport. We provide private transportation for business trips, family travel, and airport transfers across Connecticut. From car service from CT to JFK to JFK to Connecticut car service, our chauffeurs focus on punctuality, safety, and a first-class travel experience.',
    imageSrc: img1_ct_to_jfk_airport_car_service,
  },
  {
    id: 'hartford',
    railLabel: 'CT TO JFK AIRPORT CAR SERVICE',
    title: 'Serving Hartford and All of Connecticut',
    description:
      'If you need a car service from Hartford to JFK or anywhere else in Connecticut, our service is built to make long-distance airport travel easy. We offer clean vehicles, professional drivers, and convenient pickup options for passengers traveling to and from JFK. Our CT limousine service to JFK gives you a smooth and comfortable ride experience.',
    imageSrc: img2_ct_to_jfk_airport_car_service,
  },
  {
    id: 'comfort',
    railLabel: 'CT TO JFK AIRPORT CAR SERVICE',
    title: 'Comfortable and Reliable Travel',
    description:
      'For airport transportation between Connecticut and JFK, our CT to JFK Airport Car Service offers door-to-door travel with scheduled pickups and private vehicles. We handle trips from Hartford and other Connecticut locations, making it easy to plan airport transportation ahead of time. Our service is a strong choice for early departures, late arrivals, and long-distance travel plans that need attention to timing.',
    imageSrc: img3_ct_to_jfk_airport_car_service,
  },
],
  'danbury-ct-car-service': [
  {
    id: 'private',
    railLabel: 'DANBURY CT CAR SERVICE',
    title: 'Private Travel in Danbury',
    description:
      'Our Danbury CT Car Service is a great choice for passengers who want direct transportation without the stress of driving, parking, or waiting around. We provide Danbury car service for daily travel, meetings, and special plans, with clean vehicles and a polished travel experience. If you are looking for a Danbury CT limo service, we make every ride feel organized and comfortable.',
    imageSrc: img1_danbury_ct_car_service,
  },
  {
    id: 'airport',
    railLabel: 'DANBURY CT CAR SERVICE',
    title: 'Airport Rides and City Transfers',
    description:
      'For longer trips, our car service from Danbury CT to JFK gives travelers a private and dependable way to reach the airport. We also provide transportation to major airports like JFK, LGA, Newark, BDL, and HPN, helping passengers plan their travel with less hassle. In addition, we offer service to Manhattan for business, hotel, and personal trips when you need a direct ride into the city.',
    imageSrc: img2_danbury_ct_car_service,
  },
  {
    id: 'limo',
    railLabel: 'DANBURY CT CAR SERVICE',
    title: 'Limo Service for Special Occasions',
    description:
      'When the ride needs a more refined touch, our Danbury limo and Danbury CT limo service options are a strong choice for formal events, business travel, and private outings. These services are ideal for clients who want a higher level of presentation along with professional chauffeur support. From Danbury limo bookings to Danbury CT limo service trips, we focus on delivering a smooth and elevated experience.',
    imageSrc: img3_danbury_ct_car_service,
  },
],
  'fairfield-ct-car-service': [
  {
    id: 'everyday',
    railLabel: 'FAIRFIELD CT CAR SERVICE',
    title: 'Private Rides for Everyday Plans',
    description:
      'Our Fairfield CT car service is designed for passengers who want a private ride that fits into a busy schedule. From office meetings to personal appointments, it offers a straightforward way to get around without the stress of parking or traffic. If you are looking for a dependable Fairfield CT car service for daily travel, this is a convenient option.',
    imageSrc: img1_fairfield_ct_car_service,
  },
  {
    id: 'airport',
    railLabel: 'FAIRFIELD CT CAR SERVICE',
    title: 'Airport Travel Made Simple',
    description:
      'We also provide a trusted Fairfield CT airport car service for travelers heading to or from major airports, including JFK, LGA, Newark, BDL, and HPN. Whether you need car service Fairfield CT to JFK or a ride arranged for another flight, the trip is handled with care and attention to timing. This makes it easier to plan airport travel without last-minute stress.',
    imageSrc: img2_fairfield_ct_car_service,
  },
  {
    id: 'refined',
    railLabel: 'FAIRFIELD CT CAR SERVICE',
    title: 'A More Refined Way to Travel',
    description:
      'When the occasion calls for something more elevated, our Fairfield CT limo and limo service in Fairfield CT bring a more polished experience to the ride. These services are a strong fit for dinners, events, client pickups, and other moments where presentation matters. With clean vehicles and professional chauffeurs, the trip feels organized from the start.',
    imageSrc: img3_fairfield_ct_car_service,
  },
],
  'florida-car-service': buildLuxuryRouteCards({
    railLabel: 'FLORIDA CAR SERVICE',
    images: [img1_florida_car_service, img2_florida_car_service, img3_florida_car_service],
  }),
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
      'Whether you\'re a frequent flyer or occasional traveler, our service ensures a smooth and relaxed airport experience from start to finish.',
    imageSrc: img1_greenwich_ct_car_service,
  },
  {
    id: 'corporate',
    railLabel: 'GREENWICH CT CAR SERVICE',
    title: 'Corporate & Executive Car Service',
    description:
      'For business professionals, timing and reliability are everything. Our corporate car service in Greenwich CT ensures you arrive at meetings, events, and conferences on time and in style.',
    description2:
      'With a quiet, comfortable cabin and professional chauffeurs, you can focus on work while we handle the road. Ideal for executives, corporate teams, and VIP clients.',
    imageSrc: img2_greenwich_ct_car_service,
  },
  {
    id: 'long-distance',
    railLabel: 'GREENWICH CT CAR SERVICE',
    title: 'Long Distance & City-to-City Transfers',
    description:
      'Need to travel beyond Greenwich? Our long-distance car service in Connecticut is perfect for intercity travel. Enjoy spacious seating, smooth rides, and experienced drivers who make long journeys comfortable and efficient. We provide city-to-city transfers across:',
    listItems: ['Connecticut', 'New York City', 'Boston', 'New Jersey and surrounding areas'],
    imageSrc: img3_greenwich_ct_car_service,
  },
],
  'hartford-ct-car-service': [
  {
    id: 'airport',
    railLabel: 'HARTFORD CT CAR SERVICE',
    title: 'A Better Way to Reach the Airport',
    description:
      'Skip the stress of parking, traffic, and last-minute ride delays with our Hartford airport car service. We offer scheduled transportation for travelers heading to the airport, ensuring your ride is arranged around your departure time. If you are searching for car service Hartford CT airport travel, our service gives you a direct and seamless option.',
    imageSrc: img1_hartford_ct_car_service,
  },
  {
    id: 'long-distance',
    railLabel: 'HARTFORD CT CAR SERVICE',
    title: 'Long-Distance Travel with Style',
    description:
      'For passengers traveling out of Connecticut, our car service from Hartford to JFK offers a private and well-managed way to reach one of the region\'s busiest airports. We also provide transportation to LGA, Newark, BDL, and HPN, giving travelers flexible options for both business and leisure trips.',
    description2:
      'This service is ideal for corporate travelers, families, and frequent flyers who value an efficient ride with a higher level of service. Our Hartford CT car service makes long airport trips easier to plan and more pleasant to take.',
    imageSrc: img2_hartford_ct_car_service,
  },
  {
    id: 'refined',
    railLabel: 'HARTFORD CT CAR SERVICE',
    title: 'Refined Transportation for Any Occasion',
    description:
      'When the trip calls for something more elevated, our limo service Hartford CT delivers a luxury-focused experience for airport transportation, events, and private travel. Our Hartford car service is available for those who want clean vehicles, experienced chauffeurs, and a professional atmosphere. Whether you need Hartford CT car service for a flight or car service from Hartford to JFK for a longer journey, we make every ride feel organized and upscale.',
    imageSrc: img3_hartford_ct_car_service,
  },
],
  'illinois-car-service': buildLuxuryRouteCards({
    railLabel: 'ILLINOIS CAR SERVICE',
    images: [img1_illinois_car_service, img2_illinois_car_service, img3_illinois_car_service],
  }),
  'jfk-airport-car-service': [
  {
    id: 'everyday',
    railLabel: 'JFK AIRPORT CAR SERVICE',
    title: 'Premium JFK Airport Limo Service',
    description:
      'Our JFK airport limo service delivers a premium travel experience with professional chauffeurs and luxury vehicles that uplifts your travel experience. From real-time flight tracking to punctual pickups and drop-offs, every detail is carefully managed to ensure a smooth and stress-free journey.',
    description2:
      "Whether it's a standard JFK car service or an executive limousine experience, every journey is delivered with unmatched comfort, reliability, and professionalism.",
    imageSrc: img1_jfk_airport_car_service,
  },
  {
    id: 'airport',
    railLabel: 'JFK AIRPORT CAR SERVICE',
    title: 'JFK Car Service Across New York & Nearby Areas',
    description:
      'We provide fast and reliable JFK car service across major locations including Manhattan, Long Island, and New Jersey, Connecticut. Our JFK car service offers premium airport transfers from JFK Airport to any city or state in the USA. Wherever your destination is, we deliver consistent luxury, comfort, and reliability.',
    description2:
      'From short-distance rides to long interstate journeys, every trip is carefully planned to ensure a seamless travel experience.',
    imageSrc: img2_jfk_airport_car_service,
  },
  {
    id: 'long-distance',
    railLabel: 'JFK AIRPORT CAR SERVICE',
    title: 'Why Choose Our Kennedy Car Service',
    description:
      'Choosing our Kennedy car service means choosing professionalism, safety, and luxury combined. From luxury sedans and SUVs to spacious executive vehicles, our fleet is designed to meet every travel need with comfort, safety, and style. Each vehicle is well-maintained, clean, and equipped to ensure a smooth JFK airport transportation experience for both individuals and groups.',
    description2:
      'Our dedicated support team is available 24/7 to assist with bookings, schedule changes, and real-time travel updates. From the moment you reserve your ride until you reach your destination, we ensure a responsive and reliable service experience at every step.',
    imageSrc: img3_jfk_airport_car_service,
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
    imageSrc: img1_lga_airport_car_service,
  },
  {
    id: 'airport',
    railLabel: 'LGA AIRPORT CAR SERVICE',
    title: 'Flight Tracking & Pickup Coordination',
    description:
      'For arriving flights, we monitor schedules in real time and adjust pickup timing based on actual landing updates. This ensures your LaGuardia car service is arranged at the right time, whether your flight arrives early or is delayed.',
    description2:
      'Your chauffeur is assigned in advance and prepared for timely coordination at pickup.',
    imageSrc: img2_lga_airport_car_service,
  },
  {
    id: 'long-distance',
    railLabel: 'LGA AIRPORT CAR SERVICE',
    title: 'Flexible Travel Options Across All Needs',
    description:
      'Our LaGuardia limo service is designed to support different travel needs, including airport transfers, hotel pickups, business travel, and long-distance rides.',
    description2:
      'Whether you need a laguardia car service for a short trip or extended travel, we offer multiple vehicle options such as sedans, SUVs, Sprinter vans, and executive cars based on comfort and group size.',
    imageSrc: img3_lga_airport_car_service,
  },
],
  'luxury-new-jersey-car-service': buildLuxuryRouteCards({
    railLabel: 'LUXURY NEW JERSEY CAR SERVICE',
    images: [img1_luxury_new_jersey_car_service, img2_luxury_new_jersey_car_service, img3_luxury_new_jersey_car_service], variant: 'luxury',
  }),
  'manhattan-car-service': buildLuxuryRouteCards({
    railLabel: 'MANHATTAN CAR SERVICE',
    images: [img1_manhattan_car_service, img2_manhattan_car_service, img3_manhattan_car_service],
  }),
  'miami-airport-car-service': buildLuxuryRouteCards({
    railLabel: 'MIAMI AIRPORT CAR SERVICE',
    images: [img1_miami_airport_car_service, img2_miami_airport_car_service, img3_miami_airport_car_service], variant: 'airport',
  }),
  'miami-airport-limo-service': buildLuxuryRouteCards({
    railLabel: 'MIAMI AIRPORT LIMO SERVICE',
    images: [img1_miami_airport_limo_service, img2_miami_airport_limo_service, img3_miami_airport_limo_service], variant: 'luxury',
  }),
  'miami-car-service': buildLuxuryRouteCards({
    railLabel: 'MIAMI CAR SERVICE',
    images: [img1_miami_car_service, img2_miami_car_service, img3_miami_car_service],
  }),
  'miami-chauffeur-service': buildLuxuryRouteCards({
    railLabel: 'MIAMI CHAUFFEUR SERVICE',
    images: [img1_miami_chauffeur_service, img2_miami_chauffeur_service, img3_miami_chauffeur_service], variant: 'luxury',
  }),
  'miami-to-fort-lauderdale-car-service': buildLuxuryRouteCards({
    railLabel: 'MIAMI TO FORT LAUDERDALE CAR SERVICE',
    images: [img1_miami_to_fort_lauderdale_car_service, img2_miami_to_fort_lauderdale_car_service, img3_miami_to_fort_lauderdale_car_service], variant: 'route',
  }),
  'miami-to-naples-car-service': buildLuxuryRouteCards({
    railLabel: 'MIAMI TO NAPLES CAR SERVICE',
    images: [img1_miami_to_naples_car_service, img2_miami_to_naples_car_service, img3_miami_to_naples_car_service], variant: 'route',
  }),
  'miami-to-orlando-car-service': buildLuxuryRouteCards({
    railLabel: 'MIAMI TO ORLANDO CAR SERVICE',
    images: [img1_miami_to_orlando_car_service, img2_miami_to_orlando_car_service, img3_miami_to_orlando_car_service], variant: 'route',
  }),
  'milwaukee-airport-limo-service': buildLuxuryRouteCards({
    railLabel: 'MILWAUKEE AIRPORT LIMO SERVICE',
    images: [img1_milwaukee_airport_limo_service, img2_milwaukee_airport_limo_service, img3_milwaukee_airport_limo_service], variant: 'luxury',
  }),
  'milwaukee-car-service': buildLuxuryRouteCards({
    railLabel: 'MILWAUKEE CAR SERVICE',
    images: [img1_milwaukee_car_service, img2_milwaukee_car_service, img3_milwaukee_car_service],
  }),
  'milwaukee-chauffeur-service': buildLuxuryRouteCards({
    railLabel: 'MILWAUKEE CHAUFFEUR SERVICE',
    images: [img1_milwaukee_chauffeur_service, img2_milwaukee_chauffeur_service, img3_milwaukee_chauffeur_service], variant: 'luxury',
  }),
  'milwaukee-limo-service': buildLuxuryRouteCards({
    railLabel: 'MILWAUKEE LIMO SERVICE',
    images: [img1_milwaukee_limo_service, img2_milwaukee_limo_service, img3_milwaukee_limo_service], variant: 'luxury',
  }),
  'milwaukee-to-chicago-car-service': buildLuxuryRouteCards({
    railLabel: 'MILWAUKEE TO CHICAGO CAR SERVICE',
    images: [img1_milwaukee_to_chicago_car_service, img2_milwaukee_to_chicago_car_service, img3_milwaukee_to_chicago_car_service], variant: 'route',
  }),
  'milwaukee-to-ohare-car-service': buildLuxuryRouteCards({
    railLabel: 'MILWAUKEE TO OHARE CAR SERVICE',
    images: [img1_milwaukee_to_ohare_car_service, img2_milwaukee_to_ohare_car_service, img3_milwaukee_to_ohare_car_service], variant: 'route',
  }),
  'new-haven-ct-car-service': [
  {
    id: 'airport',
    railLabel: 'NEW HAVEN CT CAR SERVICE',
    title: 'Airport Transportation Made Simple',
    description:
      'Our New Haven CT Car Service offers direct transportation for travelers heading to and from New Haven. Whether you are traveling to LGA, JFK, HPN, or EWR, arriving from the airport, or planning a business trip, our chauffeurs provide a smooth ride with attention to timing and route planning. If you need a New Haven car service for airport travel, we make the process simple from pickup to drop-off.',
    imageSrc: img1_new_haven_ct_car_service,
  },
  {
    id: 'yale',
    railLabel: 'NEW HAVEN CT CAR SERVICE',
    title: 'Travel Around Yale and the City',
    description:
      'We also provide private transportation for passengers traveling to and from Yale University, downtown New Haven, hotels, and other well-known destinations in the city. Many riders choose our limo New Haven CT and New Haven limo options when they want a polished ride for campus visits, academic events, meetings, or special occasions. Our service is a practical choice for anyone who needs a professional ride around the city with a better level of presentation.',
    imageSrc: img2_new_haven_ct_car_service,
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
    imageSrc: img3_new_haven_ct_car_service,
  },
],
  'new-york-car-service': buildLuxuryRouteCards({
    railLabel: 'NEW YORK CAR SERVICE',
    images: [img1_new_york_car_service, img2_new_york_car_service, img3_new_york_car_service],
  }),
  'newark-airport-service': [
  {
    id: 'everyday',
    railLabel: 'NEWARK AIRPORT SERVICE',
    title: 'Newark Airport Service – Easy Booking Process',
    description:
      'Booking your Newark Airport Service is quick and straightforward. You can reserve your ride online or by phone by providing your pickup location, flight details, luggage count, and preferred vehicle type. Once confirmed, your booking is scheduled immediately and managed with clear trip instructions for easy coordination.',
    description2:
      'Our system is designed to make every car service to Newark Airport simple, organized, and stress-free from start to finish.',
    imageSrc: img1_newark_airport_service,
  },
  {
    id: 'airport',
    railLabel: 'NEWARK AIRPORT SERVICE',
    title: 'Flight Monitoring & Pickup Coordination',
    description:
      'For all arriving flights, we track real-time updates and adjust pickup timing based on actual landing information. This helps ensure your Newark Airport car service is scheduled at the correct time, even if your flight is early or delayed.',
    description2:
      'Your chauffeur is assigned before arrival for all Newark Airport transfers, allowing precise coordination for pickups and drop-offs. Every black car service Newark Airport booking is planned with attention to timing, traffic conditions, and route selection for efficient travel.',
    imageSrc: img2_newark_airport_service,
  },
  {
    id: 'long-distance',
    railLabel: 'NEWARK AIRPORT SERVICE',
    title: 'Newark Limo Service & City Transfers',
    description:
      'Our Newark limo service is designed for convenient transportation between Newark Airport and major cities. Whether you are booking a limo service to Newark Airport or a ride from the airport, we ensure well-managed travel arrangements.',
    description2:
      'We regularly operate routes like car service Newark to Manhattan, car service from Newark Airport to Manhattan, and car service Newark to NYC, keeping every trip properly scheduled and coordinated.',
    imageSrc: img3_newark_airport_service,
  },
],
  'norwalk-ct-car-service': buildLuxuryRouteCards({
    railLabel: 'NORWALK CT CAR SERVICE',
    images: [img1_norwalk_ct_car_service, img2_norwalk_ct_car_service, img3_norwalk_ct_car_service],
  }),
  'nyc-limo-service': buildLuxuryRouteCards({
    railLabel: 'NYC LIMO SERVICE',
    images: [img1_nyc_limo_service, img2_nyc_limo_service, img3_nyc_limo_service], variant: 'luxury',
  }),
  'stamford-ct-car-service': [
  {
    id: 'schedule',
    railLabel: 'STAMFORD CT CAR SERVICE',
    title: 'Travel That Fits a Busy Schedule',
    description:
      'When time matters, our Stamford CT Car Service gives you a direct way to move between home, office, and the airport without the stress of driving yourself. Travelers choose our service for its simple booking process, punctual pickups, and attention to timing. If you need a Stamford car service that works around your day, we make each ride efficient and well-organized.',
    imageSrc: img1_stamford_ct_car_service,
  },
  {
    id: 'airports',
    railLabel: 'STAMFORD CT CAR SERVICE',
    title: 'Direct Service to Major Airports',
    description:
      'For passengers heading out of Connecticut, our car service Stamford to JFK offers a private route to one of the region\'s busiest airports. We also provide transportation to LGA, Newark, BDL, and HPN, giving travelers flexible options for both business and leisure trips.',
    description2:
      'This is a practical choice for frequent flyers, corporate travelers, and families who want a smooth transfer without the uncertainty of parking or rideshare delays. Our Stamford CT car service helps make long-distance airport travel feel controlled and straightforward.',
    imageSrc: img2_stamford_ct_car_service,
  },
  {
    id: 'special',
    railLabel: 'STAMFORD CT CAR SERVICE',
    title: 'Elevated Rides for Special Occasions',
    description:
      'For moments that call for something more refined, our limo Stamford CT and Stamford limo options bring a polished touch to private transportation. Whether you are booking a limo service Stamford CT for a formal event or arranging Stamford limo service for a guest pickup, our chauffeurs and vehicles are selected to create a more upscale experience. We also provide limo Stamford CT travel for clients who want comfort, presentation, and professionalism in one ride.',
    imageSrc: img3_stamford_ct_car_service,
  },
],
  'texas-car-service': buildLuxuryRouteCards({
    railLabel: 'TEXAS CAR SERVICE',
    images: [img1_texas_car_service, img2_texas_car_service, img3_texas_car_service],
  }),
  'west-palm-beach-to-miami-limo-service': buildLuxuryRouteCards({
    railLabel: 'WEST PALM BEACH TO MIAMI LIMO SERVICE',
    images: [img1_west_palm_beach_to_miami_limo_service, img2_west_palm_beach_to_miami_limo_service, img3_west_palm_beach_to_miami_limo_service], variant: 'route',
  }),
  'westchester-county-car-service': buildLuxuryRouteCards({
    railLabel: 'WESTCHESTER COUNTY CAR SERVICE',
    images: [img1_westchester_county_car_service, img2_westchester_county_car_service, img3_westchester_county_car_service],
  }),
  'wisconsin-car-service': buildLuxuryRouteCards({
    railLabel: 'WISCONSIN CAR SERVICE',
    images: [img1_wisconsin_car_service, img2_wisconsin_car_service, img3_wisconsin_car_service],
  }),
}

/** @param {string} pageKey */
export function getRouteCards(pageKey) {
  const cards = ROUTE_CARDS_PAGES[pageKey]
  if (!cards) throw new Error(`Unknown route cards page key: ${pageKey}`)
  return cards
}
