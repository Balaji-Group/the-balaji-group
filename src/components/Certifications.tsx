import { Award, Shield, CheckCircle, Star } from 'lucide-react';

const Certifications = () => {
    const certifications = [
        {
            title: 'ISO 9001:2015',
            description: 'Quality Management System Certified',
            icon: <Shield className="w-8 h-8" />,
        },
        {
            title: 'FSC Certified',
            description: 'Responsibly Sourced Materials',
            icon: <CheckCircle className="w-8 h-8" />,
        },
        {
            title: 'MSME Registered',
            description: 'Government Recognized Enterprise',
            icon: <Award className="w-8 h-8" />,
        },
        {
            title: 'GST Compliant',
            description: 'Fully Tax Compliant Operations',
            icon: <Star className="w-8 h-8" />,
        },
    ];

    return (
        <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full mb-6">
                        <span className="text-accent text-sm font-semibold tracking-wide">
                            Quality Assurance
                        </span>
                    </div>
                    <h3 className="text-3xl font-heading font-bold text-primary mb-4">
                        Certifications & Standards
                    </h3>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Our commitment to quality is backed by industry-recognized certifications
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                    {certifications.map((cert, index) => (
                        <div
                            key={index}
                            className="group bg-card rounded-2xl p-6 border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-xl text-center"
                        >
                            {/* Icon */}
                            <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                                {cert.icon}
                            </div>

                            {/* Title */}
                            <h4 className="text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                                {cert.title}
                            </h4>

                            {/* Description */}
                            <p className="text-sm text-muted-foreground">
                                {cert.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Additional quality note */}
                <div className="mt-12 text-center">
                    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full px-6 py-3 border border-accent/20">
                        <Award className="w-5 h-5 text-accent" />
                        <span className="text-foreground font-medium text-sm">
                            All our products undergo rigorous quality testing before dispatch
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certifications;
