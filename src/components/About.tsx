
import { Target, Eye, Users, Globe, Award, Clock } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-balaji-off-white dark:bg-balaji-navy">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-balaji-navy dark:text-balaji-off-white mb-6">
            About Balaji Group
          </h2>
          <p className="text-xl text-balaji-gray-600 dark:text-balaji-gray-300 max-w-3xl mx-auto">
            A house of professionals dealing in paper and paper products with over 2 decades of experience
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left side - Vision & Mission */}
          <div>
            {/* Vision */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-balaji-red rounded-lg flex items-center justify-center mr-4">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-heading font-semibold text-balaji-navy dark:text-balaji-off-white">Vision</h3>
              </div>
              <p className="text-lg text-balaji-gray-600 dark:text-balaji-gray-300 leading-relaxed">
                To create a seamless ecosystem and be a one-stop solution for all your kraft paper needs. 
                Our vision is to be the go-to partner for businesses seeking reliable kraft paper solutions.
              </p>
            </div>

            {/* Mission */}
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-balaji-navy dark:bg-balaji-blue rounded-lg flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-heading font-semibold text-balaji-navy dark:text-balaji-off-white">Mission</h3>
              </div>
              <p className="text-lg text-balaji-gray-600 dark:text-balaji-gray-300 leading-relaxed">
                To be the leading provider of high-quality kraft paper, connecting mill owners, distributors, 
                and end-users across industries. We strive to deliver sustainable solutions that enhance 
                packaging, printing, and other applications.
              </p>
            </div>
          </div>

          {/* Right side - Founder */}
          <div className="relative">
            <div className="bg-white dark:bg-balaji-gray-800 rounded-3xl p-8 shadow-xl">
              <div className="absolute top-0 right-0 w-24 h-24 bg-balaji-red/10 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-balaji-navy to-balaji-blue">
                  <img 
                    src="/lovable-uploads/5334fa56-ebc4-4cdd-8a3b-e6b5eaaf7409.png" 
                    alt="Sumit Goel - Founding Director" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-heading font-bold text-balaji-navy dark:text-balaji-off-white mb-2">SUMIT GOEL</h3>
                  <p className="text-balaji-red font-semibold mb-4">Founding Director</p>
                  <div className="w-16 h-1 bg-balaji-red mx-auto mb-6"></div>
                  <p className="text-balaji-gray-600 dark:text-balaji-gray-300 leading-relaxed">
                    Leading Balaji Group with a vision to revolutionize the packaging industry through 
                    innovation, quality, and customer-centric solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company Overview */}
        <div className="bg-white dark:bg-balaji-gray-800 rounded-3xl p-8 mb-16 shadow-lg">
          <h3 className="text-2xl font-heading font-bold text-balaji-navy dark:text-balaji-off-white mb-6 text-center">
            Company Overview
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-balaji-gray-600 dark:text-balaji-gray-300 leading-relaxed mb-4">
                Balaji Paper Mart (Established in 2004) is a trusted name in the trade of <strong>Kraft paper and Duplex Board</strong>. 
                With a legacy spanning over <strong>two decades</strong>, the company has become a prominent player in the Kraft paper 
                trading industry, recognized for its quality products and dependable service.
              </p>
              <p className="text-balaji-gray-600 dark:text-balaji-gray-300 leading-relaxed">
                Based in Jaipur, Balaji Paper Mart caters to clients in <strong>Rajasthan, Western Uttar Pradesh (UP), 
                Himachal Pradesh, Bihar, and the National Capital Region (NCR)</strong>. Its reach reflects a robust 
                distribution network and a dedication to meeting the diverse needs of businesses across these regions.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-balaji-navy dark:text-balaji-off-white mb-4">Our Product Profile:</h4>
              <ul className="space-y-2 text-balaji-gray-600 dark:text-balaji-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-balaji-red rounded-full mr-3"></div>
                  Kraft paper & Duplex board
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-balaji-red rounded-full mr-3"></div>
                  Corrugated rolls, sheets and boxes
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-balaji-red rounded-full mr-3"></div>
                  Duplex/E-flute mono cartons
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-balaji-gray-800 rounded-xl p-6 shadow-lg text-center">
            <Users className="w-8 h-8 text-balaji-red mx-auto mb-2" />
            <div className="text-2xl font-bold text-balaji-navy dark:text-balaji-off-white">1000+</div>
            <div className="text-sm text-balaji-gray-600 dark:text-balaji-gray-300">Happy Clients</div>
          </div>
          <div className="bg-white dark:bg-balaji-gray-800 rounded-xl p-6 shadow-lg text-center">
            <Globe className="w-8 h-8 text-balaji-red mx-auto mb-2" />
            <div className="text-2xl font-bold text-balaji-navy dark:text-balaji-off-white">5</div>
            <div className="text-sm text-balaji-gray-600 dark:text-balaji-gray-300">States Coverage</div>
          </div>
          <div className="bg-white dark:bg-balaji-gray-800 rounded-xl p-6 shadow-lg text-center">
            <Award className="w-8 h-8 text-balaji-red mx-auto mb-2" />
            <div className="text-2xl font-bold text-balaji-navy dark:text-balaji-off-white">20+</div>
            <div className="text-sm text-balaji-gray-600 dark:text-balaji-gray-300">Years Experience</div>
          </div>
          <div className="bg-white dark:bg-balaji-gray-800 rounded-xl p-6 shadow-lg text-center">
            <Clock className="w-8 h-8 text-balaji-red mx-auto mb-2" />
            <div className="text-2xl font-bold text-balaji-navy dark:text-balaji-off-white">24/7</div>
            <div className="text-sm text-balaji-gray-600 dark:text-balaji-gray-300">Customer Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
