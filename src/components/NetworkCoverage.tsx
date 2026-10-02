import { MapPin } from 'lucide-react';
import Reveal from '@/components/Reveal';

const routes = [
  { name: 'Rajasthan', cities: ['Jaipur', 'Jodhpur', 'Udaipur'], hub: true },
  { name: 'Uttar Pradesh', cities: ['Western UP', 'NCR Region'], hub: false },
  { name: 'Bihar', cities: ['Patna'], hub: true },
  { name: 'Himachal Pradesh', cities: ['Various Cities'], hub: false },
  { name: 'NCR', cities: ['Delhi', 'Gurgaon', 'Noida'], hub: false },
];

const NetworkCoverage = () => (
  <section className="manifest-section" aria-labelledby="manifest-heading">
    <div className="manifest-inner">
      <p className="section-kicker">Pan-India presence</p>
      <h2 id="manifest-heading">Where our boxes travel</h2>
      <p className="values-lede">Serving businesses across 5 states with a reliable supply chain and logistics.</p>

      <Reveal>
        <div className="manifest" role="table" aria-label="Dispatch manifest by state">
          <div className="manifest-head" role="row">
            <span role="columnheader">Destination</span>
            <span role="columnheader">Cities</span>
            <span role="columnheader">Status</span>
          </div>
          {routes.map((route) => (
            <div className="manifest-row" role="row" key={route.name}>
              <span className="manifest-state" role="cell">
                <MapPin size={16} aria-hidden="true" /> {route.name}
              </span>
              <span className="manifest-cities" role="cell">{route.cities.join(', ')}</span>
              <span role="cell">
                {route.hub ? (
                  <span className="manifest-stamp">Manufacturing hub</span>
                ) : (
                  <span className="manifest-plain">Distribution</span>
                )}
              </span>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);

export default NetworkCoverage;
