import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const footerLinks = [
    { heading: 'Platform', links: [
      { label: 'Home',           path: '/' },
      { label: 'Find Jobs',      path: '/jobs' },
      { label: 'For Candidates', path: '/candidates' },
      { label: 'For Employers',  path: '/employers' },
    ]},
    { heading: 'Training', links: [
      { label: 'Corporate Readiness',     path: '/training' },
      { label: 'DiSC Assessment',         path: '/training' },
      { label: 'Emotional Intelligence',  path: '/training' },
      { label: 'Conflict Management',     path: '/training' },
    ]},
    { heading: 'Contact', links: [
      { label: 'info@inkcoaching.co.ke', path: 'mailto:info@inkcoaching.co.ke' },
      { label: 'inkcoaching.co.ke',      path: 'https://inkcoaching.co.ke' },
      { label: '+254-714-036-800',       path: 'tel:+254714036800' },
      { label: '+254-721-346-176',       path: 'tel:+254721346176' },
    ]},
  ];

  return (
    <footer style={{ background: '#111111', borderTop: '1px solid #2A2A2A' }}>
      {/* Upper footer */}
      <div className="container" style={{ padding: '80px 40px 60px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr repeat(3, 1fr)', gap: '60px' }} className="footer-grid">

          {/* Brand */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src="/logo.png"
                alt="Ink Coaching"
                style={{ height: '52px', width: 'auto', display: 'block', filter: 'brightness(0) invert(1)' }}
              />
            </div>
            <p style={{ color: '#9A9A9A', fontSize: '14px', lineHeight: 1.75, maxWidth: '280px' }}>
              Connecting vetted, pre-trained talent to top employers across East Africa. Powered by Ink Coaching's training excellence.
            </p>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.heading}>
              <h4 style={{
                fontFamily: 'var(--font-head)',
                fontSize: '11px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
                color: '#FFFFFF',
                marginBottom: '20px',
              }}>
                {col.heading}
              </h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {col.links.map(link => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      style={{ fontSize: '14px', color: '#9A9A9A', transition: 'color 0.2s' }}
                      className="f-link"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid #2A2A2A' }}>
        <div className="container" style={{
          padding: '20px 40px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
        }}>
          <p style={{ fontSize: '12px', color: '#555555' }}>
            © {new Date().getFullYear()} Ink Coaching Limited. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '24px' }}>
            <a href="#" style={{ fontSize: '12px', color: '#555555' }} className="f-link">Privacy Policy</a>
            <a href="#" style={{ fontSize: '12px', color: '#555555' }} className="f-link">Terms</a>
          </div>
        </div>
      </div>

      <style>{`
        .footer-grid { grid-template-columns: 1.5fr repeat(3, 1fr); }
        @media (max-width: 960px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 560px) { .footer-grid { grid-template-columns: 1fr !important; } }
        .f-link:hover { color: #D11F5E !important; }
      `}</style>
    </footer>
  );
};

export default Footer;
