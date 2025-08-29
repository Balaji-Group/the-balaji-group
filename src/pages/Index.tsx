import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import ProductGallery from '@/components/ProductGallery';
import Clients from '@/components/Clients';
import PlantMachinery from '@/components/PlantMachinery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <ProductGallery />
        <Clients />
        <PlantMachinery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
