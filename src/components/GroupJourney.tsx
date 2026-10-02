import { useRef, type CSSProperties } from 'react';
import { useSectionProgress } from '@/hooks/use-scroll-fx';

const milestones = [
  {
    year: '2002',
    name: 'Balaji Packaging Industries',
    place: 'Rajasthan',
    note: 'The first plant. Corrugated boxes and mono cartons, made by skilled hands and reliable machines.',
  },
  {
    year: '2004',
    name: 'Balaji Paper Mart',
    place: 'Jaipur',
    note: 'Kraft paper and duplex board for customers across Rajasthan, western Uttar Pradesh, Himachal, Bihar and the NCR.',
  },
  {
    year: '2007',
    name: 'Laxmi Packaging',
    place: 'India',
    note: 'Offset printing, lamination, die punching and flute lamination, serving over 100 clients.',
  },
  {
    year: '2011',
    name: 'Shri Balaji Packaging',
    place: 'Rajasthan',
    note: 'A fully automatic corrugated plant converting 10,000 tonnes of paper a year with a team of 80.',
  },
  {
    year: '2024',
    name: 'Ganpati Coroplast Pvt. Ltd.',
    place: 'Patna, Bihar',
    note: 'Carton packaging for industries across the country, built on the same standards.',
  },
];

const GroupJourney = () => {
  const ref = useRef<HTMLElement>(null);
  useSectionProgress(ref);

  return (
    <section ref={ref} className="journey" aria-labelledby="journey-heading">
      <div className="journey-inner">
        <p className="section-kicker">Five companies, one standard</p>
        <h2 id="journey-heading">Built one flute at a time</h2>

        <div className="journey-track">
          <div className="journey-rail" aria-hidden="true">
            <div className="journey-rail-fill" />
          </div>
          <ol className="journey-list">
            {milestones.map((item, index) => (
              <li className="journey-item" key={item.name} style={{ '--i': index } as CSSProperties}>
                <span className="journey-stamp">{item.year}</span>
                <h3>{item.name}</h3>
                <p className="journey-place">{item.place}</p>
                <p>{item.note}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default GroupJourney;
