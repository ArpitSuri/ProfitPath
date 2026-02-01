import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutQuote = () => {
    const sectionRef = useRef(null);
    const quoteRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(quoteRef.current, {
                y: 50,
                opacity: 0,
                duration: 1.5,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                }
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative w-full  bg-transparent overflow-hidden ">
            {/* Massive Background Quote Icon */}
            <div className="absolute top-10 left-10 lg:left-24 text-[30rem] font-serif text-zinc-900 leading-none select-none opacity-40 pointer-events-none">
                “
            </div>

            <div className="relative max-w-[1440px] mx-auto px-10 lg:px-24 z-10">
                <div ref={quoteRef} className="max-w-4xl">
                    {/* The Icon (Visible version) */}
                    <div className=" text-zinc-500 text-8xl font-serif">
                        “
                    </div>

                    {/* Heading */}
                    <h2 className="text-zinc-500 text-4xl md:text-6xl font-black tracking-wider leading-[1.1]  mb-10">
                        <span className="text-white">“Modernising</span>.  the perception on outbound sales via an evolved approach”
                    </h2>

                    {/* Subheading */}
                    <div className="flex flex-col md:flex-row md:items-center gap-6">
                        <div className="w-12 h-[1px] bg-zinc-300 hidden md:block" />
                        <p className="text-zinc-400 text-lg md:text-xl font-light italic leading-relaxed">
                            Our mission is to turn the "black box" of digital prospecting into a transparent, predictable revenue machine for every partner we take on.
                        </p>
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

export default AboutQuote;