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
    <section className="section bg-[#1e3a5f] text-white">
      <div className="container mx-auto px-4">
        <div className="space-y-8">
          {/* Header */}
          <div className="space-y-4 fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">
              Quality Policy
            </h2>
            <p className="text-lg md:text-xl italic text-white/90">
              "Quality is never an accident. It is always the result of intelligent effort"- John Ruskin
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 pt-8">
            {/* Left Column - Policy Text */}
            <div className="space-y-4 fade-in">
              <div className="h-1 w-24 bg-white/40"></div>
              <p className="text-base md:text-lg leading-relaxed text-white/90">
                Reduction and optimization of product cost is the most sought-after element for both supplier and customer but not at the expense of quality. We follow very stringent quality norms right from incoming raw material, work in process to finished product without any hesitation to scrap material not conforming to standards. We do not just believe but make it happen by learning at every step from our mistakes.
              </p>
            </div>

            {/* Right Column - Equipment List */}
            <div className="space-y-6 fade-in">
              <div className="space-y-2">
                <div className="h-1 w-24 bg-white/40"></div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-white">
                  QUALITY CHECK EQUIPMENT
                </h3>
              </div>
              <ul className="space-y-3">
                {equipment.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-white/90 mt-0.5 flex-shrink-0" />
                    <span className="text-base text-white/90">{item}</span>
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
