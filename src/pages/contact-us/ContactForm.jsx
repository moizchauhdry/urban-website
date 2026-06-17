import { useState } from 'react'
import PhoneInput from 'react-phone-number-input'

const INITIAL = {
  name: '',
  email: '',
  message: '',
}

/** Contact inquiry form — centered layout matching the Contact Us page design. */
export default function ContactForm() {
  const [phone, setPhone] = useState(undefined)
  const [formData, setFormData] = useState(INITIAL)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const subject = encodeURIComponent('Contact inquiry from Urban Elite website')
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${phone ?? ''}\n\nMessage:\n${formData.message}`,
    )

    window.location.href = `mailto:info@urbanelitelimo.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <section className="contact-page-form-section">
      <div className="container">
        <h1 className="contact-page-title">Contact Us</h1>

        <form className="contact-page-form" onSubmit={handleSubmit} noValidate>
          <div className="contact-page-form__grid">
            <div className="form-group">
              <label htmlFor="contact-name">Name</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                autoComplete="name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact-email">Email</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="email"
              />
            </div>
            <div className="form-group full">
              <label htmlFor="contact-phone">Phone number</label>
              <PhoneInput
                id="contact-phone"
                className="contact-page-phone-input"
                international
                defaultCountry="US"
                value={phone}
                onChange={setPhone}
                placeholder="Phone number"
              />
            </div>
            <div className="form-group full">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <button type="submit" className="btn-yellow contact-page-form__submit">
            Get a Free Quote
          </button>

          {submitted ? (
            <p className="contact-page-form__note" role="status">
              Your email client should open with your message. If it does not, call us at{' '}
              <a href="tel:8888816610">(888) 881-6610</a>.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  )
}
