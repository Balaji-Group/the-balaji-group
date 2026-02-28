import { useState } from 'react';
import {
    Package,
    Lightbulb,
    Cog,
    Car,
    Wine,
    Shirt,
    ShoppingBag,
    Pill,
    UtensilsCrossed,
    Home,
    
    Gift,
    ChevronLeft,
    ChevronRight
} from 'lucide-react';

interface Industry {
    icon: React.ReactNode;
    name: string;
    description: string;
    color: string;
}

const IndustriesCarousel = () => {
    const [startIndex, setStartIndex] = useState(0);

    const industries: Industry[] = [
        {
            icon: <Package className="w-8 h-8" />,
            name: 'FMCG',
            description: 'Oil, Mineral Water, Snacks & Consumer Goods',
            color: 'from-orange-500 to-red-500',
        },
        {
            icon: <Lightbulb className="w-8 h-8" />,
            name: 'Electronics',
            description: 'Consumer Lighting & Electronic Products',
            color: 'from-blue-500 to-cyan-500',
        },
        {
            icon: <Cog className="w-8 h-8" />,
            name: 'Engineering',
            description: 'Industrial & Engineering Goods',
            color: 'from-gray-500 to-slate-600',
        },
        {
            icon: <Car className="w-8 h-8" />,
            name: 'Automotive',
            description: 'Auto Parts & Accessories',
            color: 'from-red-500 to-rose-600',
        },
        {
            icon: <Wine className="w-8 h-8" />,
            name: 'Liquor',
            description: 'Premium Beverage Packaging',
            color: 'from-purple-500 to-violet-600',
        },
        {
            icon: <Gift className="w-8 h-8" />,
            name: 'Handicraft',
            description: 'Artisan & Craft Products',
            color: 'from-amber-500 to-yellow-500',
        },
        {
            icon: <Shirt className="w-8 h-8" />,
            name: 'Garments',
            description: 'Fashion & Apparel Industry',
            color: 'from-pink-500 to-rose-500',
        },
        {
            icon: <ShoppingBag className="w-8 h-8" />,
            name: 'Footwear',
            description: 'Shoes & Footwear Products',
            color: 'from-emerald-500 to-green-600',
        },
        {
            icon: <ShoppingBag className="w-8 h-8" />,
            name: 'E-commerce',
            description: 'Online Retail Packaging',
            color: 'from-violet-500 to-purple-600',
        },
        {
            icon: <Pill className="w-8 h-8" />,
            name: 'Pharmaceutical',
            description: 'Healthcare & Medical Products',
            color: 'from-teal-500 to-cyan-600',
        },
        {
            icon: <UtensilsCrossed className="w-8 h-8" />,
            name: 'Food & Beverage',
            description: 'Food Processing & Packaging',
            color: 'from-green-500 to-emerald-600',
        },
        {
            icon: <Home className="w-8 h-8" />,
            name: 'Home Appliances',
            description: 'Consumer Electronics & White Goods',
            color: 'from-indigo-500 to-blue-600',
        },
    ];

    const itemsToShow = 4;
    const maxIndex = industries.length - itemsToShow;

    const next = () => {
        setStartIndex((prev) => Math.min(prev + 1, maxIndex));
    };

    const prev = () => {
        setStartIndex((prev) => Math.max(prev - 1, 0));
    };

    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full mb-6">
                        <span className="text-accent text-sm font-semibold tracking-wide">
                            Diverse Expertise
                        </span>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-4">
                        Industries We Serve
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Tailored packaging solutions for every sector
                    </p>
                </div>

                {/* Carousel container */}
                <div className="relative max-w-6xl mx-auto">
                    {/* Navigation buttons */}
                    <button
                        onClick={prev}
                        disabled={startIndex === 0}
                        className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 w-12 h-12 rounded-full bg-card border border-border shadow-lg flex items-center justify-center transition-all ${startIndex === 0
                                ? 'opacity-50 cursor-not-allowed'
                                : 'hover:bg-accent hover:text-white hover:border-accent'
                            }`}
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <button
                        onClick={next}
                        disabled={startIndex >= maxIndex}
                        className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 w-12 h-12 rounded-full bg-card border border-border shadow-lg flex items-center justify-center transition-all ${startIndex >= maxIndex
                                ? 'opacity-50 cursor-not-allowed'
                                : 'hover:bg-accent hover:text-white hover:border-accent'
                            }`}
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Cards container */}
                    <div className="overflow-hidden">
                        <div
                            className="flex gap-6 transition-transform duration-500 ease-out"
                            style={{
                                transform: `translateX(-${startIndex * (100 / itemsToShow + 2)}%)`,
                            }}
                        >
                            {industries.map((industry, index) => (
                                <div
                                    key={index}
                                    className="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
                                >
                                    <div className="group bg-card rounded-2xl p-6 border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 h-full">
                                        {/* Icon */}
                                        <div
                                            className={`w-16 h-16 bg-gradient-to-br ${industry.color} rounded-2xl flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform shadow-lg`}
                                        >
                                            {industry.icon}
                                        </div>

                                        {/* Content */}
                                        <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                                            {industry.name}
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            {industry.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Progress dots */}
                    <div className="flex justify-center gap-2 mt-8">
                        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setStartIndex(index)}
                                className={`w-2 h-2 rounded-full transition-all ${index === startIndex
                                        ? 'bg-accent w-6'
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

export default IndustriesCarousel;
