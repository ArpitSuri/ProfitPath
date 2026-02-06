import React from 'react';

const HowWeWork = () => {
    const processSteps = [
        {
            title: "Discovery & Audit",
            text: "We begin by deconstructing your current ecosystem. Our team identifies leakages in your conversion funnel and uncovers untapped market opportunities through a rigorous 48-hour data audit."
        },
        {
            title: "Infrastructure Build",
            text: "We don't just suggest tools; we build the pipes. From custom API integrations to high-performance landing pages, we engineer the technical foundation required for rapid, frictionless scaling."
        },
        {
            title: "Deployment & Growth",
            text: "Once the foundation is set, we ignite the engine. Our growth experts launch hyper-targeted outreach campaigns, utilizing machine learning to optimize messaging and targeting in real-time."
        },
        {
            title: "Optimization & Exit",
            text: "We continuously refine. Every interaction is measured, every lead is analyzed. Our goal is to build a self-sustaining growth machine that eventually functions independently of our daily intervention."
        }
    ];

    return (
        <section className="w-full min-h-screen  text-white py-12 px-6 md:px-12 flex flex-col items-center">
            <div className="w-full max-w-7xl">

                {/* 1. TOP LEFT BADGE */}
                <div className="mb-20">
                    <span className="px-4 py-1.5 rounded-full  text-white/70 text-[12px] font-black  tracking-wider">
                        Our Process
                    </span>
                </div>

                <div className="flex flex-col-reverse lg:flex-row gap-16 lg:gap-24 items-start">

                    {/* 2. LEFT SIDE: HEADING & 4 PARAGRAPHS */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-12">

                        {/* Main Heading */}
                        <h2 className="text-5xl md:text-8xl font-black  tracking-wider leading-[0.85]">
                            Engineered <br />
                            <span className="text-zinc-800">Precision.</span>
                        </h2>

                        {/* 4 Content Paragraphs */}
                        <div className="space-y-12">
                            {processSteps.map((step, index) => (
                                <div key={index} className="group border-l border-zinc-800 pl-6 hover:border-white transition-colors">
                                    <h3 className="text-zinc-600 text-xs font-black  tracking-wider mb-3 group-hover:text-zinc-300 transition-colors">
                                        Step {index + 1} — {step.title}
                                    </h3>
                                    <p className="text-zinc-400 text-lg font-light leading-relaxed max-w-lg">
                                        {step.text}
                                    </p>
                                </div>
                            ))}
                        </div>

                    </div>

                    {/* 3. RIGHT SIDE: IMAGE */}
                    <div className="w-full lg:w-1/2">
                        <div className="rounded-[2.5rem] overflow-hidden border border-white/5 bg-zinc-900 aspect-video lg:aspect-square">
                            <img
                                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
                                alt="Digital Engineering"
                                className="w-full h-full object-cover grayscale opacity-50 hover:opacity-80 transition-opacity duration-700"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HowWeWork;