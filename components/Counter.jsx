'use client';

import { useEffect, useRef, useState } from 'react';

export default function Counter({ to, duration = 1800 }) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!ref.current || !('IntersectionObserver' in window)) {
      setValue(to);
      return;
    }
    const target = Number(to);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const start = performance.now();
          const step = (now) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            const v = target * eased;
            setValue(Number.isInteger(target) ? Math.floor(v) : +v.toFixed(1));
            if (p < 1) requestAnimationFrame(step);
            else setValue(target);
          };
          requestAnimationFrame(step);
          io.disconnect();
        });
      },
      { threshold: 0.5 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [to, duration]);

  return <span ref={ref}>{value}</span>;
}
