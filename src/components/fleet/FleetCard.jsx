import { memo } from 'react'
import { FleetImageSlider } from './FleetImageSlider.jsx'

function FleetCardInner({ item }) {
  return (
    <article className="fleet-card flex h-full flex-col">
      <div className={`fleet-img shrink-0 ${item.imgClass} fleet-img--with-slider`}>
        <FleetImageSlider images={item.images} />
      </div>

      <div className="fleet-body flex flex-1 flex-col">
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
              <i className={s.icon} /> {s.text}
            </div>
          ))}
        </div>
        <a href="#" className="btn-quote mt-auto">
          Get A Quote
        </a>
      </div>
    </article>
  )
}

export const FleetCard = memo(FleetCardInner)
