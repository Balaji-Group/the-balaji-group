import { Target, Eye, Users, Globe, Award, Clock } from 'lucide-react';
import { withBase } from '@/lib/utils';

const About = () => {
  return (
    <section id="about" className="section fade-in bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full mb-6">
            <span className="text-accent text-sm font-semibold tracking-wide">
              Our Story
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
            About Balaji Group
          </h2>
          <p className="text-xl text-off-white max-w-3xl mx-auto leading-relaxed">
            A house of professionals dealing in paper and paper products with over 2 decades of experience
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20 animate-slideUp">
          {/* Left side - Vision & Mission */}
          <div className="space-y-12">
            {/* Vision */}
            <div>
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mr-4 shadow-medium">
                  <Eye className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-primary">Vision</h3>
              </div>
              <p className="text-lg text-foreground leading-relaxed pl-18">
                To create a seamless ecosystem and be a one-stop solution for all your kraft paper needs. 
                Our vision is to be the go-to partner for businesses seeking reliable kraft paper solutions.
              </p>
            </div>

            {/* Mission */}
            <div>
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-secondary to-card rounded-2xl flex items-center justify-center mr-4 shadow-medium">
                  <Target className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-primary">Mission</h3>
              </div>
              <p className="text-lg text-foreground leading-relaxed pl-18">
                To be the leading provider of high-quality kraft paper, connecting mill owners, distributors, 
                and end-users across industries. We strive to deliver sustainable solutions that enhance 
                packaging, printing, and other applications.
              </p>
            </div>
          </div>

          {/* Right side - Founder */}
          <div className="relative">
            <div className="bg-background rounded-3xl p-8 shadow-large card">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/10 to-transparent rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="w-56 h-56 mx-auto mb-8 rounded-3xl overflow-hidden shadow-large">
                  <img 
                    src={withBase('/lovable-uploads/55e7530b-dab7-42ec-a814-8a4ff7b4cb6a.png')} 
                    alt="Sumit Goel - Founding Director" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-heading font-bold text-primary mb-2">SUMIT GOEL</h3>
                  <p className="text-accent font-semibold mb-6 text-lg">Founding Director</p>
                  <div className="w-20 h-1 bg-gradient-to-r from-accent to-secondary mx-auto mb-6 rounded-full"></div>
                  <p className="text-off-white leading-relaxed">
                    Leading Balaji Group with a vision to revolutionize the packaging industry through 
                    innovation, quality, and customer-centric solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Journey Section */}
        <div className="mb-20 animate-fadeIn">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-heading font-bold text-primary mb-4">Our Journey</h3>
            <p className="text-lg text-off-white max-w-2xl mx-auto">
              From humble beginnings to industry leadership - discover the milestones that shaped our company
            </p>
          </div>
          <div className="w-full max-w-7xl mx-auto">
            <img 
              src={withBase('/lovable-uploads/our-journey.png')} 
              alt="Our Journey - Timeline of Balaji Group companies from 2002 to 2024" 
              className="w-full h-auto object-contain rounded-2xl shadow-large"
            />
          </div>
        </div>


        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 animate-slideUp">
          <div className="card p-6 text-center hover:shadow-large transition-shadow">
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-accent" />
            </div>
            <div className="text-3xl font-bold text-primary mb-2">1000+</div>
            <div className="text-sm text-foreground font-medium">Happy Clients</div>
          </div>
          <div className="card p-6 text-center hover:shadow-large transition-shadow">
            <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Globe className="w-6 h-6 text-primary" />
            </div>
            <div className="text-3xl font-bold text-primary mb-2">5</div>
            <div className="text-sm text-foreground font-medium">States Coverage</div>
          </div>
          <div className="card p-6 text-center hover:shadow-large transition-shadow">
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Award className="w-6 h-6 text-accent" />
            </div>
            <div className="text-3xl font-bold text-primary mb-2">22+</div>
            <div className="text-sm text-foreground font-medium">Years Experience</div>
          </div>
          <div className="card p-6 text-center hover:shadow-large transition-shadow">
            <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-foreground font-medium">Customer Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
