import ServicesShowcase from './ServicesShowcase.jsx'
import { buildServiceItems } from '../../data/serviceItems.js'

/** @param {{ items?: Array<{ id: string, title: string, description: string, imageClass: string }> }} props */
export default function ServicesSection({ items }) {
  const resolvedItems = items ?? buildServiceItems()

  return (
    <section className="section bg-muted-services">
      <div className="container">
        <ServicesShowcase items={resolvedItems} />
      </div>
    </section>
  )
}
