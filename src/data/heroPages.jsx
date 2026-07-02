import heroBg_connecticut from '../assets/connecticut/hero/hero_image.webp'
import heroBg_florida from '../assets/florida/hero/HERO_IMAGE.webp'
import heroBg_newyork from '../assets/newyork/hero/hero_image.webp'
import heroBg_illinois from '../assets/illinois/illinois/hero/hero_image.webp'
import heroBg_chicago_limo from '../assets/illinois/chicago-limo-service/hero/hero_image.webp'
import heroBg_chicago_chauffeur from '../assets/illinois/chicago-chauffeur-service/hero/hero_image.webp'
import heroBg_fifa from '../assets/fifa/fifa_hero-800.webp'
import heroBgLg_fifa from '../assets/fifa/fifa_hero-1440.webp'
import heroBg_home from '../assets/home/hero/hero_image.webp'
import heroSm_home from '../assets/home/hero/home-hero-800.webp'
import heroLg_home from '../assets/home/hero/home-hero-1440.webp'
import heroBg_atlanta_car_service from '../assets/other-pages/atlanta-car-service/hero/hero_image.webp'
import heroBg_bdl_airport_car_service from '../assets/other-pages/bdl-airport-car-service/hero/hero_image.webp'
import heroBg_boston_car_service from '../assets/other-pages/boston-car-service/hero/hero_image.webp'
import heroBg_chicago_airport_car_service from '../assets/other-pages/chicago-airport-car-service/hero/hero_image.webp'
import heroBg_connecticut_car_service from '../assets/other-pages/connecticut-car-service/hero/hero_image.webp'
import heroBg_ct_to_jfk_airport_car_service from '../assets/other-pages/ct-to-jfk-airport-car-service/hero/hero_image.webp'
import heroBg_danbury_ct_car_service from '../assets/other-pages/danbury-ct-car-service/hero/hero_image.webp'
import heroBg_fairfield_ct_car_service from '../assets/other-pages/fairfield-ct-car-service/hero/hero_image.webp'
import heroBg_florida_car_service from '../assets/other-pages/florida-car-service/hero/hero_image.webp'
import heroBg_greenwich_ct_car_service from '../assets/other-pages/greenwich-ct-car-service/hero/hero_image.webp'
import heroBg_hartford_ct_car_service from '../assets/other-pages/hartford-ct-car-service/hero/hero_image.webp'
import heroBg_illinois_car_service from '../assets/other-pages/illinois-car-service/hero/hero_image.webp'
import heroBg_jfk_airport_car_service from '../assets/other-pages/jfk-airport-car-service/hero/hero_image.webp'
import heroBg_lga_airport_car_service from '../assets/other-pages/lga-airport-car-service/hero/hero_image.webp'
import heroBg_luxury_new_jersey_car_service from '../assets/other-pages/luxury-new-jersey-car-service/hero/hero_image.webp'
import heroBg_manhattan_car_service from '../assets/other-pages/manhattan-car-service/hero/hero_image.webp'
import heroBg_miami_airport_car_service from '../assets/other-pages/miami-airport-car-service/hero/hero_image.webp'
import heroBg_miami_airport_limo_service from '../assets/other-pages/miami-airport-limo-service/hero/hero_image.webp'
import heroBg_miami_car_service from '../assets/other-pages/miami-car-service/hero/hero_image.webp'
import heroBg_miami_chauffeur_service from '../assets/other-pages/miami-chauffeur-service/hero/hero_image.webp'
import heroBg_miami_to_fort_lauderdale_car_service from '../assets/other-pages/miami-to-fort-lauderdale-car-service/hero/hero_image.webp'
import heroBg_miami_to_naples_car_service from '../assets/other-pages/miami-to-naples-car-service/hero/hero_image.webp'
import heroBg_miami_to_orlando_car_service from '../assets/other-pages/miami-to-orlando-car-service/hero/hero_image.webp'
import heroBg_milwaukee_airport_limo_service from '../assets/other-pages/milwaukee-airport-limo-service/hero/hero_image.webp'
import heroBg_milwaukee_car_service from '../assets/other-pages/milwaukee-car-service/hero/hero_image.webp'
import heroBg_milwaukee_chauffeur_service from '../assets/other-pages/milwaukee-chauffeur-service/hero/hero_image.webp'
import heroBg_milwaukee_limo_service from '../assets/other-pages/milwaukee-limo-service/hero/hero_image.webp'
import heroBg_milwaukee_to_chicago_car_service from '../assets/other-pages/milwaukee-to-chicago-car-service/hero/hero_image.webp'
import heroBg_milwaukee_to_ohare_car_service from '../assets/other-pages/milwaukee-to-ohare-car-service/hero/hero_image.webp'
import heroBg_new_haven_ct_car_service from '../assets/other-pages/new-haven-ct-car-service/hero/hero_image.webp'
import heroBg_new_york_car_service from '../assets/other-pages/new-york-car-service/hero/hero_image.webp'
import heroBg_newark_airport_service from '../assets/other-pages/newark-airport-service/hero/hero_image.webp'
import heroBg_norwalk_ct_car_service from '../assets/other-pages/norwalk-ct-car-service/hero/hero_image.webp'
import heroBg_nyc_limo_service from '../assets/other-pages/nyc-limo-service/hero/hero_image.webp'
import heroBg_stamford_ct_car_service from '../assets/other-pages/stamford-ct-car-service/hero/hero_image.webp'
import heroBg_texas_car_service from '../assets/other-pages/texas-car-service/hero/hero_image.webp'
import heroBg_west_palm_beach_to_miami_limo_service from '../assets/other-pages/west-palm-beach-to-miami-limo-service/hero/hero_image.webp'
import heroBg_westchester_county_car_service from '../assets/other-pages/westchester-county-car-service/hero/hero_image.webp'
import heroBg_wisconsin_car_service from '../assets/other-pages/wisconsin-car-service/hero/hero_image.webp'

/** @typedef {'landing' | 'home' | 'fifa'} HeroVariant */

/** Shared hero content — edit entries here when adding or updating landing pages. */
export const HERO_PAGES = {
  'connecticut': {
    variant: 'landing',
    sectionClass: 'hero',
    background: { default: heroBg_connecticut, sizes: '(max-width: 1024px) 800px, 1440px', width: 1440, height: 810 },
    titleInner: (
      <>
        <span className="hero-title-line">
                      Premium <span className="hero-title-line--highlight">Connecticut</span>
                    </span>{' '}
                    <span className="hero-title-line">Car Service</span>
      </>
    ),
    descriptionInner: (
      <>
        Travel in comfort with a Connecticut car service designed for people who want a smooth and stress free
                    experience. From local trips to airport rides our drivers make every journey easy. Enjoy calm pickups,
                    friendly service and dependable transport to JFK , LGA or NYC without rushing or worrying about traffic.
                    Your ride stays simple, safe and well planned.
      </>
    ),
  },
  'florida': {
    variant: 'landing',
    sectionClass: 'hero hero--florida',
    background: { default: heroBg_florida, sizes: '(max-width: 1024px) 800px, 1440px', width: 1440, height: 810 },
    titleInner: (
      <>
        <span className="hero-title-line">
                      Premium <span className="hero-title-line--highlight">Florida</span>
                    </span>{' '}
                    <span className="hero-title-line">Car Service</span>
      </>
    ),
    descriptionInner: (
      <>
        Travel in comfort with a Florida car service designed for people who want a smooth and stress free
                    experience. From local trips to airport rides our drivers make every journey easy. Enjoy calm pickups,
                    friendly service and dependable transport to MIA, FLL or Orlando without rushing or worrying about traffic.
                    Your ride stays simple, safe and well planned.
      </>
    ),
  },
  'newyork': {
    variant: 'landing',
    sectionClass: 'hero',
    background: { default: heroBg_newyork, sizes: '(max-width: 1024px) 800px, 1440px', width: 1440, height: 810 },
    titleInner: (
      <>
        <span className="hero-title-line">Premium <span className="hero-title-line--highlight">New York</span></span>{' '}
                    <span className="hero-title-line">Car Service</span>
      </>
    ),
    descriptionInner: (
      <>
        Travel in comfort with a New York car service designed for people who want a smooth and stress free
                    experience. From local trips to airport rides our drivers make every journey easy. Enjoy calm pickups,
                    friendly service and dependable transport to JFK, LaGuardia or Newark without rushing or worrying about traffic.
                    Your ride stays simple, safe and well planned.
      </>
    ),
  },
  'illinois': {
    variant: 'landing',
    sectionClass: 'hero',
    background: { default: heroBg_illinois, sizes: '(max-width: 1024px) 800px, 1440px', width: 1440, height: 810 },
    titleInner: (
      <>
        <span className="hero-title-line">Premium <span className="hero-title-line--highlight">Illinois</span></span>{' '}
                    <span className="hero-title-line">Car Service</span>
      </>
    ),
    descriptionInner: (
      <>
        Travel in comfort with a Florida car service designed for people who want a smooth and stress free
                    experience. From local trips to airport rides our drivers make every journey easy. Enjoy calm pickups,
                    friendly service and dependable transport to MIA, FLL or Orlando without rushing or worrying about traffic.
                    Your ride stays simple, safe and well planned.
      </>
    ),
  },
  'chicago-limo': {
    variant: 'landing',
    sectionClass: 'hero',
    background: { default: heroBg_chicago_limo, sizes: '(max-width: 1024px) 800px, 1440px', width: 1440, height: 810 },
    titleInner: (
      <>
        <span className="hero-title-line"><span className="hero-title-line--highlight">Chicago</span> Limo</span>{' '}
                    <span className="hero-title-line">Car Service</span>
      </>
    ),
    descriptionInner: (
      <>
        Travel in comfort with a Florida car service designed for people who want a smooth and stress free
                    experience. From local trips to airport rides our drivers make every journey easy. Enjoy calm pickups,
                    friendly service and dependable transport to MIA, FLL or Orlando without rushing or worrying about traffic.
                    Your ride stays simple, safe and well planned.
      </>
    ),
  },
  'chicago-chauffeur': {
    variant: 'landing',
    sectionClass: 'hero',
    background: { default: heroBg_chicago_chauffeur, sizes: '(max-width: 1024px) 800px, 1440px', width: 1440, height: 810 },
    titleInner: (
      <>
        <span className="hero-title-line"><span className="hero-title-line--highlight">Chicago</span> Chauffeur</span>{' '}
                    <span className="hero-title-line">Car Service</span>
      </>
    ),
    descriptionInner: (
      <>
        Travel in comfort with a Florida car service designed for people who want a smooth and stress free
                    experience. From local trips to airport rides our drivers make every journey easy. Enjoy calm pickups,
                    friendly service and dependable transport to MIA, FLL or Orlando without rushing or worrying about traffic.
                    Your ride stays simple, safe and well planned.
      </>
    ),
  },
  'fifa': {
    variant: 'fifa',
    sectionClass: 'hero fifa-hero',
    background: { default: heroBg_fifa, sm: heroBg_fifa, lg: heroBgLg_fifa, sizes: '(max-width: 1024px) 800px, 1440px', width: 1440, height: 810 },
    titleInner: (
      <>
        Your Ride To <span className="fifa-hero__accent">FIFA 2026</span> Starts Here
      </>
    ),
    descriptionInner: (
      <>
        Premium Chauffeur Service For Matches Across Canada, USA &amp; Mexico — Airport Transfers, Stadium Rides,
                    And Full-Day Bookings For Fans, Groups, And VIPs.
      </>
    ),
  },
  'home': {
    variant: 'home',
    sectionClass: 'hero hero--home',
    background: { default: heroBg_home, sm: heroSm_home, lg: heroLg_home, sizes: '(max-width: 1024px) 800px, 1440px', width: 1440, height: 810 },
    titleInner: (
      <>
        <span className="hero-title-line">Premium White Glove</span>{' '}
                    <span className="hero-title-line">
                      <span className="hero-title-line--highlight">Chauffeur Service</span>
                    </span>
                    <span className="hero-title-line hero-title-line--accent">in USA</span>
      </>
    ),
    descriptionInner: (
      <>
        Urban Elite Limo delivers premium white-glove chauffeur services across the USA.
        Experience luxury, comfort, and professionalism in every ride.
        Serving Westchester, Connecticut, New York, Massachusetts, Miami, Chicago & More.
      </>
    ),
  },
  'atlanta-car-service': {
    variant: 'landing',
    sectionClass: 'hero',
    background: { default: heroBg_atlanta_car_service, sizes: '(max-width: 1024px) 800px, 1440px', width: 1440, height: 810 },
    titleInner: (
      <>
        <span className="hero-title-line hero-title-line--highlight">{"Atlanta"}</span>{' '}
                    <span className="hero-title-line">{"Car Service"}</span>
      </>
    ),
    descriptionInner: (
      <>
        Travel in comfort with {"Atlanta Car Service"} designed for people who want a smooth and stress free
                    experience. From local trips to airport rides our drivers make every journey easy. Enjoy calm pickups,
                    friendly service and dependable transport without rushing or worrying about traffic.
                    Your ride stays simple, safe and well planned throughout {"Atlanta"}.
      </>
    ),
  },
  'bdl-airport-car-service': {
    variant: 'landing',
    sectionClass: 'hero',
    background: { default: heroBg_bdl_airport_car_service, sizes: '(max-width: 1024px) 800px, 1440px', width: 1440, height: 810 },
    titleInner: (
      <>
        <span className="hero-title-line hero-title-line--highlight">{"Luxury Connecticut Airport Limo Service"}</span>{' '}
                    <span className="hero-title-line">{"for BDL Travelers"}</span>
      </>
    ),
    descriptionInner: (
      <>
        Experience premium BDL Airport Car Service with private, comfortable, and stylish transportation to Bradley
                    International Airport. Our Bradley airport limo and Connecticut airport limo service are designed for
                    travelers who want reliable service and a first-class ride.
      </>
    ),
  },
  'boston-car-service': {
    variant: 'landing',
    sectionClass: 'hero',
    background: { default: heroBg_boston_car_service, sizes: '(max-width: 1024px) 800px, 1440px', width: 1440, height: 810 },
    titleInner: (
      <>
        <span className="hero-title-line hero-title-line--highlight">{"Boston"}</span>{' '}
                    <span className="hero-title-line">{"Car Service"}</span>
      </>
    ),
    descriptionInner: (
      <>
        Travel in comfort with {"Boston Car Service"} designed for people who want a smooth and stress free
                    experience. From local trips to airport rides our drivers make every journey easy. Enjoy calm pickups,
                    friendly service and dependable transport without rushing or worrying about traffic.
                    Your ride stays simple, safe and well planned throughout {"Boston"}.
      </>
    ),
  },
  'chicago-airport-car-service': {
    variant: 'landing',
    sectionClass: 'hero',
    background: { default: heroBg_chicago_airport_car_service, sizes: '(max-width: 1024px) 800px, 1440px', width: 1440, height: 810 },
    titleInner: (
      <>
        <span className="hero-title-line hero-title-line--highlight">{"Chicago Airport"}</span>{' '}
                    <span className="hero-title-line">{"Car Service"}</span>
      </>
    ),
    descriptionInner: (
      <>
        Travel in comfort with {"Chicago Airport Car Service"} designed for people who want a smooth and stress free
                    experience. From local trips to airport rides our drivers make every journey easy. Enjoy calm pickups,
                    friendly service and dependable transport without rushing or worrying about traffic.
                    Your ride stays simple, safe and well planned throughout {"Chicago Airport"}.
      </>
    ),
  },
  'connecticut-car-service': {
    variant: 'landing',
    sectionClass: 'hero',
    background: { default: heroBg_connecticut_car_service, sizes: '(max-width: 1024px) 800px, 1440px', width: 1440, height: 810 },
    titleInner: (
      <>
        <span className="hero-title-line hero-title-line--highlight">{"Connecticut"}</span>{' '}
                    <span className="hero-title-line">{"Car Service"}</span>
      </>
    ),
    descriptionInner: (
      <>
        Travel in comfort with {"Connecticut Car Service"} designed for people who want a smooth and stress free
                    experience. From local trips to airport rides our drivers make every journey easy. Enjoy calm pickups,
                    friendly service and dependable transport without rushing or worrying about traffic.
                    Your ride stays simple, safe and well planned throughout {"Connecticut"}.
      </>
    ),
  },
  'ct-to-jfk-airport-car-service': {
    variant: 'landing',
    sectionClass: 'hero',
    background: { default: heroBg_ct_to_jfk_airport_car_service, sizes: '(max-width: 1024px) 800px, 1440px', width: 1440, height: 810 },
    titleInner: (
      <>
        <span className="hero-title-line hero-title-line--highlight">{"Premium Connecticut to JFK"}</span>{' '}
                    <span className="hero-title-line">{"Airport Transfers"}</span>
      </>
    ),
    descriptionInner: (
      <>
        We provide premium CT to JFK Airport Car Service for passengers looking for comfort, reliability, and
                    punctuality. Our CT limousine service to JFK and car service from Hartford to JFK are perfect for solo
                    travel, business travel, family trips, group travel and airport transfers.
      </>
    ),
  },
  'danbury-ct-car-service': {
    variant: 'landing',
    sectionClass: 'hero',
    background: { default: heroBg_danbury_ct_car_service, sizes: '(max-width: 1024px) 800px, 1440px', width: 1440, height: 810 },
    titleInner: (
      <>
        <span className="hero-title-line hero-title-line--highlight">{"Luxury Danbury Car Service"}</span>{' '}
                    <span className="hero-title-line">{"You Can Rely On"}</span>
      </>
    ),
    descriptionInner: (
      <>
        Our Danbury CT Car Service offers private transportation for airport trips, business travel, and special
                    occasions. Whether you need a Danbury car service for a local ride, a Danbury CT limo service for a group
                    travel, or a Danbury limo for a special event, we provide a smooth and professional experience. It's a
                    refined option for travelers who want punctual service and a comfortable ride throughout Danbury and beyond.
      </>
    ),
  },
  'fairfield-ct-car-service': {
    variant: 'landing',
    sectionClass: 'hero',
    background: { default: heroBg_fairfield_ct_car_service, sizes: '(max-width: 1024px) 800px, 1440px', width: 1440, height: 810 },
    titleInner: (
      <>
        <span className="hero-title-line hero-title-line--highlight">{"Fairfield CT Car Service"}</span>{' '}
                    <span className="hero-title-line">{"for Private Travel"}</span>
      </>
    ),
    descriptionInner: (
      <>
        Our Fairfield CT Car Service is a great choice for travelers who want a smooth ride for business, special
                    occasions, or airport transportation. Whether you need a Fairfield CT car service, a Fairfield CT limo, or
                    limo service in Fairfield CT, we provide polished transportation with a professional touch.
      </>
    ),
  },
  'florida-car-service': {
    variant: 'landing',
    sectionClass: 'hero',
    background: { default: heroBg_florida_car_service, sizes: '(max-width: 1024px) 800px, 1440px', width: 1440, height: 810 },
    titleInner: (
      <>
        <span className="hero-title-line hero-title-line--highlight">{"Florida"}</span>{' '}
                    <span className="hero-title-line">{"Car Service"}</span>
      </>
    ),
    descriptionInner: (
      <>
        Travel in comfort with {"Florida Car Service"} designed for people who want a smooth and stress free
                    experience. From local trips to airport rides our drivers make every journey easy. Enjoy calm pickups,
                    friendly service and dependable transport without rushing or worrying about traffic.
                    Your ride stays simple, safe and well planned throughout {"Florida"}.
      </>
    ),
  },
  'greenwich-ct-car-service': {
    variant: 'landing',
    sectionClass: 'hero',
    background: { default: heroBg_greenwich_ct_car_service, sizes: '(max-width: 1024px) 800px, 1440px', width: 1440, height: 810 },
    titleInner: (
      <>
        <span className="hero-title-line hero-title-line--highlight">{"Greenwich CT Car Service"}</span>{' '}
                    <span className="hero-title-line">{"for Business and Airport Travel"}</span>
      </>
    ),
    descriptionInner: (
      <>
        Our Greenwich CT Car Service provides a refined way to travel for airport transfers, business meetings, and
                    private outings. Whether you need a Greenwich car service for a simple trip across town or a Greenwich limo
                    service for a more elegant experience, we deliver professional transportation with attention to detail and
                    comfort.
      </>
    ),
  },
  'hartford-ct-car-service': {
    variant: 'landing',
    sectionClass: 'hero',
    background: { default: heroBg_hartford_ct_car_service, sizes: '(max-width: 1024px) 800px, 1440px', width: 1440, height: 810 },
    titleInner: (
      <>
        <span className="hero-title-line hero-title-line--highlight">{"Executive Hartford CT Car Service"}</span>{' '}
                    <span className="hero-title-line">{"for Airport and Private Travel"}</span>
      </>
    ),
    descriptionInner: (
      <>
        Our Hartford CT Car Service is designed for travelers who want a refined ride with professional attention
                    from pickup to drop-off. Whether you need a Hartford car service for a business meeting, a Hartford airport
                    car service for your flight, or a limo service Hartford CT for a special occasion, we provide a polished
                    travel experience.
      </>
    ),
  },
  'illinois-car-service': {
    variant: 'landing',
    sectionClass: 'hero',
    background: { default: heroBg_illinois_car_service, sizes: '(max-width: 1024px) 800px, 1440px', width: 1440, height: 810 },
    titleInner: (
      <>
        <span className="hero-title-line hero-title-line--highlight">{"Illinois"}</span>{' '}
                    <span className="hero-title-line">{"Car Service"}</span>
      </>
    ),
    descriptionInner: (
      <>
        Travel in comfort with {"Illinois Car Service"} designed for people who want a smooth and stress free
                    experience. From local trips to airport rides our drivers make every journey easy. Enjoy calm pickups,
                    friendly service and dependable transport without rushing or worrying about traffic.
                    Your ride stays simple, safe and well planned throughout {"Illinois"}.
      </>
    ),
  },
  'jfk-airport-car-service': {
    variant: 'landing',
    sectionClass: 'hero',
    background: { default: heroBg_jfk_airport_car_service, sizes: '(max-width: 1024px) 800px, 1440px', width: 1440, height: 810 },
    titleInner: (
      <>
        <span className="hero-title-line hero-title-line--highlight">{"JFK Airport"}</span>{' '}
                    <span className="hero-title-line">{"Car Service You Can Trust"}</span>
      </>
    ),
    descriptionInner: (
      <>
        Travel to and from John F. Kennedy Airport with complete comfort, punctuality, and luxury. Our JFK airport limo service is designed for travelers who value reliability, clean vehicles, and professional chauffeurs available 24/7.
                    Whether you are flying for business or leisure, we ensure a smooth, stress-free airport transfer experience every time.{' '}
                    <strong>Book your JFK limousine service today and travel without delays or uncertainty.</strong>
      </>
    ),
  },
  'lga-airport-car-service': {
    variant: 'landing',
    sectionClass: 'hero',
    background: { default: heroBg_lga_airport_car_service, sizes: '(max-width: 1024px) 800px, 1440px', width: 1440, height: 810 },
    titleInner: (
      <>
        <span className="hero-title-line hero-title-line--highlight">{"LaGuardia Airport Car Service"}</span>{' '}
                    <span className="hero-title-line">{"for NYC, CT, NJ, Long Island and Beyond"}</span>
      </>
    ),
    descriptionInner: (
      <>
        Our LGA Airport Car Service offers reliable transportation to and from LaGuardia Airport for passengers
                    across New York City, Connecticut, Manhattan, Brooklyn, Long Island, and nearby New Jersey areas. With
                    professional LaGuardia car service and luxury LaGuardia limo service, we make airport travel comfortable,
                    timely, and stress-free.
      </>
    ),
  },
  'luxury-new-jersey-car-service': {
    variant: 'landing',
    sectionClass: 'hero',
    background: { default: heroBg_luxury_new_jersey_car_service, sizes: '(max-width: 1024px) 800px, 1440px', width: 1440, height: 810 },
    titleInner: (
      <>
        <span className="hero-title-line hero-title-line--highlight">{"Luxury New Jersey"}</span>{' '}
                    <span className="hero-title-line">{"Car Service"}</span>
      </>
    ),
    descriptionInner: (
      <>
        Travel in comfort with {"Luxury New Jersey Car Service"} designed for people who want a smooth and stress free
                    experience. From local trips to airport rides our drivers make every journey easy. Enjoy calm pickups,
                    friendly service and dependable transport without rushing or worrying about traffic.
                    Your ride stays simple, safe and well planned throughout {"Luxury New Jersey"}.
      </>
    ),
  },
  'manhattan-car-service': {
    variant: 'landing',
    sectionClass: 'hero',
    background: { default: heroBg_manhattan_car_service, sizes: '(max-width: 1024px) 800px, 1440px', width: 1440, height: 810 },
    titleInner: (
      <>
        <span className="hero-title-line hero-title-line--highlight">{"Manhattan"}</span>{' '}
                    <span className="hero-title-line">{"Car Service"}</span>
      </>
    ),
    descriptionInner: (
      <>
        Travel in comfort with {"Manhattan Car Service"} designed for people who want a smooth and stress free
                    experience. From local trips to airport rides our drivers make every journey easy. Enjoy calm pickups,
                    friendly service and dependable transport without rushing or worrying about traffic.
                    Your ride stays simple, safe and well planned throughout {"Manhattan"}.
      </>
    ),
  },
  'miami-airport-car-service': {
    variant: 'landing',
    sectionClass: 'hero',
    background: { default: heroBg_miami_airport_car_service, sizes: '(max-width: 1024px) 800px, 1440px', width: 1440, height: 810 },
    titleInner: (
      <>
        <span className="hero-title-line hero-title-line--highlight">{"Miami Airport"}</span>{' '}
                    <span className="hero-title-line">{"Car Service"}</span>
      </>
    ),
    descriptionInner: (
      <>
        Travel in comfort with {"Miami Airport Car Service"} designed for people who want a smooth and stress free
                    experience. From local trips to airport rides our drivers make every journey easy. Enjoy calm pickups,
                    friendly service and dependable transport without rushing or worrying about traffic.
                    Your ride stays simple, safe and well planned throughout {"Miami Airport"}.
      </>
    ),
  },
  'miami-airport-limo-service': {
    variant: 'landing',
    sectionClass: 'hero',
    background: { default: heroBg_miami_airport_limo_service, sizes: '(max-width: 1024px) 800px, 1440px', width: 1440, height: 810 },
    titleInner: (
      <>
        <span className="hero-title-line hero-title-line--highlight">{"Miami Airport"}</span>{' '}
                    <span className="hero-title-line">{"Limo Service"}</span>
      </>
    ),
    descriptionInner: (
      <>
        Travel in comfort with {"Miami Airport Limo Service"} designed for people who want a smooth and stress free
                    experience. From local trips to airport rides our drivers make every journey easy. Enjoy calm pickups,
                    friendly service and dependable transport without rushing or worrying about traffic.
                    Your ride stays simple, safe and well planned throughout {"Miami Airport"}.
      </>
    ),
  },
  'miami-car-service': {
    variant: 'landing',
    sectionClass: 'hero',
    background: { default: heroBg_miami_car_service, sizes: '(max-width: 1024px) 800px, 1440px', width: 1440, height: 810 },
    titleInner: (
      <>
        <span className="hero-title-line hero-title-line--highlight">{"Miami"}</span>{' '}
                    <span className="hero-title-line">{"Car Service"}</span>
      </>
    ),
    descriptionInner: (
      <>
        Travel in comfort with {"Miami Car Service"} designed for people who want a smooth and stress free
                    experience. From local trips to airport rides our drivers make every journey easy. Enjoy calm pickups,
                    friendly service and dependable transport without rushing or worrying about traffic.
                    Your ride stays simple, safe and well planned throughout {"Miami"}.
      </>
    ),
  },
  'miami-chauffeur-service': {
    variant: 'landing',
    sectionClass: 'hero',
    background: { default: heroBg_miami_chauffeur_service, sizes: '(max-width: 1024px) 800px, 1440px', width: 1440, height: 810 },
    titleInner: (
      <>
        <span className="hero-title-line hero-title-line--highlight">{"Miami"}</span>{' '}
                    <span className="hero-title-line">{"Chauffeur Service"}</span>
      </>
    ),
    descriptionInner: (
      <>
        Travel in comfort with {"Miami Chauffeur Service"} designed for people who want a smooth and stress free
                    experience. From local trips to airport rides our drivers make every journey easy. Enjoy calm pickups,
                    friendly service and dependable transport without rushing or worrying about traffic.
                    Your ride stays simple, safe and well planned throughout {"Miami"}.
      </>
    ),
  },
  'miami-to-fort-lauderdale-car-service': {
    variant: 'landing',
    sectionClass: 'hero',
    background: { default: heroBg_miami_to_fort_lauderdale_car_service, sizes: '(max-width: 1024px) 800px, 1440px', width: 1440, height: 810 },
    titleInner: (
      <>
        <span className="hero-title-line hero-title-line--highlight">{"Miami to Fort Lauderdale"}</span>{' '}
                    <span className="hero-title-line">{"car service"}</span>
      </>
    ),
    descriptionInner: (
      <>
        Travel in comfort with {"Miami to Fort Lauderdale car service"} designed for people who want a smooth and stress free
                    experience. From local trips to airport rides our drivers make every journey easy. Enjoy calm pickups,
                    friendly service and dependable transport without rushing or worrying about traffic.
                    Your ride stays simple, safe and well planned throughout {"Miami to Fort Lauderdale"}.
      </>
    ),
  },
  'miami-to-naples-car-service': {
    variant: 'landing',
    sectionClass: 'hero',
    background: { default: heroBg_miami_to_naples_car_service, sizes: '(max-width: 1024px) 800px, 1440px', width: 1440, height: 810 },
    titleInner: (
      <>
        <span className="hero-title-line hero-title-line--highlight">{"Miami to Naples"}</span>{' '}
                    <span className="hero-title-line">{"Car Service"}</span>
      </>
    ),
    descriptionInner: (
      <>
        Travel in comfort with {"Miami to Naples Car Service"} designed for people who want a smooth and stress free
                    experience. From local trips to airport rides our drivers make every journey easy. Enjoy calm pickups,
                    friendly service and dependable transport without rushing or worrying about traffic.
                    Your ride stays simple, safe and well planned throughout {"Miami to Naples"}.
      </>
    ),
  },
  'miami-to-orlando-car-service': {
    variant: 'landing',
    sectionClass: 'hero',
    background: { default: heroBg_miami_to_orlando_car_service, sizes: '(max-width: 1024px) 800px, 1440px', width: 1440, height: 810 },
    titleInner: (
      <>
        <span className="hero-title-line hero-title-line--highlight">{"Miami to Orlando"}</span>{' '}
                    <span className="hero-title-line">{"Car Service"}</span>
      </>
    ),
    descriptionInner: (
      <>
        Travel in comfort with {"Miami to Orlando Car Service"} designed for people who want a smooth and stress free
                    experience. From local trips to airport rides our drivers make every journey easy. Enjoy calm pickups,
                    friendly service and dependable transport without rushing or worrying about traffic.
                    Your ride stays simple, safe and well planned throughout {"Miami to Orlando"}.
      </>
    ),
  },
  'milwaukee-airport-limo-service': {
    variant: 'landing',
    sectionClass: 'hero',
    background: { default: heroBg_milwaukee_airport_limo_service, sizes: '(max-width: 1024px) 800px, 1440px', width: 1440, height: 810 },
    titleInner: (
      <>
        <span className="hero-title-line hero-title-line--highlight">{"Milwaukee Airport"}</span>{' '}
                    <span className="hero-title-line">{"Limo Service"}</span>
      </>
    ),
    descriptionInner: (
      <>
        Travel in comfort with {"Milwaukee Airport Limo Service"} designed for people who want a smooth and stress free
                    experience. From local trips to airport rides our drivers make every journey easy. Enjoy calm pickups,
                    friendly service and dependable transport without rushing or worrying about traffic.
                    Your ride stays simple, safe and well planned throughout {"Milwaukee Airport"}.
      </>
    ),
  },
  'milwaukee-car-service': {
    variant: 'landing',
    sectionClass: 'hero',
    background: { default: heroBg_milwaukee_car_service, sizes: '(max-width: 1024px) 800px, 1440px', width: 1440, height: 810 },
    titleInner: (
      <>
        <span className="hero-title-line hero-title-line--highlight">{"Milwaukee"}</span>{' '}
                    <span className="hero-title-line">{"Car Service"}</span>
      </>
    ),
    descriptionInner: (
      <>
        Travel in comfort with {"Milwaukee Car Service"} designed for people who want a smooth and stress free
                    experience. From local trips to airport rides our drivers make every journey easy. Enjoy calm pickups,
                    friendly service and dependable transport without rushing or worrying about traffic.
                    Your ride stays simple, safe and well planned throughout {"Milwaukee"}.
      </>
    ),
  },
  'milwaukee-chauffeur-service': {
    variant: 'landing',
    sectionClass: 'hero',
    background: { default: heroBg_milwaukee_chauffeur_service, sizes: '(max-width: 1024px) 800px, 1440px', width: 1440, height: 810 },
    titleInner: (
      <>
        <span className="hero-title-line hero-title-line--highlight">{"Milwaukee"}</span>{' '}
                    <span className="hero-title-line">{"Chauffeur Service"}</span>
      </>
    ),
    descriptionInner: (
      <>
        Travel in comfort with {"Milwaukee Chauffeur Service"} designed for people who want a smooth and stress free
                    experience. From local trips to airport rides our drivers make every journey easy. Enjoy calm pickups,
                    friendly service and dependable transport without rushing or worrying about traffic.
                    Your ride stays simple, safe and well planned throughout {"Milwaukee"}.
      </>
    ),
  },
  'milwaukee-limo-service': {
    variant: 'landing',
    sectionClass: 'hero',
    background: { default: heroBg_milwaukee_limo_service, sizes: '(max-width: 1024px) 800px, 1440px', width: 1440, height: 810 },
    titleInner: (
      <>
        <span className="hero-title-line hero-title-line--highlight">{"Milwaukee"}</span>{' '}
                    <span className="hero-title-line">{"Limo Service"}</span>
      </>
    ),
    descriptionInner: (
      <>
        Travel in comfort with {"Milwaukee Limo Service"} designed for people who want a smooth and stress free
                    experience. From local trips to airport rides our drivers make every journey easy. Enjoy calm pickups,
                    friendly service and dependable transport without rushing or worrying about traffic.
                    Your ride stays simple, safe and well planned throughout {"Milwaukee"}.
      </>
    ),
  },
  'milwaukee-to-chicago-car-service': {
    variant: 'landing',
    sectionClass: 'hero',
    background: { default: heroBg_milwaukee_to_chicago_car_service, sizes: '(max-width: 1024px) 800px, 1440px', width: 1440, height: 810 },
    titleInner: (
      <>
        <span className="hero-title-line hero-title-line--highlight">{"Milwaukee to Chicago"}</span>{' '}
                    <span className="hero-title-line">{"Car Service"}</span>
      </>
    ),
    descriptionInner: (
      <>
        Travel in comfort with {"Milwaukee to Chicago Car Service"} designed for people who want a smooth and stress free
                    experience. From local trips to airport rides our drivers make every journey easy. Enjoy calm pickups,
                    friendly service and dependable transport without rushing or worrying about traffic.
                    Your ride stays simple, safe and well planned throughout {"Milwaukee to Chicago"}.
      </>
    ),
  },
  'milwaukee-to-ohare-car-service': {
    variant: 'landing',
    sectionClass: 'hero',
    background: { default: heroBg_milwaukee_to_ohare_car_service, sizes: '(max-width: 1024px) 800px, 1440px', width: 1440, height: 810 },
    titleInner: (
      <>
        <span className="hero-title-line hero-title-line--highlight">{"Milwaukee to O'Hare"}</span>{' '}
                    <span className="hero-title-line">{"Car Service"}</span>
      </>
    ),
    descriptionInner: (
      <>
        Travel in comfort with {"Milwaukee to O'Hare Car Service"} designed for people who want a smooth and stress free
                    experience. From local trips to airport rides our drivers make every journey easy. Enjoy calm pickups,
                    friendly service and dependable transport without rushing or worrying about traffic.
                    Your ride stays simple, safe and well planned throughout {"Milwaukee to O'Hare"}.
      </>
    ),
  },
  'new-haven-ct-car-service': {
    variant: 'landing',
    sectionClass: 'hero',
    background: { default: heroBg_new_haven_ct_car_service, sizes: '(max-width: 1024px) 800px, 1440px', width: 1440, height: 810 },
    titleInner: (
      <>
        <span className="hero-title-line hero-title-line--highlight">{"New Haven CT Car Service"}</span>{' '}
                    <span className="hero-title-line">{"for Easy Airport Travel"}</span>
      </>
    ),
    descriptionInner: (
      <>
        Our New Haven CT Car Service provides private transportation for airport transfers, business trips, and
                    personal travel throughout New Haven. Whether you need a New Haven car service for an early flight, a limo
                    New Haven CT for a special trip, or a New Haven limo service to JFK, we deliver smooth and professional
                    rides.
      </>
    ),
  },
  'new-york-car-service': {
    variant: 'landing',
    sectionClass: 'hero',
    background: { default: heroBg_new_york_car_service, sizes: '(max-width: 1024px) 800px, 1440px', width: 1440, height: 810 },
    titleInner: (
      <>
        <span className="hero-title-line hero-title-line--highlight">{"New York"}</span>{' '}
                    <span className="hero-title-line">{"Car Service"}</span>
      </>
    ),
    descriptionInner: (
      <>
        Travel in comfort with {"New York Car Service"} designed for people who want a smooth and stress free
                    experience. From local trips to airport rides our drivers make every journey easy. Enjoy calm pickups,
                    friendly service and dependable transport without rushing or worrying about traffic.
                    Your ride stays simple, safe and well planned throughout {"New York"}.
      </>
    ),
  },
  'newark-airport-service': {
    variant: 'landing',
    sectionClass: 'hero',
    background: { default: heroBg_newark_airport_service, sizes: '(max-width: 1024px) 800px, 1440px', width: 1440, height: 810 },
    titleInner: (
      <>
        <span className="hero-title-line hero-title-line--highlight">{"Premium Newark Airport Service"}</span>{' '}
                    <span className="hero-title-line">{"for Local and Long-Distance Travel"}</span>
      </>
    ),
    descriptionInner: (
      <>
        We offer premium Newark Airport Service for travelers who want comfort, style, and reliability. Our Newark
                    limo service, black car service Newark Airport, and car service from Newark Airport to Manhattan is ideal
                    for business travel, airport transfers, and city rides.
      </>
    ),
  },
  'norwalk-ct-car-service': {
    variant: 'landing',
    sectionClass: 'hero',
    background: { default: heroBg_norwalk_ct_car_service, sizes: '(max-width: 1024px) 800px, 1440px', width: 1440, height: 810 },
    titleInner: (
      <>
        <span className="hero-title-line hero-title-line--highlight">{"Norwalk CT"}</span>{' '}
                    <span className="hero-title-line">{"Car Service"}</span>
      </>
    ),
    descriptionInner: (
      <>
        Travel in comfort with {"Norwalk CT Car Service"} designed for people who want a smooth and stress free
                    experience. From local trips to airport rides our drivers make every journey easy. Enjoy calm pickups,
                    friendly service and dependable transport without rushing or worrying about traffic.
                    Your ride stays simple, safe and well planned throughout {"Norwalk CT"}.
      </>
    ),
  },
  'nyc-limo-service': {
    variant: 'landing',
    sectionClass: 'hero',
    background: { default: heroBg_nyc_limo_service, sizes: '(max-width: 1024px) 800px, 1440px', width: 1440, height: 810 },
    titleInner: (
      <>
        <span className="hero-title-line hero-title-line--highlight">{"NYC"}</span>{' '}
                    <span className="hero-title-line">{"Limo Service"}</span>
      </>
    ),
    descriptionInner: (
      <>
        Travel in comfort with {"NYC Limo Service"} designed for people who want a smooth and stress free
                    experience. From local trips to airport rides our drivers make every journey easy. Enjoy calm pickups,
                    friendly service and dependable transport without rushing or worrying about traffic.
                    Your ride stays simple, safe and well planned throughout {"NYC"}.
      </>
    ),
  },
  'stamford-ct-car-service': {
    variant: 'landing',
    sectionClass: 'hero',
    background: { default: heroBg_stamford_ct_car_service, sizes: '(max-width: 1024px) 800px, 1440px', width: 1440, height: 810 },
    titleInner: (
      <>
        <span className="hero-title-line hero-title-line--highlight">{"Stamford CT Car Service"}</span>{' '}
                    <span className="hero-title-line">{"for Business and Airport Travel"}</span>
      </>
    ),
    descriptionInner: (
      <>
        Our Stamford CT Car Service offers a refined way to travel for airport transfers, meetings, and special
                    occasions. Whether you need a Stamford car service for a quick trip across town, a limo service Stamford CT
                    for executive travel, or a Stamford limo service for a polished ride, we provide professional
                    transportation tailored to your schedule.
      </>
    ),
  },
  'texas-car-service': {
    variant: 'landing',
    sectionClass: 'hero',
    background: { default: heroBg_texas_car_service, sizes: '(max-width: 1024px) 800px, 1440px', width: 1440, height: 810 },
    titleInner: (
      <>
        <span className="hero-title-line hero-title-line--highlight">{"Texas"}</span>{' '}
                    <span className="hero-title-line">{"Car Service"}</span>
      </>
    ),
    descriptionInner: (
      <>
        Travel in comfort with {"Texas Car Service"} designed for people who want a smooth and stress free
                    experience. From local trips to airport rides our drivers make every journey easy. Enjoy calm pickups,
                    friendly service and dependable transport without rushing or worrying about traffic.
                    Your ride stays simple, safe and well planned throughout {"Texas"}.
      </>
    ),
  },
  'west-palm-beach-to-miami-limo-service': {
    variant: 'landing',
    sectionClass: 'hero',
    background: { default: heroBg_west_palm_beach_to_miami_limo_service, sizes: '(max-width: 1024px) 800px, 1440px', width: 1440, height: 810 },
    titleInner: (
      <>
        <span className="hero-title-line hero-title-line--highlight">{"West palm beach to Miami"}</span>{' '}
                    <span className="hero-title-line">{"Limo Service"}</span>
      </>
    ),
    descriptionInner: (
      <>
        Travel in comfort with {"West palm beach to Miami Limo Service"} designed for people who want a smooth and stress free
                    experience. From local trips to airport rides our drivers make every journey easy. Enjoy calm pickups,
                    friendly service and dependable transport without rushing or worrying about traffic.
                    Your ride stays simple, safe and well planned throughout {"West palm beach to Miami"}.
      </>
    ),
  },
  'westchester-county-car-service': {
    variant: 'landing',
    sectionClass: 'hero',
    background: { default: heroBg_westchester_county_car_service, sizes: '(max-width: 1024px) 800px, 1440px', width: 1440, height: 810 },
    titleInner: (
      <>
        <span className="hero-title-line hero-title-line--highlight">{"Westchester County"}</span>{' '}
                    <span className="hero-title-line">{"Car Service"}</span>
      </>
    ),
    descriptionInner: (
      <>
        Travel in comfort with {"Westchester County Car Service"} designed for people who want a smooth and stress free
                    experience. From local trips to airport rides our drivers make every journey easy. Enjoy calm pickups,
                    friendly service and dependable transport without rushing or worrying about traffic.
                    Your ride stays simple, safe and well planned throughout {"Westchester County"}.
      </>
    ),
  },
  'wisconsin-car-service': {
    variant: 'landing',
    sectionClass: 'hero',
    background: { default: heroBg_wisconsin_car_service, sizes: '(max-width: 1024px) 800px, 1440px', width: 1440, height: 810 },
    titleInner: (
      <>
        <span className="hero-title-line hero-title-line--highlight">{"Wisconsin"}</span>{' '}
                    <span className="hero-title-line">{"Car Service"}</span>
      </>
    ),
    descriptionInner: (
      <>
        Travel in comfort with {"Wisconsin Car Service"} designed for people who want a smooth and stress free
                    experience. From local trips to airport rides our drivers make every journey easy. Enjoy calm pickups,
                    friendly service and dependable transport without rushing or worrying about traffic.
                    Your ride stays simple, safe and well planned throughout {"Wisconsin"}.
      </>
    ),
  },
}

/** @param {string} pageKey */
export function getHeroPage(pageKey) {
  const config = HERO_PAGES[pageKey]
  if (!config) throw new Error(`Unknown hero page key: ${pageKey}`)
  return config
}
