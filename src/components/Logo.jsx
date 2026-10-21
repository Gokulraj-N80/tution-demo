import React from 'react';

export default function Logo({ size = 52, showText = true, isWhite = false }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }} className="brand-logo-container">
      
      {/* Demo Tuition Centre HD Logo */}
      <img
        src="/logo.svg"
        alt="Demo Tuition Centre Logo"
        width={size}
        height={size}
        style={{
          objectFit: 'contain',
          borderRadius: '50%',
          boxShadow: '0 4px 12px rgba(9, 63, 124, 0.22)',
          flexShrink: 0
        }}
        className="brand-logo-img"
      />

      {/* Brand Text Beside Emblem */}
      {showText && (
        <div style={{ display: 'flex', flexDirection: 'column' }} className="brand-text-col">
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'nowrap' }}>
            <span style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 900,
              letterSpacing: '-0.02em',
              color: isWhite ? '#ffffff' : 'var(--primary-navy)',
              lineHeight: 1.1
            }} className="brand-name-title">
              DEMO TUITION
            </span>
            <span style={{
              fontSize: '0.62rem',
              background: isWhite ? 'rgba(251, 191, 36, 0.2)' : 'var(--accent-gold-light)',
              color: isWhite ? '#FDE047' : 'var(--accent-gold)',
              padding: '1px 6px',
              borderRadius: '4px',
              fontWeight: 800,
              border: isWhite ? '1px solid rgba(251, 191, 36, 0.4)' : '1px solid rgba(245, 158, 11, 0.3)',
              letterSpacing: '0.02em'
            }} className="brand-estd-badge">
              DEMO
            </span>
          </div>
          <div style={{
            fontWeight: 800,
            color: isWhite ? '#34D399' : 'var(--accent-green)',
            letterSpacing: '0.04em',
            marginTop: '2px'
          }} className="brand-subtitle">
            TUITION CENTRE • ACADEMY
          </div>
        </div>
      )}

      <style>{`
        .brand-logo-img {
          width: ${size}px;
          height: ${size}px;
        }
        .brand-name-title {
          font-size: 1.22rem;
        }
        .brand-subtitle {
          font-size: 0.70rem;
        }
        @media (max-width: 1250px) {
          .brand-estd-badge {
            display: none !important;
          }
        }
        @media (max-width: 600px) {
          .brand-logo-img {
            width: 36px !important;
            height: 36px !important;
          }
          .brand-name-title {
            font-size: 1.05rem !important;
          }
          .brand-subtitle {
            font-size: 0.62rem !important;
          }
          .brand-estd-badge {
            display: none !important;
          }
        }
        @media (max-width: 380px) {
          .brand-logo-img {
            width: 32px !important;
            height: 32px !important;
          }
          .brand-name-title {
            font-size: 0.95rem !important;
          }
          .brand-subtitle {
            font-size: 0.58rem !important;
          }
        }
      `}</style>
    </div>
  );
}

