import { useLayoutEffect } from 'react'

/** Apply CSS custom properties on a DOM node (keeps dynamic layout out of JSX style props). */
export function useCssVars(ref, vars) {
  const serialized = JSON.stringify(vars ?? null)
  useLayoutEffect(() => {
    const el = ref.current
    if (!el || !vars) return
    for (const [key, value] of Object.entries(vars)) {
      if (value == null) el.style.removeProperty(key)
      else el.style.setProperty(key, String(value))
    }
  }, [ref, serialized])
}
