import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection = () => (
  <section className="label-section" aria-labelledby="label-heading">
    <div className="label-inner">
      <div className="label-copy">
        <p className="section-kicker">Ready when you are</p>
        <h2 id="label-heading">Tell us what you ship. We will build the box.</h2>
        <p>
          Share your product, quantity and timeline. Our team will come back with the right board, size and print.
        </p>
        <div className="label-actions">
          <Link className="hero-primary-action" to="/contact">
            Request a quote <ArrowRight size={18} aria-hidden="true" />
          </Link>
          <Link className="hero-secondary-action" to="/products">
            Explore products <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>

      <div className="shipping-label" role="group" aria-label="Contact details laid out as a shipping label">
        <span className="label-tape" aria-hidden="true" />
        <div className="label-row">
          <span className="label-field">To</span>
          <strong>The Balaji Group</strong>
        </div>
        <div className="label-row">
          <span className="label-field">Address</span>
          <span className="label-line">
            <MapPin size={15} aria-hidden="true" />
            B1/2b, C-block, SDC Gateway, Bani Park, Jaipur, Rajasthan - 302016
          </span>
        </div>
        <div className="label-row">
          <span className="label-field">Call</span>
          <a className="label-line" href="tel:+919829069467">
            <Phone size={15} aria-hidden="true" />
            +91 9829069467
          </a>
        </div>
        <div className="label-row">
          <span className="label-field">Write</span>
          <a className="label-line" href="mailto:sumit@thebalajigroup.in">
            <Mail size={15} aria-hidden="true" />
            sumit@thebalajigroup.in
          </a>
        </div>
        <div className="label-barcode" aria-hidden="true" />
        <p className="label-foot">Handle with care · Keep dry · Packaging since 2002</p>
      </div>
    </div>
  </section>
);

export default CTASection;
