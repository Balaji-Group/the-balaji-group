import { MapPin } from 'lucide-react';

const NetworkCoverage = () => {
    const states = [
        { name: 'Rajasthan', cities: ['Jaipur', 'Jodhpur', 'Udaipur'], primary: true },
        { name: 'Uttar Pradesh', cities: ['Western UP', 'NCR Region'], primary: false },
        { name: 'Bihar', cities: ['Patna'], primary: true },
        { name: 'Himachal Pradesh', cities: ['Various Cities'], primary: false },
        { name: 'NCR', cities: ['Delhi', 'Gurgaon', 'Noida'], primary: false },
    ];

    return (
        <section className="py-16 bg-card">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full mb-6">
                        <span className="text-accent text-sm font-semibold tracking-wide">
                            Pan-India Presence
                        </span>
                    </div>
                    <h3 className="text-3xl font-heading font-bold text-primary mb-4">
                        Our Network Coverage
                    </h3>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Serving businesses across 5 states with reliable supply chain and logistics
                    </p>
                </div>

                <div className="max-w-5xl mx-auto">
                    {/* Map representation */}
                    <div className="relative bg-background rounded-3xl p-8 border border-border shadow-lg">
                        {/* Simple visual representation */}
                        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
                            {states.map((state, index) => (
                                <div
                                    key={index}
                                    className={`group text-center p-6 rounded-2xl transition-all duration-300 hover:shadow-lg ${state.primary
                                            ? 'bg-gradient-to-br from-accent/10 to-primary/10 border-2 border-accent/30'
                                            : 'bg-card border border-border hover:border-accent/30'
                                        }`}
                                >
                                    {/* Pin icon */}
                                    <div
                                        className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${state.primary
                                                ? 'bg-gradient-to-br from-accent to-primary text-white'
                                                : 'bg-muted text-primary'
                                            } group-hover:scale-110 transition-transform`}
                                    >
                                        <MapPin className="w-6 h-6" />
                                    </div>

                                    {/* State name */}
                                    <h4 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                                        {state.name}
                                    </h4>

                                    {/* Cities */}
                                    <div className="space-y-1">
                                        {state.cities.map((city, cityIndex) => (
                                            <p key={cityIndex} className="text-xs text-muted-foreground">
                                                {city}
                                            </p>
                                        ))}
                                    </div>

                                    {/* Primary badge */}
                                    {state.primary && (
                                        <div className="mt-3 inline-flex items-center px-2 py-1 bg-accent/20 rounded-full">
                                            <span className="text-xs font-semibold text-accent">
                                                Manufacturing Hub
                                            </span>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Legend */}
                        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 rounded-full bg-gradient-to-br from-accent to-primary" />
                                <span className="text-muted-foreground">Manufacturing & Distribution</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 rounded-full bg-muted border border-border" />
                                <span className="text-muted-foreground">Distribution Network</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NetworkCoverage;
