import React, { useState } from 'react';
import { ArrowRight, Sparkles, CheckCircle2, ChevronRight, GraduationCap } from 'lucide-react';
import { coursesDetail } from '../data/coursesDetail';
import CourseModal from './CourseModal';

export default function CoursesSection({ lang = 'ta', onOpenAdmission }) {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedCourse, setSelectedCourse] = useState(null);

  const categories = [
    { id: 'all', labelEn: 'All Courses', labelTa: 'அனைத்து பாடங்கள்', count: 12 },
    { id: 'higher-sec', labelEn: '+1 / +2 Higher Secondary', labelTa: '+1 / +2 மேல்நிலை', count: 6 },
    { id: 'high-school', labelEn: '9th & 10th Board Exam', labelTa: '9 & 10ம் பொதுத்தேர்வு', count: 2 },
    { id: 'college', labelEn: 'College & Engineering', labelTa: 'கல்லூரி & பொறியியல்', count: 2 },
    { id: 'middle-school', labelEn: '6th to 8th Middle School', labelTa: '6 முதல் 8ம் வகுப்பு', count: 2 },
  ];

  const courses = [
    {
      id: 'maths',
      name: 'General Mathematics',
      nameTa: 'பொதுக் கணிதம் (Mathematics)',
      categoryKey: 'higher-sec',
      categoryTa: '9 முதல் 12ம் வகுப்பு வரை',
      categoryEn: '9th to 12th Std',
      categoryBg: '#0284c7',
      highlightEn: '100/100 Blueprint',
      highlightTa: 'சென்டம் பயிற்சி',
      descTa: 'கால்குலஸ், அல்ஜீப்ரா, முக்கோணவியல் மற்றும் அரசு வினாத்தாள் புளூபிரிண்ட் பயிற்சி.',
      descEn: 'Calculus, Algebra, Trigonometry & Board Centum Blueprint.',
      pointsTa: ['அரசு வினாத்தாள் தீர்வுகள்', 'வாராந்திர மாதிரித் தேர்வுகள்', 'நேரடி தனிப்பயிற்சி'],
      pointsEn: ['Past 10-Yr Question Banks', 'Weekly Unit Mock Tests', 'Personal Problem Solving'],
      img: '/images/courses/maths.jpg'
    },
    {
      id: 'bizmath',
      name: 'Business Maths & Statistics',
      nameTa: 'வணிக கணிதம் & புள்ளியியல்',
      categoryKey: 'higher-sec',
      categoryTa: '+2 வணிகவியல் பிரிவு',
      categoryEn: 'Commerce +2',
      categoryBg: '#059669',
      highlightEn: 'Commerce Specialist',
      highlightTa: 'வணிக சிறப்பு',
      descTa: 'நிகழ்தகவு, அணிகள், பயன்பாட்டு புள்ளியியல் மற்றும் சென்டம் உத்திகள்.',
      descEn: 'Probability, Matrices, Applied Statistics & Centum Strategies.',
      pointsTa: ['எளிய சூத்திர முறைகள்', 'வணிக கணித தீர்வுகள்', 'முதுகலை ஆசிரியர் பயிற்சி'],
      pointsEn: ['Formula Shortcuts & Tips', 'Applied Business Numericals', 'PG Specialist Faculty'],
      img: '/images/courses/business_maths.jpg'
    },
    {
      id: 'physics',
      name: 'Physics',
      nameTa: 'இயற்பியல் (Physics)',
      categoryKey: 'higher-sec',
      categoryTa: '+1 / +2 அறிவியல் பிரிவு',
      categoryEn: 'Science +1 / +2',
      categoryBg: '#6366f1',
      highlightEn: 'Formula Derivations',
      highlightTa: 'சூத்திர தருவிப்புகள்',
      descTa: 'ஒளியியல், மின்காந்தவியல், சூத்திர தருவிப்புகள் மற்றும் எண் கணக்கீடுகள்.',
      descEn: 'Optics, Electromagnetism, Formula Derivations & Numericals.',
      pointsTa: ['மின்சுற்று & ஒளியியல் வரைபடம்', 'தேர்வு மாதிரி வினாக்கள்', 'தனித்தனி வகுப்பறைகள்'],
      pointsEn: ['Circuit & Optics Mastery', 'Numerical Problem Drills', 'Separate Boys & Girls Batches'],
      img: '/images/courses/physics.jpg'
    },
    {
      id: 'chemistry',
      name: 'Chemistry',
      nameTa: 'வேதியியல் (Chemistry)',
      categoryKey: 'higher-sec',
      categoryTa: '+1 / +2 அறிவியல் பிரிவு',
      categoryEn: 'Science +1 / +2',
      categoryBg: '#ea580c',
      highlightEn: 'Equation Balancing',
      highlightTa: 'கரிம வேதியியல்',
      descTa: 'கரிம வினைகள், சமன்பாடு சமநிலைப்படுத்தல் மற்றும் வேதி இயக்கவியல்.',
      descEn: 'Organic Reactions, Equation Balancing & Chemical Kinetics.',
      pointsTa: ['கரிம வினைகள் நினைவாற்றல்', 'சமன்பாடு சமநிலை உத்திகள்', 'மு. முருகன் M.Sc வழிகாட்டல்'],
      pointsEn: ['Organic Name Reactions', 'Equation Balancing Shortcuts', 'Guided by Murugan M.Sc'],
      img: '/images/courses/chemistry.jpg'
    },
    {
      id: 'biology',
      name: 'Biology (Botany & Zoology)',
      nameTa: 'உயிரியல் (தாவர & விலங்கியல்)',
      categoryKey: 'higher-sec',
      categoryTa: 'உயிரியல் பிரிவு',
      categoryEn: 'Bio-Science Group',
      categoryBg: '#059669',
      highlightEn: 'Diagram Mastery',
      highlightTa: 'பட விளக்க பயிற்சி',
      descTa: 'பட விளக்க பயிற்சி, வாழ்க்கை செயல்முறைகள் மற்றும் மரபியல் பாடங்கள்.',
      descEn: 'Diagram Practice, Life Processes, Genetics & Scoring Techniques.',
      pointsTa: ['முழுமையான பட வரைதல் பயிற்சி', 'சென்டம் வழிகாட்டி குறிப்புகள்', 'இயக்குநர் நேரடி வகுப்பு'],
      pointsEn: ['Exact Diagram Label Drills', 'High-Scoring Keynotes', "Director's Special Guidance"],
      img: '/images/courses/biology.jpg'
    },
    {
      id: 'accountancy',
      name: 'Accountancy & Commerce',
      nameTa: 'கணக்குப்பதிவியல் & வணிகவியல்',
      categoryKey: 'higher-sec',
      categoryTa: 'வணிகவியல் பிரிவு',
      categoryEn: 'Commerce Group',
      categoryBg: '#0891b2',
      highlightEn: 'Balance Sheet Mastery',
      highlightTa: 'லெட்ஜர் கணக்கியல்',
      descTa: 'நிதி கணக்கியல், ஜர்னல் லெட்ஜர்கள் மற்றும் நிறுவன கணக்குகள்.',
      descEn: 'Financial Accounting, Journal Ledgers & Company Accounts.',
      pointsTa: ['ஜர்னல் & லெட்ஜர் குறுக்குவழி', 'நிறுவன கணக்கியல் தீர்வுகள்', 'திரு. சக்கரவர்த்தி பயிற்சி'],
      pointsEn: ['Journal & Ledger Shortcuts', 'Company Final Accounts', 'Senior Commerce Faculty'],
      img: '/images/courses/accountancy.jpg'
    },
    {
      id: 'compsci',
      name: 'Economics & Computer Science',
      nameTa: 'பொருளாதாரம் & கணினி அறிவியல்',
      categoryKey: 'higher-sec',
      categoryTa: '+1 / +2 விருப்பப் பாடம்',
      categoryEn: '+1 / +2 Electives',
      categoryBg: '#d97706',
      highlightEn: 'Python & Algorithms',
      highlightTa: 'பைதான் கோடிங்',
      descTa: 'பொருளாதார கோட்பாடுகள், பைதான் கோடிங், OOPs மற்றும் அல்காரிதம்கள்.',
      descEn: 'Macro/Micro Economics, Python Coding, OOPs & Algorithms.',
      pointsTa: ['பைதான் செய்முறை பயிற்சி', 'பொருளாதார வரைபட விளக்கங்கள்', 'வார இறுதி மாதிரி தேர்வுகள்'],
      pointsEn: ['Hands-on Python Drills', 'Economic Graph Mastery', 'Weekend Chapter Mock Tests'],
      img: '/images/courses/cs_economics.jpg'
    },
    {
      id: 'languages',
      name: 'Tamil & English Languages',
      nameTa: 'தமிழ் & ஆங்கிலம்',
      categoryKey: 'middle-school',
      categoryTa: 'மொழித் திறன் (6-12)',
      categoryEn: 'Language Skills (6-12)',
      categoryBg: '#2563eb',
      highlightEn: 'Grammar Shortcuts',
      highlightTa: 'இலக்கண குறுக்குவழி',
      descTa: 'இலக்கண குறுக்குவழிகள், கட்டுரை எழுதுதல், உரைநடை & மதிப்பெண் குறிப்புகள்.',
      descEn: 'Grammar Shortcuts, Essay Writing, Prose & High-Scoring Tips.',
      pointsTa: ['தமிழ் இலக்கண & செய்யுள் பயிற்சி', 'ஆங்கில இலக்கண & கட்டுரை பயிற்சி', 'முழு மதிப்பெண் உதவிக்குறிப்பு'],
      pointsEn: ['Tamil Grammar & Poetry Notes', 'English Grammar & Writing Skills', 'Total Marks Booster'],
      img: '/images/courses/languages.jpg'
    },
    {
      id: 'middle',
      name: '6th to 8th (All Subjects)',
      nameTa: '6 முதல் 8ம் வகுப்பு (அனைத்து பாடங்கள்)',
      categoryKey: 'middle-school',
      categoryTa: 'நடுநிலைப் பள்ளி',
      categoryEn: 'Middle School',
      categoryBg: '#7c3aed',
      highlightEn: 'Strong Foundation',
      highlightTa: 'அடிப்படை வலிமை',
      descTa: 'கணிதம், அறிவியல், சமூக அறிவியல் & மொழிகளில் வலுவான அடிப்படை பயிற்சி.',
      descEn: 'Strong foundation in Maths, Science, Social & Languages.',
      pointsTa: ['அனைத்து பாடங்களுக்கும் தினசரி கவனம்', 'வீட்டுப்பாட வழிகாட்டல்', 'ஹோம் டியூஷன் வசதி'],
      pointsEn: ['Daily Attention for All Subjects', 'Homework Completion Support', 'Doorstep Home Tuition Option'],
      img: '/images/courses/middle_school.jpg'
    },
    {
      id: 'tenth',
      name: '9th & 10th Special Care Batch',
      nameTa: '9 & 10ம் வகுப்பு பொதுத்தேர்வு சிறப்பு பிரிவு',
      categoryKey: 'high-school',
      categoryTa: 'பொதுத்தேர்வு சிறப்பு',
      categoryEn: 'Board Exam Special',
      categoryBg: '#dc2626',
      highlightEn: '485/500 Target Batch',
      highlightTa: '485/500 இலக்கு பிரிவு',
      descTa: 'SSLC & CBSE அரசு பொதுத்தேர்வில் 480+ / 500 மதிப்பெண் பெற தீவிர பயிற்சி.',
      descEn: 'SSLC & CBSE Board Exam Preparation for 480+ / 500 Marks.',
      pointsTa: ['கடந்த 10 ஆண்டு வினாத்தாள்கள்', 'மார்ச் தேர்வு இரவு நேர முகாம்', 'மெல்ல கற்போருக்கு சிறப்பு கவனம்'],
      pointsEn: ['Past 10-Year Question Solving', 'March Board Exam Night Camp', 'Individual Slow Learner Care'],
      img: '/images/courses/tenth_special.jpg'
    },
    {
      id: 'engg',
      name: 'Engineering Maths (M1, M2, M3)',
      nameTa: 'பொறியியல் கணிதம் (M1, M2, M3)',
      categoryKey: 'college',
      categoryTa: 'அண்ணா பல்கலைக்கழகம்',
      categoryEn: 'College / Anna Univ',
      categoryBg: '#0284c7',
      highlightEn: 'Arrear Clearance Special',
      highlightTa: 'அரியர் கிளியரன்ஸ்',
      descTa: 'அணிகள், கால்குலஸ், டிஃபெரன்ஷியல் சமன்பாடுகள் & நிகழ்தகவு பயிற்சி.',
      descEn: 'Matrices, Calculus, Differential Equations & Probability.',
      pointsTa: ['M1, M2, M3, TPDE, P&Q', '100% தேர்ச்சி உத்திகள்', 'மாலை & வார இறுதி வகுப்புகள்'],
      pointsEn: ['M1, M2, M3, TPDE & P&Q', '100% Concept Clarity', 'Evening & Weekend Batches'],
      img: '/images/courses/engineering_maths.jpg'
    },
    {
      id: 'diploma',
      name: 'Diploma & Degree Mathematics',
      nameTa: 'டிப்ளமோ & பட்டப்படிப்பு கணிதம்',
      categoryKey: 'college',
      categoryTa: 'பாலிடெக்னிக் / டிகிரி',
      categoryEn: 'Polytechnic & Degree',
      categoryBg: '#00875a',
      highlightEn: 'Semester Success',
      highlightTa: 'செமஸ்டர் தேர்ச்சி',
      descTa: 'பாலிடெக்னிக் M1, M2, B.Sc., B.Com. அலைடு கணித பாடங்களுக்கான பயிற்சி.',
      descEn: 'Polytechnic M1, M2, B.Sc., B.Com. Allied Mathematics Coaching.',
      pointsTa: ['எளிய படிநிலை கணக்கீடுகள்', 'செமஸ்டர் தேர்வு மாதிரி வினாக்கள்', 'தனிநபர் சந்தேக தீர்வு'],
      pointsEn: ['Simplified Step-by-Step Derivations', 'Semester Model Question Bank', 'Individual Doubt Clearance'],
      img: '/images/courses/diploma_maths.jpg'
    }
  ];

  const filteredCourses = activeTab === 'all' 
    ? courses 
    : courses.filter(c => c.categoryKey === activeTab);

  const handleCardClick = (courseName) => {
    const detail = coursesDetail[courseName] || Object.values(coursesDetail).find(c => 
      c.title.toLowerCase().includes(courseName.toLowerCase()) || 
      courseName.toLowerCase().includes(c.title.toLowerCase())
    );
    
    if (detail) {
      setSelectedCourse(detail);
    } else {
      setSelectedCourse(Object.values(coursesDetail)[0]);
    }
  };

  return (
    <section id="courses" className="courses-section-wrapper" style={{
      background: 'var(--section-alt-bg)',
      padding: '85px 0 95px 0',
      borderTop: '1px solid var(--section-alt-border)',
      borderBottom: '1px solid var(--section-alt-border)',
      position: 'relative'
    }}>
      <div className="container">
        
        {/* Section Header */}
        <div 
          className="reveal-on-scroll courses-section-header"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: '20px',
            marginBottom: '32px'
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
                  {lang === 'ta' ? 'எங்கள் வகுப்புகள்' : 'Our Courses'}
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

            <h2 className="courses-main-heading" style={{
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
                  அனைத்து பாடங்களுக்கான <span style={{ color: 'var(--accent-green)' }}>சிறப்பு பயிற்சிகள்</span>
                </>
              ) : (
                <>
                  Comprehensive Tuition & <span style={{ color: 'var(--accent-green)' }}>Specialist Subjects</span>
                </>
              )}
            </h2>
          </div>

          <p className="courses-main-subtext" style={{
            fontSize: '0.96rem',
            color: '#64748b',
            maxWidth: '480px',
            lineHeight: 1.6,
            margin: 0
          }}>
            {lang === 'ta'
              ? 'ஒவ்வொரு பாடத்திற்கும் முறையான பாடத்திட்டம், வாராந்திர அலகு தேர்வுகள் & முதுகலை ஆசிரியர்களின் நேரடி பயிற்சி.'
              : 'Every course includes structured study blueprints, weekend unit tests, and dedicated Post-Graduate faculty support.'}
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="courses-filter-bar reveal-on-scroll">
          {categories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`courses-filter-btn ${isActive ? 'active' : ''}`}
              >
                <span>{lang === 'ta' ? cat.labelTa : cat.labelEn}</span>
                {cat.id !== 'all' && (
                  <span className="filter-count-badge">
                    {cat.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Courses Cards Grid */}
        <div className="courses-image-grid">
          {filteredCourses.map((c, i) => (
            <div
              key={c.id || i}
              onClick={() => handleCardClick(c.name)}
              className={`course-image-card reveal-on-scroll reveal-scale stagger-${(i % 4) + 1} hover-lift`}
            >
              {/* Image Banner */}
              <div className="course-card-img-wrap hover-zoom-container">
                <img
                  src={c.img}
                  alt={c.name}
                  className="course-card-img hover-zoom-img"
                  loading="lazy"
                />
                <div className="course-card-gradient-scrim" />
                
                {/* Single Clean Category Badge - No Overlap */}
                <div
                  className="course-badge-pill"
                  style={{ background: c.categoryBg }}
                >
                  {lang === 'ta' ? c.categoryTa : c.categoryEn}
                </div>
              </div>

              {/* Card Body */}
              <div className="course-card-body">
                
                {/* Highlight Chip inside body above title */}
                <div className="course-highlight-chip">
                  <Sparkles size={12} className="course-sparkle-icon" />
                  <span>{lang === 'ta' ? c.highlightTa : c.highlightEn}</span>
                </div>

                <div className="course-card-title-wrap">
                  <h3 className="course-card-title">
                    {lang === 'ta' ? c.nameTa : c.name}
                  </h3>
                  <div className="course-card-subtitle">
                    {lang === 'ta' ? c.name : c.nameTa}
                  </div>
                </div>

                <p className="course-card-desc">
                  {lang === 'ta' ? c.descTa : c.descEn}
                </p>

                {/* Feature Bullet Points */}
                <div className="course-card-points">
                  {(lang === 'ta' ? c.pointsTa : c.pointsEn).map((pt, idx) => (
                    <div key={idx} className="course-point-item">
                      <CheckCircle2 size={13} className="course-point-icon" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>

                {/* Footer Action - Clean Enrol Button (No View Syllabus Link) */}
                <div className="course-card-footer">
                  <button 
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCardClick(c.name);
                    }}
                    className="course-action-btn"
                  >
                    <span>{lang === 'ta' ? 'விவரம் & சேர்க்கை' : 'Enrol & Details'}</span>
                    <ArrowRight size={14} className="course-btn-arrow" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Course Details Modal */}
      {selectedCourse && (
        <CourseModal
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
          lang={lang}
        />
      )}

      <style>{`
        /* Filter Pills Bar */
        .courses-filter-bar {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 32px;
          overflow-x: auto;
          padding-bottom: 8px;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .courses-filter-bar::-webkit-scrollbar {
          display: none;
        }

        .courses-filter-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 18px;
          border-radius: 999px;
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          color: #475569;
          font-size: 0.88rem;
          font-weight: 700;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.22s ease;
          box-shadow: 0 2px 6px rgba(0,0,0,0.02);
        }

        .courses-filter-btn:hover {
          border-color: var(--primary-blue);
          color: var(--primary-blue);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 77, 153, 0.08);
        }

        .courses-filter-btn.active {
          background: var(--primary-navy);
          border-color: var(--primary-navy);
          color: #ffffff;
          box-shadow: 0 6px 18px rgba(0, 31, 63, 0.22);
          transform: translateY(-2px);
        }

        .filter-count-badge {
          background: rgba(0, 0, 0, 0.07);
          color: inherit;
          font-size: 0.72rem;
          font-weight: 800;
          padding: 2px 7px;
          border-radius: 999px;
        }

        .courses-filter-btn.active .filter-count-badge {
          background: var(--accent-green);
          color: #ffffff;
        }

        /* Desktop & Tablet Grid */
        .courses-image-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
        }

        .course-image-card {
          background: #ffffff;
          border-radius: 20px;
          border: 1.5px solid #e2e8f0;
          overflow: hidden;
          box-shadow: 0 6px 20px rgba(0, 31, 63, 0.04);
          transition: all 0.28s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .course-image-card:hover {
          transform: translateY(-7px);
          border-color: var(--primary-blue);
          box-shadow: 0 18px 36px var(--theme-glow, rgba(0, 77, 153, 0.12));
        }

        .course-card-img-wrap {
          position: relative;
          height: 165px;
          width: 100%;
          overflow: hidden;
          background: #0f172a;
        }

        .course-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .course-image-card:hover .course-card-img {
          transform: scale(1.08);
        }

        .course-card-gradient-scrim {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(15,23,42,0.15) 0%, rgba(15,23,42,0) 45%, rgba(15,23,42,0.45) 100%);
          pointer-events: none;
        }

        .course-badge-pill {
          position: absolute;
          top: 12px;
          left: 12px;
          color: #ffffff;
          font-size: 0.75rem;
          font-weight: 800;
          padding: 4px 11px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.45);
          box-shadow: 0 3px 10px rgba(0,0,0,0.35);
          letter-spacing: 0.01em;
          backdrop-filter: blur(4px);
          z-index: 2;
        }

        .course-card-body {
          padding: 16px 18px 16px 18px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .course-highlight-chip {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          width: fit-content;
          background: #fef3c7;
          color: #92400e;
          border: 1px solid #fde68a;
          padding: 3px 9px;
          border-radius: 999px;
          font-size: 0.72rem;
          font-weight: 800;
          margin-bottom: 8px;
        }

        .course-sparkle-icon {
          color: #d97706;
          flex-shrink: 0;
        }

        .course-card-title-wrap {
          margin-bottom: 8px;
        }

        .course-card-title {
          font-size: 1.05rem;
          font-weight: 900;
          color: var(--primary-navy);
          line-height: 1.25;
          margin: 0 0 3px 0;
          font-family: var(--font-heading);
          letter-spacing: -0.01em;
        }

        .course-card-subtitle {
          font-size: 0.75rem;
          color: var(--primary-blue);
          font-weight: 700;
        }

        .course-card-desc {
          font-size: 0.80rem;
          color: #64748b;
          line-height: 1.45;
          margin: 0 0 12px 0;
        }

        .course-card-points {
          display: flex;
          flex-direction: column;
          gap: 5px;
          margin-bottom: 14px;
          padding: 8px 10px;
          background: #f8fafc;
          border-radius: 10px;
          border: 1px solid #f1f5f9;
        }

        .course-point-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.74rem;
          color: #334155;
          font-weight: 600;
        }

        .course-point-icon {
          color: var(--accent-green);
          flex-shrink: 0;
        }

        .course-card-footer {
          padding-top: 10px;
          border-top: 1px solid #f1f5f9;
          margin-top: auto;
        }

        .course-action-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          background: var(--accent-green-light);
          color: var(--accent-green);
          border: 1.5px solid var(--accent-green);
          padding: 7px 12px;
          border-radius: 10px;
          font-size: 0.82rem;
          font-weight: 800;
          cursor: pointer;
          transition: all 0.22s ease;
        }

        .course-action-btn:hover,
        .course-image-card:hover .course-action-btn {
          background: var(--accent-green);
          color: #ffffff;
          box-shadow: 0 4px 12px rgba(0, 135, 90, 0.25);
        }

        .course-btn-arrow {
          transition: transform 0.2s ease;
        }

        .course-image-card:hover .course-btn-arrow {
          transform: translateX(3px);
        }

        @media (max-width: 1180px) and (min-width: 769px) {
          .courses-image-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 16px !important;
          }
        }

        /* ─── Mobile View: Compact 2-Column Grid Layout (Halves Vertical Scroll) ─── */
        @media (max-width: 768px) {
          .courses-section-wrapper {
            padding: 42px 0 48px 0 !important;
          }
          .courses-section-header {
            margin-bottom: 20px !important;
          }
          .courses-main-heading {
            font-size: 1.5rem !important;
          }
          .courses-main-subtext {
            font-size: 0.84rem !important;
          }
          .courses-filter-bar {
            margin-bottom: 18px !important;
            gap: 6px !important;
          }
          .courses-filter-btn {
            padding: 7px 14px !important;
            font-size: 0.80rem !important;
          }
          .courses-image-grid {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 10px !important;
          }
          .course-image-card {
            border-radius: 16px !important;
          }
          .course-card-img-wrap {
            height: 110px !important;
          }
          .course-badge-pill {
            font-size: 0.65rem !important;
            padding: 2px 7px !important;
            top: 7px !important;
            left: 7px !important;
          }
          .course-card-body {
            padding: 10px 10px !important;
          }
          .course-highlight-chip {
            font-size: 0.65rem !important;
            padding: 2px 6px !important;
            margin-bottom: 4px !important;
            gap: 3px !important;
          }
          .course-highlight-chip svg {
            width: 11px !important;
            height: 11px !important;
          }
          .course-card-title {
            font-size: 0.86rem !important;
            line-height: 1.25 !important;
            margin-bottom: 2px !important;
            word-break: break-word !important;
          }
          .course-card-subtitle {
            font-size: 0.70rem !important;
            margin-bottom: 4px !important;
          }
          .course-card-desc {
            display: none !important;
          }
          .course-card-points {
            padding: 6px 8px !important;
            margin-bottom: 8px !important;
            gap: 4px !important;
            border-radius: 8px !important;
          }
          .course-point-item {
            font-size: 0.68rem !important;
            gap: 4px !important;
          }
          .course-point-item:nth-child(n+3) {
            display: none !important;
          }
          .course-point-item svg {
            width: 12px !important;
            height: 12px !important;
            flex-shrink: 0 !important;
          }
          .course-card-footer {
            padding-top: 6px !important;
            margin-top: auto !important;
          }
          .course-action-btn {
            font-size: 0.76rem !important;
            padding: 7px 10px !important;
            border-radius: 8px !important;
            width: 100% !important;
            justify-content: center !important;
          }
        }

        @media (max-width: 400px) {
          .courses-image-grid {
            gap: 8px !important;
          }
          .course-card-img-wrap {
            height: 98px !important;
          }
          .course-card-body {
            padding: 8px 8px !important;
          }
          .course-card-title {
            font-size: 0.80rem !important;
          }
          .course-card-subtitle {
            font-size: 0.66rem !important;
          }
          .course-point-item {
            font-size: 0.64rem !important;
          }
        }
      `}</style>
    </section>
  );
}
