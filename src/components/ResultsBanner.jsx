import React from 'react';
import { Award, Sparkles, TrendingUp, Trophy, Star, CheckCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { tuitionData } from '../data/tuitionData';

export default function ResultsBanner({ lang }) {
  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <section id="results" style={{
      padding: '40px 0',
      background: 'linear-gradient(135deg, #1e3a8a 0%, #172554 100%)',
      color: '#ffffff',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Decorative patterns */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        opacity: 0.05,
        backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
        backgroundSize: '20px 20px',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          marginBottom: '35px'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            borderRadius: '999px',
            background: 'rgba(245, 158, 11, 0.2)',
            border: '1px solid rgba(245, 158, 11, 0.4)',
            color: '#fbbf24',
            fontSize: '0.85rem',
            fontWeight: 800,
            marginBottom: '10px'
          }}>
            <Trophy size={16} />
            <span>
              {lang === 'ta'
                ? 'கடந்த 13 வருடம், 100% சதவீதம் தொடர் தேர்ச்சி சாதனை!'
                : '13 CONSECUTIVE YEARS OF 100% BOARD EXAM PASS RESULTS'}
            </span>
          </div>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
            fontWeight: 800,
            color: '#ffffff',
            marginBottom: '8px'
          }}>
            {lang === 'ta'
              ? 'எங்கள் மாணவர்களின் தலைசிறந்த சாதனைகள் (2025-26)'
              : 'Our Outstanding Student Achievements & Topper Marks'}
          </h2>
          <p style={{ color: '#cbd5e1', fontSize: '0.98rem', maxWidth: '600px' }}>
            {lang === 'ta'
              ? 'சரியான வழிகாட்டுதல் மற்றும் தனித்துவ பயிற்சியால் உருவான முதலிட மதிப்பெண்கள்!'
              : 'Consistent top ranks achieved through dedicated subject specialists and intensive mentoring.'}
          </p>
        </div>

        {/* Results Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px'
        }}>
          {/* 10th Standard Topper */}
          <div
            onClick={triggerConfetti}
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(12px)',
              border: '1.5px solid rgba(251, 191, 36, 0.5)',
              borderRadius: '20px',
              padding: '28px',
              position: 'relative',
              cursor: 'pointer',
              transition: 'transform 0.3s ease, background 0.3s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-6px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              background: '#f59e0b',
              color: '#78350f',
              padding: '4px 10px',
              borderRadius: '6px',
              fontSize: '0.72rem',
              fontWeight: 900
            }}>
              2025-26 BATCH
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <Star size={20} style={{ color: '#fbbf24', fill: '#fbbf24' }} />
              <span style={{ fontSize: '0.9rem', fontWeight: 800, color: '#93c5fd', textTransform: 'uppercase' }}>
                10th Std Board Top Score
              </span>
            </div>
            <div style={{
              fontSize: '3rem',
              fontWeight: 900,
              fontFamily: 'var(--font-heading)',
              color: '#fbbf24',
              lineHeight: 1.1,
              marginBottom: '8px'
            }}>
              485 <span style={{ fontSize: '1.5rem', color: '#cbd5e1' }}>/ 500</span>
            </div>
            <div style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff', marginBottom: '6px' }}>
              {lang === 'ta' ? '10-ஆம் வகுப்பு முதன்மை மதிப்பெண்' : 'State & CBSE Board Distinction'}
            </div>
            <p style={{ fontSize: '0.85rem', color: '#cbd5e1', lineHeight: 1.5 }}>
              {lang === 'ta'
                ? 'கணிதம் & அறிவியலில் சென்டம் (Centum) மதிப்பெண்களுடன் பெருமை சேர்த்த சாதனையாளர்!'
                : 'Highest score recorded in the cluster with centum marks in Maths and Science.'}
            </p>
          </div>

          {/* 12th Standard Topper */}
          <div
            onClick={triggerConfetti}
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(12px)',
              border: '1.5px solid rgba(52, 211, 153, 0.5)',
              borderRadius: '20px',
              padding: '28px',
              position: 'relative',
              cursor: 'pointer',
              transition: 'transform 0.3s ease, background 0.3s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-6px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              background: '#10b981',
              color: '#064e3b',
              padding: '4px 10px',
              borderRadius: '6px',
              fontSize: '0.72rem',
              fontWeight: 900
            }}>
              2025-26 BATCH
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <Star size={20} style={{ color: '#34d399', fill: '#34d399' }} />
              <span style={{ fontSize: '0.9rem', fontWeight: 800, color: '#86efac', textTransform: 'uppercase' }}>
                12th Std HSC / CBSE Topper
              </span>
            </div>
            <div style={{
              fontSize: '3rem',
              fontWeight: 900,
              fontFamily: 'var(--font-heading)',
              color: '#34d399',
              lineHeight: 1.1,
              marginBottom: '8px'
            }}>
              567 <span style={{ fontSize: '1.5rem', color: '#cbd5e1' }}>/ 600</span>
            </div>
            <div style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff', marginBottom: '6px' }}>
              {lang === 'ta' ? '12-ஆம் வகுப்பு சாதனை மதிப்பெண்' : 'HSC Higher Secondary Topper'}
            </div>
            <p style={{ fontSize: '0.85rem', color: '#cbd5e1', lineHeight: 1.5 }}>
              {lang === 'ta'
                ? 'பொதுத்தேர்வில் 567/600 பெற்று வடசென்னையில் முதலிடம் பெற்ற சாதனை மாணவர்.'
                : 'Exceptional performance across Maths, Physics, Chemistry and Biology streams.'}
            </p>
          </div>

          {/* 13 Years 100% Pass Record */}
          <div
            onClick={triggerConfetti}
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(12px)',
              border: '1.5px solid rgba(96, 165, 250, 0.5)',
              borderRadius: '20px',
              padding: '28px',
              position: 'relative',
              cursor: 'pointer',
              transition: 'transform 0.3s ease, background 0.3s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-6px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              background: '#3b82f6',
              color: '#ffffff',
              padding: '4px 10px',
              borderRadius: '6px',
              fontSize: '0.72rem',
              fontWeight: 900
            }}>
              SINCE 2013
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <CheckCircle size={20} style={{ color: '#60a5fa' }} />
              <span style={{ fontSize: '0.9rem', fontWeight: 800, color: '#93c5fd', textTransform: 'uppercase' }}>
                Consistent Result Record
              </span>
            </div>
            <div style={{
              fontSize: '3rem',
              fontWeight: 900,
              fontFamily: 'var(--font-heading)',
              color: '#60a5fa',
              lineHeight: 1.1,
              marginBottom: '8px'
            }}>
              100% <span style={{ fontSize: '1.3rem', color: '#cbd5e1' }}>PASS</span>
            </div>
            <div style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff', marginBottom: '6px' }}>
              {lang === 'ta' ? 'தொடர் 100% தேர்ச்சி' : '13 Consecutive Years 100% Pass'}
            </div>
            <p style={{ fontSize: '0.85rem', color: '#cbd5e1', lineHeight: 1.5 }}>
              {lang === 'ta'
                ? 'மெல்ல கற்கும் மாணவர்களுக்கும் சிறப்பு கவனிப்பு அளித்து அனைவரும் தேர்ச்சி பெற வைக்கிறோம்.'
                : 'Special coaching for average & slow learners to guarantee success and high marks.'}
            </p>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '24px' }}>
          <button
            onClick={triggerConfetti}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: '#fbbf24',
              fontSize: '0.88rem',
              fontWeight: 700,
              textDecoration: 'underline'
            }}
          >
            <Sparkles size={16} />
            <span>Click cards to celebrate our Toppers 🎉</span>
          </button>
        </div>
      </div>
    </section>
  );
}
