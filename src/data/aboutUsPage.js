import aboutHeroSm from '../assets/hero/pages/about-800.webp'
import aboutHeroLg from '../assets/hero/pages/about-1440.webp'
import aboutStoryImg from '../assets/about/story.webp'

/** Shared About Us page content — edit here when updating copy or assets. */
export const ABOUT_US_PAGE = {
  hero: {
    default: aboutHeroLg,
    srcSet: `${aboutHeroSm} 800w, ${aboutHeroLg} 1440w`,
    sizes: '100vw',
    width: 1920,
    height: 1080,
  },
  intro: {
    title: 'About Us',
    lead:
      'Experience the ultimate private chauffeur service. Encounter every destination in our top-of-the-line vehicles, where high-end luxury meets safe, private and reliable journeys — just what the upscale modern-day passenger needs.',
  },
  features: [
    {
      id: 'availability',
      icon: 'clock',
      title: '24/7 Availability',
      description: 'Round-the-clock service with flexible pickup and drop-off times.',
    },
    {
      id: 'pickups',
      icon: 'location-dot',
      title: 'On Time Pickups',
      description: 'Convenient pickup service on time across major cities and airports.',
    },
    {
      id: 'chauffeurs',
      icon: 'id-badge',
      title: 'Licensed Chauffeurs',
      description: 'Fully licensed and professional chauffeurs for wide coverage.',
    },
  ],
  story: {
    title: 'About Us',
    paragraphs: [
      "Urban Elite Limo is a trusted partner for corporate and airport transportation across the United States. For more than a decade, we've focused on delivering punctual, safe, and professional chauffeur services for executives, business teams, and frequent travelers.",
      'Our systems include real-time flight tracking, 24/7 customer support, and an experienced chauffeur team trained to provide a smooth and stress-free travel experience. We understand corporate travel needs reliability, confidentiality, and consistency — and we deliver them on every ride.',
      "Whether it's an early-morning airport run, a multi-city roadshow, or transportation for your business guests, we provide travel solutions that keep you on schedule and in comfort.",
    ],
    image: {
      src: aboutStoryImg,
      alt: 'Professional chauffeur with luxury vehicle',
      width: 560,
      height: 420,
    },
  },
}
