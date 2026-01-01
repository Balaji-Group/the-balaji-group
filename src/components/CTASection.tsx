import { ArrowRight, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CTASection = () => {
    return (
        <section className="py-20 bg-gradient-to-br from-primary via-card to-background relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center px-4 py-2 bg-accent/20 rounded-full mb-8">
                        <span className="text-accent text-sm font-semibold tracking-wide">
                            Ready to Get Started?
                        </span>
                    </div>

                    {/* Heading */}
                    <h2 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight">
                        Let's Create Your Perfect
                        <span className="text-accent block mt-2">Packaging Solution</span>
                    </h2>

                    {/* Description */}
                    <p className="text-xl text-off-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                        From concept to delivery, our team is ready to help you design packaging
                        that protects your products and elevates your brand.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <Button
                            asChild
                            size="lg"
                            className="bg-accent hover:bg-accent/90 text-white font-semibold text-lg h-14 px-8 shadow-lg"
                        >
                            <Link to="/contact">
                                Get Free Quote <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </Button>
                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="border-2 border-white/30 text-white hover:bg-white/10 font-semibold text-lg h-14 px-8"
                        >
                            <Link to="/products">
                                Explore Products
                            </Link>
                        </Button>
                    </div>

                    {/* Quick Contact */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/80">
                        <a
                            href="tel:+919829069467"
                            className="flex items-center gap-3 hover:text-accent transition-colors"
                        >
                            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                                <Phone className="w-5 h-5" />
                            </div>
                            <span className="font-medium">+91 9829069467</span>
                        </a>
                        <a
                            href="mailto:sumit@thebalajigroup.in"
                            className="flex items-center gap-3 hover:text-accent transition-colors"
                        >
                            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                                <Mail className="w-5 h-5" />
                            </div>
                            <span className="font-medium">sumit@thebalajigroup.in</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
