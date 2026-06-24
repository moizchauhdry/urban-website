import faqImage from '../../../../assets/other-pages/milwaukee-to-ohare-car-service/faqs/faqs.webp'

export default function FaqSection() {
  return (
    <section className="faq-section">
      <div className="container">
        <h2 className="section-title faq-title-heading">FAQs</h2>
        <div className="faq-grid">
          <div className="faq-list">
            <details className="faq-item" open>
              <summary>Which airport is closest to the city center?</summary>
              <div className="faq-answer">
                The airport closest to the city center varies by destination, but most major cities have one primary
                airport located within a short driving distance. Travel time usually ranges between 15–40 minutes,
                depending on traffic and your specific location. Using a private chauffeur ensures the quickest and most
                comfortable route.
              </div>
            </details>
            <details className="faq-item">
              <summary>How do I get from the airport to downtown?</summary>
              <div className="faq-answer">
                You can reach downtown using several transportation options including private car services, taxis, airport
                shuttles, or public transit. For the most seamless experience, a pre-booked limo or chauffeur service
                offers direct pickup at arrivals, professional assistance with luggage, and a stress-free ride to your
                hotel or destination.
              </div>
            </details>
            <details className="faq-item">
              <summary>What is the easiest way to get to the city from the airport?</summary>
              <div className="faq-answer">
                The easiest and most comfortable option is booking a private airport transfer. Your chauffeur meets you
                at arrivals, assists with bags, and drives you directly to your destination. Airports may also offer
                taxis, ride-share options, and public transportation depending on local infrastructure.
              </div>
            </details>
            <details className="faq-item">
              <summary>What areas do you provide limo and chauffeur services in?</summary>
              <div className="faq-answer">
                We provide professional car services throughout the city and surrounding areas. Whether you need
                transportation within downtown, suburban neighborhoods, business districts, or nearby towns, our
                chauffeurs cover all major routes to ensure smooth and reliable travel.
              </div>
            </details>
            <details className="faq-item">
              <summary>Can I book a chauffeur for multiple stops within the city?</summary>
              <div className="faq-answer">
                Yes, you can book point-to-point rides, hourly hire, or multi-stop trips. Our chauffeurs can stay with you
                throughout the journey, making it ideal for meetings, shopping trips, events, or city tours.
              </div>
            </details>
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

