import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

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
      { threshold: 0.08 }
    );
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

const About: React.FC = () => {
  useReveal();

  return (
    <div style={{ background: '#fff', padding: '80px 0 120px' }}>
      <div className="container" style={{ maxWidth: '860px' }}>

        {/* Header */}
        <div style={{ marginBottom: '72px' }} data-reveal>
          <span className="eyebrow">About Us</span>
          <h1 style={{ color: '#000', marginBottom: '24px', lineHeight: 1.1 }}>
            VUKA Youth Connect
          </h1>
          <p style={{ fontSize: '19px', lineHeight: 1.8, color: '#333' }}>
            VUKA Youth Connect is INK Coaching's digital marketplace programme — a social impact initiative designed to connect refugee and host community youth in Turkana and Garissa to real, paid digital work opportunities.
          </p>
        </div>

        {/* SANARA Origin Story */}
        <div style={{ background: '#F6F6F6', padding: '48px 44px', marginBottom: '60px', borderLeft: '4px solid #D11F5E' }} data-reveal>
          <div style={{
            fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 600,
            letterSpacing: '0.16em', textTransform: 'uppercase', color: '#D11F5E', marginBottom: '20px',
          }}>
            Our Foundation
          </div>
          <p style={{ color: '#444', fontSize: '16px', lineHeight: 1.85 }}>
            At INK Coaching, we have had the privilege of participating in the implementation of the <strong>SANARA Program</strong> — a major youth empowerment initiative in Kenya that connects the creative and cultural industries with sustainable business enterprise. Inspired by the Swahili words <em>sanaa</em> (arts) and <em>biashara</em> (business), SANARA is backed by the <strong>Mastercard Foundation</strong> and implemented by a consortium including the HEVA Fund. The program places a strong emphasis on inclusion, specifically targeting women, refugees, and persons with disabilities in both urban and rural communities. Through our role within this ecosystem, INK Coaching has contributed to youth training, professional development, and employment readiness support aimed at strengthening pathways to sustainable livelihoods.
          </p>
        </div>

        {/* Core Narrative */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', marginBottom: '72px' }} data-reveal>
          <div>
            <h3 style={{ fontSize: '21px', fontWeight: 600, color: '#000', marginBottom: '14px' }}>
              Building on SANARA: The VUKA Vision
            </h3>
            <p style={{ color: '#555', fontSize: '16px', lineHeight: 1.85 }}>
              Building on the lessons, partnerships, and impact achieved through SANARA, we have developed the <strong>VUKA Youth Connect Program</strong> — a 28-month initiative designed to create a sustainable and inclusive ecosystem that empowers marginalized youth in Kenya to participate competitively in the digital economy. Our goal is to bridge the gap between emerging African tech and service talent and the growing demand for digital and local marketplace services, while promoting inclusive economic growth.
            </p>
          </div>

          <div>
            <h3 style={{ fontSize: '21px', fontWeight: 600, color: '#000', marginBottom: '14px' }}>
              Who We Serve
            </h3>
            <p style={{ color: '#555', fontSize: '16px', lineHeight: 1.85 }}>
              The programme specifically targets youth between the ages of <strong>18–35</strong>, including <strong>Persons with Disabilities (PWDs)</strong> and <strong>refugees</strong> living in marginalized areas across Kenya — with a primary focus on Turkana and Garissa counties, including Kakuma refugee camp and Dadaab. These are communities with significant skills and talent, but limited access to visible, fair, and sustainable work opportunities.
            </p>
          </div>

          <div>
            <h3 style={{ fontSize: '21px', fontWeight: 600, color: '#000', marginBottom: '14px' }}>
              The VUKA Digital Marketplace
            </h3>
            <p style={{ color: '#555', fontSize: '16px', lineHeight: 1.85 }}>
              The VUKA Platform serves as a continuous digital hub — connecting youth to local and digital service opportunities, mentorship, employers, investors, trainers, and peer learning networks. We mediate artisan, home-based, creative, repair, beauty, and digital profile-based services, enabling providers to build verified profiles, attract clients, and earn consistently from their skills.
            </p>
          </div>
        </div>

        {/* 4 Phases */}
        <div style={{ borderTop: '1px solid #E8E8E8', paddingTop: '56px', marginBottom: '72px' }} data-reveal>
          <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#000', marginBottom: '36px' }}>
            The Four-Phase Programme
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {[
              { n: 'Phase 1', title: 'Talent Identification', desc: 'Identifying high-potential youth from underserved and marginalized communities through community outreach, partnerships, and localized engagement initiatives.' },
              { n: 'Phase 2', title: 'Digital Skills Enhancement', desc: 'Intensive training to strengthen digital competencies, remote work preparedness, marketplace readiness, employability skills, and professional communication aligned with international and local market demand.' },
              { n: 'Phase 3', title: 'Employer Matching & Entrepreneurship Incubation', desc: 'Participants receive remote work readiness support and are connected to potential employers and digital work opportunities. Youth interested in entrepreneurship receive incubation support, mentorship, and business development training.' },
              { n: 'Phase 4', title: 'Sustainability Through the VUKA Platform', desc: 'Establishing VUKA as a continuous support and engagement hub — connecting youth to opportunities, mentors, employers, investors, trainers, and peer learning networks for long-term ecosystem sustainability.' },
            ].map((phase, i) => (
              <div key={i} style={{
                display: 'grid', gridTemplateColumns: '120px 1fr',
                gap: '24px', padding: '32px 0',
                borderBottom: i < 3 ? '1px solid #E8E8E8' : 'none',
              }} className="phase-row">
                <div>
                  <span style={{
                    fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 600,
                    color: '#D11F5E', textTransform: 'uppercase', letterSpacing: '0.1em',
                  }}>{phase.n}</span>
                </div>
                <div>
                  <h4 style={{ fontSize: '17px', fontWeight: 600, color: '#000', marginBottom: '8px' }}>{phase.title}</h4>
                  <p style={{ color: '#666', fontSize: '14px', lineHeight: 1.8 }}>{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Details */}
        <div style={{ borderTop: '1px solid #E8E8E8', paddingTop: '48px', marginBottom: '60px' }} data-reveal>
          <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#000', marginBottom: '28px' }}>
            INK Coaching at a Glance
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px' }} className="details-grid">
            <div>
              <span style={{ display: 'block', fontSize: '12px', color: '#888', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>Experience</span>
              <strong style={{ fontSize: '16px', color: '#000', fontWeight: 600 }}>Over 10 years of coaching excellence</strong>
            </div>
            <div>
              <span style={{ display: 'block', fontSize: '12px', color: '#888', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>Programme Duration</span>
              <strong style={{ fontSize: '16px', color: '#000', fontWeight: 600 }}>28-month initiative</strong>
            </div>
            <div>
              <span style={{ display: 'block', fontSize: '12px', color: '#888', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>Primary Geography</span>
              <strong style={{ fontSize: '16px', color: '#000', fontWeight: 600 }}>Turkana & Garissa Counties — Kakuma & Dadaab</strong>
            </div>
            <div>
              <span style={{ display: 'block', fontSize: '12px', color: '#888', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>Key Partnership</span>
              <strong style={{ fontSize: '16px', color: '#000', fontWeight: 600 }}>SANARA / HEVA Fund — Mastercard Foundation</strong>
            </div>
            <div>
              <span style={{ display: 'block', fontSize: '12px', color: '#888', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>Inclusion Commitment</span>
              <strong style={{ fontSize: '16px', color: '#000', fontWeight: 600 }}>≥40% women · ≥40% refugees · ≥5% PWDs</strong>
            </div>
            <div>
              <span style={{ display: 'block', fontSize: '12px', color: '#888', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>Youth Target</span>
              <strong style={{ fontSize: '16px', color: '#000', fontWeight: 600 }}>Up to 200 youth in the first cohort</strong>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div style={{ borderTop: '1px solid #E8E8E8', paddingTop: '40px', textAlign: 'center' }} data-reveal>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-red">Get in Touch</Link>
            <Link to="/candidates" className="btn btn-outline">Join the Programme</Link>
            <Link to="/employers" className="btn btn-dark">Partner With Us</Link>
          </div>
        </div>

      </div>
      <style>{`
        @media (max-width: 600px) {
          .details-grid { grid-template-columns: 1fr !important; }
          .phase-row { grid-template-columns: 1fr !important; gap: 8px !important; }
        }
      `}</style>
    </div>
  );
};

export default About;
