import faqImage from '../../assets/faq/faqImage.js'
import { HOME_FAQ_ITEMS, LANDING_FAQ_ITEMS } from '../../data/faqItems.js'

/** @param {{ variant?: 'landing' | 'home' }} props */
export default function FaqSection({ variant = 'landing' }) {
  const items = variant === 'home' ? HOME_FAQ_ITEMS : LANDING_FAQ_ITEMS
  const sectionClass =
    variant === 'home' ? 'faq-section home-faq-section' : 'faq-section'

  return (
    <section className={sectionClass}>
      <div className="container">
        <h2 className="section-title faq-title-heading">FAQs</h2>
        <div className="faq-grid">
          <div className="faq-list">
            {items.map((item) => (
              <details
                key={item.question}
                className="faq-item"
                open={item.open ?? false}
              >
                <summary>{item.question}</summary>
                <div className="faq-answer">{item.answer}</div>
              </details>
            ))}
          </div>
          <img
            src={faqImage}
            alt=""
            className="faq-image"
            width={560}
            height={580}
            loading="lazy"
            decoding="async"
            draggable={false}
          />
        </div>
      </div>
    </section>
  )
}
