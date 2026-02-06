import React from 'react';
import { Info } from 'lucide-react';

const ExpertCard = ({ title, icon, gridClass, infoText }) => {
    return (
        <div
            className={`${gridClass} relative group overflow-hidden rounded-[2rem] border border-white/5 bg-zinc-900/40 backdrop-blur-sm p-8 flex flex-col justify-between transition-all duration-500 hover:bg-zinc-800/60 hover:border-white/20`}
        >
            {/* TOP ROW */}
            <div className="flex justify-between items-start relative z-10">
                <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-500 group-hover:bg-white group-hover:text-black transition-all duration-300">
                    <Info size={14} />
                </div>

                <div className="text-4xl filter grayscale group-hover:grayscale-0 transition-all duration-500 opacity-20 group-hover:opacity-100">
                    {icon}
                </div>
            </div>

            {/* HOVER CONTENT (The Text rendered on hover) */}
            <div className="absolute inset-x-8 top-20 opacity-0 group-hover:opacity-100 transform tranzinc-y-2 group-hover:tranzinc-y-0 transition-all duration-500 pointer-events-none">
                <p className="text-zinc-400 text-sm md:text-base font-light leading-relaxed">
                    {infoText || "Our specialists ensure every aspect of your growth engine is optimized for maximum conversion."}
                </p>
            </div>

            {/* BOTTOM ROW (Title) */}
            <h3 className="text-xl md:text-2xl font-bold text-zinc-400 group-hover:text-white transition-colors  tracking-wider relative z-10">
                {title}
            </h3>

            {/* Background radial glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-white/[0.04] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
    );
};

const GrowthExperts = () => {
    return (
        <section className="w-full min-h-screen  text-white py-24 px-6 flex flex-col items-center">
            <div className="w-full max-w-7xl">

                {/* Header Section */}
                <div className="mb-16">
                    <span className="text-[12px] font-black  tracking-wider text-zinc-600 mb-4 block">
                        Your Growth Experts
                    </span>
                    <h2 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-wider ">
                        The Elite <br />
                        <span className="text-zinc-700">Infrastructure.</span>
                    </h2>
                </div>

                {/* 3x3 Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-5 h-auto md:min-h-[900px]">

                    <ExpertCard
                        title="Prospecting Strategist"
                        icon="🎯"
                        infoText="Specializes in cold outreach architecture and high-level funnel mapping."
                        gridClass="md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-2"
                    />

                    <ExpertCard
                        title="Data Analyst"
                        icon="📊"
                        infoText="Deciphers market trends and campaign performance to guide real-time pivots."
                        gridClass="md:col-start-3 md:col-end-4 md:row-start-1 md:row-end-3"
                    />

                    <ExpertCard
                        title="Tech Lead"
                        icon="⚙️"
                        infoText="Handles complex API integrations and ensures 99.9% uptime for growth tools."
                        gridClass="md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-3"
                    />

                    <ExpertCard
                        title="Account Manager"
                        icon="👤"
                        infoText="Your dedicated point of contact ensuring strategy aligns with business goals."
                        gridClass="md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3"
                    />

                    <ExpertCard
                        title="Compliance Officer"
                        icon="🛡️"
                        infoText="Maintains data privacy standards and ensures all outreach follows global laws."
                        gridClass="md:col-start-1 md:col-end-2 md:row-start-3 md:row-end-4"
                    />

                    <ExpertCard
                        title="Client Success Manager"
                        icon="🚀"
                        infoText="Focused on post-launch scaling and maximizing long-term client ROI."
                        gridClass="md:col-start-2 md:col-end-4 md:row-start-3 md:row-end-4"
                    />

                </div>
            </div>
        </section>
    );
};

export default GrowthExperts;