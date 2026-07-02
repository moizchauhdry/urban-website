import { memo } from 'react'
import { FleetImageSlider } from './FleetImageSlider.jsx'
import QuoteLink from '../layout/QuoteLink.jsx'

function FleetCardInner({ item, priorityLoad = true }) {
  const primaryImage = item.images[0]
  const useSlider = item.images.length > 1

  return (
    <article className="fleet-card">
      <div className={`fleet-img ${item.imgClass}${useSlider ? ' fleet-img--with-slider' : ''}`}>
        {useSlider ? (
          <FleetImageSlider images={item.images} priorityLoad={priorityLoad} />
        ) : (
          <img
            src={primaryImage?.src}
            alt={primaryImage?.alt ?? item.title}
            loading={priorityLoad ? 'eager' : 'lazy'}
            decoding="async"
            draggable={false}
          />
        )}
      </div>

      <div className="fleet-body">
        <h3 className="fleet-card-title">
          {item.title}
          {item.badge ? (
            <span className="fleet-badge">{item.badge}</span>
          ) : null}
        </h3>
        <p>{item.description}</p>
        <div className="fleet-specs">
          {item.specs.map((s) => (
            <div className="spec" key={s.text}>
              <span className="spec-dot" aria-hidden="true" />
              {s.text}
            </div>
          ))}
        </div>
        <QuoteLink className="btn-quote">Get A Quote</QuoteLink>
      </div>
    </article>
  )
}

export const FleetCard = memo(FleetCardInner)
