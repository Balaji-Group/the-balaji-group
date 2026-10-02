import { useEffect, useState, type RefObject } from 'react';

const clamp = (value: number, min = 0, max = 1) => Math.min(max, Math.max(min, value));
const segment = (p: number, from: number, to: number) => clamp((p - from) / (to - from));
const smooth = (t: number) => t * t * (3 - 2 * t);

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Calls `apply` on every animation frame while the page scrolls or resizes. */
function useFrameSync(apply: () => void, deps: unknown[]) {
  useEffect(() => {
    let frame = 0;
    const run = () => {
      frame = 0;
      apply();
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(run);
    };
    run();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      if (frame) cancelAnimationFrame(frame);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

/**
 * Drives the carton fold. The element is a tall track whose first child is
 * `position: sticky`; scrolling through the track writes staged 0..1 values
 * as CSS custom properties, so nothing re-renders per frame.
 */
export function useFoldProgress(trackRef: RefObject<HTMLElement>) {
  useFrameSync(() => {
    const track = trackRef.current;
    const sticky = track?.firstElementChild as HTMLElement | null;
    if (!track || !sticky) return;

    let p = 1;
    if (!prefersReducedMotion()) {
      const stickyTop = parseFloat(getComputedStyle(sticky).top) || 0;
      const travel = track.offsetHeight - sticky.offsetHeight;
      p = travel > 0 ? clamp((stickyTop - track.getBoundingClientRect().top) / travel) : 1;
    }

    const set = (name: string, value: number) => track.style.setProperty(name, value.toFixed(4));
    set('--p', p);
    set('--front', smooth(segment(p, 0.1, 0.3)));
    set('--right', smooth(segment(p, 0.18, 0.38)));
    set('--left', smooth(segment(p, 0.26, 0.46)));
    set('--back', smooth(segment(p, 0.34, 0.54)));
    set('--lid', smooth(segment(p, 0.58, 0.76)));
    set('--seal', smooth(segment(p, 0.8, 0.92)));
    track.dataset.step = p < 0.1 ? '0' : p < 0.58 ? '1' : p < 0.8 ? '2' : '3';
  }, [trackRef]);
}

/** Writes `--j` (0..1) as a section scrolls up through the viewport. */
export function useSectionProgress(ref: RefObject<HTMLElement>) {
  useFrameSync(() => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = prefersReducedMotion()
      ? 1
      : clamp((window.innerHeight * 0.85 - rect.top) / (rect.height * 0.75));
    el.style.setProperty('--j', p.toFixed(4));
  }, [ref]);
}

/** True once the element has entered the viewport. */
export function useInView<T extends HTMLElement>(ref: RefObject<T>, threshold = 0.25) {
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || seen) return;
    if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
      setSeen(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, seen, threshold]);
  return seen;
}
