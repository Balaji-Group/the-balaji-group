
import { Package, Box, Layers, Archive, Grid, Wrench, Shield, Truck } from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      title: "Mono Cartons",
      description: "High-quality mono cartons for premium packaging needs",
      icon: <Package className="w-8 h-8" />,
      color: "bg-balaji-brown"
    },
    {
      title: "Self-lock Trays",
      description: "Convenient self-locking tray solutions for easy assembly",
      icon: <Box className="w-8 h-8" />,
      color: "bg-balaji-blue"
    },
    {
      title: "Display Cartons",
      description: "Eye-catching display cartons for retail environments",
      icon: <Grid className="w-8 h-8" />,
      color: "bg-balaji-gold"
    },
    {
      title: "Telescope Type Boxes",
      description: "Adjustable telescope boxes for various product sizes",
      icon: <Layers className="w-8 h-8" />,
      color: "bg-balaji-red"
    },
    {
      title: "Regular Slotted Containers",
      description: "Standard RSC boxes for general packaging applications",
      icon: <Archive className="w-8 h-8" />,
      color: "bg-balaji-brown"
    },
    {
      title: "Corrugated Honeycomb Partitions",
      description: "Protective partitions for delicate items",
      icon: <Shield className="w-8 h-8" />,
      color: "bg-balaji-blue"
    },
    {
      title: "Full Overlap Slotted Containers",
      description: "Enhanced protection with full overlap design",
      icon: <Wrench className="w-8 h-8" />,
      color: "bg-balaji-gold"
    },
    {
      title: "Large Specialized Boxes",
      description: "Custom large boxes for white goods industry",
      icon: <Truck className="w-8 h-8" />,
      color: "bg-balaji-red"
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-foreground mb-6">Our Solutions</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Comprehensive packaging solutions designed to meet diverse industry requirements
          </p>
          
          {/* Role in Packaging */}
          <div className="bg-balaji-beige dark:bg-gray-800 rounded-2xl p-8 max-w-5xl mx-auto">
            <h3 className="text-2xl font-heading font-bold text-foreground mb-4">Our Role In Packaging</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Packaging plays a very critical role in building the brand equity of the product packed inside. 
              We specialize in customized packaging and provide solutions to all the clients across all the business categories. 
              We do not just deliver the boxes but also print according to customer needs. We check every minor details 
              and take care of the physical attributes to deliver you the best product of your choice!
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="group">
              <div className="bg-balaji-beige dark:bg-gray-800 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                <div className={`w-16 h-16 ${solution.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                  {solution.icon}
                </div>
                
                <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-balaji-brown transition-colors">
                  {solution.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {solution.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Industries Served */}
        <div className="mt-20">
          <h3 className="text-3xl font-heading font-bold text-center text-foreground mb-12">Industries We Serve</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "FMCG-Oil, Mineral water, Snacks",
              "Consumer Lighting & Electronics", 
              "Engineering Goods",
              "Automotive sector",
              "Liquor Industry",
              "Handicraft",
              "Garments",
              "Footwear"
            ].map((industry, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow text-center">
                <p className="text-sm font-medium text-foreground">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
