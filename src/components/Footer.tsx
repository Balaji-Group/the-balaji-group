import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-accent rounded-sm flex items-center justify-center">
                <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-heading font-bold text-primary">BALAJI GROUP</h3>
                <p className="text-xs text-off-white">A Complete House of Packaging</p>
              </div>
            </div>
            <p className="text-off-white text-sm leading-relaxed mb-6">
              Since 2002, delivering innovative packaging solutions across India and abroad
              with quality, innovation, and customer satisfaction at our core.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/the-balaji-group-jaipur" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-card rounded-lg flex items-center justify-center hover:bg-secondary transition-colors cursor-pointer">
                <Linkedin className="w-4 h-4 text-foreground" />
              </a>
              <div className="w-8 h-8 bg-card rounded-lg flex items-center justify-center hover:bg-secondary transition-colors cursor-pointer">
                <Twitter className="w-4 h-4 text-foreground" />
              </div>
              <div className="w-8 h-8 bg-card rounded-lg flex items-center justify-center hover:bg-secondary transition-colors cursor-pointer">
                <Facebook className="w-4 h-4 text-foreground" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-primary">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Our Group', 'Team', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '')}`} className="text-off-white hover:text-accent transition-colors text-sm">
                    {link}
                  </a>
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
                <span className="text-off-white text-sm">+91 9829069467</span>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-off-white text-sm">sumit@thebalajigroup.in</span>
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
            © 2024 Balaji Group. All rights reserved.
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
