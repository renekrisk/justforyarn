import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send to a backend or email service
    console.log('Contact form submitted:', form);
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '14px 16px',
    border: '1px solid #E4E4E0', outline: 'none',
    fontFamily: 'var(--font-body)', fontSize: '14px', color: '#0D1209',
    background: '#FAFAFA',
    transition: 'border-color 0.2s',
    borderRadius: '2px',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontFamily: 'var(--font-head)',
    fontSize: '11px', fontWeight: 700,
    textTransform: 'uppercase', letterSpacing: '0.12em',
    color: 'var(--text-muted)', marginBottom: '7px',
  };

  return (
    <div>
      {/* ── PAGE HEADER ─────────────────────────────────────── */}
      <section style={{ padding: '80px 0 72px', borderBottom: '1px solid #E4E4E0' }}>
        <div className="container">
          <span className="eyebrow">Get in Touch</span>
          <h1 style={{ maxWidth: '580px', marginBottom: '20px' }}>Contact Us</h1>
          <p style={{ fontSize: '17px', maxWidth: '500px', lineHeight: 1.75 }}>
            Have a question or want to place a custom order? I would love to hear from you. Fill out the form below and I will get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* ── CONTENT ─────────────────────────────────────────── */}
      <section style={{ padding: '80px 0 100px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '100px', alignItems: 'start' }} className="two-col">

            {/* Left: info */}
            <div>
              <span className="eyebrow">Our Details</span>
              <h2 style={{ marginBottom: '32px' }}>Reach us directly</h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0', borderTop: '1px solid #E4E4E0' }}>
                {[
                  { label: 'Phone', value: '+254-714-036-800' },
                  { label: 'Phone 2', value: '+254-721-346-176' },
                  { label: 'Email', value: 'info@crochet.com' },
                  { label: 'Location', value: 'Nairobi, Kenya' },
                ].map((item, i) => (
                  <div key={i} style={{ padding: '24px 0', borderBottom: '1px solid #E4E4E0', display: 'grid', gridTemplateColumns: '100px 1fr', gap: '20px' }}>
                    <div style={{ fontFamily: 'var(--font-head)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--text-muted)', paddingTop: '2px' }}>
                      {item.label}
                    </div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: '#0D1209', whiteSpace: 'pre-line', lineHeight: 1.6 }}>
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: form */}
            <div>
              {submitted ? (
                <div style={{
                  background: '#F6F6F6',
                  padding: '48px',
                  textAlign: 'center',
                  borderRadius: '4px'
                }}>
                  <h3 style={{ fontFamily: 'var(--font-sub)', fontSize: '24px', fontWeight: 600, marginBottom: '16px', color: '#000' }}>
                    Thank you for reaching out!
                  </h3>
                  <p style={{ color: '#666', lineHeight: 1.7 }}>
                    I will get back to you within 24 hours. In the meantime, feel free to browse my shop.
                  </p>
                  <Link to="/shop" className="btn btn-red" style={{ marginTop: '24px', display: 'inline-flex' }}>
                    Browse Shop
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    <div>
                      <label style={labelStyle}>Full Name</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        style={inputStyle}
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Email</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        style={inputStyle}
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Phone</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={e => setForm({ ...form, phone: e.target.value })}
                        style={inputStyle}
                        placeholder="+254 700 000 000"
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Message</label>
                      <textarea
                        required
                        value={form.message}
                        onChange={e => setForm({ ...form, message: e.target.value })}
                        style={{ ...inputStyle, minHeight: '140px', resize: 'vertical' }}
                        placeholder="Tell me about your order or question..."
                      />
                    </div>
                    <button type="submit" className="btn btn-red" style={{ alignSelf: 'flex-start' }}>
                      Send Message
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 960px) {
          .two-col { grid-template-columns: 1fr !important; gap: 60px !important; }
        }
      `}</style>
    </div>
  );
};

export default Contact;
