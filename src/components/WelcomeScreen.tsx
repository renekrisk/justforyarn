import React, { useEffect, useState } from 'react';

const WelcomeScreen: React.FC = () => {
  const [phase, setPhase] = useState<'visible' | 'sliding' | 'done'>('visible');

  useEffect(() => {
    // Phase 1: Hold for 750ms, then slide up
    const slideTimer = setTimeout(() => {
      setPhase('sliding');
    }, 750);

    // Phase 2: Complete slide exit at 1400ms
    const doneTimer = setTimeout(() => {
      setPhase('done');
    }, 1400);

    return () => {
      clearTimeout(slideTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  if (phase === 'done') return null;

  const isSliding = phase === 'sliding';

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 99999,
        background: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transform: isSliding ? 'translateY(-100%)' : 'translateY(0%)',
        transition: 'transform 0.65s cubic-bezier(0.8, 0, 0.2, 1)',
        pointerEvents: isSliding ? 'none' : 'auto',
        boxShadow: isSliding ? '0 30px 60px rgba(0,0,0,0.12)' : 'none',
      }}
      aria-hidden="true"
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px',
          transform: isSliding ? 'translateY(40px)' : 'translateY(0px)',
          opacity: isSliding ? 0.4 : 1,
          transition: 'transform 0.55s ease, opacity 0.45s ease',
        }}
      >
        <img
          src="/jfy.png"
          alt="Just For Yarns"
          style={{
            height: 'clamp(60px, 12vw, 100px)',
            width: 'auto',
            objectFit: 'contain',
            display: 'block',
          }}
        />

        <span
          style={{
            fontFamily: 'var(--font-sub)',
            fontSize: '14px',
            fontStyle: 'italic',
            letterSpacing: '0.06em',
            color: '#888888',
          }}
        >
          Handcrafted
        </span>
      </div>
    </div>
  );
};

export default WelcomeScreen;
