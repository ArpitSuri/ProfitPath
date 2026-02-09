import React from 'react';

const WhyWorkWithUs = () => {
    const paragraphs = [
        {
            title: "Autonomy & Ownership",
            text: "We don't micromanage. We hire experts because we trust them to lead. Here, you'll have the freedom to architect solutions and own your projects from conception to global deployment.Work on infrastructure that powers the growth of international market leaders. Your code and strategies won't just sit in a repository; they will drive real-world economic scale."
        },
    ];

    return (
        <section className="w-full min-h-screen  text-white py-24 px-6 md:px-12 flex flex-col items-center">
            <div className="w-full max-w-7xl">

                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

                    {/* LEFT SIDE: THE IMAGE */}
                    <div className="w-full lg:w-1/2">
                        {/* <div className="relative group rounded-[3rem] overflow-hidden border border-white/5 bg-zinc-900 aspect-[4/5]">
                            <img
                                src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop"
                                alt="Our Workspace Culture"
                                className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                            />
                           
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                            <div className="absolute bottom-10 left-10">
                                <span className="text-xs font-black uppercase tracking-[0.3em] text-zinc-400">Our Culture</span>
                                <h4 className="text-2xl font-bold uppercase tracking-tighter">Beyond the Screen.</h4>
                            </div>
                        </div> */}
                    </div>

                    {/* RIGHT SIDE: CONTENT */}
                    <div className="w-full lg:w-1/2 flex flex-col items-start">
                        <h2 className="text-5xl md:text-7xl font-black  tracking-wider leading-[0.9] mb-12">
                            Why build <br />
                            <span className="text-zinc-800">with us?</span>
                        </h2>

                        {/* Paragraph Blocks */}
                        <div className="space-y-10 mb-12">
                            {paragraphs.map((item, index) => (
                                <div key={index} className="group">
                                    <p className="text-zinc-500 text-base md:text-lg font-light leading-relaxed max-w-lg transition-colors group-hover:text-zinc-300">
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* CTA BUTTON */}
                        <button className="group relative px-10 py-5 bg-white text-black text-xs font-black uppercase tracking-[0.2em] overflow-hidden transition-all hover:pr-14 rounded-full cursor-pointer">
                            <span className="relative z-10">Explore All Benefits</span>
                            <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 text-3xl">
                                →
                            </span>
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyWorkWithUs;