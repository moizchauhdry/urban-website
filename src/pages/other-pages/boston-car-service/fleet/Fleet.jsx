import FleetCarousel from '../../../../components/carousels/FleetCarousel.jsx'

import { fleetItems } from './fleetItems.js'



export default function Fleet() {

  return (

    <section className="section" id="fleet">

      <div className="container">

        <div className="center-tag">

          <span className="section-tag">Our Fleet</span>

        </div>

        <h2 className="section-title">

          Find your perfect

          <br />

          vehicle type

        </h2>

        <p className="section-sub mb-0 sm:mb-6">

          Reliability and comfort are guaranteed. We Have the latest model Fleet

          to ensure a safe, sophisticated and Luxury Travel experience on every

          trip.

        </p>



        <FleetCarousel items={fleetItems} />

      </div>

    </section>

  )

}

