import { useState } from 'react'
import './CustomOrders.css'

const occasions = ['Birthday gift', 'Anniversary', 'Baby shower', 'Wedding', 'Just because', 'Other']

export default function CustomOrders() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    product: '',
    occasion: '',
    details: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="custom section" id="custom" aria-label="Request a custom order">
      <div className="container">
        <div className="custom__inner">
          <div className="custom__info">
            <span className="t-label reveal" style={{ color: 'var(--color-red)', display: 'block', marginBottom: '1.25rem' }}>
              Custom orders
            </span>

            <h2 className="t-headline custom__headline reveal reveal-delay-1">
              Your vision,<br /><em>our stitches.</em>
            </h2>

            <p className="t-body reveal reveal-delay-2" style={{ marginBottom: '2rem' }}>
              Have something special in mind? We love bringing unique ideas to life. Fill in the form and we will get back to you within 48 hours.
            </p>

            <div className="custom__process reveal reveal-delay-3">
              {[
                { step: '01', label: 'Share your idea' },
                { step: '02', label: 'We discuss & quote' },
                { step: '03', label: 'Crafting begins' },
                { step: '04', label: 'Delivered with care' },
              ].map((s) => (
                <div className="custom__step" key={s.step}>
                  <span className="custom__step-num t-label">{s.step}</span>
                  <span className="custom__step-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="custom__form-wrap reveal reveal-delay-2">
            {submitted ? (
              <div className="custom__success" role="status" aria-live="polite">
                <div className="custom__success-icon" aria-hidden="true">✦</div>
                <h3 className="t-title" style={{ marginBottom: '0.75rem' }}>Message received!</h3>
                <p className="t-body">
                  Thank you, {form.name || 'friend'}! We will be in touch within 48 hours with all the details.
                </p>
              </div>
            ) : (
              <form
                className="custom__form"
                onSubmit={handleSubmit}
                noValidate
                aria-label="Custom order request form"
              >
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="custom-name" className="form-label t-label">Your name</label>
                    <input
                      id="custom-name"
                      name="name"
                      type="text"
                      className="form-input"
                      placeholder="e.g. Sarah"
                      value={form.name}
                      onChange={handleChange}
                      required
                      autoComplete="given-name"
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="custom-email" className="form-label t-label">Email address</label>
                    <input
                      id="custom-email"
                      name="email"
                      type="email"
                      className="form-input"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="custom-product" className="form-label t-label">What would you like?</label>
                  <input
                    id="custom-product"
                    name="product"
                    type="text"
                    className="form-input"
                    placeholder="e.g. A red cardigan, size M"
                    value={form.product}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="custom-occasion" className="form-label t-label">Occasion (optional)</label>
                  <select
                    id="custom-occasion"
                    name="occasion"
                    className="form-input form-select"
                    value={form.occasion}
                    onChange={handleChange}
                  >
                    <option value="">Select an occasion</option>
                    {occasions.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>

                <div className="form-field">
                  <label htmlFor="custom-details" className="form-label t-label">Extra details</label>
                  <textarea
                    id="custom-details"
                    name="details"
                    className="form-input form-textarea"
                    placeholder="Colours, measurements, delivery date, special requests"
                    rows={4}
                    value={form.details}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" id="custom-submit-btn" className="btn-primary custom__submit">
                  Send request
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
