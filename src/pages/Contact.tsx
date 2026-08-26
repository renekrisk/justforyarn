import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const WHATSAPP_LINK = 'https://wa.me/254757900294?text=' + encodeURIComponent("Hi! I'd like to initiate a bespoke commission with Just For Yarns.");
const BESPOKE_VIDEO = '/logo&images/video/whitegirlsmodellling.mp4';

const details = [
  { label: 'Phone / WhatsApp', value: '+254 757 900 294' },
  { label: 'Studio Location',   value: 'Nairobi, Kenya' },
  { label: 'Atelier Hours',    value: 'Mon – Sat · 9 AM – 6 PM EAT' },
];

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="home-editorial">

      {/* ── 1. CINEMATIC FULL-BLEED BESPOKE VIDEO HEADER ───────── */}
      <section className="bespoke-wide-showcase" style={{ marginTop: '0', marginBottom: '120px' }}>
        <div className="bespoke-wide-showcase__video-frame">
          <video autoPlay loop muted playsInline className="bespoke-wide-showcase__video">
            <source src={BESPOKE_VIDEO} type="video/mp4" />
          </video>
        </div>
        
        <div className="bespoke-wide-showcase__text-block">
          <span className="meta-eyebrow">[ BESPOKE COMMISSIONS ]</span>
          <h1 className="editorial-heading">
            Translating Sketches into Singular Form
          </h1>
          <p className="editorial-manifesto">
            Bring your vision, Pinterest moodboard, or custom measurements. 
            Our atelier translates your concept into a singular hand-crafted garment tailored precisely to your silhouette.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="editorial-action-link editorial-action-link--large"
          >
            <span>INITIATE BESPOKE CONVERSATION VIA WHATSAPP</span>
            <svg width="22" height="14" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 1L17 6M17 6L12 11M17 6H1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </section>

      {/* ── 2. STUDIO CONTACT DETAILS ──────────────────────────── */}
      <section className="exhibit-grid-section">
        <div className="exhibit-grid-section__header">
          <span className="meta-eyebrow">[ ATELIER DETAILS ]</span>
          <h2 className="editorial-heading">Direct Contact & Hours</h2>
        </div>

        <div className="exhibit-grid">
          {details.map((d, i) => (
            <div key={i} className="signature-card">
              <span className="signature-eyebrow">{d.label}</span>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '24px', fontWeight: 400, color: '#111' }}>
                {d.value}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* ── 3. MINIMAL BESPOKE FORM SECTION ────────────────────── */}
      <section className="maison-narrative">
        <div className="maison-narrative__container" style={{ gridTemplateColumns: '1fr' }}>
          
          <div className="maison-narrative__text-col" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <span className="meta-eyebrow">[ SEND A MESSAGE ]</span>
            <h2 className="editorial-heading">Share Your Vision with Fiona</h2>
            <p className="editorial-manifesto">
              Describe your order, preferred color palette, sizing, or attach reference ideas.
            </p>

            {submitted ? (
              <div className="signature-card" style={{ width: '100%', padding: '40px' }}>
                <span className="signature-eyebrow">MESSAGE RECEIVED</span>
                <h3 className="editorial-heading">Thank you for reaching out.</h3>
                <p className="editorial-manifesto">
                  Fiona will review your request and get back to you within 24 hours.
                </p>
                <Link to="/shop" className="editorial-action-link">
                  <span>EXPLORE THE COLLECTION</span>
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    style={{ padding: '16px 20px', border: '1px solid #ddd', fontSize: '14px', fontFamily: 'inherit' }}
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email Address"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    style={{ padding: '16px 20px', border: '1px solid #ddd', fontSize: '14px', fontFamily: 'inherit' }}
                  />
                </div>

                <input
                  type="tel"
                  placeholder="Phone / WhatsApp Number (optional)"
                  value={form.phone}
                  onChange={e => setForm({ ...form, phone: e.target.value })}
                  style={{ padding: '16px 20px', border: '1px solid #ddd', fontSize: '14px', fontFamily: 'inherit' }}
                />

                <textarea
                  required
                  rows={5}
                  placeholder="Describe your bespoke piece, preferred colors, measurements, or Pinterest vision…"
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  style={{ padding: '16px 20px', border: '1px solid #ddd', fontSize: '14px', fontFamily: 'inherit', resize: 'vertical' }}
                />

                <button
                  type="submit"
                  className="editorial-action-link"
                  style={{ background: 'none', border: 'none', cursor: 'pointer', alignSelf: 'flex-start' }}
                >
                  <span>SUBMIT BESPOKE INQUIRY →</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
};

export default Contact;
