import React from 'react';
import { MapPin, Phone, Mail, Navigation, Home, CheckCircle2, Clock } from 'lucide-react';
import { tuitionData } from '../data/tuitionData';

export default function BranchLocations({ lang, onOpenAdmission }) {
  return (
    <section id="branches" className="section-padding" style={{ background: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span className="section-tag">
            {lang === 'ta' ? 'எங்கள் கிளைகள்' : 'Branch Network'}
          </span>
          <h2 className="section-title">
            {lang === 'ta' ? (
              <>உங்கள் பகுதியில் அமைந்துள்ள <span className="text-gradient">எங்கள் கிளைகள்</span></>
            ) : (
              <>Visit Our Branches Across <span className="text-gradient">Chennai</span></>
            )}
          </h2>
          <p className="section-subtitle">
            {lang === 'ta'
              ? 'முதன்மை மற்றும் நகர கிளைகளில் அமைந்துள்ள அதிநவீன வகுப்பறைகள்.'
              : 'Centrally located centres with separate girls and boys batch halls, well-equipped libraries, and home tutoring across Chennai.'}
          </p>
        </div>

        {/* Branches Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '28px',
          marginBottom: '40px'
        }}>
          {tuitionData.branches.map((branch) => (
            <div
              key={branch.id}
              className="premium-card"
              style={{
                padding: '32px',
                background: '#ffffff',
                border: branch.isMain ? '2px solid #3b82f6' : '1.5px solid #e2e8f0',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
            >
              {branch.isMain && (
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  background: 'linear-gradient(135deg, #1e3a8a, #2563eb)',
                  color: '#ffffff',
                  padding: '4px 10px',
                  borderRadius: '6px',
                  fontSize: '0.72rem',
                  fontWeight: 800
                }}>
                  3RD NEW BRANCH
                </div>
              )}

              <div>
                {/* Branch Icon & Title */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '18px' }}>
                  <div style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '14px',
                    background: branch.isMain ? '#eff6ff' : '#ecfdf5',
                    color: branch.isMain ? '#1e40af' : '#059669',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(0,0,0,0.05)'
                  }}>
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a' }}>
                      {branch.name[lang] || branch.name.en}
                    </h3>
                    <div style={{ fontSize: '0.82rem', color: '#64748b', fontWeight: 600 }}>
                      Chennai, Tamil Nadu
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div style={{
                  padding: '16px',
                  background: '#f8fafc',
                  borderRadius: '12px',
                  border: '1px solid #e2e8f0',
                  marginBottom: '20px'
                }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: '#64748b', marginBottom: '4px' }}>
                    Full Address / முகவரி
                  </div>
                  <p style={{ fontSize: '0.92rem', color: '#1e293b', fontWeight: 600, lineHeight: 1.5 }}>
                    {branch.address[lang] || branch.address.en}
                  </p>
                </div>

                {/* Features of this branch */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: '#334155' }}>
                    <CheckCircle2 size={16} style={{ color: '#059669' }} />
                    <span>Separate Girls & Boys Classrooms</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: '#334155' }}>
                    <CheckCircle2 size={16} style={{ color: '#059669' }} />
                    <span>State Board & CBSE Batches</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: '#334155' }}>
                    <CheckCircle2 size={16} style={{ color: '#059669' }} />
                    <span>Engineering Maths & Diploma Coaching</span>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '10px',
                borderTop: '1px solid #f1f5f9',
                paddingTop: '18px'
              }}>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(branch.mapQuery)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                  style={{
                    padding: '10px',
                    fontSize: '0.85rem',
                    justifyContent: 'center'
                  }}
                >
                  <Navigation size={15} style={{ color: '#2563eb' }} />
                  <span>Get Directions</span>
                </a>

                <a
                  href={`tel:${tuitionData.phones[0]}`}
                  className="btn-primary"
                  style={{
                    padding: '10px',
                    fontSize: '0.85rem',
                    justifyContent: 'center'
                  }}
                >
                  <Phone size={15} />
                  <span>Call Branch</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Home Tuition Notice Banner */}
        <div style={{
          background: '#ffffff',
          borderRadius: '20px',
          border: '1.5px solid #fed7aa',
          padding: '28px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px',
          boxShadow: 'var(--shadow-md)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '16px',
              background: '#fff7ed',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ea580c',
              flexShrink: 0
            }}>
              <Home size={28} />
            </div>
            <div>
              <div style={{
                display: 'inline-block',
                background: '#ffedd5',
                color: '#9a3412',
                padding: '2px 8px',
                borderRadius: '4px',
                fontSize: '0.72rem',
                fontWeight: 800,
                marginBottom: '4px'
              }}>
                DOORSTEP SERVICE
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a' }}>
                {lang === 'ta' ? 'வீட்டுக்கே வந்து கற்பிக்கும் வசதி (Home Tuition)' : 'Home Tuition Service Available Across Chennai'}
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#64748b' }}>
                {lang === 'ta'
                  ? 'தனிப்பட்ட 1-on-1 கவனம் பெற உங்கள் இல்லத்திற்கே அனுபவ ஆசிரியர்கள் வருகை தருகின்றனர்.'
                  : 'Prefer 1-on-1 personalized tutoring at your residence? Our verified tutors cover all central and surrounding localities across Chennai.'}
              </p>
            </div>
          </div>

          <button
            onClick={onOpenAdmission}
            className="btn-gold"
            style={{ padding: '12px 24px', fontSize: '0.92rem' }}
          >
            <span>Request Home Tutor</span>
          </button>
        </div>

      </div>
    </section>
  );
}
