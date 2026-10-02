import { useRef } from 'react';
import { MapPin } from 'lucide-react';
import { useSectionProgress } from '@/hooks/use-scroll-fx';
import Reveal from '@/components/Reveal';

interface Milestone {
  year: string;
  title: string;
  description: string;
  location: string;
  highlight?: boolean;
}

const milestones: Milestone[] = [
  {
    year: '2002',
    title: 'Balaji Packaging Industries',
    description:
      'Our journey began with a manual plant in Rajasthan, equipped with skilled craftsmen and reliable machines. This marked the foundation of our packaging expertise.',
    location: 'Rajasthan, India',
    highlight: true,
  },
  {
    year: '2004',
    title: 'Balaji Paper Mart',
    description:
      'Established as a trusted name in Kraft paper and Duplex Board trade. Expanded operations across Rajasthan, UP, Himachal Pradesh, Bihar, and NCR.',
    location: 'Jaipur, Rajasthan',
  },
  {
    year: '2007',
    title: 'Laxmi Packaging',
    description:
      'Founded to provide quality box solutions. Today features advanced Offset Printing, Lamination, Die Punching, and cutting machines serving 100+ clients.',
    location: 'India',
  },
  {
    year: '2011',
    title: 'Shri Balaji Packaging',
    description:
      'Launched a state-of-the-art fully automatic corrugated plant. Currently converts 10,000 tons of paper annually with 80 skilled employees.',
    location: 'Rajasthan, India',
    highlight: true,
  },
  {
    year: '2024',
    title: 'Ganpati Coroplast Pvt. Ltd.',
    description:
      'Expanded into Bihar with a vision to serve industries nationwide. Focus on innovation, sustainability, and customizable packaging solutions.',
    location: 'Patna, Bihar',
    highlight: true,
  },
];

const Timeline = () => {
  const ref = useRef<HTMLElement>(null);
  useSectionProgress(ref);

  return (
    <section ref={ref} className="timeline" aria-labelledby="timeline-heading">
      <div className="timeline-inner">
        <p className="section-kicker">Our journey</p>
        <h2 id="timeline-heading">Folded into shape, year by year</h2>
        <p className="timeline-lede">
          From humble beginnings to industry leadership: the milestones that shaped our company.
        </p>

        <div className="timeline-track">
          <div className="timeline-rail" aria-hidden="true">
            <div className="timeline-rail-fill" />
          </div>
          <ol className="timeline-list">
            {milestones.map((item, index) => (
              <li className={`timeline-item ${index % 2 === 0 ? 'is-left' : 'is-right'}`} key={item.title}>
                <span className="timeline-year">{item.year}</span>
                <Reveal className="timeline-card-wrap" index={0}>
                  <article className={`timeline-card${item.highlight ? ' is-key' : ''}`}>
                    {item.highlight && <span className="timeline-flag">Key milestone</span>}
                    <h3>{item.title}</h3>
                    <p className="timeline-place">
                      <MapPin size={14} aria-hidden="true" /> {item.location}
                    </p>
                    <p>{item.description}</p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ol>
          <p className="timeline-end">And the journey continues.</p>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
