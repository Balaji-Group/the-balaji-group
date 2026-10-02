import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { withBase } from '@/lib/utils';

const facts = [
  { value: '2002', label: 'Established' },
  { value: '10,000+', label: 'Tonnes converted yearly' },
  { value: '5', label: 'Group businesses' },
];

const Hero = () => (
  <section id="home" className="hero-section">
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

      <figure className="hero-product">
        <span className="hero-product-index" aria-hidden="true">01 / 03</span>
        <img
          src={withBase('/uploads/2fc955c0-0b4b-4b31-a1e0-a1f32a05c4a5.png')}
          alt="A corrugated shipping carton made for dependable product protection"
          fetchPriority="high"
        />
        <figcaption>
          <span>Corrugated packaging</span>
          <span>Made to fit the job</span>
        </figcaption>
      </figure>
    </div>

    <div className="hero-footer">
      <span>Paper <i /> Packaging <i /> Partnership</span>
      <Link to="/our-group">Meet the group <ArrowRight size={15} aria-hidden="true" /></Link>
    </div>
  </section>
);

export default Hero;
