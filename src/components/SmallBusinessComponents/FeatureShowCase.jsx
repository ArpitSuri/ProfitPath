import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MiddleShowcase = () => {
    const sectionRef = useRef(null);
    const leftListRef = useRef(null);
    const rightListRef = useRef(null);
    const centerRef = useRef(null);
    const headingRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Heading Animation
            gsap.from(headingRef.current, {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: headingRef.current,
                    start: "top 80%",
                }
            });

            // Central Circle Pulse
            gsap.to(".center-glow", {
                opacity: 0.4,
                scale: 1.3,
                duration: 2.5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });

            // Flex Item Staggered Animations
            const animateList = (el, xOffset) => {
                gsap.from(el.children, {
                    x: xOffset,
                    opacity: 0,
                    stagger: 0.2,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 80%",
                    }
                });
            };

            animateList(leftListRef.current, -60);
            animateList(rightListRef.current, 60);
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const leftItems = [
        { title: "High-value clients", desc: "Targeting premium segments with precision." },
        { title: "New business retainers", desc: "Securing long-term growth and stability." },
        { title: "High-value clients", desc: "Targeting premium segments with precision." },
        { title: "New business retainers", desc: "Securing long-term growth and stability." }
    ];

    const rightItems = [
        { title: "More subscribers", desc: "Expanding your digital reach and audience." },
        { title: "New users & signups", desc: "Driving conversion and platform adoption." },
        { title: "More subscribers", desc: "Expanding your digital reach and audience." },
        { title: "New users & signups", desc: "Driving conversion and platform adoption." }
    ];

    return (
        <section
            ref={sectionRef}
            className="relative w-full min-h-screen bg-black text-white py-24 px-6 overflow-hidden flex flex-col items-center"
        >
            {/* 1. Top Left Badge */}
            <div className="self-start mb-12 md:ml-6 lg:ml-12">
                <span className="px-4 py-1.5 rounded-full  text-white/70 text-[12px] font-black zinc tracking-wider">
                    Core Solutions
                </span>
            </div>

            {/* 2. Center Heading */}
            <div className="text-center mb-24">
                <h2
                    ref={headingRef}
                    className="text-5xl md:text-7xl font-black tracking-wider zinc leading-[0.9]"
                >
                    Maximize Your <br />
                    <span className="text-zinc-600">Digital Potential</span>
                </h2>
            </div>

            {/* 3. Three-Column Flex Layout */}
            <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">

                {/* Left Side List (Width 1/3) */}
                <div
                    ref={leftListRef}
                    className="w-full lg:w-1/3 flex flex-col gap-5 order-2 lg:order-1 items-center lg:items-end text-center lg:text-right"
                >
                    {leftItems.map((item, i) => (
                        <div key={i} className="group max-w-xs border border-white/20 rounded-2xl">
                            <h3 className="text-2xl font-bold mb-3 group-hover:text-zinc-400 transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-zinc-500 font-light leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Center Graphic (Width 1/3) */}
                <div
                    ref={centerRef}
                    className="w-full lg:w-1/3 flex justify-center order-1 lg:order-2"
                >
                    <div className="relative group">
                        {/* Animated Glow behind the circle */}
                        <div className="center-glow absolute inset-0 bg-white/10 rounded-full blur-[60px] w-full h-full opacity-0"></div>

                        {/* The Main Circle */}
                        <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-full border border-white/10 bg-zinc-950 flex items-center justify-center p-8 overflow-hidden">
                            {/* Internal Mesh Gradient */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800/40 via-black to-black"></div>

                            {/* Rotating Gear Icon */}
                            <div className="relative z-20 text-7xl filter grayscale group-hover:rotate-180 transition-transform duration-1000">
                                ⚙️
                            </div>

                            {/* Dashed outer orbit */}
                            <div className="absolute inset-2 rounded-full border-2 border-dashed border-white/5 animate-[spin_30s_linear_infinite]"></div>
                        </div>
                    </div>
                </div>

                {/* Right Side List (Width 1/3) */}
                <div
                    ref={rightListRef}
                    className="w-full lg:w-1/3 flex flex-col gap-12 order-3 lg:order-3 items-center lg:items-start text-center lg:text-left"
                >
                    {rightItems.map((item, i) => (
                        <div key={i} className="group max-w-xs border border-white/20 rounded-2xl">
                            <h3 className="text-2xl font-bold mb-3 group-hover:text-zinc-400 transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-zinc-500 font-light leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default MiddleShowcase;