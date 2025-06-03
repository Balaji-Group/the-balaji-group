import Header from '@/components/Header';
import ProductGallery from '@/components/ProductGallery';
import Footer from '@/components/Footer';

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <ProductGallery />
      </main>
      <Footer />
    </div>
  );
};

export default Products;
