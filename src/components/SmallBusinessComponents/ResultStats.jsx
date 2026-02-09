import React from 'react';

const ResultsStats = () => {
    const stats = [
        {
            value: "$100M+",
            label: " Revenue Generated",
            color: "#fff",
            glow: "#fff",
        },
        {
            value: "10000+",
            label: "Meetings Scheduled",
            color: "#fff",
            glow: "#fff",
        },
        {
            value: "86%",
            label: "Client Retention Rate",
            color: "#fff",
            glow: "#fff",
        },
    ];

    return (
        <section className=" py-24 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Title Section */}
                <h2 className="text-white text-5xl md:text-7xl font-semibold mb-20 tracking-tight">
                    Our Results<span className="text-zinc-500">.</span>
                </h2>

                {/* Stats Circle Grid */}
                <div className="flex flex-wrap justify-center lg:justify-around gap-6 lg:gap-1">
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