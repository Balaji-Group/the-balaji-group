import { Button } from '@/components/ui/button';
import { ArrowRight, Package, Shield, Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { withBase } from '@/lib/utils';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-background overflow-hidden">
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-10 fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-primary animate-fadeIn pop-in">
                Complete Packaging Solutions
              </h1>
              <p className="text-2xl font-bold text-foreground animate-slideUp pop-in">
                Your trusted partner in <span className="text-accent">innovative</span> packaging since <span className="text-secondary">2002</span>
              </p>
            </div>
            <div className="flex flex-wrap gap-6 pt-2 animate-fadeIn">
              <Button asChild size="lg" className="btn-gradient flex items-center gap-2 text-lg shadow-glow">
                <Link to="/products">
                  Explore Products <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-card text-card-foreground border-2 border-accent hover:bg-accent hover:text-accent-foreground flex items-center gap-2 text-lg shadow-medium">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 animate-slideUp">
              <div className="flex items-center gap-3 card-vibrant p-3 pop-in">
                <Package className="h-7 w-7 text-accent" />
                <span className="text-base font-bold text-off-white">Quality</span>
              </div>
              <div className="flex items-center gap-3 card-vibrant p-3 pop-in">
                <Shield className="h-7 w-7 text-secondary" />
                <span className="text-base font-bold text-off-white">Reliable</span>
              </div>
              <div className="flex items-center gap-3 card-vibrant p-3 pop-in">
                <Award className="h-7 w-7 text-accent" />
                <span className="text-base font-bold text-off-white">Expert Team</span>
              </div>
              <div className="flex items-center gap-3 card-vibrant p-3 pop-in">
                <Users className="h-7 w-7 text-secondary" />
                <span className="text-base font-bold text-off-white">Customer Focus</span>
              </div>
            </div>
          </div>
          {/* Right Column - Logo Card */}
          <div className="relative animate-slideInRight">
            {/* Background elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-secondary/20 to-primary/20 rounded-3xl blur-3xl scale-110"></div>
            {/* Main logo container */}
            <div className="relative z-10 glass-heavy rounded-3xl p-14 shadow-large flex flex-col items-center pop-in">
              <div className="mb-8">
                <img 
                  src={withBase('/lovable-uploads/ba221d04-027b-4395-8649-77287da49d97.png')} 
                  alt="Balaji Group Logo" 
                  className="h-44 w-auto mx-auto filter drop-shadow-xl"
                />
              </div>
              <h3 className="text-4xl font-heading font-extrabold text-primary mb-2 tracking-wide animate-fadeIn">
                BALAJI GROUP
              </h3>
              <p className="text-accent font-semibold text-xl tracking-wide animate-slideUp">
                A Complete House of Packaging
              </p>
            </div>
            {/* Floating decorative elements */}
            <div className="absolute -top-8 -right-8 w-20 h-20 bg-accent/30 rounded-2xl rotate-12 blur-lg animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-secondary/30 rounded-xl rotate-45 blur-lg animate-pulse"></div>
            <div className="absolute top-1/2 -left-10 w-10 h-10 bg-accent/40 rounded-full blur-lg animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
