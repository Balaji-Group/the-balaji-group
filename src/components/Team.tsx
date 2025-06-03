
import { Briefcase, Calendar } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "DINESH GUPTA",
      position: "PARTNER: SHRI BALAJI PACKAGING",
      image: "/lovable-uploads/7ea35f6c-2e4d-4480-84c3-c9d06f1f3f15.png",
      joinYear: "2011",
      description: "Since becoming a partner in 2011, I have dedicated my efforts to enhancing the efficiency of our system. I firmly believe that with a robust system in place, we can excel at any given stage."
    },
    {
      name: "VIVEK AGARWAL", 
      position: "PARTNER: SHRI BALAJI PACKAGING",
      image: "/lovable-uploads/7ea35f6c-2e4d-4480-84c3-c9d06f1f3f15.png",
      joinYear: "2017",
      description: "I became a partner in 2017. I am convinced that our distinction lies in our quality and resilience to tailor our designs precisely to meet every customer's needs."
    }
  ];

  return (
    <section id="team" className="py-20 bg-balaji-beige dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-foreground mb-6">Our Team</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the dedicated professionals driving innovation and excellence in packaging solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="group">
              <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                {/* Member Image */}
                <div className="relative mb-8">
                  <div className="w-48 h-48 mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-balaji-brown to-balaji-blue shadow-lg">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-balaji-gold rounded-full p-3 shadow-lg">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Member Info */}
                <div className="text-center">
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                    {member.name}
                  </h3>
                  <p className="text-balaji-brown font-semibold mb-4">
                    {member.position}
                  </p>
                  
                  <div className="flex items-center justify-center text-balaji-gold mb-6">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">Joined {member.joinYear}</span>
                  </div>

                  <div className="w-16 h-1 bg-balaji-gold mx-auto mb-6"></div>
                  
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {member.description}
                  </p>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-6 right-6 w-12 h-12 bg-balaji-gold/10 rounded-full group-hover:bg-balaji-gold/20 transition-colors"></div>
                <div className="absolute bottom-6 left-6 w-8 h-8 bg-balaji-brown/10 rounded-lg group-hover:bg-balaji-brown/20 transition-colors"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Leadership Message */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg text-center">
            <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
              Leadership Philosophy
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our leadership team brings together decades of experience in packaging innovation, 
              operational excellence, and customer service. We believe in empowering our team 
              to deliver solutions that exceed expectations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
