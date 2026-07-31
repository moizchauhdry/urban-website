/** @typedef {{ id: string, label: string, children?: { id: string, label: string }[] }} LegalNavItem */

/** @type {LegalNavItem[]} */
export const PRIVACY_NAV = [
  { id: 'introduction', label: '1. Introduction and Scope' },
  { id: 'who-we-are', label: '2. Who We Are (Data Controller)' },
  {
    id: 'information-we-collect',
    label: '3. Information We Collect',
    children: [
      { id: 'info-direct', label: '3.1 Information You Provide Directly' },
      { id: 'info-automatic', label: '3.2 Information We Collect Automatically' },
      { id: 'info-location', label: '3.3 Location Information' },
      { id: 'info-third-parties', label: '3.4 Information We Receive From Third Parties' },
    ],
  },
  { id: 'categories', label: '4. Categories of Personal Information' },
  { id: 'cookies', label: '5. Cookies, Analytics, and Advertising' },
  { id: 'how-we-use', label: '6. How We Use Your Information' },
  { id: 'how-we-share', label: '7. How We Share and Disclose Information' },
  {
    id: 'payment-info',
    label: '8. Payment Information and Card Data',
    children: [
      { id: 'payment-tokenization', label: '8.1 Temporary Card Storage and Tokenization' },
      { id: 'payment-security-codes', label: '8.2 Card Security Codes' },
      { id: 'payment-processors', label: '8.3 Processing by Third-Party Processors' },
      { id: 'payment-access', label: '8.4 Access Controls' },
    ],
  },
  {
    id: 'privacy-rights',
    label: '9. Your Privacy Rights and Choices',
    children: [
      { id: 'rights-exercise', label: '9.1 Rights You Can Exercise' },
      { id: 'rights-how', label: '9.2 How to Exercise Your Rights' },
      { id: 'rights-opt-out', label: '9.3 Do Not Sell or Share' },
      { id: 'rights-gpc', label: '9.4 Opt-Out Preference Signals' },
      { id: 'rights-agents', label: '9.5 Authorized Agents' },
      { id: 'rights-shine', label: '9.6 California Shine the Light' },
      { id: 'rights-marketing', label: '9.7 Marketing and Text-Message Choices' },
    ],
  },
  { id: 'international', label: '10. International Visitors' },
  { id: 'retention', label: '11. Data Retention' },
  { id: 'protect', label: '12. How We Protect Your Information' },
  { id: 'children', label: "13. Children's Privacy" },
  { id: 'third-party-links', label: '14. Third-Party Links and Services' },
  { id: 'changes', label: '15. Changes to This Privacy Policy' },
  { id: 'contact', label: '16. How to Contact Us' },
]

/** @type {LegalNavItem[]} */
export const TERMS_NAV = [
  { id: 'introduction', label: '1. Introduction and Acceptance' },
  { id: 'definitions', label: '2. Definitions' },
  { id: 'eligibility', label: '3. Eligibility' },
  {
    id: 'nature-of-the-platform-and-independent-providers',
    label: '4. Nature of the Platform',
    children: [
      { id: 'nature-role', label: "4.1 The Company's Role" },
      { id: 'nature-providers', label: '4.2 Independent Transportation Providers' },
      { id: 'nature-standards', label: '4.3 Provider Standards' },
    ],
  },
  {
    id: 'bookings',
    label: '5. Bookings',
    children: [
      { id: 'bookings-requests', label: '5.1 Reservation Requests' },
      { id: 'bookings-info', label: "5.2 Customer's Booking Information" },
      { id: 'bookings-acceptance', label: '5.3 Acceptance of Bookings' },
      { id: 'bookings-confirmation', label: '5.4 Confirmation Details' },
      { id: 'bookings-modifications', label: '5.5 Modifications' },
    ],
  },
  {
    id: 'quotes-pricing-and-additional-charges',
    label: '6. Quotes, Pricing, and Charges',
    children: [
      { id: 'quotes-estimates', label: '6.1 Estimates' },
      { id: 'quotes-factors', label: '6.2 Pricing Factors' },
      { id: 'quotes-additional', label: '6.3 Additional Charges' },
      { id: 'quotes-errors', label: '6.4 Pricing Errors' },
      { id: 'quotes-promo', label: '6.5 Promotional Pricing' },
      { id: 'quotes-currency', label: '6.6 Currency' },
    ],
  },
  {
    id: 'payment-terms',
    label: '7. Payment Terms',
    children: [
      { id: 'payment-methods', label: '7.1 Accepted Methods' },
      { id: 'payment-requirements', label: '7.2 Payment Requirements' },
      { id: 'payment-secure', label: '7.3 Secure Payment Processing' },
      { id: 'payment-retention', label: '7.4 Payment-Information Security' },
      { id: 'payment-on-file', label: '7.5 Additional Charges to Method on File' },
      { id: 'payment-outstanding', label: '7.6 Outstanding Balances' },
    ],
  },
  {
    id: 'payment-authorization-verification-and-fraud-prevention',
    label: '8. Payment Authorization & Fraud',
    children: [
      { id: 'auth-charge', label: '8.1 Authorization to Charge' },
      { id: 'auth-verify', label: '8.2 Customer Verification' },
      { id: 'auth-refusal', label: '8.3 Refusal or Failure to Verify' },
      { id: 'auth-chargebacks', label: '8.4 Chargebacks' },
    ],
  },
  { id: 'electronic-communications-and-consent', label: '9. Electronic Communications' },
  {
    id: 'pickup-airport-transfers-and-waiting-time',
    label: '10. Pickup & Airport Transfers',
    children: [
      { id: 'pickup-availability', label: '10.1 Customer Availability' },
      { id: 'pickup-meet', label: '10.2 Meet-and-Greet' },
      { id: 'pickup-airport', label: '10.3 Airport Transfers' },
      { id: 'pickup-waiting', label: '10.4 Complimentary Waiting Time' },
      { id: 'pickup-additional-wait', label: '10.5 Additional Waiting Time' },
    ],
  },
  {
    id: 'no-show-and-customer-delays',
    label: '11. No-Show and Customer Delays',
    children: [
      { id: 'noshow-customer', label: '11.1 Customer No-Show' },
      { id: 'noshow-driver', label: '11.2 Driver No-Show' },
      { id: 'noshow-delays', label: '11.3 Customer Delays' },
    ],
  },
  {
    id: 'vehicle-substitution-routing-and-service-interruptions',
    label: '12. Vehicle Substitution & Routing',
    children: [
      { id: 'vehicle-sub', label: '12.1 Vehicle Substitution' },
      { id: 'vehicle-route', label: '12.2 Route Selection' },
      { id: 'vehicle-interruptions', label: '12.3 Service Interruptions' },
    ],
  },
  {
    id: 'passenger-conduct-and-responsibilities',
    label: '13. Passenger Conduct',
    children: [
      { id: 'conduct', label: '13.1 Conduct' },
      { id: 'conduct-responsibilities', label: '13.2 Responsibilities' },
      { id: 'conduct-capacity', label: '13.3 Vehicle Capacity' },
      { id: 'conduct-child', label: '13.4 Child Safety' },
      { id: 'conduct-luggage', label: '13.5 Luggage' },
    ],
  },
  { id: 'prohibited-activities', label: '14. Prohibited Activities' },
  { id: 'lost-and-found', label: '15. Lost and Found' },
  { id: 'cleaning-damage-and-repair-charges', label: '16. Cleaning, Damage, and Repair' },
  {
    id: 'right-to-refuse-or-terminate-service',
    label: '17. Right to Refuse or Terminate',
    children: [
      { id: 'refuse-standards', label: '17.1 Fair and Reasonable Standards' },
      { id: 'refuse-grounds', label: '17.2 Grounds for Refusal' },
      { id: 'refuse-during', label: '17.3 Termination During Service' },
      { id: 'refuse-remedies', label: '17.4 Remedies and Right to Dispute' },
      { id: 'refuse-reporting', label: '17.5 Reporting Serious Incidents' },
    ],
  },
  {
    id: 'cancellation-policy',
    label: '18. Cancellation Policy',
    children: [
      { id: 'cancel-how', label: '18.1 How to Cancel' },
      { id: 'cancel-window', label: '18.2 Standard Cancellation Window' },
      { id: 'cancel-late', label: '18.3 Late & High-Demand' },
      { id: 'cancel-company', label: '18.4 Cancellation by Urban Elite Limo' },
      { id: 'cancel-effect', label: '18.5 Effect of Cancellation' },
    ],
  },
  {
    id: 'refund-policy',
    label: '19. Refund Policy',
    children: [
      { id: 'refund-general', label: '19.1 General Standard' },
      { id: 'refund-when', label: '19.2 When Refunds May Be Issued' },
      { id: 'refund-substitution', label: '19.3 Vehicle Substitution and Delays' },
      { id: 'refund-non', label: '19.4 Non-Refundable Situations' },
      { id: 'refund-processing', label: '19.5 Processing Time and Method' },
    ],
  },
  { id: 'service-credits-coupons-and-promotions', label: '20. Service Credits & Promotions' },
  { id: 'customer-complaints-and-service-review', label: '21. Customer Complaints' },
  {
    id: 'service-standards-limitations-and-warranty-disclaimer',
    label: '22. Service Standards & Warranty',
    children: [
      { id: 'standards-commitment', label: '22.1 Service Commitment' },
      { id: 'standards-estimates', label: '22.2 Estimates and Pickup Recommendations' },
      { id: 'standards-driver', label: '22.3 Driver Assignment' },
      { id: 'standards-disclaimer', label: '22.4 Warranty Disclaimer' },
    ],
  },
  {
    id: 'limitation-of-liability',
    label: '23. Limitation of Liability',
    children: [
      { id: 'liability-indirect', label: '23.1 Exclusion of Indirect Damages' },
      { id: 'liability-cap', label: '23.2 Liability Cap' },
      { id: 'liability-providers', label: '23.3 Providers & Mitigation' },
    ],
  },
  { id: 'assumption-of-risk', label: '24. Assumption of Risk' },
  { id: 'force-majeure', label: '25. Force Majeure' },
  { id: 'indemnification', label: '26. Indemnification' },
  {
    id: 'governing-law-and-dispute-resolution',
    label: '27. Governing Law & Disputes',
    children: [
      { id: 'law-governing', label: '27.1 Governing Law' },
      { id: 'law-informal', label: '27.2 Informal Resolution First' },
      { id: 'law-arbitration', label: '27.3 Binding Arbitration' },
      { id: 'law-venue', label: '27.4 Venue' },
    ],
  },
  { id: 'insurance-and-regulatory-compliance', label: '28. Insurance & Regulatory Compliance' },
  {
    id: 'platform-use-and-intellectual-property',
    label: '29. Platform Use & IP',
    children: [
      { id: 'ip-use', label: '29.1 Permitted and Prohibited Use' },
      { id: 'ip-availability', label: '29.2 Platform Availability' },
      { id: 'ip-feedback', label: '29.3 Intellectual Property and Feedback' },
    ],
  },
  {
    id: 'general-provisions',
    label: '30. General Provisions',
    children: [
      { id: 'general-entire', label: '30.1 Entire Agreement' },
      { id: 'general-updates', label: '30.2 Updates to These Terms' },
      { id: 'general-severability', label: '30.3 Severability' },
      { id: 'general-waiver', label: '30.4 No Waiver' },
      { id: 'general-assignment', label: '30.5 Assignment' },
      { id: 'general-relationship', label: '30.6 Relationship and Third Parties' },
      { id: 'general-notices', label: '30.7 Notices' },
      { id: 'general-survival', label: '30.8 Survival' },
      { id: 'general-headings', label: '30.9 Headings and Interpretation' },
    ],
  },
  { id: 'contact-information', label: '31. Contact Information' },
]
