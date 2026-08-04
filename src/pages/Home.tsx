import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../components/Icon';

const CYCLING_WORDS = ['Opportunity.', 'Inclusion.', 'Purpose.', 'Impact.'];

const MARQUEE_ITEMS = [
  'Turkana & Garissa', 'Refugee Youth', 'Digital Marketplace', 'PROSPECTS Kenya',
  'ILO Backed', 'Host Communities', '4-Phase Programme', 'Decent Work',
  '40% Women Target', 'Kakuma & Dadaab', 'INK Coaching', 'SANARA Alumni',
  'Turkana & Garissa', 'Refugee Youth', 'Digital Marketplace', 'PROSPECTS Kenya',
  'ILO Backed', 'Host Communities', '4-Phase Programme', 'Decent Work',
  '40% Women Target', 'Kakuma & Dadaab', 'INK Coaching', 'SANARA Alumni',
];

const STATS = [
  { num: '200+', label: 'Youth Targeted for Digital Marketplace' },
  { num: '28',   label: 'Month Programme Duration' },
  { num: '40%',  label: 'Minimum Women Participation' },
  { num: '10+',  label: 'Years of INK Coaching Excellence' },
];

const STEPS = [
  {
    n: '01',
    title: 'Talent Identification',
    body: 'We identify high-potential youth from underserved and marginalized communities in Turkana and Garissa — including refugees and host community members — through community outreach, partnerships, and localized engagement.',
  },
  {
    n: '02',
    title: 'Digital Skills Enhancement',
    body: 'Selected participants undergo structured training to strengthen digital competencies, remote work preparedness, marketplace readiness, and professional communication aligned with real market demand.',
  },
  {
    n: '03',
    title: 'Employer Matching & Market Activation',
    body: 'Participants are connected to verified work opportunities on the VUKA digital marketplace — including artisan, home-based, creative, repair, beauty, and digital profile-based services.',
  },
  {
    n: '04',
    title: 'Sustainability Through the VUKA Platform',
    body: 'The VUKA platform serves as a continuous hub linking youth to opportunities, mentorship, employers, investors, trainers, and peer learning networks — for long-term, sustainable economic participation.',
  },
];

const SERVICE_CATEGORIES = [
  { title: 'Artisan & Technical Services',    desc: 'Skilled tradespeople, technicians, and craft workers connecting with clients through verified digital profiles.', icon: <Icon name="wrench" size={32} /> },
  { title: 'Home & Community Services',        desc: 'Cleaning, caregiving, delivery, and other home-based service providers serving local demand.', icon: <Icon name="house" size={32} /> },
  { title: 'Creative & Freelance',             desc: 'Graphic design, content creation, photography, and digital media work accessible to talent in remote counties.', icon: <Icon name="palette" size={32} /> },
  { title: 'Beauty & Wellness',                desc: 'Hair, beauty, wellness, and personal care providers with visibility to clients through the VUKA platform.', icon: <Icon name="sparkle" size={32} /> },
  { title: 'Repair & Maintenance',             desc: 'Electronics, appliance, and infrastructure repair workers reaching customers through digital intermediation.', icon: <Icon name="gear" size={32} /> },
  { title: 'Digital Profile Services',         desc: 'Remote-enabled digital workers offering data entry, admin support, and platform-based business functions.', icon: <Icon name="laptop" size={32} /> },
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
        maxWidth: '140px',
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
            }}>INK Coaching</span>
            <span style={{ width: '28px', height: '1px', background: '#ccc', display: 'inline-block' }} />
            <span style={{
              fontFamily: 'var(--font-body)', fontSize: '11px',
              fontWeight: 500, textTransform: 'uppercase',
              letterSpacing: '0.22em', color: '#999',
            }}>VUKA Youth Connect</span>
          </div>

          <div className="hero-text" style={{ maxWidth: '920px', marginBottom: '52px' }}>
            <h1 style={{ fontWeight: 700, lineHeight: 1.0, letterSpacing: '-0.04em', color: '#000' }}>
              <span style={{ display: 'block', animation: 'heroFadeUp 1s 0.15s cubic-bezier(0.25,0.46,0.45,0.94) both' }}>
                Where Youth
              </span>
              <span style={{ display: 'block', animation: 'heroFadeUp 1s 0.3s cubic-bezier(0.25,0.46,0.45,0.94) both' }}>
                Meet Digital
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
              maxWidth: '480px', fontSize: '17px', lineHeight: 1.85,
              color: '#555', fontWeight: 400,
            }}>
              VUKA Youth Connect is INK Coaching's digital marketplace programme empowering refugee and host community youth in Turkana and Garissa to access real, paid work opportunities through the VUKA platform.
            </p>
            <div className="hero-btns" style={{ display: 'flex', gap: '14px', alignItems: 'center', flexWrap: 'wrap', paddingTop: '4px' }}>
              <Link to="/candidates" className="btn btn-red">Join the Programme</Link>
              <Link to="/employers" className="btn btn-outline">Partner With Us</Link>
            </div>
          </div>

          {/* Mobile Hero Stats */}
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

      {/* HOW IT WORKS — 4 PHASES */}
      <section className="process-section" style={{ padding: '140px 0', background: '#fff' }}>
        <div className="container">
          <div style={{ marginBottom: '80px' }} data-reveal>
            <span className="eyebrow">The Programme</span>
            <h2 style={{ color: '#000', lineHeight: 1.05, maxWidth: '520px' }}>
              Four phases.<br />
              <em style={{ fontStyle: 'italic', fontWeight: 400 }}>One sustainable future.</em>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px' }} className="steps-grid">
            {STEPS.map((step, i) => (
              <div key={i} data-reveal data-delay={String(i + 1)}>
                <div style={{
                  fontFamily: 'var(--font-head)', fontSize: '88px', fontWeight: 700,
                  color: '#F0F0F0', letterSpacing: '-0.05em', lineHeight: 1,
                  marginBottom: '-16px', userSelect: 'none',
                }}>
                  {step.n}
                </div>
                <h3 style={{ fontSize: '18px', color: '#000', marginBottom: '14px', fontWeight: 600 }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '14px', color: '#666', lineHeight: 1.8 }}>{step.body}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '64px' }} data-reveal data-delay="5">
            <Link to="/candidates" className="btn btn-red btn-sm">Apply to the Programme</Link>
          </div>
        </div>
      </section>

      {/* SERVICE CATEGORIES */}
      <section style={{ padding: '140px 0', background: '#F6F6F6' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '56px', flexWrap: 'wrap', gap: '20px' }} data-reveal>
            <div>
              <span className="eyebrow">The Marketplace</span>
              <h2 style={{ color: '#000', lineHeight: 1.05 }}>Digital Service Categories</h2>
            </div>
            <Link to="/candidates" className="btn btn-outline btn-sm">Register as a Provider</Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }} className="services-grid">
            {SERVICE_CATEGORIES.map((cat, i) => (
              <div key={i} data-reveal data-delay={String(i + 1)}
                style={{
                  background: '#fff', padding: '36px 32px',
                  transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                }}
                className="service-card"
              >
                <div style={{ marginBottom: '16px' }}>{cat.icon}</div>
                <h3 style={{ fontSize: '17px', color: '#000', marginBottom: '10px', fontWeight: 600 }}>
                  {cat.title}
                </h3>
                <p style={{ fontSize: '14px', color: '#666', lineHeight: 1.75 }}>{cat.desc}</p>
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
              Participant Story
            </span>
            <blockquote style={{
              fontFamily: 'var(--font-head)',
              fontSize: 'clamp(22px, 3vw, 36px)',
              fontWeight: 400, fontStyle: 'italic',
              color: '#fff', lineHeight: 1.55, marginBottom: '52px',
              letterSpacing: '-0.01em',
            }}>
              "The VUKA platform gave me visibility I never had. Within two months of being onboarded, I had my first three paid clients and I was finally earning consistently from my tailoring skills — right here in Kakuma."
            </blockquote>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{
                width: '46px', height: '46px', borderRadius: '50%',
                background: '#D11F5E', display: 'flex', alignItems: 'center',
                justifyContent: 'center', fontFamily: 'var(--font-body)',
                fontWeight: 700, fontSize: '13px', color: '#fff', flexShrink: 0,
              }}>FA</div>
              <div>
                <div style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '14px', color: '#fff' }}>
                  Fatuma A.
                </div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: '#555' }}>
                  Artisan Provider, Kakuma — Activated 2025
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INCLUSION TARGETS */}
      <section style={{ background: '#fff', padding: '120px 0', borderTop: '1px solid #E8E8E8' }}>
        <div className="container">
          <div style={{ marginBottom: '64px', textAlign: 'center' }} data-reveal>
            <span className="eyebrow">Our Commitment</span>
            <h2 style={{ color: '#000', maxWidth: '560px', margin: '0 auto', lineHeight: 1.1 }}>
              Inclusion by design,<br />
              <em style={{ fontStyle: 'italic', fontWeight: 400 }}>not by afterthought.</em>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px', maxWidth: '900px', margin: '0 auto' }} className="inclusion-grid">
            {[
              { pct: '≥40%', label: 'Women', desc: 'At minimum 40% of all activated participants are women, embedded at every stage.' },
              { pct: '≥40%', label: 'Refugees', desc: 'At minimum 40% of all activated participants are refugees from Kakuma and Dadaab.' },
              { pct: '≥5%',  label: 'Persons with Disabilities', desc: 'Active inclusion of PWDs where feasible, with reasonable accommodation built in.' },
            ].map((item, i) => (
              <div key={i} data-reveal data-delay={String(i + 1)} style={{
                background: i === 1 ? '#111' : '#F6F6F6',
                padding: '56px 40px',
                textAlign: 'center',
              }}>
                <div style={{
                  fontFamily: 'var(--font-head)',
                  fontSize: 'clamp(40px, 5vw, 64px)',
                  fontWeight: 700,
                  color: i === 1 ? '#fff' : '#D11F5E',
                  letterSpacing: '-0.04em',
                  lineHeight: 1,
                  marginBottom: '8px',
                }}>{item.pct}</div>
                <div style={{
                  fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '13px',
                  textTransform: 'uppercase', letterSpacing: '0.1em',
                  color: i === 1 ? '#ccc' : '#000', marginBottom: '16px',
                }}>{item.label}</div>
                <p style={{ fontSize: '13px', color: i === 1 ? '#777' : '#666', lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK WITH US */}
      <section style={{ background: '#F6F6F6', padding: '140px 0', borderTop: '1px solid #E8E8E8' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div data-reveal>
            <span className="eyebrow">Get Involved</span>
            <h2 style={{ color: '#000', maxWidth: '640px', margin: '0 auto 28px', lineHeight: 1.1 }}>
              Ready to join or partner with<br />VUKA Youth Connect?
            </h2>
            <p style={{ maxWidth: '520px', margin: '0 auto 40px', fontSize: '16px', color: '#666' }}>
              Whether you are a youth ready to access digital work, an employer seeking skilled talent, or an organisation wanting to collaborate — we are ready to connect.
            </p>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/candidates" className="btn btn-red">Join the Programme</Link>
              <Link to="/employers" className="btn btn-outline">Partner With Us</Link>
              <Link to="/contact" className="btn btn-dark">Get In Touch</Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .service-card:hover {
          box-shadow: 0 16px 48px rgba(0,0,0,0.08);
          transform: translateY(-3px);
        }
        @media (max-width: 1100px) {
          .steps-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 40px !important; }
        }
        @media (max-width: 960px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .inclusion-grid { grid-template-columns: 1fr !important; max-width: 480px !important; }
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
          .services-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 560px) {
          .service-card { 
            border-radius: 16px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
