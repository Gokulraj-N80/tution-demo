import React from 'react';
import { GraduationCap, Award, BookOpen, CheckCircle, Sparkles, UserCheck } from 'lucide-react';
import { tuitionData } from '../data/tuitionData';

export default function FacultySection({ lang }) {
  return (
    <section id="faculty" className="section-padding" style={{ background: '#ffffff' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span className="section-tag">
            {lang === 'ta' ? 'அனுபவமிக்க ஆசிரியர்கள்' : 'Distinguished Faculty'}
          </span>
          <h2 className="section-title">
            {lang === 'ta' ? (
              <>பாட வாரியான <span className="text-gradient">முதுகலை வல்லுநர் ஆசிரியர்கள்</span></>
            ) : (
              <>Learn from <span className="text-gradient">Dedicated Subject Matter Experts</span></>
            )}
          </h2>
          <p className="section-subtitle">
            {lang === 'ta'
              ? 'ஒவ்வொரு பாடத்திற்கும் உயர் கல்வி தகுதியும் (M.Sc., M.Phil., M.Ed., M.Com.) பல வருட அனுபவமும் கொண்ட பேராசிரியர்கள்.'
              : 'Our faculty members bring decades of combined pedagogical expertise, ensuring individual mentoring and exam mastery.'}
          </p>
        </div>

        {/* Top Highlight Feature: Classroom Visual + Founder Vision */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '30px',
          alignItems: 'center',
          marginBottom: '50px',
          background: 'linear-gradient(135deg, #f8fafc 0%, #eff6ff 100%)',
          borderRadius: '24px',
          border: '1.5px solid #dbeafe',
          padding: '30px'
        }} className="faculty-feature-grid">
          
          <div style={{ borderRadius: '18px', overflow: 'hidden', boxShadow: '0 15px 30px -5px rgba(0,0,0,0.1)' }}>
            <img
              src="/images/faculty_classroom.jpg"
              alt="Demo Tuition Faculty in Classroom"
              style={{ width: '100%', height: '320px', objectFit: 'cover', display: 'block' }}
            />
          </div>

          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 12px', background: '#dbeafe', color: '#1e40af', borderRadius: '6px', fontSize: '0.78rem', fontWeight: 800, marginBottom: '12px' }}>
              <UserCheck size={16} />
              <span>FOUNDER & DIRECTOR MENTORSHIP</span>
            </div>
            
            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#1e3a8a', marginBottom: '8px' }}>
              Dr. K. Rajesh <span style={{ fontSize: '1.1rem', color: '#059669', fontWeight: 700 }}>(டாக்டர் K. ராஜேஷ்)</span>
            </h3>
            
            <div style={{
              display: 'inline-block',
              background: '#059669',
              color: '#ffffff',
              padding: '4px 12px',
              borderRadius: '6px',
              fontSize: '0.82rem',
              fontWeight: 800,
              marginBottom: '16px'
            }}>
              M.Sc., M.Phil., Ph.D. • Academic Director & Biology Specialist
            </div>

            <p style={{ color: '#475569', fontSize: '0.98rem', lineHeight: 1.6, marginBottom: '20px' }}>
              {lang === 'ta'
                ? 'மாணவர்களின் திறனை ஆரம்ப நிலையிலேயே கண்டறிந்து, கடினமான பாடங்களையும் மிக எளிய முறையில் புரிய வைத்து 100% தேர்ச்சி பெற வைப்பதே எங்கள் நோக்கம்.'
                : 'Over 15+ years of dedicated academic mentorship helping thousands of students crack board exams and secure centum marks in Science and Mathematics.'}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle size={18} style={{ color: '#059669' }} />
                <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#1e293b' }}>Personalized Doubt Clearing</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle size={18} style={{ color: '#059669' }} />
                <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#1e293b' }}>Blueprint Exam Strategy</span>
              </div>
            </div>
          </div>

        </div>

        {/* Faculty Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px'
        }}>
          {tuitionData.faculty.map((member, idx) => (
            <div
              key={idx}
              className="premium-card"
              style={{
                padding: '28px',
                background: '#ffffff',
                border: '1.5px solid #e2e8f0',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
            >
              <div>
                {/* Top Badge */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: `${member.avatarColor}15`,
                    color: member.avatarColor,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 900,
                    fontSize: '1.2rem',
                    fontFamily: 'var(--font-heading)',
                    border: `1.5px solid ${member.avatarColor}30`
                  }}>
                    {member.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                  </div>
                  <span style={{
                    background: '#f1f5f9',
                    color: '#475569',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    fontSize: '0.74rem',
                    fontWeight: 700
                  }}>
                    {member.badge}
                  </span>
                </div>

                {/* Name */}
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', marginBottom: '4px' }}>
                  {member.name}
                </h3>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#059669', marginBottom: '10px' }}>
                  {member.tamilName}
                </div>

                {/* Qualifications Badge */}
                <div style={{
                  display: 'inline-block',
                  background: '#eff6ff',
                  color: '#1e40af',
                  padding: '4px 10px',
                  borderRadius: '6px',
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  marginBottom: '14px',
                  border: '1px solid #dbeafe'
                }}>
                  {member.qualifications}
                </div>

                {/* Subject Domain */}
                <div style={{
                  padding: '12px',
                  background: '#f8fafc',
                  borderRadius: '10px',
                  border: '1px solid #f1f5f9',
                  marginBottom: '16px'
                }}>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#64748b', fontWeight: 800 }}>
                    Subject Specialization
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f172a', marginTop: '2px' }}>
                    {member.subject}
                  </div>
                </div>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.82rem',
                color: '#64748b',
                fontWeight: 600,
                borderTop: '1px solid #f1f5f9',
                paddingTop: '14px'
              }}>
                <Award size={16} style={{ color: '#d97706' }} />
                <span>{member.experience}</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (min-width: 900px) {
          .faculty-feature-grid {
            grid-template-columns: 0.9fr 1.1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
