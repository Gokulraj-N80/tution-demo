import React, { useState } from 'react';
import { Star, MessageSquareQuote, ChevronDown, ChevronUp, HelpCircle, CheckCircle2 } from 'lucide-react';
import { tuitionData } from '../data/tuitionData';

export default function TestimonialsFAQ({ lang }) {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section className="section-padding" style={{ background: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
      <div className="container">
        
        {/* Testimonials Section */}
        <div style={{ textAlign: 'center', marginBottom: '45px' }}>
          <span className="section-tag">
            {lang === 'ta' ? 'பெற்றோர்கள் & மாணவர்கள் கருத்து' : 'Success Stories'}
          </span>
          <h2 className="section-title">
            {lang === 'ta' ? (
              <>எங்கள் மாணவர்களின் <span className="text-gradient">வெற்றி அனுபவங்கள்</span></>
            ) : (
              <>What Parents & Students <span className="text-gradient">Say About Us</span></>
            )}
          </h2>
          <p className="section-subtitle">
            Real feedback from proud students and parents who achieved their academic dreams with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
          marginBottom: '70px'
        }}>
          {tuitionData.testimonials.map((t, idx) => (
            <div
              key={idx}
              className="premium-card"
              style={{
                padding: '28px',
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <div style={{ display: 'flex', gap: '3px' }}>
                    {[...Array(t.rating)].map((_, rIdx) => (
                      <Star key={rIdx} size={17} style={{ color: '#f59e0b', fill: '#f59e0b' }} />
                    ))}
                  </div>
                  <MessageSquareQuote size={24} style={{ color: '#cbd5e1' }} />
                </div>

                <p style={{
                  fontSize: '0.94rem',
                  color: '#334155',
                  lineHeight: 1.6,
                  fontStyle: 'italic',
                  marginBottom: '20px'
                }}>
                  "{t.content}"
                </p>
              </div>

              <div style={{
                borderTop: '1px solid #f1f5f9',
                paddingTop: '14px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #1e3a8a, #059669)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '1rem'
                }}>
                  {t.name[0]}
                </div>
                <div>
                  <div style={{ fontSize: '0.96rem', fontWeight: 800, color: '#0f172a' }}>
                    {t.name}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#059669', fontWeight: 700 }}>
                    {t.class} • {t.branch}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '35px' }}>
            <span className="section-tag">
              {lang === 'ta' ? 'அடிக்கடி கேட்கப்படும் கேள்விகள்' : 'Got Questions?'}
            </span>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a' }}>
              Frequently Asked Questions (FAQ)
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {tuitionData.faq.map((item, fIdx) => {
              const isOpen = openFaq === fIdx;
              return (
                <div
                  key={fIdx}
                  style={{
                    background: '#ffffff',
                    borderRadius: '14px',
                    border: isOpen ? '1.5px solid #3b82f6' : '1px solid #e2e8f0',
                    overflow: 'hidden',
                    transition: 'all 0.2s ease',
                    boxShadow: isOpen ? '0 10px 20px -5px rgba(37, 99, 235, 0.1)' : 'var(--shadow-sm)'
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : fIdx)}
                    style={{
                      width: '100%',
                      padding: '20px 24px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      textAlign: 'left',
                      background: isOpen ? '#f8fafc' : '#ffffff'
                    }}
                  >
                    <span style={{ fontSize: '1.02rem', fontWeight: 700, color: '#0f172a' }}>
                      {item.q[lang] || item.q.en}
                    </span>
                    <div style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: isOpen ? '#eff6ff' : '#f1f5f9',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      color: isOpen ? '#2563eb' : '#64748b'
                    }}>
                      {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </div>
                  </button>

                  {isOpen && (
                    <div style={{
                      padding: '0 24px 20px 24px',
                      background: '#f8fafc',
                      color: '#475569',
                      fontSize: '0.94rem',
                      lineHeight: 1.6,
                      borderTop: '1px solid #f1f5f9'
                    }}>
                      {item.a[lang] || item.a.en}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
