import heroFifa from '../../assets/hero/pages/fifa-800.webp'
import heroFifaLg from '../../assets/hero/pages/fifa-1440.webp'
import { LANDING_BACKGROUND, MIAMI_BACKGROUND, getLandingBackground } from './landingBackground.js'
/** @typedef {'landing' | 'home' | 'fifa'} HeroVariant */

const LANDING_BG = LANDING_BACKGROUND
const MIAMI_BG = MIAMI_BACKGROUND

/** Landing + FIFA heroes — dynamically imported off the home critical path. */
export const HERO_PAGES = {
  'connecticut': {
    variant: 'landing',
    sectionClass: 'hero',
    background: LANDING_BG,
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
                    experience. From local trips to airport rides drivers make every journey easy. Enjoy calm pickups,
                    friendly service and dependable transport to JFK , LGA or NYC without rushing or worrying about traffic.
                    Your ride stays simple, safe and well planned.
      </>
    ),
  },
  'florida': {
    variant: 'landing',
    sectionClass: 'hero hero--florida',
    background: LANDING_BG,
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
                    experience. From local trips to airport rides drivers make every journey easy. Enjoy calm pickups,
                    friendly service and dependable transport to MIA, FLL or Orlando without rushing or worrying about traffic.
                    Your ride stays simple, safe and well planned.
      </>
    ),
  },
  'newyork': {
    variant: 'landing',
    sectionClass: 'hero',
    background: LANDING_BG,
    titleInner: (
      <>
        <span className="hero-title-line">Premium <span className="hero-title-line--highlight">New&nbsp;York</span></span>{' '}
                    <span className="hero-title-line">Car Service</span>
      </>
    ),
    descriptionInner: (
      <>
        Travel in comfort with a New York car service designed for people who want a smooth and stress free
                    experience. From local trips to airport rides drivers make every journey easy. Enjoy calm pickups,
                    friendly service and dependable transport to JFK, LaGuardia or Newark without rushing or worrying about traffic.
                    Your ride stays simple, safe and well planned.
      </>
    ),
  },
  'illinois': {
    variant: 'landing',
    sectionClass: 'hero',
    background: LANDING_BG,
    titleInner: (
      <>
        <span className="hero-title-line">Premium <span className="hero-title-line--highlight">Illinois</span></span>{' '}
                    <span className="hero-title-line">Car Service</span>
      </>
    ),
    descriptionInner: (
      <>
        Travel in comfort with a Florida car service designed for people who want a smooth and stress free
                    experience. From local trips to airport rides drivers make every journey easy. Enjoy calm pickups,
                    friendly service and dependable transport to MIA, FLL or Orlando without rushing or worrying about traffic.
                    Your ride stays simple, safe and well planned.
      </>
    ),
  },
  'chicago-limo': {
    variant: 'landing',
    sectionClass: 'hero',
    background: LANDING_BG,
    titleInner: (
      <>
        <span className="hero-title-line"><span className="hero-title-line--highlight">Chicago</span> Limo</span>{' '}
                    <span className="hero-title-line">Car Service</span>
      </>
    ),
    descriptionInner: (
      <>
        Travel in comfort with a Florida car service designed for people who want a smooth and stress free
                    experience. From local trips to airport rides drivers make every journey easy. Enjoy calm pickups,
                    friendly service and dependable transport to MIA, FLL or Orlando without rushing or worrying about traffic.
                    Your ride stays simple, safe and well planned.
      </>
    ),
  },
  'chicago-chauffeur': {
    variant: 'landing',
    sectionClass: 'hero',
    background: LANDING_BG,
    titleInner: (
      <>
        <span className="hero-title-line"><span className="hero-title-line--highlight">Chicago</span> Chauffeur</span>{' '}
                    <span className="hero-title-line">Car Service</span>
      </>
    ),
    descriptionInner: (
      <>
        Travel in comfort with a Florida car service designed for people who want a smooth and stress free
                    experience. From local trips to airport rides drivers make every journey easy. Enjoy calm pickups,
                    friendly service and dependable transport to MIA, FLL or Orlando without rushing or worrying about traffic.
                    Your ride stays simple, safe and well planned.
      </>
    ),
  },
  'fifa': {
    variant: 'fifa',
    sectionClass: 'hero fifa-hero',
    background: { default: heroFifa, sm: heroFifa, lg: heroFifaLg, sizes: '(max-width: 1024px) 800px, 1440px', width: 1440, height: 810 },
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
  'atlanta-car-service': {
    variant: 'landing',
    sectionClass: 'hero',
    background: LANDING_BG,
    titleInner: (
      <>
        <span className="hero-title-line hero-title-line--highlight">{"Atlanta"}</span>{' '}
                    <span className="hero-title-line">{"Car Service"}</span>
      </>
    ),
    descriptionInner: (
      <>
        Travel in comfort with {"Atlanta Car Service"} designed for people who want a smooth and stress free
                    experience. From local trips to airport rides drivers make every journey easy. Enjoy calm pickups,
                    friendly service and dependable transport without rushing or worrying about traffic.
                    Your ride stays simple, safe and well planned throughout {"Atlanta"}.
      </>
    ),
  },
  'bdl-airport-car-service': {
    variant: 'landing',
    sectionClass: 'hero',
    background: LANDING_BG,
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
    background: LANDING_BG,
    titleInner: (
      <>
        <span className="hero-title-line hero-title-line--highlight">{"Boston"}</span>{' '}
                    <span className="hero-title-line">{"Car Service"}</span>
      </>
    ),
    descriptionInner: (
      <>
        Travel in comfort with {"Boston Car Service"} designed for people who want a smooth and stress free
                    experience. From local trips to airport rides drivers make every journey easy. Enjoy calm pickups,
                    friendly service and dependable transport without rushing or worrying about traffic.
                    Your ride stays simple, safe and well planned throughout {"Boston"}.
      </>
    ),
  },
  'bos-airport-car-service': {
    variant: 'landing',
    sectionClass: 'hero',
    background: LANDING_BG,
    titleInner: (
      <>
        <span className="hero-title-line hero-title-line--highlight">{"Boston Airport"}</span>{' '}
                    <span className="hero-title-line">{"Car Service You Can Trust"}</span>
      </>
    ),
    descriptionInner: (
      <>
        Travel to and from Boston Logan International Airport with complete comfort, punctuality, and luxury. Our BOS
                    airport limo service is designed for travelers who value reliability, clean vehicles, and professional
                    chauffeurs available 24/7. Whether you are flying for business or leisure, we ensure a smooth,
                    stress-free airport transfer experience every time.{' '}
                    <strong>Book your BOS limousine service today and travel without delays or uncertainty.</strong>
      </>
    ),
  },
  'boston-chauffeur-service': {
    variant: 'landing',
    sectionClass: 'hero',
    background: LANDING_BG,
    titleInner: (
      <>
        <span className="hero-title-line hero-title-line--highlight">Boston</span>{' '}
        <span className="hero-title-line">Chauffeur Service</span>
      </>
    ),
    descriptionInner: (
      <>
        A professional Boston chauffeur service for travelers who want more than a taxi. Urban Elite pairs licensed
        local chauffeurs with late-model luxury vehicles for airport transfers, corporate meetings, hourly bookings,
        and evenings out across Boston, Cambridge, and Greater Boston. Your driver tracks your plans, arrives on time,
        and keeps the ride calm from door to door.{' '}
        <strong>Reserve your Boston chauffeur today and move through the city without the stress.</strong>
      </>
    ),
  },
  'boston-limo-service': {
    variant: 'landing',
    sectionClass: 'hero',
    background: LANDING_BG,
    titleInner: (
      <>
        <span className="hero-title-line hero-title-line--highlight">Boston</span>{' '}
        <span className="hero-title-line">Limo Service</span>
      </>
    ),
    descriptionInner: (
      <>
        Elevate every arrival with a refined Boston limo service built for comfort, privacy, and presentation. From
        Logan Airport transfers and Back Bay hotel pickups to Fenway nights, corporate events, and special occasions,
        our chauffeurs deliver a polished black-car experience with upfront pricing and no surge fees.{' '}
        <strong>Book your Boston limousine service and travel in style with total peace of mind.</strong>
      </>
    ),
  },
  'connecticut-to-boston-car-service': {
    variant: 'landing',
    sectionClass: 'hero',
    background: LANDING_BG,
    titleInner: (
      <>
        <span className="hero-title-line hero-title-line--highlight">Connecticut to Boston</span>{' '}
        <span className="hero-title-line">Car Service</span>
      </>
    ),
    descriptionInner: (
      <>
        Skip the drive and arrive rested with private Connecticut to Boston car service. Urban Elite provides
        door-to-door transfers from Hartford, Stamford, Greenwich, New Haven, and across Connecticut to downtown
        Boston, Cambridge, Logan Airport, and beyond. Enjoy a clean luxury vehicle, a professional chauffeur, and a
        smooth intercity ride with clear timing from pickup to drop-off.{' '}
        <strong>Book your Connecticut to Boston transfer and travel without the highway stress.</strong>
      </>
    ),
  },
  'chicago-airport-car-service': {
    variant: 'landing',
    sectionClass: 'hero',
    background: LANDING_BG,
    titleInner: (
      <>
        <span className="hero-title-line hero-title-line--highlight">{"Chicago Airport"}</span>{' '}
                    <span className="hero-title-line">{"Car Service"}</span>
      </>
    ),
    descriptionInner: (
      <>
        Travel in comfort with {"Chicago Airport Car Service"} designed for people who want a smooth and stress free
                    experience. From local trips to airport rides drivers make every journey easy. Enjoy calm pickups,
                    friendly service and dependable transport without rushing or worrying about traffic.
                    Your ride stays simple, safe and well planned throughout {"Chicago Airport"}.
      </>
    ),
  },
  'connecticut-car-service': {
    variant: 'landing',
    sectionClass: 'hero',
    background: LANDING_BG,
    titleInner: (
      <>
        <span className="hero-title-line hero-title-line--highlight">{"Connecticut"}</span>{' '}
                    <span className="hero-title-line">{"Car Service"}</span>
      </>
    ),
    descriptionInner: (
      <>
        Travel in comfort with {"Connecticut Car Service"} designed for people who want a smooth and stress free
                    experience. From local trips to airport rides drivers make every journey easy. Enjoy calm pickups,
                    friendly service and dependable transport without rushing or worrying about traffic.
                    Your ride stays simple, safe and well planned throughout {"Connecticut"}.
      </>
    ),
  },
  'ct-to-jfk-airport-car-service': {
    variant: 'landing',
    sectionClass: 'hero',
    background: LANDING_BG,
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
    background: LANDING_BG,
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
    background: LANDING_BG,
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
    background: LANDING_BG,
    titleInner: (
      <>
        <span className="hero-title-line hero-title-line--highlight">{"Florida"}</span>{' '}
                    <span className="hero-title-line">{"Car Service"}</span>
      </>
    ),
    descriptionInner: (
      <>
        Travel in comfort with {"Florida Car Service"} designed for people who want a smooth and stress free
                    experience. From local trips to airport rides drivers make every journey easy. Enjoy calm pickups,
                    friendly service and dependable transport without rushing or worrying about traffic.
                    Your ride stays simple, safe and well planned throughout {"Florida"}.
      </>
    ),
  },
  'greenwich-ct-car-service': {
    variant: 'landing',
    sectionClass: 'hero',
    background: LANDING_BG,
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
    background: LANDING_BG,
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
    background: LANDING_BG,
    titleInner: (
      <>
        <span className="hero-title-line hero-title-line--highlight">{"Illinois"}</span>{' '}
                    <span className="hero-title-line">{"Car Service"}</span>
      </>
    ),
    descriptionInner: (
      <>
        Travel in comfort with {"Illinois Car Service"} designed for people who want a smooth and stress free
                    experience. From local trips to airport rides drivers make every journey easy. Enjoy calm pickups,
                    friendly service and dependable transport without rushing or worrying about traffic.
                    Your ride stays simple, safe and well planned throughout {"Illinois"}.
      </>
    ),
  },
  'jfk-airport-car-service': {
    variant: 'landing',
    sectionClass: 'hero',
    background: LANDING_BG,
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
    background: LANDING_BG,
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
    background: LANDING_BG,
    titleInner: (
      <>
        <span className="hero-title-line hero-title-line--highlight">{"Luxury New Jersey"}</span>{' '}
                    <span className="hero-title-line">{"Car Service"}</span>
      </>
    ),
    descriptionInner: (
      <>
        Travel in comfort with {"Luxury New Jersey Car Service"} designed for people who want a smooth and stress free
                    experience. From local trips to airport rides drivers make every journey easy. Enjoy calm pickups,
                    friendly service and dependable transport without rushing or worrying about traffic.
                    Your ride stays simple, safe and well planned throughout {"Luxury New Jersey"}.
      </>
    ),
  },
  'manhattan-car-service': {
    variant: 'landing',
    sectionClass: 'hero',
    background: LANDING_BG,
    titleInner: (
      <>
        <span className="hero-title-line hero-title-line--highlight">{"Manhattan"}</span>{' '}
                    <span className="hero-title-line">{"Car Service"}</span>
      </>
    ),
    descriptionInner: (
      <>
        Travel in comfort with {"Manhattan Car Service"} designed for people who want a smooth and stress free
                    experience. From local trips to airport rides drivers make every journey easy. Enjoy calm pickups,
                    friendly service and dependable transport without rushing or worrying about traffic.
                    Your ride stays simple, safe and well planned throughout {"Manhattan"}.
      </>
    ),
  },
  'miami-airport-car-service': {
    variant: 'landing',
    sectionClass: 'hero',
    background: MIAMI_BG,
    titleInner: (
      <>
        <span className="hero-title-line hero-title-line--highlight">{"Miami Airport"}</span>{' '}
                    <span className="hero-title-line">{"Car Service"}</span>
      </>
    ),
    descriptionInner: (
      <>
        Travel in comfort with {"Miami Airport Car Service"} designed for people who want a smooth and stress free
                    experience. From local trips to airport rides drivers make every journey easy. Enjoy calm pickups,
                    friendly service and dependable transport without rushing or worrying about traffic.
                    Your ride stays simple, safe and well planned throughout {"Miami Airport"}.
      </>
    ),
  },
  'miami-airport-limo-service': {
    variant: 'landing',
    sectionClass: 'hero',
    background: MIAMI_BG,
    titleInner: (
      <>
        <span className="hero-title-line hero-title-line--highlight">{"Miami Airport"}</span>{' '}
                    <span className="hero-title-line">{"Limo Service"}</span>
      </>
    ),
    descriptionInner: (
      <>
        Travel in comfort with {"Miami Airport Limo Service"} designed for people who want a smooth and stress free
                    experience. From local trips to airport rides drivers make every journey easy. Enjoy calm pickups,
                    friendly service and dependable transport without rushing or worrying about traffic.
                    Your ride stays simple, safe and well planned throughout {"Miami Airport"}.
      </>
    ),
  },
  'miami-car-service': {
    variant: 'landing',
    sectionClass: 'hero',
    background: MIAMI_BG,
    titleInner: (
      <>
        <span className="hero-title-line hero-title-line--highlight">{"Miami"}</span>{' '}
                    <span className="hero-title-line">{"Car Service"}</span>
      </>
    ),
    descriptionInner: (
      <>
        Travel in comfort with {"Miami Car Service"} designed for people who want a smooth and stress free
                    experience. From local trips to airport rides drivers make every journey easy. Enjoy calm pickups,
                    friendly service and dependable transport without rushing or worrying about traffic.
                    Your ride stays simple, safe and well planned throughout {"Miami"}.
      </>
    ),
  },
  'miami-chauffeur-service': {
    variant: 'landing',
    sectionClass: 'hero',
    background: MIAMI_BG,
    titleInner: (
      <>
        <span className="hero-title-line hero-title-line--highlight">{"Miami"}</span>{' '}
                    <span className="hero-title-line">{"Chauffeur Service"}</span>
      </>
    ),
    descriptionInner: (
      <>
        Travel in comfort with {"Miami Chauffeur Service"} designed for people who want a smooth and stress free
                    experience. From local trips to airport rides drivers make every journey easy. Enjoy calm pickups,
                    friendly service and dependable transport without rushing or worrying about traffic.
                    Your ride stays simple, safe and well planned throughout {"Miami"}.
      </>
    ),
  },
  'miami-to-fort-lauderdale-car-service': {
    variant: 'landing',
    sectionClass: 'hero',
    background: MIAMI_BG,
    titleInner: (
      <>
        <span className="hero-title-line hero-title-line--highlight">{"Miami to Fort Lauderdale"}</span>{' '}
                    <span className="hero-title-line">{"car service"}</span>
      </>
    ),
    descriptionInner: (
      <>
        Travel in comfort with {"Miami to Fort Lauderdale car service"} designed for people who want a smooth and stress free
                    experience. From local trips to airport rides drivers make every journey easy. Enjoy calm pickups,
                    friendly service and dependable transport without rushing or worrying about traffic.
                    Your ride stays simple, safe and well planned throughout {"Miami to Fort Lauderdale"}.
      </>
    ),
  },
  'miami-to-naples-car-service': {
    variant: 'landing',
    sectionClass: 'hero',
    background: MIAMI_BG,
    titleInner: (
      <>
        <span className="hero-title-line hero-title-line--highlight">{"Miami to Naples"}</span>{' '}
                    <span className="hero-title-line">{"Car Service"}</span>
      </>
    ),
    descriptionInner: (
      <>
        Travel in comfort with {"Miami to Naples Car Service"} designed for people who want a smooth and stress free
                    experience. From local trips to airport rides drivers make every journey easy. Enjoy calm pickups,
                    friendly service and dependable transport without rushing or worrying about traffic.
                    Your ride stays simple, safe and well planned throughout {"Miami to Naples"}.
      </>
    ),
  },
  'miami-to-orlando-car-service': {
    variant: 'landing',
    sectionClass: 'hero',
    background: MIAMI_BG,
    titleInner: (
      <>
        <span className="hero-title-line hero-title-line--highlight">{"Miami to Orlando"}</span>{' '}
                    <span className="hero-title-line">{"Car Service"}</span>
      </>
    ),
    descriptionInner: (
      <>
        Travel in comfort with {"Miami to Orlando Car Service"} designed for people who want a smooth and stress free
                    experience. From local trips to airport rides drivers make every journey easy. Enjoy calm pickups,
                    friendly service and dependable transport without rushing or worrying about traffic.
                    Your ride stays simple, safe and well planned throughout {"Miami to Orlando"}.
      </>
    ),
  },
  'milwaukee-airport-limo-service': {
    variant: 'landing',
    sectionClass: 'hero',
    background: LANDING_BG,
    titleInner: (
      <>
        <span className="hero-title-line hero-title-line--highlight">{"Milwaukee Airport"}</span>{' '}
                    <span className="hero-title-line">{"Limo Service"}</span>
      </>
    ),
    descriptionInner: (
      <>
        Travel in comfort with {"Milwaukee Airport Limo Service"} designed for people who want a smooth and stress free
                    experience. From local trips to airport rides drivers make every journey easy. Enjoy calm pickups,
                    friendly service and dependable transport without rushing or worrying about traffic.
                    Your ride stays simple, safe and well planned throughout {"Milwaukee Airport"}.
      </>
    ),
  },
  'milwaukee-car-service': {
    variant: 'landing',
    sectionClass: 'hero',
    background: LANDING_BG,
    titleInner: (
      <>
        <span className="hero-title-line hero-title-line--highlight">{"Milwaukee"}</span>{' '}
                    <span className="hero-title-line">{"Car Service"}</span>
      </>
    ),
    descriptionInner: (
      <>
        Travel in comfort with {"Milwaukee Car Service"} designed for people who want a smooth and stress free
                    experience. From local trips to airport rides drivers make every journey easy. Enjoy calm pickups,
                    friendly service and dependable transport without rushing or worrying about traffic.
                    Your ride stays simple, safe and well planned throughout {"Milwaukee"}.
      </>
    ),
  },
  'milwaukee-chauffeur-service': {
    variant: 'landing',
    sectionClass: 'hero',
    background: LANDING_BG,
    titleInner: (
      <>
        <span className="hero-title-line hero-title-line--highlight">{"Milwaukee"}</span>{' '}
                    <span className="hero-title-line">{"Chauffeur Service"}</span>
      </>
    ),
    descriptionInner: (
      <>
        Travel in comfort with {"Milwaukee Chauffeur Service"} designed for people who want a smooth and stress free
                    experience. From local trips to airport rides drivers make every journey easy. Enjoy calm pickups,
                    friendly service and dependable transport without rushing or worrying about traffic.
                    Your ride stays simple, safe and well planned throughout {"Milwaukee"}.
      </>
    ),
  },
  'milwaukee-limo-service': {
    variant: 'landing',
    sectionClass: 'hero',
    background: LANDING_BG,
    titleInner: (
      <>
        <span className="hero-title-line hero-title-line--highlight">{"Milwaukee"}</span>{' '}
                    <span className="hero-title-line">{"Limo Service"}</span>
      </>
    ),
    descriptionInner: (
      <>
        Travel in comfort with {"Milwaukee Limo Service"} designed for people who want a smooth and stress free
                    experience. From local trips to airport rides drivers make every journey easy. Enjoy calm pickups,
                    friendly service and dependable transport without rushing or worrying about traffic.
                    Your ride stays simple, safe and well planned throughout {"Milwaukee"}.
      </>
    ),
  },
  'milwaukee-to-chicago-car-service': {
    variant: 'landing',
    sectionClass: 'hero',
    background: LANDING_BG,
    titleInner: (
      <>
        <span className="hero-title-line hero-title-line--highlight">{"Milwaukee to Chicago"}</span>{' '}
                    <span className="hero-title-line">{"Car Service"}</span>
      </>
    ),
    descriptionInner: (
      <>
        Travel in comfort with {"Milwaukee to Chicago Car Service"} designed for people who want a smooth and stress free
                    experience. From local trips to airport rides drivers make every journey easy. Enjoy calm pickups,
                    friendly service and dependable transport without rushing or worrying about traffic.
                    Your ride stays simple, safe and well planned throughout {"Milwaukee to Chicago"}.
      </>
    ),
  },
  'milwaukee-to-ohare-car-service': {
    variant: 'landing',
    sectionClass: 'hero',
    background: LANDING_BG,
    titleInner: (
      <>
        <span className="hero-title-line hero-title-line--highlight">{"Milwaukee to O'Hare"}</span>{' '}
                    <span className="hero-title-line">{"Car Service"}</span>
      </>
    ),
    descriptionInner: (
      <>
        Travel in comfort with {"Milwaukee to O'Hare Car Service"} designed for people who want a smooth and stress free
                    experience. From local trips to airport rides drivers make every journey easy. Enjoy calm pickups,
                    friendly service and dependable transport without rushing or worrying about traffic.
                    Your ride stays simple, safe and well planned throughout {"Milwaukee to O'Hare"}.
      </>
    ),
  },
  'new-haven-ct-car-service': {
    variant: 'landing',
    sectionClass: 'hero',
    background: LANDING_BG,
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
    background: LANDING_BG,
    titleInner: (
      <>
        <span className="hero-title-line hero-title-line--highlight">{"New\u00A0York"}</span>{' '}
                    <span className="hero-title-line">{"Car Service"}</span>
      </>
    ),
    descriptionInner: (
      <>
        Travel in comfort with {"New York Car Service"} designed for people who want a smooth and stress free
                    experience. From local trips to airport rides drivers make every journey easy. Enjoy calm pickups,
                    friendly service and dependable transport without rushing or worrying about traffic.
                    Your ride stays simple, safe and well planned throughout {"New York"}.
      </>
    ),
  },
  'newark-airport-service': {
    variant: 'landing',
    sectionClass: 'hero',
    background: LANDING_BG,
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
    background: LANDING_BG,
    titleInner: (
      <>
        <span className="hero-title-line hero-title-line--highlight">{"Norwalk CT"}</span>{' '}
                    <span className="hero-title-line">{"Car Service"}</span>
      </>
    ),
    descriptionInner: (
      <>
        Travel in comfort with {"Norwalk CT Car Service"} designed for people who want a smooth and stress free
                    experience. From local trips to airport rides drivers make every journey easy. Enjoy calm pickups,
                    friendly service and dependable transport without rushing or worrying about traffic.
                    Your ride stays simple, safe and well planned throughout {"Norwalk CT"}.
      </>
    ),
  },
  'nyc-limo-service': {
    variant: 'landing',
    sectionClass: 'hero',
    background: LANDING_BG,
    titleInner: (
      <>
        <span className="hero-title-line hero-title-line--highlight">{"NYC"}</span>{' '}
                    <span className="hero-title-line">{"Limo Service"}</span>
      </>
    ),
    descriptionInner: (
      <>
        Travel in comfort with {"NYC Limo Service"} designed for people who want a smooth and stress free
                    experience. From local trips to airport rides drivers make every journey easy. Enjoy calm pickups,
                    friendly service and dependable transport without rushing or worrying about traffic.
                    Your ride stays simple, safe and well planned throughout {"NYC"}.
      </>
    ),
  },
  'stamford-ct-car-service': {
    variant: 'landing',
    sectionClass: 'hero',
    background: LANDING_BG,
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
    background: LANDING_BG,
    titleInner: (
      <>
        <span className="hero-title-line hero-title-line--highlight">{"Texas"}</span>{' '}
                    <span className="hero-title-line">{"Car Service"}</span>
      </>
    ),
    descriptionInner: (
      <>
        Travel in comfort with {"Texas Car Service"} designed for people who want a smooth and stress free
                    experience. From local trips to airport rides drivers make every journey easy. Enjoy calm pickups,
                    friendly service and dependable transport without rushing or worrying about traffic.
                    Your ride stays simple, safe and well planned throughout {"Texas"}.
      </>
    ),
  },
  'west-palm-beach-to-miami-limo-service': {
    variant: 'landing',
    sectionClass: 'hero',
    background: MIAMI_BG,
    titleInner: (
      <>
        <span className="hero-title-line hero-title-line--highlight">{"West palm beach to Miami"}</span>{' '}
                    <span className="hero-title-line">{"Limo Service"}</span>
      </>
    ),
    descriptionInner: (
      <>
        Travel in comfort with {"West palm beach to Miami Limo Service"} designed for people who want a smooth and stress free
                    experience. From local trips to airport rides drivers make every journey easy. Enjoy calm pickups,
                    friendly service and dependable transport without rushing or worrying about traffic.
                    Your ride stays simple, safe and well planned throughout {"West palm beach to Miami"}.
      </>
    ),
  },
  'westchester-county-car-service': {
    variant: 'landing',
    sectionClass: 'hero',
    background: LANDING_BG,
    titleInner: (
      <>
        <span className="hero-title-line hero-title-line--highlight">{"Westchester County"}</span>{' '}
                    <span className="hero-title-line">{"Car Service"}</span>
      </>
    ),
    descriptionInner: (
      <>
        Travel in comfort with {"Westchester County Car Service"} designed for people who want a smooth and stress free
                    experience. From local trips to airport rides drivers make every journey easy. Enjoy calm pickups,
                    friendly service and dependable transport without rushing or worrying about traffic.
                    Your ride stays simple, safe and well planned throughout {"Westchester County"}.
      </>
    ),
  },
  'wisconsin-car-service': {
    variant: 'landing',
    sectionClass: 'hero',
    background: LANDING_BG,
    titleInner: (
      <>
        <span className="hero-title-line hero-title-line--highlight">{"Wisconsin"}</span>{' '}
                    <span className="hero-title-line">{"Car Service"}</span>
      </>
    ),
    descriptionInner: (
      <>
        Travel in comfort with {"Wisconsin Car Service"} designed for people who want a smooth and stress free
                    experience. From local trips to airport rides drivers make every journey easy. Enjoy calm pickups,
                    friendly service and dependable transport without rushing or worrying about traffic.
                    Your ride stays simple, safe and well planned throughout {"Wisconsin"}.
      </>
    ),
  },
}

/** @param {string} pageKey */
export function getLandingHeroPage(pageKey) {
  const config = HERO_PAGES[pageKey]
  if (!config) throw new Error(`Unknown landing hero page key: ${pageKey}`)
  if (config.variant === 'fifa') return config

  const background = getLandingBackground(pageKey)
  const isMiami = background === MIAMI_BACKGROUND
  let sectionClass = config.sectionClass.replace(/\bhero--florida\b/, '').replace(/\s+/g, ' ').trim()
  if (!isMiami && background !== LANDING_BACKGROUND && !sectionClass.includes('hero--destination')) {
    sectionClass = `${sectionClass} hero--destination`.trim()
  }

  return { ...config, background, sectionClass }
}
