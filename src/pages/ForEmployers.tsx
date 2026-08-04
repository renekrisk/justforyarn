import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../components/Icon';

const ForEmployers: React.FC = () => {
  const [form, setForm] = useState({
    orgName: '', contactName: '', email: '', phone: '',
    partnerType: 'Employer / Client', serviceInterest: '', message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ orgName: '', contactName: '', email: '', phone: '', partnerType: 'Employer / Client', serviceInterest: '', message: '' });
    }, 3000);
  };

  return (
    <div>

      {/* ── PAGE HEADER ─────────────────────────────────────── */}
      <section style={{ padding: '80px 0 72px', borderBottom: '1px solid #E4E4E0' }}>
        <div className="container">
          <span className="eyebrow">For Partners & Employers</span>
          <h1 style={{ maxWidth: '720px', marginBottom: '20px' }}>
            Access Verified Local Talent.<br />Build Inclusive Supply Chains.
          </h1>
          <p style={{ fontSize: '18px', maxWidth: '580px', lineHeight: 1.75 }}>
            VUKA Youth Connect connects organisations, clients, and businesses to a growing pool of verified, marketplace-ready service providers from refugee and host communities in Turkana and Garissa — artisans, creatives, technicians, and digital workers ready to deliver.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '36px' }}>
            <a href="#partner-form" className="btn btn-red">Partner With Us</a>
            <Link to="/about" className="btn btn-outline">About the Programme</Link>
          </div>
        </div>
      </section>

      {/* ── WHY PARTNER ──────────────────────────────────────── */}
      <section style={{ padding: '100px 0', borderBottom: '1px solid #E4E4E0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '100px', alignItems: 'start' }} className="two-col">

            <div>
              <span className="eyebrow">Why Partner With VUKA</span>
              <h2 style={{ marginBottom: '32px' }}>Providers who are ready, verified, and supported.</h2>
              <p style={{ marginBottom: '24px', fontSize: '16px', color: '#555', lineHeight: 1.8 }}>
                Every provider activated on VUKA has been assessed for marketplace readiness, onboarded with a verified digital profile, coached on client communication and service delivery, and remains actively supported by our field team.
              </p>
              <p style={{ marginBottom: '40px', fontSize: '16px', color: '#555', lineHeight: 1.8 }}>
                Partnering with VUKA gives you access to a growing marketplace of skilled, locally-based service providers — and contributes directly to inclusive economic growth in some of Kenya's most underserved communities.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0', borderTop: '1px solid #E4E4E0' }}>
                {[
                  {
                    title: 'Verified, Profile-Based Discovery',
                    body: 'Browse provider profiles with verified skill information, service descriptions, pricing ranges, and community ratings — reducing the search and trust cost for your organisation.',
                  },
                  {
                    title: 'Backed by ILO Decent Work Standards',
                    body: 'VUKA operates under ILO PROSPECTS programme guidelines, ensuring all provider engagements meet minimum decent work and provider protection standards.',
                  },
                  {
                    title: 'Inclusion Built In',
                    body: 'At least 40% of our activated providers are women, 40% are refugees, and a minimum 5% are persons with disabilities — giving your organisation measurable inclusive procurement impact.',
                  },
                  {
                    title: 'On-the-Ground Support',
                    body: 'Our field teams in Turkana and Garissa provide active supervision and troubleshooting — ensuring service quality and provider reliability across remote settings.',
                  },
                ].map((item, i) => (
                  <div key={i} style={{
                    padding: '28px 0', borderBottom: i < 3 ? '1px solid #E4E4E0' : 'none',
                  }}>
                    <h4 style={{ fontSize: '16px', fontWeight: 600, color: '#000', marginBottom: '8px' }}>{item.title}</h4>
                    <p style={{ fontSize: '14px', color: '#666', lineHeight: 1.75 }}>{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: partner types */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ background: '#111', padding: '48px 40px' }}>
                <div style={{
                  fontFamily: 'var(--font-head)', fontSize: '11px', fontWeight: 600,
                  letterSpacing: '0.16em', textTransform: 'uppercase', color: '#D11F5E', marginBottom: '28px',
                }}>
                  Who Should Partner With Us
                </div>
                {[
                  { icon: <Icon name="building" size={24} />, title: 'Businesses & Clients', desc: 'Looking for local artisan, home, creative, repair, or digital services in Turkana and Garissa.' },
                  { icon: <Icon name="globe" size={24} />, title: 'NGOs & Humanitarian Orgs', desc: 'Seeking to outsource services to local providers while creating livelihoods for refugees and host communities.' },
                  { icon: <Icon name="handshake" size={24} />, title: 'Impact Investors', desc: 'Supporting the VUKA platform\'s growth and wanting to contribute to sustainable digital marketplace infrastructure.' },
                  { icon: <Icon name="school" size={24} />, title: 'Training Institutions', desc: 'With alumni talent pools seeking marketplace activation and sustained work opportunities.' },
                ].map((type, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'flex-start', gap: '16px',
                    padding: '16px 0', borderBottom: i < 3 ? '1px solid #222' : 'none',
                  }}>
                    <span style={{ flexShrink: 0 }}>{type.icon}</span>
                    <div>
                      <div style={{ fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: '14px', color: '#fff', marginBottom: '6px' }}>{type.title}</div>
                      <div style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: '#777', lineHeight: 1.6 }}>{type.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ border: '1px solid #E4E4E0', padding: '36px' }}>
                <div style={{
                  fontFamily: 'var(--font-head)', fontSize: '11px', fontWeight: 700,
                  textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--text-muted)', marginBottom: '20px',
                }}>
                  Service Categories Available
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {[
                    'Artisan & Technical', 'Home Services', 'Creative & Freelance',
                    'Beauty & Wellness', 'Repair & Maintenance', 'Digital Profile Services',
                  ].map((cat, j) => (
                    <span key={j} className="badge badge-grey">{cat}</span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── PARTNER FORM ─────────────────────────────────────── */}
      <section id="partner-form" style={{ padding: '100px 0', background: '#F7F7F5', borderBottom: '1px solid #E4E4E0' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <span className="eyebrow">Partner Registration</span>
          <h2 style={{ marginBottom: '12px' }}>Express interest in partnering</h2>
          <p style={{ fontSize: '16px', color: '#555', marginBottom: '48px', lineHeight: 1.75 }}>
            Tell us about your organisation and how you would like to work with VUKA Youth Connect. Our team will reach out within 3 business days.
          </p>

          {submitted ? (
            <div style={{
              background: '#000', color: '#fff', padding: '48px 40px', textAlign: 'center',
            }}>
              <div style={{ marginBottom: '16px' }}><Icon name="check" size={28} /></div>
              <h3 style={{ color: '#fff', marginBottom: '10px' }}>Partnership request received.</h3>
              <p style={{ color: '#777', fontSize: '15px' }}>Our team will reach out to you within 3 business days.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="form-grid">
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#555', marginBottom: '8px' }}>Organisation Name *</label>
                  <input
                    required value={form.orgName}
                    onChange={e => setForm(f => ({ ...f, orgName: e.target.value }))}
                    placeholder="Your organisation name"
                    style={{ width: '100%', padding: '14px 16px', border: '1px solid #D0D0D0', fontSize: '15px', outline: 'none', fontFamily: 'var(--font-body)', boxSizing: 'border-box' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#555', marginBottom: '8px' }}>Contact Name *</label>
                  <input
                    required value={form.contactName}
                    onChange={e => setForm(f => ({ ...f, contactName: e.target.value }))}
                    placeholder="Your full name"
                    style={{ width: '100%', padding: '14px 16px', border: '1px solid #D0D0D0', fontSize: '15px', outline: 'none', fontFamily: 'var(--font-body)', boxSizing: 'border-box' }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="form-grid">
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#555', marginBottom: '8px' }}>Email Address *</label>
                  <input
                    required type="email" value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    placeholder="contact@organisation.org"
                    style={{ width: '100%', padding: '14px 16px', border: '1px solid #D0D0D0', fontSize: '15px', outline: 'none', fontFamily: 'var(--font-body)', boxSizing: 'border-box' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#555', marginBottom: '8px' }}>Phone Number</label>
                  <input
                    value={form.phone}
                    onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                    placeholder="+254 700 000 000"
                    style={{ width: '100%', padding: '14px 16px', border: '1px solid #D0D0D0', fontSize: '15px', outline: 'none', fontFamily: 'var(--font-body)', boxSizing: 'border-box' }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#555', marginBottom: '8px' }}>Partnership Type *</label>
                <select
                  required value={form.partnerType}
                  onChange={e => setForm(f => ({ ...f, partnerType: e.target.value }))}
                  style={{ width: '100%', padding: '14px 16px', border: '1px solid #D0D0D0', fontSize: '15px', outline: 'none', fontFamily: 'var(--font-body)', background: '#fff', boxSizing: 'border-box' }}
                >
                  <option>Employer / Client</option>
                  <option>NGO / Humanitarian Organisation</option>
                  <option>Impact Investor</option>
                  <option>Training Institution / Referral Partner</option>
                  <option>Government Body</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#555', marginBottom: '8px' }}>Services or Collaboration Area of Interest</label>
                <input
                  value={form.serviceInterest}
                  onChange={e => setForm(f => ({ ...f, serviceInterest: e.target.value }))}
                  placeholder="e.g. Artisan services, creative freelance, platform partnership..."
                  style={{ width: '100%', padding: '14px 16px', border: '1px solid #D0D0D0', fontSize: '15px', outline: 'none', fontFamily: 'var(--font-body)', boxSizing: 'border-box' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#555', marginBottom: '8px' }}>Message</label>
                <textarea
                  value={form.message} rows={5}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  placeholder="Tell us more about your organisation and what you're looking to achieve through this partnership..."
                  style={{ width: '100%', padding: '14px 16px', border: '1px solid #D0D0D0', fontSize: '15px', outline: 'none', fontFamily: 'var(--font-body)', resize: 'vertical', boxSizing: 'border-box' }}
                />
              </div>

              <div>
                <button type="submit" className="btn btn-red" style={{ padding: '18px 48px', fontSize: '15px' }}>
                  Submit Partnership Interest
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      <style>{`
        @media (max-width: 960px) {
          .two-col { grid-template-columns: 1fr !important; gap: 60px !important; }
        }
        @media (max-width: 640px) {
          .form-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};

export default ForEmployers;
