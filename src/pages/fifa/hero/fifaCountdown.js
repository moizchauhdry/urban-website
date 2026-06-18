/** FIFA World Cup 2026 — Mexico City opening match. */
export const FIFA_KICKOFF_MS = new Date('2026-06-11T19:00:00-06:00').getTime()

/** FIFA World Cup 2026 final — MetLife Stadium, New Jersey. */
export const FIFA_FINAL_MS = new Date('2026-07-19T15:00:00-04:00').getTime()

export function getCountdownTarget(now = Date.now()) {
  if (now < FIFA_KICKOFF_MS) {
    return { targetMs: FIFA_KICKOFF_MS, label: 'KICKOFF COUNTDOWN', live: false, ended: false }
  }
  if (now < FIFA_FINAL_MS) {
    return { targetMs: FIFA_FINAL_MS, label: 'FINAL COUNTDOWN', live: true, ended: false }
  }
  return { targetMs: FIFA_FINAL_MS, label: 'TOURNAMENT COMPLETE', live: false, ended: true }
}

export function getRemainingUntil(targetMs, now = Date.now()) {
  const diff = Math.max(0, targetMs - now)
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
    totalMs: diff,
  }
}
