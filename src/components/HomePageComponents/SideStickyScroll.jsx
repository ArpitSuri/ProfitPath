import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SideStickyScroll = () => {
    const containerRef = useRef(null);
    const rightSideRef = useRef(null);

    useLayoutEffect(() => {
        // This pins the right side container for the duration of the left side's scroll
        ScrollTrigger.create({
            trigger: containerRef.current,
            start: "top top",
            end: "bottom bottom",
            pin: rightSideRef.current,
            pinSpacing: false, // Prevents a gap from forming at the bottom
        });

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    const features = [
        { title: "Precision Design", desc: "Every pixel is placed with intent, ensuring a flawless user experience across all devices.", color: "bg-blue-600" },
        { title: "Fluid Motion", desc: "We use high-performance GSAP animations to bring your brand to life with buttery smooth interactions.", color: "bg-purple-600" },
        { title: "Advanced Tech", desc: "Built with React and Tailwind, our architectures are designed for speed and global scale.", color: "bg-emerald-600" },
    ];

    return (
        <div ref={containerRef} className="relative flex flex-col lg:flex-row bg-black min-h-screen">

            {/* LEFT SIDE: Scrolling Content */}
            <div className="w-full lg:w-1/2 px-10 md:px-20 py-20">
                {features.map((item, i) => (
                    <div key={i} className="min-h-[80vh] flex flex-col justify-center mb-20">
                        <span className="text-indigo-500 font-mono text-xl mb-4">0{i + 1}.</span>
                        <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                            {item.title}
                        </h2>
                        <p className="text-xl text-zinc-400 max-w-md leading-relaxed">
                            {item.desc}
                        </p>
                        <div className="mt-10 h-1 w-20 bg-indigo-500 rounded-full"></div>
                    </div>
                ))}
            </div>

            {/* RIGHT SIDE: Sticky Visual */}
            <div ref={rightSideRef} className="hidden lg:flex w-1/2 h-screen items-center justify-center p-12">
                <div className="w-full h-full rounded-[3rem] bg-zinc-900 overflow-hidden relative border border-white/10 shadow-2xl flex items-center justify-center">

                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-transparent blur-3xl"></div>

                    {/* Placeholder for Dynamic Content */}
                    <div className="relative text-center">
                        <div className="text-9xl mb-4 opacity-20 grayscale">✨</div>
                        <p className="text-white/30 uppercase tracking-[1em] text-sm">Visual Preview</p>
                    </div>

                    {/* The Actual Content (In a real app, you'd swap these based on scroll position) */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        {/* You could add a GSAP animation here to crossfade images based on scroll */}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SideStickyScroll;