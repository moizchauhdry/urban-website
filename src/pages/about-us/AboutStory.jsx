import { ABOUT_US_PAGE } from '../../data/aboutUsPage.js'
import QuoteLink from '../../components/layout/QuoteLink.jsx'

/** Two-column About Us story with image and CTA. */
export default function AboutStory() {
  const { title, paragraphs, image } = ABOUT_US_PAGE.story

  return (
    <section className="section about-page-story">
      <div className="container">
        <div className="about-story-grid">
          <div className="about-story-copy">
            <h2>{title}</h2>
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            <QuoteLink className="btn-yellow" />
          </div>
          <div className="about-story-media">
            <img
              src={image.src}
              alt={image.alt}
              className="about-story-img"
              width={image.width}
              height={image.height}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
