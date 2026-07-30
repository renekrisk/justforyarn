import React from 'react';
import { Link } from 'react-router-dom';

const Training: React.FC = () => {
  const programs = [
    {
      index: '01',
      title: 'Corporate Readiness Bootcamp',
      duration: '2 Weeks',
      description: 'Bridges academic graduation with enterprise productivity. Candidates learn how professional organisations operate, from task ownership and reporting lines to communication standards and time management frameworks used by leading companies.',
      outcomes: [
        'Understanding organisational hierarchy and decision flows',
        'Professional email, memo, and report writing standards',
        'Task tracking, ownership, and deadline accountability systems',
      ],
    },
    {
      index: '02',
      title: 'Emotional Intelligence Certification',
      duration: '1 Week',
      description: 'EQ drives up to 85% of long-term career success. This intensive module builds self-awareness, emotional regulation, constructive conflict resolution, and the interpersonal skills that separate high performers from average employees.',
      outcomes: [
        'Self-regulation and stress management under workplace pressure',
        'Constructive feedback reception and peer engagement frameworks',
        'Conflict de-escalation and collaborative problem solving',
      ],
    },
    {
      index: '03',
      title: 'Everything DiSC Psychometric Assessment',
      duration: '1 Day plus Coaching Session',
      description: "A structured behavioral profiling tool that maps each candidate's Dominant, Influential, Steady, or Conscientious work style. The resulting report guides both candidate self-development and employer matching decisions.",
      outcomes: [
        'Comprehensive personalised DiSC style report',
        'One-on-one facilitator coaching session and debrief',
        'Adaptability analysis for alignment with employer culture',
      ],
    },
    {
      index: '04',
      title: 'Sales and Customer Success Excellence',
      duration: '2 Weeks',
      description: 'A high-intensity operational track for candidates targeting sales, account management, or customer success roles. Covers deal progression, CRM systems, client lifecycle management, and retention KPI frameworks used by high-growth companies.',
      outcomes: [
        'Direct pitch and objection-handling roleplay simulations',
        'CRM software usage and pipeline management methodology',
        'Customer retention metrics and escalation resolution protocols',
      ],
    },
  ];

  return (
    <div>
      {/* ── PAGE HEADER ─────────────────────────────────────── */}
      <section style={{ padding: '80px 0 72px', borderBottom: '1px solid #E4E4E0' }}>
        <div className="container">
          <span className="eyebrow">Ink Coaching Academy</span>
          <h1 style={{ maxWidth: '680px', marginBottom: '20px' }}>
            Training Programs
          </h1>
          <p style={{ fontSize: '18px', maxWidth: '540px', lineHeight: 1.75 }}>
            Every Vuka candidate undergoes a structured certification pathway designed around the employer's exact requirements, before a single interview takes place.
          </p>
        </div>
      </section>

      {/* ── PROGRAMS LIST ───────────────────────────────────── */}
      <section style={{ padding: '0 0 100px' }}>
        <div className="container">
          {programs.map((prog) => (
            <div key={prog.index} style={{
              display: 'grid',
              gridTemplateColumns: '72px 1fr 1fr',
              gap: '48px',
              padding: '64px 0',
              borderBottom: '1px solid #E4E4E0',
              alignItems: 'start',
            }} className="prog-row">

              {/* Number */}
              <div style={{
                fontFamily: 'var(--font-head)',
                fontSize: '28px',
                fontWeight: 700,
                color: '#E4E4E0',
                letterSpacing: '-0.03em',
                lineHeight: 1,
                paddingTop: '6px',
              }}>
                {prog.index}
              </div>

              {/* Title + Description */}
              <div>
                <div style={{
                  fontFamily: 'var(--font-head)',
                  fontSize: '11px',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.14em',
                  color: 'var(--text-muted)',
                  marginBottom: '12px',
                }}>
                  {prog.duration}
                </div>
                <h2 style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', marginBottom: '16px' }}>
                  {prog.title}
                </h2>
                <p style={{ fontSize: '15px', lineHeight: 1.8 }}>
                  {prog.description}
                </p>
                <div style={{ marginTop: '28px' }}>
                  <Link to="/contact" className="btn btn-red btn-sm">Enquire About This Program</Link>
                </div>
              </div>

              {/* Outcomes */}
              <div style={{
                background: '#F7F7F5',
                border: '1px solid #E4E4E0',
                padding: '32px',
              }}>
                <div style={{
                  fontFamily: 'var(--font-head)',
                  fontSize: '11px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.14em',
                  color: 'var(--text-muted)',
                  marginBottom: '20px',
                }}>
                  Learning Outcomes
                </div>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {prog.outcomes.map((outcome, j) => (
                    <li key={j} style={{
                      display: 'grid',
                      gridTemplateColumns: '14px 1fr',
                      gap: '12px',
                      fontSize: '14px',
                      color: 'var(--text-body)',
                      lineHeight: 1.6,
                    }}>
                      <span style={{
                        width: '6px', height: '6px',
                        background: '#D11F5E',
                        borderRadius: '50%',
                        marginTop: '8px',
                        flexShrink: 0,
                      }} />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* ── ENTERPRISE CTA ──────────────────────────────────── */}
      <section style={{ background: '#111111', padding: '80px 0', borderTop: '1px solid #2A2A2A' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            gap: '60px',
            alignItems: 'center',
          }} className="cta-row">
            <div>
              <span style={{
                fontFamily: 'var(--font-head)',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: '#6B7268',
                display: 'block',
                marginBottom: '14px',
              }}>
                For Organisations
              </span>
              <h2 style={{ color: '#FFFFFF', marginBottom: '12px' }}>
                Need Custom Staff Training?
              </h2>
              <p style={{ color: '#9A9A9A', maxWidth: '480px' }}>
                Ink Coaching designs bespoke in-house training programs (corporate workshops, leadership retreats, team building, and DiSC facilitation) tailored to your organisation's culture and goals.
              </p>
            </div>
            <div>
              <Link to="/contact" className="btn btn-red">Contact Enterprise Training</Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 960px) {
          .prog-row {
            grid-template-columns: 48px 1fr !important;
            gap: 20px 24px !important;
            padding: 48px 0 !important;
          }
          .prog-row > :last-child {
            grid-column: 2 / span 1;
          }
          .cta-row  { grid-template-columns: 1fr !important; gap: 20px !important; }
        }
        @media (max-width: 640px) {
          .prog-row {
            display: flex !important;
            flex-direction: column !important;
            gap: 16px !important;
            padding: 32px 0 !important;
          }
          .prog-row > :first-child {
            font-size: 20px !important;
            color: var(--red) !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Training;
