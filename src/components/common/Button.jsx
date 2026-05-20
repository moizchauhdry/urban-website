/**
 * Thin wrapper so you can add shared button behavior later without touching section markup.
 */
export function Button({ as: Comp = 'button', className = '', ...props }) {
  return <Comp className={className} {...props} />
}
