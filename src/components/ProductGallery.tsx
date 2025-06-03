
import { Package, Box, Layers, Archive, Grid, Wrench, Shield, Truck } from 'lucide-react';

const ProductGallery = () => {
  const productCategories = [
    {
      title: "Self-lock Boxes & Telescope Boxes",
      description: "High-quality self-locking and telescope-style packaging solutions",
      images: [
        {
          src: "/lovable-uploads/9e32d3b2-4372-46ed-84dc-5fa1d7057507.png",
          alt: "Self-lock Box",
          name: "Premium Self-lock Box"
        },
        {
          src: "/lovable-uploads/2fc955c0-0b4b-4b31-a1e0-a1f32a05c4a5.png", 
          alt: "Telescope Box",
          name: "Telescope Type Box"
        }
      ],
      icon: <Package className="w-8 h-8" />
    },
    {
      title: "Mono Cartons & Display Solutions",
      description: "Premium mono cartons and retail display packaging",
      images: [
        {
          src: "/lovable-uploads/6745c2c4-19df-451a-8fa1-fa4ea546dce9.png",
          alt: "Mono Cartons",
          name: "Multi-size Mono Cartons"
        },
        {
          src: "/lovable-uploads/bf4716eb-04da-4eb4-8edf-1167f2732164.png",
          alt: "Display Carton",
          name: "Display Carton Tray"
        }
      ],
      icon: <Grid className="w-8 h-8" />
    },
    {
      title: "Corrugated Solutions & Raw Materials",
      description: "Industrial-grade corrugated boxes and kraft paper rolls",
      images: [
        {
          src: "/lovable-uploads/f12ca268-35e7-4fa0-be92-7136817cbee7.png",
          alt: "Corrugated Box",
          name: "Heavy-duty Corrugated Box"
        },
        {
          src: "/lovable-uploads/87548fb1-5f11-4212-b6f4-f2dc4cad2bcb.png",
          alt: "Kraft Paper Roll",
          name: "Kraft Paper Roll"
        }
      ],
      icon: <Archive className="w-8 h-8" />
    },
    {
      title: "Specialized Containers",
      description: "Custom packaging solutions for specific industry needs",
      images: [
        {
          src: "/lovable-uploads/ce006d9d-8bf1-4d0e-889e-0053bc15dd7c.png",
          alt: "Shoe Box",
          name: "Premium Shoe Box"
        }
      ],
      icon: <Box className="w-8 h-8" />
    }
  ];

  const allSolutions = [
    {
      title: "Mono Cartons",
      description: "High-quality mono cartons for premium packaging needs",
      icon: <Package className="w-6 h-6" />
    },
    {
      title: "Self-lock Trays",
      description: "Convenient self-locking tray solutions for easy assembly",
      icon: <Box className="w-6 h-6" />
    },
    {
      title: "Display Cartons",
      description: "Eye-catching display cartons for retail environments",
      icon: <Grid className="w-6 h-6" />
    },
    {
      title: "Telescope Type Boxes",
      description: "Adjustable telescope boxes for various product sizes",
      icon: <Layers className="w-6 h-6" />
    },
    {
      title: "Regular Slotted Containers",
      description: "Standard RSC boxes for general packaging applications",
      icon: <Archive className="w-6 h-6" />
    },
    {
      title: "Corrugated Honeycomb Partitions",
      description: "Protective partitions for delicate items",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Full Overlap Slotted Containers",
      description: "Enhanced protection with full overlap design",
      icon: <Wrench className="w-6 h-6" />
    },
    {
      title: "Large Specialized Boxes",
      description: "Custom large boxes for white goods industry",
      icon: <Truck className="w-6 h-6" />
    }
  ];

  const industries = [
    "FMCG - Oil, Mineral water, Snacks",
    "Consumer Lighting & Electronics", 
    "Engineering Goods",
    "Automotive Sector",
    "Liquor Industry",
    "Handicraft",
    "Garments",
    "Footwear",
    "E-commerce Packaging",
    "Pharmaceutical",
    "Food & Beverage",
    "Home Appliances"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 dark:bg-accent/20 rounded-full mb-6">
            <span className="text-accent text-sm font-semibold tracking-wide">
              Our Products
            </span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
            Complete Packaging Solutions
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From concept to delivery, we provide comprehensive packaging solutions designed to meet diverse industry requirements
          </p>
        </div>

        {/* Product Categories with Images */}
        <div className="space-y-20 mb-20">
          {productCategories.map((category, index) => (
            <div key={index} className="bg-card rounded-3xl p-8 shadow-large">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center text-white mr-6">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-primary mb-2">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {category.description}
                  </p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.images.map((image, imgIndex) => (
                  <div key={imgIndex} className="group">
                    <div className="bg-brand-off-white dark:bg-brand-slate-800 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                      <div className="aspect-square mb-4 rounded-xl overflow-hidden bg-white">
                        <img 
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-contain p-4"
                        />
                      </div>
                      <h4 className="text-lg font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
                        {image.name}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* All Solutions Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-heading font-bold text-center text-primary mb-12">
            Complete Product Range
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {allSolutions.map((solution, index) => (
              <div key={index} className="group">
                <div className="bg-card rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                    {solution.icon}
                  </div>
                  
                  <h3 className="text-lg font-heading font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                    {solution.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industries Served */}
        <div className="bg-secondary rounded-3xl p-8 mb-20">
          <h2 className="text-3xl font-heading font-bold text-center text-primary mb-12">
            Industries We Serve
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-card rounded-xl p-4 shadow-medium hover:shadow-large transition-shadow text-center">
                <p className="text-sm font-medium text-primary">{industry}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Role in Packaging */}
        <div className="bg-card rounded-3xl p-10 shadow-large">
          <h2 className="text-3xl font-heading font-bold text-primary mb-6 text-center">
            Our Role In Packaging
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto">
            Packaging plays a very critical role in building the brand equity of the product packed inside. 
            We specialize in customized packaging and provide solutions to all the clients across all the business categories. 
            We do not just deliver the boxes but also print according to customer needs. We check every minor details 
            and take care of the physical attributes to deliver you the best product of your choice!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
