import { Star, Award } from 'lucide-react';

const Clients = () => {
  const clients = [
    {
      name: "Anmol",
      logo: "/lovable-uploads/67f5eac7-29fc-4ae2-8058-8176fd041bba.png",
      industry: "Food & Beverage"
    },
    {
      name: "Bikaji",
      logo: "/lovable-uploads/67f5eac7-29fc-4ae2-8058-8176fd041bba.png", 
      industry: "Food & Snacks"
    },
    {
      name: "Haldiram's",
      logo: "/lovable-uploads/67f5eac7-29fc-4ae2-8058-8176fd041bba.png",
      industry: "Food & Snacks"
    },
    {
      name: "Hero Cycles",
      logo: "/lovable-uploads/67f5eac7-29fc-4ae2-8058-8176fd041bba.png",
      industry: "Automotive"
    },
    {
      name: "VIP",
      logo: "/lovable-uploads/67f5eac7-29fc-4ae2-8058-8176fd041bba.png",
      industry: "Luggage & Travel"
    }
  ];

  return (
    <section className="section fade-in bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fadeIn">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full mb-6">
            <span className="text-accent text-sm font-semibold tracking-wide">
              Trusted Partners
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">Our Clients</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Trusted by Industry Leaders Across Multiple Sectors
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16 animate-slideUp">
          {clients.map((client, index) => (
            <div key={index} className="group">
              <div className="card p-6 text-center hover:shadow-large transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl overflow-hidden bg-primary/5 flex items-center justify-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-heading font-bold text-primary mb-2">
                  {client.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {client.industry}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Client Testimonial Section */}
        <div className="max-w-4xl mx-auto animate-fadeIn">
          <div className="card p-10 text-center">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-accent fill-current" />
              ))}
            </div>
            <h3 className="text-2xl font-heading font-bold text-primary mb-6">
              Excellence Recognized by Industry Leaders
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our commitment to quality, innovation, and customer satisfaction has earned us the trust 
              of some of India's most respected brands. From food giants like Haldiram's and Bikaji 
              to automotive leaders like Hero Cycles, we deliver packaging solutions that meet the 
              highest industry standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;