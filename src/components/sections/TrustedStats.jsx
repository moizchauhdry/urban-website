import { useEffect, useRef, useState } from 'react'
import { Car, MapPin, Star, Users } from 'lucide-react'

const STATS = [
  { target: '10,000+', label: 'Happy Customers', Icon: Users, statKey: 'customers' },
  { target: '30+', label: 'Available Cars', Icon: Car, statKey: 'cars' },
  { target: '10+', label: 'Locations', Icon: MapPin, statKey: 'locations' },
  { target: '4.5 Star', label: 'Average Rating', Icon: Star, filled: true, statKey: 'rating' },
]

function parseStat(targetStr) {
  const m = String(targetStr).match(/^([\d.,]+)(.*)$/)
  if (!m) return null
  const numStr = m[1].replace(/,/g, '')
  return {
    numericTarget: parseFloat(numStr),
    suffix: m[2],
    isFloat: numStr.includes('.'),
    final: targetStr,
  }
}

export default function TrustedStats() {
  const sectionRef = useRef(null)
  const [lines, setLines] = useState(() => STATS.map(() => '0'))
  const hasAnimated = useRef(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || hasAnimated.current) return
        hasAnimated.current = true
        io.disconnect()

        const duration = 2000
        const start = performance.now()
        const parsed = STATS.map((s) => parseStat(s.target))

        const tick = (ts) => {
          const p = Math.min((ts - start) / duration, 1)
          const eased = 1 - Math.pow(1 - p, 3)

          setLines(
            STATS.map((s, i) => {
              const cfg = parsed[i]
              if (!cfg) return s.target
              if (p >= 1) return s.target
              const v = cfg.numericTarget * eased
              return (cfg.isFloat ? v.toFixed(1) : Math.floor(v).toLocaleString()) + cfg.suffix
            }),
          )

          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.08, rootMargin: '0px 0px 20% 0px' },
    )

    io.observe(el)
    return () => {
      io.disconnect()
      hasAnimated.current = false
    }
  }, [])

  return (
    <section ref={sectionRef} className="trusted">
      <div className="trusted-inner">
        <h2>Trusted by Thousands Worldwide</h2>
        <p>
          Join our growing community of satisfied customers who choose Urban Elite for reliable, premium car Service for
          their Travel Needs
        </p>
        <div className="trusted-grid">
          {STATS.map((s, i) => {
            const StatIcon = s.Icon
            return (
              <div className="trusted-stat" key={s.target}>
                <div className="ic">
                  <StatIcon
                    size={28}
                    strokeWidth={1.75}
                    {...(s.filled
                      ? { fill: 'currentColor', stroke: 'currentColor' }
                      : {})}
                    aria-hidden="true"
                  />
                </div>
                <h3 data-stat={s.statKey}>{lines[i]}</h3>
                <p>{s.label}</p>
              </div>
            )
          })}
        </div>
        <a href="#" className="btn-yellow">
          Get a Free Quote
        </a>
      </div>
    </section>
  )
}
