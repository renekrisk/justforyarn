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
      <div className="container" style={{ maxWidth: '800px' }}>
        
        {/* Header */}
        <div style={{ marginBottom: '60px' }} data-reveal>
          <span className="eyebrow">About Us</span>
          <h1 style={{ color: '#000', marginBottom: '24px', lineHeight: 1.1 }}>
            Ink Coaching Vuka
          </h1>
          <p style={{ fontSize: '18px', lineHeight: 1.8, color: '#333' }}>
            Ink Coaching is a professional human capital development firm based in Nairobi, Kenya. Vuka is our dedicated career placement branch, built to connect pre-trained, vetted candidates with leading employers across East Africa.
          </p>
        </div>

        {/* Core Narrative */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', marginBottom: '60px' }} data-reveal>
          <div>
            <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#000', marginBottom: '12px' }}>
              Our Mission
            </h3>
            <p style={{ color: '#555', fontSize: '16px', lineHeight: 1.75 }}>
              We close the gap between academic qualifications and corporate operational standards. Through target training, psychometric profiling, and emotional intelligence coaching, we prepare talent to deliver value from their very first day on the job.
            </p>
          </div>

          <div>
            <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#000', marginBottom: '12px' }}>
              How We Work
            </h3>
            <p style={{ color: '#555', fontSize: '16px', lineHeight: 1.75 }}>
              We do not host an unverified database of CVs. Every candidate placed through Vuka has completed a structured preparatory program tailored to corporate specifications. Employers receive fully certified professionals with verified performance capabilities.
            </p>
          </div>
        </div>

        {/* Quick Details List */}
        <div style={{ borderTop: '1px solid #E8E8E8', paddingTop: '40px', marginBottom: '60px' }} data-reveal>
          <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#000', marginBottom: '24px' }}>
            Ink Coaching at a Glance
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }} className="details-grid">
            <div>
              <span style={{ display: 'block', fontSize: '12px', color: '#888', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Experience</span>
              <strong style={{ fontSize: '16px', color: '#000', fontWeight: 600 }}>Over 10 years of corporate coaching</strong>
            </div>
            <div>
              <span style={{ display: 'block', fontSize: '12px', color: '#888', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Expertise</span>
              <strong style={{ fontSize: '16px', color: '#000', fontWeight: 600 }}>DiSC certification and EQ training</strong>
            </div>
            <div>
              <span style={{ display: 'block', fontSize: '12px', color: '#888', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Success Rate</span>
              <strong style={{ fontSize: '16px', color: '#000', fontWeight: 600 }}>98% candidate retention rate</strong>
            </div>
            <div>
              <span style={{ display: 'block', fontSize: '12px', color: '#888', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Geography</span>
              <strong style={{ fontSize: '16px', color: '#000', fontWeight: 600 }}>Nairobi and across East Africa</strong>
            </div>
          </div>
        </div>

        {/* Simple CTA */}
        <div style={{ borderTop: '1px solid #E8E8E8', paddingTop: '40px', textAlign: 'center' }} data-reveal>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-red">Get in Touch</Link>
            <Link to="/jobs" className="btn btn-outline">View Open Roles</Link>
          </div>
        </div>

      </div>
      <style>{`
        @media (max-width: 600px) {
          .details-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};

export default About;
