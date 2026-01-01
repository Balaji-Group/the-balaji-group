import { useEffect, useState, useRef } from 'react';
import { Users, Globe, Award, Clock, TrendingUp, Package } from 'lucide-react';

interface StatItem {
    icon: React.ReactNode;
    value: number;
    suffix: string;
    label: string;
    color: string;
}

const StatsCounter = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [counts, setCounts] = useState<number[]>([0, 0, 0, 0, 0, 0]);
    const sectionRef = useRef<HTMLDivElement>(null);

    const stats: StatItem[] = [
        {
            icon: <Users className="w-8 h-8" />,
            value: 1000,
            suffix: '+',
            label: 'Happy Clients',
            color: 'from-accent to-primary',
        },
        {
            icon: <Clock className="w-8 h-8" />,
            value: 22,
            suffix: '+',
            label: 'Years of Experience',
            color: 'from-secondary to-accent',
        },
        {
            icon: <Globe className="w-8 h-8" />,
            value: 5,
            suffix: '',
            label: 'States Coverage',
            color: 'from-primary to-secondary',
        },
        {
            icon: <Package className="w-8 h-8" />,
            value: 10000,
            suffix: '+',
            label: 'Tons Annual Capacity',
            color: 'from-accent to-secondary',
        },
        {
            icon: <Award className="w-8 h-8" />,
            value: 5,
            suffix: '',
            label: 'Group Companies',
            color: 'from-primary to-accent',
        },
        {
            icon: <TrendingUp className="w-8 h-8" />,
            value: 100,
            suffix: '%',
            label: 'Customer Satisfaction',
            color: 'from-secondary to-primary',
        },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, [isVisible]);

    useEffect(() => {
        if (!isVisible) return;

        const duration = 2000; // 2 seconds
        const steps = 60;
        const stepDuration = duration / steps;

        let currentStep = 0;

        const timer = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);

            setCounts(stats.map((stat) => Math.floor(stat.value * easeOutQuart)));

            if (currentStep >= steps) {
                clearInterval(timer);
                setCounts(stats.map((stat) => stat.value));
            }
        }, stepDuration);

        return () => clearInterval(timer);
    }, [isVisible]);

    return (
        <section ref={sectionRef} className="py-20 bg-card relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-4">
                        Our Impact in Numbers
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Two decades of excellence in delivering quality packaging solutions across India
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="group relative bg-background rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-border"
                        >
                            {/* Icon */}
                            <div
                                className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform shadow-lg`}
                            >
                                {stat.icon}
                            </div>

                            {/* Counter */}
                            <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                                {counts[index].toLocaleString()}
                                <span className="text-accent">{stat.suffix}</span>
                            </div>

                            {/* Label */}
                            <div className="text-sm font-medium text-muted-foreground">
                                {stat.label}
                            </div>

                            {/* Hover decoration */}
                            <div className="absolute inset-0 rounded-2xl border-2 border-accent/0 group-hover:border-accent/30 transition-colors" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsCounter;
