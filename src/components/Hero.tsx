import { useRef } from 'react';
import { ArrowRight, ArrowUpRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import FoldingCarton from '@/components/FoldingCarton';
import { useFoldProgress } from '@/hooks/use-scroll-fx';

const facts = [
  { value: '2002', label: 'Established' },
  { value: '10,000+', label: 'Tonnes converted yearly' },
  { value: '5', label: 'Group businesses' },
];

const steps = ['Flat board', 'Scored and folded', 'Closed', 'Sealed'];

const Hero = () => {
  const trackRef = useRef<HTMLElement>(null);
  useFoldProgress(trackRef);

  return (
    <section ref={trackRef} id="home" className="fold-hero" data-step="0">
      <div className="fold-sticky">
        <div className="hero-main">
          <div className="hero-copy">
            <p className="hero-kicker">
              <span className="hero-kicker-mark" aria-hidden="true" />
              Packaging partners since 2002
            </p>
            <h1>Packaging that protects what you build.</h1>
            <p className="hero-description">
              Corrugated cartons, mono cartons and kraft paper, made for the way your business moves.
            </p>
            <div className="hero-actions">
              <Link className="hero-primary-action" to="/contact">
                Request a quote <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link className="hero-secondary-action" to="/products">
                Explore products <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
            </div>
            <dl className="hero-facts" aria-label="Balaji Group at a glance">
              {facts.map(({ value, label }) => (
                <div className="hero-fact" key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="fold-visual">
            <FoldingCarton />
            <ol className="fold-steps" aria-label="From flat board to sealed carton">
              {steps.map((step, index) => (
                <li key={step} data-i={index}>
                  <span>{`0${index + 1}`}</span>
                  {step}
                </li>
              ))}
            </ol>
            <p className="fold-hint" aria-hidden="true">
              Scroll to fold <ChevronDown size={14} />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
