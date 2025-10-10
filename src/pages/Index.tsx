import Header from '@/components/Header';
import Hero from '@/components/Hero';
import QualityPolicy from '@/components/QualityPolicy';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <QualityPolicy />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
