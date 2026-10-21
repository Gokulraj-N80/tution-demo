import React from 'react';
import { Users, Home, FileText, UserCheck, GraduationCap, Phone, ArrowRight, Award, ShieldCheck } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function Hero({ lang = 'en', onOpenAdmission }) {
  const pillars = [
    {
      icon: <Users size={16} />,
      title: lang === 'en' ? 'Separate Batches' : 'தனித்தனி வகுப்புகள்',
      sub: lang === 'en' ? 'Boys & Girls Independent Study' : 'ஆண், பெண் தனித்தனி வகுப்பு',
      color: '#0056b3',
      bg: 'rgba(0, 86, 179, 0.08)'
    },
    {
      icon: <Home size={16} />,
      title: lang === 'en' ? 'Doorstep Tutoring' : 'வீட்டு பயிற்சி வசதி',
      sub: lang === 'en' ? '1-on-1 Personal Home Coaching' : 'வீட்டுக்கே வந்து கற்பித்தல்',
      color: '#7c3aed',
      bg: 'rgba(124, 58, 237, 0.08)'
    },
    {
      icon: <FileText size={16} />,
      title: lang === 'en' ? 'Night Study Camps' : 'இரவு நேர சிறப்பு முகாம்',
      sub: lang === 'en' ? 'March Board Exam Intensive' : 'மார்ச் பொதுத்தேர்வு முகாம்',
      color: '#0284c7',
      bg: 'rgba(2, 132, 199, 0.08)'
    },
    {
      icon: <UserCheck size={16} />,
      title: lang === 'en' ? 'PG Specialist Faculty' : 'முதுகலை ஆசிரியர்கள்',
      sub: lang === 'en' ? 'M.Sc., M.Phil. Subject Mentors' : 'பட்டதாரி ஆசிரியர்கள்',
      color: '#ea580c',
      bg: 'rgba(234, 88, 12, 0.08)'
    }
  ];

  return (
    <section
      id="home"
      className="hero-section-custom"
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        borderBottom: '1px solid #e2e8f0'
      }}
    >
      <div className="container hero-inner-container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        
        {/* Main Content Column */}
        <div className="hero-left-content">
          
          {/* 1. Refined Eyebrow Chip */}
          <div className="hero-eyebrow-container">
            <div className="hero-eyebrow-chip">
              <span className="hero-live-indicator" />
              <span className="hero-eyebrow-primary">
                {lang === 'en' ? 'Admissions Open 2025–26' : '2025–26 புதிய சேர்க்கை'}
              </span>
              <span className="hero-eyebrow-dot">•</span>
              <span className="hero-eyebrow-accent">
                {lang === 'en' ? '100% Board Pass Record' : '100% தேர்ச்சி சாதனை'}
              </span>
            </div>
          </div>

          {/* 2. Editorial Display Headline */}
          <h1 className="hero-editorial-h1">
            {lang === 'en' ? (
              <>
                Empowering Students with{' '}
                <span className="hero-gradient-text">Academic Excellence</span>{' '}
                & Top Scores!
              </>
            ) : (
              <>
                மாணவர்களின்{' '}
                <span className="hero-gradient-text">கல்வி மேன்மைக்கும்</span>{' '}
                100% தேர்ச்சிக்கும் முழு வழிகாட்டல்!
              </>
            )}
          </h1>

          {/* 3. Editorial Subtitle */}
          <p className="hero-editorial-subtitle">
            {lang === 'en'
              ? 'Premier coaching for 6th–12th Std (State Board & CBSE), Engineering Mathematics (Anna Univ), Diploma & Degree courses with classroom and personal guidance.'
              : '6 முதல் 12ம் வகுப்பு வரை (State Board & CBSE), அண்ணா பல்கலைக்கழக பொறியியல் கணிதம் (M1, M2), பாலிடெக்னிக் & டிகிரி கணிதத்திற்கான முதன்மை கல்வி பயிற்சி மையம்.'}
          </p>

          {/* 4. Bespoke 4-Pillar Glass Bento Grid */}
          <div className="hero-pillar-bento-grid">
            {pillars.map((p, idx) => (
              <div key={idx} className="hero-bento-item">
                <div className="hero-bento-icon-wrapper" style={{ background: p.bg, color: p.color }}>
                  {p.icon}
                </div>
                <div className="hero-bento-text-box">
                  <div className="hero-bento-title">{p.title}</div>
                  <div className="hero-bento-sub">{p.sub}</div>
                </div>
              </div>
            ))}
          </div>

          {/* 5. Architectural Action Cluster */}
          <div className="hero-action-cluster">
            
            {/* Primary Enroll CTA */}
            <button
              onClick={onOpenAdmission}
              className="hero-cta-primary-btn"
            >
              <GraduationCap size={19} />
              <span>{lang === 'en' ? 'Enroll for Batch 2025–26' : '2025–26 புதிய வகுப்பில் சேரவும்'}</span>
              <ArrowRight size={17} className="hero-arrow-icon" />
            </button>

            {/* Row 2: Direct Call & WhatsApp Contact Duo */}
            <div className="hero-cta-duo">
              
              {/* Call Action */}
              <a href="tel:9876543210" className="hero-action-call">
                <Phone size={15} style={{ flexShrink: 0 }} />
                <span>98765 43210</span>
              </a>

              {/* WhatsApp Action */}
              <a
                href="https://wa.me/919876543210?text=Hello%20Demo%20Tuition%20Centre,%20I%20want%20to%20enquire%20about%20admissions"
                target="_blank"
                rel="noreferrer"
                className="hero-action-wa"
              >
                <WhatsAppIcon size={16} style={{ flexShrink: 0 }} />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Social Trust Guarantee Strip */}
            <div className="hero-trust-guarantee">
              <span className="hero-trust-stars">★★★★★</span>
              <span className="hero-trust-label">
                {lang === 'en'
                  ? '100% Pass Record Since 2013 • Over 5,000+ Students Mentored'
                  : '2013 முதல் 100% தேர்ச்சி சாதனை • 5,000+ மாணவ மாணவியர்'}
              </span>
            </div>

          </div>

        </div>

        {/* 6. Desktop Floating Showcase Card */}
        <div className="hero-desktop-floating-card">
          <div className="hero-proof-badge-icon">
            <Award size={22} color="#0056b3" />
          </div>
          <div>
            <div className="hero-proof-title">100% Pass Record</div>
            <div className="hero-proof-sub">13+ Consecutive Years Since 2013</div>
            <div className="hero-proof-tag-row">
              <span className="hero-proof-pill">State Board & CBSE</span>
              <span className="hero-proof-pill">Engg. Mathematics</span>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        /* Desktop Base View */
        .hero-section-custom {
          background-image: url('/images/home_bg.jpg');
          background-size: cover;
          background-position: center right;
          background-repeat: no-repeat;
          min-height: 610px;
        }
        .hero-inner-container {
          padding: 52px 32px 52px clamp(44px, 5.5vw, 88px);
        }
        .hero-left-content {
          position: relative;
          z-index: 2;
          max-width: 860px;
          width: 62%;
        }
        .hero-left-content::before {
          content: "";
          position: absolute;
          left: -48px;
          top: -36px;
          width: 120%;
          max-width: 840px;
          height: calc(100% + 72px);
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.94) 0%,
            rgba(255, 255, 255, 0.86) 45%,
            rgba(255, 255, 255, 0.45) 75%,
            rgba(255, 255, 255, 0) 100%
          );
          border-radius: 28px;
          z-index: -1;
          pointer-events: none;
        }

        /* 1. Refined Eyebrow Chip */
        .hero-eyebrow-container {
          margin-bottom: 14px;
        }
        .hero-eyebrow-chip {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.95);
          border: 1px solid rgba(0, 86, 179, 0.18);
          padding: 6px 14px;
          border-radius: 999px;
          box-shadow: 0 2px 10px rgba(0, 86, 179, 0.05);
          backdrop-filter: blur(8px);
        }
        .hero-live-indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.22);
          flex-shrink: 0;
        }
        .hero-eyebrow-primary {
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.03em;
          color: #003B73;
          text-transform: uppercase;
        }
        .hero-eyebrow-dot {
          color: #94a3b8;
          font-size: 0.75rem;
        }
        .hero-eyebrow-accent {
          font-size: 0.76rem;
          font-weight: 700;
          color: #c2410c;
        }

        /* 2. Editorial Headline */
        .hero-editorial-h1 {
          font-size: clamp(2.4rem, 3.7vw, 3.3rem);
          font-weight: 900;
          font-family: var(--font-heading);
          color: #0F172A;
          line-height: 1.15;
          letter-spacing: -0.025em;
          margin: 0 0 16px 0;
          text-shadow: 0 1px 3px rgba(255, 255, 255, 0.95);
        }
        .hero-gradient-text {
          background: linear-gradient(135deg, #0056b3 0%, #00875a 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline;
        }

        /* 3. Subtitle */
        .hero-editorial-subtitle {
          font-size: 0.98rem;
          line-height: 1.62;
          color: #334155;
          font-weight: 600;
          max-width: 540px;
          margin: 0 0 22px 0;
          text-shadow: 0 1px 2px rgba(255, 255, 255, 0.95);
        }

        /* 4. Bento Grid (Replacing the 4 colored dots) */
        .hero-pillar-bento-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
          max-width: 540px;
          margin-bottom: 24px;
        }
        .hero-bento-item {
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(15, 23, 42, 0.08);
          border-radius: 12px;
          padding: 10px 12px;
          box-shadow: 0 2px 8px rgba(15, 23, 42, 0.04);
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .hero-bento-item:hover {
          border-color: rgba(0, 86, 179, 0.28);
          box-shadow: 0 4px 14px rgba(0, 86, 179, 0.08);
        }
        .hero-bento-icon-wrapper {
          width: 34px;
          height: 34px;
          border-radius: 9px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .hero-bento-text-box {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .hero-bento-title {
          font-size: 0.82rem;
          font-weight: 800;
          color: #0f172a;
          line-height: 1.25;
        }
        .hero-bento-sub {
          font-size: 0.69rem;
          font-weight: 600;
          color: #64748b;
          line-height: 1.2;
        }

        /* 5. Action Cluster */
        .hero-action-cluster {
          display: flex;
          flex-direction: column;
          gap: 11px;
          max-width: 500px;
        }
        .hero-cta-primary-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: linear-gradient(135deg, #093f7c 0%, #0056b3 100%);
          color: #ffffff;
          padding: 13px 24px;
          border-radius: 12px;
          font-weight: 800;
          font-size: 0.96rem;
          letter-spacing: 0.01em;
          border: 1px solid rgba(255, 255, 255, 0.22);
          box-shadow: 0 4px 14px rgba(9, 63, 124, 0.24);
          cursor: pointer;
          transition: opacity 0.2s ease, box-shadow 0.2s ease;
          width: 100%;
        }
        .hero-cta-primary-btn:hover {
          opacity: 0.95;
          box-shadow: 0 6px 20px rgba(9, 63, 124, 0.32);
        }
        .hero-arrow-icon {
          transition: transform 0.2s ease;
        }
        .hero-cta-primary-btn:hover .hero-arrow-icon {
          transform: translateX(3px);
        }

        .hero-cta-duo {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          width: 100%;
        }
        .hero-action-call {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          background: #ffffff;
          color: #093f7c;
          border: 1.5px solid #cbd5e1;
          padding: 11px 16px;
          border-radius: 12px;
          font-weight: 800;
          font-size: 0.88rem;
          text-decoration: none;
          box-shadow: 0 2px 6px rgba(15, 23, 42, 0.04);
          transition: border-color 0.2s ease, background 0.2s ease;
          white-space: nowrap;
        }
        .hero-action-call:hover {
          border-color: #0056b3;
          background: #f8fafc;
        }
        .hero-action-wa {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          background: #f0fdf4;
          color: #15803d;
          border: 1.5px solid #bbf7d0;
          padding: 11px 16px;
          border-radius: 12px;
          font-weight: 800;
          font-size: 0.88rem;
          text-decoration: none;
          box-shadow: 0 2px 6px rgba(16, 185, 129, 0.06);
          transition: background 0.2s ease, border-color 0.2s ease;
          white-space: nowrap;
        }
        .hero-action-wa:hover {
          background: #dcfce7;
          border-color: #86efac;
        }

        .hero-trust-guarantee {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 3px;
        }
        .hero-trust-stars {
          color: #f59e0b;
          font-size: 0.88rem;
          letter-spacing: 1px;
        }
        .hero-trust-label {
          font-size: 0.75rem;
          font-weight: 700;
          color: #475569;
        }

        /* 6. Desktop Floating Showcase Card */
        .hero-desktop-floating-card {
          display: none;
        }
        @media (min-width: 1140px) {
          .hero-desktop-floating-card {
            display: flex;
            align-items: flex-start;
            gap: 14px;
            position: absolute;
            right: clamp(36px, 5.5vw, 84px);
            bottom: 44px;
            z-index: 3;
            background: rgba(255, 255, 255, 0.94);
            backdrop-filter: blur(14px);
            border: 1px solid rgba(255, 255, 255, 0.9);
            box-shadow: 0 16px 36px -10px rgba(15, 23, 42, 0.16), 0 0 0 1px rgba(15, 23, 42, 0.05);
            border-radius: 16px;
            padding: 14px 18px;
            max-width: 320px;
          }
          .hero-proof-badge-icon {
            width: 42px;
            height: 42px;
            border-radius: 10px;
            background: #eff6ff;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
          }
          .hero-proof-title {
            font-size: 0.92rem;
            font-weight: 800;
            color: #0f172a;
            line-height: 1.25;
          }
          .hero-proof-sub {
            font-size: 0.74rem;
            font-weight: 600;
            color: #64748b;
            margin-bottom: 6px;
          }
          .hero-proof-tag-row {
            display: flex;
            gap: 6px;
            flex-wrap: wrap;
          }
          .hero-proof-pill {
            font-size: 0.65rem;
            font-weight: 700;
            background: #f1f5f9;
            color: #003B73;
            padding: 2px 7px;
            border-radius: 999px;
          }
        }

        /* Mobile View (max-width: 959px) */
        @media (max-width: 959px) {
          .hero-section-custom {
            background-image: url('/images/home_bg_mobile.png');
            background-size: cover;
            background-position: top center;
            background-repeat: no-repeat;
            min-height: auto !important;
            height: auto !important;
            padding: 14px 0 28px 0 !important;
            display: flex !important;
            flex-direction: column !important;
            box-sizing: border-box !important;
          }
          .hero-inner-container {
            padding: 12px 16px 20px 16px !important;
            display: flex !important;
            flex-direction: column !important;
            height: auto !important;
            flex: 1 !important;
          }
          .hero-left-content {
            width: 100% !important;
            max-width: 100% !important;
            display: flex !important;
            flex-direction: column !important;
            height: auto !important;
            flex: 1 !important;
          }
          .hero-left-content::before {
            display: none !important;
          }
          
          .hero-eyebrow-container {
            display: flex;
            justify-content: center;
            margin-bottom: 12px;
          }
          .hero-editorial-h1 {
            font-size: clamp(1.48rem, 6vw, 2.15rem) !important;
            font-weight: 900 !important;
            line-height: 1.22 !important;
            letter-spacing: -0.015em !important;
            margin-bottom: 16px !important;
            text-align: center !important;
            width: 100% !important;
          }
          .hero-editorial-subtitle {
            font-size: 0.85rem !important;
            line-height: 1.48 !important;
            margin-bottom: 16px !important;
            text-align: left !important;
            max-width: 62% !important;
            background: linear-gradient(90deg, rgba(255, 255, 255, 0.94) 0%, rgba(255, 255, 255, 0.72) 75%, rgba(255, 255, 255, 0) 100%) !important;
            padding: 6px 10px !important;
            border-radius: 10px !important;
          }
          .hero-pillar-bento-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 8px !important;
            width: 100% !important;
            max-width: 62% !important;
            margin-bottom: 16px !important;
          }
          .hero-bento-item {
            padding: 8px 10px !important;
            border-radius: 10px !important;
            gap: 7px !important;
          }
          .hero-bento-icon-wrapper {
            width: 28px !important;
            height: 28px !important;
            border-radius: 7px !important;
          }
          .hero-bento-icon-wrapper svg {
            width: 14px !important;
            height: 14px !important;
          }
          .hero-bento-title {
            font-size: 0.74rem !important;
          }
          .hero-bento-sub {
            display: none !important;
          }
          .hero-action-cluster {
            width: 100% !important;
            max-width: 100% !important;
            margin-top: 10px !important;
            gap: 9px !important;
          }
          .hero-cta-primary-btn {
            padding: 12px 16px !important;
            font-size: 0.90rem !important;
            border-radius: 10px !important;
          }
          .hero-action-call, .hero-action-wa {
            padding: 10px 10px !important;
            font-size: 0.84rem !important;
            border-radius: 10px !important;
          }
          .hero-trust-guarantee {
            justify-content: center !important;
          }
        }

        @media (max-width: 480px) {
          .hero-section-custom {
            padding: 10px 0 20px 0 !important;
          }
          .hero-inner-container {
            padding: 10px 12px 16px 12px !important;
          }
          .hero-editorial-h1 {
            font-size: clamp(1.4rem, 6.2vw, 1.85rem) !important;
          }
          .hero-editorial-subtitle {
            max-width: 64% !important;
            font-size: 0.80rem !important;
          }
          .hero-pillar-bento-grid {
            max-width: 64% !important;
            gap: 6px !important;
          }
          .hero-action-call, .hero-action-wa {
            font-size: 0.80rem !important;
            padding: 9px 6px !important;
          }
        }
      `}</style>
    </section>
  );
}
