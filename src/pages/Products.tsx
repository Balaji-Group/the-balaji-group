import ProductGallery from '@/components/ProductGallery';
import Footer from '@/components/Footer';

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <ProductGallery />
      </main>
      <Footer />
    </div>
  );
};

export default Products;
