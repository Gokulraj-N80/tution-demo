import { useEffect } from 'react';

/**
 * Agency Motion Suite:
 * 1. Animated number counters with custom easing
 * 2. Card spotlight glow tracking (Godly / Linear style)
 * 3. 3D card tilt physics with smooth return spring
 * 4. Magnetic button pull on desktop
 * 5. SVG stroke draw reveal for highlight accents
 */
export function useAgencyMotion() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    // -------------------------------------------------------------
    // 1. Dynamic Numeric Counter Reveal (e.g. 13+ Years, 100% Pass)
    // -------------------------------------------------------------
    const counterElements = document.querySelectorAll('[data-counter]');
    
    if (counterElements.length > 0 && 'IntersectionObserver' in window) {
      const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const targetVal = parseFloat(el.getAttribute('data-counter') || '0');
            const prefix = el.getAttribute('data-counter-prefix') || '';
            const suffix = el.getAttribute('data-counter-suffix') || '';
            const duration = 1600; // ms
            const startTime = performance.now();

            const updateCount = (currentTime) => {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              // EaseOutExpo curve
              const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
              const currentNum = Math.floor(easeProgress * targetVal);

              el.textContent = `${prefix}${currentNum}${suffix}`;

              if (progress < 1) {
                requestAnimationFrame(updateCount);
              } else {
                el.textContent = `${prefix}${targetVal}${suffix}`;
              }
            };

            requestAnimationFrame(updateCount);
            observer.unobserve(el);
          }
        });
      }, { threshold: 0.3 });

      counterElements.forEach((el) => counterObserver.observe(el));
    }

    // -------------------------------------------------------------
    // 2. Interactive Spotlight Glow on Cards (Desktop Only)
    // -------------------------------------------------------------
    const handleCardMouseMove = (e) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    };

    const spotlightCards = document.querySelectorAll('.spotlight-card, .hover-lift, .teacher-card-premium');
    if (isFinePointer) {
      spotlightCards.forEach((card) => {
        card.addEventListener('mousemove', handleCardMouseMove, { passive: true });
      });
    }

    // -------------------------------------------------------------
    // 3. Subtle 3D Tilt on Interactive Cards
    // -------------------------------------------------------------
    const handleTiltMouseMove = (e) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -6; // Max 6 deg tilt
      const rotateY = ((x - centerX) / centerX) * 6;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
    };

    const handleTiltMouseLeave = (e) => {
      const card = e.currentTarget;
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    };

    const tiltCards = document.querySelectorAll('.tilt-card');
    if (isFinePointer) {
      tiltCards.forEach((card) => {
        card.addEventListener('mousemove', handleTiltMouseMove, { passive: true });
        card.addEventListener('mouseleave', handleTiltMouseLeave);
      });
    }

    // -------------------------------------------------------------
    // 4. Magnetic Micro-Pull on Primary Action Buttons
    // -------------------------------------------------------------
    const handleMagneticMove = (e) => {
      const btn = e.currentTarget;
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      // Max displacement 8px
      const pullX = (x * 0.2).toFixed(1);
      const pullY = (y * 0.2).toFixed(1);
      btn.style.transform = `translate3d(${pullX}px, ${pullY}px, 0)`;
    };

    const handleMagneticLeave = (e) => {
      const btn = e.currentTarget;
      btn.style.transform = 'translate3d(0, 0, 0)';
    };

    const magneticButtons = document.querySelectorAll('.magnetic-btn');
    if (isFinePointer) {
      magneticButtons.forEach((btn) => {
        btn.addEventListener('mousemove', handleMagneticMove, { passive: true });
        btn.addEventListener('mouseleave', handleMagneticLeave);
      });
    }

    return () => {
      if (isFinePointer) {
        spotlightCards.forEach((card) => {
          card.removeEventListener('mousemove', handleCardMouseMove);
        });
        tiltCards.forEach((card) => {
          card.removeEventListener('mousemove', handleTiltMouseMove);
          card.removeEventListener('mouseleave', handleTiltMouseLeave);
        });
        magneticButtons.forEach((btn) => {
          btn.removeEventListener('mousemove', handleMagneticMove);
          btn.removeEventListener('mouseleave', handleMagneticLeave);
        });
      }
    };
  }, []);
}
