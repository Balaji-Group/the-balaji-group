import { Calendar, MapPin, Factory, Truck, Briefcase, Users } from 'lucide-react';
import { withBase } from '@/lib/utils';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
const OurGroup = () => {
  const companies = [{
    name: "Balaji Packaging Industries",
    established: "2002",
    location: "Rajasthan, India",
    description: "Our very first setup marked the beginning of our journey in packaging. Starting as a manual plant, equipped with skilled people, sustainable infrastructure, and reliable machines, we laid a strong foundation for manufacturing corrugated boxes and mono cartons. Over time, through continuous innovation and upgrades, we have mastered the art of packaging and built a reputation for delivering high-quality, customized solutions. Every product reflects our commitment to precision, sustainability, and client satisfaction. Today, we stand among the best in the market, trusted for creating packaging that combines durability, functionality, and design tailored to our customers' needs.",
    partners: ["Founding Director: Mr. Sumit Goel"],
    icon: <Factory className="w-6 h-6" />
  }, {
    name: "Balaji Paper Mart",
    established: "2004",
    location: "Jaipur, Rajasthan (Multi-state operations)",
    description: "A trusted name in the trade of Kraft paper and Duplex Board with a legacy spanning over two decades. The company has become a prominent player in the Kraft paper trading industry, recognized for its quality products and dependable service. Based in Jaipur, we cater to clients across Rajasthan, Western Uttar Pradesh, Himachal Pradesh, Bihar, and the National Capital Region, reflecting our robust distribution network and dedication to meeting diverse business needs. Our product profile includes Kraft paper & Duplex board, corrugated rolls, sheets and boxes, and Duplex/E-flute mono cartons.",
    partners: ["Managing Partner: Mr. Sumit Goel"],
    icon: <Truck className="w-6 h-6" />
  }, {
    name: "Shri Balaji Packaging",
    established: "2011",
    location: "Rajasthan, India",
    description: "A state-of-the-art fully automatic corrugated plant located in Rajasthan, equipped with cutting-edge production facilities. Our facility currently converts 10,000 tons of paper annually into premium corrugated boxes, supported by a dedicated workforce of 80 skilled employees committed to delivering exceptional quality packaging solutions.",
    partners: ["Partner: Mr. Dinesh Gupta", "Partner: Mr. Vivek Agarwal", "Partner: Mr. Sumit Goel", "Partner: Mrs. Smriti Goel"],
    icon: <Factory className="w-6 h-6" />
  }, {
    name: "Ganpati Coroplast Pvt. Ltd.",
    established: "2024",
    location: "Patna, Bihar",
    description: "Ganpati Coroplast specialises in manufacturing high-quality carton packaging solutions with a vision to serve a variety of industries nationwide. With a focus on innovation, sustainability, and customer satisfaction, we deliver customizable packaging tailored to meet our clients' needs. Our commitment to excellence, eco-friendly practices, and exceptional service sets us apart as a trusted partner in packaging solutions.",
    partners: ["Founding Director: Mr. Sumit Goel", "Director: Mr. Shaswat Kamalia", "Director: Mr. Ashish Boobna"],
    icon: <Factory className="w-6 h-6" />
  }, {
    name: "Laxmi Packaging",
    established: "2007",
    location: "India",
    description: "Laxmi Packaging, founded in 2007, began as a modest operation focused on providing quality box solutions to the community. Overcoming initial challenges and market competition, the company steadily grew through its commitment to innovation and excellence. Today, the manufacturing unit features advanced Offset Printing, Lamination, Die Punching, Flute Laminator, and cutting machines, enabling comprehensive packaging solutions for diverse client needs. Serving over 100 clients, Laxmi Packaging has built a reputation for reliability and consistent quality. The company aims to expand into new markets, create more job opportunities, and contribute to a better future with continued support from its dedicated team and valued customers.",
    partners: ["Director: Mr. Vivek Agarwal"],
    icon: <Factory className="w-6 h-6" />
  }];
  const teamMembers = [{
    name: "DINESH GUPTA",
    position: "PARTNER: SHRI BALAJI PACKAGING",
    image: withBase('/lovable-uploads/f8765c98-74de-4cd5-874a-93ba8d1ccdd3.png'),
    joinYear: "2011",
    description: "Since becoming a partner in 2011, I have dedicated my efforts to enhancing the efficiency of our system. I firmly believe that with a robust system in place, we can excel at any given stage."
  }, {
    name: "VIVEK AGARWAL",
    position: "PARTNER: SHRI BALAJI PACKAGING",
    image: withBase('/lovable-uploads/bd704adf-2067-49fc-8b79-f367bde4b264.png'),
    joinYear: "2017",
    description: "I became a partner in 2017. I am convinced that our distinction lies in our quality and resilience to tailor our designs precisely to meet every customer's needs."
  }, {
    name: "SHASWAT KAMALIA",
    position: "DIRECTOR: GANPATI COROPLAST PVT. LTD.",
    image: withBase('/lovable-uploads/shaswat-kamalia.jpg'),
    joinYear: "2024",
    description: "As a young director in the packaging world, I'm focused on bringing fresh energy and practical ideas to make a real difference."
  }, {
    name: "SUBHASH KR BOOBNA",
    position: "DIRECTOR: GANPATI COROPLAST PVT. LTD.",
    image: withBase('/lovable-uploads/subhash-kr-boobna.jpg'),
    joinYear: "2024",
    description: "As a director, I am committed to building strong operational foundations and fostering relationships that drive sustainable growth for our company and partners."
  }];
  return <section id="group" className="section fade-in bg-background">
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

        <Carousel className="w-full max-w-7xl mx-auto animate-slideUp" opts={{
        align: "start",
        loop: true
      }}>
          <CarouselContent className="-ml-4">
            {companies.map((company, index) => <CarouselItem key={index} className="pl-4 basis-full">
                <div className="group relative h-full">
                  <div className="card p-8 h-full flex flex-col">
                    {/* Header with Icon and Date */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center text-white group-hover:bg-accent transition-colors">
                        {company.icon}
                      </div>
                      <div className="flex items-center text-accent">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span className="text-sm font-semibold">{company.established}</span>
                      </div>
                    </div>

                    {/* Company Name */}
                    <h3 className="text-xl font-heading font-bold text-primary mb-4 group-hover:text-accent transition-colors">
                      {company.name}
                    </h3>

                    {/* Location */}
                    <div className="flex items-start text-off-white mb-4">
                      <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{company.location}</span>
                    </div>

                    {/* Description */}
                    <p className="text-off-white text-sm leading-relaxed mb-6 flex-grow">
                      {company.description}
                    </p>

                    {/* Partners Section */}
                    <div className="border-t border-border pt-4">
                      <div className="flex items-center mb-3">
                        <Users className="w-4 h-4 mr-2 text-accent" />
                        <span className="text-sm font-semibold text-primary">Key Partners</span>
                      </div>
                      <div className="space-y-2">
                        {company.partners.map((partner, partnerIndex) => <div key={partnerIndex} className="text-xs text-muted-foreground flex items-center">
                            <div className="w-2 h-2 bg-accent rounded-full mr-2 flex-shrink-0"></div>
                            {partner}
                          </div>)}
                      </div>
                    </div>

                    {/* Decorative element */}
                    <div className="absolute top-4 right-4 w-8 h-8 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors"></div>
                  </div>
                </div>
              </CarouselItem>)}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        {/* Balaji Paper Mart Detailed Section */}
        

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

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16 animate-slideUp">
            {teamMembers.map((member, index) => <div key={index} className="group h-full">
                <div className="card p-8 shadow-large hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 h-full flex flex-col">
                  {/* Member Image */}
                  <div className="relative mb-8">
                    <div className="w-56 h-56 mx-auto rounded-3xl overflow-hidden shadow-large">
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-accent to-primary rounded-2xl p-3 shadow-medium">
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Member Info */}
                  <div className="text-center flex-1 flex flex-col">
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
                    
                    <p className="text-muted-foreground leading-relaxed flex-1">
                      {member.description}
                    </p>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-6 right-6 w-16 h-16 bg-accent/5 rounded-2xl group-hover:bg-accent/10 transition-colors blur-sm"></div>
                  <div className="absolute bottom-6 left-6 w-12 h-12 bg-primary/5 rounded-xl group-hover:bg-primary/10 transition-colors blur-sm"></div>
                </div>
              </div>)}
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
    </section>;
};
export default OurGroup;