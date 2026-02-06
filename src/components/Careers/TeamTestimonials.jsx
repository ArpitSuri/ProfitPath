import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TeamTestimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "Marcus Chen",
            role: "Lead Growth Engineer",
            text: "At ProfitPath, the barrier between 'idea' and 'execution' is nonexistent. I’ve never worked in an environment that prioritizes technical autonomy and raw speed as much as we do here.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
        },
        {
            id: 2,
            name: "Elena Rodriguez",
            role: "Senior Data Architect",
            text: "The sheer scale of data we handle is incredible. We aren't just looking at numbers; we are architecting the decision-making engines for some of the world's most ambitious brands.",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
        },
        {
            id: 3,
            name: "Jordan Smith",
            role: "Product Strategist",
            text: "ProfitPath is a lab for high-performance growth. The collaborative energy is infectious, and the focus on sustainable results over vanity metrics is what truly sets us apart.",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    return (
        <section className="w-full min-h-screen  text-white  px-6 md:px-12 flex flex-col items-center justify-center">
            <div className="w-full max-w-7xl">

                {/* Header */}
                <div className="mb-10">
                    <span className="px-4 py-1.5 rounded-full  bg-white/5 text-white/70 text-[14px] font-black  tracking-wider">
                        Voices from Within
                    </span>
                </div>

                {/* Carousel Content */}
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 min-h-[500px]">

                    {/* LEFT: SPEAKER IMAGE */}
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
                        <div className="relative w-full max-w-md aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl">
                            <img
                                src={testimonials[currentIndex].image}
                                alt={testimonials[currentIndex].name}
                                className="w-full h-full object-cover grayscale brightness-75 transition-all duration-700 hover:grayscale-0 hover:brightness-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        </div>
                    </div>

                    {/* RIGHT: TEXT & SPEAKER DATA */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                        <Quote size={48} className="text-zinc-800 mb-8" />

                        <div className="space-y-8 animate-fadeIn">
                            <p className="text-2xl md:text-4xl font-light leading-relaxed  text-zinc-300">
                                "{testimonials[currentIndex].text}"
                            </p>

                            <div>
                                <h4 className="text-2xl font-black  tracking-wider">
                                    {testimonials[currentIndex].name}
                                </h4>
                                <p className="text-zinc-600 font-bold  tracking-wider text-xs mt-1">
                                    {testimonials[currentIndex].role}
                                </p>
                            </div>
                        </div>

                        {/* NAV BUTTONS */}
                        <div className="flex gap-4 mt-12">
                            <button
                                onClick={prev}
                                className="p-4 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all active:scale-95"
                            >
                                <ChevronLeft size={20} />
                            </button>
                            <button
                                onClick={next}
                                className="p-4 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all active:scale-95"
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamTestimonials;