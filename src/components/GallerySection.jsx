import React, { useState } from 'react';
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight, CheckCircle2, Image as ImageIcon } from 'lucide-react';

export default function GallerySection({ lang = 'ta' }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  const categories = [
    { id: 'all', labelTa: 'அனைத்தும்', labelEn: 'All Photos' },
    { id: 'classroom', labelTa: 'வகுப்பறைகள்', labelEn: 'Classrooms' },
    { id: 'camps', labelTa: 'இரவு தேர்வு முகாம்', labelEn: 'Night Study Camps' },
    { id: 'library', labelTa: 'நூலகம் & சுய ஆய்வு', labelEn: 'Study & Library' }
  ];

  const galleryItems = [
    {
      id: 1,
      src: '/images/fresh/gallery_classroom.jpg',
      category: 'classroom',
      titleTa: 'ஊடாடும் ஸ்மார்ட் வகுப்பறை',
      titleEn: 'Interactive Classroom Teaching',
      tagTa: 'வகுப்பறை',
      tagEn: 'Classroom',
      descTa: 'ஆண் பெண் தனித்தனி வகுப்பறைகளில் முதுகலை ஆசிரியர்களின் எளிய கணித விளக்கம்.'
    },
    {
      id: 2,
      src: '/images/fresh/night_camp_ai_full.jpg',
      category: 'camps',
      titleTa: 'மார்ச் அரசு பொதுத்தேர்வு இரவு முகாம்',
      titleEn: 'Supervised Night Study Camps',
      tagTa: 'தேர்வு முகாம்',
      tagEn: 'Night Camp',
      descTa: '10ம் & 12ம் வகுப்பு பொதுத்தேர்வு நேரங்களில் 24 மணி நேர ஆசிரியர் வழிகாட்டலுடன் கூடிய இரவு படிப்பு.'
    },
    {
      id: 3,
      src: '/images/faculty_classroom.jpg',
      category: 'classroom',
      titleTa: 'தனிநபர் சந்தேக தெளிவுபடுத்தல்',
      titleEn: '1-on-1 Faculty Mentoring',
      tagTa: 'வழிகாட்டல்',
      tagEn: 'Mentoring',
      descTa: 'ஒவ்வொரு மாணவனுக்கும் பிரத்யேக சந்தேக தீர்வு மற்றும் சூத்திர பயிற்சி.'
    },
    {
      id: 4,
      src: '/images/fresh/gallery_library.jpg',
      category: 'library',
      titleTa: 'அமைதியான நூலகம் & சுய ஆய்வு',
      titleEn: 'Reference Library & Self-Study',
      tagTa: 'நூலகம்',
      tagEn: 'Library',
      descTa: 'கடந்த 10 ஆண்டு வினாத்தாள்கள் மற்றும் புளூபிரிண்ட் வழிகாட்டல் புத்தகங்கள்.'
    },
    {
      id: 5,
      src: '/images/fresh/gallery_study.jpg',
      category: 'library',
      titleTa: 'குழு கலந்துரையாடல் & மாதிரி தேர்வு',
      titleEn: 'Focused Group Study & Mock Tests',
      tagTa: 'மாதிரி தேர்வு',
      tagEn: 'Mock Test',
      descTa: 'வாராந்திர யூனிட் தேர்வுகள் மற்றும் உடனடி மதிப்பீடு.'
    },
    {
      id: 6,
      src: '/images/exam_prep.jpg',
      category: 'camps',
      titleTa: 'சென்டம் ஸ்கோர் தீவிர பயிற்சி',
      titleEn: 'Centum Score Blueprint Coaching',
      tagTa: 'சென்டம் பூஸ்டர்',
      tagEn: 'Centum Drill',
      descTa: 'முழு மதிப்பெண் பெற வினாத்தாள் திட்டமிடல் மற்றும் நேர மேலாண்மை பயிற்சி.'
    }
  ];

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const openLightbox = (index) => {
    setActiveImageIndex(index);
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
  };

  const nextImage = () => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="gallery-section-wrapper" style={{
      background: '#ffffff',
      padding: '85px 0 90px 0',
      borderTop: '1px solid #e2e8f0',
      borderBottom: '1px solid #e2e8f0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="gallery-section-header reveal-on-scroll" style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          gap: '20px',
          marginBottom: '32px'
        }}>
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
                  {lang === 'ta' ? 'எங்கள் புகைப்படத் தொகுப்பு' : 'Our Gallery'}
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

            <h2 className="gallery-main-heading" style={{
              fontSize: 'clamp(1.9rem, 3.6vw, 2.85rem)',
              fontWeight: 900,
              fontFamily: 'var(--font-heading)',
              color: 'var(--primary-navy)',
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
              margin: 0
            }}>
              {lang === 'ta' ? (
                <>
                  நினைவுகளும் <span style={{ color: 'var(--accent-green)' }}>சாதனைத் தருணங்களும்</span>
                </>
              ) : (
                <>
                  Moments That <span style={{ color: 'var(--accent-green)' }}>Inspire</span>
                </>
              )}
            </h2>
          </div>

          <p className="gallery-main-subtext" style={{
            fontSize: '0.96rem',
            color: '#64748b',
            lineHeight: 1.6,
            maxWidth: '480px',
            margin: 0
          }}>
            {lang === 'ta'
              ? 'மாணவர்களின் தீவிர ஈடுபாடு, இரவு நேர தேர்வு முகாம்கள் மற்றும் மகிழ்ச்சியான கற்றல் சூழலின் சில புகைப்படக் காட்சிகள்.'
              : 'Glimpses of our vibrant classrooms, overnight board exam study camps, and motivated students.'}
          </p>
        </div>

        {/* Category Filter Pills (Horizontal Scrollable on Mobile) */}
        <div className="gallery-filter-bar reveal-on-scroll" style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          marginBottom: '30px'
        }}>
          {categories.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className="gallery-filter-btn"
                style={{
                  background: isSelected ? 'var(--primary-navy)' : '#ffffff',
                  color: isSelected ? '#ffffff' : '#334155',
                  border: isSelected ? '1.5px solid var(--primary-navy)' : '1.5px solid #e2e8f0',
                  padding: '7px 16px',
                  borderRadius: '999px',
                  fontSize: '0.84rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'all 0.2s ease',
                  boxShadow: isSelected ? '0 4px 12px rgba(9, 63, 124, 0.2)' : '0 2px 6px rgba(0,0,0,0.02)',
                  whiteSpace: 'nowrap',
                  flexShrink: 0
                }}
              >
                {lang === 'ta' ? cat.labelTa : cat.labelEn}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid (3 Columns on Desktop, Big 1-Column Cards on Mobile) */}
        <div className="gallery-main-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
          marginBottom: '20px'
        }}>
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              style={{
                position: 'relative',
                borderRadius: '22px',
                overflow: 'hidden',
                background: 'var(--primary-navy)',
                border: '1.5px solid #e2e8f0',
                boxShadow: '0 6px 20px var(--theme-glow)',
                cursor: 'pointer',
                aspectRatio: '16/11',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              className={`gallery-card-hover reveal-on-scroll stagger-${(idx % 6) + 1}`}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.borderColor = 'var(--primary-blue)';
                e.currentTarget.style.boxShadow = '0 16px 36px var(--theme-glow)';
                const img = e.currentTarget.querySelector('.gallery-img-tag');
                if (img) img.style.transform = 'scale(1.06)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#e2e8f0';
                e.currentTarget.style.boxShadow = '0 6px 20px var(--theme-glow)';
                const img = e.currentTarget.querySelector('.gallery-img-tag');
                if (img) img.style.transform = 'scale(1)';
              }}
            >
              {/* Photo */}
              <img
                src={item.src}
                alt={item.titleEn}
                className="gallery-img-tag"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.4s ease'
                }}
              />

              {/* Gradient Bottom Overlay */}
              <div className="gallery-gradient-overlay" style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(180deg, rgba(0,0,0,0.05) 30%, rgba(0,0,0,0.65) 70%, rgba(0,0,0,0.92) 100%)',
                pointerEvents: 'none'
              }} />

              {/* Top Tag Badge */}
              <div className="gallery-tag-badge" style={{
                position: 'absolute',
                top: '14px',
                left: '14px',
                background: 'rgba(255, 255, 255, 0.96)',
                backdropFilter: 'blur(8px)',
                padding: '5px 14px',
                borderRadius: '999px',
                fontSize: '0.78rem',
                fontWeight: 800,
                color: 'var(--primary-navy)',
                boxShadow: '0 2px 10px rgba(0,0,0,0.18)'
              }}>
                {lang === 'ta' ? item.tagTa : item.tagEn}
              </div>

              {/* Expand Icon */}
              <div className="gallery-expand-btn" style={{
                position: 'absolute',
                top: '14px',
                right: '14px',
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                background: 'rgba(0, 0, 0, 0.55)',
                backdropFilter: 'blur(6px)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
              }}>
                <Maximize2 size={15} />
              </div>

              {/* Bottom Caption Info */}
              <div className="gallery-caption-box" style={{
                position: 'absolute',
                bottom: '16px',
                left: '18px',
                right: '18px',
                color: '#ffffff'
              }}>
                <h4 className="gallery-card-title-ta" style={{
                  fontSize: '1.12rem',
                  fontWeight: 900,
                  fontFamily: 'var(--font-heading)',
                  color: '#ffffff',
                  margin: '0 0 3px 0',
                  lineHeight: 1.25,
                  textShadow: '0 2px 6px rgba(0,0,0,0.5)'
                }}>
                  {lang === 'ta' ? item.titleTa : item.titleEn}
                </h4>
                <div className="gallery-card-title-en" style={{
                  fontSize: '0.84rem',
                  color: '#fde047',
                  fontWeight: 700,
                  textShadow: '0 1px 3px rgba(0,0,0,0.4)',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}>
                  {lang === 'ta' ? item.titleEn : item.titleTa}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Interactive Lightbox Fullscreen Modal */}
      {activeImageIndex !== null && (
        <div
          onClick={closeLightbox}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 9999,
            background: 'rgba(9, 25, 45, 0.92)',
            backdropFilter: 'blur(12px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
        >
          {/* Modal Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '860px',
              width: '100%',
              background: '#ffffff',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 25px 60px rgba(0,0,0,0.5)',
              animation: 'modalZoom 0.25s ease-out'
            }}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                zIndex: 10,
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'rgba(0, 0, 0, 0.65)',
                color: '#ffffff',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#e11d48'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0, 0, 0, 0.65)'}
            >
              <X size={22} />
            </button>

            {/* Navigation Prev Button */}
            <button
              onClick={prevImage}
              style={{
                position: 'absolute',
                top: '40%',
                left: '16px',
                zIndex: 10,
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.9)',
                color: 'var(--primary-navy)',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 14px rgba(0,0,0,0.2)'
              }}
            >
              <ChevronLeft size={24} />
            </button>

            {/* Navigation Next Button */}
            <button
              onClick={nextImage}
              style={{
                position: 'absolute',
                top: '40%',
                right: '16px',
                zIndex: 10,
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.9)',
                color: 'var(--primary-navy)',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 14px rgba(0,0,0,0.2)'
              }}
            >
              <ChevronRight size={24} />
            </button>

            {/* Lightbox Image Preview */}
            <div style={{ width: '100%', maxHeight: '520px', background: 'var(--primary-navy)', overflow: 'hidden' }}>
              <img
                src={filteredItems[activeImageIndex].src}
                alt={filteredItems[activeImageIndex].titleEn}
                style={{
                  width: '100%',
                  height: '100%',
                  maxHeight: '520px',
                  objectFit: 'contain',
                  display: 'block'
                }}
              />
            </div>

            {/* Modal Bottom Information */}
            <div style={{ padding: '24px 28px', background: '#ffffff' }}>
              <div style={{
                display: 'inline-block',
                background: 'var(--accent-green-light)',
                color: 'var(--accent-green)',
                fontSize: '0.78rem',
                fontWeight: 800,
                padding: '4px 12px',
                borderRadius: '999px',
                marginBottom: '8px'
              }}>
                {lang === 'ta' ? filteredItems[activeImageIndex].tagTa : filteredItems[activeImageIndex].tagEn}
              </div>

              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: 900,
                color: 'var(--primary-navy)',
                margin: '0 0 6px 0',
                fontFamily: 'var(--font-heading)'
              }}>
                {lang === 'ta' ? filteredItems[activeImageIndex].titleTa : filteredItems[activeImageIndex].titleEn}
              </h3>

              <p style={{
                fontSize: '0.92rem',
                color: '#475569',
                margin: 0,
                lineHeight: 1.5
              }}>
                {filteredItems[activeImageIndex].descTa}
              </p>
            </div>

          </div>
        </div>
      )}

      <style>{`
        @keyframes modalZoom {
          from { opacity: 0; transform: scale(0.92); }
          to { opacity: 1; transform: scale(1); }
        }

        @media (max-width: 900px) and (min-width: 769px) {
          .gallery-main-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 18px !important;
          }
        }

        /* ─── Mobile View: Compact 2-Column Grid Layout (Halves Scroll Length) ─── */
        @media (max-width: 768px) {
          .gallery-section-wrapper {
            padding: 42px 0 48px 0 !important;
          }

          .gallery-section-header {
            margin-bottom: 18px !important;
            gap: 10px !important;
          }

          .gallery-main-heading {
            font-size: 1.5rem !important;
          }

          .gallery-main-subtext {
            font-size: 0.84rem !important;
          }

          .gallery-filter-bar {
            flex-wrap: nowrap !important;
            overflow-x: auto !important;
            padding-bottom: 6px !important;
            gap: 6px !important;
            margin-bottom: 16px !important;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
          }

          .gallery-filter-bar::-webkit-scrollbar {
            display: none;
          }

          .gallery-filter-btn {
            padding: 7px 14px !important;
            font-size: 0.80rem !important;
          }

          /* Compact 2-Column Grid */
          .gallery-main-grid {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 10px !important;
          }

          .gallery-card-hover {
            aspect-ratio: 4 / 3 !important;
            min-height: 140px !important;
            border-radius: 14px !important;
          }

          .gallery-tag-badge {
            top: 8px !important;
            left: 8px !important;
            padding: 2px 8px !important;
            font-size: 0.65rem !important;
          }

          .gallery-expand-btn {
            top: 8px !important;
            right: 8px !important;
            width: 26px !important;
            height: 26px !important;
          }

          .gallery-caption-box {
            bottom: 8px !important;
            left: 10px !important;
            right: 10px !important;
          }

          .gallery-card-title-ta {
            font-size: 0.86rem !important;
            margin-bottom: 1px !important;
            line-height: 1.2 !important;
          }

          .gallery-card-title-en {
            font-size: 0.68rem !important;
          }
        }

        @media (max-width: 400px) {
          .gallery-main-grid {
            gap: 8px !important;
          }
          .gallery-card-hover {
            min-height: 125px !important;
          }
          .gallery-card-title-ta {
            font-size: 0.80rem !important;
          }
          .gallery-card-title-en {
            font-size: 0.64rem !important;
          }
        }
      `}</style>
    </section>
  );
}
