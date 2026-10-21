import React, { useState, useEffect } from 'react';
import { 
  X, 
  Sparkles, 
  CheckCircle2, 
  Phone, 
  MapPin, 
  BookOpen, 
  Clock, 
  User, 
  Users, 
  GraduationCap, 
  MessageSquare, 
  ShieldCheck, 
  Check, 
  ArrowRight,
  Send,
  Zap,
  Award
} from 'lucide-react';
import confetti from 'canvas-confetti';
import WhatsAppIcon from './WhatsAppIcon';
import { tuitionData } from '../data/tuitionData';

export default function AdmissionModal({ isOpen, onClose, lang = 'ta' }) {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    phone: '',
    studentClass: '10th Standard (SSLC / CBSE)',
    customClass: '',
    subjectChoice: 'All Core Subjects',
    branch: 'korukkupet',
    learningMode: 'Center Regular Batch',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setSubmitted(false);
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const branchName = formData.branch === 'korukkupet' 
      ? 'Main Campus (Branch 1)' 
      : formData.branch === 'tondiarpet' 
        ? 'City Campus (Branch 2)' 
        : 'Doorstep Home Tuition';
    
    const effectiveClass = formData.studentClass === 'Other'
      ? (formData.customClass.trim() || 'Other / Custom Class')
      : formData.studentClass;
    
    // 1. Send Email Alert directly to tuitionData.email
    try {
      fetch(`https://formsubmit.co/ajax/${tuitionData.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `🎓 New Admission Enquiry: ${formData.studentName} (${effectiveClass})`,
          'Student Name': formData.studentName,
          'Parent Name': formData.parentName || 'N/A',
          'Contact Phone': formData.phone,
          'Class / Standard': effectiveClass,
          'Branch Location': branchName,
          'Learning Mode / Facility': formData.learningMode,
          'Special Request / Notes': formData.notes || 'None',
          '_template': 'table'
        })
      }).catch((err) => console.log('Email delivery:', err));
    } catch (err) {
      console.log('Form submission email notice:', err);
    }

    const message = `*NEW ADMISSION ENQUIRY - DEMO TUITION CENTRE*\n` +
      `------------------------------------\n` +
      `*Student Name:* ${formData.studentName}\n` +
      `*Parent Name:* ${formData.parentName || 'N/A'}\n` +
      `*Contact Phone:* ${formData.phone}\n` +
      `*Class / Standard:* ${effectiveClass}\n` +
      `*Branch:* ${branchName}\n` +
      `*Batch / Facility:* ${formData.learningMode}\n` +
      (formData.notes ? `*Special Request/Notes:* ${formData.notes}\n` : '') +
      `------------------------------------\n` +
      `Submitted via Website Admission Form. Please confirm batch timings and seat availability.`;

    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // fallback if confetti fails
    }

    window.open(`https://wa.me/${tuitionData.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
    setSubmitted(true);
  };

  const isTa = lang === 'ta';

  return (
    <div 
      className="admission-modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="admission-modal-container">
        
        {/* Decorative Top Accent Light */}
        <div className="modal-glow-orb"></div>

        {/* Modal Header */}
        <div className="admission-modal-header">
          <div className="header-content">
            <div className="header-badge-row">
              <div className="batch-pill">
                <Sparkles size={13} className="sparkle-icon" />
                <span>{isTa ? 'BATCH 2025 – 2026 சேர்க்கை' : 'BATCH 2025 – 2026 ADMISSIONS'}</span>
              </div>
              <span className="live-dot-wrap">
                <span className="live-dot"></span>
                <span className="live-text">{isTa ? 'இடங்கள் உள்ளன' : 'Seats Open'}</span>
              </span>
            </div>

            <h2 className="modal-title">
              {isTa ? 'சேர்க்கை & இலவச மாதிரி வகுப்பு' : 'Admission & Free Demo Class Application'}
            </h2>
            <p className="modal-subtitle">
              <Award size={14} className="subtitle-icon" />
              <span>Demo Tuition Centre • 13+ Years 100% Pass Excellence</span>
            </p>
          </div>

          <button
            onClick={onClose}
            className="modal-close-btn"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Feature Highlights Bar */}
        <div className="modal-highlights-bar">
          <div className="highlight-pill">
            <Zap size={13} className="text-amber-500" />
            <span>{isTa ? 'இலவச 3 நாள் மாதிரி வகுப்பு' : 'Free 3-Day Demo'}</span>
          </div>
          <div className="highlight-pill">
            <ShieldCheck size={13} className="text-emerald-500" />
            <span>{isTa ? 'ஆண்/பெண் தனித்தனி வகுப்பு' : 'Separate Boys/Girls'}</span>
          </div>
          <div className="highlight-pill">
            <Check size={13} className="text-blue-500" />
            <span>{isTa ? '100% கட்டணமில்லா பதிவு' : 'Zero Reg Fee'}</span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="admission-modal-body">
          {submitted ? (
            <div className="submitted-view">
              <div className="success-icon-wrapper">
                <CheckCircle2 size={46} className="success-check-icon" />
              </div>
              <h3 className="success-title">
                {isTa ? 'விண்ணப்பம் வெற்றிகரமாக சமர்ப்பிக்கப்பட்டது!' : 'Admission Enquiry Sent Successfully!'}
              </h3>
              <p className="success-desc">
                {isTa 
                  ? 'நன்றி! உங்கள் விவரங்கள் Demo சேர்க்கை குழுவிற்கு வாட்ஸ்அப் மூலம் அனுப்பப்பட்டுள்ளது. விரைவில் உங்களை தொடர்புகொள்வோம்.'
                  : 'Thank you! Your details have been transmitted directly to our Admissions Team. We will call you back shortly.'}
              </p>

              <div className="submitted-card-summary">
                <div className="summary-item">
                  <span className="label">{isTa ? 'மாணவர் பெயர்:' : 'Student:'}</span>
                  <span className="val">{formData.studentName}</span>
                </div>
                <div className="summary-item">
                  <span className="label">{isTa ? 'வகுப்பு:' : 'Class:'}</span>
                  <span className="val">{formData.studentClass}</span>
                </div>
                <div className="summary-item">
                  <span className="label">{isTa ? 'கிளை:' : 'Branch:'}</span>
                  <span className="val">{formData.branch === 'korukkupet' ? 'Main Campus' : formData.branch === 'tondiarpet' ? 'City Campus' : 'Home Tuition'}</span>
                </div>
              </div>

              <div className="submitted-actions">
                <a
                  href={`tel:${tuitionData.phones[0]}`}
                  className="btn-modal-call"
                >
                  <Phone size={17} />
                  <span>{isTa ? 'நேரடியாக அழைக்க:' : 'Call Now:'} {tuitionData.displayPhones[0]}</span>
                </a>
                <button
                  onClick={onClose}
                  className="btn-modal-close"
                >
                  {isTa ? 'முடிந்தது' : 'Done & Close'}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="admission-form">
              
              {/* Row 1: Student Name & Parent Name */}
              <div className="form-grid-2">
                <div className={`input-group ${focusedField === 'studentName' ? 'is-focused' : ''}`}>
                  <label className="field-label">
                    {isTa ? 'மாணவர் முழு பெயர்' : 'Student Full Name'} <span className="req-star">*</span>
                  </label>
                  <div className="input-wrapper">
                    <User size={17} className="input-icon" />
                    <input
                      type="text"
                      required
                      placeholder={isTa ? 'மாணவர் பெயர்' : 'Student Name'}
                      value={formData.studentName}
                      onFocus={() => setFocusedField('studentName')}
                      onBlur={() => setFocusedField(null)}
                      onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className={`input-group ${focusedField === 'parentName' ? 'is-focused' : ''}`}>
                  <label className="field-label">
                    {isTa ? 'பெற்றோர் / பாதுகாவலர் பெயர்' : 'Parent / Guardian Name'}
                  </label>
                  <div className="input-wrapper">
                    <Users size={17} className="input-icon" />
                    <input
                      type="text"
                      placeholder={isTa ? 'பெற்றோர் பெயர்' : 'Parent / Guardian Name'}
                      value={formData.parentName}
                      onFocus={() => setFocusedField('parentName')}
                      onBlur={() => setFocusedField(null)}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      className="form-input"
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: Contact Phone & Class/Standard */}
              <div className="form-grid-2">
                <div className={`input-group ${focusedField === 'phone' ? 'is-focused' : ''}`}>
                  <label className="field-label">
                    {isTa ? 'தொடர்பு தொலைபேசி எண்' : 'Contact Phone Number'} <span className="req-star">*</span>
                  </label>
                  <div className="input-wrapper phone-input-wrapper">
                    <span className="country-tag">🇮🇳 +91</span>
                    <input
                      type="tel"
                      required
                      pattern="[0-9]{10}"
                      maxLength={10}
                      placeholder="98765 43210"
                      value={formData.phone}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '') })}
                      className="form-input phone-input"
                    />
                  </div>
                </div>

                <div className={`input-group ${focusedField === 'studentClass' ? 'is-focused' : ''}`}>
                  <label className="field-label">
                    {isTa ? 'வகுப்பு / படிப்பு' : 'Class / Standard'} <span className="req-star">*</span>
                  </label>
                  <div className="input-wrapper select-wrapper">
                    <GraduationCap size={17} className="input-icon" />
                    <select
                      value={formData.studentClass}
                      onFocus={() => setFocusedField('studentClass')}
                      onBlur={() => setFocusedField(null)}
                      onChange={(e) => setFormData({ ...formData, studentClass: e.target.value })}
                      className="form-select"
                    >
                      <option value="6th to 8th Standard">6th – 8th Standard (All Subjects)</option>
                      <option value="9th Standard">9th Standard (State Board / CBSE)</option>
                      <option value="10th Standard (SSLC / CBSE)">10th Standard (SSLC / CBSE)</option>
                      <option value="11th Standard Maths-Bio">11th Standard (Maths – Science)</option>
                      <option value="11th Standard Commerce">11th Standard (Commerce / Accounts)</option>
                      <option value="12th Standard Maths-Bio">12th Standard (Maths – Science)</option>
                      <option value="12th Standard Commerce">12th Standard (Commerce / Accounts)</option>
                      <option value="Engineering Maths (Anna Univ)">Engineering Maths (Anna Univ M1/M2/M3)</option>
                      <option value="Diploma Mathematics">Diploma Mathematics (DOTE)</option>
                      <option value="Degree Maths & Statistics">Degree Maths & Statistics</option>
                      <option value="Other">{isTa ? 'மற்றவை (Other - கீழே உள்ளிடவும்)' : 'Other (Type Custom Class/Course)'}</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* If 'Other' selected, show custom class input */}
              {formData.studentClass === 'Other' && (
                <div className={`input-group ${focusedField === 'customClass' ? 'is-focused' : ''}`} style={{ marginBottom: '14px', animation: 'fadeIn 0.25s ease' }}>
                  <label className="field-label">
                    {isTa ? 'உங்கள் வகுப்பு / பாடத்தை குறிப்பிடவும்' : 'Specify Your Class / Subject'} <span className="req-star">*</span>
                  </label>
                  <div className="input-wrapper">
                    <BookOpen size={17} className="input-icon" />
                    <input
                      type="text"
                      required
                      autoFocus
                      placeholder={isTa ? 'எ.கா. 11th Computer Science, Diploma, NEET...' : 'e.g. 11th Computer Science, Diploma, NEET...'}
                      value={formData.customClass}
                      onFocus={() => setFocusedField('customClass')}
                      onBlur={() => setFocusedField(null)}
                      onChange={(e) => setFormData({ ...formData, customClass: e.target.value })}
                      className="form-input"
                    />
                  </div>
                </div>
              )}

              {/* Row 3: Branch & Facility/Mode */}
              <div className="form-grid-2">
                <div className={`input-group ${focusedField === 'branch' ? 'is-focused' : ''}`}>
                  <label className="field-label">
                    {isTa ? 'விருப்பமான கிளை' : 'Preferred Branch'} <span className="req-star">*</span>
                  </label>
                  <div className="input-wrapper select-wrapper">
                    <MapPin size={17} className="input-icon" />
                    <select
                      value={formData.branch}
                      onFocus={() => setFocusedField('branch')}
                      onBlur={() => setFocusedField(null)}
                      onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                      className="form-select"
                    >
                      <option value="korukkupet">{isTa ? 'முதன்மை கிளை (Main Campus)' : 'Main Campus (Branch 1)'}</option>
                      <option value="tondiarpet">{isTa ? 'நகர கிளை (City Campus)' : 'City Campus (Branch 2)'}</option>
                      <option value="home_tuition">{isTa ? 'வீட்டுக்கே வந்து கற்பிக்கும் வசதி' : 'Doorstep 1-on-1 Home Tuition'}</option>
                    </select>
                  </div>
                </div>

                <div className={`input-group ${focusedField === 'learningMode' ? 'is-focused' : ''}`}>
                  <label className="field-label">
                    {isTa ? 'வகுப்பு முறை / வசதி' : 'Batch / Facility'}
                  </label>
                  <div className="input-wrapper select-wrapper">
                    <Clock size={17} className="input-icon" />
                    <select
                      value={formData.learningMode}
                      onFocus={() => setFocusedField('learningMode')}
                      onBlur={() => setFocusedField(null)}
                      onChange={(e) => setFormData({ ...formData, learningMode: e.target.value })}
                      className="form-select"
                    >
                      <option value="Center Regular Batch">Center Regular Batch (Separate Girls/Boys)</option>
                      <option value="March Exam Night Study Camp">March Exam Night Study Camp</option>
                      <option value="Weekend Mock Test Series">Weekend Only Test Series</option>
                      <option value="1-on-1 Home Tuition">1-on-1 Home Tuition</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Row 4: Special Request / Notes */}
              <div className={`input-group ${focusedField === 'notes' ? 'is-focused' : ''}`}>
                <label className="field-label">
                  {isTa ? 'குறிப்பிட்ட பாடம் / குறிப்பு (விருப்பத்தேர்வு)' : 'Specific Subject / Any Special Request (Optional)'}
                </label>
                <div className="input-wrapper">
                  <MessageSquare size={17} className="input-icon" />
                  <input
                    type="text"
                    placeholder={isTa ? 'உதா: கணிதம் Centum பயிற்சி, Slow learner உதவி...' : 'e.g. Maths centum focus, slow learner support, etc.'}
                    value={formData.notes}
                    onFocus={() => setFocusedField('notes')}
                    onBlur={() => setFocusedField(null)}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="form-input"
                  />
                </div>
              </div>

              {/* Trust Badge Box */}
              <div className="trust-offer-box">
                <div className="trust-offer-icon">
                  <ShieldCheck size={22} />
                </div>
                <div className="trust-offer-text">
                  <div className="trust-offer-title">
                    {isTa ? '100% இலவச பதிவு & ஆலோசணை (Zero Registration Fee)' : '100% Free Registration & Counseling'}
                  </div>
                  <div className="trust-offer-sub">
                    {isTa 
                      ? 'இலவச 3 நாள் மாதிரி வகுப்பு + ஆசிரியர்களுடன் நேரடி ஆலோசனை வழங்கப்படுகிறது.' 
                      : 'Free 3-day demo class & 1-on-1 counseling with subject faculties included.'}
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn-modal-whatsapp-submit"
              >
                <div className="btn-shine"></div>
                <span className="btn-icon-pulse">
                  <WhatsAppIcon size={22} />
                </span>
                <span className="btn-label-text">
                  {isTa ? 'விவரங்களை அனுப்பி வாட்ஸ்அப்பில் இணையுங்கள்' : 'Submit & Connect on WhatsApp'}
                </span>
                <ArrowRight size={18} className="btn-arrow" />
              </button>

              <div className="form-footer-caption">
                <span>🔒 {isTa ? 'உங்கள் விவரங்கள் முற்றிலும் பாதுகாப்பானது • உடனடி பதில் கிடைக்கும்' : '100% Secure & Confidential • Instant Reply within 10 Mins'}</span>
              </div>
            </form>
          )}
        </div>

      </div>

      <style>{`
        .admission-modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.72);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
          overflow-y: auto;
          animation: modalFadeIn 0.25s ease-out forwards;
        }

        @keyframes modalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .admission-modal-container {
          background: #ffffff;
          border-radius: 24px;
          width: 100%;
          max-width: 660px;
          box-shadow: 
            0 25px 60px -15px rgba(9, 63, 124, 0.35),
            0 0 0 1px rgba(219, 234, 254, 0.8);
          overflow: hidden;
          position: relative;
          max-height: 92vh;
          display: flex;
          flex-direction: column;
          animation: modalSpring 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes modalSpring {
          0% {
            opacity: 0;
            transform: scale(0.92) translateY(18px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .modal-glow-orb {
          position: absolute;
          top: -40px;
          right: 30%;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.25) 0%, rgba(255, 255, 255, 0) 70%);
          border-radius: 50%;
          pointer-events: none;
          z-index: 1;
        }

        /* Modal Header */
        .admission-modal-header {
          background: var(--theme-gradient);
          color: #ffffff;
          padding: 24px 28px 20px 28px;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          position: relative;
          z-index: 2;
        }

        .header-content {
          flex: 1;
          padding-right: 16px;
        }

        .header-badge-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 8px;
        }

        .batch-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 12px;
          border-radius: 999px;
          background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
          color: #78350f;
          font-size: 0.74rem;
          font-weight: 800;
          letter-spacing: 0.02em;
          box-shadow: 0 2px 8px rgba(245, 158, 11, 0.35);
        }

        .sparkle-icon {
          animation: sparkleSpin 3s infinite linear;
        }

        @keyframes sparkleSpin {
          0%, 100% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(20deg) scale(1.15); }
        }

        .live-dot-wrap {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.72rem;
          color: #93c5fd;
          font-weight: 700;
        }

        .live-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #4ade80;
          box-shadow: 0 0 0 3px rgba(74, 222, 128, 0.35);
          animation: pulseGreen 2s infinite;
        }

        @keyframes pulseGreen {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(0.85); }
        }

        .modal-title {
          font-family: var(--font-heading);
          font-size: 1.45rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.25;
          letter-spacing: -0.01em;
          margin-bottom: 4px;
        }

        .modal-subtitle {
          font-size: 0.82rem;
          color: #bfdbfe;
          display: flex;
          align-items: center;
          gap: 6px;
          font-weight: 500;
        }

        .subtitle-icon {
          color: #fbbf24;
          flex-shrink: 0;
        }

        .modal-close-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.15);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255, 255, 255, 0.3);
          cursor: pointer;
          transition: all 0.2s ease;
          flex-shrink: 0;
          backdrop-filter: blur(4px);
        }

        .modal-close-btn:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: rotate(90deg);
        }

        /* Highlights Bar */
        .modal-highlights-bar {
          background: #eff6ff;
          border-bottom: 1px solid #dbeafe;
          padding: 8px 24px;
          display: flex;
          align-items: center;
          justify-content: space-around;
          gap: 8px;
          flex-wrap: wrap;
        }

        .highlight-pill {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 0.76rem;
          font-weight: 700;
          color: #1e3a8a;
        }

        /* Modal Body */
        .admission-modal-body {
          padding: 22px 28px 26px 28px;
          overflow-y: auto;
          flex: 1;
        }

        .admission-form {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .form-grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .input-group {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .field-label {
          font-size: 0.8rem;
          font-weight: 700;
          color: #334155;
          display: flex;
          align-items: center;
          gap: 2px;
        }

        .req-star {
          color: #ef4444;
          font-weight: 800;
        }

        .input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          background: #f8fafc;
          border: 1.5px solid #e2e8f0;
          border-radius: 10px;
          transition: all 0.2s ease;
        }

        .input-group.is-focused .input-wrapper,
        .input-wrapper:focus-within {
          background: #ffffff;
          border-color: #2563eb;
          box-shadow: 0 0 0 3.5px rgba(37, 99, 235, 0.14);
        }

        .input-icon {
          position: absolute;
          left: 12px;
          color: #94a3b8;
          pointer-events: none;
          transition: color 0.2s ease;
        }

        .input-wrapper:focus-within .input-icon {
          color: #2563eb;
        }

        .form-input {
          width: 100%;
          padding: 10px 14px 10px 38px;
          border: none;
          background: transparent;
          font-size: 0.88rem;
          font-family: inherit;
          color: #0f172a;
          font-weight: 500;
          outline: none;
        }

        .form-input::placeholder {
          color: #94a3b8;
          font-weight: 400;
        }

        .phone-input-wrapper {
          padding-left: 0;
        }

        .country-tag {
          padding: 0 10px;
          font-size: 0.82rem;
          font-weight: 700;
          color: #475569;
          border-right: 1.5px solid #e2e8f0;
          display: flex;
          align-items: center;
          gap: 4px;
          background: #f1f5f9;
          height: 100%;
          border-radius: 8.5px 0 0 8.5px;
          align-self: stretch;
        }

        .phone-input {
          padding-left: 12px;
          letter-spacing: 0.04em;
          font-weight: 600;
        }

        .select-wrapper {
          position: relative;
        }

        .select-wrapper::after {
          content: "";
          position: absolute;
          right: 14px;
          top: 50%;
          transform: translateY(-50%);
          width: 8px;
          height: 8px;
          border-right: 2px solid #64748b;
          border-bottom: 2px solid #64748b;
          transform: translateY(-70%) rotate(45deg);
          pointer-events: none;
        }

        .form-select {
          width: 100%;
          padding: 10px 32px 10px 38px;
          border: none;
          background: transparent;
          font-size: 0.88rem;
          font-family: inherit;
          color: #0f172a;
          font-weight: 600;
          outline: none;
          cursor: pointer;
          appearance: none;
          -webkit-appearance: none;
        }

        /* Trust offer box */
        .trust-offer-box {
          background: linear-gradient(135deg, #ecfdf5 0%, #f0fdf4 100%);
          border: 1.5px solid #a7f3d0;
          border-radius: 12px;
          padding: 12px 16px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .trust-offer-icon {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #d1fae5;
          color: #059669;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 2px 6px rgba(5, 150, 105, 0.15);
        }

        .trust-offer-text {
          flex: 1;
        }

        .trust-offer-title {
          font-size: 0.84rem;
          font-weight: 800;
          color: #065f46;
          margin-bottom: 2px;
        }

        .trust-offer-sub {
          font-size: 0.76rem;
          color: #047857;
          line-height: 1.35;
        }

        /* Submit Button */
        .btn-modal-whatsapp-submit {
          width: 100%;
          padding: 14px 20px;
          background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
          color: #ffffff;
          border: none;
          border-radius: 12px;
          font-size: 0.98rem;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 6px 20px rgba(37, 211, 102, 0.38);
          position: relative;
          overflow: hidden;
          margin-top: 4px;
        }

        .btn-modal-whatsapp-submit:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(37, 211, 102, 0.48);
          background: linear-gradient(135deg, #22bf5b 0%, #0e7065 100%);
        }

        .btn-modal-whatsapp-submit:active {
          transform: scale(0.98);
        }

        .btn-shine {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            60deg,
            rgba(255, 255, 255, 0) 20%,
            rgba(255, 255, 255, 0.3) 50%,
            rgba(255, 255, 255, 0) 80%
          );
          transform: translateX(-150%) skewX(-20deg);
          animation: shimmerSweep 4s infinite cubic-bezier(0.4, 0, 0.2, 1);
          pointer-events: none;
        }

        .btn-icon-pulse {
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s ease;
        }

        .btn-modal-whatsapp-submit:hover .btn-icon-pulse {
          transform: scale(1.15) rotate(5deg);
        }

        .btn-arrow {
          transition: transform 0.2s ease;
        }

        .btn-modal-whatsapp-submit:hover .btn-arrow {
          transform: translateX(4px);
        }

        .form-footer-caption {
          text-align: center;
          font-size: 0.74rem;
          color: #64748b;
          margin-top: 2px;
          font-weight: 500;
        }

        /* Submitted Screen Styles */
        .submitted-view {
          text-align: center;
          padding: 20px 8px;
          animation: modalFadeIn 0.3s ease;
        }

        .success-icon-wrapper {
          width: 76px;
          height: 76px;
          border-radius: 50%;
          background: #ecfdf5;
          color: #059669;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px auto;
          border: 3px solid #a7f3d0;
          box-shadow: 0 8px 24px rgba(5, 150, 105, 0.2);
          animation: pulseGreen 2.5s infinite;
        }

        .success-title {
          font-family: var(--font-heading);
          font-size: 1.4rem;
          font-weight: 800;
          color: #064e3b;
          margin-bottom: 8px;
        }

        .success-desc {
          color: #475569;
          font-size: 0.9rem;
          line-height: 1.55;
          max-width: 500px;
          margin: 0 auto 20px auto;
        }

        .submitted-card-summary {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 14px 18px;
          margin-bottom: 24px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          text-align: left;
        }

        .summary-item {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
        }

        .summary-item .label {
          color: #64748b;
          font-weight: 600;
        }

        .summary-item .val {
          color: #0f172a;
          font-weight: 700;
        }

        .submitted-actions {
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .btn-modal-call {
          background: #093f7c;
          color: #ffffff;
          padding: 12px 24px;
          border-radius: 999px;
          font-weight: 700;
          font-size: 0.9rem;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          box-shadow: 0 4px 14px rgba(9, 63, 124, 0.3);
          transition: all 0.2s ease;
        }

        .btn-modal-call:hover {
          background: #0056b3;
          transform: translateY(-2px);
        }

        .btn-modal-close {
          background: #f1f5f9;
          color: #334155;
          padding: 12px 24px;
          border-radius: 999px;
          font-weight: 700;
          font-size: 0.9rem;
          border: 1px solid #cbd5e1;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn-modal-close:hover {
          background: #e2e8f0;
        }

        /* Responsive Breakpoints */
        @media (max-width: 580px) {
          .form-grid-2 {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 8px !important;
          }
          
          .field-label {
            font-size: 0.74rem !important;
          }

          .form-input, .form-select {
            font-size: 0.80rem !important;
            padding: 8px 10px 8px 30px !important;
          }

          .input-icon {
            left: 8px !important;
            width: 14px !important;
            height: 14px !important;
          }

          .phone-input {
            padding-left: 8px !important;
          }

          .country-tag {
            font-size: 0.74rem !important;
            padding: 0 6px !important;
          }

          .admission-modal-header {
            padding: 16px 16px 12px 16px !important;
          }

          .modal-title {
            font-size: 1.15rem !important;
          }

          .modal-subtitle {
            font-size: 0.74rem !important;
          }

          .admission-modal-body {
            padding: 14px 14px 18px 14px !important;
          }

          .modal-highlights-bar {
            padding: 6px 10px !important;
            justify-content: flex-start !important;
            gap: 6px !important;
          }

          .highlight-pill {
            font-size: 0.68rem !important;
          }

          .trust-offer-box {
            padding: 8px 10px !important;
            gap: 8px !important;
          }

          .trust-offer-icon {
            width: 28px !important;
            height: 28px !important;
          }

          .trust-offer-title {
            font-size: 0.76rem !important;
          }

          .trust-offer-sub {
            font-size: 0.68rem !important;
          }

          .btn-modal-whatsapp-submit {
            padding: 11px 14px !important;
            font-size: 0.86rem !important;
          }
        }
      `}</style>
    </div>
  );
}
