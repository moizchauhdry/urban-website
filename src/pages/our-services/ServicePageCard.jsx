import QuoteLink from '../../components/layout/QuoteLink.jsx'
import Icon from '../../components/common/Icon.jsx'

/**
 * @param {{
 *   title: string,
 *   tag: string,
 *   image: string,
 *   featured?: boolean,
 * }} props
 */
export default function ServicePageCard({ title, tag, image, featured = false }) {
  const cardClass = featured
    ? 'service-page-card service-page-card--featured'
    : 'service-page-card'

  return (
    <article className={cardClass}>
      <QuoteLink className="service-page-card__link">
        <img
          className="service-page-img"
          src={image}
          alt=""
          width={featured ? 800 : 960}
          height={featured ? 1000 : 540}
          loading="lazy"
          decoding="async"
        />
        <div className="service-page-card__overlay" aria-hidden="true" />
        <span className="service-page-card__tag">{tag}</span>
        <div className="service-page-card__body">
          <h3>{title}</h3>
          <span className="service-page-card__cta">
            Explore
            <Icon name="arrow-up-right" size={14} className="service-page-card__cta-icon" />
          </span>
        </div>
      </QuoteLink>
    </article>
  )
}
