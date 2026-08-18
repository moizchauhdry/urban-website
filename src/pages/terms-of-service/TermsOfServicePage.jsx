import { lazy, Suspense } from 'react'
import LegalPageHero from '../../components/legal/LegalPageHero.jsx'
import ViewportLazy from '../../components/common/ViewportLazy.jsx'
import { TERMS_NAV } from '../../data/legalNav.js'

const LegalDocumentLayout = lazy(() => import('../../components/legal/LegalDocumentLayout.jsx'))

/** Terms of Service — legal page linked from the site footer. */
export default function TermsOfServicePage() {
  return (
    <>
      <LegalPageHero label="Terms of Service hero" />
      <ViewportLazy
        minHeight={800}
        rootMargin="480px 0px"
        deferMs={0}
        mobileRootMargin="120px 0px"
        mobileDeferMs={2800}
      >
        <Suspense fallback={null}>
          <LegalDocumentLayout title="Terms of Service" navItems={TERMS_NAV}>
          <h2 id="introduction" className="privacy-page__heading">1. Introduction and Acceptance</h2>

          <p>
            Welcome to Urban Elite Limo (&ldquo;Urban Elite Limo,&rdquo; &ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). These Terms of Service (the &ldquo;Terms&rdquo; or &ldquo;Agreement&rdquo;) form a legally binding agreement between you (&ldquo;Customer,&rdquo; &ldquo;Passenger,&rdquo; &ldquo;User,&rdquo; or &ldquo;you&rdquo;) and Urban Elite Limo governing your access to and use of our website, mobile applications, communication channels, reservation systems, customer support, and transportation booking platform (collectively, the &ldquo;Platform&rdquo;).
          </p>

          <p>
            By accessing the Platform, requesting a quotation, making a reservation, accepting a booking confirmation, submitting payment, or otherwise using any service offered by Urban Elite Limo, you acknowledge that you have read, understood, and agree to be bound by these Terms, our Privacy Policy, and any additional policies incorporated by reference. If you do not agree to these Terms, you must discontinue use of the Platform and not book any service through Urban Elite Limo.
          </p>

          <p>
            These Terms apply to every booking, regardless of whether the reservation is made through our website, mobile application, telephone, email, SMS, live chat, social media, third-party booking partners, travel agencies, affiliates, or any other channel authorized by Urban Elite Limo.
          </p>

          <h2 id="definitions" className="privacy-page__heading">2. Definitions</h2>

          <p>
            For purposes of these Terms, the following definitions apply:
          </p>

          <ul className="privacy-page__list">
            <li>&ldquo;Urban Elite Limo&rdquo; means the California-based company operating the transportation reservation, dispatch, and customer-service platform described in these Terms.</li>
            <li>&ldquo;Platform&rdquo; means the Company&apos;s website, reservation system, applications, communication channels, APIs, and related technology used to facilitate transportation bookings.</li>
            <li>&ldquo;Customer&rdquo; means any individual or entity requesting, purchasing, paying for, or arranging transportation services.</li>
            <li>&ldquo;Passenger&rdquo; means any individual transported pursuant to a reservation, whether or not they are the paying Customer.</li>
            <li>&ldquo;Transportation Provider&rdquo; means any independent chauffeur, driver, transportation company, limousine or black-car operator, fleet operator, or other third-party transportation business that accepts, performs, or is assigned services through the Platform. All Transportation Providers operate as independent contractors and are not employees, agents, partners, or joint venturers of the Company unless expressly agreed in a separate written agreement.</li>
            <li>&ldquo;Driver&rdquo; means an independent licensed chauffeur, operator, or driver engaged by a Transportation Provider to perform transportation services.</li>
            <li>&ldquo;Booking&rdquo; / &ldquo;Reservation&rdquo; means any transportation reservation submitted through the Platform.</li>
            <li>&ldquo;Trip&rdquo; means the transportation service requested by the Customer.</li>
            <li>&ldquo;Vehicle&rdquo; means the automobile, limousine, SUV, van, shuttle, executive vehicle, or other transportation equipment used to perform the Trip.</li>
            <li>&ldquo;Business Day&rdquo; means Monday through Friday, excluding recognized United States federal holidays.</li>
          </ul>

          <h2 id="eligibility" className="privacy-page__heading">3. Eligibility</h2>

          <p>
            By using the Platform, you represent and warrant that:
          </p>

          <ul className="privacy-page__list">
            <li>You are at least eighteen (18) years of age or otherwise have legal authority to enter into binding contracts under applicable law;</li>
            <li>All information you provide to Urban Elite Limo is true, accurate, current, and complete;</li>
            <li>You have the legal capacity to enter into this Agreement; and</li>
            <li>You are authorized to make reservations for yourself and any Passengers included in your booking.</li>
          </ul>

          <p>
            If you make a reservation on behalf of another individual, business, organization, family member, employee, or client, you represent that you have authority to bind those persons to these Terms and you remain responsible for the reservation.
          </p>

          <h2 id="nature-of-the-platform-and-independent-providers" className="privacy-page__heading">4. Nature of the Platform and Independent Providers</h2>

          <h3 id="nature-role" className="privacy-page__subheading">4.1 The Company&apos;s Role</h3>

          <p>
            Urban Elite Limo operates a technology-enabled reservation, coordination, and customer-support platform. Our functions include accepting transportation requests; coordinating reservations; facilitating communications; assigning trips to participating Transportation Providers; processing customer payments where applicable; and providing customer support before, during, and after the Trip.
          </p>

          <p>
            To the fullest extent permitted by applicable law, the Company&apos;s responsibilities are limited to facilitating reservations and coordinating services between Customers and Transportation Providers. Urban Elite Limo does not represent that it owns, leases, or directly operates every Vehicle used to fulfill reservations, and is not the direct operator of transportation services performed by independent Transportation Providers.
          </p>

          <h3 id="nature-providers" className="privacy-page__subheading">4.2 Independent Transportation Providers</h3>

          <p>
            Unless expressly stated otherwise in writing, transportation services booked through Urban Elite Limo are performed by independent Transportation Providers and their licensed Drivers. Transportation Providers are independent businesses responsible for operating their own Vehicles and for maintaining the licenses, permits, registrations, inspections, and insurance required under applicable federal, state, and local law.
          </p>

          <p>
            Nothing in these Terms creates an employment, joint-venture, partnership, franchise, agency, or fiduciary relationship between Urban Elite Limo and any Transportation Provider or Driver, except to the extent expressly required by applicable law.
          </p>

          <h3 id="nature-standards" className="privacy-page__subheading">4.3 Provider Standards and Corrective Action</h3>

          <p>
            Urban Elite Limo makes commercially reasonable efforts to work with Transportation Providers and Drivers who represent that they are properly licensed, insured, qualified, and authorized to operate. The Company may request, review, update, or verify a Provider&apos;s licensing, registration, insurance, inspection, or compliance documentation where operationally appropriate, and may suspend or remove a Provider from future assignments where the Company reasonably believes the Provider does not meet applicable legal, safety, insurance, or operational standards.
          </p>

          <h2 id="bookings" className="privacy-page__heading">5. Bookings</h2>

          <h3 id="bookings-requests" className="privacy-page__subheading">5.1 Reservation Requests</h3>

          <p>
            Customers may submit transportation requests through any channel authorized by Urban Elite Limo, including the Company website, mobile applications, telephone, email, SMS, live chat, social media messaging, third-party booking partners, and authorized affiliates. Submitting a reservation request does not, by itself, create a binding transportation contract.
          </p>

          <h3 id="bookings-info" className="privacy-page__subheading">5.2 Customer&apos;s Booking Information</h3>

          <p>
            The Customer is solely responsible for providing complete and accurate booking information, including Passenger name, contact information, pickup date and time, pickup location, destination, flight information (if applicable), number of Passengers, luggage quantity and size, child-seat requirements, accessibility requests, and any special instructions. The Company is not responsible for delays, additional charges, or service failures caused by inaccurate, incomplete, misleading, or outdated information supplied by the Customer.
          </p>

          <h3 id="bookings-acceptance" className="privacy-page__subheading">5.3 Acceptance of Bookings</h3>

          <p>
            A booking becomes confirmed only after Urban Elite Limo issues written confirmation by email, SMS, the Company&apos;s reservation system, or another Company-approved method. A quotation or temporary payment authorization alone does not constitute acceptance. Urban Elite Limo may reject, refuse, modify, suspend, or cancel any reservation request where reasonably necessary, including for vehicle availability, operational limitations, safety concerns, suspected fraud, payment-authorization failure, inaccurate information, legal-compliance requirements, a Force Majeure Event (Section 24), or other legitimate business reasons.
          </p>

          <h3 id="bookings-confirmation" className="privacy-page__subheading">5.4 Confirmation Details and Customer Review</h3>

          <p>
            A confirmed reservation will generally include, where applicable, a reservation number, pickup date and time, pickup location, destination, vehicle category, estimated fare, Passenger information, Driver assignment (when available), and any special requests accepted by the Company. The Customer must review the confirmation promptly upon receipt and notify Urban Elite Limo of any discrepancy before the scheduled pickup. Failure to report errors before pickup may result in delays, additional charges, or an inability to provide the requested service.
          </p>

          <h3 id="bookings-modifications" className="privacy-page__subheading">5.5 Modifications</h3>

          <p>
            Customers may request changes to a confirmed reservation &mdash; such as pickup time or location, destination, vehicle category, passenger count, additional stops, or special accommodations. Modifications are subject to vehicle and Driver availability, operational feasibility, and any resulting pricing adjustment. The Company cannot guarantee that a requested modification can be accommodated after confirmation. Changes requested shortly before pickup may be treated as a cancellation and rebooking where operationally necessary.
          </p>

          <h2 id="quotes-pricing-and-additional-charges" className="privacy-page__heading">6. Quotes, Pricing, and Additional Charges</h2>

          <h3 id="quotes-estimates" className="privacy-page__subheading">6.1 Estimates</h3>

          <p>
            Any fare estimate, online quote, verbal quotation, or preliminary pricing provided before booking confirmation is for informational purposes only and is not binding until confirmed by Urban Elite Limo in writing.
          </p>

          <h3 id="quotes-factors" className="privacy-page__subheading">6.2 Pricing Factors</h3>

          <p>
            Final pricing may depend on factors including pickup location, destination, distance, estimated duration, hourly commitments, vehicle class and availability, passenger count, luggage, tolls, parking, airport fees, congestion charges, taxes, applicable surcharges, and special accommodations.
          </p>

          <h3 id="quotes-additional" className="privacy-page__subheading">6.3 Additional Charges</h3>

          <p>
            Unless expressly stated otherwise, a quoted price applies only to the itinerary confirmed at the time of booking. Additional charges may apply where the Customer requests or causes changes, including additional stops or passengers, route deviations, destination changes, extended waiting time, oversized or additional luggage, child safety equipment, meet-and-greet service, parking, tolls, ferry or venue fees, congestion pricing, cleaning, damage, administrative fees, or government-imposed taxes and regulatory fees. Where reasonably practicable, the Company will notify the Customer before applying material additional charges.
          </p>

          <h3 id="quotes-errors" className="privacy-page__subheading">6.4 Pricing Errors</h3>

          <p>
            Urban Elite Limo may correct any typographical, computational, system-generated, or human pricing error discovered before or after confirmation. If a material error occurs, the Customer will be notified and may either accept the corrected fare or cancel the reservation without penalty, where permitted by applicable law.
          </p>

          <h3 id="quotes-promo" className="privacy-page__subheading">6.5 Promotional Pricing</h3>

          <p>
            Discounts, coupon codes, referral credits, and marketing incentives may not be combined unless expressly stated, have no cash value, may expire without notice, and may be revoked in cases of abuse or fraud. Additional promotional terms appear in Section 20.
          </p>

          <h3 id="quotes-currency" className="privacy-page__subheading">6.6 Currency</h3>

          <p>
            Unless expressly stated otherwise, all prices are quoted and payable in United States Dollars (USD).
          </p>

          <h2 id="payment-terms" className="privacy-page__heading">7. Payment Terms</h2>

          <h3 id="payment-methods" className="privacy-page__subheading">7.1 Accepted Methods and Authorization</h3>

          <p>
            Urban Elite Limo accepts payment through methods approved by the Company, which may include major credit and debit cards, ACH transfers, digital wallets, bank transfers, corporate billing accounts, and third-party payment processors. The Company may modify accepted methods at any time. By providing payment information or authorizing a payment, the Customer represents that they are the lawful owner or authorized user of the payment method, have authority to authorize the transaction, and that sufficient funds or credit exist. The Customer authorizes Urban Elite Limo and its payment processors to charge the payment method for all amounts due under these Terms.
          </p>

          <h3 id="payment-requirements" className="privacy-page__subheading">7.2 Payment Requirements</h3>

          <p>
            Urban Elite Limo may require full payment, partial payment, a deposit, or a valid payment authorization before confirming a reservation. Unless otherwise agreed in writing, payment must be received before transportation services commence. Failure to pay when required may result in cancellation, suspension, or refusal of service without liability to the Company.
          </p>

          <h3 id="payment-secure" className="privacy-page__subheading">7.3 Secure Payment Processing</h3>

          <p>
            Customers are encouraged to complete payment through secure electronic payment links or portals provided by the Company using reputable third-party processors (for example, Stripe or Square). Where a Customer chooses not to use an electronic payment link and instead requests processing by telephone or another Company-approved method, the Customer authorizes Urban Elite Limo to process the payment manually using the information voluntarily provided. The Company may refuse manual payment requests where necessary for security, fraud prevention, or compliance. Customers should not transmit card security codes (CVV/CVC/CID) by email, SMS, or other unsecured channels.
          </p>

          <h3 id="payment-retention" className="privacy-page__subheading">7.4 Payment-Information Security and Retention</h3>

          <p>
            Urban Elite Limo implements commercially reasonable administrative, technical, and organizational safeguards designed to protect payment information against unauthorized access, disclosure, alteration, misuse, or destruction. Access is restricted to authorized personnel through role-based access controls, authentication, internal authorization procedures, and audit logging. Where payment information is processed by third-party processors, that processing is also subject to those providers&apos; terms, privacy policies, and security practices. The Company retains payment-related information only as long as reasonably necessary for legitimate business, legal, accounting, tax, regulatory, security, or contractual purposes, and does not intentionally retain card verification values (CVV/CVC/CID) after authorization is completed.
          </p>

          <h3 id="payment-on-file" className="privacy-page__subheading">7.5 Additional Charges to Method on File</h3>

          <p>
            The Customer authorizes Urban Elite Limo to charge the payment method on file for charges arising under these Terms, including approved reservation modifications, additional waiting time, additional stops, tolls, parking, airport fees, congestion charges, cleaning, vehicle damage, no-show fees, cancellation fees, applicable taxes, and government surcharges. Where reasonably practicable, the Company will notify the Customer before processing material additional charges.
          </p>

          <h3 id="payment-outstanding" className="privacy-page__subheading">7.6 Outstanding Balances and Failed Payments</h3>

          <p>
            Any unpaid balance becomes immediately due and payable upon completion of the Trip unless otherwise agreed in writing. If a payment is declined, reversed, rejected, disputed, or returned, Urban Elite Limo may require an alternative payment method, suspend or cancel pending reservations, decline future bookings, delay service until payment is received, pursue lawful collection efforts, or recover amounts owed to the fullest extent permitted by applicable law.
          </p>

          <h2 id="payment-authorization-verification-and-fraud-prevention" className="privacy-page__heading">8. Payment Authorization, Verification, and Fraud Prevention</h2>

          <h3 id="auth-charge" className="privacy-page__subheading">8.1 Authorization to Charge</h3>

          <p>
            By providing payment information, the Customer authorizes the Company and its payment processors to process all charges authorized under these Terms. This authorization remains effective until all outstanding obligations relating to the applicable reservation are satisfied.
          </p>

          <h3 id="auth-verify" className="privacy-page__subheading">8.2 Customer Verification</h3>

          <p>
            To protect Customers, Transportation Providers, cardholders, and the Company against fraud, identity theft, unauthorized transactions, chargebacks, money laundering, or other unlawful activity, Urban Elite Limo may verify the identity of any Customer or payer before, during, or after confirmation. Where reasonably necessary, the Company may request government-issued photo identification, billing-address confirmation, confirmation of card ownership or authorized use, or other information reasonably necessary to verify a transaction&apos;s legitimacy.
          </p>

          <h3 id="auth-refusal" className="privacy-page__subheading">8.3 Refusal or Failure to Verify</h3>

          <p>
            If requested verification information is not provided within a reasonable time, or if the Company reasonably believes a transaction presents an elevated fraud risk, Urban Elite Limo may decline, suspend, delay, or cancel the reservation, refuse payment, or request an alternative payment method. The Company is not liable for losses resulting from actions reasonably taken in good faith to prevent fraud or comply with legal obligations.
          </p>

          <h3 id="auth-chargebacks" className="privacy-page__subheading">8.4 Chargebacks</h3>

          <p>
            The Customer agrees to contact Urban Elite Limo and allow a reasonable opportunity to resolve any payment dispute before initiating a chargeback. Improper, fraudulent, or bad-faith chargebacks may result in suspension of services, cancellation of future reservations, recovery of administrative costs where permitted by law, and other available remedies. Nothing in this Section limits any rights afforded to Customers under applicable consumer-protection law.
          </p>

          <h2 id="electronic-communications-and-consent" className="privacy-page__heading">9. Electronic Communications and Consent</h2>

          <p>
            By providing your email address, telephone number, or other electronic contact information, you consent to receive communications from Urban Elite Limo regarding reservation confirmations, invoices, receipts, payment requests, driver and dispatch information, trip updates, operational and customer-service notices, and legally required notices. Where permitted by applicable law, these communications may be delivered by email, SMS, telephone, automated systems, mobile notifications, or other electronic means. You acknowledge that electronic communications satisfy any legal requirement that a communication be in writing. Message and data rates may apply, and you may opt out of non-essential messages as described in those communications or our Privacy Policy.
          </p>

          <h2 id="pickup-airport-transfers-and-waiting-time" className="privacy-page__heading">10. Pickup, Airport Transfers, and Waiting Time</h2>

          <h3 id="pickup-availability" className="privacy-page__subheading">10.1 Customer Availability and Communication</h3>

          <p>
            Passengers must be present and ready at the designated pickup location at the scheduled pickup time. The Customer is responsible for keeping their telephone operational and reachable, maintaining accurate contact information, and being available during pickup. Where reasonably practicable, the Driver or the Company may attempt to contact the Customer using the information provided. Failure to be present or reachable may result in the reservation being treated as a No-Show under Section 11.
          </p>

          <h3 id="pickup-meet" className="privacy-page__subheading">10.2 Meet-and-Greet</h3>

          <p>
            Where a meet-and-greet service has been purchased or confirmed, the Driver will meet the Passenger at the designated meeting point. Availability may vary by airport, terminal, venue, or local regulation.
          </p>

          <h3 id="pickup-airport" className="privacy-page__subheading">10.3 Airport Transfers and Flight Tracking</h3>

          <p>
            For airport transfers, the Customer is responsible for providing accurate airline, flight number, and arrival details. Where flight information is provided, the Company or the assigned Provider may monitor publicly available flight status as a courtesy; this does not guarantee that all delays, schedule changes, cancellations, gate changes, or diversions will be identified or accommodated. Where operationally feasible, the Company will make commercially reasonable efforts to accommodate delayed arrivals, subject to vehicle and Driver availability, legal driving-hour limits, airport regulations, and operational constraints. Airport pickups are conducted in accordance with applicable airport rules and designated procedures, and Passengers must follow the pickup instructions provided.
          </p>

          <h3 id="pickup-waiting" className="privacy-page__subheading">10.4 Complimentary Waiting Time</h3>

          <p>
            Unless otherwise specified in writing, standard non-airport pickups include up to fifteen (15) minutes of complimentary waiting time beginning at the scheduled pickup time, and airport arrivals include up to thirty (30) minutes of complimentary waiting time beginning after the aircraft has landed. International arrivals, customs delays, or oversized-baggage processing may require additional waiting time subject to additional charges.
          </p>

          <h3 id="pickup-additional-wait" className="privacy-page__subheading">10.5 Additional Waiting Time</h3>

          <p>
            If the Customer requests that the Driver continue waiting beyond the complimentary period, additional waiting charges apply at the Company&apos;s then-current rates, calculated in increments determined by the Company. Extended waiting is subject to Driver availability and operational scheduling; the Company is not obligated to provide unlimited waiting time.
          </p>

          <h2 id="no-show-and-customer-delays" className="privacy-page__heading">11. No-Show and Customer Delays</h2>

          <h3 id="noshow-customer" className="privacy-page__subheading">11.1 Customer No-Show</h3>

          <p>
            A reservation may be classified as a Customer No-Show if the Customer fails to appear at the pickup location, cannot be contacted using the provided information, refuses transportation after Driver arrival, remains unavailable after expiration of the applicable waiting period, or otherwise abandons the reservation. For airport pickups, a Passenger who leaves the airport without notifying the Company may be considered a No-Show. Unless otherwise required by applicable law or expressly agreed by the Company, a No-Show reservation may be charged the full reservation amount.
          </p>

          <h3 id="noshow-driver" className="privacy-page__subheading">11.2 Driver No-Show</h3>

          <p>
            If the assigned Driver fails to arrive due to circumstances within the Company&apos;s control, Urban Elite Limo will make commercially reasonable efforts to provide a replacement Vehicle or alternative transportation. If a replacement cannot reasonably be arranged, the Customer is eligible for a refund in accordance with the Refund Policy (Section 18) and may, at the Company&apos;s discretion, receive a service credit toward a future Trip.
          </p>

          <h3 id="noshow-delays" className="privacy-page__subheading">11.3 Customer Delays</h3>

          <p>
            If a Customer anticipates being delayed, the Customer must notify Urban Elite Limo or the assigned Driver as soon as reasonably possible. Notifying the Company of a delay does not guarantee that the reservation can be extended or modified without additional charges. The Company will make commercially reasonable efforts to accommodate delays subject to operational availability; repeated or significant delays may require cancellation, rescheduling, or reassignment.
          </p>

          <h2 id="vehicle-substitution-routing-and-service-interruptions" className="privacy-page__heading">12. Vehicle Substitution, Routing, and Service Interruptions</h2>

          <h3 id="vehicle-sub" className="privacy-page__subheading">12.1 Vehicle Substitution</h3>

          <p>
            Urban Elite Limo may substitute the reserved Vehicle with another of equal or greater passenger capacity or comparable service category where reasonably necessary due to operational requirements, mechanical issues, safety, maintenance, regulatory requirements, or circumstances beyond the Company&apos;s reasonable control. A substitution does not constitute a breach of these Terms provided the replacement Vehicle is reasonably suitable for the reserved service. Website images, advertisements, and marketing materials are examples only and do not guarantee a specific make, model, color, year, license plate, or appearance unless expressly confirmed in writing.
          </p>

          <h3 id="vehicle-route" className="privacy-page__subheading">12.2 Route Selection</h3>

          <p>
            Unless specific routing has been agreed in advance, Drivers may determine the safest and most practical route based on prevailing traffic, road closures, weather, construction, public-safety considerations, and applicable law. Customer-requested route deviations may result in additional charges.
          </p>

          <h3 id="vehicle-interruptions" className="privacy-page__subheading">12.3 Service Interruptions</h3>

          <p>
            Transportation services may be delayed, interrupted, modified, or canceled due to circumstances beyond the Company&apos;s reasonable control, including a Force Majeure Event (Section 24). Urban Elite Limo will use commercially reasonable efforts to minimize disruption but does not guarantee uninterrupted service.
          </p>

          <h2 id="passenger-conduct-and-responsibilities" className="privacy-page__heading">13. Passenger Conduct and Responsibilities</h2>

          <h3 id="conduct" className="privacy-page__subheading">13.1 Conduct</h3>

          <p>
            Passengers must conduct themselves safely, respectfully, and lawfully. Passengers shall not:
          </p>

          <ul className="privacy-page__list">
            <li>engage in violent, threatening, abusive, harassing, or discriminatory conduct;</li>
            <li>interfere with the safe operation of the Vehicle;</li>
            <li>consume illegal drugs or possess unlawful weapons;</li>
            <li>engage in any unlawful activity;</li>
            <li>damage Company or Transportation Provider property;</li>
            <li>smoke or vape where prohibited; or</li>
            <li>create unsafe or hazardous conditions.</li>
          </ul>

          <p>
            The Customer is responsible for the conduct of all individuals included in the reservation.
          </p>

          <h3 id="conduct-responsibilities" className="privacy-page__subheading">13.2 Responsibilities</h3>

          <p>
            Customers and Passengers are responsible for:
          </p>

          <ul className="privacy-page__list">
            <li>providing accurate reservation information and arriving on time;</li>
            <li>complying with applicable law and reasonable Driver instructions relating to safety;</li>
            <li>wearing seat belts where required by law and ensuring minors are appropriately supervised;</li>
            <li>securing personal belongings; and</li>
            <li>informing the Company of any special transportation requirements before the reservation.</li>
          </ul>

          <h3 id="conduct-capacity" className="privacy-page__subheading">13.3 Vehicle Capacity</h3>

          <p>
            Passengers shall not exceed the legal seating capacity of the assigned Vehicle. Urban Elite Limo may refuse transportation where passenger count, luggage volume, or cargo exceeds the safe or lawful operating capacity of the Vehicle. Additional Vehicles may be required at the Customer&apos;s expense.
          </p>

          <h3 id="conduct-child" className="privacy-page__subheading">13.4 Child Safety</h3>

          <p>
            Customers must notify Urban Elite Limo in advance if child restraint systems are required. Where child seats are requested, the Company will make commercially reasonable efforts to provide them, subject to availability. The Customer remains responsible for compliance with applicable child-passenger-safety laws and for confirming that any restraint system is appropriate for the child&apos;s age, height, and weight.
          </p>

          <h3 id="conduct-luggage" className="privacy-page__subheading">13.5 Luggage</h3>

          <p>
            Customers are responsible for accurately disclosing luggage quantity and size at booking. Oversized, excessive, fragile, hazardous, or unusual items may require a larger Vehicle or may not be accepted. Urban Elite Limo is not responsible for ordinary wear, damage, or loss to luggage resulting from normal transportation, except where caused by the Company&apos;s or a Transportation Provider&apos;s negligence and where liability cannot legally be disclaimed.
          </p>

          <h2 id="prohibited-activities" className="privacy-page__heading">14. Prohibited Activities</h2>

          <p>
            The following are strictly prohibited during transportation services:
          </p>

          <ul className="privacy-page__list">
            <li>commission of any criminal offense;</li>
            <li>possession of illegal substances or transportation of hazardous materials prohibited by law;</li>
            <li>use of fraudulent payment methods or provision of false identity information;</li>
            <li>threatening or assaulting Drivers or Passengers;</li>
            <li>vandalism or interference with Vehicle operation; and</li>
            <li>any conduct that endangers public safety.</li>
          </ul>

          <p>
            Violation of this Section may result in immediate termination of service without refund and may be reported to appropriate law-enforcement authorities.
          </p>

          <h2 id="lost-and-found" className="privacy-page__heading">15. Lost and Found</h2>

          <p>
            Passengers are solely responsible for ensuring that all personal belongings are removed from the Vehicle upon completion of the Trip. Urban Elite Limo and participating Transportation Providers are not insurers of lost property and do not guarantee recovery of any item left in a Vehicle. Where lost property is located, the Company may, at its discretion, coordinate its return; shipping, handling, storage, and administrative costs may be charged to the Customer. Unclaimed property may be disposed of in accordance with applicable law after any applicable retention period.
          </p>

          <h2 id="cleaning-damage-and-repair-charges" className="privacy-page__heading">16. Cleaning, Damage, and Repair Charges</h2>

          <p>
            Customers are financially responsible for any damage caused by themselves or any Passenger included in their reservation. Charges may include interior or exterior damage, excessive cleaning, spills, bodily fluids, smoking or vaping residue, upholstery damage, broken components, professional detailing, repair costs, and loss of vehicle use where permitted by applicable law. The Company may charge the Customer&apos;s authorized payment method for documented damages and reasonable associated costs.
          </p>

          <h2 id="right-to-refuse-or-terminate-service" className="privacy-page__heading">17. Right to Refuse or Terminate Service</h2>

          <h3 id="refuse-standards" className="privacy-page__subheading">17.1 Fair and Reasonable Standards</h3>

          <p>
            Urban Elite Limo is committed to providing service in a fair, professional, lawful, and commercially reasonable manner, and does not refuse, suspend, or terminate service arbitrarily. Any refusal, suspension, cancellation, or termination will be based on reasonable safety, legal, operational, payment, fraud-prevention, or compliance concerns.
          </p>

          <h3 id="refuse-grounds" className="privacy-page__subheading">17.2 Grounds for Refusal or Termination</h3>

          <p>
            Urban Elite Limo and participating Transportation Providers may refuse, suspend, cancel, or terminate service where reasonably necessary due to:
          </p>

          <ul className="privacy-page__list">
            <li>safety concerns affecting the Customer, Passenger, Driver, public, or Vehicle;</li>
            <li>failure to complete required payment or payment authorization;</li>
            <li>suspected fraudulent activity or unauthorized use of a payment method, or failure to provide reasonable verification when requested;</li>
            <li>inaccurate, false, incomplete, or misleading booking information;</li>
            <li>passenger count, luggage, or cargo exceeding the legal or safe capacity of the assigned Vehicle;</li>
            <li>unlawful, abusive, threatening, violent, discriminatory, or harassing conduct, or excessive intoxication;</li>
            <li>possession of illegal drugs, unlawful weapons, or prohibited hazardous items;</li>
            <li>interference with the Driver&apos;s safe operation of the Vehicle, or damage or threatened damage to property;</li>
            <li>failure to comply with reasonable safety instructions or with applicable law, airport rules, venue rules, or these Terms; or</li>
            <li>a Force Majeure Event or other circumstance beyond the Company&apos;s reasonable control that makes service unsafe, unlawful, or commercially impracticable.</li>
          </ul>

          <h3 id="refuse-during" className="privacy-page__subheading">17.3 Termination During Service</h3>

          <p>
            If service is terminated after the Driver has arrived or the Trip has begun due to unsafe, unlawful, abusive, fraudulent, or materially improper conduct by the Customer or any Passenger, the Customer may remain responsible for the full reservation amount and any applicable cleaning, damage, waiting-time, repair, administrative, or other charges permitted under these Terms. If service is terminated for a reason not caused by the Customer or Passenger &mdash; such as a Vehicle failure or Provider issue &mdash; the Customer may be eligible for replacement service, rescheduling, or a refund for the unfulfilled portion, subject to the Refund Policy (Section 18) and applicable law.
          </p>

          <h3 id="refuse-remedies" className="privacy-page__subheading">17.4 Remedies and Right to Dispute</h3>

          <p>
            Where service is refused, canceled, or terminated for reasons not caused by the Customer or Passenger, Urban Elite Limo will make commercially reasonable efforts to provide a remedy such as a replacement Driver or comparable Vehicle, rescheduling, a full or partial refund for the portion not provided, or another reasonable resolution. If a Customer believes service was refused or terminated unfairly, the Customer may contact customer support and request a review; the Company will review the booking, communication, payment, and Driver records before making a final determination. Nothing in this Section limits any refund, consumer-protection, or contractual right the Customer may have under applicable law.
          </p>

          <h3 id="refuse-reporting" className="privacy-page__subheading">17.5 Reporting Serious Incidents</h3>

          <p>
            Urban Elite Limo and participating Transportation Providers may report suspected criminal activity, fraud, threats, violence, unsafe conduct, property damage, or unlawful behavior to law enforcement, payment processors, financial institutions, insurance carriers, or regulatory authorities where permitted or required by law.
          </p>

          <h2 id="cancellation-policy" className="privacy-page__heading">18. Cancellation Policy</h2>

          <h3 id="cancel-how" className="privacy-page__subheading">18.1 How to Cancel</h3>

          <p>
            Customers may request cancellation of a confirmed reservation through an approved channel (telephone, email, SMS, or the Company&apos;s reservation system). A cancellation is not effective until Urban Elite Limo confirms receipt or the request is recorded through a Company-approved system. Customers are encouraged to cancel as early as possible to avoid unnecessary dispatch and administrative costs.
          </p>

          <h3 id="cancel-window" className="privacy-page__subheading">18.2 Standard Cancellation Window</h3>

          <p>
            Unless a different rule is stated in the booking confirmation, a Customer may cancel a standard reservation without a cancellation charge if the request is received at least twenty-four (24) hours before the scheduled pickup time. A cancellation requested within twenty-four (24) hours of pickup may be non-refundable or subject to a cancellation charge, depending on vehicle and trip type, dispatch status, Provider commitment, and operational costs already incurred.
          </p>

          <h3 id="cancel-late" className="privacy-page__subheading">18.3 Late, Same-Day, and High-Demand Reservations</h3>

          <p>
            Late cancellations (after the applicable window) may result in partial or full charges where costs have already been incurred. Same-day, urgent, special-event, airport, hourly, long-distance, multi-vehicle, and customized reservations may be subject to stricter cancellation rules. Reservations for special events, holidays, peak dates, concerts, sporting events, weddings, proms, or corporate events may require deposits or prepayment and may be non-refundable after a deadline stated in the booking confirmation. For hourly reservations, cancellation charges may be based on the confirmed hourly minimum; a Customer who ends an hourly reservation early may remain responsible for the confirmed minimum unless otherwise agreed in writing.
          </p>

          <h3 id="cancel-company" className="privacy-page__subheading">18.4 Cancellation by Urban Elite Limo</h3>

          <p>
            Urban Elite Limo may cancel a reservation where reasonably necessary due to safety, vehicle or Provider unavailability, suspected fraud, payment failure, inaccurate information, legal compliance, a Force Majeure Event, or other circumstances beyond its reasonable control. If the Company cancels for reasons not caused by the Customer, it will make commercially reasonable efforts to provide replacement service, reassign a Provider, reschedule, or issue an appropriate refund for the unprovided service.
          </p>

          <h3 id="cancel-effect" className="privacy-page__subheading">18.5 Effect of Cancellation</h3>

          <p>
            Cancellation does not release the Customer from responsibility for charges already properly incurred, including late-cancellation fees, no-show fees, waiting time, administrative costs, and damage or cleaning charges.
          </p>

          <h2 id="refund-policy" className="privacy-page__heading">19. Refund Policy</h2>

          <h3 id="refund-general" className="privacy-page__subheading">19.1 General Standard</h3>

          <p>
            Urban Elite Limo reviews refund requests in a fair, commercially reasonable, and good-faith manner. Eligibility depends on the reason for the request, the timing of cancellation, the service status, the amount of service already provided, the conduct of the Customer or Passengers, and costs already incurred. Nothing in this Policy limits any rights the Customer may have under applicable law.
          </p>

          <h3 id="refund-when" className="privacy-page__subheading">19.2 When Refunds May Be Issued</h3>

          <p>
            If a confirmed reservation is not provided due to a reason caused by Urban Elite Limo, the assigned Driver, or the Transportation Provider, and no reasonable replacement, rescheduling, or alternative service is made available, the Customer may be eligible for a full or partial refund for the portion not provided. Partial refunds may be issued where only part of the service was not provided or where a verified service issue materially affected the reservation, and may account for the portion completed, verified delays caused by the Company or Provider, replacement service provided, and operational costs already incurred.
          </p>

          <h3 id="refund-substitution" className="privacy-page__subheading">19.3 Vehicle Substitution and Delays</h3>

          <p>
            A vehicle substitution does not automatically entitle the Customer to a refund if the replacement Vehicle is reasonably comparable, suitable, and capable of safely completing the service; if the replacement is materially lower in category, capacity, or value, the Customer may be eligible for a reasonable price adjustment, partial refund, or credit. A delay does not automatically entitle the Customer to a refund; the Company will review delay-related requests based on the cause and length of the delay, communication records, conditions, Driver reports, and whether the service was still received.
          </p>

          <h3 id="refund-non" className="privacy-page__subheading">19.4 Non-Refundable Situations</h3>

          <p>
            Unless otherwise required by applicable law or expressly approved in writing, refunds may be denied where the Customer cancels after the applicable window; is classified as a No-Show; provides incorrect pickup, destination, date, time, flight, or contact information; refuses service after the Driver arrives; violates these Terms; engages in unsafe, abusive, unlawful, fraudulent, or materially improper conduct; declines to use a reasonably suitable Vehicle that arrived within a commercially reasonable time; or where service is delayed by a Force Majeure Event or other circumstance beyond reasonable control.
          </p>

          <h3 id="refund-processing" className="privacy-page__subheading">19.5 Processing Time and Method</h3>

          <p>
            Approved refunds are generally processed within five (5) to ten (10) Business Days after approval. Actual posting time may vary depending on the Customer&apos;s bank, card issuer, or payment processor, and Urban Elite Limo is not responsible for delays caused by those parties after a refund has been submitted. Refunds are generally issued to the original payment method unless another lawful method is approved. Service credits or coupon codes may be offered as an alternative resolution where appropriate, but a Customer is not required to accept a credit in place of a refund where a refund is required by applicable law.
          </p>

          <h2 id="service-credits-coupons-and-promotions" className="privacy-page__heading">20. Service Credits, Coupons, and Promotions</h2>

          <p>
            Urban Elite Limo may offer promotional discounts, coupon codes, referral credits, service credits, loyalty benefits, or other incentives from time to time, subject to the terms stated at issuance. Unless expressly stated otherwise in writing, such credits have no cash value, may not be exchanged for cash, and may only be applied toward eligible future reservations. Promotional offers may be subject to expiration dates, vehicle-category or geographic limits, minimum-fare requirements, blackout dates, one-time-use and non-transferability restrictions, and restrictions on combining offers. The Company may reject, cancel, suspend, or revoke any promotional credit where it reasonably believes there has been fraud, abuse, duplicate-account creation, unauthorized transfer, or violation of these Terms. Providing a credit, coupon, or discount as a goodwill gesture is not an admission of fault, liability, negligence, or breach.
          </p>

          <h2 id="customer-complaints-and-service-review" className="privacy-page__heading">21. Customer Complaints and Service Review</h2>

          <p>
            Customers may submit complaints, service concerns, refund requests, or billing disputes to Urban Elite Limo customer support, which will review them in a fair and commercially reasonable manner. Customers are encouraged to submit complaints as soon as reasonably possible &mdash; and, where practicable, within seven (7) Business Days after the Trip date &mdash; so the Company can investigate while records, Driver statements, and communications remain available. Failure to submit within this period may limit the Company&apos;s ability to investigate, but does not limit any rights the Customer may have under applicable law.
          </p>

          <p>
            To assist review, the Customer should provide the reservation number, Passenger name, pickup date and locations, a description of the issue, and any supporting photos, receipts, or communications. The Company may review reservation, payment, call, SMS, email, dispatch, and GPS records, and may contact the Customer, Driver, Provider, or payment processor. After review, the Company may offer an appropriate resolution, which may include an explanation, correction of billing errors, a full or partial refund, a service credit or coupon, rescheduling, replacement service, internal corrective action, or no refund where the complaint is not supported by available records. Reviewing a complaint or offering a resolution is not an admission of fault or liability. Where a Customer disagrees with the outcome, they may request a further review before pursuing the dispute-resolution process in Section 27.
          </p>

          <h2 id="service-standards-limitations-and-warranty-disclaimer" className="privacy-page__heading">22. Service Standards, Limitations, and Warranty Disclaimer</h2>

          <h3 id="standards-commitment" className="privacy-page__subheading">22.1 Service Commitment and Practical Limitations</h3>

          <p>
            Urban Elite Limo makes commercially reasonable efforts to provide professional, reliable, and timely transportation coordination through accurate booking support, clear communication, qualified assignments, and reasonable assistance before, during, and after the Trip. Certain factors may nonetheless affect timing, availability, routing, or completion, including traffic, weather, road closures, construction, accidents, airport rules or congestion, venue restrictions, mechanical issues, passenger or flight delays, government restrictions, and other circumstances beyond reasonable control.
          </p>

          <h3 id="standards-estimates" className="privacy-page__subheading">22.2 Estimates and Pickup Recommendations</h3>

          <p>
            Estimated travel times, pickup recommendations, and arrival estimates are provided for planning convenience only. The Customer remains responsible for selecting a pickup time that allows sufficient time for flights, meetings, events, baggage handling, security screening, customs, or other commitments. Urban Elite Limo does not guarantee exact arrival times, travel times, route duration, airport processing time, traffic or weather conditions, flight status, or event access, and is not responsible for delays or service limitations caused by circumstances outside its reasonable control.
          </p>

          <h3 id="standards-driver" className="privacy-page__subheading">22.3 Driver Assignment</h3>

          <p>
            Urban Elite Limo may assign or reassign a Driver or Transportation Provider based on availability, licensing, service area, vehicle category, operational needs, and safety. If a Customer requests a specific Driver, the Company may make commercially reasonable efforts to accommodate the request, but a specific Driver is not guaranteed unless expressly confirmed in writing.
          </p>

          <h3 id="standards-disclaimer" className="privacy-page__subheading">22.4 Warranty Disclaimer</h3>

          <p>
            Except as expressly stated in these Terms, and to the fullest extent permitted by applicable law, Urban Elite Limo disclaims all implied warranties, including implied warranties of merchantability, fitness for a particular purpose, non-infringement, uninterrupted service, and error-free operation. Nothing in this Section limits any rights that cannot lawfully be waived under applicable law.
          </p>

          <h2 id="limitation-of-liability" className="privacy-page__heading">23. Limitation of Liability</h2>

          <h3 id="liability-indirect" className="privacy-page__subheading">23.1 Exclusion of Indirect Damages</h3>

          <p>
            To the fullest extent permitted by applicable law, Urban Elite Limo shall not be liable for indirect, incidental, special, consequential, exemplary, or punitive damages arising out of or relating to the Platform, the booking process, transportation coordination, communications, payments, reservation changes, cancellations, delays, or transportation services &mdash; including damages for missed flights, meetings, appointments, events, or hotel check-ins; lost business opportunities, income, profits, or goodwill; business interruption; emotional distress; inconvenience; travel disruption; unapproved replacement-transportation costs; or loss, theft, or damage to personal belongings &mdash; even if advised of the possibility of such damages.
          </p>

          <h3 id="liability-cap" className="privacy-page__subheading">23.2 Liability Cap</h3>

          <p>
            To the fullest extent permitted by applicable law, the total aggregate liability of Urban Elite Limo for any claim arising out of or relating to a reservation, transportation service, payment, refund, dispute, or use of the Platform shall not exceed the amount actually paid by the Customer to Urban Elite Limo for the specific reservation giving rise to the claim.
          </p>

          <h3 id="liability-providers" className="privacy-page__subheading">23.3 Providers; No Prohibited Limitation; Mitigation</h3>

          <p>
            Where a claim arises from the conduct, operation, negligence, or omission of an independent Transportation Provider or Driver, the Customer acknowledges that such claim may be subject to the Provider&apos;s own insurance, obligations, and applicable law. Nothing in these Terms excludes or limits liability where such exclusion or limitation is prohibited by applicable law, including for death or personal injury caused by negligence to the extent such liability cannot lawfully be limited. The Customer agrees to take reasonable steps to reduce or avoid losses, including providing accurate information, choosing reasonable pickup times, staying reachable, promptly notifying the Company of issues, and allowing a reasonable opportunity to resolve them.
          </p>

          <h2 id="assumption-of-risk" className="privacy-page__heading">24. Assumption of Risk</h2>

          <p>
            The Customer acknowledges that ground transportation involves ordinary and inherent risks, including traffic and road conditions, weather, sudden stops, accidents, construction, airport congestion, public events, mechanical issues, and the actions of other road users. By booking or using transportation services arranged through Urban Elite Limo, the Customer voluntarily accepts these ordinary risks, except where a risk arises from conduct that cannot lawfully be disclaimed. The Customer assumes responsibility for all personal belongings, luggage, electronics, medication, documents, valuables, and other property brought into the Vehicle, and is encouraged to keep valuables in their personal possession at all times.
          </p>

          <h2 id="force-majeure" className="privacy-page__heading">25. Force Majeure</h2>

          <p>
            Urban Elite Limo shall not be responsible or liable for any delay, failure, interruption, cancellation, or inability to perform where it results from events beyond the Company&apos;s reasonable control (each, a &ldquo;Force Majeure Event&rdquo;). Force Majeure Events include, without limitation: severe weather; natural disasters, earthquakes, floods, and fires; traffic emergencies, road closures, and accidents; airport closures and flight cancellations; government orders and law-enforcement activity; civil unrest, terrorism, and war; strikes and labor or fuel shortages; public-health emergencies; utility, technology, internet, or payment-processor failures; vehicle breakdowns; the acts or omissions of third parties; and any other event that makes service unsafe, unlawful, impossible, or commercially impracticable.
          </p>

          <p>
            Where a Force Majeure Event affects a reservation, Urban Elite Limo will make commercially reasonable efforts to notify the Customer, coordinate with the Transportation Provider, provide an available alternative, reschedule, or issue an appropriate refund or credit in accordance with these Terms and applicable law. Except where liability cannot lawfully be limited, the Company is not liable for missed flights, events, or appointments, business losses, emotional distress, inconvenience, replacement-transportation costs, or additional expenses resulting from a Force Majeure Event.
          </p>

          <h2 id="indemnification" className="privacy-page__heading">26. Indemnification</h2>

          <p>
            To the fullest extent permitted by applicable law, the Customer agrees to defend, indemnify, and hold harmless Urban Elite Limo and its owners, officers, directors, members, managers, employees, contractors, agents, affiliates, representatives, successors, and assigns from and against any claims, damages, losses, liabilities, costs, expenses, fines, penalties, demands, actions, or legal fees arising out of or relating to: the Customer&apos;s breach of these Terms; false, inaccurate, or misleading booking information; unauthorized use of a payment method; fraudulent conduct or chargeback abuse; damage to a Vehicle or associated cleaning or repair costs; illegal, unsafe, abusive, violent, or improper conduct by the Customer or any Passenger; injury or damage caused by the Customer or Passenger; violation of applicable law or of airport, venue, or local transportation rules; and any claim brought by a Passenger or third party arising from a reservation made by the Customer.
          </p>

          <p>
            If the Customer books transportation on behalf of another person or entity, the Customer is responsible for communicating these Terms to that Passenger and remains responsible for all charges, conduct, damages, and claims arising from the reservation. The Customer agrees to cooperate reasonably in the defense of any indemnified claim. Urban Elite Limo may assume exclusive defense and control of any matter subject to indemnification, and the Customer shall not settle any such claim without the Company&apos;s prior written consent where the settlement affects the Company&apos;s rights, obligations, or financial exposure. These indemnification rights are in addition to any other remedies available to the Company.
          </p>

          <h2 id="governing-law-and-dispute-resolution" className="privacy-page__heading">27. Governing Law and Dispute Resolution</h2>

          <h3 id="law-governing" className="privacy-page__subheading">27.1 Governing Law</h3>

          <p>
            These Terms and any dispute arising out of or relating to them or to services arranged through Urban Elite Limo are governed by the laws of the State of California, without regard to its conflict-of-laws principles, except to the extent that the mandatory consumer-protection or transportation laws of the jurisdiction in which the Trip is performed apply.
          </p>

          <h3 id="law-informal" className="privacy-page__subheading">27.2 Informal Resolution First</h3>

          <p>
            Before initiating any formal proceeding, the parties agree to first attempt in good faith to resolve any dispute informally by contacting the other party. The Customer should contact Urban Elite Limo at the address in Section 31 with a written description of the dispute and the resolution sought. The parties will make reasonable efforts to resolve the matter within thirty (30) days of that notice.
          </p>

          <h3 id="law-arbitration" className="privacy-page__subheading">27.3 Binding Arbitration and Class-Action Waiver</h3>

          <p>
            Except for claims that may be brought in small-claims court and requests for injunctive relief, any dispute not resolved informally shall be resolved by binding individual arbitration administered by a recognized arbitration provider under its applicable consumer rules, rather than in court. To the fullest extent permitted by applicable law, the parties waive any right to bring or participate in a class, collective, or representative action. Either party may bring an individual claim in small-claims court where the claim qualifies. Nothing in this Section prevents either party from seeking injunctive or equitable relief in a court of competent jurisdiction for the protection of intellectual property or confidential information.
          </p>

          <h3 id="law-venue" className="privacy-page__subheading">27.4 Venue</h3>

          <p>
            To the extent any dispute proceeds in court rather than arbitration, the parties submit to the exclusive jurisdiction and venue of the state and federal courts located in the State of California, and waive any objection to venue in those courts, except where applicable law provides the Customer a non-waivable right to another forum.
          </p>

          <h2 id="insurance-and-regulatory-compliance" className="privacy-page__heading">28. Insurance and Regulatory Compliance</h2>

          <p>
            Transportation Providers participating in the Urban Elite Limo network are expected to maintain the licenses, permits, vehicle registrations, inspections, commercial insurance, and other legal requirements applicable to their services and operating jurisdictions. The Customer acknowledges that transportation laws, licensing, insurance rules, and airport and local operating requirements vary by city, county, state, airport, venue, and service type. Because Transportation Providers are independent third parties, Urban Elite Limo does not guarantee that every Provider&apos;s compliance status will remain unchanged at all times. The Company may request, review, or verify Provider compliance information where operationally appropriate, and may suspend or remove a Provider that it reasonably believes does not meet applicable legal, safety, insurance, or operational standards. Nothing in this Section waives any rights the Customer may have under applicable law relating to transportation safety, insurance, or consumer protection.
          </p>

          <h2 id="platform-use-and-intellectual-property" className="privacy-page__heading">29. Platform Use and Intellectual Property</h2>

          <h3 id="ip-use" className="privacy-page__subheading">29.1 Permitted and Prohibited Use</h3>

          <p>
            The Customer may use the Platform only for lawful purposes and in accordance with these Terms. The Customer shall not use the Platform for fraudulent, unlawful, abusive, or deceptive purposes; submit false booking information or impersonate another person; use another person&apos;s payment method without authorization; interfere with the Platform&apos;s functionality or attempt to bypass security controls; scrape, copy, or extract Platform data without authorization; upload malicious code; attempt unauthorized access to Company systems; harass or defraud any person; or misuse promotional codes, coupons, credits, or referral programs. Urban Elite Limo may suspend, restrict, or deny Platform access where it reasonably believes a Customer has violated these Terms or created legal, security, operational, or safety risk.
          </p>

          <h3 id="ip-availability" className="privacy-page__subheading">29.2 Platform Availability</h3>

          <p>
            The Company does not guarantee continuous, uninterrupted, or error-free access to the Platform, which may be unavailable due to maintenance, technology issues, third-party outages, security updates, or circumstances beyond reasonable control.
          </p>

          <h3 id="ip-feedback" className="privacy-page__subheading">29.3 Intellectual Property and Feedback</h3>

          <p>
            All website content, branding, logos, trade and service names, text, graphics, images, designs, software, systems, booking workflows, and other intellectual property associated with Urban Elite Limo are owned by or licensed to the Company. Customers are granted a limited, non-exclusive, non-transferable, revocable right to access and use the Platform solely for lawful booking and service-related purposes, and shall not copy, reproduce, distribute, modify, publish, sell, license, reverse-engineer, or create derivative works from the Company&apos;s intellectual property without prior written permission. If a Customer provides suggestions, feedback, or reviews, the Customer grants the Company a non-exclusive, royalty-free, worldwide right to use that feedback for business improvement, customer service, marketing, training, or operational purposes, subject to applicable law and the Company&apos;s Privacy Policy.
          </p>

          <h2 id="general-provisions" className="privacy-page__heading">30. General Provisions</h2>

          <h3 id="general-entire" className="privacy-page__subheading">30.1 Entire Agreement and Conflict</h3>

          <p>
            These Terms, together with the booking confirmation, Privacy Policy, and any written terms expressly incorporated by reference, constitute the entire agreement between the Customer and Urban Elite Limo regarding the Platform and services arranged through the Company, and supersede prior or contemporaneous communications, proposals, advertisements, quotations, or understandings on the same subject. If there is a conflict between these Terms and a specific written booking confirmation, the confirmation controls only as to the specific reservation details expressly stated in it, and all other provisions of these Terms remain in effect.
          </p>

          <h3 id="general-updates" className="privacy-page__subheading">30.2 Updates to These Terms</h3>

          <p>
            Urban Elite Limo may update these Terms from time to time to reflect changes in law, business operations, payment practices, Platform features, safety procedures, or other legitimate reasons. Updated Terms become effective on the stated effective date or, if none is stated, when posted on the Company&apos;s website. Where required by applicable law or where the Company determines that changes are material, the Company may provide notice by website posting, email, SMS, booking-system message, or other reasonable method. To the fullest extent permitted by applicable law, continued use of the Platform or services after updated Terms take effect constitutes acceptance. Unless required by law or expressly stated otherwise, the Terms in effect at the time of booking generally apply to that reservation, except that updated payment, safety, fraud-prevention, or compliance rules may apply where reasonably necessary.
          </p>

          <h3 id="general-severability" className="privacy-page__subheading">30.3 Severability</h3>

          <p>
            If any provision of these Terms is held invalid, illegal, or unenforceable, that provision shall be modified to the minimum extent necessary to make it enforceable or, if it cannot be so modified, severed, and the remaining provisions shall continue in full force and effect.
          </p>

          <h3 id="general-waiver" className="privacy-page__subheading">30.4 No Waiver</h3>

          <p>
            No failure or delay by Urban Elite Limo in exercising any right under these Terms operates as a waiver of that right, and no single or partial exercise of any right precludes any further exercise. A waiver is effective only if in writing and signed by an authorized representative of the Company.
          </p>

          <h3 id="general-assignment" className="privacy-page__subheading">30.5 Assignment</h3>

          <p>
            The Customer may not assign or transfer these Terms or any rights or obligations under them without the Company&apos;s prior written consent. Urban Elite Limo may assign these Terms, in whole or in part, to an affiliate or in connection with a merger, acquisition, reorganization, or sale of assets. These Terms bind and benefit the parties and their permitted successors and assigns.
          </p>

          <h3 id="general-relationship" className="privacy-page__subheading">30.6 Relationship and Third Parties</h3>

          <p>
            Nothing in these Terms creates any partnership, joint venture, agency, or employment relationship between the Customer and Urban Elite Limo. Except for the indemnified parties identified in Section 26, these Terms do not create any third-party beneficiary rights.
          </p>

          <h3 id="general-notices" className="privacy-page__subheading">30.7 Notices</h3>

          <p>
            Notices to Urban Elite Limo must be sent to the contact information in Section 31 (Contact Information). The Company may provide notices to the Customer using the contact information associated with the reservation, and such notices are deemed received when sent.
          </p>

          <h3 id="general-survival" className="privacy-page__subheading">30.8 Survival</h3>

          <p>
            Provisions that by their nature should survive termination or completion of a reservation &mdash; including those governing payment obligations, damage and cleaning charges, intellectual property, disclaimers, limitation of liability, indemnification, governing law, and dispute resolution &mdash; survive.
          </p>

          <h3 id="general-headings" className="privacy-page__subheading">30.9 Headings and Interpretation</h3>

          <p>
            Section headings are for convenience only and do not affect interpretation. &ldquo;Including&rdquo; and &ldquo;such as&rdquo; are illustrative and not limiting.
          </p>

          <h2 id="contact-information" className="privacy-page__heading">31. Contact Information</h2>

          <p>
            Customers may contact Urban Elite Limo regarding these Terms, reservations, payments, refunds, complaints, or service concerns:
          </p>

          <ul className="privacy-page__list privacy-page__list--contact">
            <li>
              <strong>Company:</strong> Urban Elite Limo
            </li>
            <li>
              <strong>Headquarters:</strong> California, United States
            </li>
            <li>
              <strong>Operations:</strong> New York and surrounding states
            </li>
            <li>
              <strong>Email:</strong>{' '}
              <a href="mailto:info@urbanelitelimo.com">info@urbanelitelimo.com</a>
            </li>
            <li>
              <strong>Phone:</strong> <a href="tel:8888816610">(888) 881-6610</a>
            </li>
            <li>
              <strong>Website:</strong>{' '}
              <a href="https://urbanelitelimo.com" target="_blank" rel="noopener noreferrer">
                https://urbanelitelimo.com
              </a>
            </li>
          </ul>

          <p>
            For privacy-related requests, refer to the Company&apos;s separate Privacy Policy. For driver or Transportation Provider terms, applicable providers should refer to the separate Driver or Transportation Provider Agreement. For internal data handling, employee access, and payment-security procedures, Company personnel should refer to the separate Internal Data Handling and Payment Security Policy.
          </p>
      </LegalDocumentLayout>
        </Suspense>
      </ViewportLazy>
    </>
  )
}
