import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', type: 'Job Seeker', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', phone: '', type: 'Job Seeker', message: '' });
    }, 3000);
  };

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '12px 14px',
    border: '1px solid #E4E4E0', outline: 'none',
    fontFamily: 'var(--font-body)', fontSize: '14px', color: '#0D1209',
    background: '#FAFAFA',
    transition: 'border-color 0.2s',
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
          <h1 style={{ maxWidth: '580px', marginBottom: '20px' }}>Contact Ink Coaching Vuka</h1>
          <p style={{ fontSize: '17px', maxWidth: '500px', lineHeight: 1.75 }}>
            Whether you are a candidate seeking placement, an employer looking to hire vetted talent, or a training partner, our team is ready to assist.
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
                  { label: 'Office', value: 'Ink Coaching Limited\nNairobi, Kenya' },
                  { label: 'Phone 1', value: '+254-714-036-800' },
                  { label: 'Phone 2', value: '+254-721-346-176' },
                  { label: 'Email', value: 'info@inkcoaching.co.ke' },
                  { label: 'Website', value: 'inkcoaching.co.ke' },
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

              <div style={{ marginTop: '40px', padding: '28px', background: '#F7F7F5', borderLeft: '3px solid #D11F5E' }}>
                <h4 style={{ marginBottom: '8px', fontSize: '15px' }}>Office Hours</h4>
                <p style={{ fontSize: '14px', lineHeight: 1.75 }}>
                  Monday to Friday: 8:00am to 5:00pm EAT<br />
                  Saturday: 9:00am to 1:00pm EAT<br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            {/* Right: form */}
            <div style={{ border: '1px solid #E4E4E0', padding: '48px' }}>
              <h3 style={{ marginBottom: '8px' }}>Send a Message</h3>
              <p style={{ fontSize: '14px', marginBottom: '32px' }}>
                Use this form to enquire about placements, training programs, or partnership opportunities.
              </p>

              {submitted ? (
                <div style={{ padding: '48px 0', textAlign: 'center' }}>
                  <h3 style={{ marginBottom: '10px', color: '#0D1209' }}>Message Sent</h3>
                  <p style={{ fontSize: '14px' }}>An Ink Coaching representative will follow up with you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <label style={labelStyle}>Full Name</label>
                      <input type="text" required placeholder="Jane Doe" value={form.name} onChange={e => setForm({...form, name: e.target.value})} style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>Phone</label>
                      <input type="tel" placeholder="+254 7..." value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} style={inputStyle} />
                    </div>
                  </div>

                  <div>
                    <label style={labelStyle}>Email Address</label>
                    <input type="email" required placeholder="jane@example.com" value={form.email} onChange={e => setForm({...form, email: e.target.value})} style={inputStyle} />
                  </div>

                  <div>
                    <label style={labelStyle}>I am a</label>
                    <select value={form.type} onChange={e => setForm({...form, type: e.target.value})} style={inputStyle}>
                      <option>Job Seeker</option>
                      <option>Employer</option>
                      <option>Enterprise Training Partner</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label style={labelStyle}>Message</label>
                    <textarea required placeholder="Tell us how we can help you..." rows={5} value={form.message} onChange={e => setForm({...form, message: e.target.value})} style={{ ...inputStyle, resize: 'none' }} />
                  </div>

                  <button type="submit" className="btn btn-red" style={{ justifyContent: 'center', marginTop: '6px' }}>
                    Send Message
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 960px) {
          .two-col { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </div>
  );
};

export default Contact;
