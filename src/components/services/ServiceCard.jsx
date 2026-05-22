/**
 * @param {{ title: string, description: string, imageClass: string }} props
 */
export default function ServiceCard({ title, description, imageClass }) {
  return (
    <article className="service-card">
      <div className={`service-img ${imageClass}`} />
      <div className="service-body">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  )
}
