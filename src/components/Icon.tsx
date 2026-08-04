import React from 'react';

const ICONS: Record<string, React.ReactNode> = {
  wrench: (
    <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.5 5.5a2.5 2.5 0 0 0-3.536 0l-1 1-2-2 1-1a2.5 2.5 0 0 0 0-3.536 2.5 2.5 0 0 0-3.536 0l-1 1-2-2 1-1a2.5 2.5 0 0 0 0-3.536 2.5 2.5 0 0 0-3.536 0l-.5.5a2.5 2.5 0 0 0 0 3.536l1 1-2 2-1-1a2.5 2.5 0 0 0-3.536 0 2.5 2.5 0 0 0 0 3.536l.5.5-2 2 1 1a2.5 2.5 0 0 0 0 3.536 2.5 2.5 0 0 0 3.536 0l1-1 2 2-1 1a2.5 2.5 0 0 0 0 3.536 2.5 2.5 0 0 0 3.536 0l.5-.5"/>
      <circle cx="9" cy="11" r="1" fill="currentColor" stroke="none"/>
    </svg>
  ),
  house: (
    <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 2L2 9v10h5v-6h6v6h5V9l-8-7z"/>
      <path d="M5 17v-6h10v6H5z"/>
    </svg>
  ),
  palette: (
    <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a10 10 0 0 0-8 16.5V17a1 1 0 0 1 1-1h6a3 3 0 0 0 3-3V5a1 1 0 0 0-1-1h-2z"/>
      <circle cx="7" cy="7" r="1" fill="currentColor" stroke="none"/>
      <circle cx="10" cy="10" r="1" fill="currentColor" stroke="none"/>
      <circle cx="13" cy="13" r="1" fill="currentColor" stroke="none"/>
    </svg>
  ),
  sparkle: (
    <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 0l2.39 4.08L17 5.5l-4.08 2.39L10 12l-2.39-4.08L3 5.5l4.08-2.39L10 0z"/>
      <path d="M10 14l2.39 4.08L17 15.5l-4.08 2.39L10 22l-2.39-4.08L3 15.5l4.08 2.39L10 14z"/>
    </svg>
  ),
  gear: (
    <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="10" cy="10" r="3"/>
      <path d="M10 1v2m0 14v2M1 10h2m14 0h2M3.5 3.5l1.4 1.4m10.2 10.2l1.4 1.4M3.5 16.5l1.4-1.4m10.2-10.2l1.4-1.4"/>
    </svg>
  ),
  laptop: (
    <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5z"/>
      <path d="M6 17h8M8 13h4"/>
    </svg>
  ),
  building: (
    <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3h4v7H3V3zm7 0h4v7h-4V3zM3 14h4v3H3v-3zm7 0h4v3h-4v-3z"/>
      <path d="M1 10h2M17 10h2"/>
    </svg>
  ),
  globe: (
    <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="10" cy="10" r="8"/>
      <path d="M2 10h16M10 2a15.5 15.5 0 0 1 4 8 15.5 15.5 0 0 1-4 8 15.5 15.5 0 0 1-4-8A15.5 15.5 0 0 1 10 2z"/>
    </svg>
  ),
  handshake: (
    <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 10a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/>
      <path d="M14 10a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/>
      <path d="M8 10v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2"/>
    </svg>
  ),
  school: (
    <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 2L2 7v13h16V7l-8-5z"/>
      <path d="M6 7l4-3 4 3"/>
      <path d="M10 7v13"/>
      <path d="M4 10h12"/>
    </svg>
  ),
  check: (
    <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 10l4 4 8-8"/>
    </svg>
  ),
  close: (
    <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 5l10 10M15 5l-10 10"/>
    </svg>
  ),
  menu: (
    <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 5h16M2 10h16M2 15h16"/>
    </svg>
  ),
};

interface IconProps {
  name: string;
  size?: number;
  color?: string;
}

export const Icon: React.FC<IconProps> = ({ name, size = 24, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
    {ICONS[name]}
  </svg>
);
