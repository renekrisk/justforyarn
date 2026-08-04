import React from 'react';
import { Icon } from '../components/Icon';
import { Link } from 'react-router-dom';

const ForCandidates: React.FC = () => {
  return (
    <div>

      {/* ── PAGE HEADER ─────────────────────────────────────── */}
      <section style={{ padding: '80px 0 72px', borderBottom: '1px solid #E4E4E0' }}>
        <div className="container">
          <span className="eyebrow">For Youth Participants</span>
          <h1 style={{ maxWidth: '720px', marginBottom: '20px' }}>
            Your Path to the Digital Marketplace
          </h1>
          <p style={{ fontSize: '18px', maxWidth: '600px', lineHeight: 1.75 }}>
            VUKA Youth Connect is not just a training programme. We assess your skills, build your marketplace profile, and connect you to real, paid work opportunities — in Turkana, Garissa, and beyond.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '36px' }}>
            <Link to="/contact" className="btn btn-red">Apply to Join the Programme</Link>
            <Link to="/about" className="btn btn-outline">Learn More About VUKA</Link>
          </div>
        </div>
      </section>

      {/* ── WHO CAN APPLY ─────────────────────────────────── */}
      <section style={{ padding: '80px 0', background: '#F6F6F6', borderBottom: '1px solid #E4E4E0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }} className="two-col">
            <div>
              <span className="eyebrow">Who Can Apply</span>
              <h2 style={{ marginBottom: '24px' }}>You belong here if you are…</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {[
                  'A youth aged 18–35 living in Turkana or Garissa county',
                  'A refugee in Kakuma or Dadaab with a skill to offer',
                  'A host community member seeking stable, paid digital work',
                  'A person with a disability looking for inclusive opportunities',
                  'Someone with a trade, craft, or digital skill — trained or self-taught',
                  'Ready to build a verified marketplace profile and attract clients',
                ].map((item, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'flex-start', gap: '16px',
                    padding: '18px 0', borderBottom: i < 5 ? '1px solid #E4E4E0' : 'none',
                  }}>
                    <span style={{
                      width: '22px', height: '22px', borderRadius: '50%',
                      background: '#D11F5E', color: '#fff',
                      fontWeight: 700, display: 'flex', alignItems: 'center',
                      justifyContent: 'center', flexShrink: 0, marginTop: '2px',
                    }}><Icon name="check" size={11} /></span>
                    <p style={{ fontSize: '15px', color: '#444', lineHeight: 1.7, margin: 0 }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {/* Impact stat card */}
              <div style={{ background: '#111', padding: '48px 40px' }}>
                <div style={{
                  fontFamily: 'var(--font-head)', fontSize: '11px', fontWeight: 600,
                  letterSpacing: '0.16em', textTransform: 'uppercase', color: '#D11F5E', marginBottom: '28px',
                }}>
                  Programme Impact Targets
                </div>
                {[
                  { num: '200+', label: 'Youth to be activated on the VUKA platform' },
                  { num: '≥40%', label: 'Minimum women participants' },
                  { num: '≥40%', label: 'Minimum refugee participants' },
                  { num: '≥5%',  label: 'Persons with disabilities (where feasible)' },
                ].map((stat, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'center', gap: '20px',
                    padding: '16px 0', borderBottom: i < 3 ? '1px solid #222' : 'none',
                  }}>
                    <div style={{
                      fontFamily: 'var(--font-head)', fontSize: '28px', fontWeight: 700,
                      color: '#fff', letterSpacing: '-0.03em', minWidth: '64px',
                    }}>{stat.num}</div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: '#777', lineHeight: 1.5 }}>{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Service categories card */}
              <div style={{ border: '1px solid #E4E4E0', padding: '36px' }}>
                <div style={{
                  fontFamily: 'var(--font-head)', fontSize: '11px', fontWeight: 700,
                  textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--text-muted)', marginBottom: '20px',
                }}>
                  Service Categories on the Platform
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

      {/* ── THE PARTICIPANT JOURNEY ────────────────────────────── */}
      <section style={{ padding: '100px 0', borderBottom: '1px solid #E4E4E0' }}>
        <div className="container">
          <span className="eyebrow">The Journey</span>
          <h2 style={{ marginBottom: '56px', maxWidth: '480px' }}>How the programme works for you</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {[
              {
                n: '01',
                title: 'Application & Skills Assessment',
                body: 'Apply through VUKA or your community partner. Our team reviews your skill profile — artisan, creative, digital, or service-based — and assesses your readiness and fit for available marketplace categories.',
              },
              {
                n: '02',
                title: 'Profile Building & Pre-Activation Support',
                body: 'Onboarded participants receive targeted support to build a strong marketplace profile: profile photography, service description, pricing guidance, portfolio development, and platform orientation.',
              },
              {
                n: '03',
                title: 'Marketplace Activation',
                body: 'Your profile goes live on the VUKA platform. Our team helps you secure your first client engagements — with support on customer communication, platform navigation, and response management.',
              },
              {
                n: '04',
                title: 'Retention, Progression & Mentorship',
                body: 'We stay with you beyond activation. Mentors, focal persons, and platform support help you build repeat business, improve your ratings, and progress to higher-value opportunities over time.',
              },
            ].map((step, i) => (
              <div key={i} style={{
                display: 'grid', gridTemplateColumns: '52px 1fr',
                gap: '24px', padding: '36px 0',
                borderBottom: i < 3 ? '1px solid #E4E4E0' : 'none',
              }}>
                <div style={{
                  fontFamily: 'var(--font-head)', fontSize: '22px', fontWeight: 700,
                  color: '#D11F5E', lineHeight: 1, paddingTop: '4px',
                }}>
                  {step.n}
                </div>
                <div>
                  <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>{step.title}</h3>
                  <p style={{ fontSize: '15px', lineHeight: 1.75, color: '#555' }}>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLATFORM PRACTICES ──────────────────────────────── */}
      <section style={{ padding: '100px 0', background: '#F6F6F6', borderBottom: '1px solid #E4E4E0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }} className="two-col">
            <div>
              <span className="eyebrow">Provider Protections</span>
              <h2 style={{ marginBottom: '20px' }}>Your rights on the VUKA platform</h2>
              <p style={{ fontSize: '16px', color: '#555', lineHeight: 1.8, marginBottom: '36px' }}>
                VUKA operates in line with ILO decent work principles. As a provider on our platform, you have the following protections:
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {[
                  { title: 'Transparent Pricing', desc: 'You see the rates before you accept any job. No surprises.' },
                  { title: 'Fair Commission Structure', desc: 'Platform fees are clearly disclosed and set at levels that keep your earnings viable.' },
                  { title: 'Contestable Ratings', desc: 'Our rating system is fair and transparent — you can respond to client feedback.' },
                  { title: 'Grievance Mechanism', desc: 'Accessible dispute resolution — raise any concern and receive a response within a reasonable timeframe.' },
                  { title: 'No Arbitrary Removal', desc: 'Clear deactivation policies with notice and a right to reconsideration.' },
                  { title: 'Provider Autonomy', desc: 'No exclusivity lock-in. Work on multiple platforms and take your data and reviews with you.' },
                ].map((item, i) => (
                  <div key={i} style={{
                    padding: '20px 0', borderBottom: i < 5 ? '1px solid #E4E4E0' : 'none',
                  }}>
                    <h4 style={{ fontSize: '15px', fontWeight: 600, color: '#000', marginBottom: '6px' }}>{item.title}</h4>
                    <p style={{ fontSize: '13px', color: '#666', lineHeight: 1.7 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: '#111', padding: '48px 40px' }}>
              <div style={{
                fontFamily: 'var(--font-head)', fontSize: '11px', fontWeight: 600,
                letterSpacing: '0.16em', textTransform: 'uppercase', color: '#D11F5E', marginBottom: '28px',
              }}>
                Participant Voice
              </div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '19px', fontStyle: 'italic', color: '#FFFFFF', lineHeight: 1.7, fontWeight: 300, marginBottom: '36px' }}>
                "I had been trained before, but I never had a way to show clients my work. VUKA gave me a profile, helped me set my prices, and within six weeks I had my first paying customer — and then five more."
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{
                  width: '40px', height: '40px', background: '#D11F5E', borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: '12px', color: '#FFFFFF', flexShrink: 0,
                }}>HM</div>
                <div>
                  <div style={{ fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: '14px', color: '#FFFFFF' }}>Hassan M.</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: '#6B7268' }}>Artisan Provider, Turkana — Activated 2025</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ───────────────────────────────────────── */}
      <section style={{ padding: '80px 0', background: '#fff', borderBottom: '1px solid #E4E4E0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ marginBottom: '16px' }}>Ready to join the VUKA platform?</h2>
          <p style={{ maxWidth: '520px', margin: '0 auto 36px', fontSize: '16px', color: '#555' }}>
            Register your interest today. Our team will connect with you through your community partner or directly to begin your assessment.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-red">Apply Now</Link>
            <Link to="/about" className="btn btn-outline">Learn More</Link>
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

export default ForCandidates;
