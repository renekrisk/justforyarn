import React from 'react';

interface QuestionMarkIconProps {
  label?: string;
  size?: number;
}

const QuestionMarkIcon: React.FC<QuestionMarkIconProps> = ({ label = 'Visual unavailable', size = 48 }) => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#F5F5F5',
        gap: '12px',
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="#AAAAAA"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
      {label && (
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '11px',
            fontWeight: 400,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#AAAAAA',
            textAlign: 'center',
            padding: '0 16px',
          }}
        >
          {label}
        </span>
      )}
    </div>
  );
};

export default QuestionMarkIcon;
