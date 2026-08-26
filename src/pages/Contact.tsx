import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EditorialImage from '../components/EditorialImage';

const WHATSAPP = 'https://wa.me/254757900294?text=' + encodeURIComponent("Hi! I'd like to initiate a bespoke commission with Just For Yarns.");

const STUDIO_IMG = '/logo&images/colorfulyarn.jfif';

const details = [
  { label: 'Phone',    value: '+254 757 900 294' },
  { label: 'Location', value: 'Nairobi, Kenya' },
  { label: 'Hours',    value: 'Mon – Sat · 9 AM – 6 PM EAT' },
];

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pg-contact">

      {/* ── 1. LV-STYLE FEATURE PANEL — WHATSAPP CTA ────────────── */}
      <section className="lv-feature-panel">
        <div className="lv-feature-panel__media">
          <EditorialImage
            src={STUDIO_IMG}
            alt="The Studio"
            aspectRatio="3/4"
            fit="cover"
            focalPoint={{ x: 50, y: 30 }}
          />
        </div>
        <div className="lv-feature-panel__copy">
          <p className="lv-kicker">Fastest Response</p>
          <h2 className="lv-heading-lg">
            Commission via<br /><em>WhatsApp</em>
          </h2>
          <p className="lv-body-text">
            The quickest way to start is on WhatsApp. Send a message, a photo, or a voice note — I'll respond within the day. It's the most personal way to begin your bespoke journey.
          </p>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="lv-cta-ghost"
          >
            Open WhatsApp
          </a>
        </div>
      </section>

      {/* ── 2. LV-STYLE CONTACT DETAILS ─────────────────────────── */}
      <section className="pg-section border-b">
        <div className="pg-container">
          <div className="contact-details-grid">
            {details.map((d, i) => (
              <div key={i} className="contact-detail-item">
                <span className="contact-detail-label">{d.label}</span>
                <span className="contact-detail-value">{d.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. LV-STYLE FORM SECTION ────────────────────────────── */}
      <section className="pg-section">
        <div className="pg-container">
          <div className="contact-form-section">
            <div className="contact-form-header">
              <p className="lv-kicker">Send a Message</p>
              <h2 className="lv-heading-lg">
                Tell me about<br />your <em>vision.</em>
              </h2>
              <p className="lv-body-text">
                Whether you have a detailed brief or just a spark of an idea, I'd love to hear from you. Fill out the form below and I'll get back to you within 24 hours.
              </p>
            </div>

            <div className="contact-form-wrap">
              {submitted ? (
                <div className="contact-success">
                  <p className="lv-kicker">Message Received</p>
                  <h2 className="contact-success__heading">
                    Thank you<br /><em>for reaching out.</em>
                  </h2>
                  <p className="contact-success__sub">
                    I'll be in touch within 24 hours. In the meantime, feel free to browse the collection.
                  </p>
                  <Link to="/shop" className="lv-text-link">
                    Explore the Collection
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form" noValidate>
                  <div className="form-row">
                    <div className="form-field">
                      <label className="form-label">Full Name</label>
                      <input
                        type="text"
                        required
                        className="form-input"
                        placeholder="Your name"
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                      />
                    </div>
                    <div className="form-field">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        required
                        className="form-input"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-field">
                    <label className="form-label">Phone (optional)</label>
                    <input
                      type="tel"
                      className="form-input"
                      placeholder="+254 700 000 000"
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>

                  <div className="form-field">
                    <label className="form-label">Your Message</label>
                    <textarea
                      required
                      className="form-input form-textarea"
                      placeholder="Describe your order, your color preferences, any reference images you have in mind…"
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="lv-cta-ghost">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. LV-STYLE CLOSING MANIFESTO ───────────────────────── */}
      <section className="lv-manifesto">
        <div className="lv-manifesto__inner">
          <p className="lv-kicker light">Just For Yarns · Nairobi</p>
          <h2 className="lv-manifesto__headline">
            Every piece tells<br />a <em>unique story.</em>
          </h2>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="lv-cta-ghost light">
              Reach Out
            </a>
            <Link to="/shop" className="lv-text-link" style={{ color: 'rgba(255,255,255,0.65)', borderColor: 'rgba(255,255,255,0.35)' }}>
              Explore the Collection
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
