
import { Button } from '@/components/ui/button';
import { ArrowRight, Package, Shield, Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center gradient-bg dark:gradient-bg-dark overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 dotted-pattern"></div>
      
      {/* Gradient Overlays */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-accent/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-accent/10 dark:bg-accent/20 rounded-full mb-6">
              <span className="text-accent text-sm font-semibold tracking-wide">
                Since 2002 • Industry Leader
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-heading font-bold text-primary mb-6 leading-tight">
              Balaji <span className="text-accent">Group</span>
            </h1>
            
            <p className="text-2xl lg:text-3xl text-muted-foreground font-medium mb-6 tracking-wide">
              A Complete House of <span className="text-primary font-semibold">Packaging</span>
            </p>
            
            <p className="text-lg text-muted-foreground mb-10 max-w-xl leading-relaxed">
              Delivering innovative packaging solutions across India and beyond. From corrugated boxes to specialized packaging, 
              we craft quality that elevates your brand.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/products">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-white font-semibold shadow-medium hover:shadow-large transition-all"
                >
                  Explore Products <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-white transition-all"
                >
                  Contact Us
                </Button>
              </Link>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-accent/10 dark:bg-accent/20 rounded-xl flex items-center justify-center">
                    <Package className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-primary">22+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-primary">ISO</div>
                <div className="text-sm text-muted-foreground">Certified</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-accent/10 dark:bg-accent/20 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-primary">5</div>
                <div className="text-sm text-muted-foreground">Business Units</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* Right side with enhanced logo display */}
          <div className="relative flex items-center justify-center lg:justify-end animate-slide-up">
            <div className="relative">
              {/* Background elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-primary/5 to-primary/5 rounded-3xl blur-3xl scale-110"></div>
              
              {/* Main logo container */}
              <div className="relative z-10 glass-effect dark:glass-effect-dark rounded-3xl p-12 shadow-large">
                <div className="text-center">
                  <div className="mb-8">
                    <img 
                      src="/lovable-uploads/eafac406-5a59-4aba-bfec-30b38401b8e7.png" 
                      alt="Balaji Group Logo" 
                      className="h-32 w-auto mx-auto filter drop-shadow-lg"
                    />
                  </div>
                  <h3 className="text-3xl font-heading font-bold text-primary mb-2 tracking-wide">
                    BALAJI GROUP
                  </h3>
                  <p className="text-accent font-semibold text-lg tracking-wide">
                    Complete Packaging Solutions
                  </p>
                </div>
              </div>

              {/* Floating decorative elements */}
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-accent/20 rounded-2xl rotate-12 blur-sm"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-primary/20 rounded-xl rotate-45 blur-sm"></div>
              <div className="absolute top-1/2 -left-8 w-8 h-8 bg-accent/30 rounded-full blur-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
