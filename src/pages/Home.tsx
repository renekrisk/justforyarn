import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const CYCLING_WORDS = ['Opportunity.', 'Excellence.', 'Purpose.', 'Growth.'];

const MARQUEE_ITEMS = [
  'Pre-Trained Talent', 'DiSC Certified', 'EQ Frameworks',
  'East Africa', '98% Retention', '10+ Years', 'Corporate Ready',
  '31+ Facilitators', 'Psychometric Vetting', 'Placement Guaranteed',
  'Pre-Trained Talent', 'DiSC Certified', 'EQ Frameworks',
  'East Africa', '98% Retention', '10+ Years', 'Corporate Ready',
  '31+ Facilitators', 'Psychometric Vetting', 'Placement Guaranteed',
];

const STATS = [
  { num: '10+',  label: 'Years of Coaching Excellence' },
  { num: '31+',  label: 'Professional Facilitators' },
  { num: '98%',  label: 'Candidate Retention Rate' },
  { num: '100%', label: 'Pre-Trained Before Placement' },
];

const STEPS = [
  {
    n: '01',
    title: 'Source and Screen',
    body: 'Candidates submit profiles through Vuka. Ink Coaching screens them on core professional potential, attitude, and sector alignment, not just qualifications.',
  },
  {
    n: '02',
    title: 'Coach and Certify',
    body: 'Screened candidates enter structured training: corporate alignment, emotional intelligence, DiSC psychometrics, and role-specific bootcamps built around employer specifications.',
  },
  {
    n: '03',
    title: 'Place and Deliver',
    body: 'Certified graduates are matched and presented to employers. A placement commission is charged only once the candidate is successfully positioned and retained.',
  },
];

const JOBS = [
  { title: 'Management Trainee',  company: 'Human Asset Consultants Ltd', loc: 'Nairobi',  type: 'Full-time', track: 'Corporate Leadership' },
  { title: 'Financial Analyst',    company: 'Equity Bank Limited',         loc: 'Mombasa',  type: 'Full-time', track: 'DiSC Assessment' },
  { title: 'Customer Success Rep', company: 'Boma Project Agency',         loc: 'Nanyuki',  type: 'Full-time', track: 'EQ & Conflict Mgmt' },
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('revealed');
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function CyclingWord({ words }: { words: string[] }) {
  const [idx, setIdx] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const t = setInterval(() => {
      setExiting(true);
      setTimeout(() => {
        setIdx(i => (i + 1) % words.length);
        setExiting(false);
      }, 420);
    }, 2800);
    return () => clearInterval(t);
  }, [words.length]);

  return (
    <span style={{ display: 'inline-block', position: 'relative', overflow: 'visible' }}>
      <span
        key={idx}
        className={exiting ? 'hero-word-exit' : 'hero-word-enter'}
        style={{ display: 'inline-block', fontStyle: 'italic', color: '#000' }}
      >
        {words[idx]}
      </span>
    </span>
  );
}

function AnimatedStat({ num, label }: { num: string; label: string }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ padding: '56px 24px', textAlign: 'center' }}>
      <div style={{
        fontFamily: 'var(--font-head)',
        fontSize: 'clamp(48px, 5.5vw, 76px)',
        fontWeight: 700,
        color: '#fff',
        lineHeight: 1,
        letterSpacing: '-0.04em',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: 'opacity 0.7s ease, transform 0.7s ease',
      }}>
        {num}
      </div>
      <div style={{
        fontFamily: 'var(--font-body)',
        fontSize: '12px',
        color: '#777',
        marginTop: '14px',
        fontWeight: 400,
        letterSpacing: '0.03em',
        lineHeight: 1.5,
        maxWidth: '130px',
        margin: '14px auto 0',
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.7s ease 0.2s',
      }}>
        {label}
      </div>
    </div>
  );
}

const Home: React.FC = () => {
  useReveal();

  return (
    <div>

      {/* HERO */}
      <section className="hero-section" style={{ background: '#fff', paddingTop: '80px', overflow: 'hidden' }}>
        <div className="container">

          <div className="hero-eyebrow" style={{
            display: 'flex', alignItems: 'center', gap: '12px',
            marginBottom: '52px',
            animation: 'heroFadeUp 0.9s cubic-bezier(0.25,0.46,0.45,0.94) both',
          }}>
            <span style={{
              fontFamily: 'var(--font-body)', fontSize: '11px',
              fontWeight: 500, textTransform: 'uppercase',
              letterSpacing: '0.22em', color: '#999',
            }}>Ink Coaching</span>
            <span style={{ width: '28px', height: '1px', background: '#ccc', display: 'inline-block' }} />
            <span style={{
              fontFamily: 'var(--font-body)', fontSize: '11px',
              fontWeight: 500, textTransform: 'uppercase',
              letterSpacing: '0.22em', color: '#999',
            }}>Vuka Careers Portal</span>
          </div>

          <div className="hero-text" style={{ maxWidth: '920px', marginBottom: '52px' }}>
            <h1 style={{ fontWeight: 700, lineHeight: 1.0, letterSpacing: '-0.04em', color: '#000' }}>
              <span style={{ display: 'block', animation: 'heroFadeUp 1s 0.15s cubic-bezier(0.25,0.46,0.45,0.94) both' }}>
                Where Trained
              </span>
              <span style={{ display: 'block', animation: 'heroFadeUp 1s 0.3s cubic-bezier(0.25,0.46,0.45,0.94) both' }}>
                Talent Meets
              </span>
              <span style={{ display: 'block', animation: 'heroFadeUp 1s 0.45s cubic-bezier(0.25,0.46,0.45,0.94) both' }}>
                <CyclingWord words={CYCLING_WORDS} />
              </span>
            </h1>
          </div>

          <div className="hero-bottom" style={{
            display: 'flex', gap: '72px', alignItems: 'flex-start',
            flexWrap: 'wrap', marginBottom: '80px',
            animation: 'heroFadeUp 1s 0.6s cubic-bezier(0.25,0.46,0.45,0.94) both',
          }}>
            <p className="hero-paragraph" style={{
              maxWidth: '440px', fontSize: '17px', lineHeight: 1.85,
              color: '#555', fontWeight: 400,
            }}>
              Vuka is Ink Coaching's careers branch. We train candidates to corporate
              standards, vet them through psychometric and EQ frameworks, and deliver
              fully operational professionals to employers across East Africa.
            </p>
            <div className="hero-btns" style={{ display: 'flex', gap: '14px', alignItems: 'center', flexWrap: 'wrap', paddingTop: '4px' }}>
              <Link to="/jobs" className="btn btn-red">Find a Placement</Link>
              <Link to="/employers" className="btn btn-outline">Hire Vetted Talent</Link>
            </div>
          </div>

          {/* Mobile Hero Stats - Apple style integration */}
          <div className="mobile-hero-stats" style={{
            display: 'none',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '24px 16px',
            marginTop: '16px',
            width: '100%',
            borderTop: '1px solid #eee',
            paddingTop: '32px',
            animation: 'heroFadeUp 1s 0.75s cubic-bezier(0.25,0.46,0.45,0.94) both',
          }}>
            {STATS.map((s, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-head)', fontSize: '32px', fontWeight: 700, color: '#000', lineHeight: 1, letterSpacing: '-0.02em' }}>{s.num}</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '10px', color: '#888', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '8px', lineHeight: 1.4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Marquee */}
        <div className="hero-marquee" style={{ background: '#000', padding: '20px 0', overflow: 'hidden' }}>
          <div className="marquee-outer">
            <div className="marquee-track">
              {MARQUEE_ITEMS.map((item, i) => (
                <React.Fragment key={i}>
                  <span style={{
                    fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 400,
                    color: '#777', textTransform: 'uppercase', letterSpacing: '0.2em',
                    whiteSpace: 'nowrap', paddingRight: '36px',
                  }}>{item}</span>
                  <span style={{ color: '#333', paddingRight: '36px', fontSize: '9px' }}>◆</span>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-section" style={{ background: '#111' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }} className="stats-grid">
            {STATS.map((s, i) => <AnimatedStat key={i} num={s.num} label={s.label} />)}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="process-section" style={{ padding: '140px 0', background: '#fff' }}>
        <div className="container">
          <div style={{ marginBottom: '80px' }} data-reveal>
            <span className="eyebrow">The Process</span>
            <h2 style={{ color: '#000', lineHeight: 1.05, maxWidth: '480px' }}>
              Three steps.<br />
              <em style={{ fontStyle: 'italic', fontWeight: 400 }}>One outcome.</em>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '56px' }} className="steps-grid">
            {STEPS.map((step, i) => (
              <div key={i} data-reveal data-delay={String(i + 1)}>
                <div style={{
                  fontFamily: 'var(--font-head)', fontSize: '88px', fontWeight: 700,
                  color: '#F0F0F0', letterSpacing: '-0.05em', lineHeight: 1,
                  marginBottom: '-16px', userSelect: 'none',
                }}>
                  {step.n}
                </div>
                <h3 style={{ fontSize: '22px', color: '#000', marginBottom: '14px', fontWeight: 600 }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '15px', color: '#666', lineHeight: 1.8 }}>{step.body}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '64px' }} data-reveal data-delay="4">
            <Link to="/candidates" className="btn btn-red btn-sm">See Full Process</Link>
          </div>
        </div>
      </section>

      {/* OPEN PLACEMENTS */}
      <section style={{ padding: '140px 0', background: '#F6F6F6' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '56px', flexWrap: 'wrap', gap: '20px' }} data-reveal>
            <div>
              <span className="eyebrow">Opportunities</span>
              <h2 style={{ color: '#000', lineHeight: 1.05 }}>Current Vetted Roles</h2>
            </div>
            <Link to="/jobs" className="btn btn-outline btn-sm">View All Roles</Link>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {JOBS.map((job, i) => (
              <div key={i} data-reveal data-delay={String(i + 1)}
                style={{
                  background: '#fff', padding: '32px 40px',
                  display: 'grid', gridTemplateColumns: '1fr auto',
                  alignItems: 'center', gap: '32px',
                  transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                }}
                className="job-card"
              >
                <div>
                  <h3 style={{ fontSize: '20px', color: '#000', marginBottom: '8px', fontWeight: 600 }}>
                    {job.title}
                  </h3>
                  <div style={{
                    fontFamily: 'var(--font-body)', fontSize: '13px', color: '#888',
                    display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '12px', alignItems: 'center',
                  }}>
                    <span>{job.company}</span>
                    <span style={{ color: '#ccc' }}>·</span>
                    <span>{job.loc}</span>
                    <span style={{ color: '#ccc' }}>·</span>
                    <span>{job.type}</span>
                  </div>
                  <span className="badge badge-grey">{job.track}</span>
                </div>
                <Link to="/jobs" className="btn btn-red btn-sm">Apply</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section style={{ background: '#111', padding: '140px 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div data-reveal>
            <span style={{
              fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 500,
              letterSpacing: '0.2em', textTransform: 'uppercase', color: '#444',
              display: 'block', marginBottom: '44px',
            }}>
              Candidate Story
            </span>
            <blockquote style={{
              fontFamily: 'var(--font-head)',
              fontSize: 'clamp(22px, 3vw, 36px)',
              fontWeight: 400, fontStyle: 'italic',
              color: '#fff', lineHeight: 1.55, marginBottom: '52px',
              letterSpacing: '-0.01em',
            }}>
              "Vuka didn't just send me to an interview. The DiSC assessment revealed how
              I work best, and the corporate bootcamp made me operational before my first
              day. My manager said I was the most prepared hire they'd had in years."
            </blockquote>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{
                width: '46px', height: '46px', borderRadius: '50%',
                background: '#fff', display: 'flex', alignItems: 'center',
                justifyContent: 'center', fontFamily: 'var(--font-body)',
                fontWeight: 700, fontSize: '13px', color: '#000', flexShrink: 0,
              }}>MK</div>
              <div>
                <div style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '14px', color: '#fff' }}>
                  Martin K.
                </div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: '#555' }}>
                  Operations Specialist, Placed 2024
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORK WITH US */}
      <section style={{ background: '#fff', padding: '140px 0', borderTop: '1px solid #E8E8E8' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div data-reveal>
            <span className="eyebrow">Work With Us</span>
            <h2 style={{ color: '#000', maxWidth: '640px', margin: '0 auto 28px', lineHeight: 1.1 }}>
              Ready to start your journey?
            </h2>
            <p style={{ maxWidth: '520px', margin: '0 auto 40px', fontSize: '16px', color: '#666' }}>
              Whether you are a candidate seeking placement or an employer looking to hire vetted talent, we are ready to assist.
            </p>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/jobs" className="btn btn-red">Find Placements</Link>
              <Link to="/employers" className="btn btn-outline">Post a Role</Link>
              <Link to="/contact" className="btn btn-dark">Get In Touch</Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .job-card:hover {
          box-shadow: 0 16px 48px rgba(0,0,0,0.08);
          transform: translateY(-3px);
        }
        @media (max-width: 960px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .steps-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 40px !important; }
        }
        @media (max-width: 768px) {
          .hero-section {
            min-height: calc(100vh - 108px) !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: center !important;
            padding-top: 0 !important;
          }
          .hero-marquee { display: none !important; }
          .hero-eyebrow { margin-bottom: 24px !important; justify-content: center; flex-wrap: wrap; gap: 8px !important; }
          .hero-eyebrow span:nth-child(2) { display: none; }
          .hero-text { margin-bottom: 28px !important; text-align: center; }
          
          .hero-bottom { 
            gap: 32px !important; 
            margin-bottom: 0 !important; 
            flex-direction: column; 
            align-items: center;
          }
          
          .mobile-hero-stats {
            display: grid !important;
          }
          
          .hero-paragraph { 
            max-width: 100% !important; 
            font-size: 16px !important; 
            line-height: 1.65 !important; 
            text-align: center;
          }
          
          .hero-btns { 
            width: 100% !important; 
            flex-direction: column; 
            gap: 12px !important; 
            padding-top: 0 !important;
          }
          .hero-btns .btn { 
            width: 100% !important; 
            margin: 0 !important; 
            padding: 18px 24px !important; 
            font-size: 14px !important; 
          }
          
          .stats-section { display: none !important; }
          
          .process-section { padding-top: 40px !important; padding-bottom: 80px !important; }
          .steps-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
          .steps-grid > div {
            background: #fbfbf9;
            border: 1px solid #eee;
            padding: 40px 32px !important;
            border-radius: 20px !important;
            box-shadow: 0 8px 32px rgba(0,0,0,0.03) !important;
          }
        }
        @media (max-width: 560px) {
          .job-card { 
            grid-template-columns: 1fr !important; 
            gap: 20px !important;
            padding: 24px 20px !important;
            border-radius: 16px !important;
            box-shadow: 0 4px 24px rgba(0,0,0,0.04) !important;
            border: 1px solid #eaeaea;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
