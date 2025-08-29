import { Cog, Zap, Wrench, Truck } from 'lucide-react';

const PlantMachinery = () => {
  const machinery = [
    {
      name: "CORRUGATING LINE",
      company: "XINGUANG",
      specification: "1800 mm 180 mt / min",
      icon: Cog,
      category: "Production"
    },
    {
      name: "PRINTER MACHINE",
      company: "XINLONGSHENG", 
      specification: "4 colour SIZE-1200x2600",
      icon: Wrench,
      category: "Printing"
    },
    {
      name: "GLUER MACHINE",
      company: "DONGGUANG NORTH PACK PACKAGING MACHINERY CO., LTD",
      specification: "QINGFENG QF-2600",
      icon: Cog,
      category: "Assembly"
    },
    {
      name: "GENERATOR - DG SET",
      company: "JAKSON LIMITED",
      specification: "250 kVA",
      icon: Zap,
      category: "Power"
    },
    {
      name: "FORKLIFT",
      company: "TOYOTA",
      specification: "3 TON",
      icon: Truck,
      category: "Material Handling"
    }
  ];

  return (
    <section className="section fade-in bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fadeIn">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full mb-6">
            <span className="text-accent text-sm font-semibold tracking-wide">
              Ganpati Coroplast Pvt. Ltd.
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">Plant & Machinery</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            State-of-the-art equipment ensuring precision, efficiency, and quality in every production cycle
          </p>
        </div>

        {/* Machinery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 animate-slideUp">
          {machinery.map((machine, index) => (
            <div key={index} className="group">
              <div className="card p-8 h-full hover:shadow-large transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <machine.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 bg-secondary/10 text-secondary rounded-full">
                    {machine.category}
                  </span>
                </div>

                <h3 className="text-xl font-heading font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                  {machine.name}
                </h3>

                <div className="space-y-3 mb-4">
                  <div>
                    <p className="text-sm font-semibold text-primary mb-1">Company:</p>
                    <p className="text-sm text-muted-foreground">{machine.company}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary mb-1">Specification:</p>
                    <p className="text-sm text-muted-foreground">{machine.specification}</p>
                  </div>
                </div>

                <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Manufacturing Excellence Section */}
        <div className="max-w-4xl mx-auto animate-fadeIn">
          <div className="card p-10 text-center">
            <h3 className="text-3xl font-heading font-bold text-primary mb-6">
              Manufacturing Excellence
            </h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Cog className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-primary mb-2">Precision Engineering</h4>
                <p className="text-muted-foreground">Advanced machinery ensuring consistent quality and dimensional accuracy</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-secondary" />
                </div>
                <h4 className="text-lg font-semibold text-primary mb-2">High Efficiency</h4>
                <p className="text-muted-foreground">Optimized production lines for maximum output and minimal waste</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-8 h-8 text-accent" />
                </div>
                <h4 className="text-lg font-semibold text-primary mb-2">Quality Assurance</h4>
                <p className="text-muted-foreground">Rigorous testing and quality control at every production stage</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlantMachinery;