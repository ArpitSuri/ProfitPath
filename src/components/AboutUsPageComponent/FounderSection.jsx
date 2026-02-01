import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FounderSection = () => {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Subtle image zoom on scroll
            gsap.fromTo(imageRef.current,
                { scale: 1.2 },
                {
                    scale: 1,
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative w-full py-32 overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-10 lg:px-24 flex flex-col md:flex-row items-start gap-12 lg:gap-24">

                {/* LEFT: Vertical Label */}
                <div className="hidden md:flex flex-col items-center pt-4">
                    <span className="text-zinc-800 text-6xl lg:text-8xl font-black uppercase tracking-tighter vertical-text leading-none select-none opacity-50">
                        Founders
                    </span>
                </div>

                {/* RIGHT: Image & Details */}
                <div className="flex-1 w-full">
                    {/* Image Container */}
                    <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-[2rem] overflow-hidden border border-zinc-800 mb-10 group">
                        <img
                            ref={imageRef}
                            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop"
                            alt="Founder"
                            className="w-full h-full object-cover grayscale"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

                        {/* Mobile Label */}
                        <div className="md:hidden absolute top-6 left-6 px-4 py-1 bg-indigo-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                            Founders
                        </div>
                    </div>

                    {/* Founder Info Footer */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 px-4">
                        <div>
                            <h3 className="text-white text-4xl lg:text-5xl font-black uppercase tracking-tighter leading-none mb-2">
                                Alexander <span className="text-zinc-500">Vane</span>
                            </h3>
                            <p className="text-zinc-500 text-sm font-bold uppercase tracking-[0.2em]">
                                Managing Director & Lead Strategist
                            </p>
                        </div>

                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-4 py-3 px-6 rounded-full border border-zinc-800 hover:border-indigo-500 transition-all duration-500"
                        >
                            <span className="text-zinc-400 group-hover:text-white text-xs font-black uppercase tracking-widest transition-colors">
                                View LinkedIn
                            </span>
                            <div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                                <svg className="w-4 h-4 text-white fill-current" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .vertical-text {
                    writing-mode: vertical-rl;
                    transform: rotate(180deg);
                }
            `}</style>
        </section>
    );
};

export default FounderSection;