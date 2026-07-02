import { useEffect, useRef, useState } from 'react'
import Icon from '../../../../components/common/Icon.jsx'
import { useMobileLayout } from '../../../../hooks/useMobileLayout.js'
import QuoteLink from '../../../../components/layout/QuoteLink.jsx'

const STATS = [
  { target: '10,000+', label: 'Happy Customers', icon: 'users', statKey: 'customers' },
  { target: '30+', label: 'Available Cars', icon: 'car', statKey: 'cars' },
  { target: '10+', label: 'Locations', icon: 'location-dot', statKey: 'locations' },
  { target: '4.5 Star', label: 'Average Rating', icon: 'star', filled: true, statKey: 'rating' },
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
  const isMobile = useMobileLayout()
  const sectionRef = useRef(null)
  const [lines, setLines] = useState(() => STATS.map(() => '0'))
  const hasAnimated = useRef(false)
  const displayLines = isMobile ? STATS.map((s) => s.target) : lines

  useEffect(() => {
    if (isMobile) return undefined

    const el = sectionRef.current
    if (!el) return undefined

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
  }, [isMobile])

  return (
    <section ref={sectionRef} className="trusted">
      <div className="trusted-inner">
        <h2>Trusted by Thousands Worldwide</h2>
        <p>
          Join our growing community of satisfied customers who choose Urban Elite for reliable, premium car Service for
          their Travel Needs
        </p>
        <div className="trusted-grid">
          {STATS.map((s, i) => (
            <div className="trusted-stat" key={s.target}>
              <div className="ic">
                <Icon name={s.icon} size={28} />
              </div>
              <h3 data-stat={s.statKey}>{displayLines[i]}</h3>
              <p>{s.label}</p>
            </div>
          ))}
        </div>
        <QuoteLink className="btn-yellow" />
      </div>
    </section>
  )
}
