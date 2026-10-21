import React from 'react';
import { MapPin, Phone, Navigation, Building2, CheckCircle2, Clock, Sparkles, ArrowRight } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { tuitionData } from '../data/tuitionData';

export default function BranchesSection({ lang = 'ta', onOpenAdmission }) {
  const branches = [
    {
      id: 'korukkupet',
      titleEn: 'Main Campus (Branch 1)',
      titleTa: 'முதன்மை கிளை (கிளை 1)',
      areaTagEn: 'Knowledge Park • Chennai 01',
      areaTagTa: 'நாலேட்ஜ் பார்க் • சென்னை 01',
      addressEn: 'No: 12, Demo Avenue, Knowledge Park, Chennai - 600 001.',
      addressTa: 'எண்: 12, டெமோ அவென்யூ, நாலேட்ஜ் பார்க், சென்னை - 600 001.',
      landmarkEn: 'Near Central Metro Station',
      landmarkTa: 'மத்திய மெட்ரோ நிலையம் அருகில்',
      phone: '98765 43210',
      altPhone: '98765 43211',
      timingsEn: 'Mon–Sun: 6:00 AM – 9:30 PM',
      timingsTa: 'திங்கள்–ஞாயிறு: காலை 6:00 – இரவு 9:30',
      img: '/images/about_building.jpg',
      featuresTa: ['ஆண் / பெண் தனி வகுப்பு', 'A/C வகுப்பறைகள்', 'CCTV கண்காணிப்பு', 'தேர்வு சிறப்பு முகாம்'],
      featuresEn: ['Separate Boys/Girls Batches', 'A/C Smart Classrooms', '24/7 CCTV Security', 'Special Exam Camp'],
      mapQuery: 'Chennai Central Tamil Nadu 600001'
    },
    {
      id: 'tondiarpet',
      titleEn: 'City Campus (Branch 2)',
      titleTa: 'நகர கிளை (கிளை 2)',
      areaTagEn: 'Educational Zone • Chennai 28',
      areaTagTa: 'கல்வி மண்டலம் • சென்னை 28',
      addressEn: 'No. 40, Academy Road, Educational Zone, Chennai - 600 028.',
      addressTa: 'எண்: 40, அகாடமி ரோடு, கல்வி மண்டலம், சென்னை - 600 028.',
      landmarkEn: 'Near City Central Library',
      landmarkTa: 'நகர மத்திய நூலகம் அருகில்',
      phone: '98765 43210',
      altPhone: '98765 43211',
      timingsEn: 'Mon–Sun: 6:00 AM – 9:30 PM',
      timingsTa: 'திங்கள்–ஞாயிறு: காலை 6:00 – இரவு 9:30',
      img: '/images/library_study.jpg',
      featuresTa: ['முதுகலை ஆசிரியர்கள்', 'வாராந்திர தேர்வுகள்', 'அமைதியான கற்றல் சூழல்', '100% தேர்ச்சி சாதனை'],
      featuresEn: ['PG Specialist Faculty', 'Weekly Mock Tests', 'Peaceful Study Ambience', '100% Board Success'],
      mapQuery: 'Mylapore Chennai Tamil Nadu 600028'
    }
  ];

  return (
    <section id="branches" className="branches-section-wrapper" style={{
      background: 'var(--section-alt-bg)',
      padding: '85px 0 90px 0',
      borderTop: '1px solid var(--section-alt-border)',
      borderBottom: '1px solid var(--section-alt-border)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      {/* Decorative Glows */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: '10%',
        width: '350px',
        height: '350px',
        background: 'radial-gradient(circle, rgba(2, 132, 199, 0.06) 0%, rgba(255,255,255,0) 70%)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Section Header */}
        <div 
          className="reveal-on-scroll branches-section-header"
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
            <div style={{ marginBottom: '6px' }}>
              <span className="font-script" style={{
                fontSize: '2rem',
                fontWeight: 800,
                color: '#c2410c',
                display: 'inline-block',
                position: 'relative',
                lineHeight: 1.1,
                isolation: 'isolate',
                textShadow: '0 1px 2px rgba(255, 255, 255, 0.8)'
              }}>
                <span style={{ position: 'relative', zIndex: 2 }}>
                  {lang === 'ta' ? 'எங்கள் கிளைகள்' : 'Our Branches'}
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

            <h2 className="branches-main-heading" style={{
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
                  நேரடி பயிற்சி <span style={{ color: 'var(--accent-green)' }}>மையங்கள்</span>
                </>
              ) : (
                <>
                  Two Convenient <span style={{ color: 'var(--accent-green)' }}>Campus Locations</span>
                </>
              )}
            </h2>
          </div>

          <p className="branches-main-subtext" style={{
            fontSize: '0.96rem',
            color: '#64748b',
            maxWidth: '460px',
            lineHeight: 1.6,
            margin: 0
          }}>
            {lang === 'ta'
              ? 'மாணவர்கள் எளிதில் சென்று பயிலக்கூடிய வகையில் வடசென்னையில் 2 முக்கிய இடங்களில் நவீன வசதிகளுடன் இயங்குகிறது.'
              : 'Two modern, well-equipped campuses strategically located across North Chennai for easy student access.'}
          </p>
        </div>

        {/* 2 Modern Equal-Sized Branch Campus Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '28px',
          marginBottom: '38px'
        }} className="branches-main-grid">
          {branches.map((b, bIdx) => (
            <div
              key={b.id}
              style={{
                background: '#ffffff',
                borderRadius: '24px',
                border: '1.5px solid #e2e8f0',
                overflow: 'hidden',
                boxShadow: '0 8px 30px var(--theme-glow)',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
              className={`branch-card-item spotlight-card tilt-card reveal-on-scroll stagger-${bIdx + 1}`}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.borderColor = 'var(--primary-blue)';
                e.currentTarget.style.boxShadow = '0 18px 40px var(--theme-glow)';
                const img = e.currentTarget.querySelector('.branch-img-zoom');
                if (img) img.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#e2e8f0';
                e.currentTarget.style.boxShadow = '0 8px 30px var(--theme-glow)';
                const img = e.currentTarget.querySelector('.branch-img-zoom');
                if (img) img.style.transform = 'scale(1)';
              }}
            >
              <div>
                
                {/* Top Campus Photo with Dark Gradient & Frosted Badges */}
                <div className="branch-img-container" style={{
                  position: 'relative',
                  height: '210px',
                  width: '100%',
                  overflow: 'hidden',
                  background: 'var(--primary-navy)'
                }}>
                  <img
                    src={b.img}
                    alt={b.titleEn}
                    className="branch-img-zoom"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.5s ease',
                      opacity: 0.92
                    }}
                  />

                  {/* Gradient Overlay for Text Readability */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.8) 100%)',
                    pointerEvents: 'none'
                  }} />

                  {/* Top Badges Bar with Flexbox (Prevents Overlap) */}
                  <div className="branch-badges-header" style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    right: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '8px',
                    zIndex: 3
                  }}>
                    {/* Frosted Location Tag */}
                    <div className="branch-loc-badge" style={{
                      background: 'rgba(255, 255, 255, 0.96)',
                      backdropFilter: 'blur(10px)',
                      padding: '5px 12px',
                      borderRadius: '999px',
                      fontSize: '0.78rem',
                      fontWeight: 800,
                      color: 'var(--primary-navy)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                      whiteSpace: 'nowrap'
                    }}>
                      <MapPin size={13} style={{ color: 'var(--accent-green)', flexShrink: 0 }} />
                      <span>{lang === 'ta' ? b.areaTagTa : b.areaTagEn}</span>
                    </div>

                    {/* Status Badge */}
                    <div className="branch-status-badge" style={{
                      background: 'var(--accent-green)',
                      color: '#ffffff',
                      padding: '5px 11px',
                      borderRadius: '999px',
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                      whiteSpace: 'nowrap',
                      flexShrink: 0
                    }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#86efac', display: 'inline-block', flexShrink: 0 }} />
                      <span>{lang === 'ta' ? 'சேர்க்கை நடக்கிறது' : 'Admissions Open'}</span>
                    </div>
                  </div>

                  {/* Bottom Image Title Overlay */}
                  <div className="branch-title-overlay" style={{
                    position: 'absolute',
                    bottom: '12px',
                    left: '16px',
                    right: '16px',
                    color: '#ffffff'
                  }}>
                    <h3 className="branch-title-ta" style={{
                      fontSize: '1.25rem',
                      fontWeight: 900,
                      fontFamily: 'var(--font-heading)',
                      color: '#ffffff',
                      margin: '0',
                      textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                      letterSpacing: '0.01em'
                    }}>
                      {lang === 'ta' ? b.titleTa : b.titleEn}
                    </h3>
                  </div>
                </div>

                {/* Card Body Info */}
                <div className="branch-body-content" style={{ padding: '20px 20px 14px 20px' }}>
                  
                  {/* Address Box */}
                  <div className="branch-address-box" style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    color: '#334155',
                    fontSize: '0.88rem',
                    lineHeight: 1.5,
                    marginBottom: '14px',
                    background: '#f8fafc',
                    padding: '12px 14px',
                    borderRadius: '12px',
                    border: '1px solid #e2e8f0'
                  }}>
                    <Building2 size={18} style={{ color: '#0056b3', flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <div style={{ fontWeight: 600 }}>{lang === 'ta' ? b.addressTa : b.addressEn}</div>
                      <div style={{ fontSize: '0.78rem', color: '#64748b', marginTop: '3px', fontWeight: 600 }}>
                        📍 {lang === 'ta' ? b.landmarkTa : b.landmarkEn}
                      </div>
                    </div>
                  </div>

                  {/* 4 Feature Tags */}
                  <div className="branch-features-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '7px',
                    marginBottom: '14px'
                  }}>
                    {(lang === 'ta' ? b.featuresTa : b.featuresEn).map((f, fIdx) => (
                      <div
                        key={fIdx}
                        className="branch-feature-chip"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          color: '#0f172a',
                          background: '#ffffff',
                          padding: '6px 8px',
                          borderRadius: '8px',
                          border: '1px solid #e2e8f0',
                          lineHeight: 1.25
                        }}
                      >
                        <CheckCircle2 size={13} style={{ color: '#00875a', flexShrink: 0 }} />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>

                  {/* Timings & Contact Info */}
                  <div className="branch-timing-phone-row" style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '8px',
                    paddingTop: '10px',
                    borderTop: '1px solid #f1f5f9',
                    fontSize: '0.80rem',
                    color: '#64748b'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontWeight: 700, color: '#093f7c' }}>
                      <Clock size={14} style={{ color: '#f59e0b', flexShrink: 0 }} />
                      <span>{lang === 'ta' ? b.timingsTa : b.timingsEn}</span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontWeight: 800, color: '#0056b3' }}>
                      <Phone size={13} style={{ flexShrink: 0 }} />
                      <span>{b.phone}</span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Bottom Actions: Get Directions + Direct Call + WhatsApp (Guaranteed Perfect Fit) */}
              <div className="branch-actions-grid" style={{
                padding: '0 20px 18px 20px',
                display: 'grid',
                gridTemplateColumns: '1.2fr 1fr 44px',
                gap: '8px',
                marginTop: 'auto',
                alignItems: 'center'
              }}>
                {/* 1. Get Directions */}
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(b.mapQuery)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="branch-action-btn branch-btn-maps magnetic-btn"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    background: '#ffffff',
                    color: '#0056b3',
                    border: '1.5px solid #0056b3',
                    padding: '10px 10px',
                    borderRadius: '999px',
                    fontSize: '0.84rem',
                    fontWeight: 800,
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 2px 8px rgba(0, 86, 179, 0.08)',
                    whiteSpace: 'nowrap'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#0056b3';
                    e.currentTarget.style.color = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#ffffff';
                    e.currentTarget.style.color = '#0056b3';
                  }}
                >
                  <Navigation size={14} style={{ flexShrink: 0 }} />
                  <span>{lang === 'ta' ? 'திசைகள் (Maps)' : 'Directions'}</span>
                </a>

                {/* 2. Call Button */}
                <a
                  href={`tel:${b.phone.replace(/\s+/g, '')}`}
                  className="branch-action-btn branch-btn-call magnetic-btn"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    background: '#093f7c',
                    color: '#ffffff',
                    padding: '10px 10px',
                    borderRadius: '999px',
                    fontSize: '0.84rem',
                    fontWeight: 800,
                    textDecoration: 'none',
                    border: 'none',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 4px 12px rgba(9, 63, 124, 0.25)',
                    whiteSpace: 'nowrap'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#0056b3';
                    e.currentTarget.style.transform = 'translateY(-1px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#093f7c';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <Phone size={14} style={{ flexShrink: 0 }} />
                  <span>{lang === 'ta' ? 'அழைக்க' : 'Call'}</span>
                </a>

                {/* 3. WhatsApp Icon Button - Fixed size so it NEVER gets squished or clipped */}
                <a
                  href={`https://wa.me/91${b.phone.replace(/\s+/g, '')}?text=Hello%20Demo%20Tuition%20Centre,%20I%20want%20to%20enquire%20about%20${encodeURIComponent(b.titleEn)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="branch-action-btn branch-btn-wa magnetic-btn"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#25D366',
                    color: '#ffffff',
                    width: '44px',
                    height: '42px',
                    borderRadius: '999px',
                    textDecoration: 'none',
                    border: 'none',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 4px 12px rgba(37, 211, 102, 0.35)',
                    flexShrink: 0
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-1px)';
                    e.currentTarget.style.boxShadow = '0 6px 16px rgba(37, 211, 102, 0.45)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(37, 211, 102, 0.35)';
                  }}
                  title="WhatsApp"
                >
                  <WhatsAppIcon size={17} />
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* View All Branches / Quick Admission Inquiry Strip */}
        <div className="branch-enquiry-banner reveal-on-scroll reveal-scale" style={{
          background: '#ffffff',
          borderRadius: '20px',
          border: '1.5px solid #e2e8f0',
          padding: '20px 24px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '16px',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.02)'
        }}>
          <div className="branch-enquiry-info" style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: '#e6f7ef',
              color: '#00875a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <Building2 size={22} />
            </div>
            <div>
              <div style={{ fontSize: '1rem', fontWeight: 900, color: '#093f7c', fontFamily: 'var(--font-heading)' }}>
                {lang === 'ta' ? 'உங்கள் பகுதிக்கு அருகிலுள்ள கிளையில் இப்போதே முன்பதிவு செய்யுங்கள்' : 'Visit or Enquire at Your Nearest Campus Today'}
              </div>
              <div style={{ fontSize: '0.82rem', color: '#64748b', marginTop: '2px' }}>
                {lang === 'ta' ? 'முதன்மை & நகர கிளைகளில் புதிய சேர்க்கை நடைபெறுகிறது' : 'Direct admission counselling available at our campus branches'}
              </div>
            </div>
          </div>

          <button
            onClick={onOpenAdmission}
            className="branch-enquiry-cta"
            style={{
              background: '#00875a',
              color: '#ffffff',
              padding: '11px 22px',
              borderRadius: '999px',
              fontWeight: 800,
              fontSize: '0.90rem',
              border: 'none',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 4px 14px rgba(0, 135, 90, 0.3)',
              transition: 'all 0.2s ease',
              whiteSpace: 'nowrap'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <span>{lang === 'ta' ? 'இப்போதே சேர்க்கை பெறவும்' : 'Enrol at Nearest Branch'}</span>
            <ArrowRight size={16} />
          </button>
        </div>

      </div>

      <style>{`
        @media (max-width: 860px) {
          .branches-section-wrapper {
            padding: 42px 0 48px 0 !important;
          }
          .branches-section-header {
            margin-bottom: 20px !important;
            gap: 10px !important;
          }
          .branches-main-heading {
            font-size: 1.5rem !important;
          }
          .branches-main-subtext {
            font-size: 0.84rem !important;
            line-height: 1.45 !important;
          }
          .branches-main-grid {
            grid-template-columns: 1fr !important;
            gap: 14px !important;
            margin-bottom: 18px !important;
          }
          .branch-card-item {
            border-radius: 16px !important;
          }
          .branch-img-container {
            height: 140px !important;
          }
          .branch-title-ta {
            font-size: 1.05rem !important;
          }
          .branch-body-content {
            padding: 12px 12px 8px 12px !important;
          }
          .branch-address-box {
            padding: 8px 10px !important;
            font-size: 0.78rem !important;
            margin-bottom: 8px !important;
          }
          .branch-features-grid {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 5px !important;
            margin-bottom: 8px !important;
          }
          .branch-feature-chip {
            padding: 4px 6px !important;
            font-size: 0.70rem !important;
          }
          .branch-timing-phone-row {
            padding-top: 6px !important;
            font-size: 0.74rem !important;
            gap: 5px !important;
          }
          .branch-actions-grid {
            padding: 0 12px 14px 12px !important;
            grid-template-columns: 1fr 1fr 38px !important;
            gap: 6px !important;
          }
          .branch-btn-maps,
          .branch-btn-call {
            padding: 8px 6px !important;
            font-size: 0.76rem !important;
          }
          .branch-btn-wa {
            width: 38px !important;
            height: 36px !important;
          }
          .branch-badges-header {
            top: 8px !important;
            left: 8px !important;
            right: 8px !important;
            gap: 6px !important;
          }
          .branch-loc-badge {
            padding: 4px 8px !important;
            font-size: 0.68rem !important;
            gap: 4px !important;
          }
          .branch-loc-badge svg {
            width: 11px !important;
            height: 11px !important;
          }
          .branch-status-badge {
            padding: 4px 8px !important;
            font-size: 0.66rem !important;
            gap: 4px !important;
          }
          .branch-enquiry-banner {
            padding: 14px 12px !important;
            border-radius: 14px !important;
            flex-direction: column !important;
            align-items: stretch !important;
            text-align: center !important;
          }
          .branch-enquiry-info {
            flex-direction: column !important;
            text-align: center !important;
            gap: 8px !important;
          }
          .branch-enquiry-cta {
            width: 100% !important;
            justify-content: center !important;
            padding: 10px 14px !important;
          }
        }
        @media (max-width: 380px) {
          .branch-badges-header {
            top: 6px !important;
            left: 6px !important;
            right: 6px !important;
            gap: 4px !important;
          }
          .branch-loc-badge {
            padding: 3px 6px !important;
            font-size: 0.62rem !important;
          }
          .branch-status-badge {
            padding: 3px 6px !important;
            font-size: 0.60rem !important;
          }
        }
      `}</style>
    </section>
  );
}
