import React, { useState } from 'react';

const ForEmployers: React.FC = () => {
  const [form, setForm] = useState({
    companyName: '', contactName: '', email: '', phone: '',
    jobTitle: '', jobDescription: '', trainingDesired: 'Corporate Readiness'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ companyName: '', contactName: '', email: '', phone: '', jobTitle: '', jobDescription: '', trainingDesired: 'Corporate Readiness' });
    }, 3000);
  };

  return (
    <div>

      {/* ── PAGE HEADER ─────────────────────────────────────── */}
      <section style={{ padding: '80px 0 72px', borderBottom: '1px solid #E4E4E0' }}>
        <div className="container">
          <span className="eyebrow">For Employers</span>
          <h1 style={{ maxWidth: '680px', marginBottom: '20px' }}>
            Hire Talent That Arrives Ready.
          </h1>
          <p style={{ fontSize: '18px', maxWidth: '540px', lineHeight: 1.75 }}>
            Stop losing time and budget on candidates who need months of hand-holding. Vuka delivers professionals who have been trained, assessed, and certified to your exact specifications before their first interview.
          </p>
        </div>
      </section>

      {/* ── CONTENT BLOCK ───────────────────────────────────── */}
      <section style={{ padding: '100px 0', borderBottom: '1px solid #E4E4E0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '100px', alignItems: 'start' }} className="two-col">

            {/* Left: value proposition */}
            <div>
              <span className="eyebrow">The Model</span>
              <h2 style={{ marginBottom: '24px' }}>Zero risk. Commission only on success.</h2>
              <p style={{ marginBottom: '24px' }}>
                Vuka acts as your talent intermediary. We source candidates, enrol them in the training tracks aligned to your requirements, and present only certified graduates for your consideration.
              </p>
              <p style={{ marginBottom: '40px' }}>
                A placement commission is charged only when a candidate is successfully positioned and retained, meaning you carry no financial risk in the sourcing and training stage.
              </p>

              <div className="employer-benefits" style={{ display: 'flex', flexDirection: 'column', gap: '0', borderTop: '1px solid #E4E4E0' }}>
                {[
                  {
                    title: 'Tailored Pre-Placement Training',
                    body: 'We design training content around your organisation\'s systems, hierarchy, culture, and role specifications, not generic employability content.',
                  },
                  {
                    title: 'Verified Behavioral Profiles',
                    body: 'Every candidate completes a full DiSC psychometric assessment and EQ evaluation before presentation. You receive the reports alongside the CV.',
                  },
                  {
                    title: 'Reduced Onboarding Friction',
                    body: 'Ink-certified hires integrate into productive workflows significantly faster, requiring less supervision and fewer escalations in their first 90 days.',
                  },
                ].map((item, i) => (
                  <div key={i} style={{
                    padding: '28px 0',
                    borderBottom: '1px solid #E4E4E0',
                  }}>
                    <h4 style={{ marginBottom: '8px', fontSize: '16px' }}>{item.title}</h4>
                    <p style={{ fontSize: '14px', lineHeight: 1.75 }}>{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: placement request form */}
            <div>
              <div className="request-form-card" style={{ border: '1px solid #E4E4E0', padding: '48px' }}>
                <h3 style={{ marginBottom: '8px' }}>Post a Placement Request</h3>
                <p style={{ fontSize: '14px', marginBottom: '32px' }}>
                  Submit your role requirements and our team will design the appropriate training pipeline for your candidates.
                </p>

                {submitted ? (
                  <div style={{ padding: '48px 0', textAlign: 'center' }}>
                    <h3 style={{ color: '#2E3529', marginBottom: '10px' }}>Request Received</h3>
                    <p style={{ fontSize: '14px' }}>An Ink Coaching representative will contact you within one business day.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                      <div>
                        <label style={{ display: 'block', fontFamily: 'var(--font-head)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '6px' }}>Company</label>
                        <input type="text" required value={form.companyName} onChange={(e) => setForm({...form, companyName: e.target.value})} placeholder="Acme Corp" style={{ width: '100%', padding: '11px 14px', border: '1px solid #E4E4E0', outline: 'none', fontFamily: 'var(--font-body)', fontSize: '14px', background: '#FAFAFA' }} />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontFamily: 'var(--font-head)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '6px' }}>Contact Person</label>
                        <input type="text" required value={form.contactName} onChange={(e) => setForm({...form, contactName: e.target.value})} placeholder="Jane Doe" style={{ width: '100%', padding: '11px 14px', border: '1px solid #E4E4E0', outline: 'none', fontFamily: 'var(--font-body)', fontSize: '14px', background: '#FAFAFA' }} />
                      </div>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontFamily: 'var(--font-head)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '6px' }}>Work Email</label>
                      <input type="email" required value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} placeholder="hiring@acme.com" style={{ width: '100%', padding: '11px 14px', border: '1px solid #E4E4E0', outline: 'none', fontFamily: 'var(--font-body)', fontSize: '14px', background: '#FAFAFA' }} />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                      <div>
                        <label style={{ display: 'block', fontFamily: 'var(--font-head)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '6px' }}>Target Role</label>
                        <input type="text" required value={form.jobTitle} onChange={(e) => setForm({...form, jobTitle: e.target.value})} placeholder="e.g. Sales Specialist" style={{ width: '100%', padding: '11px 14px', border: '1px solid #E4E4E0', outline: 'none', fontFamily: 'var(--font-body)', fontSize: '14px', background: '#FAFAFA' }} />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontFamily: 'var(--font-head)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '6px' }}>Training Required</label>
                        <select value={form.trainingDesired} onChange={(e) => setForm({...form, trainingDesired: e.target.value})} style={{ width: '100%', padding: '11px 14px', border: '1px solid #E4E4E0', outline: 'none', fontFamily: 'var(--font-body)', fontSize: '14px', background: '#FAFAFA' }}>
                          <option>Corporate Readiness</option>
                          <option>DiSC Psychometrics</option>
                          <option>Emotional Intelligence</option>
                          <option>Sales and Customer Success</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontFamily: 'var(--font-head)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '6px' }}>Role Requirements</label>
                      <textarea required value={form.jobDescription} onChange={(e) => setForm({...form, jobDescription: e.target.value})} placeholder="Describe the candidate expectations, required skills, and context..." rows={4} style={{ width: '100%', padding: '11px 14px', border: '1px solid #E4E4E0', outline: 'none', fontFamily: 'var(--font-body)', fontSize: '14px', resize: 'none', background: '#FAFAFA' }} />
                    </div>

                    <button type="submit" className="btn btn-red" style={{ width: '100%', justifyContent: 'center', marginTop: '6px' }}>
                      Submit Placement Request
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 960px) {
          .two-col { grid-template-columns: 1fr !important; gap: 60px !important; }
        }
        @media (max-width: 768px) {
          .employer-benefits {
            display: flex !important;
            overflow-x: auto !important;
            scroll-snap-type: x mandatory !important;
            gap: 20px !important;
            padding: 20px 0 !important;
            margin: 0 -20px !important;
            padding-left: 20px !important;
            padding-right: 20px !important;
            border-top: none !important;
            scrollbar-width: none;
          }
          .employer-benefits::-webkit-scrollbar {
            display: none;
          }
          .employer-benefits > div {
            flex: 0 0 280px !important;
            scroll-snap-align: start !important;
            background: #fff;
            border: 1px solid #E8E8E8;
            padding: 28px 20px !important;
            border-bottom: 1px solid #E8E8E8 !important;
          }
          .request-form-card {
            padding: 32px 20px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ForEmployers;
