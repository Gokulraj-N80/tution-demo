import React, { useEffect, useRef, useState } from 'react';

/**
 * Custom Agency-Grade Subtle Cursor Follower.
 * Inspired by Awwwards & Godly.website.
 * Active exclusively on fine pointer / desktop devices.
 * Uses requestAnimationFrame interpolation (lerp) for liquid smoothness.
 */
export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isFinePointer, setIsFinePointer] = useState(false);

  useEffect(() => {
    // Only enable on desktop with fine mouse pointer
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (!mediaQuery.matches) return;
    setIsFinePointer(true);

    const mouse = { x: -100, y: -100 };
    const ring = { x: -100, y: -100 };
    let animationFrameId;

    const onMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      if (!isVisible) setIsVisible(true);

      // Instant dot positioning
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0)`;
      }
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    // Dynamic hover target detector
    const onMouseOver = (e) => {
      const target = e.target.closest(
        'button, a, input, select, textarea, [role="button"], .hover-lift, .hero-badge-col, .shimmer-btn, .clickable, .cursor-pointer'
      );
      if (target) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    // Smooth lerp loop for the outer follower ring
    const render = () => {
      // Lerp formula: current + (target - current) * factor
      ring.x += (mouse.x - ring.x) * 0.18;
      ring.y += (mouse.y - ring.y) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseover', onMouseOver, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    render();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  if (!isFinePointer) return null;

  return (
    <div
      className="agency-cursor-wrapper"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 0,
        height: 0,
        pointerEvents: 'none',
        zIndex: 99999,
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.25s ease'
      }}
    >
      {/* Precision Center Dot */}
      <div
        ref={dotRef}
        className="agency-cursor-dot"
        style={{
          position: 'fixed',
          top: -3.5,
          left: -3.5,
          width: '7px',
          height: '7px',
          borderRadius: '50%',
          backgroundColor: 'var(--primary-blue)',
          pointerEvents: 'none',
          willChange: 'transform',
          transition: 'transform 0.05s linear, opacity 0.2s ease, scale 0.2s ease',
          opacity: isHovered ? 0.35 : 0.85,
          transform: 'translate3d(-100px, -100px, 0)'
        }}
      />

      {/* Fluid Lerping Ring */}
      <div
        ref={ringRef}
        className="agency-cursor-ring"
        style={{
          position: 'fixed',
          top: isHovered ? -22 : -15,
          left: isHovered ? -22 : -15,
          width: isHovered ? '44px' : '30px',
          height: isHovered ? '44px' : '30px',
          borderRadius: '50%',
          border: isHovered
            ? '1.5px solid var(--accent-green)'
            : '1.2px solid rgba(0, 86, 179, 0.45)',
          backgroundColor: isHovered
            ? 'rgba(0, 135, 90, 0.08)'
            : 'transparent',
          backdropFilter: isHovered ? 'blur(1px)' : 'none',
          pointerEvents: 'none',
          willChange: 'transform',
          transform: 'translate3d(-100px, -100px, 0)',
          transition: 'width 0.24s cubic-bezier(0.16, 1, 0.3, 1), height 0.24s cubic-bezier(0.16, 1, 0.3, 1), top 0.24s cubic-bezier(0.16, 1, 0.3, 1), left 0.24s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.24s ease, background-color 0.24s ease, scale 0.15s ease',
          scale: isClicked ? '0.85' : '1'
        }}
      />
    </div>
  );
}
