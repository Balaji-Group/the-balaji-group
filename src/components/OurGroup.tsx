import { Calendar, MapPin, Factory, Truck, Briefcase } from 'lucide-react';
import { withBase } from '@/lib/utils';

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
      description: "A fully automatic corrugated plant with daily production capacity of 40 tons per shift.",
      icon: <Factory className="w-6 h-6" />
    },
    {
      name: "Laxmi Packaging",
      established: "Ongoing",
      location: "Multi-location",
      description: "Another feather in the cap adding value and strength to our production of corrugated boxes and Mono cartoons.",
      icon: <Factory className="w-6 h-6" />
    }
  ];

  const teamMembers = [
    {
      name: "DINESH GUPTA",
      position: "PARTNER: SHRI BALAJI PACKAGING",
      image: withBase('/lovable-uploads/f8765c98-74de-4cd5-874a-93ba8d1ccdd3.png'),
      joinYear: "2011",
      description: "Since becoming a partner in 2011, I have dedicated my efforts to enhancing the efficiency of our system. I firmly believe that with a robust system in place, we can excel at any given stage."
    },
    {
      name: "VIVEK AGARWAL", 
      position: "PARTNER: SHRI BALAJI PACKAGING",
      image: withBase('/lovable-uploads/bd704adf-2067-49fc-8b79-f367bde4b264.png'),
      joinYear: "2017",
      description: "I became a partner in 2017. I am convinced that our distinction lies in our quality and resilience to tailor our designs precisely to meet every customer's needs."
    }
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
            <div key={index} className="group relative">
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
                <div className="flex items-center text-off-white mb-4">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">{company.location}</span>
                </div>

                {/* Description */}
                <p className="text-off-white text-sm leading-relaxed">
                  {company.description}
                </p>

                {/* Decorative element */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Balaji Paper Mart Detailed Section */}
        <div className="bg-background rounded-3xl p-10 mb-16 shadow-large card animate-fadeIn">
          <h3 className="text-3xl font-heading font-bold text-primary mb-8 text-center">
            Balaji Paper Mart - Company Overview
          </h3>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <p className="text-off-white leading-relaxed mb-6">
                Balaji Paper Mart (Established in 2004) is a trusted name in the trade of <strong className="text-primary">Kraft paper and Duplex Board</strong>. 
                With a legacy spanning over <strong className="text-primary">two decades</strong>, the company has become a prominent player in the Kraft paper 
                trading industry, recognized for its quality products and dependable service.
              </p>
              <p className="text-off-white leading-relaxed">
                Based in Jaipur, Balaji Paper Mart caters to clients in <strong className="text-primary">Rajasthan, Western Uttar Pradesh (UP), 
                Himachal Pradesh, Bihar, and the National Capital Region (NCR)</strong>. Its reach reflects a robust 
                distribution network and a dedication to meeting the diverse needs of businesses across these regions.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-heading font-semibold text-primary mb-6">Our Product Profile:</h4>
              <ul className="space-y-3 text-foreground">
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-accent to-secondary rounded-full mr-4"></div>
                  Kraft paper & Duplex board
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-accent to-secondary rounded-full mr-4"></div>
                  Corrugated rolls, sheets and boxes
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-accent to-secondary rounded-full mr-4"></div>
                  Duplex/E-flute mono cartons
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Leadership Team Section */}
        <div className="mt-24">
          <div className="text-center mb-16 animate-fadeIn">
            <div className="inline-flex items-center px-4 py-2 bg-accent/10 dark:bg-accent/20 rounded-full mb-6">
              <span className="text-accent text-sm font-semibold tracking-wide">
                Leadership Team
              </span>
            </div>
            <h3 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">Our Team</h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Meet the dedicated professionals driving innovation and excellence in packaging solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16 animate-slideUp">
            {teamMembers.map((member, index) => (
              <div key={index} className="group">
                <div className="card p-8 shadow-large hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                  {/* Member Image */}
                  <div className="relative mb-8">
                    <div className="w-56 h-56 mx-auto rounded-3xl overflow-hidden shadow-large">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-accent to-primary rounded-2xl p-3 shadow-medium">
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Member Info */}
                  <div className="text-center">
                    <h4 className="text-2xl font-heading font-bold text-primary mb-2">
                      {member.name}
                    </h4>
                    <p className="text-accent font-semibold mb-4 text-lg">
                      {member.position}
                    </p>
                    
                    <div className="flex items-center justify-center text-primary mb-6">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm font-medium">Joined {member.joinYear}</span>
                    </div>

                    <div className="w-20 h-1 bg-gradient-to-r from-accent to-primary mx-auto mb-6 rounded-full"></div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {member.description}
                    </p>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-6 right-6 w-16 h-16 bg-accent/5 rounded-2xl group-hover:bg-accent/10 transition-colors blur-sm"></div>
                  <div className="absolute bottom-6 left-6 w-12 h-12 bg-primary/5 rounded-xl group-hover:bg-primary/10 transition-colors blur-sm"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Leadership Message */}
          <div className="max-w-4xl mx-auto animate-fadeIn">
            <div className="bg-background rounded-3xl p-10 shadow-large card text-center">
              <h4 className="text-3xl font-heading font-bold text-primary mb-6">
                Leadership Philosophy
              </h4>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our leadership team brings together decades of experience in packaging innovation, 
                operational excellence, and customer service. We believe in empowering our team 
                to deliver solutions that exceed expectations while maintaining the highest quality standards.
              </p>
            </div>
          </div>
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
