import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    // 1. Fallback for environments without IntersectionObserver
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal-on-scroll').forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    };

    // Trigger only when element is at least 100px (or 55px on mobile) inside the viewport
    const observerOptions = {
      root: null,
      rootMargin: isMobile ? '0px 0px -55px 0px' : '0px 0px -115px 0px',
      threshold: isMobile ? 0.1 : 0.15,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const observeElements = () => {
      const elements = document.querySelectorAll('.reveal-on-scroll:not(.is-visible)');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // If element is already in top part of initial viewport on page load
        if (rect.top < window.innerHeight * 0.65 && rect.bottom > 0) {
          setTimeout(() => el.classList.add('is-visible'), 120);
        } else {
          observer.observe(el);
        }
      });
    };

    observeElements();

    // Observe dynamically rendered or tab-changed items
    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
}
