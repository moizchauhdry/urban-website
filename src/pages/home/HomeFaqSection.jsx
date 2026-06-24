import faqImage from '../../assets/faqImage.js'

const FAQ_ITEMS = [
  {
    question: 'Will My Chauffeur Assist With Luggage At The Airport Or Hotel?',
    answer:
      'Yes. Your chauffeur will meet you at the designated pickup point, assist with luggage, and ensure a smooth transfer to or from your hotel, residence, or terminal.',
    open: true,
  },
  {
    question: 'What happens if my flight is delayed?',
    answer:
      'We monitor flights in real time and adjust pickup times automatically when delays occur, so your chauffeur is ready when you land without extra coordination on your end.',
  },
  {
    question: 'Can I choose a specific car for my ride?',
    answer:
      'You can request a preferred vehicle category or model based on availability when booking. Our team will confirm the best match for your party size, luggage, and occasion.',
  },
  {
    question: 'Do you offer long distance travel?',
    answer:
      'Yes. We provide city-to-city and long-distance private transfers with professional chauffeurs and spacious luxury vehicles for comfortable intercity travel.',
  },
  {
    question: 'What safety measures do your chauffeurs follow?',
    answer:
      'All chauffeurs are fully licensed, background-checked, and trained in defensive driving. Vehicles are regularly inspected, cleaned, and maintained to premium safety standards.',
  },
]

export default function HomeFaqSection() {
  return (
    <section className="faq-section home-faq-section">
      <div className="container">
        <h2 className="section-title faq-title-heading">FAQs</h2>
        <div className="faq-grid">
          <div className="faq-list">
            {FAQ_ITEMS.map((item) => (
              <details key={item.question} className="faq-item" open={item.open ?? false}>
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

