import { Building2, CheckCircle, Target, Users, Award, Globe, Factory, Lightbulb, Leaf, Phone, Mail, MapPin } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: "SUMIT GOEL",
      position: "Founding Director"
    },
    {
      name: "SUBHASH KR BOOBNA",
      position: "Director"
    },
    {
      name: "ASHISH BOOBNA",
      position: "Director"
    },
    {
      name: "SHASWAT KAMALIA",
      position: "Director"
    }
  ];

  const clients = [
    "Anmol", "Bikaji", "Haldiram's", "Hero Cycles", "VIP"
  ];

  const machinery = [
    { name: "CORRUGATING LINE", company: "XINGUANG", spec: "1800 mm 180 mt / min" },
    { name: "PRINTER MACHINE", company: "XINLONGSHENG", spec: "4 colour SIZE-1200x2600" },
    { name: "GLUER MACHINE", company: "DONGGUANG NORTH PACK", spec: "QINGFENG QF-2600" },
    { name: "GENERATOR - DG SET", company: "JAKSON LIMITED", spec: "250 kVA" },
    { name: "FORKLIFT", company: "TOYOTA", spec: "3 TON" }
  ];

  return (
    <section id="about" className="section fade-in bg-background">
      <div className="container mx-auto px-4">
        {/* Journey Timeline */}
        <div className="mb-20 animate-slideUp">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-heading font-bold text-primary mb-4">Our Journey</h3>
            <p className="text-lg text-muted-foreground">Three Decades of Excellence in Packaging</p>
          </div>
          
          <div className="relative max-w-6xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-gradient-to-b from-accent to-primary"></div>
            
            {/* Timeline Items */}
            <div className="space-y-16">
              {/* 1995 */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8 text-right">
                  <div className="card p-6 hover:shadow-large transition-all duration-300">
                    <h4 className="text-xl font-heading font-bold text-primary mb-3">1995 - The Beginning</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Started our journey in the packaging industry with a small manual corrugated box unit, 
                      laying the foundation for what would become a packaging empire.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background"></div>
                <div className="flex-1 pl-8"></div>
              </div>

              {/* 2000s */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                <div className="flex-1 pl-8">
                  <div className="card p-6 hover:shadow-large transition-all duration-300">
                    <h4 className="text-xl font-heading font-bold text-primary mb-3">2000s - Expansion</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Expanded operations across Rajasthan and Bihar with multiple manufacturing units, 
                      establishing ourselves as a trusted name in the corrugated packaging industry.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2010s */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8 text-right">
                  <div className="card p-6 hover:shadow-large transition-all duration-300">
                    <h4 className="text-xl font-heading font-bold text-primary mb-3">2010s - Modernization</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Introduced semi-automatic and fully automatic machinery, enhancing production capacity 
                      and quality standards to meet growing market demands.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background"></div>
                <div className="flex-1 pl-8"></div>
              </div>

              {/* 2020 */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                <div className="flex-1 pl-8">
                  <div className="card p-6 hover:shadow-large transition-all duration-300">
                    <h4 className="text-xl font-heading font-bold text-primary mb-3">2020 - Ganpati Coroplast</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Established Ganpati Coroplast Pvt. Ltd. in Patna, Bihar - a state-of-the-art, 
                      fully automated facility supporting the "Make in India" initiative.
                    </p>
                  </div>
                </div>
              </div>

              {/* Present */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8 text-right">
                  <div className="card p-6 hover:shadow-large transition-all duration-300 bg-gradient-to-r from-accent/10 to-primary/10">
                    <h4 className="text-xl font-heading font-bold text-primary mb-3">Today - Industry Leader</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      With 25+ years of experience, we continue to innovate and lead the packaging industry 
                      with cutting-edge technology and sustainable practices.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-accent to-primary rounded-full border-4 border-background"></div>
                <div className="flex-1 pl-8"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Company Story */}
        <div className="mb-20 animate-slideUp">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-heading font-bold text-primary mb-4">Company Story</h3>
          </div>
          <div className="card p-10 max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  India's growing demand for consumer products has led to an influx of companies in Bihar. 
                  However, finding reliable local suppliers and manufacturers remains a challenge. Our story starts here.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our group has made a huge impact in packaging industry with our manual and fully-automatic 
                  corrugated box units in Rajasthan and Bihar for the last 25 years.
                </p>
              </div>
              <div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Given the advent of new manufacturing industries in Bihar and to support our government's 
                  initiative "Make in India", there is a perfect opportunity for us to capitalize on this 
                  situation and offer you the best service. To contribute to this era of change, Ganpati 
                  Coroplast Pvt. Ltd., a fully automated, high-tech corrugated box unit, was established 
                  in the heart of Bihar—Patna. Our aim is to leverage our experience to support the growth 
                  of these emerging industries.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission - Smart Art Format */}
        <div className="mb-20 animate-fadeIn">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-heading font-bold text-primary mb-6">Mission</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              At Ganpati Coroplast, we are driven by a clear set of goals that guide our every endeavor 
              and shape our vision for the future. These goals encapsulate our commitment to excellence, 
              innovation, sustainability, and customer satisfaction.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="card p-8 text-center group hover:shadow-large transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-heading font-bold text-primary mb-4">Excellence in Quality</h4>
              <p className="text-muted-foreground leading-relaxed">
                We strive for nothing short of excellence in every aspect of our operations. From material 
                selection to manufacturing processes, we are dedicated to maintaining the highest standards 
                of quality to ensure that our products meet and exceed the expectations of our clients.
              </p>
            </div>

            <div className="card p-8 text-center group hover:shadow-large transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-heading font-bold text-primary mb-4">Continuous Innovation</h4>
              <p className="text-muted-foreground leading-relaxed">
                Innovation is at the heart of everything we do. We are committed to staying ahead of industry 
                trends, embracing new technologies, and exploring innovative solutions to enhance our products, 
                processes, and services, ensuring that we remain at the forefront of the packaging industry.
              </p>
            </div>

            <div className="card p-8 text-center group hover:shadow-large transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-heading font-bold text-primary mb-4">Sustainability</h4>
              <p className="text-muted-foreground leading-relaxed">
                Environmental responsibility is a core pillar of our business philosophy. We are committed to 
                reducing our environmental footprint by implementing sustainable practices throughout our supply 
                chain, from sourcing eco-friendly materials to minimizing waste and energy consumption.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20 animate-slideUp">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-heading font-bold text-primary mb-4">Our Leadership Team</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="card p-6 text-center group hover:shadow-large transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-r from-accent to-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-lg font-heading font-bold text-primary mb-2">{member.name}</h4>
                <p className="text-accent font-medium">{member.position}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Plant & Machinery */}
        <div className="mb-20 animate-fadeIn">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-heading font-bold text-primary mb-4">Plant & Machinery</h3>
          </div>
          <div className="card p-8 max-w-6xl mx-auto overflow-x-auto">
            <div className="min-w-full">
              <div className="grid grid-cols-3 gap-4 mb-4 font-semibold text-primary bg-accent/10 p-4 rounded-lg">
                <div>Machine Name</div>
                <div>Company Name</div>
                <div>Specification</div>
              </div>
              {machinery.map((machine, index) => (
                <div key={index} className="grid grid-cols-3 gap-4 p-4 border-b border-border">
                  <div className="text-muted-foreground">{machine.name}</div>
                  <div className="text-muted-foreground">{machine.company}</div>
                  <div className="text-muted-foreground">{machine.spec}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quality Policy */}
        <div className="mb-20 animate-slideUp">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-heading font-bold text-primary mb-4">Quality Policy</h3>
            <p className="text-lg text-accent font-semibold italic max-w-4xl mx-auto mb-8">
              "Quality is never an accident. It is always the result of intelligent effort" - John Ruskin
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            <div className="card p-8">
              <p className="text-muted-foreground leading-relaxed">
                Reduction and optimization of product cost is the most sought-after element for both supplier 
                and customer but not at the expense of quality. We follow very stringent quality norms right 
                from incoming raw material, work in process to finished product without any hesitation to 
                scrap material not conforming to standards. We do not just believe but make it happen by 
                learning at every step from our mistakes.
              </p>
            </div>
            <div className="card p-8">
              <h4 className="text-xl font-heading font-semibold text-primary mb-6">Quality Check Equipment</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent mr-3" />
                  Burst factor and Bursting strength tester
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent mr-3" />
                  Fully Automatic Box Compression
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent mr-3" />
                  Box weighing digital scale
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent mr-3" />
                  Moisture Meter
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent mr-3" />
                  COBB Tester
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent mr-3" />
                  Caliper Thickness Gauge
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent mr-3" />
                  Fully Automatic Computerized Model Crush Tester
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent mr-3" />
                  Digital GSM Tester
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Our Clients */}
        <div className="mb-20 animate-fadeIn">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-heading font-bold text-primary mb-4">Our Clients</h3>
            <p className="text-lg text-muted-foreground">Trusted by Industry Leaders</p>
          </div>
          <div className="card p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
              {clients.map((client, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-lg font-bold text-primary">{client}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="animate-slideUp">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-heading font-bold text-primary mb-4">Contact Us</h3>
            <p className="text-lg text-muted-foreground">We are ready to assist you</p>
          </div>
          <div className="card p-10 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-xl flex items-center justify-center mx-auto">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Phone</h4>
                  <p className="text-muted-foreground">+91 98290 69467</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-xl flex items-center justify-center mx-auto">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Email</h4>
                  <p className="text-muted-foreground">director@ganpaticoroplast.com</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-xl flex items-center justify-center mx-auto">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Address</h4>
                  <p className="text-muted-foreground text-sm">
                    Opp. Chhapak Water Park Khasra No. 184 418 419<br/>
                    Patna Bakhtiyarpur Road, Jethuli<br/>
                    Fatuah, Patna, Bihar, 803201
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
