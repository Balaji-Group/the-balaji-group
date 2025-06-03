
import { Target, Eye, Users, Globe } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Vision & Mission */}
          <div>
            <h2 className="text-4xl font-heading font-bold text-foreground mb-12 text-center lg:text-left">
              Vision & Mission
            </h2>
            
            {/* Vision */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-balaji-brown rounded-lg flex items-center justify-center mr-4">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-heading font-semibold text-foreground">Vision</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                One stop solution for all kinds of packaging needs with wings spread all over India and abroad. 
                Build up an image not just in terms of quality or quantity but humbleness.
              </p>
            </div>

            {/* Mission */}
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-balaji-blue rounded-lg flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-heading font-semibold text-foreground">Mission</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Craft the best product with an efficient design suited to customer needs and executing it 
                with utmost sincerity on time.
              </p>
            </div>
          </div>

          {/* Right side - Founder */}
          <div className="relative">
            <div className="bg-gradient-to-br from-balaji-beige to-white dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 shadow-xl">
              <div className="absolute top-0 right-0 w-24 h-24 bg-balaji-gold/20 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-900 to-purple-800">
                  <img 
                    src="/lovable-uploads/5334fa56-ebc4-4cdd-8a3b-e6b5eaaf7409.png" 
                    alt="Sumit Goel - Founding Director" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-2">SUMIT GOEL</h3>
                  <p className="text-balaji-brown font-semibold mb-4">Founding Director</p>
                  <div className="w-16 h-1 bg-balaji-gold mx-auto mb-6"></div>
                  <p className="text-muted-foreground leading-relaxed">
                    Leading Balaji Group with a vision to revolutionize the packaging industry through 
                    innovation, quality, and customer-centric solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center">
                <Users className="w-8 h-8 text-balaji-brown mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">1000+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center">
                <Globe className="w-8 h-8 text-balaji-brown mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">5</div>
                <div className="text-sm text-muted-foreground">States Coverage</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
