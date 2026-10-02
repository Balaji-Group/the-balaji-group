import { useRef, type CSSProperties, type ReactNode } from 'react';
import { useInView } from '@/hooks/use-scroll-fx';

interface RevealProps {
  index?: number;
  className?: string;
  children: ReactNode;
}

/** Fades and lifts its children into place once scrolled into view. */
const Reveal = ({ index = 0, className = '', children }: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const seen = useInView(ref, 0.15);

  return (
    <div
      ref={ref}
      className={`reveal${seen ? ' is-in' : ''} ${className}`.trim()}
      style={{ '--i': index } as CSSProperties}
    >
      {children}
    </div>
  );
};

export default Reveal;
