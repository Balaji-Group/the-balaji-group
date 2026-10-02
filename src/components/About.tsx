import { Award, Clock, Eye, Globe, Target, Users } from 'lucide-react';
import { withBase } from '@/lib/utils';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import CountUp from '@/components/CountUp';
import Timeline from '@/components/Timeline';
import CoreValues from '@/components/CoreValues';
import NetworkCoverage from '@/components/NetworkCoverage';

const stats = [
  { icon: <Users />, value: 1000, suffix: '+', label: 'Happy clients' },
  { icon: <Globe />, value: 5, suffix: '', label: 'States covered' },
  { icon: <Award />, value: 22, suffix: '+', label: 'Years of experience' },
  { icon: <Clock />, value: 24, suffix: '/7', label: 'Customer support' },
];

const About = () => (
  <>
    <PageHero
      kicker="Our story"
      title="About Balaji Group"
      lede="A house of professionals dealing in paper and paper products with over 2 decades of experience"
    />

    <section className="about-intro" aria-label="Vision, mission and founder">
      <div className="about-intro-inner">
        <div className="docket-stack">
          <Reveal>
            <article className="docket">
              <header>
                <span className="docket-no">01</span>
                <Eye size={18} aria-hidden="true" />
                <h2>Vision</h2>
              </header>
              <p>
                To create a seamless ecosystem and be a one-stop solution for all your kraft paper needs. Our vision is
                to be the go-to partner for businesses seeking reliable kraft paper solutions.
              </p>
            </article>
          </Reveal>
          <Reveal index={1}>
            <article className="docket">
              <header>
                <span className="docket-no">02</span>
                <Target size={18} aria-hidden="true" />
                <h2>Mission</h2>
              </header>
              <p>
                To be the leading provider of high-quality kraft paper, connecting mill owners, distributors, and
                end-users across industries. We strive to deliver sustainable solutions that enhance packaging,
                printing, and other applications.
              </p>
            </article>
          </Reveal>
        </div>

        <Reveal index={2} className="founder-wrap">
          <figure className="founder-tag">
            <span className="tag-hole" aria-hidden="true" />
            <div className="founder-photo">
              <img
                src={withBase('/uploads/55e7530b-dab7-42ec-a814-8a4ff7b4cb6a.png')}
                alt="Sumit Goel, Founding Director"
              />
            </div>
            <figcaption>
              <strong>Sumit Goel</strong>
              <span className="founder-role">Founding Director</span>
              <p>
                Leading Balaji Group with a vision to revolutionize the packaging industry through innovation, quality,
                and customer-centric solutions.
              </p>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>

    <section className="stats-band" aria-label="Balaji Group in numbers">
      <dl className="stats-grid">
        {stats.map((stat) => (
          <div className="stat" key={stat.label}>
            <span className="stat-icon" aria-hidden="true">{stat.icon}</span>
            <dt>{stat.label}</dt>
            <dd>
              <CountUp to={stat.value} suffix={stat.suffix} />
            </dd>
          </div>
        ))}
      </dl>
    </section>

    <Timeline />
    <CoreValues />
    <NetworkCoverage />
  </>
);

export default About;
