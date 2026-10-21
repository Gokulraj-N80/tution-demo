import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, ArrowRight, Clock, CheckCircle2 } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { tuitionData } from '../data/tuitionData';

export default function ContactSection({ lang = 'ta' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    course: '10th Maths & Science',
    customCourse: '',
    branch: 'Main Campus',
    message: ''
  });
  const [sent, setSent] = useState(false);

  const courseOptions = [
    { value: '10th Maths & Science', labelTa: '10ம் வகுப்பு கணிதம் & அறிவியல்', labelEn: '10th Maths & Science' },
    { value: '12th Maths (Bio / Comp)', labelTa: '12ம் வகுப்பு கணிதம் (General / Bio)', labelEn: '12th Maths (Bio / Comp)' },
    { value: '12th Business Maths & Accounts', labelTa: '12ம் வணிக கணிதம் & கணக்குப்பதிவியல்', labelEn: '12th Business Maths & Accounts' },
    { value: '11th / 12th Physics & Chemistry', labelTa: '11 / 12ம் இயற்பியல் & வேதியியல்', labelEn: '11th / 12th Physics & Chemistry' },
    { value: '9th & 10th Board Exam Batch', labelTa: '9 & 10ம் பொதுத்தேர்வு சிறப்பு பிரிவு', labelEn: '9th & 10th Board Exam Batch' },
    { value: '6th to 8th (All Subjects)', labelTa: '6 முதல் 8ம் வகுப்பு (அனைத்து பாடங்கள்)', labelEn: '6th to 8th (All Subjects)' },
    { value: 'College / Engineering Maths (M1, M2)', labelTa: 'கல்லூரி / பொறியியல் கணிதம் (M1, M2)', labelEn: 'College / Engineering Maths (M1, M2)' },
    { value: 'Home Tuition (Doorstep)', labelTa: 'வீட்டுக்கே வந்து கற்பிக்கும் ஹோம் டியூஷன்', labelEn: 'Home Tuition (Doorstep Tutoring)' },
    { value: 'Other', labelTa: 'மற்றவை (Other - கீழே உள்ளிடவும்)', labelEn: 'Other (Type Custom Subject)' }
  ];

  const handleSend = (e) => {
    e.preventDefault();
    const effectiveCourse = formData.course === 'Other' 
      ? (formData.customCourse.trim() || 'Other / Custom Subject') 
      : formData.course;

    // 1. Send Email Notification directly to tuitionData.email
    try {
      fetch(`https://formsubmit.co/ajax/${tuitionData.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `📬 New Contact / Admission Message from ${formData.name}`,
          'Contact Name': formData.name,
          'Phone Number': formData.phone,
          'Branch Preference': formData.branch,
          'Course / Subject': effectiveCourse,
          'Message / Query': formData.message || 'General enquiry',
          '_template': 'table'
        })
      }).catch((err) => console.log('Email delivery:', err));
    } catch (err) {
      console.log('Contact form email notice:', err);
    }

    const message = `*NEW ADMISSION / CONTACT ENQUIRY*\n` +
      `------------------------------------\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Branch:* ${formData.branch}\n` +
      `*Course / Class:* ${effectiveCourse}\n` +
      `*Message:* ${formData.message || 'Admission enquiry'}`;

    window.open(`https://wa.me/${tuitionData.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
    setSent(true);
  };

  return (
    <section id="contact" className="contact-section-wrapper" style={{
      background: 'var(--section-alt-bg)',
      padding: '55px 0 60px 0',
      borderTop: '1px solid var(--section-alt-border)',
      borderBottom: '1px solid var(--section-alt-border)',
      position: 'relative'
    }}>
      <div className="container">
        
        {/* Main Card Container */}
        <div style={{
          background: 'var(--theme-gradient)',
          borderRadius: '28px',
          padding: '48px 40px',
          boxShadow: '0 15px 40px var(--theme-glow)',
          color: '#ffffff',
          position: 'relative',
          overflow: 'hidden'
        }} className="contact-main-card spotlight-card">
          
          {/* Subtle Background Circles */}
          <div style={{
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            width: '250px',
            height: '250px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.05)',
            pointerEvents: 'none'
          }} />

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '40px',
            alignItems: 'center',
            position: 'relative',
            zIndex: 2
          }} className="contact-split-grid">
            
            {/* Left Info Column */}
            <div className="contact-left-col reveal-on-scroll reveal-left">
              <div className="contact-script-badge" style={{ marginBottom: '6px' }}>
                <span className="font-script" style={{
                  fontSize: '1.9rem',
                  fontWeight: 800,
                  color: '#fde047',
                  display: 'inline-block',
                  lineHeight: 1.1
                }}>
                  {lang === 'ta' ? 'தொடர்புக்கு' : 'Contact Us'}
                </span>
              </div>

              <h2 className="contact-main-heading" style={{
                fontSize: 'clamp(1.8rem, 3.4vw, 2.75rem)',
                fontWeight: 900,
                fontFamily: 'var(--font-heading)',
                color: '#ffffff',
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
                margin: '0 0 14px 0'
              }}>
                {lang === 'ta' ? (
                  <>
                    எங்களுடன் <span style={{ color: '#86efac' }}>தொடர்பு கொள்ளுங்கள்</span>
                  </>
                ) : (
                  <>
                    Get in <span style={{ color: '#86efac' }}>Touch</span>
                  </>
                )}
              </h2>

              <p className="contact-subtext" style={{
                fontSize: '0.96rem',
                color: '#e0f2fe',
                lineHeight: 1.6,
                marginBottom: '28px',
                maxWidth: '460px'
              }}>
                {lang === 'ta'
                  ? 'சேர்க்கை விவரங்கள், கட்டண முறைகள் மற்றும் சிறப்பு வகுப்புகள் பற்றிய தகவல்களுக்கு எங்களை எப்போது வேண்டுமானாலும் தொடர்பு கொள்ளலாம்.'
                  : 'Reach out to us for admissions, fees structure, branch visits, and expert counselling.'}
              </p>

              {/* Contact Information List */}
              <div className="contact-info-list" style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
                
                {/* Phone */}
                <a
                  href={`tel:${tuitionData.phones[0]}`}
                  className="contact-info-card magnetic-btn"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    color: '#ffffff',
                    textDecoration: 'none',
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(8px)',
                    padding: '12px 18px',
                    borderRadius: '14px',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.18)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
                >
                  <div className="contact-icon-circle" style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: '#00875a',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="contact-card-sub" style={{ fontSize: '0.74rem', color: '#bae6fd', fontWeight: 700 }}>
                      {lang === 'ta' ? 'அழைப்பு & ஆலோசனை' : 'Direct Call & Counselling'}
                    </div>
                    <div className="contact-card-val" style={{ fontSize: '1.05rem', fontWeight: 900 }}>
                      {tuitionData.displayPhones.join(' / ')}
                    </div>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${tuitionData.whatsappNumber}?text=Hi%20Demo%20Tuition%20Centre,%20I%20want%20to%20know%20about%20admissions.`}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-info-card magnetic-btn"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    color: '#ffffff',
                    textDecoration: 'none',
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(8px)',
                    padding: '12px 18px',
                    borderRadius: '14px',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.18)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
                >
                  <div className="contact-icon-circle" style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: '#25D366',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <WhatsAppIcon size={20} />
                  </div>
                  <div>
                    <div className="contact-card-sub" style={{ fontSize: '0.74rem', color: '#bae6fd', fontWeight: 700 }}>
                      {lang === 'ta' ? 'உடனடி வாட்ஸ்அப் உதவி' : 'Instant WhatsApp Help'}
                    </div>
                    <div className="contact-card-val" style={{ fontSize: '1.05rem', fontWeight: 900 }}>
                      {tuitionData.displayPhones[0]}
                    </div>
                  </div>
                </a>

                {/* Campuses Location */}
                <div className="contact-info-card contact-campus-card" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  padding: '12px 18px',
                  borderRadius: '14px',
                  border: '1px solid rgba(255, 255, 255, 0.15)'
                }}>
                  <div className="contact-icon-circle" style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: '#f59e0b',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="contact-card-sub" style={{ fontSize: '0.74rem', color: '#bae6fd', fontWeight: 700 }}>
                      {lang === 'ta' ? 'கிளைகள் அமைவிடம்' : 'Campuses'}
                    </div>
                    <div className="contact-card-val contact-campus-val" style={{ fontSize: '0.96rem', fontWeight: 800 }}>
                      {lang === 'ta' ? 'முதன்மை கிளை & நகர கிளை, சென்னை' : 'Main Campus & City Campus, Chennai'}
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Contact / Admission Enquiry Form */}
            <div style={{
              background: '#ffffff',
              borderRadius: '20px',
              padding: '30px 26px',
              color: '#0f172a',
              boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
            }} className="contact-form-container reveal-on-scroll reveal-right">
              
              <h3 className="contact-form-heading" style={{
                fontSize: '1.25rem',
                fontWeight: 900,
                color: '#093f7c',
                margin: '0 0 6px 0',
                fontFamily: 'var(--font-heading)'
              }}>
                {lang === 'ta' ? 'சேர்க்கை முன்பதிவு படிவம்' : 'Quick Admission Enquiry'}
              </h3>
              
              <p className="contact-form-subtext" style={{ fontSize: '0.84rem', color: '#64748b', marginBottom: '18px' }}>
                {lang === 'ta' ? 'உங்கள் விவரங்களை நிரப்பி நேரடி வாட்ஸ்அப் மூலம் உடனடியாக அனுப்பவும்.' : 'Submit your details to connect directly with our admissions desk.'}
              </p>

              {sent ? (
                <div style={{
                  padding: '24px',
                  background: '#e6f7ef',
                  borderRadius: '14px',
                  color: '#00875a',
                  fontWeight: 800,
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <CheckCircle2 size={32} />
                  <div style={{ fontSize: '1.05rem' }}>
                    {lang === 'ta' ? 'செய்தி அனுப்பப்பட்டது!' : 'Message Sent Successfully!'}
                  </div>
                  <div style={{ fontSize: '0.84rem', color: '#334155', fontWeight: 500 }}>
                    {lang === 'ta' ? 'எங்கள் ஆசிரியர் குழு உங்களை விரைவில் தொடர்புகொள்வார்கள்.' : 'Our faculty will reach out to you shortly.'}
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSend} className="contact-form-fields" style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  
                  {/* Name & Phone in 2-column */}
                  <div className="contact-form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                    <div>
                      <label style={{ fontSize: '0.78rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>
                        {lang === 'ta' ? 'பெயர் *' : 'Name *'}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={lang === 'ta' ? 'பெயர்' : 'Your name'}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="contact-input-field"
                        style={{
                          width: '100%',
                          padding: '11px 14px',
                          borderRadius: '10px',
                          border: '1.5px solid #cbd5e1',
                          fontSize: '0.9rem',
                          fontFamily: 'inherit',
                          outline: 'none',
                          boxSizing: 'border-box'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ fontSize: '0.78rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>
                        {lang === 'ta' ? 'மொபைல் எண் *' : 'Phone *'}
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="contact-input-field"
                        style={{
                          width: '100%',
                          padding: '11px 14px',
                          borderRadius: '10px',
                          border: '1.5px solid #cbd5e1',
                          fontSize: '0.9rem',
                          fontFamily: 'inherit',
                          outline: 'none',
                          boxSizing: 'border-box'
                        }}
                      />
                    </div>
                  </div>

                  {/* Course & Branch Dropdowns */}
                  <div className="contact-form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                    <div>
                      <label style={{ fontSize: '0.78rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>
                        {lang === 'ta' ? 'வகுப்பு / பாடம் *' : 'Class / Course *'}
                      </label>
                      <select
                        value={formData.course}
                        onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                        className="contact-input-field"
                        style={{
                          width: '100%',
                          padding: '11px 10px',
                          borderRadius: '10px',
                          border: '1.5px solid #cbd5e1',
                          fontSize: '0.84rem',
                          fontFamily: 'inherit',
                          outline: 'none',
                          boxSizing: 'border-box',
                          background: '#ffffff',
                          cursor: 'pointer'
                        }}
                      >
                        {courseOptions.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {lang === 'ta' ? opt.labelTa : opt.labelEn}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label style={{ fontSize: '0.78rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>
                        {lang === 'ta' ? 'விருப்பமான கிளை *' : 'Branch *'}
                      </label>
                      <select
                        value={formData.branch}
                        onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                        className="contact-input-field"
                        style={{
                          width: '100%',
                          padding: '11px 10px',
                          borderRadius: '10px',
                          border: '1.5px solid #cbd5e1',
                          fontSize: '0.84rem',
                          fontFamily: 'inherit',
                          outline: 'none',
                          boxSizing: 'border-box',
                          background: '#ffffff',
                          cursor: 'pointer'
                        }}
                      >
                        <option value="Main Campus">{lang === 'ta' ? 'முதன்மை கிளை (Main Campus)' : 'Main Campus (Branch 1)'}</option>
                        <option value="City Campus">{lang === 'ta' ? 'நகர கிளை (City Campus)' : 'City Campus (Branch 2)'}</option>
                      </select>
                    </div>
                  </div>

                  {/* If 'Other' is selected, show dedicated custom course input */}
                  {formData.course === 'Other' && (
                    <div style={{ animation: 'fadeIn 0.25s ease' }}>
                      <label style={{ fontSize: '0.78rem', fontWeight: 800, color: '#093f7c', display: 'block', marginBottom: '4px' }}>
                        {lang === 'ta' ? 'உங்கள் வகுப்பு / பாடத்தை குறிப்பிடவும் *' : 'Specify Your Class / Subject *'}
                      </label>
                      <input
                        type="text"
                        required
                        autoFocus
                        placeholder={lang === 'ta' ? 'எ.கா. 11th Computer Science / Diploma / NEET' : 'e.g. 11th Computer Science / Diploma / NEET'}
                        value={formData.customCourse}
                        onChange={(e) => setFormData({ ...formData, customCourse: e.target.value })}
                        className="contact-input-field"
                        style={{
                          width: '100%',
                          padding: '10px 12px',
                          borderRadius: '10px',
                          border: '1.5px solid #0056b3',
                          fontSize: '0.86rem',
                          fontFamily: 'inherit',
                          outline: 'none',
                          boxSizing: 'border-box',
                          background: '#eff6ff'
                        }}
                      />
                    </div>
                  )}

                  {/* Message */}
                  <div className="contact-message-group">
                    <label style={{ fontSize: '0.78rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>
                      {lang === 'ta' ? 'உங்கள் கருத்து / கேள்வி (விருப்பம்)' : 'Message (Optional)'}
                    </label>
                    <textarea
                      rows={2}
                      placeholder={lang === 'ta' ? 'விவரங்களை உள்ளிடவும்...' : 'Type your message...'}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="contact-input-field contact-textarea-field"
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        borderRadius: '10px',
                        border: '1.5px solid #cbd5e1',
                        fontSize: '0.86rem',
                        fontFamily: 'inherit',
                        outline: 'none',
                        resize: 'none',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>

                  {/* Submit via WhatsApp */}
                  <button
                    type="submit"
                    className="contact-submit-btn magnetic-btn shimmer-btn"
                    style={{
                      width: '100%',
                      background: '#00875a',
                      color: '#ffffff',
                      padding: '13px',
                      borderRadius: '999px',
                      fontWeight: 900,
                      fontSize: '0.96rem',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      boxShadow: '0 4px 14px rgba(0, 135, 90, 0.3)',
                      transition: 'all 0.2s ease',
                      marginTop: '4px'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    <span>{lang === 'ta' ? 'வாட்ஸ்அப் மூலம் உடனடியாக அனுப்பவும்' : 'Submit via WhatsApp'}</span>
                    <ArrowRight size={16} />
                  </button>
                </form>
              )}

            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media (min-width: 960px) {
          .contact-split-grid {
            grid-template-columns: 1.1fr 0.9fr !important;
          }
        }
        @media (max-width: 860px) {
          .contact-section-wrapper {
            padding: 24px 0 28px 0 !important;
          }
          .contact-main-card {
            padding: 20px 16px !important;
            border-radius: 18px !important;
          }
          .contact-split-grid {
            gap: 16px !important;
          }
          .contact-script-badge span {
            font-size: 1.35rem !important;
          }
          .contact-main-heading {
            font-size: 1.45rem !important;
            margin: 0 0 6px 0 !important;
          }
          .contact-subtext {
            font-size: 0.82rem !important;
            line-height: 1.45 !important;
            margin-bottom: 12px !important;
          }
          .contact-info-list {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 8px !important;
            margin-bottom: 14px !important;
          }
          .contact-info-card {
            padding: 8px 10px !important;
            gap: 8px !important;
            border-radius: 10px !important;
          }
          .contact-icon-circle {
            width: 30px !important;
            height: 30px !important;
          }
          .contact-icon-circle svg {
            width: 14px !important;
            height: 14px !important;
          }
          .contact-card-sub {
            font-size: 0.64rem !important;
          }
          .contact-card-val {
            font-size: 0.78rem !important;
          }
          .contact-campus-card {
            grid-column: span 2 !important;
            padding: 6px 10px !important;
          }
          .contact-campus-val {
            font-size: 0.76rem !important;
          }
          .contact-form-container {
            padding: 16px 14px !important;
            border-radius: 14px !important;
          }
          .contact-form-heading {
            font-size: 1.1rem !important;
            margin-bottom: 3px !important;
          }
          .contact-form-subtext {
            font-size: 0.76rem !important;
            margin-bottom: 10px !important;
            line-height: 1.3 !important;
          }
          .contact-form-fields {
            gap: 8px !important;
          }
          .contact-input-field {
            padding: 8px 10px !important;
            font-size: 0.82rem !important;
            border-radius: 8px !important;
          }
          .contact-textarea-field {
            height: 38px !important;
            padding: 6px 10px !important;
          }
          .contact-submit-btn {
            padding: 10px !important;
            font-size: 0.88rem !important;
          }
        }
      `}</style>
    </section>
  );
}
