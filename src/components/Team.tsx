import { Briefcase, Calendar } from 'lucide-react';
import { withBase } from '@/lib/utils';

const Team = () => {
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
    },
    {
      name: "SUMIT GOEL",
      position: "FOUNDING DIRECTOR",
      image: withBase('/lovable-uploads/55e7530b-dab7-42ec-a814-8a4ff7b4cb6a.png'),
      joinYear: "2002",
      description: "Leading Balaji Group with a vision to revolutionize the packaging industry through innovation, quality, and customer-centric solutions."
    },
    {
      name: "SUBHASH KR BOOBNA",
      position: "DIRECTOR: GANPATI COROPLAST",
      image: withBase('/lovable-uploads/5a737287-aaaa-4679-a99a-0c3c844cd5b4.png'),
      joinYear: "2024",
      description: "Bringing expertise in automated packaging solutions and driving the vision of Ganpati Coroplast to serve industries nationwide."
    },
    {
      name: "ASHISH BOOBNA",
      position: "DIRECTOR: GANPATI COROPLAST",
      image: withBase('/lovable-uploads/5a737287-aaaa-4679-a99a-0c3c844cd5b4.png'),
      joinYear: "2024",
      description: "Focused on operational excellence and ensuring high-quality carton packaging solutions with cutting-edge technology."
    },
    {
      name: "SHASWAT KAMALIA",
      position: "DIRECTOR: GANPATI COROPLAST",
      image: withBase('/lovable-uploads/5a737287-aaaa-4679-a99a-0c3c844cd5b4.png'),
      joinYear: "2024",
      description: "Committed to innovation and sustainability in packaging solutions, supporting the growth of emerging industries."
    }
  ];

  return (
    <section id="team" className="section fade-in bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fadeIn">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 dark:bg-accent/20 rounded-full mb-6">
            <span className="text-accent text-sm font-semibold tracking-wide">
              Leadership Team
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">Our Team</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Meet the dedicated professionals driving innovation and excellence in packaging solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-12 max-w-7xl mx-auto mb-16 animate-slideUp">
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
                  <h3 className="text-2xl font-heading font-bold text-primary mb-2">
                    {member.name}
                  </h3>
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
            <h3 className="text-3xl font-heading font-bold text-primary mb-6">
              Leadership Philosophy
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our leadership team brings together decades of experience in packaging innovation, 
              operational excellence, and customer service. We believe in empowering our team 
              to deliver solutions that exceed expectations while maintaining the highest quality standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
