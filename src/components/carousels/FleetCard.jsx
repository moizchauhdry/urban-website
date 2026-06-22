import { memo } from 'react'
import { FleetImageSlider } from './FleetImageSlider.jsx'

function FleetCardInner({ item, priorityLoad = true }) {
  return (
    <article className="fleet-card">
      <div className={`fleet-img ${item.imgClass} fleet-img--with-slider`}>
        <FleetImageSlider images={item.images} priorityLoad={priorityLoad} />
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
        <a href="#" className="btn-quote">
          Get A Quote
        </a>
      </div>
    </article>
  )
}

export const FleetCard = memo(FleetCardInner)
