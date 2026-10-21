import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, ArrowRight } from 'lucide-react';

export default function GalleryContactSection({ lang }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [sent, setSent] = useState(false);

  const galleryImages = [
    '/images/fresh/gallery_classroom.jpg',
    '/images/fresh/gallery_study.jpg',
    '/images/fresh/gallery_library.jpg',
    '/images/fresh/night_camp_ai_full.jpg'
  ];

  const handleSend = (e) => {
    e.preventDefault();
    try {
      fetch('https://formsubmit.co/ajax/contact@demotuition.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          _subject: `📬 New Message from ${formData.name}`,
          Name: formData.name,
          Phone: formData.phone,
          Message: formData.message
        })
      }).catch((err) => console.log('Email delivery:', err));
    } catch (err) {}

    const message = `*NEW CONTACT MESSAGE*\n` +
      `------------------------------------\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Message:* ${formData.message}`;
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, '_blank');
    setSent(true);
  };

  return (
    <section id="contact" className="mockup-section" style={{ background: '#f8fafc', borderTop: '1px solid #eef2f6' }}>
      <div className="container">
        
        {/* Top Part: Our Gallery */}
        <div style={{ marginBottom: '60px' }}>
          
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '15px',
            marginBottom: '24px'
          }}>
            <div>
              <div style={{ marginBottom: '6px' }}>
                <span className="font-script script-badge">
                  Our Gallery
                  <span className="script-brush" />
                </span>
              </div>
              <h2 className="section-heading-main" style={{ marginBottom: '6px' }}>
                Moments That <span className="green-highlight">Inspire</span>
              </h2>
              <p style={{ fontSize: '0.96rem', color: '#475569' }}>
                Glimpses of our classrooms, events and happy students.
              </p>
            </div>

            <div style={{ textAlign: 'right' }}>
              <span className="font-script" style={{
                fontSize: '1.6rem',
                fontWeight: 700,
                color: '#0056b3',
                lineHeight: 1.15
              }}>
                Real Students <br />
                <span style={{ color: '#00875a' }}>Real Progress</span>
              </span>
            </div>
          </div>

          {/* 4 Gallery Thumbnails */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '14px',
            marginBottom: '16px'
          }} className="gallery-grid">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                style={{
                  borderRadius: '14px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                  height: '170px',
                  border: '1.5px solid #e2e8f0',
                  transition: 'transform 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <img
                  src={img}
                  alt={`Demo Tuition Moment ${i + 1}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
            ))}
          </div>

          {/* Slider Dots */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '6px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#0056b3' }} />
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#cbd5e1' }} />
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#cbd5e1' }} />
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#cbd5e1' }} />
          </div>

        </div>

        {/* Bottom Part: Get in Touch / Contact Us */}
        <div style={{
          background: '#ffffff',
          borderRadius: '24px',
          border: '1.5px solid #e2e8f0',
          padding: '36px',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '35px',
            alignItems: 'center'
          }} className="contact-mockup-grid">
            
            {/* Left Contact Info */}
            <div>
              <div style={{ marginBottom: '6px' }}>
                <span className="font-script script-badge">
                  Contact Us
                  <span className="script-brush" />
                </span>
              </div>
              <h2 className="section-heading-main" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <span>Get in</span>
                <span className="green-highlight">Touch</span>
                <Send size={24} style={{ color: '#0056b3' }} />
              </h2>
              <p style={{ fontSize: '0.94rem', color: '#475569', lineHeight: 1.6, marginBottom: '24px' }}>
                We're here to help you. Reach out to us for admissions, course details or any queries.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: '#0056b3',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Phone size={18} />
                  </div>
                  <span style={{ fontSize: '0.96rem', fontWeight: 800, color: '#093f7c' }}>
                    98765 43210
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: '#0056b3',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Mail size={18} />
                  </div>
                  <span style={{ fontSize: '0.96rem', fontWeight: 800, color: '#093f7c' }}>
                    contact@demotuition.com
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: '#0056b3',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <MapPin size={18} />
                  </div>
                  <span style={{ fontSize: '0.96rem', fontWeight: 800, color: '#093f7c' }}>
                    Chennai, Tamil Nadu
                  </span>
                </div>
              </div>
            </div>

            {/* Right Contact Form */}
            <div>
              {sent ? (
                <div style={{ padding: '20px', background: '#e6f7ef', borderRadius: '12px', color: '#00875a', fontWeight: 700, textAlign: 'center' }}>
                  ✅ Message Sent! We will contact you shortly.
                </div>
              ) : (
                <form onSubmit={handleSend} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '10px',
                        border: '1.5px solid #cbd5e1',
                        fontSize: '0.9rem',
                        fontFamily: 'inherit',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      required
                      placeholder="Your Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '10px',
                        border: '1.5px solid #cbd5e1',
                        fontSize: '0.9rem',
                        fontFamily: 'inherit',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <textarea
                      rows={3}
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '10px',
                        border: '1.5px solid #cbd5e1',
                        fontSize: '0.9rem',
                        fontFamily: 'inherit',
                        outline: 'none',
                        resize: 'none'
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-mockup-green"
                    style={{
                      width: '100%',
                      padding: '13px',
                      justifyContent: 'center',
                      fontSize: '0.98rem',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    <span>Send Message</span>
                    <ArrowRight size={16} />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (min-width: 900px) {
          .contact-mockup-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
