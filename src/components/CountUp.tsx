import { useEffect, useRef, useState } from 'react';
import { useInView } from '@/hooks/use-scroll-fx';

interface CountUpProps {
  to: number;
  suffix?: string;
  duration?: number;
}

/** Counts from 0 to `to` when first visible; screen readers get the final value only. */
const CountUp = ({ to, suffix = '', duration = 1400 }: CountUpProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const seen = useInView(ref, 0.5);
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!seen) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(to);
      return;
    }
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      setValue(Math.round(to * (1 - Math.pow(1 - t, 3))));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [seen, to, duration]);

  return (
    <>
      <span className="sr-only">{`${to}${suffix}`}</span>
      <span ref={ref} aria-hidden="true">{`${value}${suffix}`}</span>
    </>
  );
};

export default CountUp;
