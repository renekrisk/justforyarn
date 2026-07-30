import React, { useEffect, useState } from 'react';

const Preloader: React.FC = () => {
  const [show, setShow] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    // Start fading out after 1.2s
    const fadeTimer = setTimeout(() => {
      setFade(true);
    }, 1200);

    // Completely remove element after 1.6s
    const removeTimer = setTimeout(() => {
      setShow(false);
    }, 1600);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!show) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: '#FFFFFF',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 99999,
      opacity: fade ? 0 : 1,
      transition: 'opacity 0.4s ease-in-out',
      pointerEvents: 'none'
    }}>
      {/* Node connectivity spinner graphics representing connection */}
      <div style={{ position: 'relative', width: '120px', height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{
          position: 'absolute',
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          background: 'var(--crimson)',
          animation: 'pulseCentral 1.5s infinite ease-in-out'
        }} />
        <div style={{
          position: 'absolute',
          width: '14px',
          height: '14px',
          borderRadius: '50%',
          background: 'var(--purple)',
          top: '15px',
          left: '15px',
          animation: 'orbitPurple 2s infinite linear'
        }} />
        <div style={{
          position: 'absolute',
          width: '12px',
          height: '12px',
          borderRadius: '50%',
          background: 'var(--cyan)',
          bottom: '20px',
          right: '15px',
          animation: 'orbitCyan 2s infinite linear'
        }} />
        <div style={{
          position: 'absolute',
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          background: 'var(--orange)',
          bottom: '15px',
          left: '25px',
          animation: 'orbitOrange 2.5s infinite linear'
        }} />
      </div>

      <h3 style={{
        marginTop: '20px',
        fontFamily: 'var(--font-heading)',
        color: 'var(--dark)',
        fontSize: '18px',
        fontWeight: 600,
        letterSpacing: '3px',
        textTransform: 'uppercase'
      }}>
        Ink Coaching
      </h3>
      <span style={{ fontSize: '11px', color: 'var(--crimson)', fontWeight: 700, letterSpacing: '4px', textTransform: 'uppercase', marginTop: '6px' }}>
        VUKA PORTAL
      </span>

      <style>{`
        @keyframes pulseCentral {
          0%, 100% { transform: scale(1); opacity: 0.9; }
          50% { transform: scale(1.2); opacity: 1; }
        }
        @keyframes orbitPurple {
          0% { transform: rotate(0deg) translate(40px) rotate(0deg); }
          100% { transform: rotate(360deg) translate(40px) rotate(-360deg); }
        }
        @keyframes orbitCyan {
          0% { transform: rotate(120deg) translate(35px) rotate(-120deg); }
          100% { transform: rotate(480deg) translate(35px) rotate(-480deg); }
        }
        @keyframes orbitOrange {
          0% { transform: rotate(240deg) translate(45px) rotate(-240deg); }
          100% { transform: rotate(600deg) translate(45px) rotate(-600deg); }
        }
      `}</style>
    </div>
  );
};

export default Preloader;
