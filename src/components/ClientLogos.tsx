import { useEffect, useState } from 'react';
import { withBase } from '@/lib/utils';
import { Star } from 'lucide-react';

const ClientLogos = () => {
    const [isVisible, setIsVisible] = useState(false);

    // All 13 client logos from the Clients folder
    const clients = [
        { src: withBase('/Clients/1.png'), alt: 'Client 1' },
        { src: withBase('/Clients/2.png'), alt: 'Client 2' },
        { src: withBase('/Clients/3.png'), alt: 'Client 3' },
        { src: withBase('/Clients/4.png'), alt: 'Client 4' },
        { src: withBase('/Clients/5.png'), alt: 'Client 5' },
        { src: withBase('/Clients/6.png'), alt: 'Client 6' },
        { src: withBase('/Clients/7.png'), alt: 'Client 7' },
        { src: withBase('/Clients/8.png'), alt: 'Client 8' },
        { src: withBase('/Clients/9.png'), alt: 'Client 9' },
        { src: withBase('/Clients/10.png'), alt: 'Client 10' },
        { src: withBase('/Clients/11.png'), alt: 'Client 11' },
        { src: withBase('/Clients/12.png'), alt: 'Client 12' },
        { src: withBase('/Clients/13.png'), alt: 'Client 13' },
        { src: withBase('/Clients/14.png'), alt: 'Parle' },
        { src: withBase('/Clients/15.png'), alt: 'Baidyanath' },
        { src: withBase('/Clients/16.png'), alt: 'Allwyn' },
    ];

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className="py-24 bg-gradient-to-b from-background via-card to-background overflow-hidden relative">
            {/* Background decorations */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full mb-6 border border-accent/30">
                        <Star className="w-4 h-4 text-accent fill-accent" />
                        <span className="text-accent text-sm font-bold tracking-wide uppercase">
                            Trusted Partners
                        </span>
                        <Star className="w-4 h-4 text-accent fill-accent" />
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
                        Our Valued Clients
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Proudly serving India's leading brands across diverse industries with premium packaging solutions
                    </p>
                </div>

                {/* First row - scrolling left */}
                <div className="relative mb-8">
                    {/* Gradient masks */}
                    <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
                    <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-background via-background/80 to-transparent z-10" />

                    {/* Scrolling logos */}
                    <div className="flex overflow-hidden">
                        <div
                            className={`flex gap-10 items-center ${isVisible ? 'animate-scroll' : ''}`}
                            style={{
                                animation: 'scroll 35s linear infinite',
                            }}
                        >
                            {/* First set */}
                            {clients.map((client, index) => (
                                <div
                                    key={`first-${index}`}
                                    className="flex-shrink-0 w-44 h-32 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-5 flex items-center justify-center group border-2 border-transparent hover:border-accent/30 transform hover:scale-105"
                                >
                                    <img
                                        src={client.src}
                                        alt={client.alt}
                                        className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110"
                                    />
                                </div>
                            ))}
                            {/* Second set for seamless loop */}
                            {clients.map((client, index) => (
                                <div
                                    key={`second-${index}`}
                                    className="flex-shrink-0 w-44 h-32 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-5 flex items-center justify-center group border-2 border-transparent hover:border-accent/30 transform hover:scale-105"
                                >
                                    <img
                                        src={client.src}
                                        alt={client.alt}
                                        className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Second row - scrolling right (reverse) */}
                <div className="relative">
                    {/* Gradient masks */}
                    <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
                    <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-background via-background/80 to-transparent z-10" />

                    {/* Scrolling logos - reverse direction */}
                    <div className="flex overflow-hidden">
                        <div
                            className={`flex gap-10 items-center ${isVisible ? 'animate-scroll-reverse' : ''}`}
                            style={{
                                animation: 'scroll-reverse 35s linear infinite',
                            }}
                        >
                            {/* First set - reversed order */}
                            {[...clients].reverse().map((client, index) => (
                                <div
                                    key={`third-${index}`}
                                    className="flex-shrink-0 w-44 h-32 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-5 flex items-center justify-center group border-2 border-transparent hover:border-accent/30 transform hover:scale-105"
                                >
                                    <img
                                        src={client.src}
                                        alt={client.alt}
                                        className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110"
                                    />
                                </div>
                            ))}
                            {/* Second set for seamless loop - reversed order */}
                            {[...clients].reverse().map((client, index) => (
                                <div
                                    key={`fourth-${index}`}
                                    className="flex-shrink-0 w-44 h-32 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-5 flex items-center justify-center group border-2 border-transparent hover:border-accent/30 transform hover:scale-105"
                                >
                                    <img
                                        src={client.src}
                                        alt={client.alt}
                                        className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom stats */}
                <div className="mt-16 flex flex-wrap justify-center gap-8">
                    <div className="flex items-center gap-3 bg-card/80 backdrop-blur-sm rounded-full px-6 py-3 border border-border shadow-md">
                        <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-foreground font-semibold">1000+ Happy Clients</span>
                    </div>
                    <div className="flex items-center gap-3 bg-card/80 backdrop-blur-sm rounded-full px-6 py-3 border border-border shadow-md">
                        <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
                        <span className="text-foreground font-semibold">Serving 12+ Industries</span>
                    </div>
                    <div className="flex items-center gap-3 bg-card/80 backdrop-blur-sm rounded-full px-6 py-3 border border-border shadow-md">
                        <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                        <span className="text-foreground font-semibold">Pan-India Presence</span>
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scroll-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
        </section>
    );
};

export default ClientLogos;
