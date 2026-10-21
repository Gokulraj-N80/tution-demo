import React from 'react';
import { Moon, Sparkles, Clock, Shield, Coffee, HelpCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { tuitionData } from '../data/tuitionData';

export default function NightCampSection({ lang, onOpenAdmission }) {
  const campBenefits = [
    {
      title: lang === 'ta' ? 'ஆசிரியர்களின் நேரடி வழிகாட்டல்' : 'Full Night Teacher Presence',
      desc: lang === 'ta' ? 'இரவு முழுவதும் ஆசிரியர்கள் உடனிருந்து சந்தேகங்களை தீர்த்து வைப்பர்.' : 'Faculty members available 24/7 during camp to resolve complex numericals and doubts immediately.'
    },
    {
      title: lang === 'ta' ? 'அமைதியான நூலக சூழல்' : 'Distraction-Free Quiet Ambiance',
      desc: lang === 'ta' ? 'வீட்டு கவனச்சிதறல்கள் இன்றி முழு கவனத்துடன் படிக்கும் வசதி.' : 'Equipped study tables, proper lighting, power backup, and strict academic discipline.'
    },
    {
      title: lang === 'ta' ? 'மாதிரி வினாத்தாள் பயிற்சிகள்' : 'Real-Time Model Exam Mock Drills',
      desc: lang === 'ta' ? 'கடந்த 10 வருட அரசு பொதுத்தேர்வு வினாத்தாள்கள் பயிற்சி.' : 'Timed mock test solving from 10:00 PM to midnight with instant correction.'
    },
    {
      title: lang === 'ta' ? 'பாதுகாப்பு & சிற்றுண்டி வசதி' : 'Safety, Refreshments & Care',
      desc: lang === 'ta' ? 'பெற்றோர்கள் நம்பகத்தன்மைக்கு முழு பாதுகாப்பு மற்றும் சூடான தேநீர்/சிற்றுண்டி.' : 'CCTV secured premises, separate wings for boys and girls, and timely healthy refreshments.'
    }
  ];

  return (
    <section style={{
      padding: '80px 0',
      background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)',
      color: '#ffffff',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '10%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '40px',
          alignItems: 'center'
        }} className="camp-grid">

          {/* Left Column: Camp Info */}
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '999px',
              background: 'rgba(245, 158, 11, 0.2)',
              border: '1px solid rgba(245, 158, 11, 0.4)',
              color: '#fbbf24',
              fontSize: '0.82rem',
              fontWeight: 800,
              marginBottom: '16px'
            }}>
              <Moon size={16} />
              <span>
                {lang === 'ta' ? 'மார்ச் பொதுத்தேர்வு சிறப்பு முகாம்' : 'MARCH BOARD EXAM NIGHT CAMP'}
              </span>
            </div>

            <h2 style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.2,
              marginBottom: '18px'
            }}>
              {lang === 'ta' ? (
                <>தேர்வு நேரங்களில் <span style={{ color: '#38bdf8' }}>இரவு தங்கி படிக்கும்</span> பிரத்யேக வசதி!</>
              ) : (
                <>Intensive <span style={{ color: '#38bdf8' }}>Overnight Study Camps</span> for Maximum Board Exam Ranks</>
              )}
            </h2>

            <p style={{
              color: '#94a3b8',
              fontSize: '1.05rem',
              lineHeight: 1.6,
              marginBottom: '30px'
            }}>
              {lang === 'ta'
                ? 'பிப்ரவரி மற்றும் மார்ச் மாதங்களில் 10 மற்றும் 12 ஆம் வகுப்பு பொதுத்தேர்வு எழுதும் மாணவர்களுக்கு சிறப்பு இரவு தங்கி படிக்கும் முகாம். உங்கள் பிள்ளைகளின் மதிப்பெண்களை உயர்த்தும் உறுதிமிக்க திட்டம்!'
                : 'A game-changing initiative by Demo Tuition Centre designed specifically for 10th & 12th board candidates to eliminate exam fear, revise complete blueprints, and secure centums.'}
            </p>

            {/* Benefits Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '16px',
              marginBottom: '35px'
            }}>
              {campBenefits.map((b, i) => (
                <div
                  key={i}
                  style={{
                    padding: '18px',
                    borderRadius: '14px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <CheckCircle2 size={18} style={{ color: '#34d399' }} />
                    <div style={{ fontSize: '0.96rem', fontWeight: 800, color: '#ffffff' }}>
                      {b.title}
                    </div>
                  </div>
                  <p style={{ fontSize: '0.84rem', color: '#cbd5e1', lineHeight: 1.5 }}>
                    {b.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
              <button
                onClick={onOpenAdmission}
                className="btn-gold"
                style={{ padding: '15px 30px', fontSize: '1rem' }}
              >
                <Sparkles size={18} />
                <span>{lang === 'ta' ? 'முகாம் முன்பதிவு செய்க' : 'Reserve Night Camp Seat'}</span>
              </button>
              <a
                href={`tel:${tuitionData.phones[0]}`}
                className="btn-secondary"
                style={{ background: 'rgba(255, 255, 255, 0.1)', color: '#ffffff', borderColor: 'rgba(255, 255, 255, 0.2)' }}
              >
                <span>Call: {tuitionData.displayPhones[0]}</span>
              </a>
            </div>

          </div>

          {/* Right Column: AI Visual Showcase */}
          <div style={{ position: 'relative' }}>
            <div style={{
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
              border: '2px solid rgba(255, 255, 255, 0.15)',
            }}>
              <img
                src="/images/night_camp.jpg"
                alt="Demo Tuition Night Study Camp"
                style={{ width: '100%', height: '420px', objectFit: 'cover', display: 'block' }}
              />
            </div>

            {/* Floating feature badge */}
            <div style={{
              position: 'absolute',
              bottom: '-20px',
              left: '20px',
              right: '20px',
              background: '#ffffff',
              color: '#0f172a',
              borderRadius: '16px',
              padding: '16px 20px',
              boxShadow: '0 20px 30px rgba(0, 0, 0, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: '#fef3c7',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Clock size={20} style={{ color: '#d97706' }} />
                </div>
                <div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#1e3a8a' }}>
                    8:00 PM to 6:00 AM
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600 }}>
                    Supervised Night Sessions
                  </div>
                </div>
              </div>

              <span style={{
                background: '#ecfdf5',
                color: '#065f46',
                padding: '4px 10px',
                borderRadius: '6px',
                fontSize: '0.74rem',
                fontWeight: 800
              }}>
                100% Safe & Monitored
              </span>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .camp-grid {
            grid-template-columns: 1.1fr 0.9fr !important;
          }
        }
      `}</style>
    </section>
  );
}
