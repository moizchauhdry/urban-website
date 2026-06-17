const MAP_EMBED_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114964.38953681567!2d-80.299499!3d25.782545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b773a3fb2859%3A0x40060bda63d96b26!2sMiami%2C%20FL!5e0!3m2!1sen!2sus!4v1718467200000!5m2!1sen!2sus'

/** Full-width map below the contact form. */
export default function ContactMap() {
  return (
    <section className="contact-page-map-section" aria-label="Service area map">
      <iframe
        className="contact-page-map"
        title="Urban Elite Limo service area map"
        src={MAP_EMBED_SRC}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </section>
  )
}
