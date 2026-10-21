import React from 'react';
import { Phone, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function TeachersSection({ lang = 'ta', onOpenAdmission }) {
  const teachers = [
    {
      id: 'paranthaman',
      nameEn: 'DR. K. RAJESH',
      nameTa: 'டாக்டர் K. ராஜேஷ்',
      degrees: 'M.Sc., M.Phil., Ph.D.',
      roleTa: 'நிறுவனர் & இயக்குனர் • 15+ வருட அனுபவம்',
      roleEn: 'Founder & Director • 15+ Yrs Exp',
      subjectTa: 'உயிரியல் & கணித வழிகாட்டல்',
      subjectEn: 'Biology & Life Sciences',
      avatarBg: '#0056b3',
      bioTa: '10, 11, 12ம் வகுப்பு அரசு வினாத்தாள் புளூபிரிண்ட் பகுப்பாய்வு மற்றும் சென்டம் மதிப்பெண் சிறப்பு பயிற்சியாளர்.',
      bioEn: 'Biology specialist guiding 10th-12th with exam blueprints and centum scoring methods.',
      image: '/images/teachers/avatar_paranthaman.svg',
      phone: '9876543210',
      isLead: true
    },
    {
      id: 'kamu',
      nameEn: 'PROF. E. KUMAR',
      nameTa: 'பேராசிரியர் E. குமார்',
      degrees: 'M.Sc., B.Ed.',
      roleTa: 'முதுகலை கணித ஆசிரியர் • 12+ வருட அனுபவம்',
      roleEn: 'Senior Maths Faculty • 12+ Yrs Exp',
      subjectTa: 'மேல்நிலை & பொறியியல் கணிதம்',
      subjectEn: 'Higher Sec & Engineering Maths',
      avatarBg: '#00875a',
      bioTa: 'கால்குலஸ், அல்ஜீப்ரா மற்றும் அண்ணா பல்கலைக்கழக இன்ஜினியரிங் கணிதம் (M1, M2) பாடங்களில் தனித்துவ அனுபவம்.',
      bioEn: 'Expert in Calculus, Algebra, and Anna University Engineering Maths (M1, M2).',
      image: '/images/teachers/avatar_kamu.svg',
      phone: '9876543210'
    },
    {
      id: 'keerthana',
      nameEn: 'P. KEERTHANA',
      nameTa: 'P. கீர்த்தனா',
      degrees: 'M.Sc., B.Ed.',
      roleTa: 'கணித விரிவுரையாளர் • 10+ வருட அனுபவம்',
      roleEn: 'Maths & Stats Mentor • 10+ Yrs Exp',
      subjectTa: 'வணிக கணிதம் & புள்ளியியல்',
      subjectEn: 'Business Maths & Statistics',
      avatarBg: '#5b50d6',
      bioTa: '10ம் வகுப்பு கணிதம் மற்றும் வணிகவியல் மாணவர்களுக்கான பிசினஸ் மேக்ஸ், நிகழ்தகவு பாடங்களில் எளிய சூத்திர பயிற்சி.',
      bioEn: 'Dedicated mentor for Commerce Business Maths, Probability, and 10th board exams.',
      image: '/images/teachers/avatar_keerthana.svg',
      phone: '9876543210'
    },
    {
      id: 'murugan',
      nameEn: 'DR. M. MURUGAN',
      nameTa: 'டாக்டர் M. முருகன்',
      degrees: 'M.Sc., M.Phil., Ph.D.',
      roleTa: 'வேதியியல் துறை தலைவர் • 14+ வருட அனுபவம்',
      roleEn: 'Chemistry Department Head • 14+ Yrs Exp',
      subjectTa: 'வேதியியல் & இயற்பியல் அறிவியல்',
      subjectEn: 'Chemistry & Physical Sciences',
      avatarBg: '#0284c7',
      bioTa: 'கரிம வேதியியல் சமன்பாடுகள், எண் கணக்கீடுகள் மற்றும் செய்முறை தேர்வுகளுக்கு எளிமையான வழிகாட்டல்.',
      bioEn: 'Master in Organic Chemistry reactions, equation balancing, formula drills, and numericals.',
      image: '/images/teachers/avatar_murugan.svg',
      phone: '9876543210'
    },
    {
      id: 'sakkaravarthi',
      nameEn: 'PROF. S. VENKATESH',
      nameTa: 'பேராசிரியர் S. வெங்கடேஷ்',
      degrees: 'M.Com., B.Ed.',
      roleTa: 'வணிகவியல் துறை தலைவர் • 11+ வருட அனுபவம்',
      roleEn: 'Commerce & Accounts Head • 11+ Yrs Exp',
      subjectTa: 'கணக்குப்பதிவியல் & வணிகவியல்',
      subjectEn: 'Accountancy & Commerce',
      avatarBg: '#ea580c',
      bioTa: 'ஜர்னல் என்ட்ரிகள், லெட்ஜர் கணக்குகள் மற்றும் பொருளாதார பாடங்களை எளிய செய்முறை உதாரணங்களுடன் கற்பிக்கும் நிபுணர்.',
      bioEn: 'Commerce authority simplifying complex journal entries, ledgers, and economics.',
      image: '/images/teachers/avatar_sakkaravarthi.svg',
      phone: '9876543210'
    }
  ];

  return (
    <section id="faculty" className="teachers-section-wrapper">
      <div className="container">
        
        {/* Section Header */}
        <div className="teachers-header-block reveal-on-scroll">
          <div className="script-title-wrap">
            <span className="font-script teachers-script-badge">
              <span className="relative-z">
                {lang === 'ta' ? 'எங்கள் ஆசிரியர்கள்' : 'Our Teachers'}
              </span>
              <span className="teachers-brush-line" />
            </span>
          </div>

          <h2 className="teachers-main-heading">
            {lang === 'ta' ? (
              <>பாடவாரியாக <span className="text-highlight-green">முதுகலை நிபுணத்துவ ஆசிரியர்கள்</span></>
            ) : (
              <>Post-Graduate <span className="text-highlight-green">Specialist Faculty</span></>
            )}
          </h2>

          <p className="teachers-subheading-p">
            {lang === 'ta'
              ? 'ஒரே ஆசிரியர் பல பாடங்களை நடத்தும் நிலை இன்றி, ஒவ்வொரு பாடத்திற்கும் M.Sc., M.Phil., M.Ed., M.Com. தகுதிபெற்ற தனித்தனி முதுகலை பேராசிரியர்கள்.'
              : 'Every subject is taught by dedicated Post-Graduate specialist teachers (M.Sc., M.Phil., M.Ed., M.Com.) with deep subject mastery.'}
          </p>
        </div>

        {/* ─── TEACHER CARDS GRID (Desktop: 3+2, Mobile: 2-Column Responsive Grid) ─── */}
        <div className="faculty-cards-grid">
          {teachers.map((t, idx) => (
            <div
              key={idx}
              className={`faculty-profile-card spotlight-card tilt-card hover-lift reveal-on-scroll stagger-${idx + 1} ${t.isLead ? 'is-lead-director-card' : ''}`}
            >
              {/* Card Top Row: Avatar on Left + Details on Right */}
              <div className="faculty-card-top-row">
                {/* Circular Avatar with Degree Pill */}
                <div className="faculty-avatar-wrap">
                  <div className="faculty-avatar-circle" style={{ background: t.avatarBg }}>
                    <img
                      src={t.image}
                      alt={t.nameEn}
                      className="faculty-avatar-img"
                      onError={(e) => {
                        e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(t.nameEn)}&background=093f7c&color=ffffff&size=120&bold=true`;
                      }}
                    />
                  </div>

                  <div className="faculty-degree-pill">
                    {t.degrees}
                  </div>
                </div>

                {/* Main Card Content Info */}
                <div className="faculty-card-info">
                  <div className="faculty-names-block">
                    <h3 className="faculty-name-en">
                      {t.nameEn}
                    </h3>
                    <div className="faculty-name-ta">
                      {t.nameTa}
                    </div>
                  </div>

                  <div className="faculty-role-text">
                    {lang === 'ta' ? t.roleTa : t.roleEn}
                  </div>

                  <div className="faculty-subject-badge">
                    {lang === 'ta' ? t.subjectTa : t.subjectEn}
                  </div>
                </div>
              </div>

              <p className="faculty-bio-paragraph">
                {lang === 'ta' ? t.bioTa : t.bioEn}
              </p>

              {/* Call & WhatsApp Action Buttons */}
              <div className="faculty-actions-row">
                <a
                  href={`tel:${t.phone.replace(/\s+/g, '')}`}
                  className="faculty-btn-call magnetic-btn"
                  title={`Call ${t.nameEn}`}
                >
                  <Phone size={14} className="action-icon" />
                  <span>{lang === 'ta' ? 'அழைக்க' : 'Call'}</span>
                </a>

                <a
                  href={`https://wa.me/91${t.phone.replace(/\s+/g, '')}?text=Hello%20${encodeURIComponent(t.nameEn)}%20Sir%20-%20Admission%20Enquiry`}
                  target="_blank"
                  rel="noreferrer"
                  className="faculty-btn-wa magnetic-btn"
                  title={`WhatsApp ${t.nameEn}`}
                >
                  <WhatsAppIcon size={14} />
                  <span>WhatsApp</span>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>

      <style>{`
        .teachers-section-wrapper {
          background: var(--section-alt-bg);
          padding: 80px 0 90px 0;
          border-top: 1px solid var(--section-alt-border);
          border-bottom: 1px solid var(--section-alt-border);
          position: relative;
          overflow: hidden;
        }

        .teachers-header-block {
          text-align: center;
          max-width: 780px;
          margin: 0 auto 46px auto;
        }

        .script-title-wrap {
          margin-bottom: 8px;
        }

        .teachers-script-badge {
          font-size: 2rem;
          font-weight: 700;
          color: var(--primary-blue);
          display: inline-block;
          position: relative;
          isolation: isolate;
        }

        .relative-z {
          position: relative;
          z-index: 2;
        }

        .teachers-brush-line {
          position: absolute;
          bottom: 2px;
          left: 6%;
          width: 88%;
          height: 7px;
          background: #fde047;
          border-radius: 999px;
          z-index: 1;
          opacity: 0.95;
          pointer-events: none;
        }

        .teachers-main-heading {
          font-size: clamp(1.85rem, 3.4vw, 2.75rem);
          font-weight: 900;
          font-family: var(--font-heading);
          color: var(--primary-navy);
          line-height: 1.2;
          letter-spacing: -0.02em;
          margin: 0 0 12px 0;
        }

        .text-highlight-green {
          color: var(--accent-green);
        }

        .teachers-subheading-p {
          font-size: 0.96rem;
          color: #475569;
          line-height: 1.6;
          max-width: 660px;
          margin: 0 auto;
          font-weight: 500;
        }

        /* ─── Faculty Grid (Desktop) ─── */
        .faculty-cards-grid {
          display: flex;
          flex-wrap: wrap;
          justifyContent: center;
          gap: 24px;
          max-width: 1160px;
          margin: 0 auto;
        }

        .faculty-profile-card {
          flex: 0 1 345px;
          width: 100%;
          max-width: 360px;
          min-width: 280px;
          background: #ffffff;
          border: 1.5px solid var(--card-border);
          border-radius: 24px;
          padding: 32px 22px 26px 22px;
          box-shadow: 0 10px 30px var(--theme-glow);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
        }

        .faculty-profile-card:hover {
          transform: translateY(-6px);
          border-color: var(--primary-blue);
          box-shadow: 0 18px 40px var(--theme-glow);
        }

        .faculty-card-top-row {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }

        .faculty-avatar-wrap {
          position: relative;
          margin-bottom: 16px;
          display: inline-block;
        }

        .faculty-avatar-circle {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
          border: 3px solid #ffffff;
        }

        .faculty-avatar-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .faculty-degree-pill {
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--primary-navy);
          color: #ffffff;
          font-size: 0.72rem;
          font-weight: 800;
          padding: 3px 12px;
          border-radius: 999px;
          white-space: nowrap;
          box-shadow: 0 3px 8px var(--theme-glow);
          border: 1.5px solid #ffffff;
        }

        .faculty-card-info {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          flex: 1;
        }

        .faculty-names-block {
          margin-top: 10px;
          margin-bottom: 6px;
        }

        .faculty-name-en {
          font-size: 1.2rem;
          font-weight: 900;
          color: var(--primary-navy);
          margin: 0 0 2px 0;
          font-family: var(--font-heading);
          letter-spacing: 0.01em;
          line-height: 1.2;
        }

        .faculty-name-ta {
          font-size: 0.90rem;
          font-weight: 800;
          color: var(--accent-green);
        }

        .faculty-role-text {
          font-size: 0.80rem;
          font-weight: 700;
          color: #64748b;
          margin-bottom: 10px;
        }

        .faculty-subject-badge {
          background: var(--primary-light-blue);
          color: var(--primary-blue);
          padding: 4px 14px;
          border-radius: 999px;
          font-size: 0.78rem;
          font-weight: 800;
          display: inline-block;
          margin-bottom: 12px;
          border: 1px solid var(--card-border);
        }

        .faculty-bio-paragraph {
          font-size: 0.82rem;
          color: #475569;
          line-height: 1.5;
          margin: 0 0 20px 0;
          flex-grow: 1;
          min-height: 42px;
        }

        .faculty-actions-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          width: 100%;
          margin-top: auto;
        }

        .faculty-btn-call {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          background: #ffffff;
          color: var(--primary-blue);
          border: 1.5px solid var(--primary-blue);
          padding: 8px 12px;
          border-radius: 999px;
          font-size: 0.82rem;
          font-weight: 800;
          text-decoration: none;
          transition: all 0.2s ease;
          box-shadow: 0 2px 6px rgba(0, 86, 179, 0.08);
        }

        .faculty-btn-call:hover {
          background: var(--primary-blue);
          color: #ffffff;
        }

        .faculty-btn-wa {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          background: #ffffff;
          color: #25D366;
          border: 1.5px solid #25D366;
          padding: 8px 12px;
          border-radius: 999px;
          font-size: 0.82rem;
          font-weight: 800;
          text-decoration: none;
          transition: all 0.2s ease;
          box-shadow: 0 2px 6px rgba(37, 211, 102, 0.15);
        }

        .faculty-btn-wa:hover {
          background: #25D366;
          color: #ffffff;
        }

        /* ─── Mobile View: Spacious, Balanced Faculty Cards (Zero Cramping) ─── */
        @media (max-width: 768px) {
          .teachers-section-wrapper {
            padding: 42px 0 48px 0;
          }

          .teachers-header-block {
            margin-bottom: 20px;
          }

          .teachers-main-heading {
            font-size: 1.5rem;
          }

          .teachers-subheading-p {
            font-size: 0.84rem;
          }

          .faculty-cards-grid {
            display: flex !important;
            flex-direction: column !important;
            gap: 14px !important;
            max-width: 100% !important;
          }

          /* ─── Faculty Card Mobile Layout ─── */
          .faculty-profile-card {
            flex: 0 0 auto !important;
            width: 100% !important;
            max-width: 100% !important;
            min-width: 0 !important;
            padding: 16px 14px !important;
            border-radius: 18px !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: stretch !important;
            text-align: left !important;
            gap: 12px !important;
            background: #ffffff !important;
            border: 1.5px solid var(--card-border) !important;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04) !important;
            height: auto !important;
            min-height: 0 !important;
            max-height: none !important;
          }

          .faculty-profile-card.is-lead-director-card {
            background: linear-gradient(135deg, #ffffff 0%, #f0fdf4 100%) !important;
            border: 1.5px solid #86efac !important;
            box-shadow: 0 8px 24px rgba(5, 150, 105, 0.08) !important;
          }

          .faculty-card-top-row {
            display: flex !important;
            flex-direction: row !important;
            align-items: center !important;
            gap: 14px !important;
            width: 100% !important;
          }

          .faculty-avatar-wrap {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            margin-bottom: 0 !important;
            flex-shrink: 0 !important;
          }

          .faculty-avatar-circle {
            width: 66px !important;
            height: 66px !important;
            border: 2.5px solid #ffffff !important;
            box-shadow: 0 4px 14px rgba(0, 0, 0, 0.12) !important;
            border-radius: 50% !important;
          }

          .faculty-profile-card.is-lead-director-card .faculty-avatar-circle {
            width: 70px !important;
            height: 70px !important;
            border: 3px solid #ffffff !important;
            box-shadow: 0 5px 16px rgba(0, 0, 0, 0.14) !important;
          }

          .faculty-degree-pill {
            position: static !important;
            transform: none !important;
            font-size: 0.62rem !important;
            font-weight: 800 !important;
            padding: 2px 8px !important;
            margin-top: 5px !important;
            border-radius: 999px !important;
            white-space: nowrap !important;
            background: #f1f5f9 !important;
            color: #334155 !important;
            border: 1px solid #cbd5e1 !important;
          }

          .faculty-profile-card.is-lead-director-card .faculty-degree-pill {
            background: #dbeafe !important;
            color: #0369a1 !important;
            border: 1px solid #bae6fd !important;
          }

          .faculty-card-info {
            display: flex !important;
            flex-direction: column !important;
            align-items: flex-start !important;
            text-align: left !important;
            flex: 1 !important;
            min-width: 0 !important;
            gap: 3px !important;
          }

          .faculty-names-block {
            margin: 0 !important;
            display: flex !important;
            flex-direction: column !important;
            gap: 1px !important;
          }

          .faculty-name-en {
            font-size: 1.04rem !important;
            font-weight: 900 !important;
            line-height: 1.25 !important;
            color: var(--primary-navy) !important;
            margin: 0 !important;
            letter-spacing: 0.01em !important;
          }

          .faculty-name-ta {
            font-size: 0.85rem !important;
            font-weight: 800 !important;
            color: var(--accent-green) !important;
            line-height: 1.2 !important;
          }

          .faculty-role-text {
            font-size: 0.74rem !important;
            color: #64748b !important;
            font-weight: 600 !important;
            line-height: 1.35 !important;
            margin: 2px 0 3px 0 !important;
          }

          .faculty-subject-badge {
            font-size: 0.70rem !important;
            font-weight: 700 !important;
            padding: 3px 10px !important;
            border-radius: 999px !important;
            margin: 0 !important;
            display: inline-block !important;
            line-height: 1.2 !important;
            background: var(--primary-light-blue) !important;
            color: var(--primary-blue) !important;
            border: 1px solid var(--card-border) !important;
            white-space: normal !important;
            text-overflow: clip !important;
            max-width: 100% !important;
          }

          .faculty-bio-paragraph {
            display: none !important;
          }

          .faculty-actions-row {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 8px !important;
            width: 100% !important;
            margin-top: 2px !important;
            padding-top: 10px !important;
            border-top: 1px dashed #e2e8f0 !important;
          }

          .faculty-btn-call,
          .faculty-btn-wa {
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            padding: 9px 12px !important;
            font-size: 0.82rem !important;
            font-weight: 800 !important;
            border-radius: 10px !important;
            gap: 6px !important;
            width: 100% !important;
          }

          .faculty-btn-call svg,
          .faculty-btn-wa svg {
            width: 14px !important;
            height: 14px !important;
          }
        }

        @media (max-width: 400px) {
          .faculty-profile-card {
            padding: 14px 12px !important;
            gap: 10px !important;
          }
          .faculty-card-top-row {
            gap: 11px !important;
          }
          .faculty-avatar-circle {
            width: 58px !important;
            height: 58px !important;
          }
          .faculty-profile-card.is-lead-director-card .faculty-avatar-circle {
            width: 62px !important;
            height: 62px !important;
          }
          .faculty-degree-pill {
            font-size: 0.58rem !important;
            padding: 2px 6px !important;
          }
          .faculty-name-en {
            font-size: 0.96rem !important;
          }
          .faculty-name-ta {
            font-size: 0.80rem !important;
          }
          .faculty-role-text {
            font-size: 0.70rem !important;
          }
          .faculty-subject-badge {
            font-size: 0.66rem !important;
            padding: 2px 8px !important;
          }
          .faculty-btn-call,
          .faculty-btn-wa {
            padding: 8px 10px !important;
            font-size: 0.76rem !important;
          }
        }
      `}</style>
    </section>
  );
}
