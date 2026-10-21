import React, { useState } from 'react';
import { BookOpen, Calculator, Atom, FileText, Binary, Laptop, Languages, Check, ArrowRight, Sparkles } from 'lucide-react';
import { tuitionData } from '../data/tuitionData';

export default function CourseCatalog({ lang, onOpenAdmission }) {
  const [activeTab, setActiveTab] = useState(0);

  const subjectIcons = {
    "General Mathematics": <Calculator size={18} style={{ color: '#2563eb' }} />,
    "Business Mathematics & Statistics": <Calculator size={18} style={{ color: '#059669' }} />,
    "Physics": <Atom size={18} style={{ color: '#7c3aed' }} />,
    "Chemistry": <Atom size={18} style={{ color: '#ea580c' }} />,
    "Biology": <Atom size={18} style={{ color: '#16a34a' }} />,
    "Computer Science": <Laptop size={18} style={{ color: '#0284c7' }} />,
    "Accountancy": <FileText size={18} style={{ color: '#0d9488' }} />,
    "Commerce": <FileText size={18} style={{ color: '#b45309' }} />,
    "Economics": <FileText size={18} style={{ color: '#9333ea' }} />,
    "Tamil & English": <Languages size={18} style={{ color: '#dc2626' }} />,
    "Engineering Mathematics (M1, M2, M3, M4)": <Binary size={18} style={{ color: '#1d4ed8' }} />,
    "Transforms & Partial Differential Equations (TPDE)": <Binary size={18} style={{ color: '#0891b2' }} />,
    "Probability & Statistics (P&S, P&Q)": <Calculator size={18} style={{ color: '#059669' }} />,
    "Discrete Mathematics": <Binary size={18} style={{ color: '#4338ca' }} />,
    "Diploma Mathematics (I, II, III)": <Calculator size={18} style={{ color: '#d97706' }} />,
    "Degree Mathematics & Statistics": <Calculator size={18} style={{ color: '#2563eb' }} />
  };

  return (
    <section id="courses" className="section-padding" style={{ background: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '45px' }}>
          <span className="section-tag">
            {lang === 'ta' ? 'பாடத்திட்டம் & வகுப்புகள்' : 'Courses & Subjects'}
          </span>
          <h2 className="section-title">
            {lang === 'ta' ? (
              <>அனைத்து வகுப்புகளுக்கும் <span className="text-gradient">சிறப்பு பாடப்பிரிவுகள்</span></>
            ) : (
              <>Comprehensive Coaching from <span className="text-gradient">6th to +2 & Degree</span></>
            )}
          </h2>
          <p className="section-subtitle">
            {lang === 'ta'
              ? 'தமிழ்நாடு ஸ்டேட் போர்டு & CBSE பாடத்திட்டம், டிப்ளமோ மற்றும் அண்ணா பல்கலைக்கழக பொறியியல் கணிதம்.'
              : 'Full syllabus mastery with previous years question paper discussions, daily formula test & doubt clearing sessions.'}
          </p>
        </div>

        {/* Category Tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '10px',
          marginBottom: '35px'
        }}>
          {tuitionData.courses.map((course, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                style={{
                  padding: '12px 22px',
                  borderRadius: '999px',
                  fontSize: '0.92rem',
                  fontWeight: 700,
                  background: isActive ? 'var(--primary-gradient)' : '#ffffff',
                  color: isActive ? '#ffffff' : '#475569',
                  border: isActive ? '1px solid #1e3a8a' : '1px solid #cbd5e1',
                  boxShadow: isActive ? '0 8px 16px rgba(37, 99, 235, 0.25)' : 'none',
                  transition: 'all 0.2s ease'
                }}
              >
                {course.category}
              </button>
            );
          })}
        </div>

        {/* Selected Tab Content Detail */}
        {tuitionData.courses[activeTab] && (
          <div className="premium-card" style={{
            padding: '36px',
            background: '#ffffff',
            border: '1.5px solid #dbeafe',
            boxShadow: '0 20px 40px -15px rgba(30, 58, 138, 0.08)'
          }}>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '15px',
              paddingBottom: '24px',
              borderBottom: '1.5px solid #f1f5f9',
              marginBottom: '28px'
            }}>
              <div>
                <span style={{
                  display: 'inline-block',
                  background: '#fef3c7',
                  color: '#92400e',
                  padding: '4px 12px',
                  borderRadius: '6px',
                  fontSize: '0.78rem',
                  fontWeight: 800,
                  marginBottom: '8px'
                }}>
                  {tuitionData.courses[activeTab].tag}
                </span>
                <h3 style={{ fontSize: '1.6rem', color: '#1e3a8a', fontWeight: 800 }}>
                  {tuitionData.courses[activeTab].category}
                </h3>
                <p style={{ color: '#059669', fontWeight: 700, fontSize: '0.95rem', marginTop: '4px' }}>
                  {tuitionData.courses[activeTab].tamilCategory}
                </p>
              </div>

              {/* Boards Badges */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {tuitionData.courses[activeTab].boards.map((board, bIdx) => (
                  <span
                    key={bIdx}
                    style={{
                      background: '#eff6ff',
                      color: '#1e40af',
                      padding: '6px 14px',
                      borderRadius: '8px',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      border: '1px solid #bfdbfe'
                    }}
                  >
                    {board}
                  </span>
                ))}
              </div>
            </div>

            {/* Subjects Grid */}
            <div style={{ marginBottom: '30px' }}>
              <h4 style={{ fontSize: '1.1rem', color: '#0f172a', fontWeight: 800, marginBottom: '16px' }}>
                {lang === 'ta' ? 'கற்பிக்கப்படும் பாடங்கள்' : 'Subjects Covered:'}
              </h4>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                gap: '14px'
              }}>
                {tuitionData.courses[activeTab].subjects.map((sub, sIdx) => (
                  <div
                    key={sIdx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '14px 18px',
                      background: '#f8fafc',
                      borderRadius: '12px',
                      border: '1px solid #e2e8f0',
                      transition: 'border-color 0.2s ease, background 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#93c5fd';
                      e.currentTarget.style.background = '#ffffff';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#e2e8f0';
                      e.currentTarget.style.background = '#f8fafc';
                    }}
                  >
                    <div style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      background: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                      flexShrink: 0
                    }}>
                      {subjectIcons[sub] || <BookOpen size={18} style={{ color: '#2563eb' }} />}
                    </div>
                    <span style={{ fontSize: '0.94rem', fontWeight: 700, color: '#1e293b' }}>
                      {sub}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Special Highlights Bar */}
            <div style={{
              background: '#fffbeb',
              border: '1px solid #fde68a',
              borderRadius: '14px',
              padding: '18px 24px',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '16px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Sparkles size={20} style={{ color: '#d97706', flexShrink: 0 }} />
                <span style={{ fontSize: '0.92rem', color: '#92400e', fontWeight: 700 }}>
                  {tuitionData.courses[activeTab].features}
                </span>
              </div>

              <button
                onClick={onOpenAdmission}
                className="btn-primary"
                style={{ padding: '10px 20px', fontSize: '0.88rem' }}
              >
                <span>{lang === 'ta' ? 'சேர்க்கை விவரம் கேட்க' : 'Enquire for this Class'}</span>
                <ArrowRight size={15} />
              </button>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
