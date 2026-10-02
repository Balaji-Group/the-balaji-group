import { Phone, Mail, MapPin, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { withBase } from '@/lib/utils';

const Footer = () => {
  return (
    <footer className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="site-brand footer-brand">
              <img className="brand-mark" src={withBase('/brand-mark.svg')} alt="" />
              <span className="site-brand-copy">
                <span className="site-brand-name">The Balaji Group</span>
                <span className="site-brand-caption">Packaging since 2002</span>
              </span>
            </Link>
            <p className="text-off-white text-sm leading-relaxed mb-6">
              Since 2002, delivering innovative packaging solutions across India and abroad
              with quality, innovation, and customer satisfaction at our core.
            </p>
            <div className="flex">
              <a aria-label="The Balaji Group on LinkedIn" href="https://www.linkedin.com/company/the-balaji-group-jaipur/" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                <Linkedin className="w-4 h-4 text-foreground" />
                  </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-primary">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', to: '/' },
                { label: 'About', to: '/about' },
                { label: 'Companies', to: '/our-group' },
                { label: 'Products', to: '/products' },
                { label: 'Contact', to: '/contact' },
              ].map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="footer-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-primary">Product Types</h4>
            <ul className="space-y-3">
              {[
                'Mono Cartons',
                'Self-lock Trays',
                'Display Cartons',
                'Telescope Boxes',
                'RSC Containers',
                'Honeycomb Partitions'
              ].map((service) => (
                <li key={service}>
                  <span className="text-off-white text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-primary">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <a className="footer-contact-link" href="tel:+919829069467">+91 9829069467</a>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <a className="footer-contact-link" href="mailto:sumit@thebalajigroup.in">sumit@thebalajigroup.in</a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-off-white text-sm">
                  B1/2b, C-block, SDC Gateway,<br />
                  Bani Park, Jaipur, Rajasthan - 302016
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-off-white text-sm">
            © {new Date().getFullYear()} Balaji Group. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-off-white hover:text-accent text-sm transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-off-white hover:text-accent text-sm transition-colors">Terms of Service</Link>
            <Link to="/cookie-policy" className="text-off-white hover:text-accent text-sm transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
