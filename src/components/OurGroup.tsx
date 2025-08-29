import { Calendar, MapPin, Factory, Truck } from 'lucide-react';

const OurGroup = () => {
  const companies = [
    {
      name: "Balaji Packaging Industries",
      established: "2002",
      location: "Rajasthan",
      description: "A manual corrugated plant providing customized solutions both in terms of Corrugated boxes and Mono cartoons.",
      icon: <Factory className="w-6 h-6" />
    },
    {
      name: "Balaji Paper Mart",
      established: "2004",
      location: "Multi-state",
      description: "The heart and soul of Balaji Group, trading in Kraft paper and Duplex Board with wings spread in Rajasthan, Western UP, Himachal, Bihar and NCR region.",
      icon: <Truck className="w-6 h-6" />
    },
    {
      name: "Shri Balaji Packaging",
      established: "2011",
      location: "Rajasthan",
      description: "A fully automatic corrugated plant fitted with the latest state of the art production facility currently converting 10,000 tons of paper per annum into corrugated boxes.",
      icon: <Factory className="w-6 h-6" />
    },
    {
      name: "Ganpati Coroplast Pvt. Ltd.",
      established: "2024",
      location: "Patna, Bihar",
      description: "A fully automated, high-tech corrugated box unit specializing in high-quality carton packaging solutions with a vision to serve a variety of industries nationwide.",
      icon: <Factory className="w-6 h-6" />
    },
    {
      name: "Patna Board Boxes Industries",
      established: "2014",
      location: "Bihar",
      description: "Specializing in complete packaging solutions under one roof, manufacturing Mono Cartons, Special effect boxes, Card board boxes, Sweets Boxes, Brouchers, Leaftes, Posters etc., and multicolour offset printing.",
      icon: <Factory className="w-6 h-6" />
    },
  ];

  return (
    <section id="group" className="section fade-in bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fadeIn">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 dark:bg-accent/20 rounded-full mb-6">
            <span className="text-accent text-sm font-semibold tracking-wide">
              Our Companies
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">Our Group</h2>
          <p className="text-xl text-off-white max-w-3xl mx-auto">
            A diversified portfolio of companies working together to deliver comprehensive packaging solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slideUp">
          {companies.map((company, index) => (
            <div key={index} className="group relative perspective-1000">
              <div className="relative h-full transition-all duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                {/* Front Face */}
                <div className="absolute inset-0 w-full h-full backface-hidden">
                  <div className="card p-8 h-full">
                    {/* Icon and established year */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white group-hover:bg-accent transition-colors">
                        {company.icon}
                      </div>
                      <div className="flex items-center text-accent">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span className="text-sm font-semibold">{company.established}</span>
                      </div>
                    </div>

                    {/* Company name */}
                    <h3 className="text-xl font-heading font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                      {company.name}
                    </h3>

                    {/* Location */}
                    <div className="flex items-center text-muted-foreground mb-4">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">{company.location}</span>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {company.description}
                    </p>

                    {/* Decorative element */}
                    <div className="absolute top-4 right-4 w-8 h-8 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors"></div>
                    
                    {/* Hover indicator */}
                    <div className="absolute bottom-4 right-4 text-accent/60 group-hover:text-accent transition-colors">
                      <span className="text-xs font-medium">Hover to flip</span>
                    </div>
                  </div>
                </div>

                {/* Back Face */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                  <div className="card p-8 h-full bg-gradient-to-br from-accent/5 to-primary/5 border-accent/20">
                    <div className="flex flex-col justify-center h-full text-center">
                      {/* Large Icon */}
                      <div className="w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center text-white mx-auto mb-6">
                        {company.icon}
                      </div>
                      
                      {/* Establishment Year Highlight */}
                      <div className="mb-6">
                        <div className="text-3xl font-bold text-primary mb-2">{company.established}</div>
                        <div className="text-accent font-semibold">Established</div>
                      </div>
                      
                      {/* Location Badge */}
                      <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full mx-auto mb-4">
                        <MapPin className="w-4 h-4 mr-2 text-accent" />
                        <span className="text-sm font-semibold text-accent">{company.location}</span>
                      </div>
                      
                      {/* Specialization */}
                      <div className="text-sm text-muted-foreground">
                        {index === 0 && "Manual Corrugated Solutions"}
                        {index === 1 && "Kraft Paper Trading Hub"}
                        {index === 2 && "Automated Manufacturing"}
                        {index === 3 && "High-Tech Automation"}
                        {index === 4 && "Complete Packaging Solutions"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom highlight */}
        <div className="mt-16 text-center animate-fadeIn">
          <div className="card p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-heading font-bold text-primary mb-4">
              Combined Excellence
            </h3>
            <p className="text-lg text-off-white">
              Together, our group companies represent decades of expertise, cutting-edge technology, 
              and unwavering commitment to quality in the packaging industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurGroup;
