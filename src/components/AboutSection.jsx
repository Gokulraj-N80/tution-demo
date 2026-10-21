import React from 'react';
import { Users, BookOpen, UserCheck, Award, ArrowRight, CheckCircle2, Target } from 'lucide-react';

export default function AboutSection({ lang = 'ta', onOpenAdmission }) {
  const features = [
    {
      icon: <Users size={19} />,
      title: lang === 'ta' ? 'அனுபவமிக்க ஆசிரியர்கள்' : 'Experienced Faculty',
      desc: lang === 'ta' ? 'ஒவ்வொரு பாடத்திற்கும் M.Sc., M.Phil. முதுகலை ஆசிரியர்கள்.' : 'Dedicated PG specialists for every single subject.',
      bg: '#e6f7ef',
      color: '#00875a'
    },
    {
      icon: <BookOpen size={19} />,
      title: lang === 'ta' ? 'முறையான கற்றல் முறை' : 'Structured Learning',
      desc: lang === 'ta' ? 'பாடத்திட்ட வினாத்தாள் பகுப்பாய்வு & வாராந்திர தேர்வுகள்.' : 'Blueprint syllabus drills & weekly unit evaluations.',
      bg: '#e0f2fe',
      color: '#0284c7'
    },
    {
      icon: <UserCheck size={19} />,
      title: lang === 'ta' ? 'தனிநபர் கவனம்' : 'Personalized Attention',
      desc: lang === 'ta' ? 'ஆண், பெண் தனித்தனி வகுப்புகள் & உடனடி சந்தேக தீர்வு.' : 'Independent batches for boys & girls with 1:1 focus.',
      bg: '#f3e8ff',
      color: '#7c3aed'
    },
    {
      icon: <Award size={19} />,
      title: lang === 'ta' ? '100% சாதனை முடிவுகள்' : 'Proven Results',
      desc: lang === 'ta' ? '2013 முதல் அரசு பொதுத்தேர்வுகளில் 100% தேர்ச்சி.' : 'Consistent 100% board exam pass record since 2013.',
      bg: '#fef3c7',
      color: '#b45309'
    }
  ];

  const stats = [
    { num: '13+ Years', label: lang === 'ta' ? 'கல்வி சாதனை' : 'Academic Excellence' },
    { num: '100%', label: lang === 'ta' ? 'தேர்ச்சி சாதனை' : 'Board Pass Record' },
    { num: '6th–12th Std', label: lang === 'ta' ? 'State Board & CBSE' : 'State Board & CBSE' },
    { num: 'PG Faculty', label: lang === 'ta' ? 'முதுகலை ஆசிரியர்கள்' : 'Dedicated PG Teachers' }
  ];

  return (
    <section id="about" className="about-section-wrapper" style={{
      background: '#ffffff',
      padding: '68px 0 62px 0',
      borderTop: '1px solid #e2e8f0',
      borderBottom: '1px solid #e2e8f0',
      position: 'relative'
    }}>
      <div className="container">
        
        {/* 2-Column Desktop Grid Layout - Elevated & Spacious */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '42px',
          alignItems: 'center',
          marginBottom: '32px'
        }} className="about-main-grid">
          
          {/* Left Column: Headline, Story, 2x2 Features & CTA */}
          <div className="reveal-on-scroll reveal-left">
            
            {/* Script Tag */}
            <div style={{ marginBottom: '6px' }}>
              <span className="font-script" style={{
                fontSize: 'clamp(1.75rem, 2.5vw, 2.15rem)',
                fontWeight: 700,
                color: '#0056b3',
                display: 'inline-block',
                position: 'relative',
                lineHeight: 1.1
              }}>
                {lang === 'ta' ? 'எங்களை பற்றி' : 'About Us'}
                <span style={{
                  position: 'absolute',
                  bottom: '2px',
                  left: '8%',
                  width: '84%',
                  height: '7px',
                  background: '#fde047',
                  borderRadius: '999px',
                  zIndex: -1,
                  opacity: 0.95
                }} />
              </span>
            </div>

            {/* Strong Headline */}
            <h2 style={{
              fontSize: 'clamp(1.95rem, 2.9vw, 2.65rem)',
              fontWeight: 900,
              fontFamily: 'var(--font-heading)',
              color: 'var(--primary-navy)',
              lineHeight: 1.18,
              letterSpacing: '-0.02em',
              margin: '0 0 14px 0'
            }}>
              {lang === 'ta' ? (
                <>
                  மாணவர்களின் வெற்றிக்கு <span style={{ color: 'var(--accent-green)' }}>அர்ப்பணிப்புடன்</span> வழிகாட்டும் நிறுவனம்!
                </>
              ) : (
                <>
                  Dedicated to <span style={{ color: 'var(--accent-green)' }}>100% Student Success</span> & Centum Scores!
                </>
              )}
            </h2>

            {/* Concise Supporting Text */}
            <p style={{
              fontSize: '0.96rem',
              color: '#475569',
              lineHeight: 1.6,
              marginBottom: '22px',
              maxWidth: '600px'
            }}>
              {lang === 'ta'
                ? 'Demo Tuition Centre 2013 முதல் 6 முதல் 12ம் வகுப்பு வரை முதுகலை பட்டதாரி ஆசிரியர்களைக் கொண்டு தரமான கல்வியை அர்ப்பணிப்புடன் வழங்கி வருகிறது.'
                : 'Since 2013, Demo Tuition Centre provides premier academic coaching with dedicated Post-Graduate specialist teachers across multiple modern campuses.'}
            </p>

            {/* 2x2 Feature Grid with Dynamic Spotlight Cursor Glow */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '14px',
              marginBottom: '24px',
              maxWidth: '580px'
            }} className="about-2x2-features">
              {features.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    background: '#ffffff',
                    borderRadius: '16px',
                    padding: '14px 15px',
                    border: '1.5px solid var(--card-border)',
                    boxShadow: '0 3px 12px var(--theme-glow)',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                  className={`about-feature-card spotlight-card hover-lift stagger-${idx + 1}`}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.borderColor = 'var(--primary-blue)';
                    e.currentTarget.style.boxShadow = '0 6px 18px var(--theme-glow)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = 'var(--card-border)';
                    e.currentTarget.style.boxShadow = '0 3px 12px var(--theme-glow)';
                  }}
                >
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: item.bg,
                    color: item.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.90rem', fontWeight: 900, color: 'var(--primary-navy)', lineHeight: 1.25, marginBottom: '3px' }}>
                      {item.title}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: '#64748b', lineHeight: 1.4 }}>
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Row: CTA & Trust Checkmark */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '16px'
            }}>
              <button
                onClick={onOpenAdmission}
                className="shimmer-btn magnetic-btn"
                style={{
                  background: 'var(--accent-green)',
                  color: '#ffffff',
                  padding: '12px 26px',
                  borderRadius: '999px',
                  fontWeight: 800,
                  fontSize: '0.92rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '7px',
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.2)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <span>{lang === 'ta' ? 'சேர்க்கை முன்பதிவு' : 'Enrol for New Batch'}</span>
                <ArrowRight size={16} />
              </button>

              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: '#00875a',
                fontSize: '0.86rem',
                fontWeight: 800
              }}>
                <CheckCircle2 size={16} />
                <span>13+ Years of Trusted Academic Guidance</span>
              </div>
            </div>

          </div>

          {/* Right Column: Classroom Photo with Floating Badges & Curtain Reveal */}
          <div style={{ position: 'relative' }} className="about-image-wrapper reveal-on-scroll reveal-right">
            
            {/* Ambient Background Glow */}
            <div style={{
              position: 'absolute',
              top: '5%',
              left: '5%',
              width: '90%',
              height: '90%',
              background: 'radial-gradient(ellipse at center, rgba(0, 135, 90, 0.12) 0%, rgba(9, 63, 124, 0.08) 50%, rgba(255, 255, 255, 0) 75%)',
              filter: 'blur(25px)',
              zIndex: 0,
              pointerEvents: 'none'
            }} />

            {/* Rounded Photo Container with Agency Curtain Mask */}
            <div
              className="curtain-reveal-box"
              style={{
                position: 'relative',
                zIndex: 1,
                borderRadius: '24px',
                boxShadow: '0 18px 40px -10px var(--theme-glow)',
                border: '2px solid #d0e7fb',
                background: 'var(--primary-navy)'
              }}
            >
              <img
                src="/images/faculty_classroom.jpg"
                alt="Students learning in Demo Tuition Centre classroom"
                className="about-classroom-img curtain-image"
                style={{
                  width: '100%',
                  height: '345px',
                  objectFit: 'cover',
                  objectPosition: 'center 25%',
                  display: 'block'
                }}
              />

              {/* Bottom Subtle Overlay */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0) 100%)',
                padding: '34px 22px 16px 22px',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 900, fontFamily: 'var(--font-heading)' }}>
                    Demo Tuition Centre
                  </div>
                  <div style={{ fontSize: '0.80rem', color: '#cbd5e1', marginTop: '1px' }}>
                    Main & City Campuses • Estd 2013
                  </div>
                </div>

                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: '#ffffff',
                  padding: '2px',
                  boxShadow: '0 3px 8px rgba(0,0,0,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <img src="/logo.svg" alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '50%' }} />
                </div>
              </div>
            </div>

            {/* Floating Top Badge */}
            <div style={{
              position: 'absolute',
              top: '-12px',
              right: '18px',
              zIndex: 3,
              background: '#ffffff',
              padding: '8px 16px',
              borderRadius: '999px',
              boxShadow: '0 6px 18px var(--theme-glow)',
              border: '1.5px solid #d0e7fb',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <Award size={16} style={{ color: 'var(--accent-green)' }} />
              <span style={{ fontSize: '0.80rem', fontWeight: 800, color: 'var(--primary-navy)' }}>
                13+ Years of Excellence
              </span>
            </div>

            {/* Floating Bottom Left Badge */}
            <div style={{
              position: 'absolute',
              bottom: '-12px',
              left: '18px',
              zIndex: 3,
              background: '#ffffff',
              padding: '8px 16px',
              borderRadius: '999px',
              boxShadow: '0 6px 18px var(--theme-glow)',
              border: '1.5px solid #d0e7fb',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <Target size={16} style={{ color: 'var(--primary-blue)' }} />
              <span style={{ fontSize: '0.80rem', fontWeight: 800, color: 'var(--primary-navy)' }}>
                100% Student Focus
              </span>
            </div>

          </div>

        </div>

        {/* Bottom Statistics Strip */}
        <div className="reveal-on-scroll reveal-scale" style={{
          background: '#ffffff',
          borderRadius: '18px',
          border: '1.5px solid #d0e7fb',
          padding: '18px 24px',
          boxShadow: '0 3px 14px rgba(9, 63, 124, 0.04)'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '16px',
            alignItems: 'center',
            textAlign: 'center'
          }} className="about-stats-grid">
            {stats.map((s, i) => (
              <div
                key={i}
                style={{
                  borderRight: i < 3 ? '1px solid #edf2f7' : 'none',
                  padding: '0 8px'
                }}
                className="about-stat-col"
              >
                <div
                  style={{
                    fontSize: '1.55rem',
                    fontWeight: 900,
                    fontFamily: 'var(--font-heading)',
                    color: i % 2 === 0 ? '#093f7c' : '#00875a',
                    lineHeight: 1.2,
                    marginBottom: '3px'
                  }}
                  {...(i === 0 ? { 'data-counter': '13', 'data-counter-suffix': '+ Years' } : {})}
                  {...(i === 1 ? { 'data-counter': '100', 'data-counter-suffix': '%' } : {})}
                >
                  {s.num}
                </div>
                <div style={{
                  fontSize: '0.82rem',
                  color: '#64748b',
                  fontWeight: 700
                }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @media (min-width: 960px) {
          .about-main-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
        @media (max-width: 768px) {
          .about-section-wrapper {
            padding: 42px 0 46px 0 !important;
          }
          .about-main-grid {
            gap: 22px !important;
            margin-bottom: 20px !important;
          }
          .about-classroom-img {
            height: 190px !important;
          }
          .about-2x2-features {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 10px !important;
            margin-bottom: 18px !important;
          }
          .about-feature-card {
            padding: 10px 10px !important;
            border-radius: 14px !important;
            gap: 8px !important;
          }
          .about-feature-card > div:first-child {
            width: 28px !important;
            height: 28px !important;
          }
          .about-feature-card > div:first-child svg {
            width: 15px !important;
            height: 15px !important;
          }
          .about-feature-card > div:last-child > div:first-child {
            font-size: 0.82rem !important;
            line-height: 1.25 !important;
            margin-bottom: 2px !important;
            word-break: break-word !important;
          }
          .about-feature-card > div:last-child > div:last-child {
            font-size: 0.70rem !important;
            line-height: 1.3 !important;
          }
          .about-stats-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 12px !important;
          }
          .about-stat-col {
            border-right: none !important;
            border-bottom: 1px solid #edf2f7 !important;
            padding-bottom: 8px !important;
          }
          .about-stat-col:nth-child(3),
          .about-stat-col:nth-child(4) {
            border-bottom: none !important;
            padding-bottom: 0 !important;
          }
        }

        @media (max-width: 420px) {
          .about-classroom-img {
            height: 170px !important;
          }
          .about-2x2-features {
            gap: 8px !important;
          }
          .about-feature-card {
            padding: 9px 8px !important;
          }
          .about-feature-card > div:last-child > div:first-child {
            font-size: 0.78rem !important;
          }
          .about-feature-card > div:last-child > div:last-child {
            font-size: 0.67rem !important;
          }
        }
      `}</style>
    </section>
  );
}
