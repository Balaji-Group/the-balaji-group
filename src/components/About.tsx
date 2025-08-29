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

        {/* Our Journey */}
        <div className="bg-background rounded-3xl p-10 mb-16 shadow-large card animate-fadeIn">
          <h3 className="text-3xl font-heading font-bold text-primary mb-8 text-center">
            Our Journey
          </h3>
          <div className="space-y-8">
            <div className="text-center mb-8">
              <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                Our journey began in 2002 with Balaji Packaging Industries, and through innovation, dedication, and customer focus, we've grown into a comprehensive group of companies serving diverse packaging needs across India.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Timeline */}
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">2002</div>
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-2">Balaji Packaging Industries</h4>
                    <p className="text-muted-foreground">Started as a manual corrugated plant in Rajasthan, providing customized packaging solutions.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-bold text-sm">2004</div>
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-2">Balaji Paper Mart</h4>
                    <p className="text-muted-foreground">Expanded into trading Kraft paper and Duplex Board, becoming the heart of our operations.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-sm">2011</div>
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-2">Shri Balaji Packaging</h4>
                    <p className="text-muted-foreground">Established fully automatic corrugated plant with state-of-the-art production facilities.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">2014</div>
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-2">Patna Board Boxes Industries</h4>
                    <p className="text-muted-foreground">Specialized in complete packaging solutions under one roof in Bihar.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-bold text-sm">2024</div>
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-2">Ganpati Coroplast Pvt. Ltd.</h4>
                    <p className="text-muted-foreground">Launched high-tech automated corrugated box unit in Patna, Bihar.</p>
                  </div>
                </div>
              </div>

              {/* Key Achievements */}
              <div className="space-y-6">
                <h4 className="text-xl font-heading font-semibold text-primary mb-6">Key Milestones:</h4>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                    <span>Over <strong className="text-primary">22 years</strong> of industry excellence</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                    <span>Serving <strong className="text-primary">5 states</strong> across North and East India</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                    <span>Converting <strong className="text-primary">10,000 tons</strong> of paper per annum</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                    <span>ISO 9001 certified for quality management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                    <span>Trusted by industry leaders like Anmol, Bikaji, Haldiram's, Hero Cycles, and VIP</span>
                  </li>
                </ul>
              </div>
            </div>
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
