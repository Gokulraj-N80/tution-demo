import React, { useState } from 'react';
import { Calculator, CheckCircle2, Sparkles, BookOpen, Clock, Calendar, ArrowRight } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { tuitionData } from '../data/tuitionData';

export default function CourseFinder({ lang, onOpenAdmission }) {
  const [selectedGrade, setSelectedGrade] = useState('10th');
  const [selectedStream, setSelectedStream] = useState('maths_science');
  const [learningMode, setLearningMode] = useState('center');

  const gradeOptions = [
    { id: '6to8', label: '6th - 8th Std' },
    { id: '9th', label: '9th Std' },
    { id: '10th', label: '10th Board' },
    { id: '11th', label: '11th Std' },
    { id: '12th', label: '12th Board' },
    { id: 'engg', label: 'Engineering Maths' },
    { id: 'diploma', label: 'Diploma / Degree' }
  ];

  const getRecommendations = () => {
    switch (selectedGrade) {
      case '10th':
        return {
          plan: '10th Board Centum Mastery Program',
          hours: '6 Days / Week (Evening & Weekend Mocks)',
          subjects: ['General Maths', 'Science (Phy, Chem, Bio)', 'Social Science', 'English & Tamil'],
          perks: ['Special Care for Slow Learners', 'Formula Worksheets', 'Previous 10 Years Question Bank', 'March Night Study Camp'],
          target: 'Target Score: 480+ / 500'
        };
      case '12th':
        return {
          plan: '12th HSC / CBSE Board Elite Ranker Batch',
          hours: '6 Days / Week + Weekend Test Series',
          subjects: selectedStream === 'commerce' 
            ? ['Accountancy', 'Commerce', 'Economics', 'Business Maths / CS']
            : ['General Maths', 'Physics', 'Chemistry', 'Biology / Computer Science'],
          perks: ['Subject Specialist PG Faculty', 'Chapterwise Blueprint Revision', 'March Exam Night Stay Camp', '100% Pass Guarantee'],
          target: 'Target Score: 560+ / 600'
        };
      case 'engg':
        return {
          plan: 'Anna University Engineering Mathematics Fast-Track',
          hours: 'Weekend Batches (Sat & Sun) + Weekday Evenings',
          subjects: ['M1, M2, M3, M4', 'Transforms & PDE (TPDE)', 'Probability & Statistics', 'Discrete Mathematics'],
          perks: ['Step-by-step Derivations', 'Previous Anna Univ Question Solutions', 'Formula Shortcuts', 'Arrear Clearance Guarantee'],
          target: 'Target: "O" / "A+" Grade'
        };
      case 'diploma':
        return {
          plan: 'Diploma & Degree Mathematics & Statistics Program',
          hours: 'Flexible Timings (Morning & Evening)',
          subjects: ['Diploma Maths I, II, III', 'Degree Business Statistics', 'Operations Research'],
          perks: ['Simplest Concept Explanations', 'Individual Doubt Sessions', 'Exam-oriented Question Bank'],
          target: 'High Scoring & Arrear Clearance'
        };
      default:
        return {
          plan: 'Middle School High-Performance Foundation',
          hours: '5 Days / Week',
          subjects: ['Maths, Science, English, Social, Tamil'],
          perks: ['Daily Homework Assistance', 'Basic Concept Strengthening', 'Handwriting & Speed Improvement'],
          target: 'Top School Rank'
        };
    }
  };

  const rec = getRecommendations();

  const handleWhatsAppBooking = () => {
    const text = `Hi Demo Tuition Centre! I checked the Course Roadmap for *${rec.plan}* (${learningMode === 'center' ? 'Center Batch' : 'Home Tuition'}). Please provide admission batch timings and fee details.`;
    window.open(`https://wa.me/${tuitionData.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section className="section-padding" style={{ background: '#ffffff', borderTop: '1px solid #e2e8f0' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span className="section-tag">
            {lang === 'ta' ? 'வகுப்பு & பாட வழிகாட்டி' : 'Interactive Planner'}
          </span>
          <h2 className="section-title">
            {lang === 'ta' ? (
              <>உங்கள் வகுப்பிற்கான <span className="text-gradient">சிறப்பு பயிற்சி திட்டத்தை</span> தேர்வு செய்க</>
            ) : (
              <>Find the Perfect <span className="text-gradient">Study Roadmap</span> for Your Target</>
            )}
          </h2>
          <p className="section-subtitle">
            {lang === 'ta'
              ? 'உங்கள் வகுப்பு மற்றும் பாடங்களை தேர்ந்தெடுத்து சிறந்த கற்றல் அட்டவணையை கண்டறியுங்கள்.'
              : 'Select your grade and preferred subject stream to view customized batch schedules and benefits.'}
          </p>
        </div>

        {/* Interactive Box */}
        <div className="premium-card" style={{
          padding: '36px',
          background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
          border: '1.5px solid #cbd5e1'
        }}>
          
          {/* Step 1: Grade Selection */}
          <div style={{ marginBottom: '28px' }}>
            <label style={{ fontSize: '0.92rem', fontWeight: 800, color: '#0f172a', display: 'block', marginBottom: '12px' }}>
              1. Select Student Grade / Standard:
            </label>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px'
            }}>
              {gradeOptions.map((g) => (
                <button
                  key={g.id}
                  onClick={() => setSelectedGrade(g.id)}
                  style={{
                    padding: '10px 18px',
                    borderRadius: '10px',
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    background: selectedGrade === g.id ? '#1e3a8a' : '#ffffff',
                    color: selectedGrade === g.id ? '#ffffff' : '#475569',
                    border: selectedGrade === g.id ? '1.5px solid #1e3a8a' : '1.5px solid #cbd5e1',
                    boxShadow: selectedGrade === g.id ? '0 4px 10px rgba(30, 58, 138, 0.2)' : 'none',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {g.label}
                </button>
              ))}
            </div>
          </div>

          {/* Stream Selector for 11th & 12th */}
          {(selectedGrade === '11th' || selectedGrade === '12th') && (
            <div style={{ marginBottom: '28px' }}>
              <label style={{ fontSize: '0.92rem', fontWeight: 800, color: '#0f172a', display: 'block', marginBottom: '12px' }}>
                2. Select Group Stream:
              </label>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => setSelectedStream('maths_science')}
                  style={{
                    padding: '10px 18px',
                    borderRadius: '8px',
                    fontSize: '0.86rem',
                    fontWeight: 700,
                    background: selectedStream === 'maths_science' ? '#059669' : '#ffffff',
                    color: selectedStream === 'maths_science' ? '#ffffff' : '#475569',
                    border: '1.5px solid',
                    borderColor: selectedStream === 'maths_science' ? '#059669' : '#cbd5e1'
                  }}
                >
                  Maths - Biology / Computer Science Group
                </button>
                <button
                  onClick={() => setSelectedStream('commerce')}
                  style={{
                    padding: '10px 18px',
                    borderRadius: '8px',
                    fontSize: '0.86rem',
                    fontWeight: 700,
                    background: selectedStream === 'commerce' ? '#059669' : '#ffffff',
                    color: selectedStream === 'commerce' ? '#ffffff' : '#475569',
                    border: '1.5px solid',
                    borderColor: selectedStream === 'commerce' ? '#059669' : '#cbd5e1'
                  }}
                >
                  Commerce - Accountancy - Economics Group
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Coaching Mode */}
          <div style={{ marginBottom: '32px' }}>
            <label style={{ fontSize: '0.92rem', fontWeight: 800, color: '#0f172a', display: 'block', marginBottom: '12px' }}>
              {selectedGrade === '11th' || selectedGrade === '12th' ? '3.' : '2.'} Preferred Learning Mode:
            </label>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <button
                onClick={() => setLearningMode('center')}
                style={{
                  padding: '10px 18px',
                  borderRadius: '8px',
                  fontSize: '0.86rem',
                  fontWeight: 700,
                  background: learningMode === 'center' ? '#2563eb' : '#ffffff',
                  color: learningMode === 'center' ? '#ffffff' : '#475569',
                  border: '1.5px solid',
                  borderColor: learningMode === 'center' ? '#2563eb' : '#cbd5e1'
                }}
              >
                🏢 Center Batch (Main / City Campus)
              </button>
              <button
                onClick={() => setLearningMode('home')}
                style={{
                  padding: '10px 18px',
                  borderRadius: '8px',
                  fontSize: '0.86rem',
                  fontWeight: 700,
                  background: learningMode === 'home' ? '#2563eb' : '#ffffff',
                  color: learningMode === 'home' ? '#ffffff' : '#475569',
                  border: '1.5px solid',
                  borderColor: learningMode === 'home' ? '#2563eb' : '#cbd5e1'
                }}
              >
                🏡 1-on-1 Doorstep Home Tuition
              </button>
            </div>
          </div>

          {/* Generated Plan Recommendation Box */}
          <div style={{
            background: 'linear-gradient(135deg, #eff6ff 0%, #ecfdf5 100%)',
            border: '2px solid #bfdbfe',
            borderRadius: '16px',
            padding: '28px'
          }}>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '15px',
              marginBottom: '20px',
              paddingBottom: '16px',
              borderBottom: '1.5px solid #dbeafe'
            }}>
              <div>
                <span style={{
                  background: '#1e3a8a',
                  color: '#ffffff',
                  padding: '4px 10px',
                  borderRadius: '6px',
                  fontSize: '0.74rem',
                  fontWeight: 800,
                  textTransform: 'uppercase'
                }}>
                  RECOMMENDED BATCH
                </span>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#1e3a8a', marginTop: '6px' }}>
                  {rec.plan}
                </h3>
              </div>

              <span style={{
                background: '#fef3c7',
                color: '#92400e',
                border: '1px solid #fcd34d',
                padding: '6px 14px',
                borderRadius: '8px',
                fontSize: '0.88rem',
                fontWeight: 800
              }}>
                {rec.target}
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px', marginBottom: '24px' }} className="plan-summary-grid">
              <div>
                <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#475569', textTransform: 'uppercase', marginBottom: '8px' }}>
                  Subjects Covered:
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {rec.subjects.map((s, i) => (
                    <span
                      key={i}
                      style={{
                        background: '#ffffff',
                        border: '1px solid #cbd5e1',
                        padding: '6px 12px',
                        borderRadius: '6px',
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        color: '#1e293b'
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#475569', textTransform: 'uppercase', marginBottom: '8px' }}>
                  Key Program Inclusions:
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '8px' }}>
                  {rec.perks.map((p, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.84rem', color: '#1e3a8a', fontWeight: 600 }}>
                      <CheckCircle2 size={16} style={{ color: '#059669', flexShrink: 0 }} />
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '16px',
              paddingTop: '16px',
              borderTop: '1px solid #dbeafe'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#475569', fontSize: '0.88rem', fontWeight: 600 }}>
                <Clock size={18} style={{ color: '#2563eb' }} />
                <span>{rec.hours}</span>
              </div>

              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <button
                  onClick={handleWhatsAppBooking}
                  className="btn-emerald"
                  style={{ padding: '10px 20px', fontSize: '0.88rem' }}
                >
                  <WhatsAppIcon size={16} />
                  <span>Get Fee & Timings on WhatsApp</span>
                </button>

                <button
                  onClick={onOpenAdmission}
                  className="btn-primary"
                  style={{ padding: '10px 20px', fontSize: '0.88rem' }}
                >
                  <Sparkles size={16} />
                  <span>Book Free Demo Class</span>
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media (min-width: 768px) {
          .plan-summary-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
