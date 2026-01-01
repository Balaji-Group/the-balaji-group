import { Calendar, MapPin, Building2 } from 'lucide-react';

interface TimelineItem {
    year: string;
    title: string;
    description: string;
    location?: string;
    highlight?: boolean;
}

const Timeline = () => {
    const milestones: TimelineItem[] = [
        {
            year: '2002',
            title: 'Balaji Packaging Industries',
            description: 'Our journey began with a manual plant in Rajasthan, equipped with skilled craftsmen and reliable machines. This marked the foundation of our packaging expertise.',
            location: 'Rajasthan, India',
            highlight: true,
        },
        {
            year: '2004',
            title: 'Balaji Paper Mart',
            description: 'Established as a trusted name in Kraft paper and Duplex Board trade. Expanded operations across Rajasthan, UP, Himachal Pradesh, Bihar, and NCR.',
            location: 'Jaipur, Rajasthan',
        },
        {
            year: '2007',
            title: 'Laxmi Packaging',
            description: 'Founded to provide quality box solutions. Today features advanced Offset Printing, Lamination, Die Punching, and cutting machines serving 100+ clients.',
            location: 'India',
        },
        {
            year: '2011',
            title: 'Shri Balaji Packaging',
            description: 'Launched a state-of-the-art fully automatic corrugated plant. Currently converts 10,000 tons of paper annually with 80 skilled employees.',
            location: 'Rajasthan, India',
            highlight: true,
        },
        {
            year: '2024',
            title: 'Ganpati Coroplast Pvt. Ltd.',
            description: 'Expanded into Bihar with a vision to serve industries nationwide. Focus on innovation, sustainability, and customizable packaging solutions.',
            location: 'Patna, Bihar',
            highlight: true,
        },
    ];

    return (
        <div className="relative max-w-4xl mx-auto py-8">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-primary to-secondary transform md:-translate-x-1/2" />

            {/* Timeline items */}
            <div className="space-y-12">
                {milestones.map((milestone, index) => (
                    <div
                        key={index}
                        className={`relative flex items-start gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                            }`}
                    >
                        {/* Year badge - Center on desktop */}
                        <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                            <div
                                className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold shadow-lg ${milestone.highlight
                                        ? 'bg-gradient-to-br from-accent to-primary'
                                        : 'bg-gradient-to-br from-primary to-secondary'
                                    }`}
                            >
                                <Calendar className="w-4 h-4 absolute -top-1 -right-1 text-accent" />
                                <span className="text-sm">{milestone.year}</span>
                            </div>
                        </div>

                        {/* Content card */}
                        <div
                            className={`ml-24 md:ml-0 md:w-[calc(50%-48px)] ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'
                                }`}
                        >
                            <div
                                className={`bg-card rounded-2xl p-6 shadow-lg border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-xl group ${milestone.highlight ? 'ring-2 ring-accent/20' : ''
                                    }`}
                            >
                                {/* Title */}
                                <h4 className="text-xl font-heading font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                                    {milestone.title}
                                </h4>

                                {/* Location */}
                                {milestone.location && (
                                    <div
                                        className={`flex items-center gap-2 text-sm text-muted-foreground mb-3 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                                            }`}
                                    >
                                        <MapPin className="w-4 h-4 text-accent" />
                                        <span>{milestone.location}</span>
                                    </div>
                                )}

                                {/* Description */}
                                <p className="text-muted-foreground leading-relaxed">
                                    {milestone.description}
                                </p>

                                {/* Highlight badge */}
                                {milestone.highlight && (
                                    <div
                                        className={`mt-4 inline-flex items-center gap-2 px-3 py-1 bg-accent/10 rounded-full ${index % 2 === 0 ? 'md:float-right' : ''
                                            }`}
                                    >
                                        <Building2 className="w-4 h-4 text-accent" />
                                        <span className="text-xs font-semibold text-accent">Key Milestone</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Spacer for alternating layout */}
                        <div className="hidden md:block md:w-[calc(50%-48px)]" />
                    </div>
                ))}
            </div>

            {/* Future indicator */}
            <div className="relative mt-12 text-center">
                <div className="absolute left-8 md:left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center border-2 border-dashed border-accent/50">
                        <span className="text-accent text-lg font-bold">...</span>
                    </div>
                </div>
                <p className="text-muted-foreground italic pt-8">
                    And the journey continues...
                </p>
            </div>
        </div>
    );
};

export default Timeline;
