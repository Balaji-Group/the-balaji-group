interface PageHeroProps {
  kicker: string;
  title: string;
  lede: string;
}

const PageHero = ({ kicker, title, lede }: PageHeroProps) => (
  <header className="page-hero">
    <div className="page-hero-inner">
      <p className="section-kicker">{kicker}</p>
      <h1>{title}</h1>
      <p className="page-hero-lede">{lede}</p>
    </div>
  </header>
);

export default PageHero;
