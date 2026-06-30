/** @param {string} railLabel */
function serviceTitle(railLabel) {
  return railLabel
    .toLowerCase()
    .split(' ')
    .map((word) => {
      if (word === "o'hare") return "O'Hare"
      if (word === 'jfk') return 'JFK'
      if (word === 'lga') return 'LGA'
      if (word === 'bdl') return 'BDL'
      if (word === 'ct') return 'CT'
      if (word === 'nyc') return 'NYC'
      return word.charAt(0).toUpperCase() + word.slice(1)
    })
    .join(' ')
}

/** @param {string} railLabel */
function detectVariant(railLabel) {
  const upper = railLabel.toUpperCase()
  if (upper.includes(' TO ')) return 'route'
  if (upper.includes('AIRPORT')) return 'airport'
  if (upper.includes('LIMO') || upper.includes('CHAUFFEUR')) return 'luxury'
  return 'regional'
}

/**
 * @param {{
 *   railLabel: string,
 *   images: [string, string, string],
 *   variant?: 'regional' | 'airport' | 'route' | 'luxury',
 * }} config
 */
export function buildLuxuryRouteCards({ railLabel, images, variant }) {
  const [img1, img2, img3] = images
  const title = serviceTitle(railLabel)
  const kind = variant ?? detectVariant(railLabel)
  const service = title.toLowerCase()

  if (kind === 'route') {
    const route = title.replace(/ Car Service$| Limo Service$| Chauffeur Service$/, '')
    return [
      {
        id: 'everyday',
        railLabel,
        title: `${route} Transfers Done Right`,
        description: `Travel between destinations should feel effortless. Our ${service} is built for comfort, punctuality and a calm cabin from pickup to drop-off.`,
        description2:
          'Licensed chauffeurs handle luggage, timing and routing so you can relax whether you are heading out for business, leisure or a special event.',
        imageSrc: img1,
      },
      {
        id: 'airport',
        railLabel,
        title: `Professional Drivers for the ${route} Route`,
        description:
          'Every ride includes a clean luxury vehicle, a vetted chauffeur and clear communication before your trip begins.',
        description2:
          'We monitor schedules and traffic so your driver is ready when you are, with space for bags and a smooth, quiet ride throughout the journey.',
        imageSrc: img2,
      },
      {
        id: 'long-distance',
        railLabel,
        title: `Book Your ${route} Ride`,
        description:
          'Reserve your transfer in minutes and enjoy door-to-door service with transparent pricing and premium vehicles.',
        description2:
          'Families, executives and frequent travelers rely on us for reliable long-distance transportation with the same polished experience every time.',
        imageSrc: img3,
      },
    ]
  }

  if (kind === 'airport') {
    return [
      {
        id: 'everyday',
        railLabel,
        title: `${title} You Can Count On`,
        description: `Airport travel comes with enough stress already. Our ${service} focuses on early arrivals, luggage help and calm, professional pickups.`,
        description2:
          'Whether you are catching an early flight or landing after a long trip, you get a clean car, a licensed driver and a smooth ride without the rush.',
        imageSrc: img1,
      },
      {
        id: 'airport',
        railLabel,
        title: 'Reliable Terminal Pickups & Drop-Offs',
        description:
          'We track flights, adjust for delays and meet you at the right terminal so your airport transfer stays simple and predictable.',
        description2:
          'Business travelers, families and frequent flyers all receive the same polished service with smart routing and room for luggage.',
        imageSrc: img2,
      },
      {
        id: 'long-distance',
        railLabel,
        title: 'City-to-City & Long Distance Airport Transfers',
        description:
          'Need to connect beyond the airport? We provide comfortable long-distance rides with premium vehicles and experienced chauffeurs.',
        description2:
          'From local transfers to intercity travel, every trip is handled door-to-door with the comfort and reliability you expect.',
        imageSrc: img3,
      },
    ]
  }

  if (kind === 'luxury') {
    return [
      {
        id: 'everyday',
        railLabel,
        title: `${title} for Elevated Everyday Travel`,
        description: `Premium transportation should feel personal and refined. Our ${service} delivers polished rides for work, evenings out and daily plans.`,
        description2:
          'You get immaculate vehicles, discreet chauffeurs and a calm experience whether your schedule is packed or you simply want to arrive in style.',
        imageSrc: img1,
      },
      {
        id: 'airport',
        railLabel,
        title: 'Airport & Event Transportation',
        description:
          'From airport arrivals to weddings, galas and corporate events, we provide punctual luxury service with attention to every detail.',
        description2:
          'Your chauffeur arrives early, assists with luggage and keeps the ride smooth so you can focus on what matters.',
        imageSrc: img2,
      },
      {
        id: 'long-distance',
        railLabel,
        title: 'Long Distance Luxury Travel',
        description:
          'Longer journeys deserve the same level of comfort as a city transfer. Enjoy spacious cabins, professional drivers and seamless door-to-door service.',
        description2:
          'Whether across town or between cities, we make every mile feel effortless with premium vehicles and reliable scheduling.',
        imageSrc: img3,
      },
    ]
  }

  return [
    {
      id: 'everyday',
      railLabel,
      title: `${title} for Everyday Travel`,
      description: `A premium ${service} should feel like having someone you trust behind the wheel. Many travelers choose us for calm, comfortable and predictable rides.`,
      description2:
        'Whether you are heading to work, meeting friends or planning a family outing, you get a clean car, a licensed driver and a smooth trip without the usual rush or confusion.',
      imageSrc: img1,
    },
    {
      id: 'airport',
      railLabel,
      title: `Airport Transportation for ${title.replace(/ Car Service$| Limo Service$| Chauffeur Service$/, '')}`,
      description:
        'Flying already comes with enough pressure so your airport ride should not add more stress. Our service is built around reliable pickups, luggage help and smart routing.',
      description2:
        'Your driver arrives early so you can relax instead of racing the clock. Business travelers, families and frequent flyers all get the same calm, professional experience.',
      imageSrc: img2,
    },
    {
      id: 'long-distance',
      railLabel,
      title: 'Long Distance & City-to-City Rides',
      description: `Long distance travel should feel calm, not overwhelming. When you book ${service} for intercity or airport transfers, you get space for luggage and a comfortable cabin.`,
      description2:
        'Licensed chauffeurs keep the full journey simple from pickup to drop-off, whether across the region or connecting to a major hub.',
      imageSrc: img3,
    },
  ]
}
