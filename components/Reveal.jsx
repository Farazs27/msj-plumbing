'use client';

import { useEffect, useRef, useState } from 'react';

export default function Reveal({ children, stagger = false, as: Tag = 'div', className = '', ...rest }) {
  const ref = useRef(null);
  const [mounted, setMounted] = useState(false);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!ref.current) { setInView(true); return; }

    // If already in viewport on load, show immediately — no flash
    const rect = ref.current.getBoundingClientRect();
    if (rect.top < window.innerHeight + 100 && rect.bottom > -100) {
      setInView(true);
      return;
    }

    if (!('IntersectionObserver' in window)) { setInView(true); return; }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { setInView(true); io.disconnect(); }
        });
      },
      { threshold: 0.06, rootMargin: '0px 0px -20px 0px' }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  const base = stagger ? 'reveal-stagger' : 'reveal';
  // SSR → no animation class (fully visible). Client → animate only below-fold elements.
  const animClass = mounted ? `${base} ${inView ? 'in' : ''}` : '';

  return (
    <Tag ref={ref} className={`${animClass} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
