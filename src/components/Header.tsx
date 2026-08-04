import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Icon } from './Icon';

/* ─── Brand constants ──────────────────────────────────────── */
const PHONES = [
  { display: '+254 714 036 800', tel: '+254714036800' },
  { display: '+254 721 346 176', tel: '+254721346176' },
];

/* Ink Coaching navbar palette — clean white matching inkcoaching.co.ke */
const NAV_BG      = '#ffffff';
const NAV_TEXT    = '#1a1a1a';
const NAV_ACTIVE  = '#D11F5E';
const NAV_HOVER   = '#D11F5E';
const NAV_BORDER  = '#eeeeee'; // thin bottom divider

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen]                     = useState(false);
  const [programsOpen, setProgramsOpen]             = useState(false);
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);
  const programsRef = useRef<HTMLDivElement>(null);
  const location    = useLocation();

  /* Close nav states on route change */
  useEffect(() => {
    setMenuOpen(false);
    setProgramsOpen(false);
    setMobileProgramsOpen(false);
  }, [location]);

  /* Close dropdown on outside click */
  useEffect(() => {
    const handle = (e: MouseEvent) => {
      if (programsRef.current && !programsRef.current.contains(e.target as Node)) {
        setProgramsOpen(false);
      }
    };
    document.addEventListener('mousedown', handle);
    return () => document.removeEventListener('mousedown', handle);
  }, []);

  /* Nav links — matches inkcoaching.co.ke structure */
  const navLinks = [
    { label: 'Home',           path: '/' },
    { label: 'About',          path: '/about' },
    { label: 'For Youth',      path: '/candidates' },
    { label: 'For Partners',   path: '/employers' },
    { label: 'Contact Us',     path: '/contact' },
  ];

  const programsLinks = [
    { label: 'Digital Skills Training',  path: '/training' },
    { label: 'INK Coaching Courses',     path: '/courses'  },
  ];

  const isActive          = (path: string) => location.pathname === path;
  const isProgramsActive  = programsLinks.some(l => l.path === location.pathname);

  /* Shared nav link style */
  const navItemStyle = (active: boolean): React.CSSProperties => ({
    fontFamily:  'var(--font-body)',
    fontWeight:  active ? 600 : 400,
    fontSize:    '15px',
    color:       active ? NAV_ACTIVE : NAV_TEXT,
    letterSpacing: '0',
    lineHeight:  1,
    transition:  'color 0.18s ease',
    whiteSpace:  'nowrap',
    textDecoration: 'none',
  });

  return (
    <>
      {/* ══════════════════════════════════════════════════════
          HEADER — static (scrolls with page, like inkcoaching.co.ke)
          Clean white background, single unified row
          ══════════════════════════════════════════════════════ */}
      <header style={{
        position:   'static',   /* Scrolls away — matching inkcoaching.co.ke behaviour */
        width:      '100%',
        background: NAV_BG,
        borderBottom: `1px solid ${NAV_BORDER}`,
        zIndex:     100,
      }}>
        <div
          className="container"
          style={{
            display:        'flex',
            alignItems:     'center',
            justifyContent: 'space-between',
            height:         '80px',
            gap:            '16px',
          }}
        >

          {/* ── Logo ────────────────────────────────────── */}
          <Link
            to="/"
            style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}
            aria-label="VUKA Youth Connect — Home"
          >
            <img
              src="/vukalogo.png"
              alt="Ink Coaching"
              width={216}
              height={58}
              style={{
                height:    '58px',   /* 8% larger than before */
                width:     'auto',
                display:   'block',
                imageRendering: 'crisp-edges',
              }}
            />
          </Link>

          {/* ── Desktop navigation (centre) ─────────────── */}
          <nav
            className="desk-nav"
            aria-label="Main navigation"
            style={{
              display:        'none',
              alignItems:     'center',
              gap:            '36px',    /* generous spacing, matches reference */
              flex:           1,
              justifyContent: 'center',
            }}
          >
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className="ink-nav-lnk"
                style={navItemStyle(isActive(link.path))}
              >
                {link.label}
              </Link>
            ))}

            {/* Our Programs dropdown */}
            <div
              ref={programsRef}
              style={{ position: 'relative' }}
              onMouseEnter={() => setProgramsOpen(true)}
              onMouseLeave={() => setProgramsOpen(false)}
            >
              <button
                className="ink-nav-lnk"
                aria-haspopup="true"
                aria-expanded={programsOpen}
                style={{
                  ...navItemStyle(isProgramsActive || programsOpen),
                  background:  'none',
                  border:      'none',
                  cursor:      'pointer',
                  display:     'flex',
                  alignItems:  'center',
                  gap:         '5px',
                  padding:     0,
                }}
                onClick={() => setProgramsOpen(o => !o)}
              >
                Our Programs
                <svg
                  width="10" height="6" viewBox="0 0 10 6" fill="none"
                  style={{
                    transition: 'transform 0.2s ease',
                    transform: programsOpen ? 'rotate(180deg)' : 'none',
                    flexShrink: 0,
                  }}
                >
                  <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {/* Dropdown panel */}
              {programsOpen && (
                <div
                  role="menu"
                  style={{
                    position:  'absolute',
                    top:       '100%',
                    left:      '50%',
                    transform: 'translateX(-50%)',
                    paddingTop: '10px',
                    zIndex:    500,
                  }}
                >
                  <div style={{
                    background:   '#ffffff',
                    border:       '1px solid #e4e4e4',
                    borderRadius: '8px',
                    boxShadow:    '0 12px 32px rgba(0,0,0,0.15)',
                    minWidth:     '210px',
                    overflow:     'hidden',
                    animation:    'ddFade 0.15s ease',
                  }}>
                    {programsLinks.map(link => (
                      <Link
                        key={link.path}
                        to={link.path}
                        role="menuitem"
                        style={{
                          display:       'block',
                          padding:       '13px 20px',
                          fontFamily:    'var(--font-body)',
                          fontSize:      '14px',
                          fontWeight:    link.path === location.pathname ? 600 : 400,
                          color:         link.path === location.pathname ? '#D11F5E' : '#1a1a1a',
                          borderBottom:  '1px solid #f4f4f4',
                          transition:    'background 0.15s ease, color 0.15s ease',
                          textDecoration: 'none',
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.background = '#fafafa';
                          e.currentTarget.style.color = '#D11F5E';
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.background = '';
                          e.currentTarget.style.color = link.path === location.pathname ? '#D11F5E' : '#1a1a1a';
                        }}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* ── Phone numbers (right side) ──────────────── */}
          <div
            className="desk-phones"
            style={{
              display:    'none',
              alignItems: 'center',
              gap:        '28px',
              flexShrink: 0,
            }}
          >
            {PHONES.map(p => (
              <a
                key={p.tel}
                href={`tel:${p.tel}`}
                style={{
                  fontFamily:             'var(--font-body)',
                  fontSize:               '14px',
                  fontWeight:             700,
                  color:                  NAV_TEXT,
                  letterSpacing:          '0',
                  textDecoration:         'underline',
                  textUnderlineOffset:    '3px',
                  textDecorationColor:    'rgba(0,0,0,0.35)',
                  transition:             'color 0.18s ease, text-decoration-color 0.18s ease',
                  whiteSpace:             'nowrap',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = NAV_HOVER;
                  e.currentTarget.style.textDecorationColor = NAV_HOVER;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = NAV_TEXT;
                  e.currentTarget.style.textDecorationColor = 'rgba(0,0,0,0.35)';
                }}
              >
                {p.display}
              </a>
            ))}
          </div>

          {/* ── Mobile hamburger ────────────────────────── */}
          <button
            className="mob-toggle"
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            style={{
              display:    'block',
              color:      '#1a1a1a',
              padding:    '4px',
              lineHeight: 1,
            }}
          >
            {menuOpen ? <Icon name="close" size={22} /> : <Icon name="menu" size={22} />}
          </button>
        </div>

        {/* ── Mobile drawer ─────────────────────────────── */}
        {menuOpen && (
          <div
            role="dialog"
            aria-label="Mobile navigation"
            style={{
              position:       'fixed',
              top:            '80px',
              left:           0,
              width:          '100%',
              height:         'calc(100vh - 80px)',
              background:     '#ffffff',
              padding:        '32px var(--pad-x)',
              display:        'flex',
              flexDirection:  'column',
              justifyContent: 'space-between',
              zIndex:         999,
              overflowY:      'auto',
              animation:      'mobileIn 0.3s ease both',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {navLinks.map((link, idx) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    fontFamily:    'var(--font-body)',
                    fontWeight:    isActive(link.path) ? 600 : 400,
                    fontSize:      '24px',
                    color:         isActive(link.path) ? '#D11F5E' : NAV_TEXT,
                    padding:       '14px 0',
                    borderBottom:  `1px solid ${NAV_BORDER}`,
                    textDecoration: 'none',
                    animation:     `mobileLink 0.3s ease ${idx * 0.04}s both`,
                  }}
                >
                  {link.label}
                </Link>
              ))}

              {/* Our Programs accordion */}
              <div style={{ borderBottom: `1px solid ${NAV_BORDER}` }}>
                <button
                  onClick={() => setMobileProgramsOpen(o => !o)}
                  aria-expanded={mobileProgramsOpen}
                  style={{
                    fontFamily:     'var(--font-body)',
                    fontWeight:     isProgramsActive ? 600 : 400,
                    fontSize:       '24px',
                    color:          isProgramsActive ? '#D11F5E' : NAV_TEXT,
                    background:     'none',
                    border:         'none',
                    cursor:         'pointer',
                    display:        'flex',
                    alignItems:     'center',
                    justifyContent: 'space-between',
                    width:          '100%',
                    padding:        '14px 0',
                    textAlign:      'left',
                  }}
                >
                  Our Programs
                  <svg
                    width="12" height="8" viewBox="0 0 12 8" fill="none"
                    style={{
                      transition: 'transform 0.2s ease',
                      transform: mobileProgramsOpen ? 'rotate(180deg)' : 'none',
                    }}
                  >
                    <path d="M1 1l5 5 5-5" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                {mobileProgramsOpen && (
                  <div style={{
                    paddingLeft: '16px',
                    paddingBottom: '12px',
                    borderLeft: '2px solid #D11F5E',
                    marginLeft: '4px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                  }}>
                    {programsLinks.map(link => (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={() => setMenuOpen(false)}
                        style={{
                          fontFamily:     'var(--font-body)',
                          fontSize:       '16px',
                          fontWeight:     link.path === location.pathname ? 600 : 400,
                          color:          link.path === location.pathname ? '#D11F5E' : NAV_TEXT,
                          padding:        '8px 0',
                          textDecoration: 'none',
                        }}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Mobile bottom — phones */}
            <div style={{
              paddingTop:   '24px',
              borderTop:    `1px solid ${NAV_BORDER}`,
              display:      'flex',
              flexDirection: 'column',
              gap:          '12px',
            }}>
              <div style={{
                fontFamily: 'var(--font-body)',
                fontSize:   '11px',
                fontWeight: 500,
                color:      '#777777',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
              }}>
                Contact
              </div>
              {PHONES.map(p => (
                <a
                  key={p.tel}
                  href={`tel:${p.tel}`}
                  style={{
                    fontFamily:          'var(--font-body)',
                    fontSize:            '15px',
                    fontWeight:          600,
                    color:               NAV_TEXT,
                    textDecoration:      'underline',
                    textUnderlineOffset: '3px',
                    textDecorationColor: 'rgba(0,0,0,0.3)',
                  }}
                >
                  {p.display}
                </a>
              ))}
            </div>
          </div>
        )}

        {/* ── Scoped keyframes ────────────────────────────── */}
        <style>{`
          @keyframes ddFade {
            from { opacity: 0; transform: translateY(-6px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @keyframes mobileIn {
            from { opacity: 0; }
            to   { opacity: 1; }
          }
          @keyframes mobileLink {
            from { opacity: 0; transform: translateY(8px); }
            to   { opacity: 1; transform: translateY(0); }
          }

          /* Hover state for nav links */
          .ink-nav-lnk:hover {
            color: ${NAV_HOVER} !important;
          }

          /* Desktop breakpoint */
          @media (min-width: 960px) {
            .desk-nav    { display: flex !important; }
            .desk-phones { display: flex !important; }
            .mob-toggle  { display: none  !important; }
          }

          /* Mobile: logo stays centred, hamburger absolute-right */
          @media (max-width: 959px) {
            .container { position: relative; }
            .mob-toggle {
              position:  absolute;
              right:     var(--pad-x);
              top:       50%;
              transform: translateY(-50%);
            }
          }
        `}</style>
      </header>
    </>
  );
};

export default Header;
