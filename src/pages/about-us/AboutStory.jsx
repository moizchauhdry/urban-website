import aboutStoryImg from '../../assets/about-us/content/about-story.webp'

/** Two-column About Us story with image and CTA. */
export default function AboutStory() {
  return (
    <section className="section about-page-story">
      <div className="container">
        <div className="about-story-grid">
          <div className="about-story-copy">
            <h2>About Us</h2>
            <p>
              Urban Elite Limo is a trusted partner for corporate and airport transportation across the United States.
              For more than a decade, we&apos;ve focused on delivering punctual, safe, and professional chauffeur
              services for executives, business teams, and frequent travelers.
            </p>
            <p>
              Our systems include real-time flight tracking, 24/7 customer support, and an experienced chauffeur team
              trained to provide a smooth and stress-free travel experience. We understand corporate travel needs
              reliability, confidentiality, and consistency — and we deliver them on every ride.
            </p>
            <p>
              Whether it&apos;s an early-morning airport run, a multi-city roadshow, or transportation for your
              business guests, we provide travel solutions that keep you on schedule and in comfort.
            </p>
            <a href="#" className="btn-yellow">
              Get a Free Quote
            </a>
          </div>
          <div className="about-story-media">
            <img
              src={aboutStoryImg}
              alt="Professional chauffeur with luxury vehicle"
              className="about-story-img"
              width={560}
              height={420}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
