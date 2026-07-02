import QuoteLink from '../../components/layout/QuoteLink.jsx'

/**
 * @param {{ title: string, description: string, image: string }} props
 */
export default function ServicePageCard({ title, description, image }) {
  return (
    <article className="service-page-card">
      <img className="service-page-img" src={image} alt={title} loading="lazy" decoding="async" />
      <div className="service-page-body">
        <h3>{title}</h3>
        <p>{description}</p>
        <QuoteLink className="btn-yellow service-page-cta" />
      </div>
    </article>
  )
}
