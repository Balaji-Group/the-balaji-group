
import { Briefcase, Calendar } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "DINESH GUPTA",
      position: "PARTNER: SHRI BALAJI PACKAGING",
      image: "/lovable-uploads/f8765c98-74de-4cd5-874a-93ba8d1ccdd3.png",
      joinYear: "2011",
      description: "Since becoming a partner in 2011, I have dedicated my efforts to enhancing the efficiency of our system. I firmly believe that with a robust system in place, we can excel at any given stage."
    },
    {
      name: "VIVEK AGARWAL", 
      position: "PARTNER: SHRI BALAJI PACKAGING",
      image: "/lovable-uploads/bd704adf-2067-49fc-8b79-f367bde4b264.png",
      joinYear: "2017",
      description: "I became a partner in 2017. I am convinced that our distinction lies in our quality and resilience to tailor our designs precisely to meet every customer's needs."
    }
  ];

  return (
    <section id="team" className="py-20 bg-gradient-to-br from-brand-slate-50 to-white dark:from-brand-slate-800 dark:to-brand-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-brand-red/10 dark:bg-brand-red/20 rounded-full mb-6">
            <span className="text-brand-red text-sm font-semibold tracking-wide">
              Leadership Team
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-brand-navy dark:text-white mb-6">Our Team</h2>
          <p className="text-xl text-brand-slate-600 dark:text-brand-slate-300 max-w-3xl mx-auto leading-relaxed">
            Meet the dedicated professionals driving innovation and excellence in packaging solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
          {teamMembers.map((member, index) => (
            <div key={index} className="group">
              <div className="bg-white dark:bg-brand-slate-800 rounded-3xl p-8 shadow-large hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
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
                    <div className="bg-gradient-to-r from-brand-red to-brand-blue rounded-2xl p-3 shadow-medium">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Member Info */}
                <div className="text-center">
                  <h3 className="text-2xl font-heading font-bold text-brand-navy dark:text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-brand-red font-semibold mb-4 text-lg">
                    {member.position}
                  </p>
                  
                  <div className="flex items-center justify-center text-brand-blue mb-6">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">Joined {member.joinYear}</span>
                  </div>

                  <div className="w-20 h-1 bg-gradient-to-r from-brand-red to-brand-blue mx-auto mb-6 rounded-full"></div>
                  
                  <p className="text-brand-slate-600 dark:text-brand-slate-300 leading-relaxed">
                    {member.description}
                  </p>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-6 right-6 w-16 h-16 bg-brand-red/5 rounded-2xl group-hover:bg-brand-red/10 transition-colors blur-sm"></div>
                <div className="absolute bottom-6 left-6 w-12 h-12 bg-brand-blue/5 rounded-xl group-hover:bg-brand-blue/10 transition-colors blur-sm"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Leadership Message */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-white to-brand-slate-50 dark:from-brand-slate-800 dark:to-brand-slate-700 rounded-3xl p-10 shadow-large text-center">
            <h3 className="text-3xl font-heading font-bold text-brand-navy dark:text-white mb-6">
              Leadership Philosophy
            </h3>
            <p className="text-lg text-brand-slate-600 dark:text-brand-slate-300 leading-relaxed">
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
