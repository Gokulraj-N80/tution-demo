import React, { useState } from 'react';
import { Sparkles, Menu, X, Palette } from 'lucide-react';
import Logo from './Logo';
import { tuitionData } from '../data/tuitionData';

export default function Header({ lang, setLang, theme = 'royal-blue', setTheme, onOpenAdmission }) {
  const [activeTab, setActiveTab] = useState('Home');
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home', label: { en: 'Home', ta: 'முகப்பு' } },
    { name: 'About', href: '#about', label: { en: 'About Us', ta: 'அறிமுகம்' } },
    { name: 'Teachers', href: '#teachers', label: { en: 'Teachers', ta: 'ஆசிரியர்கள்' } },
    { name: 'Highlights', href: '#highlights', label: { en: 'Highlights', ta: 'சிறப்புகள்' } },
    { name: 'Courses', href: '#courses', label: { en: 'Courses', ta: 'பாடங்கள்' } },
    { name: 'Branches', href: '#branches', label: { en: 'Branches', ta: 'கிளைகள்' } },
    { name: 'Gallery', href: '#gallery', label: { en: 'Gallery', ta: 'படங்கள்' } },
    { name: 'Contact', href: '#contact', label: { en: 'Contact', ta: 'தொடர்பு' } },
  ];

  const cycleTheme = () => {
    if (!setTheme) return;
    const themes = ['royal-blue', 'emerald-lime'];
    const nextIdx = (themes.indexOf(theme) + 1) % themes.length;
    setTheme(themes[nextIdx]);
  };

  const getThemeShortName = () => {
    if (theme === 'emerald-lime' || theme === 'emerald-coral') {
      return lang === 'ta' ? 'எமரால்டு' : 'Emerald';
    }
    return lang === 'ta' ? 'ராயல் நீலம்' : 'Primary';
  };

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      background: '#ffffff',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
      borderBottom: '1px solid #eef2f6'
    }}>
      {/* Main Navbar with Wide & Responsive Layout */}
      <div className="header-inner-container">
        
        {/* Brand Logo & Name */}
        <a href="#home" style={{ textDecoration: 'none', flexShrink: 0 }}>
          <Logo size={40} showText={true} />
        </a>

        {/* Center: Clean Nav Links */}
        <nav style={{
          display: 'none',
          alignItems: 'center',
          gap: 'clamp(2px, 0.6vw, 10px)',
          flexWrap: 'nowrap'
        }} className="desktop-clean-nav">
          {navLinks.map((link) => {
            const isActive = activeTab === link.name;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveTab(link.name)}
                style={{
                  fontSize: 'clamp(0.76rem, 0.82vw, 0.84rem)',
                  fontWeight: 700,
                  color: isActive ? 'var(--primary-blue)' : '#334155',
                  textDecoration: 'none',
                  padding: '4px clamp(2px, 0.4vw, 5px)',
                  position: 'relative',
                  transition: 'all 0.2s ease',
                  borderBottom: isActive ? '2.5px solid var(--primary-blue)' : '2.5px solid transparent',
                  whiteSpace: 'nowrap',
                  flexShrink: 0
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.target.style.color = 'var(--primary-blue)';
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.target.style.color = '#334155';
                }}
              >
                {link.label[lang] || link.label.ta || link.label.en}
              </a>
            );
          })}
        </nav>

        {/* Right: Theme Switcher & Language Switcher & Apply Now & Mobile Menu */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
          
          {/* Quick Theme Cycle Button (Icon Button - Desktop Only) */}
          <button
            onClick={cycleTheme}
            className="header-theme-cycle-btn"
            style={{
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              width: '32px',
              height: '32px',
              background: '#f1f5f9',
              borderRadius: '50%',
              border: '1px solid #e2e8f0',
              cursor: 'pointer',
              color: 'var(--primary-blue)',
              transition: 'all 0.2s ease',
              flexShrink: 0
            }}
            title={lang === 'ta' ? `வண்ண தீம் (${getThemeShortName()})` : `Switch Theme (${getThemeShortName()})`}
            aria-label="Toggle Theme"
          >
            <Palette size={15} />
          </button>

          {/* Compact Language Toggle (Only EN and தமிழ்) */}
          <div style={{
            display: 'flex',
            background: '#f1f5f9',
            padding: '2px',
            borderRadius: '999px',
            border: '1px solid #e2e8f0',
            flexShrink: 0
          }}>
            <button
              onClick={() => setLang('en')}
              style={{
                padding: '3px 7px',
                borderRadius: '999px',
                fontSize: '0.70rem',
                fontWeight: 800,
                background: lang === 'en' ? 'var(--primary-navy)' : 'transparent',
                color: lang === 'en' ? '#ffffff' : '#64748b',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              EN
            </button>
            <button
              onClick={() => setLang('ta')}
              style={{
                padding: '3px 7px',
                borderRadius: '999px',
                fontSize: '0.70rem',
                fontWeight: 800,
                background: lang === 'ta' ? 'var(--accent-green)' : 'transparent',
                color: lang === 'ta' ? '#ffffff' : '#64748b',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              தமிழ்
            </button>
          </div>

          {/* Apply Now Pill Button (Desktop Only) */}
          <button
            onClick={onOpenAdmission}
            className="desktop-apply-btn"
            style={{
              background: 'var(--primary-navy)',
              color: '#ffffff',
              padding: '6px 12px',
              borderRadius: '999px',
              fontSize: '0.80rem',
              fontWeight: 800,
              display: 'none',
              alignItems: 'center',
              gap: '4px',
              boxShadow: '0 4px 10px var(--theme-glow)',
              border: 'none',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              flexShrink: 0
            }}
          >
            <Sparkles size={12} style={{ color: '#fbbf24' }} />
            <span>{lang === 'ta' ? 'சேர்க்கை' : 'Apply Now'}</span>
          </button>

          {/* Mobile/Tablet Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              background: '#f1f5f9',
              color: '#0f172a',
              border: 'none',
              cursor: 'pointer',
              flexShrink: 0
            }}
            className="mobile-clean-menu-btn"
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

      </div>

      {/* Mobile/Tablet Menu Drawer */}
      {mobileOpen && (
        <div style={{
          background: '#ffffff',
          borderBottom: '2px solid #e2e8f0',
          padding: '16px 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          boxShadow: '0 10px 20px rgba(0,0,0,0.06)'
        }}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                setActiveTab(link.name);
                setMobileOpen(false);
              }}
              style={{
                fontSize: '1rem',
                fontWeight: 700,
                color: activeTab === link.name ? 'var(--primary-blue)' : '#1e293b',
                padding: '8px 0',
                textDecoration: 'none',
                borderBottom: '1px solid #f1f5f9'
              }}
            >
              {link.label[lang] || link.label.ta || link.label.en}
            </a>
          ))}
          
          {/* Quick Theme Change in Drawer */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '10px 0',
            borderBottom: '1px solid #f1f5f9'
          }}>
            <span style={{ fontSize: '0.92rem', fontWeight: 700, color: '#334155' }}>
              {lang === 'ta' ? 'வண்ண தீம்' : 'Color Theme'}
            </span>
            <button
              onClick={cycleTheme}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: '#f1f5f9',
                padding: '6px 12px',
                borderRadius: '999px',
                border: '1px solid #cbd5e1',
                cursor: 'pointer',
                fontSize: '0.80rem',
                fontWeight: 800,
                color: 'var(--primary-navy)'
              }}
            >
              <Palette size={14} style={{ color: 'var(--primary-blue)' }} />
              <span>{getThemeShortName()}</span>
            </button>
          </div>

          <button
            onClick={() => {
              setMobileOpen(false);
              onOpenAdmission();
            }}
            style={{
              background: 'var(--primary-navy)',
              color: '#ffffff',
              padding: '12px',
              borderRadius: '999px',
              fontWeight: 800,
              fontSize: '0.94rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              border: 'none',
              marginTop: '6px',
              boxShadow: '0 4px 12px var(--theme-glow)'
            }}
          >
            <Sparkles size={16} style={{ color: '#fbbf24' }} />
            <span>{lang === 'ta' ? 'புதிய சேர்க்கை முன்பதிவு' : 'Apply for Admission'}</span>
          </button>
        </div>
      )}

      <style>{`
        .header-inner-container {
          max-width: 1380px;
          width: 100%;
          margin: 0 auto;
          padding: 8px 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-sizing: border-box;
          gap: 10px;
        }

        @media (min-width: 1120px) {
          .desktop-clean-nav {
            display: flex !important;
          }
          .desktop-apply-btn {
            display: inline-flex !important;
          }
          .header-theme-cycle-btn {
            display: inline-flex !important;
          }
          .mobile-clean-menu-btn {
            display: none !important;
          }
        }

        @media (max-width: 1119px) {
          .desktop-clean-nav {
            display: none !important;
          }
          .desktop-apply-btn {
            display: none !important;
          }
          .header-theme-cycle-btn {
            display: none !important;
          }
          .mobile-clean-menu-btn {
            display: flex !important;
          }
        }

        @media (max-width: 600px) {
          .header-inner-container {
            padding: 8px 10px !important;
            gap: 6px !important;
          }
        }
      `}</style>
    </header>
  );
}
