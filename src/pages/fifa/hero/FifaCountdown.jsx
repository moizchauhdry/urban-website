import { useEffect, useState } from 'react'
import { getCountdownTarget, getRemainingUntil } from './fifaCountdown.js'

function readCountdown() {
  const target = getCountdownTarget()
  return {
    ...target,
    remaining: getRemainingUntil(target.targetMs),
  }
}

export default function FifaCountdown() {
  const [state, setState] = useState(readCountdown)

  useEffect(() => {
    const tick = () => setState(readCountdown())

    tick()
    const id = window.setInterval(tick, 1000)
    return () => window.clearInterval(id)
  }, [])

  const { label, live, ended, remaining } = state

  const units = [
    { value: remaining.days, label: 'Days', pad: false },
    { value: remaining.hours, label: 'Hours', pad: true },
    { value: remaining.minutes, label: 'Minutes', pad: true },
    { value: remaining.seconds, label: 'Seconds', pad: true },
  ]

  return (
    <div className={`fifa-countdown${live ? ' fifa-countdown--live' : ''}${ended ? ' fifa-countdown--ended' : ''}`}>
      <p className="fifa-countdown__label">{label}</p>
      {ended ? (
        <p className="fifa-countdown__ended">See you at the next World Cup</p>
      ) : (
        <div className="fifa-countdown__grid" aria-live="polite">
          {units.map(({ value, label: unitLabel, pad }) => (
            <div className="fifa-countdown__unit" key={unitLabel}>
              <span className="fifa-countdown__value">
                {pad ? String(value).padStart(2, '0') : String(value)}
              </span>
              <span className="fifa-countdown__name">{unitLabel}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
