import {
    Heart,
    Shield,
    Lightbulb,
    Leaf,
    Award,
    Handshake
} from 'lucide-react';

const CoreValues = () => {
    const values = [
        {
            icon: <Heart className="w-7 h-7" />,
            title: 'Customer-Centric',
            description: 'Our customers are at the heart of everything we do. We listen, anticipate needs, and deliver solutions that exceed expectations.',
            color: 'from-rose-500 to-red-600',
        },
        {
            icon: <Shield className="w-7 h-7" />,
            title: 'Integrity',
            description: 'We conduct business with the highest standards of honesty and transparency. Trust is built through ethical practices and accountability.',
            color: 'from-blue-500 to-indigo-600',
        },
        {
            icon: <Lightbulb className="w-7 h-7" />,
            title: 'Innovation',
            description: 'We embrace creativity and new technologies to provide cutting-edge packaging solutions. Continuous improvement is in our DNA.',
            color: 'from-amber-500 to-orange-600',
        },
        {
            icon: <Leaf className="w-7 h-7" />,
            title: 'Sustainability',
            description: 'We are committed to eco-friendly practices, from responsible sourcing to minimizing our environmental footprint.',
            color: 'from-emerald-500 to-green-600',
        },
        {
            icon: <Award className="w-7 h-7" />,
            title: 'Excellence',
            description: 'We pursue excellence in every product, every process, and every interaction. Quality is never an accident—it is the result of intelligent effort.',
            color: 'from-purple-500 to-violet-600',
        },
        {
            icon: <Handshake className="w-7 h-7" />,
            title: 'Partnership',
            description: 'We believe in building long-term relationships with our clients, suppliers, and team members based on mutual respect and shared success.',
            color: 'from-teal-500 to-cyan-600',
        },
    ];

    return (
        <section className="py-16 bg-card">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h3 className="text-3xl font-heading font-bold text-primary mb-4">
                        Our Core Values
                    </h3>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        The principles that guide every decision and action at Balaji Group
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {values.map((value, index) => (
                        <div
                            key={index}
                            className="group bg-background rounded-2xl p-6 border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-lg"
                        >
                            {/* Icon */}
                            <div
                                className={`w-14 h-14 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform shadow-md`}
                            >
                                {value.icon}
                            </div>

                            {/* Content */}
                            <h4 className="text-lg font-heading font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                                {value.title}
                            </h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoreValues;
