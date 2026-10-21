import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Initializes Lenis smooth scrolling with cinematic inertia and binds it
 * to GSAP ScrollTrigger's ticker for 60/120fps stutter-free scroll physics.
 */
export function useSmoothScroll() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Check user accessibility preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Initialize Lenis with agency-grade inertia curve
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.1,
      infinite: false,
    });

    window.lenis = lenis;

    // Sync Lenis scroll events to ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // Sync GSAP ticker to Lenis RAF
    const rafCallback = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(rafCallback);
    gsap.ticker.lagSmoothing(0);

    // Intercept internal hash anchor clicks for smooth inertia transitions
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (href && href !== '#' && href.length > 1) {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          e.preventDefault();
          const isMobile = window.innerWidth <= 768;
          lenis.scrollTo(targetElement, {
            offset: isMobile ? -55 : -70,
            duration: 1.1,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          });
          if (history.pushState) {
            history.pushState(null, '', href);
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick, { passive: false });

    // Refresh ScrollTrigger once DOM layout has settled
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 400);

    return () => {
      clearTimeout(timeout);
      document.removeEventListener('click', handleAnchorClick);
      gsap.ticker.remove(rafCallback);
      lenis.destroy();
      window.lenis = null;
    };
  }, []);
}
