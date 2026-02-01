import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const LargeBusinessHero = () => {
    const containerRef = useRef(null);
    const contentRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Text elements entrance
            gsap.from(".animate-text", {
                x: -30,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power4.out",
                delay: 0.2
            });

            // Image entrance with reveal effect
            gsap.from(imageRef.current, {
                scale: 1.1,
                opacity: 0,
                duration: 1.5,
                ease: "expo.out"
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative w-full min-h-[85vh] flex items-center bg-[#0a0a0a] overflow-hidden pt-20">
            {/* Background Glow */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative w-full max-w-[1440px] mx-auto px-6 lg:px-24 flex flex-col lg:flex-row items-center justify-between gap-16 z-10">

                {/* LEFT CONTENT */}
                <div ref={contentRef} className="w-full lg:w-[55%] flex flex-col items-start text-left">

                    {/* Badge */}
                    <div className="animate-text mb-6 px-4 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-indigo-400 text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                        </span>
                        Tailored for Small Business
                    </div>

                    {/* Heading */}
                    <h1 className="animate-text text-white text-5xl lg:text-7xl font-black tracking-tighter leading-[0.9] uppercase mb-8">
                        Big Agency <br />
                        <span className="text-zinc-800 outline-text">Results for</span> <br />
                        <span className="text-indigo-500 italic">Local Heroes.</span>
                    </h1>

                    {/* Subheading */}
                    <p className="animate-text text-zinc-400 text-lg md:text-xl font-light leading-relaxed max-w-lg mb-10 border-l border-zinc-800 pl-6">
                        Stop guessing and start growing. We provide small businesses with the high-performance prospecting systems usually reserved for the top 1%.
                    </p>

                    {/* CTA Button */}
                    <div className="animate-text">
                        <button className="group relative px-8 py-4 bg-white text-black font-black text-xs uppercase tracking-widest rounded-xl overflow-hidden transition-all hover:bg-indigo-600 hover:text-white">
                            <span className="relative z-10 flex items-center gap-3">
                                Start Your Growth Journey
                                <span className="text-xl group-hover:tranzinc-x-1 transition-transform">→</span>
                            </span>
                        </button>
                    </div>
                </div>

                {/* RIGHT CONTENT: Image */}
                <div className="w-full lg:w-[45%] flex justify-center lg:justify-end">
                    <div className="relative w-full max-w-md aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-zinc-800 bg-zinc-900 shadow-2xl">
                        {/* Decorative Corner Element */}
                        <div className="absolute top-6 right-6 z-20 w-12 h-12 border-t-2 border-r-2 border-indigo-500 rounded-tr-xl opacity-50" />

                        <img
                            ref={imageRef}
                            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1974&auto=format&fit=crop"
                            alt="Small business growth"
                            className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-1000"
                        />

                        {/* Bottom Floating Stats Tag */}
                        <div className="absolute bottom-8 left-1/2 -tranzinc-x-1/2 w-[80%] bg-zinc-950/80 backdrop-blur-md border border-white/10 p-4 rounded-2xl z-20">
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="text-zinc-500 text-[8px] font-black uppercase tracking-widest">Avg. Growth</p>
                                    <p className="text-white text-lg font-bold">+42%</p>
                                </div>
                                <div className="h-8 w-[1px] bg-zinc-800" />
                                <div>
                                    <p className="text-zinc-500 text-[8px] font-black uppercase tracking-widest">Setup Time</p>
                                    <p className="text-white text-lg font-bold">14 Days</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <style jsx>{`
                .outline-text {
                    -webkit-text-stroke: 1px #27272a;
                    color: transparent;
                }
            `}</style>
        </section>
    );
};

export default LargeBusinessHero;