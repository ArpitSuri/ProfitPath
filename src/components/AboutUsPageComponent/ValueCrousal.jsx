import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const values = [
    {
        title: "Radical Transparency",
        sub1: "No hidden agendas.",
        sub2: "We share every metric, win or loss, ensuring you have a clear view of your ROI at all times.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Data Supremacy",
        sub1: "Intuition is a starting point.",
        sub2: "We let the numbers finish the conversation. Every pivot we make is backed by statistical significance.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
    },
    {
        title: "Relentless Agility",
        sub1: "Adapt or stagnate.",
        sub2: "The digital landscape shifts daily. Our processes are built to pivot within hours, not weeks.",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop"
    }
];

const ValuesCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const cardRef = useRef(null);
    const imageRef = useRef(null);

    const handleSlide = (direction) => {
        const nextIndex = direction === 'next'
            ? (currentIndex + 1) % values.length
            : (currentIndex - 1 + values.length) % values.length;

        const tl = gsap.timeline({
            onComplete: () => setCurrentIndex(nextIndex)
        });

        // Slide Out & Blur
        tl.to(cardRef.current, { opacity: 0, x: direction === 'next' ? -20 : 20, duration: 0.3, ease: "power2.in" })
            .to(cardRef.current, { x: direction === 'next' ? 20 : -20, duration: 0 })
            .to(cardRef.current, { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" });
    };

    return (
        <section className="relative w-full py-32  overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-10 lg:px-24">

                {/* 1. Badge */}
                <div className="mb-16 px-5 py-2 w-fit rounded-full  text-zinc-400 text-[15px] font-black  tracking-wider flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-500" />
                    Our Values
                </div>

                {/* 2. Carousel Card */}
                <div ref={cardRef} className="relative w-full bg-zinc-900/30 border border-zinc-800 rounded-[3rem] overflow-hidden min-h-[500px] flex flex-col lg:flex-row items-stretch transition-all duration-500 hover:border-zinc-700">

                    {/* Left Side: Content */}
                    <div className="w-full lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center">
                        <h2 className="text-white text-5xl lg:text-7xl font-black tracking-wider   mb-8 leading-none">
                            {values[currentIndex].title}
                        </h2>
                        <div className="space-y-4 max-w-md">
                            <h4 className="text-zinc-400 font-bold   tracking-wider text-sm">
                                {values[currentIndex].sub1}
                            </h4>
                            <p className="text-zinc-500 text-lg font-light leading-relaxed">
                                {values[currentIndex].sub2}
                            </p>
                        </div>
                    </div>

                    {/* Right Side: Image & Counter */}
                    <div className="w-full lg:w-1/2 relative min-h-[300px] lg:min-h-full">
                        <img
                            src={values[currentIndex].image}
                            className="absolute inset-0 w-full h-full object-cover grayscale brightness-50"
                            alt="Value visual"
                        />
                        {/* Counter overlay */}
                        <div className="absolute bottom-10 right-10 bg-black/40 backdrop-blur-md border border-white/10 px-6 py-2 rounded-full">
                            <span className="text-white font-black text-xl tracking-wider">
                                0{currentIndex + 1} <span className="text-zinc-500 text-sm mx-1">/</span> 0{values.length}
                            </span>
                        </div>
                    </div>
                </div>

                {/* 3. Controls */}
                <div className="mt-5 flex items-center gap-4">
                    <button
                        onClick={() => handleSlide('prev')}
                        className="group w-16 h-16 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-white transition-all duration-500 cursor-pointer"
                    >
                        <span className="text-white group-hover:text-black text-2xl transition-colors">←</span>
                    </button>
                    <button
                        onClick={() => handleSlide('next')}
                        className="group w-16 h-16 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-white hover:border-zinc-600 transition-all duration-500 cursor-pointer"
                    >
                        <span className="text-white text-2xl group-hover:tranzinc-x-1 transition-transform">→</span>
                    </button>
                </div>

            </div>
        </section>
    );
};

export default ValuesCarousel;