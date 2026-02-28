import {
    CheckCircle,
    Shield,
    
    Leaf,
    Clock,
    HeartHandshake,
    Sparkles,
    Target
} from 'lucide-react';

const WhyChooseUs = () => {
    const values = [
        {
            icon: <CheckCircle className="w-7 h-7" />,
            title: 'Premium Quality',
            description: 'Stringent quality control from raw materials to finished products, ensuring excellence at every step.',
            color: 'from-accent to-primary',
        },
        {
            icon: <Shield className="w-7 h-7" />,
            title: 'Reliability & Trust',
            description: 'Over 22 years of consistent delivery and dependable service has made us a trusted partner for 1000+ clients.',
            color: 'from-primary to-secondary',
        },
        {
            icon: <Sparkles className="w-7 h-7" />,
            title: 'Customization',
            description: 'Tailored packaging solutions designed to meet your specific brand requirements and product needs.',
            color: 'from-secondary to-accent',
        },
        {
            icon: <Leaf className="w-7 h-7" />,
            title: 'Sustainability',
            description: 'Eco-friendly materials and processes that minimize environmental impact while maximizing quality.',
            color: 'from-accent to-secondary',
        },
        {
            icon: <Clock className="w-7 h-7" />,
            title: 'On-Time Delivery',
            description: 'Our robust logistics and multi-state operations ensure your orders reach you when you need them.',
            color: 'from-primary to-accent',
        },
        {
            icon: <HeartHandshake className="w-7 h-7" />,
            title: 'Customer Satisfaction',
            description: 'Dedicated support and transparent communication from inquiry to delivery and beyond.',
            color: 'from-secondary to-primary',
        },
    ];

    return (
        <section className="py-20 bg-background relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-20 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full mb-6">
                        <span className="text-accent text-sm font-semibold tracking-wide">
                            Our Commitment
                        </span>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-4">
                        Why Choose Balaji Group?
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Experience the difference of working with a packaging partner who prioritizes your success as much as their own
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {values.map((value, index) => (
                        <div
                            key={index}
                            className="group relative bg-card rounded-2xl p-8 border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2"
                        >
                            {/* Icon */}
                            <div
                                className={`w-14 h-14 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-lg`}
                            >
                                {value.icon}
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-heading font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                                {value.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {value.description}
                            </p>

                            {/* Decorative corner */}
                            <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-accent/0 group-hover:border-accent/30 rounded-tr-xl transition-colors" />
                            <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-accent/0 group-hover:border-accent/30 rounded-bl-xl transition-colors" />
                        </div>
                    ))}
                </div>

                {/* Bottom callout */}
                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full px-6 py-3 border border-accent/20">
                        <Target className="w-5 h-5 text-accent" />
                        <span className="text-foreground font-medium">
                            Join 1000+ satisfied clients who trust Balaji Group for their packaging needs
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
