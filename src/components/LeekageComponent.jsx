import React from 'react';
import LeakageCalculator from './LeekageCalculator';


const LeakageComponent = () => {
    return (
        <section className="relative w-full min-h-screen flex items-center overflow-hidden py-24">
            {/* Background Accent */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-zinc-500/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="relative w-full max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between px-10 lg:px-24 gap-20 z-10">

                {/* LEFT CONTENT: Editorial Info */}
                <div className="w-full lg:w-1/2 flex flex-col items-start">

                    {/* Badge */}
                    <div className="mb-8 px-5 py-2 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-400 text-[12px] font-black  tracking-wider flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-500" />
                        Revenue Analysis
                    </div>

                    {/* Section Heading */}
                    <div className="mb-12">
                        <h2 className="text-white text-4xl lg:text-7xl font-black tracking-wider leading-[0.85] ">
                            Where are you losing revenue?
                            <span className="text-zinc-500 ">The Leaks</span>
                        </h2>
                    </div>

                    {/* Subheadings */}
                    <div className="space-y-12 max-w-md">
                        <div className="relative pl-8 border-l border-zinc-800 group hover:border-zinc-500 transition-colors duration-500">
                            <h3 className="text-white text-xl font-bold  tracking-wider mb-3">
                                Pipeline Transparency
                            </h3>
                            <p className="text-zinc-500 text-sm font-light leading-relaxed">
                                Most businesses lose 30-50% of their potential revenue in the "gap" between marketing and sales. We help you visualize exactly where your prospects are falling out.
                            </p>
                        </div>

                        <div className="relative pl-8 border-l border-zinc-800 group hover:border-zinc-500 transition-colors duration-500">
                            <h3 className="text-white text-xl font-bold  tracking-wider mb-3">
                                Friction Point Audit
                            </h3>
                            <p className="text-zinc-500 text-sm font-light leading-relaxed">
                                From response times to no-show rates, our calculator pinpoint the friction points that are quietly killing your ROI.
                            </p>
                        </div>
                    </div>
                </div>

                {/* RIGHT CONTENT: The Leakage Calculator */}
                <div className="w-full lg:w-[50%] flex justify-center lg:justify-end">
                    <div className="w-full max-w-xl relative group">
                        {/* Subtle decorative "ring" glow */}
                        <div className="absolute -inset-1 bg-gradient-to-tr from-zinc-500/20 to-transparent rounded-[2.6rem] blur-sm opacity-50 group-hover:opacity-100 transition-opacity duration-700" />

                        <div className="relative">
                            <LeakageCalculator />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default LeakageComponent;