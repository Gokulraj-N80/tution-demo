import React from 'react';
import { Users, Moon, GraduationCap, CalendarCheck, Home, Award, Sparkles, CheckCircle2, ChevronRight, Phone } from 'lucide-react';
import { tuitionData } from '../data/tuitionData';

export default function KeyFeatures({ lang = 'ta', onOpenAdmission }) {
  const iconMap = {
    Users: <Users size={22} style={{ color: '#0056b3' }} />,
    Moon: <Moon size={22} style={{ color: '#7c3aed' }} />,
    GraduationCap: <GraduationCap size={22} style={{ color: '#00875a' }} />,
    CalendarCheck: <CalendarCheck size={22} style={{ color: '#c2410c' }} />,
    Home: <Home size={22} style={{ color: '#d97706' }} />,
    Award: <Award size={22} style={{ color: '#0891b2' }} />
  };

  const badgeBgMap = {
    Users: '#eff6ff',
    Moon: '#f5f3ff',
    GraduationCap: '#ecfdf5',
    CalendarCheck: '#fff7ed',
    Home: '#fffbeb',
    Award: '#ecfeff'
  };

  return (
    <section id="features" style={{ background: '#ffffff', padding: '75px 0 85px 0', borderTop: '1px solid #eef2f6' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '45px' }} className="reveal-on-scroll">
          <div style={{ marginBottom: '6px' }}>
            <span className="font-script" style={{
              fontSize: '2rem',
              fontWeight: 800,
              color: '#c2410c',
              display: 'inline-block',
              position: 'relative',
              lineHeight: 1.1
            }}>
              {lang === 'ta' ? 'முக்கிய சிறப்புகள்' : 'Key Advantages'}
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

          <h2 style={{
            fontSize: 'clamp(1.9rem, 3.8vw, 2.9rem)',
            fontWeight: 900,
            fontFamily: 'var(--font-heading)',
            color: '#093f7c',
            lineHeight: 1.18,
            letterSpacing: '-0.02em',
            margin: '0 0 12px 0'
          }}>
            {lang === 'ta' ? (
              <>Demo Tuition Centre-ன் <span style={{ color: '#00875a' }}>தனித்துவ சிறப்புகள்</span></>
            ) : (
              <>Exclusive Advantages of <span style={{ color: '#00875a' }}>Demo Tuition Centre</span></>
            )}
          </h2>

          <p style={{
            fontSize: '0.96rem',
            color: '#64748b',
            maxWidth: '560px',
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            {lang === 'ta'
              ? 'கடந்த 13 வருடங்களாக பெற்றோர்களின் அசைக்க முடியாத நம்பிக்கையை பெற்ற தரமான கல்வி கட்டமைப்பு.'
              : 'Our structured methodology, dedicated faculty attention, and specialized study camps guarantee student academic triumph.'}
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="key-features-grid">
          {tuitionData.keyFeatures.map((feat, index) => {
            const iconBg = badgeBgMap[feat.icon] || '#f1f5f9';
            return (
              <div
                key={index}
                className="key-feature-card hover-lift"
                style={{
                  background: '#ffffff',
                  borderRadius: '18px',
                  border: '1.5px solid #e2e8f0',
                  padding: '22px 20px 18px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 15px rgba(9, 63, 124, 0.04)',
                  transition: 'all 0.25s ease'
                }}
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                    <div style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      background: iconBg,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      {iconMap[feat.icon]}
                    </div>
                    <span style={{
                      fontSize: '0.74rem',
                      fontWeight: 800,
                      color: '#94a3b8'
                    }}>
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 style={{
                    fontSize: '1.05rem',
                    fontWeight: 900,
                    color: '#093f7c',
                    marginBottom: '8px',
                    lineHeight: 1.3
                  }} className="key-feature-title">
                    {feat.title[lang] || feat.title.en}
                  </h3>

                  {/* Description */}
                  <p style={{
                    fontSize: '0.84rem',
                    color: '#475569',
                    lineHeight: 1.5,
                    margin: 0
                  }} className="key-feature-desc">
                    {feat.description[lang] || feat.description.en}
                  </p>
                </div>

                <div style={{
                  marginTop: '14px',
                  paddingTop: '10px',
                  borderTop: '1px solid #f1f5f9',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  fontSize: '0.76rem',
                  fontWeight: 800,
                  color: '#00875a'
                }}>
                  <CheckCircle2 size={14} style={{ color: '#00875a', flexShrink: 0 }} />
                  <span>{lang === 'ta' ? 'உறுதியான தனிநபர் கவனம்' : 'Guaranteed Individual Attention'}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight Callout Box for March Exam Study Camp */}
        <div style={{
          marginTop: '38px',
          background: 'linear-gradient(135deg, #f0fdf4 0%, #ecfeff 100%)',
          border: '2px solid #86efac',
          borderRadius: '20px',
          padding: '24px 28px',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '20px',
          alignItems: 'center'
        }} className="camp-callout-grid">
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 10px', background: '#00875a', color: '#ffffff', borderRadius: '6px', fontSize: '0.72rem', fontWeight: 800, marginBottom: '8px' }}>
              <Moon size={13} />
              <span>{lang === 'ta' ? 'சிறப்பு வசதி' : 'SPECIAL EXAM FEATURE'}</span>
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#064e3b', marginBottom: '6px' }}>
              {lang === 'ta'
                ? 'மார்ச் மாத பொதுத்தேர்வு நேரங்களில் இரவு தங்கி படிக்கும் வசதி!'
                : 'Overnight Study Camps During March Board Examinations'}
            </h3>
            <p style={{ color: '#166534', fontSize: '0.88rem', lineHeight: 1.55, margin: 0 }}>
              {lang === 'ta'
                ? 'பொதுத்தேர்வில் அதிக மதிப்பெண் பெற, ஆசிரியர்கள் முன்னிலையில் சந்தேகங்களை தீர்த்து இரவு முழுவதும் அமைதியான சூழலில் படிக்கும் வாய்ப்பு. சிற்றுண்டி மற்றும் முழு பாதுகாப்பு வசதியுடன்.'
                : 'Dedicated overnight study camps with subject teachers present throughout the night to solve doubts, review formula revisions, and conduct question paper drills.'}
            </p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap', gap: '10px' }} className="camp-actions">
            <button
              onClick={onOpenAdmission}
              className="shimmer-btn"
              style={{
                background: '#00875a',
                color: '#ffffff',
                padding: '11px 22px',
                borderRadius: '999px',
                fontWeight: 800,
                fontSize: '0.86rem',
                border: 'none',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                boxShadow: '0 4px 12px rgba(0, 135, 90, 0.3)',
                whiteSpace: 'nowrap'
              }}
            >
              <Sparkles size={15} />
              <span>{lang === 'ta' ? 'விவரங்களை அறிய' : 'Book Exam Camp Spot'}</span>
            </button>
            <a
              href={`tel:${tuitionData.phones[0]}`}
              style={{
                background: '#ffffff',
                color: '#093f7c',
                border: '1.5px solid #0056b3',
                padding: '10px 18px',
                borderRadius: '999px',
                fontWeight: 800,
                fontSize: '0.86rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                textDecoration: 'none',
                whiteSpace: 'nowrap'
              }}
            >
              <Phone size={14} />
              <span>Call: {tuitionData.displayPhones[0]}</span>
            </a>
          </div>
        </div>

      </div>

      <style>{`
        .key-features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        @media (max-width: 960px) and (min-width: 641px) {
          .key-features-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (min-width: 900px) {
          .camp-callout-grid {
            grid-template-columns: 1.4fr 1fr !important;
          }
        }

        @media (max-width: 640px) {
          .key-features-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 10px !important;
          }

          .key-feature-card {
            padding: 12px 10px !important;
            border-radius: 14px !important;
          }

          .key-feature-title {
            font-size: 0.84rem !important;
            line-height: 1.25 !important;
            margin-bottom: 4px !important;
          }

          .key-feature-desc {
            font-size: 0.70rem !important;
            line-height: 1.35 !important;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          .camp-callout-grid {
            padding: 16px 14px !important;
            border-radius: 16px !important;
            gap: 14px !important;
          }

          .camp-actions {
            width: 100% !important;
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 6px !important;
          }

          .camp-actions button,
          .camp-actions a {
            padding: 9px 6px !important;
            font-size: 0.76rem !important;
            justify-content: center !important;
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
