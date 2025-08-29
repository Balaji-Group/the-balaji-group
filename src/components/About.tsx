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

        {/* Our Journey - Artistic Timeline */}
        <div className="relative mb-16 animate-fadeIn">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-heading font-bold text-primary mb-6">
              Our Journey
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-secondary mx-auto rounded-full mb-8"></div>
          </div>

          {/* Artistic Timeline Container */}
          <div className="relative max-w-6xl mx-auto">
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent via-primary to-secondary rounded-full hidden lg:block"></div>
            
            {/* Timeline Events */}
            <div className="space-y-12 lg:space-y-20">
              {/* 2002 - Balaji Packaging Industries */}
              <div className="relative flex items-center lg:justify-start">
                <div className="w-full lg:w-1/2 lg:pr-12">
                  <div className="card p-6 ml-8 lg:ml-0 relative group hover:shadow-large transition-all duration-300">
                    <div className="absolute -left-8 lg:-right-8 lg:left-auto top-1/2 transform -translate-y-1/2">
                      <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-large group-hover:scale-110 transition-transform">
                        02
                      </div>
                    </div>
                    <div className="absolute lg:hidden -left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent to-primary"></div>
                    <h4 className="text-xl font-heading font-bold text-primary mb-2">Balaji Packaging Industries</h4>
                    <p className="text-accent font-semibold mb-3">2002 • Rajasthan</p>
                    <p className="text-muted-foreground">The foundation stone of our empire - a manual corrugated plant that started our journey in packaging excellence.</p>
                  </div>
                </div>
                <div className="hidden lg:block w-1/2"></div>
              </div>

              {/* 2004 - Balaji Paper Mart */}
              <div className="relative flex items-center lg:justify-end">
                <div className="hidden lg:block w-1/2"></div>
                <div className="w-full lg:w-1/2 lg:pl-12">
                  <div className="card p-6 ml-8 lg:ml-0 relative group hover:shadow-large transition-all duration-300">
                    <div className="absolute -left-8 lg:-left-8 top-1/2 transform -translate-y-1/2">
                      <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center text-white font-bold text-lg shadow-large group-hover:scale-110 transition-transform">
                        04
                      </div>
                    </div>
                    <div className="absolute lg:hidden -left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-secondary to-accent"></div>
                    <h4 className="text-xl font-heading font-bold text-primary mb-2">Balaji Paper Mart</h4>
                    <p className="text-accent font-semibold mb-3">2004 • Multi-state Operations</p>
                    <p className="text-muted-foreground">The heart of our operations - expanding wings across Rajasthan, UP, Himachal, Bihar, and NCR.</p>
                  </div>
                </div>
              </div>

              {/* 2011 - Shri Balaji Packaging */}
              <div className="relative flex items-center lg:justify-start">
                <div className="w-full lg:w-1/2 lg:pr-12">
                  <div className="card p-6 ml-8 lg:ml-0 relative group hover:shadow-large transition-all duration-300">
                    <div className="absolute -left-8 lg:-right-8 lg:left-auto top-1/2 transform -translate-y-1/2">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-large group-hover:scale-110 transition-transform">
                        11
                      </div>
                    </div>
                    <div className="absolute lg:hidden -left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary"></div>
                    <h4 className="text-xl font-heading font-bold text-primary mb-2">Shri Balaji Packaging</h4>
                    <p className="text-accent font-semibold mb-3">2011 • Rajasthan</p>
                    <p className="text-muted-foreground">Automation revolution - state-of-the-art facility converting 10,000 tons of paper annually.</p>
                  </div>
                </div>
                <div className="hidden lg:block w-1/2"></div>
              </div>

              {/* 2014 - Patna Board Boxes */}
              <div className="relative flex items-center lg:justify-end">
                <div className="hidden lg:block w-1/2"></div>
                <div className="w-full lg:w-1/2 lg:pl-12">
                  <div className="card p-6 ml-8 lg:ml-0 relative group hover:shadow-large transition-all duration-300">
                    <div className="absolute -left-8 lg:-left-8 top-1/2 transform -translate-y-1/2">
                      <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-large group-hover:scale-110 transition-transform">
                        14
                      </div>
                    </div>
                    <div className="absolute lg:hidden -left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent to-primary"></div>
                    <h4 className="text-xl font-heading font-bold text-primary mb-2">Patna Board Boxes Industries</h4>
                    <p className="text-accent font-semibold mb-3">2014 • Bihar</p>
                    <p className="text-muted-foreground">Complete packaging ecosystem - from mono cartons to multicolor offset printing under one roof.</p>
                  </div>
                </div>
              </div>

              {/* 2024 - Ganpati Coroplast */}
              <div className="relative flex items-center lg:justify-start">
                <div className="w-full lg:w-1/2 lg:pr-12">
                  <div className="card p-6 ml-8 lg:ml-0 relative group hover:shadow-large transition-all duration-300 border-2 border-accent/20">
                    <div className="absolute -left-8 lg:-right-8 lg:left-auto top-1/2 transform -translate-y-1/2">
                      <div className="w-16 h-16 bg-gradient-to-br from-accent to-secondary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-large group-hover:scale-110 transition-transform animate-pulse">
                        24
                      </div>
                    </div>
                    <div className="absolute lg:hidden -left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent to-secondary"></div>
                    <div className="absolute top-2 right-2">
                      <span className="bg-accent text-accent-foreground text-xs px-2 py-1 rounded-full font-semibold">Latest</span>
                    </div>
                    <h4 className="text-xl font-heading font-bold text-primary mb-2">Ganpati Coroplast Pvt. Ltd.</h4>
                    <p className="text-accent font-semibold mb-3">2024 • Patna, Bihar</p>
                    <p className="text-muted-foreground">Future-ready technology - high-tech automated solutions serving industries nationwide.</p>
                  </div>
                </div>
                <div className="hidden lg:block w-1/2"></div>
              </div>
            </div>

            {/* Achievement Highlights */}
            <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="card p-6 text-center hover:shadow-large transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">22+</div>
                <h5 className="text-lg font-semibold text-primary mb-2">Years of Excellence</h5>
                <p className="text-muted-foreground text-sm">Building trust since 2002</p>
              </div>
              <div className="card p-6 text-center hover:shadow-large transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">5</div>
                <h5 className="text-lg font-semibold text-primary mb-2">States Covered</h5>
                <p className="text-muted-foreground text-sm">Pan-India presence</p>
              </div>
              <div className="card p-6 text-center hover:shadow-large transition-all duration-300 hover:-translate-y-1 md:col-span-2 lg:col-span-1">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">10K</div>
                <h5 className="text-lg font-semibold text-primary mb-2">Tons Annually</h5>
                <p className="text-muted-foreground text-sm">Paper conversion capacity</p>
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
