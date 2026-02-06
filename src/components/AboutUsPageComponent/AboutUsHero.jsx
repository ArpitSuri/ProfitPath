import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const AboutHero = () => {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Entrance animation
            gsap.from(textRef.current.children, {
                x: -50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "expo.out",
                delay: 0.5
            });

            gsap.from(imageRef.current, {
                scale: 1.2,
                filter: "blur(10px)",
                opacity: 0,
                duration: 1.5,
                ease: "expo.out",
                delay: 0.3
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative w-full min-h-[90vh] flex items-center overflow-hidden pt-32 pb-20">
            {/* Background Texture/Glow */}
            <div className="absolute top-0 right-0 w-150 h-150 bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative w-full max-w-360 mx-auto flex flex-col lg:flex-row items-center justify-between px-10 lg:px-24 gap-16 z-10">

                {/* LEFT CONTENT: Typography */}
                <div ref={textRef} className="w-full lg:w-1/2 flex flex-col items-start">

                    {/* Badge */}
                    <div className="mb-8 px-5 py-2 rounded-full  text-zinc-400 text-[10px] font-black uppercase tracking-[0.4em] flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 shadow-[0_0_8px_#818cf8]" />
                        About Us
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-zinc-300 text-6xl lg:text-8xl font-black tracking-wider leading-[0.85]  mb-10 ">
                        <span className='outline-text'>Meet</span>  <br />
                        <span className="text-white ">Profit Path.</span>
                    </h1>

                    {/* Subheading */}
                    <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed max-w-lg border-l-2 border-zinc-500 pl-8">
                        We're the extension to your team. 40+ outbound prospecting experts fuelled by passion and innovation with one goal — driving sales.
                    </p>
                </div>

                {/* RIGHT CONTENT: The Image */}
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                    <div className="relative w-full max-w-xl aspect-[4/5] lg:aspect-square overflow-hidden rounded-[3rem] border border-white/10 shadow-2xl">
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60 z-10" />

                        <img
                            ref={imageRef}
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                            alt="Our Team"
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out scale-110"
                        />

                        {/* Floating Tech Label */}
                        <div className="absolute bottom-10 left-10 z-20">
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-4 rounded-2xl">
                                <p className="text-white text-[10px] font-black uppercase tracking-widest opacity-60">Est. 2024</p>
                                <p className="text-white text-lg font-bold">London, UK</p>
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

export default AboutHero;