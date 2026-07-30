import React from 'react';
import { Link } from 'react-router-dom';

const ForCandidates: React.FC = () => {
  return (
    <div>

      {/* ── PAGE HEADER ─────────────────────────────────────── */}
      <section style={{ padding: '80px 0 72px', borderBottom: '1px solid #E4E4E0' }}>
        <div className="container">
          <span className="eyebrow">For Job Seekers</span>
          <h1 style={{ maxWidth: '680px', marginBottom: '20px' }}>
            What We Do for Candidates
          </h1>
          <p style={{ fontSize: '18px', maxWidth: '560px', lineHeight: 1.75 }}>
            Vuka is not a CV database. We actively work with candidates by training, assessing, and positioning you to succeed before you ever walk into an employer's office.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '36px' }}>
            <Link to="/jobs" className="btn btn-red">Browse Open Roles</Link>
            <Link to="/contact" className="btn btn-outline">Register as a Candidate</Link>
          </div>
        </div>
      </section>

      {/* ── THE CANDIDATE JOURNEY ────────────────────────────── */}
      <section style={{ padding: '100px 0', borderBottom: '1px solid #E4E4E0' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '100px',
            alignItems: 'start',
          }} className="two-col">

            {/* Left: steps */}
            <div>
              <span className="eyebrow">The Journey</span>
              <h2 style={{ marginBottom: '48px' }}>How we prepare you</h2>

              <div className="journey-steps mobile-carousel" style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {[
                  {
                    n: '01',
                    title: 'Application and Profile Review',
                    body: 'Browse open placement roles and submit your application. Our facilitators review your profile against the role requirements and your core professional potential, not just your CV.',
                  },
                  {
                    n: '02',
                    title: 'Accelerator Academy Training',
                    body: 'Screened candidates are enrolled in a structured Ink Coaching training track. Modules are selected based on the role and employer specifications, covering corporate alignment, EQ, DiSC, and technical readiness.',
                  },
                  {
                    n: '03',
                    title: 'Certification and Matching',
                    body: 'Certified graduates are matched and introduced to employers through Vuka. You enter the interview process already fully prepared, with documented training outcomes the employer can verify.',
                  },
                  {
                    n: '04',
                    title: 'Placement and Ongoing Support',
                    body: 'Once placed, Ink Coaching remains available for post-placement coaching, ensuring you sustain performance and navigate your first 90 days with confidence.',
                  },
                ].map((step, i) => (
                  <div key={i} style={{
                    display: 'grid',
                    gridTemplateColumns: '52px 1fr',
                    gap: '20px',
                    padding: '32px 0',
                    borderBottom: i < 3 ? '1px solid #E4E4E0' : 'none',
                  }}>
                    <div style={{
                      fontFamily: 'var(--font-head)',
                      fontSize: '22px',
                      fontWeight: 700,
                      color: '#D11F5E',
                      lineHeight: 1,
                      paddingTop: '4px',
                    }}>
                      {step.n}
                    </div>
                    <div>
                      <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>{step.title}</h3>
                      <p style={{ fontSize: '14px', lineHeight: 1.75 }}>{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Pull quote + training tracks */}
            <div className="right-sidebar" style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>

              {/* Pull quote block */}
              <div className="pull-quote" style={{ background: '#111111', padding: '48px 40px' }}>
                <div style={{
                  fontFamily: 'var(--font-head)',
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: '#D11F5E',
                  marginBottom: '24px',
                }}>
                  Graduate Feedback
                </div>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '18px',
                  fontStyle: 'italic',
                  color: '#FFFFFF',
                  lineHeight: 1.7,
                  fontWeight: 300,
                  marginBottom: '32px',
                }}>
                  "I had applied to over 40 positions with no response. Within three weeks of Vuka's corporate alignment bootcamp, I had two offers. The training gave me language and frameworks I had never encountered before."
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{
                    width: '40px', height: '40px',
                    background: '#D11F5E',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: '12px', color: '#FFFFFF',
                    flexShrink: 0,
                  }}>AA</div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: '14px', color: '#FFFFFF' }}>Audrey A.</div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: '#6B7268' }}>Placed Candidate, Nairobi, 2024</div>
                  </div>
                </div>
              </div>

              {/* Training tracks summary */}
              <div className="tracks-card" style={{ border: '1px solid #E4E4E0', padding: '36px' }}>
                <div style={{
                  fontFamily: 'var(--font-head)',
                  fontSize: '11px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.14em',
                  color: 'var(--text-muted)',
                  marginBottom: '24px',
                }}>
                  What You Learn
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {[
                    { title: 'Corporate Alignment', desc: 'Professional operating norms, communication standards, and reporting structures.' },
                    { title: 'Emotional Intelligence', desc: 'Self-regulation, feedback management, and constructive workplace relationships.' },
                    { title: 'DiSC Psychometric Profiling', desc: 'Understand your work style strengths and how to adapt to different professional environments.' },
                    { title: 'Role-Specific Bootcamp', desc: 'Targeted training aligned to the hiring employer\'s exact operational requirements.' },
                  ].map((track, j) => (
                    <div key={j} style={{ paddingBottom: '20px', borderBottom: j < 3 ? '1px solid #F0F0EE' : 'none' }}>
                      <h4 style={{ fontSize: '15px', marginBottom: '5px' }}>{track.title}</h4>
                      <p style={{ fontSize: '13px', lineHeight: 1.6 }}>{track.desc}</p>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: '28px' }}>
                  <Link to="/training" className="btn btn-red btn-sm">View Full Program Catalog</Link>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ── CTA STRIP ───────────────────────────────────────── */}
      <section style={{ padding: '80px 0', background: '#F7F7F5', borderBottom: '1px solid #E4E4E0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ marginBottom: '16px' }}>Ready to start your journey?</h2>
          <p style={{ maxWidth: '480px', margin: '0 auto 36px', fontSize: '16px' }}>
            Browse current placement roles or register your profile and let our facilitators find the right match for your background.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/jobs" className="btn btn-red">Browse Placement Roles</Link>
            <Link to="/contact" className="btn btn-outline">Register Your Profile</Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 960px) {
          .two-col { grid-template-columns: 1fr !important; gap: 60px !important; }
        }
        @media (max-width: 768px) {
          .journey-steps > div {
            flex: 0 0 280px !important;
            background: #fff;
            border: 1px solid #E8E8E8;
            padding: 28px 20px !important;
            border-radius: 8px;
            box-shadow: 0 4px 16px rgba(0,0,0,0.03);
          }
          .pull-quote {
            padding: 32px 24px !important;
          }
          .tracks-card {
            padding: 24px 20px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ForCandidates;
