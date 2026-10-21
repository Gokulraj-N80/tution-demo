import React from 'react';
import { Users, Home, FileText, UserCheck, GraduationCap, Phone, ArrowRight } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function Hero({ lang, onOpenAdmission }) {
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
        
        {/* Main Content Wrapper */}
        <div className="hero-left-content">
          
          {/* Top Headline Box (Full Width & Perfectly Centered on Mobile with Top Gap) */}
          <div className="hero-headline-center-box">
            
            {/* Tagline with Artistic Golden Highlight Underline */}
            <div style={{ marginBottom: '10px' }}>
              <span
                className={lang === 'ta' ? 'hero-tagline-ta' : 'font-script hero-tagline-en'}
                style={{
                  fontWeight: 800,
                  color: '#c2410c',
                  display: 'inline-block',
                  position: 'relative',
                  lineHeight: 1.35,
                  isolation: 'isolate',
                  padding: '2px 4px',
                  textShadow: '0 1px 2px rgba(255, 255, 255, 0.95)'
                }}
              >
                <span style={{ position: 'relative', zIndex: 2 }}>
                  {lang === 'ta' ? 'உங்கள் எதிர்காலத்தை பிரகாசமாக்குங்கள்' : 'Build Your Future With'}
                </span>
                
                {/* Smooth Marker Brush Stroke Underline */}
                <svg
                  className="hero-tagline-brush"
                  viewBox="0 0 320 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  style={{
                    position: 'absolute',
                    bottom: '-4px',
                    left: 0,
                    width: '100%',
                    height: '11px',
                    zIndex: 1,
                    pointerEvents: 'none'
                  }}
                >
                  {/* Soft Background Highlighter Layer */}
                  <path
                    d="M2 13C60 4 160 3 318 8C265 14.5 140 16.5 2 13Z"
                    fill="#FEF08A"
                    opacity="0.92"
                  />
                  {/* Vibrant Core Brush Stroke */}
                  <path
                    d="M8 9.5C80 4.5 195 4 312 8.5"
                    stroke="#FACC15"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </div>

            {/* Main Bold Headline with Kinetic Text Overflow Line Masking */}
            <h1 className="hero-main-h1" style={{
              fontWeight: 900,
              fontFamily: 'var(--font-heading)',
              color: 'var(--primary-navy)',
              lineHeight: 1.15,
              letterSpacing: '-0.025em',
              margin: '0 0 20px 0',
              textShadow: '0 2px 4px rgba(255, 255, 255, 0.9), 0 0 12px rgba(255, 255, 255, 0.85)'
            }}>
              {lang === 'ta' ? (
                <>
                  <span className="text-line-mask">
                    <span className="text-line-inner hero-h1-line hero-h1-line-1" style={{ animationDelay: '0.12s', color: 'var(--primary-navy)' }}>
                      மாணவர்களின்
                    </span>
                  </span>
                  <span className="text-line-mask">
                    <span className="text-line-inner hero-h1-line hero-h1-line-2" style={{ animationDelay: '0.24s', color: 'var(--accent-green)', textShadow: '0 2px 4px rgba(255, 255, 255, 0.95), 0 0 12px rgba(255, 255, 255, 0.85)' }}>
                      கல்வி மேன்மைக்கும்
                    </span>
                  </span>
                  <span className="text-line-mask">
                    <span className="text-line-inner hero-h1-line hero-h1-line-3" style={{ animationDelay: '0.36s', marginTop: '4px', color: 'var(--primary-navy)' }}>
                      100% தேர்ச்சிக்கும்
                    </span>
                  </span>
                  <span className="text-line-mask">
                    <span className="text-line-inner hero-h1-line hero-h1-line-4" style={{ animationDelay: '0.48s', color: 'var(--primary-navy)' }}>
                      முழு வழிகாட்டல்!
                    </span>
                  </span>
                </>
              ) : (
                <>
                  <span className="text-line-mask">
                    <span className="text-line-inner hero-h1-line hero-h1-line-1" style={{ animationDelay: '0.12s', color: 'var(--primary-navy)' }}>
                      Empowering Students with
                    </span>
                  </span>
                  <span className="text-line-mask">
                    <span className="text-line-inner hero-h1-line hero-h1-line-2" style={{ animationDelay: '0.24s', color: 'var(--accent-green)', textShadow: '0 2px 4px rgba(255, 255, 255, 0.95), 0 0 12px rgba(255, 255, 255, 0.85)' }}>
                      Academic Excellence
                    </span>
                  </span>
                  <span className="text-line-mask">
                    <span className="text-line-inner hero-h1-line hero-h1-line-3" style={{ animationDelay: '0.36s', color: 'var(--primary-navy)' }}>
                      & Top Scores!
                    </span>
                  </span>
                </>
              )}
            </h1>

          </div>

          {/* Middle Left Content (Subtitle & Badges on Left, keeping student on right visible) */}
          <div className="hero-mid-left-box">
            {/* Subtitle Paragraph */}
            <p className="hero-subtitle" style={{
              color: '#102A43',
              lineHeight: 1.55,
              margin: '0 0 16px 0',
              fontWeight: 700,
              textShadow: '0 1px 2px rgba(255, 255, 255, 0.9)'
            }}>
              {lang === 'ta'
                ? '6 முதல் 12ம் வகுப்பு வரை (State Board & CBSE), அண்ணா பல்கலைக்கழக பொறியியல் கணிதம் (M1, M2), பாலிடெக்னிக் & டிகிரி கணிதத்திற்கான முதன்மை கல்வி பயிற்சி மையம்.'
                : 'Premier coaching for 6th–12th Std (State Board & CBSE), Engineering Mathematics (Anna Univ), Diploma & Degree courses with classroom and personal guidance.'}
            </p>

            {/* 4 Feature Badges */}
            <div className="hero-four-badges-row">
              
              {/* Badge 1: Separate Batches */}
              <div className="hero-badge-col">
                <div className="hero-badge-icon" style={{
                  background: 'linear-gradient(135deg, #00875a 0%, #10b981 100%)',
                  boxShadow: '0 4px 12px rgba(0, 135, 90, 0.28)'
                }}>
                  <Users size={21} color="#ffffff" />
                </div>
                <span className="hero-badge-text">
                  {lang === 'ta' ? 'ஆண், பெண் தனித்தனி வகுப்பு' : 'Separate Batches for Boys & Girls'}
                </span>
              </div>

              {/* Badge 2: Doorstep Home Tuition */}
              <div className="hero-badge-col">
                <div className="hero-badge-icon" style={{
                  background: 'linear-gradient(135deg, #5c54db 0%, #7c3aed 100%)',
                  boxShadow: '0 4px 12px rgba(92, 84, 219, 0.28)'
                }}>
                  <Home size={21} color="#ffffff" />
                </div>
                <span className="hero-badge-text">
                  {lang === 'ta' ? 'வீட்டுக்கே வந்து கற்பிக்கும் வசதி' : 'Doorstep Home Tuition Available'}
                </span>
              </div>

              {/* Badge 3: March Night Study Camps */}
              <div className="hero-badge-col">
                <div className="hero-badge-icon" style={{
                  background: 'linear-gradient(135deg, #0284c7 0%, #0ea5e9 100%)',
                  boxShadow: '0 4px 12px rgba(2, 132, 199, 0.28)'
                }}>
                  <FileText size={21} color="#ffffff" />
                </div>
                <span className="hero-badge-text">
                  {lang === 'ta' ? 'மார்ச் இரவு நேர சிறப்பு முகாம்' : 'March Board Exam Night Study Camps'}
                </span>
              </div>

              {/* Badge 4: Dedicated PG Specialist Teachers */}
              <div className="hero-badge-col">
                <div className="hero-badge-icon" style={{
                  background: 'linear-gradient(135deg, #ea580c 0%, #f97316 100%)',
                  boxShadow: '0 4px 12px rgba(234, 88, 12, 0.28)'
                }}>
                  <UserCheck size={21} color="#ffffff" />
                </div>
                <span className="hero-badge-text">
                  {lang === 'ta' ? 'முதுகலை பட்டதாரி ஆசிரியர்கள்' : 'Dedicated PG Specialist Teachers'}
                </span>
              </div>

            </div>
          </div>

          {/* Action CTA Buttons */}
          <div className="hero-actions-container">
            
            {/* Primary Enroll Button */}
            <button
              onClick={onOpenAdmission}
              className="hero-enroll-btn shimmer-btn magnetic-btn"
              style={{
                width: '100%',
                background: 'var(--theme-gradient)',
                color: '#ffffff',
                borderRadius: '999px',
                fontWeight: 900,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                boxShadow: '0 6px 18px var(--theme-glow)',
                cursor: 'pointer',
                border: 'none',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              onMouseEnter={(e) => { 
                e.currentTarget.style.transform = 'translateY(-3px)'; 
                e.currentTarget.style.boxShadow = '0 10px 24px var(--theme-glow)';
              }}
              onMouseLeave={(e) => { 
                e.currentTarget.style.transform = 'translateY(0)'; 
                e.currentTarget.style.boxShadow = '0 6px 18px var(--theme-glow)';
              }}
            >
              <GraduationCap size={20} />
              <span>{lang === 'ta' ? '2025–26 புதிய வகுப்பில் சேரவும்' : 'Enroll for Batch 2025–26'}</span>
              <ArrowRight size={16} />
            </button>

            {/* Row 2: Call & WhatsApp */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '10px',
              width: '100%'
            }}>
              {/* Call Button */}
              <a
                href="tel:9876543210"
                className="hero-call-btn magnetic-btn"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  background: '#ffffff',
                  color: 'var(--primary-blue)',
                  border: '2px solid var(--primary-blue)',
                  borderRadius: '999px',
                  padding: '11px 16px',
                  fontWeight: 900,
                  fontSize: '0.90rem',
                  textDecoration: 'none',
                  boxShadow: '0 4px 10px rgba(0, 86, 179, 0.1)',
                  transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--primary-light-blue)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#ffffff';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Phone size={15} style={{ flexShrink: 0 }} />
                <span style={{ whiteSpace: 'nowrap' }}>98765 43210</span>
              </a>

              {/* WhatsApp Button - Perfectly Centered */}
              <a
                href="https://wa.me/919876543210?text=Hello%20Demo%20Tuition%20Centre,%20I%20want%20to%20enquire%20about%20admissions"
                target="_blank"
                rel="noreferrer"
                className="hero-btn-wa magnetic-btn"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  background: '#25D366',
                  color: '#ffffff',
                  padding: '11px 16px',
                  borderRadius: '999px',
                  fontWeight: 900,
                  fontSize: '0.90rem',
                  textDecoration: 'none',
                  boxShadow: '0 4px 12px rgba(37, 211, 102, 0.35)',
                  transition: 'all 0.25s ease',
                  whiteSpace: 'nowrap'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 18px rgba(37, 211, 102, 0.45)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(37, 211, 102, 0.35)';
                }}
              >
                <WhatsAppIcon size={17} style={{ flexShrink: 0 }} />
                <span style={{ whiteSpace: 'nowrap' }}>WhatsApp</span>
              </a>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        /* Desktop View */
        .hero-section-custom {
          background-image: url('/images/home_bg.jpg');
          background-size: cover;
          background-position: center right;
          background-repeat: no-repeat;
          min-height: 590px;
        }
        .hero-inner-container {
          padding: 38px 24px;
        }
        .hero-left-content {
          position: relative;
          z-index: 2;
          max-width: 780px;
          width: 65%;
        }
        .hero-left-content::before {
          content: "";
          position: absolute;
          left: -40px;
          top: -30px;
          width: 120%;
          max-width: 740px;
          height: calc(100% + 60px);
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.92) 0%,
            rgba(255, 255, 255, 0.80) 45%,
            rgba(255, 255, 255, 0.40) 75%,
            rgba(255, 255, 255, 0) 100%
          );
          border-radius: 24px;
          z-index: -1;
          pointer-events: none;
        }
        /* Hero Entrance Keyframe Cascade */
        .hero-headline-center-box {
          animation: fadeInDown 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.05s both;
        }
        .hero-tagline-en, .hero-tagline-ta {
          font-size: 1.85rem;
          color: #E85D04;
          text-shadow: 0 1px 3px rgba(255, 255, 255, 0.95), 0 0 8px rgba(255, 255, 255, 0.8);
        }
        .hero-tagline-ta {
          font-size: 1.35rem;
          font-family: var(--font-heading);
          letter-spacing: -0.01em;
        }
        .hero-main-h1 {
          font-size: clamp(2.55rem, 3.8vw, 3.4rem);
          line-height: 1.15;
          color: #003B73;
          text-shadow: 0 2px 4px rgba(255, 255, 255, 0.9), 0 0 12px rgba(255, 255, 255, 0.85);
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s both;
        }
        .hero-h1-line, .hero-h1-line-1, .hero-h1-line-2, .hero-h1-line-3, .hero-h1-line-4 {
          white-space: nowrap !important;
          display: block !important;
        }
        .hero-mid-left-box {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.28s both;
        }
        .hero-subtitle {
          font-size: 0.96rem;
          max-width: 520px;
          font-weight: 700;
          color: #102A43 !important;
          text-shadow: 0 1px 2px rgba(255, 255, 255, 0.9);
        }
        
        /* 4 Badges in 1 Single Row on Desktop with Centered Icons */
        .hero-four-badges-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
          margin-bottom: 22px;
          max-width: 560px;
        }
        .hero-badge-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 8px;
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .hero-badge-col:hover {
          transform: translateY(-4px);
        }
        .hero-badge-icon {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          flex-shrink: 0;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
        }
        .hero-badge-col:hover .hero-badge-icon {
          transform: scale(1.1) translateY(-2px);
        }
        .hero-badge-text {
          font-size: 0.76rem;
          font-weight: 800;
          color: #003B73;
          line-height: 1.3;
          text-align: center;
          text-shadow: 0 1px 2px rgba(255, 255, 255, 0.85);
          transition: color 0.2s ease;
        }
        .hero-badge-col:hover .hero-badge-text {
          color: #0056b3;
        }

        .hero-actions-container {
          display: flex;
          flex-direction: column;
          gap: 12px;
          max-width: 480px;
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.42s both;
        }
        .hero-enroll-btn {
          padding: 13px 22px;
          font-size: 0.98rem;
        }
        .hero-call-btn, .hero-wa-btn {
          padding: 11px 14px;
          font-size: 0.92rem;
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
          
          /* ONLY THIS HEADLINE & TAGLINE IS FULL-WIDTH CENTERED ON MOBILE */
          .hero-headline-center-box {
            width: 100% !important;
            max-width: 100% !important;
            margin: 10px auto 20px auto !important;
            text-align: center !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            background: radial-gradient(ellipse at center, rgba(255, 255, 255, 0.94) 0%, rgba(255, 255, 255, 0.75) 55%, rgba(255, 255, 255, 0) 100%) !important;
            padding: 6px 12px 12px 12px !important;
            border-radius: 20px !important;
          }
          .hero-tagline-en {
            font-size: 1.5rem !important;
            line-height: 1.25 !important;
            text-align: center !important;
            display: block !important;
            margin: 0 auto 6px auto !important;
            color: #E85D04 !important;
            text-shadow: 0 1px 3px rgba(255, 255, 255, 0.95), 0 0 8px rgba(255, 255, 255, 0.8) !important;
          }
          .hero-tagline-ta {
            font-size: 1.15rem !important;
            line-height: 1.3 !important;
            text-align: center !important;
            display: block !important;
            margin: 0 auto 6px auto !important;
            color: #E85D04 !important;
            text-shadow: 0 1px 3px rgba(255, 255, 255, 0.95), 0 0 8px rgba(255, 255, 255, 0.8) !important;
          }
          .hero-main-h1 {
            font-size: clamp(1.42rem, 5.8vw, 2.05rem) !important;
            font-weight: 900 !important;
            line-height: 1.22 !important;
            letter-spacing: -0.015em !important;
            margin-bottom: 18px !important;
            text-align: center !important;
            width: 100% !important;
            color: #003B73 !important;
            text-shadow: 0 2px 4px rgba(255, 255, 255, 0.9), 0 0 12px rgba(255, 255, 255, 0.85) !important;
          }
          .hero-h1-line, .hero-h1-line-1, .hero-h1-line-2, .hero-h1-line-3, .hero-h1-line-4 {
            white-space: normal !important;
            display: block !important;
            font-weight: 900 !important;
          }

          /* SUBTITLE & BADGES REMAIN ON LEFT (62% width) SO RIGHT STUDENT STAYS VISIBLE */
          .hero-mid-left-box {
            max-width: 62% !important;
            width: 62% !important;
            align-self: flex-start !important;
            margin-top: 16px !important;
            background: linear-gradient(90deg, rgba(255, 255, 255, 0.92) 0%, rgba(255, 255, 255, 0.70) 75%, rgba(255, 255, 255, 0) 100%) !important;
            padding: 8px 10px !important;
            border-radius: 14px !important;
          }
          .hero-subtitle {
            font-size: 0.84rem !important;
            line-height: 1.45 !important;
            margin-bottom: 14px !important;
            color: #102A43 !important;
            font-weight: 700 !important;
            text-align: left !important;
            text-shadow: 0 1px 2px rgba(255, 255, 255, 0.9) !important;
          }
          
          /* 2x2 grid on mobile within left 60% */
          .hero-four-badges-row {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 12px 10px !important;
            width: 100% !important;
            max-width: 100% !important;
            margin-bottom: 18px !important;
          }
          .hero-badge-col {
            align-items: flex-start !important;
            text-align: left !important;
            gap: 6px !important;
            background: transparent !important;
            padding: 0 !important;
            border: none !important;
            box-shadow: none !important;
          }
          .hero-badge-icon {
            width: 36px !important;
            height: 36px !important;
            margin: 0 !important;
          }
          .hero-badge-icon svg {
            width: 18px !important;
            height: 18px !important;
          }
          .hero-badge-text {
            font-size: 0.72rem !important;
            line-height: 1.25 !important;
            font-weight: 800 !important;
            text-align: left !important;
            color: #003B73 !important;
            text-shadow: 0 1px 2px rgba(255, 255, 255, 0.85) !important;
          }
          
          .hero-actions-container {
            display: flex !important;
            flex-direction: column !important;
            width: 100% !important;
            max-width: 100% !important;
            margin-top: 14px !important;
            gap: 10px !important;
          }
          .hero-enroll-btn {
            width: 100% !important;
            padding: 12px 14px !important;
            font-size: 0.90rem !important;
            box-sizing: border-box !important;
          }
          .hero-call-btn, .hero-wa-btn {
            width: 100% !important;
            padding: 10px 8px !important;
            font-size: 0.84rem !important;
            white-space: nowrap !important;
            gap: 6px !important;
            letter-spacing: -0.01em !important;
            box-sizing: border-box !important;
          }
        }

        @media (max-width: 480px) {
          .hero-section-custom {
            min-height: auto !important;
            padding: 12px 0 24px 0 !important;
          }
          .hero-inner-container {
            padding: 10px 12px 18px 12px !important;
          }
          .hero-headline-center-box {
            margin: 8px auto 18px auto !important;
          }
          .hero-tagline-en {
            font-size: 1.38rem !important;
          }
          .hero-tagline-ta {
            font-size: 1.05rem !important;
          }
          .hero-main-h1 {
            font-size: clamp(1.38rem, 6.2vw, 1.85rem) !important;
            font-weight: 900 !important;
            line-height: 1.22 !important;
            letter-spacing: -0.015em !important;
            margin-bottom: 16px !important;
          }
          .hero-mid-left-box {
            max-width: 64% !important;
            width: 64% !important;
            margin-top: 14px !important;
          }
          .hero-subtitle {
            font-size: 0.80rem !important;
            line-height: 1.42 !important;
            text-align: left !important;
            font-weight: 700 !important;
            color: #0f172a !important;
          }
          .hero-four-badges-row {
            gap: 10px 8px !important;
          }
          .hero-badge-col {
            align-items: flex-start !important;
            text-align: left !important;
          }
          .hero-badge-icon {
            margin: 0 !important;
          }
          .hero-badge-text {
            font-size: 0.68rem !important;
            text-align: left !important;
          }
          .hero-call-btn, .hero-wa-btn {
            font-size: 0.80rem !important;
            padding: 9px 4px !important;
          }
        }
      `}</style>
    </section>
  );
}
