import React, { useState, useEffect } from 'react';
import { Palette, Check, Sparkles, X, RotateCcw } from 'lucide-react';

export const THEMES = [
  {
    id: 'royal-blue',
    nameEn: 'Royal Navy & Emerald (Original)',
    nameTa: 'ராயல் நீலம் & எமரால்டு (Original)',
    badgeEn: 'Primary Default',
    badgeTa: 'முதன்மை தீம் (100% Default)',
    isPrimary: true,
    primaryColor: '#093f7c',
    secondaryColor: '#0056b3',
    accentColor: '#00875a',
    bgPreview: '#E1F1FC',
    descriptionEn: 'Official Demo Tuition brand palette with deep royal navy, sapphire blue, and emerald green.',
    descriptionTa: 'அசல் பிராண்ட் வண்ணங்கள் (ராயல் நீலம், எமரால்டு பச்சை & கோல்டன் ஹைலைட்ஸ்).'
  },
  {
    id: 'emerald-lime',
    nameEn: 'Midnight Forest & Electric Mint',
    nameTa: 'அடர்ந்த பச்சை & மின்மினி மின்ட்',
    badgeEn: 'Bio Growth & Energy',
    badgeTa: 'பசுமை வளர்ச்சி தீம்',
    isPrimary: false,
    primaryColor: '#022c22',
    secondaryColor: '#059669',
    accentColor: '#10b981',
    bgPreview: '#ecfdf5',
    descriptionEn: 'Lush midnight forest emerald, vivid jade, and electric mint neon tones.',
    descriptionTa: 'அடர்ந்த காட்டின் பசுமை எமரால்டு, ஜேட் மற்றும் புத்துணர்ச்சியூட்டும் எலக்ட்ரிக் மின்ட் வண்ணங்கள்.'
  }
];

export default function ThemeSwitcher({ currentTheme, onThemeChange, lang = 'ta' }) {
  const [isOpen, setIsOpen] = useState(false);

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
    document.body.setAttribute('data-theme', currentTheme);
    try {
      localStorage.setItem('demo_tuition_theme', currentTheme);
    } catch {
      // ignore
    }
  }, [currentTheme]);

  const activeThemeObj = THEMES.find(t => t.id === currentTheme) || THEMES[0];
  const isTa = lang === 'ta';

  return (
    <>
      {/* Floating Theme Button (Bottom Right, Desktop & Mobile Safe) */}
      <button
        onClick={() => setIsOpen(true)}
        className="floating-theme-trigger-btn"
        aria-label="Change Theme"
        title={isTa ? 'வண்ண தீம் மாற்றுக' : 'Switch Color Theme'}
      >
        <div className="theme-trigger-swatch-ring">
          <span 
            className="swatch-half swatch-left" 
            style={{ background: activeThemeObj.primaryColor }}
          />
          <span 
            className="swatch-half swatch-right" 
            style={{ background: activeThemeObj.secondaryColor }}
          />
        </div>
        <Palette size={18} className="theme-palette-icon" />
        <span className="theme-trigger-label">
          {isTa ? 'தீம்' : 'Theme'}
        </span>
      </button>

      {/* Theme Selection Drawer / Modal */}
      {isOpen && (
        <div 
          className="theme-drawer-backdrop"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsOpen(false);
          }}
        >
          <div className="theme-drawer-card">
            
            {/* Drawer Header */}
            <div className="theme-drawer-header">
              <div className="theme-drawer-title-group">
                <div className="theme-header-icon-wrap">
                  <Palette size={20} />
                </div>
                <div>
                  <h3 className="theme-drawer-title">
                    {isTa ? 'வண்ண தீம் தேர்வு செய்க' : 'Choose Color Theme'}
                  </h3>
                  <p className="theme-drawer-sub">
                    {isTa 
                      ? '2 தனித்துவமான பிரீமியம் கல்வி வடிவமைப்பு தீம்கள் (Primary & Forest)' 
                      : '2 Curated Premium Educational Themes (Primary & Forest)'}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="theme-drawer-close-btn"
                aria-label="Close theme picker"
              >
                <X size={18} />
              </button>
            </div>

            {/* Theme Options Grid */}
            <div className="theme-options-list">
              {THEMES.map((theme) => {
                const isSelected = currentTheme === theme.id;
                return (
                  <div
                    key={theme.id}
                    onClick={() => onThemeChange(theme.id)}
                    className={`theme-option-card ${isSelected ? 'is-selected' : ''}`}
                    style={{
                      border: isSelected 
                        ? `2px solid ${theme.primaryColor}` 
                        : '1.5px solid #e2e8f0'
                    }}
                  >
                    {/* Visual Color Palette Preview Strip */}
                    <div 
                      className="theme-swatch-preview-box"
                      style={{ background: theme.bgPreview }}
                    >
                      <div className="swatch-dots-row">
                        <span 
                          className="swatch-dot" 
                          style={{ background: theme.primaryColor }}
                          title="Primary Color"
                        />
                        <span 
                          className="swatch-dot" 
                          style={{ background: theme.secondaryColor }}
                          title="Secondary Color"
                        />
                        <span 
                          className="swatch-dot" 
                          style={{ background: theme.accentColor }}
                          title="Accent Color"
                        />
                      </div>

                      {isSelected && (
                        <div className="active-theme-check-pill" style={{ background: theme.primaryColor }}>
                          <Check size={12} />
                          <span>{isTa ? 'தேர்வு செய்யப்பட்டது' : 'Active'}</span>
                        </div>
                      )}
                    </div>

                    {/* Content Info */}
                    <div className="theme-option-content">
                      <div className="theme-title-row">
                        <h4 className="theme-option-name" style={{ color: isSelected ? theme.primaryColor : '#0f172a' }}>
                          {isTa ? theme.nameTa : theme.nameEn}
                        </h4>

                        <span 
                          className={`theme-badge-pill ${theme.isPrimary ? 'is-primary-badge' : ''}`}
                          style={{
                            background: theme.isPrimary ? '#fef3c7' : '#f1f5f9',
                            color: theme.isPrimary ? '#92400e' : '#475569',
                            border: theme.isPrimary ? '1px solid #fde68a' : '1px solid #e2e8f0'
                          }}
                        >
                          {theme.isPrimary && <Sparkles size={11} />}
                          <span>{isTa ? theme.badgeTa : theme.badgeEn}</span>
                        </span>
                      </div>

                      <p className="theme-option-desc">
                        {isTa ? theme.descriptionTa : theme.descriptionEn}
                      </p>
                    </div>

                  </div>
                );
              })}
            </div>

            {/* Bottom Controls */}
            <div className="theme-drawer-footer">
              <button
                onClick={() => onThemeChange('royal-blue')}
                className="btn-reset-default-theme"
              >
                <RotateCcw size={14} />
                <span>{isTa ? 'முதன்மை தீமுக்கு மாற்று (Reset to Primary)' : 'Reset to Primary Default'}</span>
              </button>

              <button
                onClick={() => setIsOpen(false)}
                className="btn-apply-theme-close"
              >
                {isTa ? 'சரி / முடிந்தது' : 'Done & Apply'}
              </button>
            </div>

          </div>
        </div>
      )}

      <style>{`
        /* Floating Theme Trigger Button */
        .floating-theme-trigger-btn {
          position: fixed;
          bottom: 78px;
          right: 20px;
          z-index: 1500;
          background: #ffffff;
          color: #0f172a;
          border: 1.5px solid #dbeafe;
          border-radius: 999px;
          padding: 8px 16px 8px 10px;
          font-size: 0.84rem;
          font-weight: 800;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          box-shadow: 0 8px 24px rgba(15, 23, 42, 0.15);
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .floating-theme-trigger-btn:hover {
          transform: translateY(-3px) scale(1.03);
          box-shadow: 0 12px 30px rgba(15, 23, 42, 0.2);
          border-color: #93c5fd;
        }

        .theme-trigger-swatch-ring {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          overflow: hidden;
          border: 2px solid #ffffff;
          box-shadow: 0 0 0 1.5px #cbd5e1;
          flex-shrink: 0;
        }

        .swatch-half {
          width: 50%;
          height: 100%;
        }

        .theme-palette-icon {
          color: #64748b;
        }

        .theme-trigger-label {
          color: #1e293b;
          letter-spacing: 0.01em;
        }

        /* Drawer / Modal */
        .theme-drawer-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.65);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          z-index: 2100;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
          animation: themeFadeIn 0.2s ease-out;
        }

        @keyframes themeFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .theme-drawer-card {
          background: #ffffff;
          border-radius: 22px;
          width: 100%;
          max-width: 580px;
          max-height: 90vh;
          box-shadow: 0 25px 60px -15px rgba(0, 0, 0, 0.3);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          animation: themePopIn 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes themePopIn {
          0% { opacity: 0; transform: scale(0.94) translateY(12px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }

        .theme-drawer-header {
          padding: 20px 24px;
          border-bottom: 1px solid #f1f5f9;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #f8fafc;
        }

        .theme-drawer-title-group {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .theme-header-icon-wrap {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: #e0f2fe;
          color: #0284c7;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .theme-drawer-title {
          font-size: 1.15rem;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 2px 0;
          font-family: var(--font-heading);
        }

        .theme-drawer-sub {
          font-size: 0.78rem;
          color: #64748b;
          margin: 0;
        }

        .theme-drawer-close-btn {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          color: #64748b;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .theme-drawer-close-btn:hover {
          background: #f1f5f9;
          color: #0f172a;
        }

        /* Options List */
        .theme-options-list {
          padding: 20px 24px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .theme-option-card {
          border-radius: 16px;
          background: #ffffff;
          cursor: pointer;
          transition: all 0.2s ease;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
          display: flex;
          flex-direction: column;
        }

        .theme-option-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
        }

        .theme-option-card.is-selected {
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
        }

        .theme-swatch-preview-box {
          padding: 10px 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(0, 0, 0, 0.06);
        }

        .swatch-dots-row {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .swatch-dot {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          border: 2px solid #ffffff;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
        }

        .active-theme-check-pill {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          color: #ffffff;
          padding: 3px 10px;
          border-radius: 999px;
          font-size: 0.72rem;
          font-weight: 800;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }

        .theme-option-content {
          padding: 14px 16px;
        }

        .theme-title-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 4px;
        }

        .theme-option-name {
          font-size: 0.96rem;
          font-weight: 800;
          margin: 0;
          font-family: var(--font-heading);
        }

        .theme-badge-pill {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.70rem;
          font-weight: 800;
          padding: 2px 8px;
          border-radius: 999px;
        }

        .theme-badge-pill.is-primary-badge {
          box-shadow: 0 1px 4px rgba(245, 158, 11, 0.2);
        }

        .theme-option-desc {
          font-size: 0.80rem;
          color: #64748b;
          line-height: 1.45;
          margin: 0;
        }

        /* Footer */
        .theme-drawer-footer {
          padding: 16px 24px;
          border-top: 1px solid #f1f5f9;
          background: #f8fafc;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        .btn-reset-default-theme {
          background: transparent;
          color: #64748b;
          border: none;
          font-size: 0.80rem;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          padding: 6px 10px;
          border-radius: 8px;
          transition: all 0.2s ease;
        }

        .btn-reset-default-theme:hover {
          color: #0f172a;
          background: #e2e8f0;
        }

        .btn-apply-theme-close {
          background: #093f7c;
          color: #ffffff;
          padding: 9px 20px;
          border-radius: 999px;
          font-size: 0.86rem;
          font-weight: 800;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 3px 10px rgba(9, 63, 124, 0.25);
        }

        .btn-apply-theme-close:hover {
          background: #0056b3;
          transform: translateY(-1px);
        }

        @media (max-width: 768px) {
          .floating-theme-trigger-btn {
            display: none !important;
          }

          .theme-drawer-card {
            max-height: 94vh;
          }

          .theme-options-list {
            padding: 14px 16px;
          }

          .theme-drawer-footer {
            flex-direction: column-reverse;
            align-items: stretch;
            padding: 12px 16px;
          }

          .btn-apply-theme-close {
            text-align: center;
          }
        }
      `}</style>
    </>
  );
}
