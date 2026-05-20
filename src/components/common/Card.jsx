/**
 * Simple container for cards if you later extract repeated card shells.
 */
export function Card({ className = '', children, ...props }) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  )
}
