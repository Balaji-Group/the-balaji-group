import { useRef, type CSSProperties, type ReactNode } from 'react';
import {
  Package,
  Lightbulb,
  Cog,
  Car,
  Wine,
  Shirt,
  ShoppingBag,
  Pill,
  UtensilsCrossed,
  Home,
  Gift,
  Footprints,
} from 'lucide-react';
import { useInView } from '@/hooks/use-scroll-fx';

interface Industry {
  icon: ReactNode;
  name: string;
  description: string;
}

const industries: Industry[] = [
  { icon: <Package />, name: 'FMCG', description: 'Oil, mineral water, snacks and consumer goods' },
  { icon: <Lightbulb />, name: 'Electronics', description: 'Consumer lighting and electronic products' },
  { icon: <Cog />, name: 'Engineering', description: 'Industrial and engineering goods' },
  { icon: <Car />, name: 'Automotive', description: 'Auto parts and accessories' },
  { icon: <Wine />, name: 'Liquor', description: 'Premium beverage packaging' },
  { icon: <Gift />, name: 'Handicraft', description: 'Artisan and craft products' },
  { icon: <Shirt />, name: 'Garments', description: 'Fashion and apparel' },
  { icon: <Footprints />, name: 'Footwear', description: 'Shoes and footwear products' },
  { icon: <ShoppingBag />, name: 'E-commerce', description: 'Online retail packaging' },
  { icon: <Pill />, name: 'Pharmaceutical', description: 'Healthcare and medical products' },
  { icon: <UtensilsCrossed />, name: 'Food and beverage', description: 'Food processing and packaging' },
  { icon: <Home />, name: 'Home appliances', description: 'Consumer electronics and white goods' },
];

const IndustryTags = () => {
  const ref = useRef<HTMLElement>(null);
  const seen = useInView(ref, 0.15);

  return (
    <section ref={ref} className={`tags-section${seen ? ' is-in' : ''}`} aria-labelledby="tags-heading">
      <div className="tags-inner">
        <p className="section-kicker">Industries we serve</p>
        <h2 id="tags-heading">Whatever you ship, we have a box for it.</h2>
        <ul className="tag-grid">
          {industries.map((industry, index) => (
            <li className="tag" key={industry.name} style={{ '--i': index } as CSSProperties}>
              <div className="tag-swing" tabIndex={0}>
                <span className="tag-hole" aria-hidden="true" />
                <span className="tag-icon" aria-hidden="true">{industry.icon}</span>
                <h3>{industry.name}</h3>
                <p>{industry.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default IndustryTags;
