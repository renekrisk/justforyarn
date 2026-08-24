import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const WHATSAPP_LINK = 'https://wa.me/254757900294?text=' + encodeURIComponent("Hi! I'd like to initiate a bespoke commission with Just For Yarns.");

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Shop', path: '/shop' },
    { name: 'Inspo', path: '/inspo' },
    { name: 'About', path: '/about' },
    { name: 'Bespoke', path: '/contact' },
  ];

  return (
    <header className={`lv-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="lv-header-inner">

        {/* Left nav */}
        <nav className="lv-nav-left">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`lv-nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Center — pure text wordmark, no logo */}
        <Link to="/" className="lv-wordmark" aria-label="Just For Yarns">
          Just For Yarns
        </Link>

        {/* Right nav */}
        <div className="lv-nav-right">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="lv-nav-link"
          >
            Order
          </a>

          {/* Mobile toggle */}
          <button
            type="button"
            className="lv-mobile-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="lv-mobile-dropdown">
          <Link to="/" className="lv-mobile-link" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} className="lv-mobile-link" onClick={() => setMobileMenuOpen(false)}>
              {link.name}
            </Link>
          ))}
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="lv-mobile-cta">
            Start a Bespoke Commission
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;



