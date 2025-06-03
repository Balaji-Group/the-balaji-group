
import { Button } from '@/components/ui/button';
import { ArrowRight, Package, Shield, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-balaji-beige to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 dotted-pattern"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-heading font-bold text-foreground mb-6 leading-tight">
              Balaji Group
            </h1>
            <p className="text-2xl lg:text-3xl text-balaji-red font-semibold mb-6">
              A Complete House of Packaging
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
              Since 2002, we've been delivering innovative packaging solutions across India and abroad. 
              From corrugated boxes to specialized packaging, we craft quality that speaks for your brand.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                className="bg-balaji-brown hover:bg-balaji-brown-dark text-white font-semibold"
              >
                Explore Solutions <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-balaji-gold text-balaji-brown hover:bg-balaji-gold hover:text-white"
              >
                Contact Us
              </Button>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Package className="w-8 h-8 text-balaji-brown" />
                </div>
                <div className="text-2xl font-bold text-foreground">20+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Shield className="w-8 h-8 text-balaji-brown" />
                </div>
                <div className="text-2xl font-bold text-foreground">ISO</div>
                <div className="text-sm text-muted-foreground">Certified</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Award className="w-8 h-8 text-balaji-brown" />
                </div>
                <div className="text-2xl font-bold text-foreground">5</div>
                <div className="text-sm text-muted-foreground">Business Units</div>
              </div>
            </div>
          </div>

          {/* Right side with geometric shapes and logo */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative">
              {/* Large geometric background */}
              <div className="w-96 h-96 bg-gradient-to-br from-balaji-gold/20 to-balaji-brown/20 rounded-full blur-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              
              {/* Central logo area */}
              <div className="relative z-10 bg-white dark:bg-gray-800 rounded-3xl p-12 shadow-2xl">
                <div className="w-32 h-32 bg-balaji-red rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <div className="w-20 h-20 bg-balaji-blue rounded-full flex items-center justify-center">
                    <div className="w-10 h-10 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-heading font-bold text-balaji-blue mb-2">BALAJI</h3>
                  <h3 className="text-2xl font-heading font-bold text-balaji-blue">GROUP</h3>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-balaji-gold rounded-lg rotate-12 opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-balaji-brown rounded-full opacity-60"></div>
              <div className="absolute top-1/2 -left-8 w-6 h-6 bg-balaji-red rounded-sm rotate-45 opacity-70"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
