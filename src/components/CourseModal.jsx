import React from 'react';
import { X, CheckCircle2, Clock, BookOpen, Sparkles, ArrowRight } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { tuitionData } from '../data/tuitionData';

export default function CourseModal({ course, onClose, lang }) {
  if (!course) return null;

  const handleEnrollWhatsApp = () => {
    const message = `*COURSE ENQUIRY - DEMO TUITION CENTRE*\n` +
      `------------------------------------\n` +
      `*Course:* ${course.title}\n` +
      `*Category:* ${course.category}\n` +
      `*Duration:* ${course.duration}\n` +
      `Please provide batch timings, fees, and next starting date.`;
    window.open(`https://wa.me/${tuitionData.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(15, 23, 42, 0.7)',
      backdropFilter: 'blur(8px)',
      zIndex: 2500,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '16px',
      overflowY: 'auto'
    }}>
      <div style={{
        background: '#ffffff',
        borderRadius: '24px',
        width: '100%',
        maxWidth: '580px',
        boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.3)',
        border: '1.5px solid #dbeafe',
        overflow: 'hidden',
        position: 'relative',
        maxHeight: '90vh',
        display: 'flex',
        flexDirection: 'column'
      }}>
        
        {/* Modal Header Banner */}
        <div style={{
          background: course.bg || '#0056b3',
          color: '#ffffff',
          padding: '24px 28px',
          position: 'relative'
        }}>
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '18px',
              right: '18px',
              width: '34px',
              height: '34px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.25)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(255, 255, 255, 0.4)'
            }}
          >
            <X size={18} />
          </button>

          <span style={{
            background: 'rgba(255, 255, 255, 0.2)',
            color: '#ffffff',
            padding: '3px 10px',
            borderRadius: '999px',
            fontSize: '0.74rem',
            fontWeight: 800,
            display: 'inline-block',
            marginBottom: '8px',
            border: '1px solid rgba(255, 255, 255, 0.3)'
          }}>
            {course.badge}
          </span>

          <h2 style={{ fontSize: '1.45rem', fontWeight: 900, color: '#ffffff', lineHeight: 1.25 }}>
            {course.title}
          </h2>
          <p style={{ fontSize: '0.88rem', color: 'rgba(255, 255, 255, 0.9)', marginTop: '4px', fontWeight: 600 }}>
            {course.category} • {course.duration}
          </p>
        </div>

        {/* Modal Content */}
        <div style={{ padding: '24px 28px', overflowY: 'auto' }}>
          
          {/* Subjects / Modules list */}
          <div style={{ marginBottom: '22px' }}>
            <h4 style={{ fontSize: '0.92rem', fontWeight: 800, color: '#0f172a', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '12px' }}>
              Key Modules & Topics Covered:
            </h4>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '8px'
            }}>
              {course.subjects.map((sub, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '8px 12px',
                    background: '#f8fafc',
                    borderRadius: '8px',
                    border: '1px solid #e2e8f0',
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    color: '#1e293b'
                  }}
                >
                  <CheckCircle2 size={16} style={{ color: '#00875a', flexShrink: 0 }} />
                  <span>{sub}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div style={{ marginBottom: '24px' }}>
            <h4 style={{ fontSize: '0.92rem', fontWeight: 800, color: '#0f172a', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '10px' }}>
              Why Learn This at Demo Tuition?
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {course.features.map((feat, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#475569' }}>
                  <Sparkles size={14} style={{ color: '#f59e0b', flexShrink: 0 }} />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <button
              onClick={handleEnrollWhatsApp}
              className="btn-mockup-green"
              style={{ flex: 1, padding: '13px', justifyContent: 'center', fontSize: '0.94rem' }}
            >
              <WhatsAppIcon size={18} />
              <span>Get Fee Details on WhatsApp</span>
            </button>
            <a
              href={`tel:${tuitionData.phones[0]}`}
              className="btn-mockup-outline"
              style={{ padding: '13px 20px', justifyContent: 'center' }}
            >
              <span>Call Director</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}
