import { CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

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
    <section className="section bg-background">
      <div className="container mx-auto px-4">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4 fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
              Quality Policy
            </h2>
            <p className="text-lg md:text-xl italic text-muted-foreground max-w-4xl mx-auto">
              "Quality is never an accident. It is always the result of intelligent effort" - John Ruskin
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 pt-8">
            {/* Left Card - Policy Text */}
            <Card className="fade-in">
              <CardHeader>
                <CardTitle className="text-2xl">Our Quality Commitment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base leading-relaxed text-foreground">
                  Reduction and optimization of product cost is the most sought-after element for both supplier and customer but not at the expense of quality. We follow very stringent quality norms right from incoming raw material, work in process to finished product without any hesitation to scrap material not conforming to standards. We do not just believe but make it happen by learning at every step from our mistakes.
                </p>
              </CardContent>
            </Card>

            {/* Right Card - Equipment List */}
            <Card className="fade-in">
              <CardHeader>
                <CardTitle className="text-2xl">Quality Check Equipment</CardTitle>
                <CardDescription>Advanced testing and measurement tools</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {equipment.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-base text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityPolicy;
