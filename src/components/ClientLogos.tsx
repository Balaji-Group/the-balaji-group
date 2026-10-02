import { withBase } from '@/lib/utils';

const clients = [
  ...Array.from({ length: 13 }, (_, index) => ({
    src: withBase(`/Clients/${index + 1}.png`),
    alt: '',
  })),
  { src: withBase('/Clients/14.png'), alt: 'Parle' },
  { src: withBase('/Clients/15.png'), alt: 'Baidyanath' },
  { src: withBase('/Clients/16.png'), alt: 'Allwyn' },
];

const ClientLogos = () => (
  <section className="client-section" aria-labelledby="client-heading">
    <div className="client-section-inner">
      <div className="client-heading">
        <p className="section-kicker">Trusted partnerships</p>
        <h2 id="client-heading">Chosen by teams that ship</h2>
      </div>
      <ul className="client-logo-list" aria-label="Client logos">
        {clients.map((client) => (
          <li className="client-logo" key={client.src}>
            <img src={client.src} alt={client.alt} loading="lazy" />
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default ClientLogos;
