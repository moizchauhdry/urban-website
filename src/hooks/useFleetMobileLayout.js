import { useEffect, useState } from 'react'

const MQ = '(max-width:720px)'

/** True when fleet should show one-card carousel (matches site mobile breakpoint). */
export function useFleetMobileLayout() {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(MQ).matches : false,
  )

  useEffect(() => {
    const mq = window.matchMedia(MQ)
    const onChange = () => setIsMobile(mq.matches)
    onChange()
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return isMobile
}
