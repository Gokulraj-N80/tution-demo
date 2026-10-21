import React from 'react';
import { Users, Moon, UserCheck, CalendarCheck, Home, CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Award } from 'lucide-react';

export default function HighlightsSection({ lang = 'ta', onOpenAdmission }) {
  const highlights = [
    {
      num: '01',
      titleTa: 'ஆண் பெண் மாணவர்களுக்கு தனித்தனி வகுப்பு',
      titleEn: 'Separate Batches for Boys & Girls',
      descTa: 'மாணவர் மற்றும் மாணவியருக்கு தனித்தனி வகுப்பறைகள் & நேரங்கள் ஒதுக்கப்பட்டு முழு பாதுகாப்பு மற்றும் கவனச்சிதறலற்ற கல்விச் சூழல்.',
      descEn: 'Dedicated classrooms and independent batch timings for boys and girls to foster an attentive, disciplined, and safe academic environment.',
      tagTa: 'ஒழுக்கம் & பாதுகாப்பு',
      tagEn: 'Discipline & Safety',
      tagBg: '#e6f7ef',
      tagColor: '#00875a',
      icon: <Users size={22} />
    },
    {
      num: '02',
      titleTa: 'மார்ச் தேர்வு நேரங்களில் இரவு தங்கி படிக்கும் வசதி',
      titleEn: 'March Board Exam Night Study Camps',
      descTa: '10ம் & 12ம் பொதுத்தேர்வு காலங்களில் ஆசிரியர்கள் 24 மணி நேரமும் உடனிருந்து சந்தேகங்களை தீர்த்து பயிற்சி அளிக்கும் இலவச இரவு முகாம் & சிற்றுண்டி.',
      descEn: 'Supervised overnight study camp facility during 10th & 12th board exams with round-the-clock teacher guidance, rapid doubt clearance, and free refreshments.',
      tagTa: 'சென்டம் பூஸ்டர்',
      tagEn: 'Centum Score Booster',
      tagBg: '#e0f2fe',
      tagColor: '#0284c7',
      icon: <Moon size={22} />
    },
    {
      num: '03',
      titleTa: 'ஒவ்வொரு பாடத்திற்கும் தனித்தனி ஆசிரியர்கள்',
      titleEn: '1 Dedicated PG Teacher per Subject',
      descTa: 'ஒரே ஆசிரியர் பல பாடங்களை நடத்தாமல், ஒவ்வொரு பாடத்திற்கும் M.Sc., M.Phil., M.Ed. தகுதிபெற்ற தனித்தனி முதுகலை ஆசிரியர்கள் மட்டுமே கற்பிக்கின்றனர்.',
      descEn: 'No single teacher handles multiple subjects. Each subject is taught exclusively by experienced Post-Graduate specialists (M.Sc., M.Phil., M.Ed., M.Com.).',
      tagTa: 'பாட நிபுணத்துவம்',
      tagEn: 'Subject Mastery',
      tagBg: '#f3e8ff',
      tagColor: '#7c3aed',
      icon: <UserCheck size={22} />
    },
    {
      num: '04',
      titleTa: 'சனி & ஞாயிறு சிறப்பு பயிற்சி மற்றும் தேர்வுகள்',
      titleEn: 'Weekend Special Coaching & Test Series',
      descTa: 'ஒவ்வொரு வாரமும் அலகு தேர்வுகள், அரசு வினாத்தாள் புளூபிரிண்ட் பகுப்பாய்வு, சூத்திர பயிற்சிகள் மற்றும் பெற்றோர் கையொப்ப அறிக்கை.',
      descEn: 'Rigorous weekend unit tests, question paper blueprint analysis, formula drill sessions, and continuous parent progress reporting.',
      tagTa: 'தொடர் மதிப்பீடு',
      tagEn: 'Continuous Evaluation',
      tagBg: '#fef3c7',
      tagColor: '#b45309',
      icon: <CalendarCheck size={22} />
    },
    {
      num: '05',
      titleTa: 'வீட்டுக்கே வந்து கற்பிக்கும் வசதி (Home Tuition)',
      titleEn: 'Doorstep 1-on-1 Home Tuition',
      descTa: 'வடசென்னை முழுவதும் பள்ளி வகுப்புகள், கல்லூரி கணிதம் மற்றும் பொறியியல் கணிதப் பாடங்களுக்கு வீட்டுக்கே வந்து கற்பிக்கும் தனிப்பயிற்சி.',
      descEn: 'Personalized private tutoring directly at your residence across North Chennai for all school classes, college mathematics, and engineering subjects.',
      tagTa: 'தனிநபர் பயிற்சி',
      tagEn: 'Personalized 1-on-1',
      tagBg: '#ffedd5',
      tagColor: '#c2410c',
      icon: <Home size={22} />
    }
  ];

  return (
    <section id="highlights" className="highlights-section-wrapper" style={{
      background: '#ffffff',
      padding: '85px 0 95px 0',
      borderTop: '1px solid #e2e8f0',
      borderBottom: '1px solid #e2e8f0',
      position: 'relative'
    }}>
      <div className="container">
        
        {/* Section Top Tag & Header */}
        <div 
          className="reveal-on-scroll highlights-section-header"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: '20px',
            marginBottom: '42px'
          }}
        >
          <div>
            <div style={{ marginBottom: '8px' }}>
              <span className="font-script" style={{
                fontSize: '2rem',
                fontWeight: 700,
                color: 'var(--primary-blue)',
                display: 'inline-block',
                position: 'relative',
                isolation: 'isolate'
              }}>
                <span style={{ position: 'relative', zIndex: 2 }}>
                  {lang === 'ta' ? 'முக்கிய சிறப்புகள்' : 'Key Highlights'}
                </span>
                <span style={{
                  position: 'absolute',
                  bottom: '2px',
                  left: '6%',
                  width: '88%',
                  height: '7px',
                  background: '#fde047',
                  borderRadius: '999px',
                  zIndex: 1,
                  opacity: 0.95,
                  pointerEvents: 'none'
                }} />
              </span>
            </div>

            <h2 className="highlights-main-heading" style={{
              fontSize: 'clamp(1.9rem, 3.8vw, 2.9rem)',
              fontWeight: 900,
              fontFamily: 'var(--font-heading)',
              color: 'var(--primary-navy)',
              lineHeight: 1.18,
              letterSpacing: '-0.02em',
              margin: 0
            }}>
              {lang === 'ta' ? (
                <>
                  எங்கள் <span style={{ color: 'var(--accent-green)' }}>5 முக்கிய சிறப்பம்சங்கள்</span>
                </>
              ) : (
                <>
                  5 Signature <span style={{ color: 'var(--accent-green)' }}>Institutional Advantages</span>
                </>
              )}
            </h2>
          </div>

          <p className="highlights-main-subtext" style={{
            fontSize: '0.96rem',
            color: '#64748b',
            maxWidth: '480px',
            lineHeight: 1.6,
            margin: 0
          }}>
            {lang === 'ta'
              ? '2013 முதல் பெற்றோர்களின் அசைக்க முடியாத நம்பிக்கையை பெற்ற 5 முக்கிய சிறப்பம்சங்கள்.'
              : 'Five signature institutional advantages that make Demo Tuition Centre the trusted choice for academic excellence.'}
          </p>
        </div>

        {/* 2-Column Split Showcase Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '35px',
          alignItems: 'start'
        }} className="highlights-split-layout">
          
          {/* Left Column: Sticky Trust Showcase Card */}
          <div style={{
            background: '#ffffff',
            borderRadius: '24px',
            padding: '36px 30px',
            border: '1.5px solid #e2e8f0',
            boxShadow: '0 10px 30px var(--theme-glow)',
            position: 'sticky',
            top: '100px',
            alignSelf: 'start'
          }} className="highlights-trust-card reveal-on-scroll reveal-left hover-lift">
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'var(--accent-green-light)',
              color: 'var(--accent-green)',
              padding: '6px 14px',
              borderRadius: '999px',
              fontSize: '0.82rem',
              fontWeight: 800,
              marginBottom: '20px'
            }}>
              <Award size={16} />
              <span>{lang === 'ta' ? '2013 முதல் • 13+ வருட சாதனை' : 'ESTD 2013 • 13+ YEARS OF TRUST'}</span>
            </div>

            <h3 style={{
              fontSize: '1.65rem',
              fontWeight: 900,
              fontFamily: 'var(--font-heading)',
              color: 'var(--primary-navy)',
              lineHeight: 1.25,
              marginBottom: '16px'
            }}>
              {lang === 'ta' ? (
                <>
                  ஏன் பெற்றோர்கள் <span style={{ color: 'var(--accent-green)' }}>Demo Tuition</span> தேர்ந்தெடுக்கிறார்கள்?
                </>
              ) : (
                <>
                  Why Hundreds of Parents Choose <span style={{ color: 'var(--accent-green)' }}>Demo Tuition</span>
                </>
              )}
            </h3>

            <p style={{
              fontSize: '0.94rem',
              color: '#475569',
              lineHeight: 1.65,
              marginBottom: '28px'
            }}>
              {lang === 'ta'
                ? 'முதுகலை ஆசிரியர்களின் நேரடி பயிற்சி, வாராந்திர மாதிரி தேர்வுகள், ஆண்-பெண் தனித்தனி வகுப்பறைகள் மற்றும் இரவு படிக்கும் முகாம்கள் மூலம் 100% அரசு பொதுத்தேர்வு வெற்றியை உறுதி செய்கிறோம்.'
                : 'Our structured approach combines dedicated subject teachers, regular test evaluations, disciplined separate batches, and night study camps to ensure 100% board exam success.'}
            </p>

            {/* 2 Key Stats Box */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '14px',
              marginBottom: '28px'
            }}>
              <div style={{
                background: '#f8fafc',
                padding: '16px',
                borderRadius: '14px',
                border: '1px solid #e2e8f0'
              }}>
                <div style={{ fontSize: '1.6rem', fontWeight: 900, color: 'var(--primary-navy)', fontFamily: 'var(--font-heading)' }}>
                  100%
                </div>
                <div style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 700, marginTop: '2px' }}>
                  {lang === 'ta' ? 'தேர்ச்சி சாதனை' : 'Pass Record'}
                </div>
              </div>

              <div style={{
                background: '#f8fafc',
                padding: '16px',
                borderRadius: '14px',
                border: '1px solid #e2e8f0'
              }}>
                <div style={{ fontSize: '1.6rem', fontWeight: 900, color: 'var(--accent-green)', fontFamily: 'var(--font-heading)' }}>
                  567/600
                </div>
                <div style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 700, marginTop: '2px' }}>
                  {lang === 'ta' ? 'அதிகபட்ச மதிப்பெண்' : 'Top Board Score'}
                </div>
              </div>
            </div>

            {/* Quick Enrol CTA */}
            <button
              onClick={onOpenAdmission}
              className="shimmer-btn"
              style={{
                width: '100%',
                background: 'var(--primary-navy)',
                color: '#ffffff',
                padding: '14px 20px',
                borderRadius: '999px',
                fontWeight: 800,
                fontSize: '0.96rem',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                boxShadow: '0 4px 14px var(--theme-glow)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <span>{lang === 'ta' ? 'புதிய சேர்க்கை 2025–26' : 'Enrol for New Batch 2025–26'}</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Right Column: 5 Clean Numbered Feature Strips in Responsive Grid */}
          <div className="highlights-cards-list" style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}>
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className={`highlight-card-row reveal-on-scroll reveal-right stagger-${idx + 1} hover-lift`}
                style={{
                  background: '#ffffff',
                  borderRadius: '22px',
                  padding: '26px 28px',
                  border: '1.5px solid #e2e8f0',
                  boxShadow: '0 4px 15px rgba(9, 63, 124, 0.03)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '20px',
                  transition: 'all 0.25s ease',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.borderColor = '#93c5fd';
                  e.currentTarget.style.boxShadow = '0 12px 28px rgba(9, 63, 124, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(9, 63, 124, 0.03)';
                }}
              >
                {/* Numbered Indicator with Sleek Soft Badge */}
                <div className="highlight-badge-row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: 'auto' }}>
                  <div style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: '16px',
                    background: '#f1f5f9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.45rem',
                    fontWeight: 950,
                    fontFamily: 'var(--font-heading)',
                    color: 'var(--primary-navy)',
                    flexShrink: 0,
                    border: '1px solid #e2e8f0'
                  }} className="highlight-num-badge">
                    {item.num}
                  </div>
                </div>

                {/* Content - Fully Visible & Clearly Formatted */}
                <div className="highlight-content-col" style={{ flex: 1, minWidth: 0 }}>
                  
                  {/* Top Header: Title & Tag Badge */}
                  <div className="highlight-header-flex" style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: '8px'
                  }}>
                    <h3 className="highlight-title-ta" style={{
                      fontSize: '1.18rem',
                      fontWeight: 900,
                      color: 'var(--primary-navy)',
                      lineHeight: 1.3,
                      margin: 0
                    }}>
                      {lang === 'ta' ? item.titleTa : item.titleEn}
                    </h3>

                    <span className="highlight-tag-pill" style={{
                      background: item.tagBg,
                      color: item.tagColor,
                      fontSize: '0.78rem',
                      fontWeight: 800,
                      padding: '4px 12px',
                      borderRadius: '999px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px'
                    }}>
                      <CheckCircle2 size={14} />
                      <span>{lang === 'ta' ? item.tagTa : item.tagEn}</span>
                    </span>
                  </div>



                  {/* Description Paragraph */}
                  <p className="highlight-desc-text" style={{
                    fontSize: '0.92rem',
                    color: '#334155',
                    lineHeight: 1.6,
                    margin: 0,
                    fontWeight: 500
                  }}>
                    {lang === 'ta' ? item.descTa : item.descEn}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

      <style>{`
        @media (min-width: 960px) {
          .highlights-split-layout {
            grid-template-columns: 0.85fr 1.15fr !important;
            align-items: start !important;
          }
          .highlights-trust-card {
            position: sticky !important;
            top: 110px !important;
            align-self: flex-start !important;
          }
        }

        @media (max-width: 959px) {
          .highlights-trust-card {
            position: relative !important;
            top: 0 !important;
            padding: 24px 18px !important;
            margin-bottom: 20px !important;
          }
        }

        /* Mobile View: 2-Column Compact Grid Layout (Reduced Scroll) */
        @media (max-width: 768px) {
          .highlights-section-wrapper {
            padding: 42px 0 48px 0 !important;
          }
          .highlights-section-header {
            margin-bottom: 20px !important;
          }
          .highlights-main-heading {
            font-size: 1.5rem !important;
          }
          .highlights-trust-card {
            padding: 20px 16px !important;
            border-radius: 18px !important;
            margin-bottom: 16px !important;
          }
          .highlights-cards-list {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 10px !important;
          }
          .highlight-card-row {
            display: flex !important;
            flex-direction: column !important;
            gap: 8px !important;
            padding: 14px 12px !important;
            border-radius: 16px !important;
            align-items: flex-start !important;
            min-width: 0 !important;
          }
          .highlight-badge-row {
            display: flex !important;
            width: auto !important;
            flex-shrink: 0 !important;
            align-items: center !important;
            margin-bottom: 2px !important;
          }
          .highlight-num-badge {
            width: 32px !important;
            height: 32px !important;
            font-size: 0.95rem !important;
            border-radius: 8px !important;
          }
          .highlight-content-col {
            flex: 1 !important;
            min-width: 0 !important;
            width: 100% !important;
          }
          .highlight-header-flex {
            display: flex !important;
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 4px !important;
            margin-bottom: 4px !important;
            width: 100% !important;
          }
          .highlight-title-ta {
            font-size: 0.88rem !important;
            line-height: 1.25 !important;
            word-break: break-word !important;
            color: var(--primary-navy) !important;
          }
          .highlight-tag-pill {
            font-size: 0.65rem !important;
            padding: 2px 7px !important;
          }
          .highlight-tag-pill svg {
            width: 11px !important;
            height: 11px !important;
          }
          .highlight-desc-text {
            font-size: 0.72rem !important;
            line-height: 1.35 !important;
            color: #475569 !important;
          }

          /* Card 5 Spans full width across 2 columns */
          .highlight-card-row:nth-child(5) {
            grid-column: span 2 !important;
            flex-direction: row !important;
            align-items: flex-start !important;
            gap: 12px !important;
            padding: 14px 14px !important;
          }
          .highlight-card-row:nth-child(5) .highlight-badge-row {
            width: auto !important;
            flex-shrink: 0 !important;
            margin-bottom: 0 !important;
          }
          .highlight-card-row:nth-child(5) .highlight-content-col {
            flex: 1 !important;
            min-width: 0 !important;
            width: auto !important;
          }
          .highlight-card-row:nth-child(5) .highlight-header-flex {
            flex-direction: row !important;
            flex-wrap: wrap !important;
            justify-content: space-between !important;
            align-items: center !important;
            gap: 6px !important;
            margin-bottom: 4px !important;
          }
          .highlight-card-row:nth-child(5) .highlight-title-ta {
            font-size: 0.92rem !important;
            line-height: 1.25 !important;
            flex: 1 !important;
            min-width: 140px !important;
          }
          .highlight-card-row:nth-child(5) .highlight-desc-text {
            font-size: 0.74rem !important;
            line-height: 1.35 !important;
          }
        }

        @media (max-width: 400px) {
          .highlights-cards-list {
            gap: 8px !important;
          }
          .highlight-card-row {
            padding: 12px 10px !important;
          }
          .highlight-title-ta {
            font-size: 0.82rem !important;
          }
          .highlight-desc-text {
            font-size: 0.68rem !important;
          }
        }
      `}</style>
    </section>
  );
}
