import HeroBookingForm from './HeroBookingForm.jsx'

const HERO_BOOKING_ID = 'hero-booking'

/** Hero booking slot — renders the full form on page load. */
export default function HeroDeferredBooking() {
  return (
    <div id={HERO_BOOKING_ID} className="booking-card-slot">
      <HeroBookingForm />
    </div>
  )
}
