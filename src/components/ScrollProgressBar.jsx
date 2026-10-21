import React, { useEffect, useState } from 'react';

/**
 * Modern slim scroll progress indicator fixed at the very top of the viewport.
 * Uses hardware-accelerated transformX for maximum rendering performance.
 */
export default function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollTop = window.scrollY || document.documentElement.scrollTop;
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          const currentProgress = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;
          setProgress(currentProgress);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="site-scroll-progress-container"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '3px',
        zIndex: 9999,
        pointerEvents: 'none',
        background: 'transparent'
      }}
    >
      <div
        className="site-scroll-progress-bar"
        style={{
          height: '100%',
          width: '100%',
          transformOrigin: '0% 50%',
          transform: `scaleX(${progress / 100})`,
          background: 'linear-gradient(90deg, var(--primary-blue) 0%, var(--accent-green) 50%, var(--accent-gold) 100%)',
          boxShadow: '0 0 10px rgba(0, 135, 90, 0.45)',
          transition: 'transform 0.08s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      />
    </div>
  );
}
