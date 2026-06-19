import { useEffect } from 'react'

/** Privacy Policy — legal page linked from the site footer. */
export default function PrivacyPolicyPage() {
  useEffect(() => {
    document.title = 'Privacy Policy | Urban Elite Limo'
  }, [])

  return (
    <section className="privacy-page section">
      <div className="container">
        <h1 className="privacy-page__title">Privacy Policy</h1>
        <div className="privacy-page__body">
          <p>
            This Privacy Statement explains how Book A Car collects, manages, protects, and discloses Personal
            Information collected via this website, located at info@urbanelitelimo.com as well as all related websites,
            applications, browser extensions, and other services provided by us.
          </p>
          <p>
            Ownership of the website and its content belongs to Urban Elite Limo service. Users or viewers of{' '}
            <a href="https://staging.urbanelitelimo.com/" target="_blank" rel="noopener noreferrer">
            https://staging.urbanelitelimo.com/
            </a>{' '}
            are referred to as &ldquo;you&rdquo;. The information you provide to us will not be used or shared with anyone
            except as described in this Privacy Policy. Our Website will only use customer information in accordance with
            this Privacy Policy and our Terms of Use.
          </p>

          <h2 className="privacy-page__heading">Wait times and late policies</h2>
          <p>
            A chauffeur will wait 15 to 20 minutes after the scheduled pick-up time for all one-way transfers as well as
            airport transfers to the Airport. For all domestic and international flights, the chauffeur will wait 60
            minutes – one hour after the flight arrival time at the gate, according to the official flight information.
          </p>

          <h2 className="privacy-page__heading">Payment</h2>
          <p>
            Urban Elite Limo Service reserves the right to require a credit card to secure service. Urban Elite Limo
            Service reserves the right to require 100% of the payment prior to service in accordance with Policy. Payment
            must be made in accordance with the Policy, or additional charges may apply.
          </p>

          <h2 className="privacy-page__heading">Collecting information</h2>
          <p>
            Visitor information, such as names, postal addresses, email addresses, etc., is collected when visitors
            voluntarily provide it. Your specific request is satisfied using this information.
          </p>

          <h2 className="privacy-page__heading">Payment processing</h2>
          <p>
            We will use the Personal Data you provide us to process your payment for the purchase of services under a
            contractual arrangement. We only work with third-party payment processors who adhere to the GDPR and take
            great care to secure data.
          </p>

          <h2 className="privacy-page__heading">Cookies and tracking technologies</h2>
          <p>
            Depending on the features offered by the Site, cookies and tracking technology may be used. Cookies and
            tracking technology are useful for gathering information, such as the type of browser and operating system
            used on the Site, tracking visitor numbers, and understanding how visitors use the Site. In addition, cookies
            allow the Site to be customized for visitors. The cookies and other tracking technologies used by our Site
            do not collect personal information about our visitors. Cookies, however, may be linked to personally
            identifiable information if you previously provided it.
          </p>

          <h2 className="privacy-page__heading">Data Security Commitment</h2>
          <p>
            We protect your personally identifiable information. Personnel, agents, and contractors (who have signed
            confidentiality agreements) are the only ones with access to this information.
          </p>

          <h2 className="privacy-page__heading">Information Accuracy</h2>
          <p>
            The information and pricing on our network are kept as accurate as possible. There may occasionally be
            typographical errors and technical issues affecting the data. We reserve the right to make corrections at
            invoicing time and will notify affected customers.
          </p>

          <h2 className="privacy-page__heading">Contact information for privacy</h2>
          <p>
            Feel free to contact us at the following address if you have any questions, concerns, or comments about our
            privacy policies:
          </p>
          <p>
            BY PHONE : <a href="tel:8888816610">(888) 881-6610</a>
            <br />
            BY EMAIL : <a href="mailto:info@urbanelitelimo.com">info@urbanelitelimo.com</a>
          </p>
          <p>We reserve the right to change our policy. All changes to this policy will be posted on this page.</p>
        </div>
      </div>
    </section>
  )
}
