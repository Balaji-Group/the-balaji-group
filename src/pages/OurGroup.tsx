import Header from '@/components/Header';
import OurGroup from '@/components/OurGroup';
import Footer from '@/components/Footer';

const OurGroupPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <OurGroup />
      </main>
      <Footer />
    </div>
  );
};

export default OurGroupPage;
