import Hero from '@/components/Hero';
import QualityPolicy from '@/components/QualityPolicy';
import WhyChooseUs from '@/components/WhyChooseUs';
import IndustriesCarousel from '@/components/IndustriesCarousel';
import ClientLogos from '@/components/ClientLogos';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <Hero />
        <WhyChooseUs />
        <IndustriesCarousel />
        <QualityPolicy />
        <ClientLogos />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
