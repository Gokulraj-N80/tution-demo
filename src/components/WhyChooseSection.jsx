import React, { useState } from 'react';
import { 
  GraduationCap, 
  Users, 
  Moon, 
  CalendarCheck, 
  Wallet, 
  CheckCircle2, 
  XCircle, 
  ArrowRight,
  Sparkles,
  BookOpen,
  ShieldCheck,
  Award
} from 'lucide-react';

export default function WhyChooseSection({ lang = 'ta', onOpenAdmission }) {
  const comparisons = [
    {
      featureTa: 'ஆசிரியர் தகுதி & வழிகாட்டல்',
      featureEn: 'Faculty Quality & Mastery',
      othersTa: 'ஒரே ஆசிரியர் அனைத்து பாடங்களையும் நடத்துதல்',
      othersEn: 'Single teacher handling multiple diverse subjects',
      goodwillTa: 'ஒவ்வொரு பாடத்திற்கும் M.Sc./M.Phil. முதுகலை ஆசிரியர்கள்',
      goodwillEn: 'Exclusively PG Specialist faculties per subject'
    },
    {
      featureTa: 'வகுப்பறை & பாதுகாப்பு சூழல்',
      featureEn: 'Classroom Discipline & Safety',
      othersTa: 'கூட்ட நெரிசல் மற்றும் கலப்பு வகுப்பறைகள்',
      othersEn: 'Crowded mixed batches with high distractions',
      goodwillTa: 'ஆண் / பெண் மாணவர்களுக்கு 100% தனித்தனி வகுப்புகள்',
      goodwillEn: '100% Separate batches & branch classrooms'
    },
    {
      featureTa: 'பொதுத்தேர்வு இரவு படிப்பு',
      featureEn: 'Board Exam Night Support',
      othersTa: 'தேர்வு நேரங்களில் இரவு படிப்பு வசதி இல்லை',
      othersEn: 'No supervised overnight study support',
      goodwillTa: 'மார்ச் பொதுத்தேர்வு இலவச இரவு முகாம் & சிற்றுண்டி',
      goodwillEn: 'Supervised March Night Camps with refreshments'
    },
    {
      featureTa: 'தேர்வு முறை & தொடர் மதிப்பீடு',
      featureEn: 'Mock Test Series & Tracking',
      othersTa: 'முறையற்ற தேர்வுகள் & பெற்றோர் அறிக்கை இன்மை',
      othersEn: 'Irregular unit tests without progress reports',
      goodwillTa: 'வாராந்திர அரசு புளூபிரிண்ட் தேர்வுகள் & பெற்றோர் கையொப்பம்',
      goodwillEn: 'Sunday Blueprint Tests with parent sign-off'
    }
  ];

  return (
    <section id="why-choose" style={{
      background: '#ffffff',
      padding: '80px 0 85px 0',
      borderTop: '1px solid #e2e8f0',
      borderBottom: '1px solid #e2e8f0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Section Header */}
        <div className="reveal-on-scroll" style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 46px auto' }}>
          
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
                {lang === 'ta' ? 'எங்கள் சிறப்பம்சங்கள்' : 'Why Parents Choose Us'}
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

          <h2 style={{
            fontSize: 'clamp(1.85rem, 3.4vw, 2.75rem)',
            fontWeight: 900,
            fontFamily: 'var(--font-heading)',
            color: 'var(--primary-navy)',
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
            margin: '0 0 12px 0'
          }}>
            {lang === 'ta' ? (
              <>ஏன் பெற்றோர்கள் <span style={{ color: 'var(--accent-green)' }}>Demo Tuition</span> தேர்ந்தெடுக்கிறார்கள்?</>
            ) : (
              <>Why Hundreds of Parents Trust <span style={{ color: 'var(--accent-green)' }}>Demo Tuition</span></>
            )}
          </h2>

          <p style={{
            fontSize: '0.96rem',
            color: '#475569',
            lineHeight: 1.6,
            maxWidth: '660px',
            margin: '0 auto',
            fontWeight: 500
          }}>
            {lang === 'ta'
              ? '2013 முதல் கடந்த 13 ஆண்டுகளாக மாணவர்களின் கல்வி முன்னேற்றத்திற்கும் 100% அரசு பொதுத்தேர்வு வெற்றிக்கும் அடித்தளமாக விளங்கும் 5 முக்கிய தூண்கள்.'
              : 'Five foundational institutional advantages that deliver consistent 100% board exam pass records and centum scores since 2013.'}
          </p>
        </div>

        {/* ─── MODERN ASYMMETRIC BENTO GRID (NON-BOXY, DYNAMIC & ENGAGING) ─── */}
        <div className="why-bento-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '22px',
          maxWidth: '1160px',
          margin: '0 auto 48px auto'
        }}>
          
          {/* Card 1 (Spans 7 Cols / Mobile: Span 2): Dedicated PG Faculty Hero Card */}
          <div className="why-bento-card bento-hero-card reveal-on-scroll reveal-left stagger-1 hover-lift" style={{
            gridColumn: 'span 7',
            background: 'var(--theme-gradient)',
            color: '#ffffff',
            borderRadius: '26px',
            padding: '32px 30px',
            boxShadow: '0 12px 32px var(--theme-glow)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Background Watermark Icon */}
            <GraduationCap size={180} style={{
              position: 'absolute',
              right: '-25px',
              bottom: '-25px',
              color: 'rgba(255, 255, 255, 0.06)',
              pointerEvents: 'none'
            }} />

            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px', marginBottom: '16px' }}>
                <div className="why-card-icon" style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '14px',
                  background: 'rgba(255, 255, 255, 0.18)',
                  backdropFilter: 'blur(8px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff'
                }}>
                  <GraduationCap size={24} />
                </div>

                <span className="why-card-badge" style={{
                  background: 'rgba(255, 255, 255, 0.14)',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  color: '#86efac',
                  padding: '4px 12px',
                  borderRadius: '999px',
                  fontSize: '0.78rem',
                  fontWeight: 800
                }}>
                  {lang === 'ta' ? 'முதுகலை பாட வல்லுநர்கள்' : 'M.Sc. • M.Phil. Specialists'}
                </span>
              </div>

              <h3 className="why-card-title bento-hero-title" style={{
                fontSize: '1.4rem',
                fontWeight: 900,
                lineHeight: 1.25,
                margin: '0 0 10px 0',
                color: '#ffffff',
                fontFamily: 'var(--font-heading)'
              }}>
                {lang === 'ta'
                  ? 'ஒவ்வொரு பாடத்திற்கும் தனித்தனி முதுகலை ஆசிரியர்கள்'
                  : 'Dedicated Post-Graduate Specialists per Subject'}
              </h3>

              <p className="why-card-desc bento-hero-desc" style={{
                fontSize: '0.90rem',
                color: '#e0f2fe',
                lineHeight: 1.6,
                margin: '0 0 18px 0',
                maxWidth: '520px'
              }}>
                {lang === 'ta'
                  ? 'ஒரே ஆசிரியர் பல பாடங்களை நடத்தும் நிலை இன்றி, கணிதம், அறிவியல், வணிகவியல் ஆகிய ஒவ்வொரு பாடத்திற்கும் தகுதிபெற்ற தனித்தனி முதுகலை ஆசிரியர்கள் மட்டுமே கற்பிக்கின்றனர்.'
                  : 'No single teacher handles multiple subjects. Every subject is taught exclusively by experienced Post-Graduate specialists for in-depth conceptual mastery.'}
              </p>
            </div>

            {/* Subject Chips */}
            <div className="why-chips-wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {[
                lang === 'ta' ? 'கணிதம் (Maths)' : 'Mathematics',
                lang === 'ta' ? 'அறிவியல் (Science)' : 'Physics & Chemistry',
                lang === 'ta' ? 'உயிரியல் (Biology)' : 'Biology & Life Sci',
                lang === 'ta' ? 'வணிகவியல் (Commerce)' : 'Accountancy & Commerce'
              ].map((sub, sIdx) => (
                <span key={sIdx} className="why-chip-item" style={{
                  background: 'rgba(255, 255, 255, 0.12)',
                  color: '#ffffff',
                  fontSize: '0.76rem',
                  fontWeight: 700,
                  padding: '4px 10px',
                  borderRadius: '8px'
                }}>
                  ✓ {sub}
                </span>
              ))}
            </div>
          </div>

          {/* Card 2 (Spans 5 Cols / Mobile: Span 1): Separate Batches */}
          <div className="why-bento-card reveal-on-scroll reveal-right stagger-2 hover-lift" style={{
            gridColumn: 'span 5',
            background: 'linear-gradient(135deg, #f0fdf4 0%, #e6f7ef 100%)',
            borderRadius: '26px',
            padding: '30px 26px',
            border: '1.5px solid #bbf7d0',
            boxShadow: '0 8px 24px rgba(0, 135, 90, 0.05)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative'
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                <div className="why-card-icon" style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '14px',
                  background: '#00875a',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff'
                }}>
                  <Users size={22} />
                </div>

                <span className="why-card-badge" style={{
                  background: '#dcfce7',
                  color: '#166534',
                  padding: '4px 12px',
                  borderRadius: '999px',
                  fontSize: '0.78rem',
                  fontWeight: 800,
                  border: '1px solid #86efac'
                }}>
                  {lang === 'ta' ? '100% தனித்தனி வகுப்பு' : 'Zero Distraction'}
                </span>
              </div>

              <h3 className="why-card-title" style={{
                fontSize: '1.2rem',
                fontWeight: 900,
                color: '#065f46',
                lineHeight: 1.3,
                margin: '0 0 8px 0',
                fontFamily: 'var(--font-heading)'
              }}>
                {lang === 'ta'
                  ? 'ஆண் - பெண் மாணவர்களுக்கு தனித்தனி வகுப்பறைகள்'
                  : 'Separate Batches for Boys & Girls'}
              </h3>

              <p className="why-card-desc" style={{
                fontSize: '0.86rem',
                color: '#334155',
                lineHeight: 1.55,
                margin: '0 0 16px 0'
              }}>
                {lang === 'ta'
                  ? 'மாணவர் மற்றும் மாணவியருக்கு தனித்தனி வகுப்பறைகள் & நேரங்கள் ஒதுக்கப்பட்டு முழு பாதுகாப்பு மற்றும் கவனச்சிதறலற்ற கல்விச் சூழல்.'
                  : 'Independent classrooms and batch timings ensure focused attention, strict discipline, and complete student safety.'}
              </p>
            </div>

            <div className="why-card-footer-check" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.80rem',
              fontWeight: 800,
              color: '#047857'
            }}>
              <CheckCircle2 size={16} />
              <span>{lang === 'ta' ? 'முழு பாதுகாப்பு & ஒழுக்கமான சூழல்' : 'Safe & Disciplined Learning'}</span>
            </div>
          </div>

          {/* Card 3 (Spans 4 Cols / Mobile: Span 1): March Night Study Camps */}
          <div className="why-bento-card reveal-on-scroll stagger-3 hover-lift" style={{
            gridColumn: 'span 4',
            background: 'linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%)',
            borderRadius: '26px',
            padding: '28px 24px',
            border: '1.5px solid #e9d5ff',
            boxShadow: '0 8px 24px rgba(124, 58, 237, 0.05)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                <div className="why-card-icon" style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '14px',
                  background: '#7c3aed',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff'
                }}>
                  <Moon size={22} />
                </div>

                <span className="why-card-badge" style={{
                  background: '#ede9fe',
                  color: '#6b21a8',
                  padding: '4px 10px',
                  borderRadius: '999px',
                  fontSize: '0.76rem',
                  fontWeight: 800,
                  border: '1px solid #c4b5fd'
                }}>
                  {lang === 'ta' ? 'சென்டம் பூஸ்டர்' : 'Exam Booster'}
                </span>
              </div>

              <h3 className="why-card-title" style={{
                fontSize: '1.15rem',
                fontWeight: 900,
                color: '#581c87',
                lineHeight: 1.3,
                margin: '0 0 8px 0',
                fontFamily: 'var(--font-heading)'
              }}>
                {lang === 'ta'
                  ? 'மார்ச் பொதுத்தேர்வு இரவு படிக்கும் முகாம்'
                  : 'March Board Exam Night Camps'}
              </h3>

              <p className="why-card-desc" style={{
                fontSize: '0.84rem',
                color: '#475569',
                lineHeight: 1.55,
                margin: '0 0 14px 0'
              }}>
                {lang === 'ta'
                  ? '10ம் & 12ம் பொதுத்தேர்வு காலங்களில் ஆசிரியர்கள் இரவு முழுவதும் உடனிருந்து சந்தேகங்களை தீர்த்து பயிற்சி அளிக்கும் சிறப்பு முகாம் (இலவச சிற்றுண்டியுடன்).'
                  : 'Supervised overnight study camp facility during 10th & 12th board exams with round-the-clock teacher guidance & refreshments.'}
              </p>
            </div>

            <div className="why-card-footer-check" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.78rem',
              fontWeight: 800,
              color: '#7c3aed'
            }}>
              <CheckCircle2 size={15} />
              <span>{lang === 'ta' ? '24/7 ஆசிரியர் வழிகாட்டல்' : '24/7 Faculty Guidance'}</span>
            </div>
          </div>

          {/* Card 4 (Spans 4 Cols / Mobile: Span 1): Weekly Sunday Blueprint Tests */}
          <div className="why-bento-card reveal-on-scroll stagger-4 hover-lift" style={{
            gridColumn: 'span 4',
            background: 'linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)',
            borderRadius: '26px',
            padding: '28px 24px',
            border: '1.5px solid #fde68a',
            boxShadow: '0 8px 24px rgba(217, 119, 6, 0.05)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                <div className="why-card-icon" style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '14px',
                  background: '#d97706',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff'
                }}>
                  <CalendarCheck size={22} />
                </div>

                <span className="why-card-badge" style={{
                  background: '#fef3c7',
                  color: '#92400e',
                  padding: '4px 10px',
                  borderRadius: '999px',
                  fontSize: '0.76rem',
                  fontWeight: 800,
                  border: '1px solid #fcd34d'
                }}>
                  {lang === 'ta' ? 'அரசு புளூபிரிண்ட்' : 'Blueprint Drills'}
                </span>
              </div>

              <h3 className="why-card-title" style={{
                fontSize: '1.15rem',
                fontWeight: 900,
                color: '#78350f',
                lineHeight: 1.3,
                margin: '0 0 8px 0',
                fontFamily: 'var(--font-heading)'
              }}>
                {lang === 'ta'
                  ? 'வாராந்திர மாதிரி தேர்வுகள் & பெற்றோர் அறிக்கை'
                  : 'Weekly Sunday Tests & Reports'}
              </h3>

              <p className="why-card-desc" style={{
                fontSize: '0.84rem',
                color: '#475569',
                lineHeight: 1.55,
                margin: '0 0 14px 0'
              }}>
                {lang === 'ta'
                  ? 'அரசு வினாத்தாள் புளூபிரிண்ட் அடிப்படையில் ஒவ்வொரு ஞாயிறும் யூனிட் தேர்வுகள் நடத்தப்பட்டு, திருத்தப்பட்ட விடைத்தாள்கள் பெற்றோர் கையொப்பத்திற்கு அனுப்பப்படுகிறது.'
                  : 'Weekly Sunday unit tests following government board blueprints with evaluated sheets sent for parent signature.'}
              </p>
            </div>

            <div className="why-card-footer-check" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.78rem',
              fontWeight: 800,
              color: '#b45309'
            }}>
              <CheckCircle2 size={15} />
              <span>{lang === 'ta' ? 'தொடர் கண்காணிப்பு அறிக்கை' : 'Continuous Parent Updates'}</span>
            </div>
          </div>

          {/* Card 5 (Spans 4 Cols / Mobile: Span 1): Affordable Transparent Fees */}
          <div className="why-bento-card reveal-on-scroll stagger-5 hover-lift" style={{
            gridColumn: 'span 4',
            background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
            borderRadius: '26px',
            padding: '28px 24px',
            border: '1.5px solid #bae6fd',
            boxShadow: '0 8px 24px rgba(2, 132, 199, 0.05)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                <div className="why-card-icon" style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '14px',
                  background: '#0284c7',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff'
                }}>
                  <Wallet size={22} />
                </div>

                <span className="why-card-badge" style={{
                  background: '#e0f2fe',
                  color: '#075985',
                  padding: '4px 10px',
                  borderRadius: '999px',
                  fontSize: '0.76rem',
                  fontWeight: 800,
                  border: '1px solid #7dd3fc'
                }}>
                  {lang === 'ta' ? 'மாத தவணை வசதி' : 'Flexible Fees'}
                </span>
              </div>

              <h3 className="why-card-title" style={{
                fontSize: '1.15rem',
                fontWeight: 900,
                color: '#0c4a6e',
                lineHeight: 1.3,
                margin: '0 0 8px 0',
                fontFamily: 'var(--font-heading)'
              }}>
                {lang === 'ta'
                  ? 'மறைமுக கட்டணமற்ற நியாயமான கட்டண முறை'
                  : 'Affordable & Transparent Fees'}
              </h3>

              <p className="why-card-desc" style={{
                fontSize: '0.84rem',
                color: '#475569',
                lineHeight: 1.55,
                margin: '0 0 14px 0'
              }}>
                {lang === 'ta'
                  ? 'எந்தவித மறைமுக கட்டணங்களும் இன்றி வடசென்னை நடுத்தர குடும்பங்களுக்கு ஏற்ற மிகக் குறைந்த கட்டணம் மற்றும் சுலபமான மாத தவணை செலுத்தும் வசதி.'
                  : 'Fair, transparent fees with zero hidden charges and flexible monthly installment options for North Chennai families.'}
              </p>
            </div>

            <div className="why-card-footer-check" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.78rem',
              fontWeight: 800,
              color: '#0284c7'
            }}>
              <CheckCircle2 size={15} />
              <span>{lang === 'ta' ? '100% வெளிப்படையான கட்டணம்' : '100% Transparent Structure'}</span>
            </div>
          </div>

        </div>

        {/* ─── DIRECT COMPARISON MATRIX BANNER ─── */}
        <div style={{
          background: 'var(--theme-footer-bg)',
          borderRadius: '26px',
          padding: '36px 32px',
          maxWidth: '1160px',
          margin: '0 auto',
          boxShadow: '0 15px 40px var(--theme-glow)',
          color: '#ffffff',
          position: 'relative',
          overflow: 'hidden'
        }} className="why-comparison-box reveal-on-scroll reveal-scale">
          
          {/* Top Header */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            marginBottom: '26px'
          }} className="why-comparison-header">
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'rgba(255, 255, 255, 0.12)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                padding: '4px 12px',
                borderRadius: '999px',
                fontSize: '0.76rem',
                fontWeight: 800,
                color: '#86efac',
                marginBottom: '8px'
              }}>
                <Sparkles size={13} style={{ color: '#fde047' }} />
                <span>{lang === 'ta' ? 'நேரடி ஒப்பீடு' : 'DIRECT COMPARISON'}</span>
              </div>

              <h3 style={{
                fontSize: 'clamp(1.25rem, 2.2vw, 1.65rem)',
                fontWeight: 900,
                fontFamily: 'var(--font-heading)',
                margin: 0,
                color: '#ffffff'
              }} className="why-comp-heading">
                {lang === 'ta' ? 'வழக்கமான டியூஷன் vs Demo Tuition தனித்துவம்' : 'Traditional Coaching vs Demo Tuition Standard'}
              </h3>
            </div>

            <button
              onClick={onOpenAdmission}
              className="shimmer-btn why-comp-cta-btn"
              style={{
                background: 'var(--accent-green)',
                color: '#ffffff',
                border: 'none',
                padding: '11px 22px',
                borderRadius: '999px',
                fontSize: '0.86rem',
                fontWeight: 800,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                boxShadow: '0 4px 14px rgba(0, 0, 0, 0.25)'
              }}
            >
              <span>{lang === 'ta' ? 'இன்றே சேர்க்கை பெறவும்' : 'Enrol for 2025–26'}</span>
              <ArrowRight size={14} />
            </button>
          </div>

          {/* Comparison Cards Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '16px'
          }} className="why-comparison-grid">
            {comparisons.map((item, cIdx) => (
              <div
                key={cIdx}
                className="why-comp-card"
                style={{
                  background: 'rgba(255, 255, 255, 0.07)',
                  borderRadius: '16px',
                  padding: '18px 20px',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px'
                }}
              >
                <div className="why-comp-feature" style={{ fontSize: '0.82rem', fontWeight: 800, color: '#38bdf8' }}>
                  {lang === 'ta' ? item.featureTa : item.featureEn}
                </div>

                {/* Others Row */}
                <div className="why-comp-others" style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.84rem', color: '#cbd5e1' }}>
                  <XCircle size={16} style={{ color: '#f87171', flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ textDecoration: 'line-through', opacity: 0.85 }}>{lang === 'ta' ? item.othersTa : item.othersEn}</span>
                </div>

                {/* Goodwill Row */}
                <div className="why-comp-goodwill" style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.88rem', color: '#ffffff', fontWeight: 700 }}>
                  <CheckCircle2 size={16} style={{ color: '#4ade80', flexShrink: 0, marginTop: '2px' }} />
                  <span>{lang === 'ta' ? item.goodwillTa : item.goodwillEn}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

      <style>{`
        .why-bento-card {
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .why-bento-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 36px rgba(9, 63, 124, 0.12) !important;
        }

        @media (max-width: 992px) and (min-width: 769px) {
          .why-bento-card {
            grid-column: span 6 !important;
          }
          .bento-hero-card {
            grid-column: span 12 !important;
          }
        }

        /* ─── Mobile View: Compact 2x2 Grid Layout (Dramatically Reduced Scroll) ─── */
        @media (max-width: 768px) {
          .why-bento-grid {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 10px !important;
            margin-bottom: 22px !important;
          }
          
          /* Hero Card spans full 2 columns */
          .bento-hero-card {
            grid-column: span 2 !important;
            padding: 18px 16px !important;
            border-radius: 18px !important;
          }
          .bento-hero-title {
            font-size: 1.05rem !important;
            margin-bottom: 6px !important;
          }
          .bento-hero-desc {
            font-size: 0.78rem !important;
            line-height: 1.4 !important;
            margin-bottom: 12px !important;
          }
          .why-chips-wrap {
            gap: 5px !important;
          }
          .why-chip-item {
            font-size: 0.68rem !important;
            padding: 2px 7px !important;
          }

          /* Bento Cards 2, 3, 4, 5 in a clean 2x2 Grid */
          .why-bento-card:not(.bento-hero-card) {
            grid-column: span 1 !important;
            padding: 14px 12px !important;
            border-radius: 16px !important;
            gap: 6px !important;
          }
          .why-card-icon {
            width: 34px !important;
            height: 34px !important;
            border-radius: 10px !important;
          }
          .why-card-icon svg {
            width: 17px !important;
            height: 17px !important;
          }
          .why-card-badge {
            font-size: 0.65rem !important;
            padding: 2px 7px !important;
          }
          .why-card-title {
            font-size: 0.88rem !important;
            line-height: 1.25 !important;
            margin-bottom: 4px !important;
            word-break: break-word !important;
          }
          .why-card-desc {
            font-size: 0.72rem !important;
            line-height: 1.35 !important;
            margin-bottom: 8px !important;
          }
          .why-card-footer-check {
            font-size: 0.70rem !important;
            gap: 4px !important;
          }
          .why-card-footer-check svg {
            width: 13px !important;
            height: 13px !important;
          }

          /* Comparison Box in Compact 2x2 Grid */
          .why-comparison-box {
            padding: 18px 14px !important;
            border-radius: 18px !important;
          }
          .why-comparison-header {
            margin-bottom: 14px !important;
            gap: 10px !important;
          }
          .why-comp-heading {
            font-size: 1.05rem !important;
          }
          .why-comp-cta-btn {
            width: 100% !important;
            justify-content: center !important;
            padding: 9px 14px !important;
            font-size: 0.82rem !important;
          }
          .why-comparison-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 8px !important;
          }
          .why-comp-card {
            padding: 12px 10px !important;
            border-radius: 12px !important;
            gap: 6px !important;
          }
          .why-comp-feature {
            font-size: 0.74rem !important;
            line-height: 1.2 !important;
          }
          .why-comp-others {
            font-size: 0.68rem !important;
            gap: 5px !important;
            line-height: 1.3 !important;
          }
          .why-comp-others svg {
            width: 13px !important;
            height: 13px !important;
          }
          .why-comp-goodwill {
            font-size: 0.74rem !important;
            gap: 5px !important;
            line-height: 1.3 !important;
          }
          .why-comp-goodwill svg {
            width: 13px !important;
            height: 13px !important;
          }
        }

        @media (max-width: 420px) {
          .why-bento-grid {
            gap: 8px !important;
          }
          .why-bento-card:not(.bento-hero-card) {
            padding: 12px 10px !important;
          }
          .why-card-title {
            font-size: 0.82rem !important;
          }
          .why-card-desc {
            font-size: 0.68rem !important;
          }
          .why-comparison-grid {
            gap: 6px !important;
          }
          .why-comp-card {
            padding: 10px 8px !important;
          }
        }
      `}</style>
    </section>
  );
}

