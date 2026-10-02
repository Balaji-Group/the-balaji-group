import { Award, CheckCircle, Shield, Star } from 'lucide-react';
import Reveal from '@/components/Reveal';

const certifications = [
  { title: 'ISO 9001:2015', description: 'Quality Management System Certified', icon: <Shield /> },
  { title: 'FSC Certified', description: 'Responsibly Sourced Materials', icon: <CheckCircle /> },
  { title: 'MSME Registered', description: 'Government Recognized Enterprise', icon: <Award /> },
  { title: 'GST Compliant', description: 'Fully Tax Compliant Operations', icon: <Star /> },
];

const Certifications = () => (
  <section className="seals" aria-labelledby="seals-heading">
    <div className="seals-inner">
      <p className="section-kicker">Quality assurance</p>
      <h2 id="seals-heading">Certifications and standards</h2>
      <p className="values-lede">Our commitment to quality is backed by industry-recognized certifications.</p>

      <ul className="seal-grid">
        {certifications.map((cert, index) => (
          <li key={cert.title}>
            <Reveal index={index}>
              <div className="seal">
                <span className="seal-ring" aria-hidden="true">{cert.icon}</span>
                <h3>{cert.title}</h3>
                <p>{cert.description}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>

      <p className="seal-note">All our products undergo rigorous quality testing before dispatch.</p>
    </div>
  </section>
);

export default Certifications;
