import React from 'react';
import { Phone, Sparkles } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { tuitionData } from '../data/tuitionData';

export default function FloatingActions({ lang, onOpenAdmission }) {
  return (
    <>
      {/* Floating Buttons Container */}
      <div style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 999,
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        alignItems: 'flex-end'
      }}>
        {/* Quick Admission Pill */}
        <button
          onClick={onOpenAdmission}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'linear-gradient(135deg, #1e3a8a, #2563eb)',
            color: '#ffffff',
            padding: '12px 20px',
            borderRadius: '999px',
            fontSize: '0.88rem',
            fontWeight: 800,
            boxShadow: '0 10px 25px -3px rgba(30, 58, 138, 0.4)',
            border: '2px solid #ffffff'
          }}
          className="animate-pulse-glow"
        >
          <Sparkles size={16} style={{ color: '#fbbf24' }} />
          <span>{lang === 'ta' ? 'சேர்க்கை விவரம்' : 'Admission 2025-26'}</span>
        </button>

        {/* Call Now Floating Button */}
        <a
          href={`tel:${tuitionData.phones[0]}`}
          style={{
            width: '52px',
            height: '52px',
            borderRadius: '50%',
            background: '#2563eb',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 20px rgba(37, 99, 235, 0.35)',
            border: '2px solid #ffffff'
          }}
          title="Call Now"
        >
          <Phone size={22} />
        </a>

        {/* WhatsApp Floating Button */}
        <a
          href={`https://wa.me/${tuitionData.whatsappNumber}?text=Hi%20Demo%20Tuition%20Centre,%20I%20am%20interested%20in%20joining%20tuition%20classes.`}
          target="_blank"
          rel="noreferrer"
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            background: '#25d366',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 10px 25px rgba(37, 211, 102, 0.4)',
            border: '2px solid #ffffff'
          }}
          title="Chat on WhatsApp"
        >
          <WhatsAppIcon size={28} />
        </a>
      </div>
    </>
  );
}
