import { CheckCircle } from 'lucide-react';

const QualityPolicy = () => {
  const equipment = [
    "Burst factor and Bursting strength tester",
    "Fully Automatic Box Compression",
    "Box weighing digital scale",
    "Moisture Meter",
    "COBB Tester",
    "Caliper Thickness Gauge",
    "Fully Automatic Computerized Model Crush Tester",
    "Digital GSM Tester"
  ];

  return (
    <section className="section bg-primary/10 backdrop-blur-sm border-y border-border/30">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="space-y-3 mb-12 fade-in">
            <h2 className="text-5xl md:text-6xl font-heading font-bold text-foreground">
              Quality Policy
            </h2>
            <p className="text-xl md:text-2xl italic text-muted-foreground leading-relaxed">
              "Quality is never an accident. It is always the result of intelligent effort"- John Ruskin
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 pt-4">
            {/* Left Column - Policy Text */}
            <div className="space-y-6 fade-in">
              <div className="h-0.5 w-full max-w-md bg-accent/40"></div>
              <p className="text-base md:text-lg leading-relaxed text-foreground">
                Reduction and optimization of product cost is the most sought-after element for both supplier and customer but not at the expense of quality. We follow very stringent quality norms right from incoming raw material, work in process to finished product without any hesitation to scrap material not conforming to standards. We do not just believe but make it happen by learning at every step from our mistakes.
              </p>
            </div>

            {/* Right Column - Equipment List */}
            <div className="space-y-6 fade-in">
              <div className="space-y-4">
                <div className="h-0.5 w-full max-w-md bg-accent/40"></div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground tracking-wide">
                  QUALITY CHECK EQUIPMENT
                </h3>
              </div>
              <ul className="space-y-3.5 pl-1">
                {equipment.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-foreground mt-0.5 flex-shrink-0">•</span>
                    <span className="text-base md:text-lg text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityPolicy;
