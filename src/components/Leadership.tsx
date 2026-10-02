import { withBase } from '@/lib/utils';
import Reveal from '@/components/Reveal';

const team = [
  {
    name: 'Dinesh Gupta',
    position: 'Partner: Shri Balaji Packaging',
    image: withBase('/uploads/f8765c98-74de-4cd5-874a-93ba8d1ccdd3.png'),
    joinYear: '2011',
    description:
      'Since becoming a partner in 2011, I have dedicated my efforts to enhancing the efficiency of our system. I firmly believe that with a robust system in place, we can excel at any given stage.',
  },
  {
    name: 'Vivek Agarwal',
    position: 'Partner: Shri Balaji Packaging',
    image: withBase('/uploads/bd704adf-2067-49fc-8b79-f367bde4b264.png'),
    joinYear: '2017',
    description:
      "I became a partner in 2017. I am convinced that our distinction lies in our quality and resilience to tailor our designs precisely to meet every customer's needs.",
  },
  {
    name: 'Shaswat Kamalia',
    position: 'Director: Ganpati Coroplast Pvt. Ltd.',
    image: withBase('/uploads/shaswat-kamalia.jpg'),
    joinYear: '2024',
    description:
      "As a young director in the packaging world, I'm focused on bringing fresh energy and practical ideas to make a real difference.",
  },
  {
    name: 'Subhash KR Boobna',
    position: 'Director: Ganpati Coroplast Pvt. Ltd.',
    image: withBase('/uploads/subhash-kr-boobna.jpg'),
    joinYear: '2024',
    description:
      'As a director, I am committed to building strong operational foundations and fostering relationships that drive sustainable growth for our company and partners.',
  },
  {
    name: 'Ashish Boobna',
    position: 'Director: Ganpati Coroplast Pvt. Ltd.',
    image: withBase('/uploads/ashish-boobna.jpg'),
    joinYear: '2024',
    description:
      'In the competitive packaging industry, I believe success comes from adapting to market demands while maintaining unwavering commitment to quality and customer satisfaction at every step.',
  },
];

const Leadership = () => (
  <section className="leaders" aria-labelledby="leaders-heading">
    <div className="leaders-inner">
      <p className="section-kicker">Leadership team</p>
      <h2 id="leaders-heading">Our team</h2>
      <p className="values-lede">
        Meet the dedicated professionals driving innovation and excellence in packaging solutions.
      </p>

      <ul className="badge-grid">
        {team.map((member, index) => (
          <li key={member.name}>
            <Reveal index={index % 3}>
              <article className="badge">
                <span className="badge-slot" aria-hidden="true" />
                <div className="badge-photo">
                  <img src={member.image} alt={member.name} loading="lazy" />
                </div>
                <h3>{member.name}</h3>
                <p className="badge-role">{member.position}</p>
                <p className="badge-year">Joined {member.joinYear}</p>
                <p className="badge-quote">{member.description}</p>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>

      <blockquote className="philosophy">
        <p className="philosophy-label">Leadership philosophy</p>
        Our leadership team brings together decades of experience in packaging innovation, operational excellence, and
        customer service. We believe in empowering our team to deliver solutions that exceed expectations while
        maintaining the highest quality standards.
      </blockquote>
    </div>
  </section>
);

export default Leadership;
