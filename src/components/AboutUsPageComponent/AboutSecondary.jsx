import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutSecondary = () => {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Parallax effect on the image
            gsap.fromTo(imageRef.current,
                { y: 50 },
                {
                    y: -50,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                }
            );

            // Staggered text entrance
            gsap.from(textRef.current.children, {
                y: 30,
                opacity: 0,
                duration: 1,
                stagger: 0.3,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: textRef.current,
                    start: "top 80%",
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative w-full py-24  overflow-hidden">
            <div className="max-w-360 mx-auto px-10 lg:px-24 flex flex-col lg:flex-row items-center justify-between gap-20">

                {/* LEFT CONTENT: Image with subtle border accent */}
                <div className="w-full lg:w-1/2 relative order-2 lg:order-1">
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-500/10 blur-[80px] rounded-full" />

                    <div className="relative rounded-[2.5rem] overflow-hidden border border-zinc-800 shadow-2xl aspect-[4/5] lg:aspect-[1.2/1]">
                        <img
                            ref={imageRef}
                            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop"
                            alt="Our workspace"
                            className="w-full h-full object-cover scale-110"
                        />
                        {/* Overlay to darken image slightly for that tech look */}
                        <div className="absolute inset-0 bg-black/20" />
                    </div>
                </div>

                {/* RIGHT CONTENT: Typography */}
                <div ref={textRef} className="w-full lg:w-1/2 flex flex-col items-start order-1 lg:order-2">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12  bg-indigo-500" />
                        {/* <span className="text-indigo-400 text-[10px] font-black uppercase tracking-[0.4em]">
                            The Methodology
                        </span> */}
                    </div>

                    <h2 className="text-white  font-black tracking-wider leading-[0.9]  mb-8">
                        <span className="text-white text-5xl lg:text-5xl  ">Profit Path is a pioneering growth specialist with offices in Manchester, New York and Skopje.
                        </span>
                       
                    </h2>

                    <div className="space-y-6 max-w-lg">
                        <p className="text-zinc-400 text-lg font-light leading-relaxed">
                            We believe that growth isn't a result of luck, but of a meticulously engineered process. Our team strips back the vanity metrics to focus on what actually moves the needle.
                        </p>

                        <p className="text-zinc-500 text-sm font-light leading-relaxed border-l border-zinc-800 pl-6">
                            By combining deep data audits with rapid conversion testing, we ensure every pound of your budget is working toward a measurable return.
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

export default AboutSecondary;