import { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
    name: string;
    position: string;
    company: string;
    content: string;
    rating: number;
}

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const testimonials: Testimonial[] = [
        {
            name: 'Rajesh Sharma',
            position: 'Procurement Head',
            company: 'Leading FMCG Company',
            content: 'Balaji Group has been our trusted packaging partner for over 8 years. Their commitment to quality and on-time delivery has significantly improved our supply chain efficiency. The customization options they offer are unmatched in the industry.',
            rating: 5,
        },
        {
            name: 'Priya Agarwal',
            position: 'Operations Director',
            company: 'E-commerce Enterprise',
            content: 'Switching to Balaji Group was one of our best decisions. Their corrugated solutions are robust, cost-effective, and eco-friendly. The team understands our dynamic requirements and always delivers beyond expectations.',
            rating: 5,
        },
        {
            name: 'Amit Verma',
            position: 'Supply Chain Manager',
            company: 'Electronics Manufacturer',
            content: 'The quality of mono cartons and specialized packaging from Balaji Group is exceptional. Their attention to detail in custom printing and precise dimensions has helped us enhance our brand presentation significantly.',
            rating: 5,
        },
        {
            name: 'Sunita Patel',
            position: 'MD',
            company: 'Food Processing Unit',
            content: 'We have been working with Balaji Paper Mart for kraft paper supplies for over a decade. Their consistent quality, competitive pricing, and reliable delivery across states make them an invaluable partner for our business.',
            rating: 5,
        },
        {
            name: 'Vikram Singh',
            position: 'Plant Manager',
            company: 'Automotive Parts Supplier',
            content: 'The heavy-duty corrugated boxes from Shri Balaji Packaging meet our stringent requirements for automotive component protection. Their fully automatic plant ensures uniformity in every batch we receive.',
            rating: 5,
        },
    ];

    useEffect(() => {
        if (!isAutoPlaying) return;

        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(timer);
    }, [isAutoPlaying, testimonials.length]);

    const nextTestimonial = () => {
        setIsAutoPlaying(false);
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setIsAutoPlaying(false);
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="py-20 bg-card relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full mb-6">
                        <span className="text-accent text-sm font-semibold tracking-wide">
                            Client Stories
                        </span>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-4">
                        What Our Clients Say
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Hear from businesses that have transformed their packaging with Balaji Group
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    {/* Main testimonial card */}
                    <div className="relative bg-background rounded-3xl p-8 lg:p-12 shadow-xl border border-border">
                        {/* Quote icon */}
                        <div className="absolute -top-6 left-8 w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center shadow-lg">
                            <Quote className="w-6 h-6 text-white" />
                        </div>

                        {/* Content */}
                        <div className="pt-4">
                            {/* Stars */}
                            <div className="flex gap-1 mb-6">
                                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                                ))}
                            </div>

                            {/* Testimonial text */}
                            <blockquote className="text-lg lg:text-xl text-foreground leading-relaxed mb-8 italic">
                                "{testimonials[activeIndex].content}"
                            </blockquote>

                            {/* Author info */}
                            <div className="flex items-center justify-between">
                                <div>
                                    <h4 className="text-lg font-bold text-primary">
                                        {testimonials[activeIndex].name}
                                    </h4>
                                    <p className="text-muted-foreground">
                                        {testimonials[activeIndex].position}, {testimonials[activeIndex].company}
                                    </p>
                                </div>

                                {/* Navigation */}
                                <div className="flex gap-3">
                                    <button
                                        onClick={prevTestimonial}
                                        className="w-10 h-10 rounded-full bg-card border border-border hover:bg-accent hover:text-white hover:border-accent transition-colors flex items-center justify-center"
                                    >
                                        <ChevronLeft className="w-5 h-5" />
                                    </button>
                                    <button
                                        onClick={nextTestimonial}
                                        className="w-10 h-10 rounded-full bg-card border border-border hover:bg-accent hover:text-white hover:border-accent transition-colors flex items-center justify-center"
                                    >
                                        <ChevronRight className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Dots indicator */}
                    <div className="flex justify-center gap-2 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setIsAutoPlaying(false);
                                    setActiveIndex(index);
                                }}
                                className={`w-3 h-3 rounded-full transition-all ${index === activeIndex
                                        ? 'bg-accent w-8'
                                        : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
