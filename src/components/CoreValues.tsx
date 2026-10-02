import { Award, Handshake, Heart, Leaf, Lightbulb, Shield } from 'lucide-react';
import Reveal from '@/components/Reveal';

const values = [
  {
    icon: <Heart />,
    title: 'Customer-Centric',
    description:
      'Our customers are at the heart of everything we do. We listen, anticipate needs, and deliver solutions that exceed expectations.',
  },
  {
    icon: <Shield />,
    title: 'Integrity',
    description:
      'We conduct business with the highest standards of honesty and transparency. Trust is built through ethical practices and accountability.',
  },
  {
    icon: <Lightbulb />,
    title: 'Innovation',
    description:
      'We embrace creativity and new technologies to provide cutting-edge packaging solutions. Continuous improvement is in our DNA.',
  },
  {
    icon: <Leaf />,
    title: 'Sustainability',
    description:
      'We are committed to eco-friendly practices, from responsible sourcing to minimizing our environmental footprint.',
  },
  {
    icon: <Award />,
    title: 'Excellence',
    description:
      'We pursue excellence in every product, every process, and every interaction. Quality is never an accident. It is the result of intelligent effort.',
  },
  {
    icon: <Handshake />,
    title: 'Partnership',
    description:
      'We believe in building long-term relationships with our clients, suppliers, and team members based on mutual respect and shared success.',
  },
];

const CoreValues = () => (
  <section className="values" aria-labelledby="values-heading">
    <div className="values-inner">
      <p className="section-kicker">What guides us</p>
      <h2 id="values-heading">Our core values</h2>
      <p className="values-lede">The principles that guide every decision and action at Balaji Group.</p>

      <ul className="values-grid">
        {values.map((value, index) => (
          <li key={value.title}>
            <Reveal index={index % 3}>
              <article className="value-card">
                <span className="value-mark" aria-hidden="true" />
                <span className="value-no" aria-hidden="true">{`0${index + 1}`}</span>
                <span className="value-icon" aria-hidden="true">{value.icon}</span>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default CoreValues;
