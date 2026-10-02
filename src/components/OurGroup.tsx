import { useRef, useState, type KeyboardEvent } from 'react';
import { Calendar, Download, Factory, MapPin, Truck, Users } from 'lucide-react';
import { withBase } from '@/lib/utils';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import Certifications from '@/components/Certifications';
import Leadership from '@/components/Leadership';

const companies = [
  {
    name: 'Balaji Packaging Industries',
    tab: 'Balaji Packaging',
    established: '2002',
    location: 'Rajasthan, India',
    description:
      "Our very first setup marked the beginning of our journey in packaging. Starting as a manual plant, equipped with skilled people, sustainable infrastructure, and reliable machines, we laid a strong foundation for manufacturing corrugated boxes and mono cartons. Over time, through continuous innovation and upgrades, we have mastered the art of packaging and built a reputation for delivering high-quality, customized solutions. Every product reflects our commitment to precision, sustainability, and client satisfaction. Today, we stand among the best in the market, trusted for creating packaging that combines durability, functionality, and design tailored to our customers' needs.",
    partners: ['Founding Director: Mr. Sumit Goel'],
    icon: <Factory />,
    brochure: '/profiles/Balaji Profile 2.pdf',
  },
  {
    name: 'Balaji Paper Mart',
    tab: 'Paper Mart',
    established: '2004',
    location: 'Jaipur, Rajasthan (Multi-state operations)',
    description:
      'A trusted name in the trade of Kraft paper and Duplex Board with a legacy spanning over two decades. The company has become a prominent player in the Kraft paper trading industry, recognized for its quality products and dependable service. Based in Jaipur, we cater to clients across Rajasthan, Western Uttar Pradesh, Himachal Pradesh, Bihar, and the National Capital Region, reflecting our robust distribution network and dedication to meeting diverse business needs. Our product profile includes Kraft paper & Duplex board, corrugated rolls, sheets and boxes, and Duplex/E-flute mono cartons.',
    partners: ['Managing Partner: Mr. Sumit Goel'],
    icon: <Truck />,
    brochure: '/profiles/Paper Mart Profile.pdf',
  },
  {
    name: 'Shri Balaji Packaging',
    tab: 'Shri Balaji',
    established: '2011',
    location: 'Rajasthan, India',
    description:
      'A state-of-the-art fully automatic corrugated plant located in Rajasthan, equipped with cutting-edge production facilities. Our facility currently converts 10,000 tons of paper annually into premium corrugated boxes, supported by a dedicated workforce of 80 skilled employees committed to delivering exceptional quality packaging solutions.',
    partners: [
      'Partner: Mr. Dinesh Gupta',
      'Partner: Mr. Vivek Agarwal',
      'Partner: Mr. Sumit Goel',
      'Partner: Mrs. Smriti Goel',
    ],
    icon: <Factory />,
    brochure: '/profiles/Balaji Profile 2.pdf',
  },
  {
    name: 'Ganpati Coroplast Pvt. Ltd.',
    tab: 'Ganpati Coroplast',
    established: '2024',
    location: 'Patna, Bihar',
    description:
      "Ganpati Coroplast specialises in manufacturing high-quality carton packaging solutions with a vision to serve a variety of industries nationwide. With a focus on innovation, sustainability, and customer satisfaction, we deliver customizable packaging tailored to meet our clients' needs. Our commitment to excellence, eco-friendly practices, and exceptional service sets us apart as a trusted partner in packaging solutions.",
    partners: [
      'Founding Director: Mr. Sumit Goel',
      'Director: Mr. Shaswat Kamalia',
      'Director: Mr. Ashish Boobna',
    ],
    icon: <Factory />,
    brochure: '/profiles/GCPL Company Profile.pdf',
  },
  {
    name: 'Laxmi Packaging',
    tab: 'Laxmi Packaging',
    established: '2007',
    location: 'India',
    description:
      'Laxmi Packaging, founded in 2007, began as a modest operation focused on providing quality box solutions to the community. Overcoming initial challenges and market competition, the company steadily grew through its commitment to innovation and excellence. Today, the manufacturing unit features advanced Offset Printing, Lamination, Die Punching, Flute Laminator, and cutting machines, enabling comprehensive packaging solutions for diverse client needs. Serving over 100 clients, Laxmi Packaging has built a reputation for reliability and consistent quality. The company aims to expand into new markets, create more job opportunities, and contribute to a better future with continued support from its dedicated team and valued customers.',
    partners: ['Director: Mr. Vivek Agarwal'],
    icon: <Factory />,
    brochure: '/profiles/Balaji Profile 2.pdf',
  },
];

const OurGroup = () => {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const company = companies[active];

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const last = companies.length - 1;
    const next =
      event.key === 'ArrowRight' ? (index === last ? 0 : index + 1)
      : event.key === 'ArrowLeft' ? (index === 0 ? last : index - 1)
      : event.key === 'Home' ? 0
      : event.key === 'End' ? last
      : null;
    if (next === null) return;
    event.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <>
      <PageHero
        kicker="Our companies"
        title="Our Group"
        lede="A diversified portfolio of companies working together to deliver comprehensive packaging solutions"
      />

      <section className="folders" aria-label="Group companies">
        <div className="folders-inner">
          <div className="folder-tabs" role="tablist" aria-label="Choose a group company">
            {companies.map((item, index) => (
              <button
                key={item.name}
                ref={(el) => { tabRefs.current[index] = el; }}
                role="tab"
                id={`company-tab-${index}`}
                aria-selected={active === index}
                aria-controls="company-panel"
                tabIndex={active === index ? 0 : -1}
                className="folder-tab"
                onClick={() => setActive(index)}
                onKeyDown={(event) => onKeyDown(event, index)}
              >
                <span className="folder-tab-year">{item.established}</span>
                {item.tab}
              </button>
            ))}
          </div>

          <div className="folder-sheet" role="tabpanel" id="company-panel" aria-labelledby={`company-tab-${active}`}>
            <div className="folder-body" key={company.name}>
              <div className="folder-head">
                <span className="folder-icon" aria-hidden="true">{company.icon}</span>
                <span className="folder-stamp">
                  <Calendar size={14} aria-hidden="true" /> Est. {company.established}
                </span>
              </div>
              <h2>{company.name}</h2>
              <p className="folder-place">
                <MapPin size={15} aria-hidden="true" /> {company.location}
              </p>
              <p className="folder-description">{company.description}</p>

              <div className="folder-foot">
                <div>
                  <p className="folder-partners-title">
                    <Users size={15} aria-hidden="true" /> Key partners
                  </p>
                  <ul className="folder-partners">
                    {company.partners.map((partner) => (
                      <li key={partner}>{partner}</li>
                    ))}
                  </ul>
                </div>
                <a className="folder-brochure" href={withBase(company.brochure)} download>
                  <Download size={16} aria-hidden="true" />
                  Download {company.name.split(' ')[0]} brochure
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Certifications />
      <Leadership />

      <section className="closing" aria-label="Combined excellence">
        <Reveal>
          <h2>Combined excellence</h2>
          <p>
            Together, our group companies represent decades of expertise, cutting-edge technology, and unwavering
            commitment to quality in the packaging industry.
          </p>
        </Reveal>
      </section>
    </>
  );
};

export default OurGroup;
