import React from 'react';
import { Users, Rocket, Puzzle, BarChart3 } from 'lucide-react';

const ProcessSection = () => {
    const steps = [
        {
            icon: <Users size={32} />,
            title: "Meeting & Onboarding",
            subtitle: "We align on your core vision and integrate our team into your workflow within 24 hours.",
            details: "Alignment • Strategic Mapping • Asset Collection"
        },
        {
            icon: <Puzzle size={32} />,
            title: "Integration & Manage",
            subtitle: "Full-scale technical deployment followed by rigorous daily management of your growth engine.",
            details: "Tech Stack Setup • Lead Flow • Real-time Optimization"
        }, {
            icon: <Users size={32} />,
            title: "Meeting & Onboarding",
            subtitle: "We align on your core vision and integrate our team into your workflow within 24 hours.",
            details: "Alignment • Strategic Mapping • Asset Collection"
        },
        {
            icon: <Puzzle size={32} />,
            title: "Integration & Manage",
            subtitle: "Full-scale technical deployment followed by rigorous daily management of your growth engine.",
            details: "Tech Stack Setup • Lead Flow • Real-time Optimization"
        }
    ];

    return (
        <section className="w-full min-h-screen bg-black text-white py-24 px-6 md:px-12 flex flex-col items-center">
            <div className="w-full max-w-7xl relative">

                {/* 1. TOP LEFT BADGE */}
                <div className="lg:absolute top-0 left-0 mb-12 lg:mb-0">
                    <span className="px-4 py-1.5 rounded-full  text-white/70 text-[12px] font-black  tracking-wider">
                        The Journey
                    </span>
                </div>

                {/* 2. CENTRAL HEADING */}
                <div className="text-center mb-24">
                    <h2 className="text-5xl md:text-8xl font-black  tracking-wider leading-[0.85]">
                        Seamless <br />
                        <span className="text-zinc-800">Execution.</span>
                    </h2>
                </div>

                {/* 3. TWO CARDS IN SINGLE ROW */}
                <div className="flex flex-col lg:flex-row gap-6 items-stretch">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="flex-1 group relative p-12 md:p-16 rounded-[3rem] border border-white/5 bg-zinc-900/20 backdrop-blur-xl transition-all duration-500 hover:bg-zinc-800/40 hover:border-white/20 flex flex-col items-center text-center"
                        >
                            {/* Icon Holder */}
                            <div className="mb-10 w-20 h-20 rounded-3xl bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-600 group-hover:text-white group-hover:border-white/20 transition-all duration-500">
                                {step.icon}
                            </div>

                            {/* Heading */}
                            <h3 className="text-3xl md:text-4xl font-bold  tracking-wider mb-4 group-hover:text-white transition-colors">
                                {step.title}
                            </h3>

                            {/* Subheading */}
                            <p className="text-zinc-500 text-lg font-light leading-relaxed max-w-sm mb-12">
                                {step.subtitle}
                            </p>

                            {/* Footer Details */}
                            <div className="mt-auto pt-8 border-t border-white/5 w-full">
                                <span className="text-[10px] font-black  tracking-wider text-zinc-700 group-hover:text-zinc-400 transition-colors">
                                    {step.details}
                                </span>
                            </div>

                            {/* Subtle Inner Glow */}
                            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[3rem]"></div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ProcessSection;