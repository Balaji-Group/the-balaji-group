import { Archive, Box, Grid, Layers, Package, Shield, Truck, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import { withBase } from '@/lib/utils';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';

const productCategories = [
  {
    title: 'Self-lock Boxes & Telescope Boxes',
    description: 'High-quality self-locking and telescope-style packaging solutions',
    images: [
      { src: withBase('/uploads/9e32d3b2-4372-46ed-84dc-5fa1d7057507.png'), alt: 'Self-lock Box', name: 'Premium Self-lock Box' },
      { src: withBase('/uploads/2fc955c0-0b4b-4b31-a1e0-a1f32a05c4a5.png'), alt: 'Telescope Box', name: 'Telescope Type Box' },
    ],
    icon: <Package />,
  },
  {
    title: 'Mono Cartons & Display Solutions',
    description: 'Premium mono cartons and retail display packaging',
    images: [
      { src: withBase('/uploads/6745c2c4-19df-451a-8fa1-fa4ea546dce9.png'), alt: 'Mono Cartons', name: 'Multi-size Mono Cartons' },
      { src: withBase('/uploads/bf4716eb-04da-4eb4-8edf-1167f2732164.png'), alt: 'Display Carton', name: 'Display Carton Tray' },
    ],
    icon: <Grid />,
  },
  {
    title: 'Corrugated Solutions & Raw Materials',
    description: 'Industrial-grade corrugated boxes and kraft paper rolls',
    images: [
      { src: withBase('/uploads/f12ca268-35e7-4fa0-be92-7136817cbee7.png'), alt: 'Corrugated Box', name: 'Heavy-duty Corrugated Box' },
      { src: withBase('/uploads/87548fb1-5f11-4212-b6f4-f2dc4cad2bcb.png'), alt: 'Kraft Paper Roll', name: 'Kraft Paper Roll' },
    ],
    icon: <Archive />,
  },
  {
    title: 'Specialized Containers',
    description: 'Custom packaging solutions for specific industry needs',
    images: [
      { src: withBase('/uploads/ce006d9d-8bf1-4d0e-889e-0053bc15dd7c.png'), alt: 'Shoe Box', name: 'Premium Shoe Box' },
    ],
    icon: <Box />,
  },
];

const allSolutions = [
  { title: 'Mono Cartons', description: 'High-quality mono cartons for premium packaging needs', icon: <Package /> },
  { title: 'Self-lock Trays', description: 'Convenient self-locking tray solutions for easy assembly', icon: <Box /> },
  { title: 'Display Cartons', description: 'Eye-catching display cartons for retail environments', icon: <Grid /> },
  { title: 'Telescope Type Boxes', description: 'Adjustable telescope boxes for various product sizes', icon: <Layers /> },
  { title: 'Regular Slotted Containers', description: 'Standard RSC boxes for general packaging applications', icon: <Archive /> },
  { title: 'Corrugated Honeycomb Partitions', description: 'Protective partitions for delicate items', icon: <Shield /> },
  { title: 'Full Overlap Slotted Containers', description: 'Enhanced protection with full overlap design', icon: <Wrench /> },
  { title: 'Large Specialized Boxes', description: 'Custom large boxes for white goods industry', icon: <Truck /> },
];

const industries = [
  'FMCG - Oil, Mineral water, Snacks',
  'Consumer Lighting & Electronics',
  'Engineering Goods',
  'Automotive Sector',
  'Liquor Industry',
  'Handicraft',
  'Garments',
  'Footwear',
  'E-commerce Packaging',
  'Pharmaceutical',
  'Food & Beverage',
  'Home Appliances',
];

const ProductGallery = () => (
  <>
    <PageHero
      kicker="Our products"
      title="Complete Packaging Solutions"
      lede="From concept to delivery, we provide comprehensive packaging solutions designed to meet diverse industry requirements"
    />

    <section className="catalogue" aria-label="Product categories">
      <div className="catalogue-inner">
        {productCategories.map((category, index) => (
          <Reveal key={category.title}>
            <article className="spec-sheet">
              <header className="spec-head">
                <span className="spec-no" aria-hidden="true">{`0${index + 1}`}</span>
                <span className="spec-icon" aria-hidden="true">{category.icon}</span>
                <div>
                  <h2>{category.title}</h2>
                  <p>{category.description}</p>
                </div>
              </header>

              <ul className="spec-photos">
                {category.images.map((image) => (
                  <li key={image.name}>
                    <figure className="mount">
                      <span className="mount-tape" aria-hidden="true" />
                      <div className="mount-photo">
                        <img src={image.src} alt={image.alt} loading="lazy" />
                      </div>
                      <figcaption>{image.name}</figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>

    <section className="range" aria-labelledby="range-heading">
      <div className="range-inner">
        <p className="section-kicker">The full line</p>
        <h2 id="range-heading">Complete product range</h2>
        <ul className="range-grid">
          {allSolutions.map((solution, index) => (
            <li key={solution.title}>
              <Reveal index={index % 4}>
                <article className="range-card">
                  <span className="range-icon" aria-hidden="true">{solution.icon}</span>
                  <h3>{solution.title}</h3>
                  <p>{solution.description}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>

    <section className="served" aria-labelledby="served-heading">
      <div className="served-inner">
        <p className="section-kicker">Packed for every sector</p>
        <h2 id="served-heading">Industries we serve</h2>
        <ul className="served-list">
          {industries.map((industry) => (
            <li key={industry}>{industry}</li>
          ))}
        </ul>
      </div>
    </section>

    <section className="role" aria-labelledby="role-heading">
      <Reveal>
        <div className="role-inner">
          <h2 id="role-heading">Our role in packaging</h2>
          <p>
            Packaging plays a very critical role in building the brand equity of the product packed inside. We
            specialize in customized packaging and provide solutions to all the clients across all the business
            categories. We do not just deliver the boxes but also print according to customer needs. We check every
            minor details and take care of the physical attributes to deliver you the best product of your choice!
          </p>
          <Link className="hero-primary-action" to="/contact">
            Request a quote
          </Link>
        </div>
      </Reveal>
    </section>
  </>
);

export default ProductGallery;
