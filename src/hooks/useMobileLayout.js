import { useEffect, useState } from 'react'

const MQ = '(max-width:720px)'

/** True at ≤720px — matches fleet / site mobile breakpoint. */
export function useMobileLayout() {
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
