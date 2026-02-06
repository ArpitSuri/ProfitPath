import React from 'react';

const WorkingAtProfitPath = () => {
    return (
        <section className="w-full min-h-screen text-white py-24 px-6 md:px-12 flex flex-col items-center">
            <div className="w-full max-w-7xl">

                {/* 1. TOP LEFT HEADING */}
                <div className="mb-20">
                    
                    <h2 className="text-5xl md:text-8xl font-black  tracking-wider leading-[0.85] max-w-4xl">
                        Working at <br />
                        <span className="text-zinc-800">ProfitPath.</span>
                    </h2>
                </div>

                {/* 2. TEXTURAL DATA COLUMNS */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 border-t border-white/10 pt-16">

                    {/* LEFT COLUMN DATA */}
                    <div className="space-y-12">
                        <div className="group">
                            <h3 className="text-zinc-600 text-xs font-black  tracking-wider mb-4 group-hover:text-white transition-colors">
                                Environment & Ethos
                            </h3>
                            <p className="text-zinc-400 text-xl font-light leading-relaxed">
                                ProfitPath isn't a traditional 9-to-5. We operate as a high-performance lab where experimentation is encouraged and speed is our primary currency. Our workspace—both digital and physical—is designed to eliminate friction and spark collaborative breakthroughs.
                            </p>
                        </div>

                        <div className="group">
                            <h3 className="text-zinc-600 text-xs font-black  tracking-wider mb-4 group-hover:text-white transition-colors">
                                The Compensation
                            </h3>
                            <p className="text-zinc-400 text-xl font-light leading-relaxed">
                                We believe in rewarding the outliers. Beyond competitive base salaries, we offer performance-driven profit sharing, comprehensive health coverage, and a remote-first flexibility that respects your personal flow and deep-work cycles.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT COLUMN DATA */}
                    <div className="space-y-12">
                        <div className="group">
                            <h3 className="text-zinc-600 text-xs font-black  tracking-wider mb-4 group-hover:text-white transition-colors">
                                Growth Trajectory
                            </h3>
                            <p className="text-zinc-400 text-xl font-light leading-relaxed">
                                There is no ceiling here. Our "Path to Partner" program allows every team member to develop a specialized track, providing the resources, mentorship, and capital needed to lead new internal ventures and scale existing infrastructure.
                            </p>
                        </div>

                        <div className="group">
                            <h3 className="text-zinc-600 text-xs font-black  tracking-wider mb-4 group-hover:text-white transition-colors">
                                The Mission
                            </h3>
                            <p className="text-zinc-400 text-xl font-light leading-relaxed">
                                We are building more than just growth funnels; we are architecting the future of digital commerce. At ProfitPath, you are part of a mission to democratize elite scaling strategies and empower the next generation of global market leaders.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WorkingAtProfitPath;