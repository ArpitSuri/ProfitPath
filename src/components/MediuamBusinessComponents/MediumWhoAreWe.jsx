import React from 'react';

const WhoAreWe = () => {
    const contentBlocks = [
        {
            title: "The Vision",
            text: "We bridge the gap between complex data and human-centric experiences. Our goal is to transform how brands interact with their audiences by building digital ecosystems that are as intelligent as they are intuitive."
        },
        {
            title: "The Strategy",
            text: "Growth is not a happy accident; it is an engineered outcome. We deploy hyper-targeted outreach and precision-mapped funnels to ensure your message reaches the right person at the exact moment they need it."
        },
    ];

    return (
        <section className="w-full min-h-screen bg-black text-white py-12 px-6 md:px-12 flex flex-col items-center">
            <div className="w-full max-w-7xl">

                {/* 1. TOP LEFT BADGE */}
                <div className="mb-20">
                    <span className="px-4 py-1.5 rounded-full text-white/70 text-[12px] font-black  tracking-wider">
                        Our Identity
                    </span>
                </div>

                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

                    {/* 2. LEFT SIDE: IMAGE (Minimal) */}
                    <div className="w-full lg:w-1/2">
                        <div className="rounded-[2.5rem] overflow-hidden border border-white/5 bg-zinc-900 aspect-video lg:aspect-square">
                            <img
                                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
                                alt="Architecture"
                                className="w-full h-full object-cover grayscale opacity-50 hover:opacity-80 transition-opacity duration-700"
                            />
                        </div>
                    </div>

                    {/* 3. RIGHT SIDE: HEADING & 4 PARAGRAPHS */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-12">

                        {/* Main Heading */}
                        <h2 className="text-5xl md:text-8xl font-black  tracking-wider leading-[0.85]">
                            Architecting <br />
                            <span className="text-zinc-800">The Future.</span>
                        </h2>

                        {/* 4 Content Paragraphs */}
                        <div className="space-y-12">
                            {contentBlocks.map((block, index) => (
                                <div key={index} className="group border-l border-zinc-800 pl-6 hover:border-white transition-colors">
                                    <p className="text-zinc-400 text-lg font-light leading-relaxed max-w-lg">
                                        {block.text}
                                    </p>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoAreWe;