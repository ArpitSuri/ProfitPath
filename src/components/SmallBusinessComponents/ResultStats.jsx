import React from 'react';

const ResultsStats = () => {
    const stats = [
        {
            value: "$100M+",
            label: " Revenue Generated",
            color: "border-cyan-400",
            glow: "shadow-[0_0_20px_rgba(34,211,238,0.4)]",
        },
        {
            value: "10000+",
            label: "Meetings Scheduled",
            color: "border-indigo-500",
            glow: "shadow-[0_0_20px_rgba(99,102,241,0.4)]",
        },
        {
            value: "86%",
            label: "Client Retention Rate",
            color: "border-purple-500",
            glow: "shadow-[0_0_20px_rgba(168,85,247,0.4)]",
        },
    ];

    return (
        <section className=" py-24 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Title Section */}
                <span className="text-[12px] font-black uppercase tracking-[0.4em] text-zinc-600 mb-4 block">
                    Deliveribles
                </span>

                {/* Stats Circle Grid */}
                <div className="flex flex-wrap justify-center lg:justify-between gap-2 mt-4">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div
                                className={`w-64 h-64 md:w-64 md:h-64 rounded-full border-2 ${stat.color} ${stat.glow} 
                flex flex-col items-center justify-center text-center p-6
                transition-transform duration-500 hover:scale-105 bg-black`}
                            >
                                <span className="text-white text-4xl md:text-5xl font-bold mb-2">
                                    {stat.value}
                                </span>
                                <span className="text-zinc-400 text-sm md:text-base uppercase tracking-widest max-w-[150px]">
                                    {stat.label}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ResultsStats;