import { lazy, Suspense } from 'react'
import LegalPageHero from '../../components/legal/LegalPageHero.jsx'
import ViewportLazy from '../../components/common/ViewportLazy.jsx'
import { PRIVACY_NAV } from '../../data/legalNav.js'

const LegalDocumentLayout = lazy(() => import('../../components/legal/LegalDocumentLayout.jsx'))

/** Privacy Policy — legal page linked from the site footer. */
export default function PrivacyPolicyPage() {
  return (
    <>
      <LegalPageHero label="Privacy Policy hero" />
      <ViewportLazy
        minHeight={800}
        rootMargin="480px 0px"
        deferMs={0}
        mobileRootMargin="120px 0px"
        mobileDeferMs={2800}
      >
        <Suspense fallback={null}>
          <LegalDocumentLayout title="Privacy Policy" navItems={PRIVACY_NAV}>
          <h2 id="introduction" className="privacy-page__heading">1. Introduction and Scope</h2>
          <p>
            Urban Elite Limo  respects your privacy and is committed to protecting the personal information you entrust to
            us when you book, pay for, or use transportation services arranged through our platform. This Privacy Policy
            explains what personal information we collect, why we collect it, how we use and share it, how long we keep
            it, how we protect it, and the choices and rights you have regarding your information.
          </p>
          <p>
            This Privacy Policy applies to all personal information collected through our website located at{' '}
            <a href="https://urbanelitelimo.com" target="_blank" rel="noopener noreferrer">
              https://urbanelitelimo.com
            </a>
            , our mobile applications, our reservation and dispatch systems, our customer support channels, and every
            other communication channel we use to receive and coordinate transportation bookings (collectively, the
            &ldquo;Platform&rdquo;). This includes bookings and communications made by telephone, email, SMS/text
            message, live chat, social media messaging, third-party booking partners, travel agencies, and authorized
            affiliates.
          </p>
          <p>
            This Privacy Policy should be read together with our Terms of Service, which govern the transportation
            reservation services we provide. Where a term is defined in the Terms of Service and used here, it carries
            the same meaning unless stated otherwise. By using the Platform or providing personal information to us, you
            acknowledge that you have read and understood this Privacy Policy.
          </p>

          <h2 id="who-we-are" className="privacy-page__heading">2. Who We Are (Data Controller)</h2>
          <p>
            Urban Elite Limo is a California-registered company that operates a technology-enabled reservation, dispatch,
            coordination, and customer support platform for ground transportation. Our headquarters is located in
            California, and our transportation operations are focused primarily in New York and surrounding states. We
            serve customers within the United States; however, the passengers we transport may be traveling from anywhere
            in the world.
          </p>
          <p>
            For the purposes of applicable privacy laws, Urban Elite Limo is the business and data controller responsible
            for the personal information described in this Privacy Policy. Our contact details for privacy matters are
            provided in the &ldquo;How to Contact Us&rdquo; section at the end of this document.
          </p>

          <h2 id="information-we-collect" className="privacy-page__heading">3. Information We Collect</h2>
          <p>
            We collect personal information in three ways: information you provide to us directly, information we collect
            automatically when you use the Platform, and information we receive from third parties. The specific
            information we collect depends on how you interact with us.
          </p>

          <h3 id="info-direct" className="privacy-page__subheading">3.1 Information You Provide Directly</h3>
          <p>
            When you request a quote, make a reservation, create or maintain a profile, pay for a trip, contact support,
            or otherwise interact with us, we may collect:
          </p>
          <ul className="privacy-page__list">
            <li>
              <strong>Identity and contact information</strong> — your name, the passenger&apos;s name, email address,
              telephone number, and billing address.
            </li>
            <li>
              <strong>Reservation and trip details</strong> — pickup date and time, pickup location, destination, flight
              information (airline, flight number, arrival date and scheduled arrival time), number of passengers, number
              and size of luggage, child seat or child restraint requirements, accessibility requests, and any special
              instructions you provide.
            </li>
            <li>
              <strong>Payment information</strong> — payment card number, expiration date, cardholder name, billing
              address, and the payment method used. As described in Section 8, full card details are held only temporarily
              and are then replaced by a secure token from our payment processor.
            </li>
            <li>
              <strong>Identity verification information</strong> — where reasonably necessary to prevent fraud or verify
              lawful use of a payment method, we may request government-issued photo identification, a driver&apos;s
              license, a passport, billing address confirmation, or confirmation that you are authorized to use the
              payment method.
            </li>
            <li>
              <strong>Communications and support records</strong> — the content of emails, SMS/text messages, phone calls,
              live chat sessions, and social media messages, together with complaint details, photographs, screenshots,
              receipts, and other documents you submit when you contact us or raise a service concern.
            </li>
            <li>
              <strong>Feedback and reviews</strong> — suggestions, comments, ratings, reviews, and other feedback you
              choose to share with us.
            </li>
          </ul>

          <h3 id="info-automatic" className="privacy-page__subheading">3.2 Information We Collect Automatically</h3>
          <p>
            When you visit our website or use our applications, we and our service providers automatically collect certain
            technical and usage information, including:
          </p>
          <ul className="privacy-page__list">
            <li>
              <strong>Device and connection data</strong> — IP address, device type, browser type and version, operating
              system, language settings, and mobile device identifiers.
            </li>
            <li>
              <strong>Usage data</strong> — pages and screens viewed, links and buttons clicked, referring and exit pages,
              session recordings and interaction data (for example, through Microsoft Clarity), dates and times of access,
              and other diagnostics about how you use the Platform.
            </li>
            <li>
              <strong>Cookies and similar technologies</strong> — identifiers set through cookies, pixels, tags, and local
              storage, as described in Section 5.
            </li>
          </ul>

          <h3 id="info-location" className="privacy-page__subheading">3.3 Location Information</h3>
          <p>
            Location data is central to providing transportation, and we collect it in two forms. First, we collect the
            pickup and drop-off addresses that you manually enter when you make a booking. Second, where you grant
            permission through our website or mobile application, we collect real-time GPS location data from your device
            in order to coordinate pickups, match you with a nearby vehicle, share your location with the assigned driver,
            and support live trip coordination.
          </p>
          <p>
            Precise, real-time GPS location is treated as sensitive personal information under California law. You can
            disable real-time location sharing at any time through your device or browser settings, though doing so may
            limit certain features such as live pickup coordination. Manually entered pickup and drop-off addresses will
            still be needed to complete a booking.
          </p>

          <h3 id="info-third-parties" className="privacy-page__subheading">3.4 Information We Receive From Third Parties</h3>
          <p>
            We also receive personal information about you from third parties who help us provide, secure, and coordinate
            our services, including:
          </p>
          <ul className="privacy-page__list">
            <li>
              <strong>Payment processors</strong> — our processors (for example, Stripe and Square) return payment tokens,
              authorization results, and limited transaction details so we can confirm and track payments without storing
              full card numbers.
            </li>
            <li>
              <strong>Transportation Providers and Drivers</strong> — the independent providers and drivers who fulfill
              your trip may share trip status, pickup and completion information, waiting-time records, incident reports,
              and details relevant to service quality, safety, damage, or lost-and-found matters.
            </li>
            <li>
              <strong>Flight status providers</strong> — where you supply flight details, we or the assigned provider may
              monitor publicly available flight status information to coordinate airport pickups.
            </li>
            <li>
              <strong>Booking partners and affiliates</strong> — when you book through a third-party booking partner,
              travel agency, or authorized affiliate, that party may share your reservation and contact details with us so
              we can fulfill the trip.
            </li>
            <li>
              <strong>Advertising and analytics partners</strong> — platforms such as Meta and Google may provide
              aggregated campaign and measurement data associated with our advertising.
            </li>
          </ul>

          <h2 id="categories" className="privacy-page__heading">4. Categories of Personal Information (California Disclosure)</h2>
          <p>
            The table below describes the categories of personal information — using the categories set out in the
            California Consumer Privacy Act (CCPA/CPRA) — that we have collected within the last twelve (12) months, and
            whether we &ldquo;share&rdquo; each category for cross-context behavioral advertising. As explained in Section
            6, we do not sell personal information for money, but our use of advertising and analytics tools such as the
            Meta Pixel and Google Ads may qualify as &ldquo;sharing&rdquo; under California law.
          </p>

          <div className="privacy-page__table-wrap">
            <table className="privacy-page__table">
              <thead>
                <tr>
                  <th scope="col">Category of Personal Information</th>
                  <th scope="col">Examples of What We Collect</th>
                  <th scope="col">Collected? / &ldquo;Shared&rdquo; for Ads?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>A. Identifiers</td>
                  <td>
                    Name, email address, telephone number, billing address, IP address, device identifiers, account or
                    reservation identifiers.
                  </td>
                  <td>
                    Collected: Yes
                    <br />
                    Shared: No
                  </td>
                </tr>
                <tr>
                  <td>B. Customer records (Cal. Civ. Code § 1798.80)</td>
                  <td>
                    Name, pickup and dropoff address, telephone number, and payment card information provided to book and
                    pay for a trip.
                  </td>
                  <td>
                    Collected: Yes
                    <br />
                    Shared: No
                  </td>
                </tr>
                <tr>
                  <td>C. Protected classification characteristics</td>
                  <td>
                    Information that may be inferred from accessibility requests (e.g., mobility needs). We do not
                    intentionally collect race, religion, or similar characteristics.
                  </td>
                  <td>
                    Collected: Yes (limited)
                    <br />
                    Shared: No
                  </td>
                </tr>
                <tr>
                  <td>D. Commercial information</td>
                  <td>
                    Booking history, trip records, services purchased or considered, and payment/transaction records.
                  </td>
                  <td>
                    Collected: Yes
                    <br />
                    Shared: Yes
                  </td>
                </tr>
                <tr>
                  <td>E. Internet or network activity</td>
                  <td>Browsing and interaction data on our Platform, session recordings, and analytics data.</td>
                  <td>
                    Collected: Yes
                    <br />
                    Shared: Yes
                  </td>
                </tr>
                <tr>
                  <td>F. Geolocation data</td>
                  <td>
                    Manually entered pickup and drop-off addresses and, with permission, precise real-time GPS location.
                  </td>
                  <td>
                    Collected: Yes
                    <br />
                    Shared: No
                  </td>
                </tr>
                <tr>
                  <td>G. Audio, electronic, visual information</td>
                  <td>
                    Records of calls, emails, chat and SMS messages, and photographs or screenshots you submit with a
                    complaint.
                  </td>
                  <td>
                    Collected: Yes
                    <br />
                    Shared: No
                  </td>
                </tr>
                <tr>
                  <td>H. Professional or employment information</td>
                  <td>
                    Where corporate or business billing is used, the account, company name, and related contact details.
                  </td>
                  <td>
                    Collected: Yes (if applicable)
                    <br />
                    Shared: No
                  </td>
                </tr>
                <tr>
                  <td>I. Inferences</td>
                  <td>
                    Preferences and characteristics derived from your activity for analytics and advertising audiences.
                  </td>
                  <td>
                    Collected: Yes
                    <br />
                    Shared: Yes
                  </td>
                </tr>
                <tr>
                  <td>J. Sensitive personal information</td>
                  <td>
                    Precise (GPS) geolocation; government identifiers (driver&apos;s license, passport, state ID) when
                    requested for verification; account log-in in combination with payment credentials.
                  </td>
                  <td>
                    Collected: Yes
                    <br />
                    Shared: No
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>We do not knowingly collect biometric information, and we do not collect education information.</p>

          <h2 id="cookies" className="privacy-page__heading">5. Cookies, Analytics, and Advertising Technologies</h2>
          <p>
            We use cookies and similar tracking technologies to operate the Platform, remember your preferences, measure
            and improve performance, and support our advertising. Some of these technologies are provided by third parties
            who may set their own identifiers and receive information about your activity on our Platform.
          </p>
          <p>The main categories of technologies we use are:</p>
          <ul className="privacy-page__list">
            <li>
              <strong>Strictly necessary</strong> — required to operate core functions such as loading pages, securing the
              site, and completing a booking.
            </li>
            <li>
              <strong>Performance and analytics</strong> — we use Google Analytics and Microsoft Clarity to understand how
              visitors use our Platform, including page views, navigation, and session recordings, so we can improve
              usability and diagnose issues.
            </li>
            <li>
              <strong>Advertising and measurement</strong> — we use the Meta (Facebook and Instagram) Pixel and Google Ads
              to measure our advertising, reach people who have shown interest in our services, and understand which
              campaigns lead to bookings.
            </li>
          </ul>
          <p>
            Because the Meta Pixel and Google advertising tools may disclose identifiers and activity data to those
            platforms for cross-context behavioral advertising, this activity is treated as &ldquo;sharing&rdquo; of
            personal information under California law, even though no money changes hands. You can opt out of this sharing
            as described in Section 9, including through the &ldquo;Do Not Sell or Share My Personal Information&rdquo;
            mechanism and recognized opt-out preference signals such as the Global Privacy Control (GPC).
          </p>
          <p>
            You can also manage cookies through your browser settings and, where offered, through our cookie banner or
            preference tool. Blocking some cookies may affect how the Platform functions.
          </p>

          <h2 id="how-we-use" className="privacy-page__heading">6. How We Use Your Information</h2>
          <p>We use personal information for the following business and commercial purposes:</p>
          <ul className="privacy-page__list">
            <li>
              To receive, confirm, coordinate, and fulfill transportation reservations, including assigning trips to
              Transportation Providers and Drivers.
            </li>
            <li>
              To process payments, apply authorizations, issue refunds and credits, and maintain accurate billing and
              transaction records.
            </li>
            <li>
              To verify identity, confirm authorized use of payment methods, and detect, investigate, and prevent fraud,
              chargeback abuse, and other unlawful activity.
            </li>
            <li>
              To communicate with you about reservations, confirmations, receipts, driver and dispatch information, trip
              updates, operational notices, and customer support.
            </li>
            <li>To coordinate airport pickups using flight information and publicly available flight status.</li>
            <li>
              To provide customer support and to review, investigate, and resolve complaints, disputes, damage claims, and
              lost-and-found matters.
            </li>
            <li>To operate, secure, maintain, analyze, and improve the Platform and our services.</li>
            <li>
              To conduct marketing and advertising, measure campaign performance, and reach relevant audiences, subject to
              your choices and applicable law.
            </li>
            <li>
              To comply with legal, tax, accounting, insurance, regulatory, and law-enforcement obligations, and to
              establish, exercise, or defend legal claims.
            </li>
          </ul>
          <p>
            We use sensitive personal information — such as precise geolocation and government identifiers — only for the
            limited purposes of providing the transportation you request, coordinating pickups, verifying identity,
            preventing fraud, and complying with law. We do not use sensitive personal information to infer characteristics
            about you for advertising.
          </p>

          <h2 id="how-we-share" className="privacy-page__heading">7. How We Share and Disclose Information</h2>
          <p>
            We share personal information only as described below. We do not sell your personal information for money.
          </p>
          <ul className="privacy-page__list">
            <li>
              <strong>Transportation Providers and Drivers</strong> — we share the information needed to perform your trip,
              such as passenger name, contact number, pickup and drop-off locations, flight details, special instructions,
              and, where enabled, live location.
            </li>
            <li>
              <strong>Payment processors and financial institutions</strong> — we share payment information with processors
              such as Stripe and Square, and with banks and card networks, to authorize charges, process refunds, and
              prevent fraud.
            </li>
            <li>
              <strong>Analytics and advertising partners</strong> — we share online identifiers and activity data with
              providers such as Google (Analytics and Ads), Meta, and Microsoft Clarity, as described in Section 5.
            </li>
            <li>
              <strong>Service providers and vendors</strong> — we share information with vendors who host our systems, send
              communications, provide customer-support tooling, and perform similar functions on our behalf under contracts
              that restrict their use of the information.
            </li>
            <li>
              <strong>Insurance carriers and professional advisers</strong> — we may share information with insurers,
              auditors, accountants, and legal advisers in connection with claims, audits, and legal matters.
            </li>
            <li>
              <strong>Law enforcement and authorities</strong> — we may disclose information to law enforcement,
              regulators, or other authorities where permitted or required by law, or to protect the rights, safety, and
              property of customers, drivers, the public, or the Company.
            </li>
            <li>
              <strong>Business transfers</strong> — if we are involved in a merger, acquisition, financing, reorganization,
              or sale of assets, personal information may be transferred as part of that transaction, subject to this
              Privacy Policy.
            </li>
            <li>
              <strong>With your direction or consent</strong> — we share information with other parties when you ask us to
              or otherwise consent.
            </li>
          </ul>

          <h2 id="payment-info" className="privacy-page__heading">8. Payment Information and Card Data Handling</h2>
          <p>
            Protecting payment information is a priority. This section explains specifically how we handle card data,
            consistent with our Terms of Service and our internal information-security practices.
          </p>

          <h3 id="payment-tokenization" className="privacy-page__subheading">8.1 Temporary Card Storage and Tokenization</h3>
          <p>
            When you provide a payment card, we may temporarily store limited card information associated with your
            customer profile for the short period needed to complete the booking and authorize payment. Once payment is
            successfully processed, the full card details are automatically removed and replaced with a secure token
            provided by our payment processor. The token — not your full card number — is what we retain to identify the
            card for future reservations, refunds, dispute resolution, and fraud prevention.
          </p>

          <h3 id="payment-security-codes" className="privacy-page__subheading">8.2 Card Security Codes</h3>
          <p>
            We do not intentionally retain card verification values (CVV/CVC/CID) after a payment authorization is
            completed. You should never transmit card security codes by email, SMS, or other unsecured channels unless
            expressly instructed through a secure, Company-approved process.
          </p>

          <h3 id="payment-processors" className="privacy-page__subheading">8.3 Processing by Third-Party Processors</h3>
          <p>
            Card transactions are processed through established third-party payment processors (such as Stripe and Square).
            Their handling of your payment information is also governed by their own terms and privacy policies. We
            encourage the use of secure payment links and portals; where you choose to provide payment details by telephone
            or another approved channel, that information is handled under the safeguards described in our Terms of
            Service.
          </p>

          <h3 id="payment-access" className="privacy-page__subheading">8.4 Access Controls</h3>
          <p>
            Access to payment-related information is limited to authorized personnel who need it for legitimate business
            purposes such as reservation management, payment processing, customer support, fraud prevention, dispute
            resolution, accounting, auditing, or legal compliance, and is protected through role-based access controls,
            authentication requirements, and audit logging.
          </p>

          <h2 id="privacy-rights" className="privacy-page__heading">9. Your Privacy Rights and Choices</h2>
          <p>
            Urban Elite Limo extends the following privacy rights to all United States customers as a matter of policy. We
            do this voluntarily, as a best practice — because our company is registered in California and we want to hold
            ourselves to California&apos;s high standard everywhere — even where a particular law may not yet be strictly
            mandatory for a business of our current size. Where a specific right is granted only under a particular law,
            that law controls its exact scope.
          </p>

          <h3 id="rights-exercise" className="privacy-page__subheading">9.1 Rights You Can Exercise</h3>
          <ul className="privacy-page__list">
            <li>
              <strong>Right to know / access</strong> — you may request the categories and specific pieces of personal
              information we have collected about you, the sources, the purposes, and the categories of third parties to
              whom we disclose it.
            </li>
            <li>
              <strong>Right to delete</strong> — you may request that we delete personal information we have collected from
              you, subject to legal exceptions (for example, completing a transaction, meeting tax or accounting
              obligations, preventing fraud, or defending legal claims).
            </li>
            <li>
              <strong>Right to correct</strong> — you may request that we correct inaccurate personal information.
            </li>
            <li>
              <strong>Right to opt out of sale or sharing</strong> — you may opt out of the &ldquo;sharing&rdquo; of your
              personal information for cross-context behavioral advertising. We do not sell personal information for
              money.
            </li>
            <li>
              <strong>Right to limit use of sensitive personal information</strong> — you may direct us to limit the use of
              your sensitive personal information to what is necessary to provide the services you request; as noted above,
              we already restrict our use of sensitive information to those purposes.
            </li>
            <li>
              <strong>Right to non-discrimination</strong> — we will not discriminate against you for exercising any of
              these rights, for example by denying service or charging different prices.
            </li>
          </ul>

          <h3 id="rights-how" className="privacy-page__subheading">9.2 How to Exercise Your Rights</h3>
          <p>
            You may submit a request using any of the methods in the &ldquo;How to Contact Us&rdquo; section, including by
            email to{' '}
            <a href="mailto:info@urbanelitelimo.com">info@urbanelitelimo.com</a> or by telephone at{' '}
            <a href="tel:8888816610">(888) 881-6610</a>. To protect your information, we will take reasonable steps to
            verify your identity before acting on a request, which may require you to confirm details already associated
            with your reservation or account. We will respond within the timeframes required by applicable law.
          </p>

          <h3 id="rights-opt-out" className="privacy-page__subheading">9.3 Do Not Sell or Share My Personal Information</h3>
          <p>
            To opt out of our &ldquo;sharing&rdquo; of personal information for cross-context behavioral advertising, you
            may use the &ldquo;Do Not Sell or Share My Personal Information&rdquo; link provided on our website, adjust
            your cookie preferences where offered, or contact us using the details below.
          </p>

          <h3 id="rights-gpc" className="privacy-page__subheading">9.4 Opt-Out Preference Signals (Global Privacy Control)</h3>
          <p>
            Where technically feasible, we honor recognized opt-out preference signals, including the Global Privacy
            Control (GPC). If you enable GPC in a supported browser or extension, we will treat it as a valid request to
            opt out of sharing for the browser and device from which it is sent.
          </p>

          <h3 id="rights-agents" className="privacy-page__subheading">9.5 Authorized Agents</h3>
          <p>
            You may use an authorized agent to submit a request on your behalf. We may require the agent to provide proof
            of authorization and may still ask you to verify your identity directly.
          </p>

          <h3 id="rights-shine" className="privacy-page__subheading">9.6 California &ldquo;Shine the Light&rdquo;</h3>
          <p>
            California Civil Code Section 1798.83 permits California residents to request certain information about
            disclosure of personal information to third parties for their direct marketing purposes. We do not disclose
            personal information to third parties for their own direct marketing. You may contact us with any questions
            about this.
          </p>

          <h3 id="rights-marketing" className="privacy-page__subheading">9.7 Marketing and Text-Message Choices</h3>
          <p>
            You can opt out of marketing emails by using the unsubscribe link in those messages. For SMS/text messages, you
            can opt out by replying STOP (or the keyword provided) to any marketing text; message and data rates may apply.
            Even if you opt out of marketing, we may still send you non-promotional messages about your reservations, such
            as confirmations, driver details, and trip updates.
          </p>

          <h2 id="international" className="privacy-page__heading">10. International Visitors</h2>
          <p>
            Urban Elite Limo is based in the United States, and our services are directed to customers within the United
            States. We do not target or market our services to residents of the European Union, the European Economic Area,
            or the United Kingdom. As a result, comprehensive EU/UK data protection laws (such as the GDPR) generally do
            not apply to us merely because a traveler visiting the United States books a ride.
          </p>
          <p>
            Nevertheless, as a courtesy to international travelers, we handle personal information in line with core
            data-protection principles: we collect only what we need, use it for the purposes described here, keep it only
            as long as necessary, and apply reasonable security. If you are an international visitor, please understand
            that your information will be processed and stored in the United States, where privacy laws may differ from
            those in your home country. Where you have rights under the laws of your own jurisdiction, we will make
            reasonable efforts to honor comparable requests; you may contact us using the details below.
          </p>

          <h2 id="retention" className="privacy-page__heading">11. Data Retention</h2>
          <p>
            We retain personal information only for as long as reasonably necessary to fulfill the purposes described in
            this Privacy Policy, including providing services, maintaining records of transactions, resolving disputes,
            preventing fraud, and meeting our legal, tax, accounting, insurance, and regulatory obligations. Retention
            periods vary by data type and the reason we hold it.
          </p>
          <p>
            As explained in Section 8, full payment card details are held only temporarily and are replaced by a secure
            token once payment is completed. Booking, communication, and transaction records are generally retained for
            the period required to support customer service, accounting, and legal-compliance needs. When personal
            information is no longer needed, we take reasonable steps to delete, de-identify, or securely archive it in
            accordance with applicable law and our internal policies.
          </p>

          <h2 id="protect" className="privacy-page__heading">12. How We Protect Your Information</h2>
          <p>
            We implement commercially reasonable administrative, technical, and organizational safeguards designed to
            protect personal information against unauthorized access, disclosure, alteration, misuse, and loss. These
            measures include role-based access controls, authentication requirements, restricted internal access, audit
            logging, tokenization of payment card data, and reliance on established third-party processors for card
            transactions.
          </p>
          <p>
            No method of transmission over the internet or method of electronic storage is completely secure, and we cannot
            guarantee absolute security. You also play a role in keeping your information safe: use secure payment links
            when provided, avoid sending sensitive details through unsecured channels, and contact us promptly if you
            believe your information or account has been compromised.
          </p>

          <h2 id="children" className="privacy-page__heading">13. Children&apos;s Privacy</h2>
          <p>
            Our Platform and services are intended for adults. Consistent with our Terms of Service, you must be at least
            eighteen (18) years of age, or have the legal authority to enter into a binding contract, to make a
            reservation. We do not knowingly collect personal information directly from children under 16, and we do not
            direct our services to children.
          </p>
          <p>
            Minors may of course travel as passengers when a booking is made by an adult; in that case, the adult customer
            is responsible for providing any passenger information and for supervising minors during the trip. If you
            believe we have inadvertently collected personal information directly from a child, please contact us and we
            will take reasonable steps to delete it.
          </p>

          <h2 id="third-party-links" className="privacy-page__heading">14. Third-Party Links and Services</h2>
          <p>
            The Platform may contain links to, or integrate with, third-party websites, applications, and services — such
            as payment processors, mapping and flight-status providers, social media platforms, and booking partners. This
            Privacy Policy does not apply to those third parties, and we are not responsible for their privacy practices.
            We encourage you to review the privacy policies of any third-party service you use in connection with our
            Platform.
          </p>

          <h2 id="changes" className="privacy-page__heading">15. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal
            requirements, or business operations. When we make changes, we will revise the &ldquo;Last Updated&rdquo; date
            above and, where a change is material, provide additional notice by posting on our website or through another
            reasonable method. Your continued use of the Platform after an updated Privacy Policy becomes effective
            indicates your acknowledgment of the changes, to the extent permitted by applicable law.
          </p>

          <h2 id="contact" className="privacy-page__heading">16. How to Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, wish to exercise your privacy rights, or want to raise a
            privacy concern, you may contact us:
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
            For questions about our Terms of Service, please refer to that separate document. For matters relating to
            drivers and Transportation Providers, please refer to the applicable Driver or Transportation Provider
            Agreement.
          </p>
      </LegalDocumentLayout>
        </Suspense>
      </ViewportLazy>
    </>
  )
}
