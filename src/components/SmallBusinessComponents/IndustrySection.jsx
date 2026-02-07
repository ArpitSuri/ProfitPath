import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ChevronDown } from 'lucide-react';

const industries = [
    {
        id: 1,
        name: "E-commerce & Retail",
        // Replace these paths with your actual repo image paths
        initialIcons: ["/companies/1.png", "/companies/2.png", "/companies/3.png", "/companies/4.png"],
        expandedIcons: ["/companies/5.png", "/companies/6.png", "/companies/7.png", "/companies/8.png"],
        description: "Scale your online storefront with high-performance funnels, integrated payment systems, and data-driven customer retention strategies designed for the modern shopper."
    },
    {
        id: 2,
        name: "Fintech & Banking",
        initialIcons: ["/companies/1.png", "/companies/2.png", "/companies/3.png", "/companies/4.png"],
        expandedIcons: ["/companies/5.png", "/companies/6.png", "/companies/7.png", "/companies/8.png"],
        description: "Secure, compliant, and user-centric financial platforms. We build trust through precision engineering and world-class security protocols for digital assets."
    },
    {
        id: 3,
        name: "SaaS & Tech",
        initialIcons: ["/companies/1.png", "/companies/2.png", "/companies/3.png", "/companies/4.png"],
        expandedIcons: ["/companies/5.png", "/companies/6.png", "/companies/7.png", "/companies/8.png"],
        description: "Accelerate your software-as-a-service growth. From complex API integrations to intuitive dashboard designs that reduce churn and increase LTV."
    }
];

const IndustryItem = ({ industry }) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);
    const arrowRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            gsap.to(contentRef.current, { height: "auto", opacity: 1, duration: 0.5, ease: "power3.out" });
            gsap.to(arrowRef.current, { rotate: 180, duration: 0.3 });
        } else {
            gsap.to(contentRef.current, { height: 0, opacity: 0, duration: 0.4, ease: "power3.in" });
            gsap.to(arrowRef.current, { rotate: 0, duration: 0.3 });
        }
    }, [isOpen]);

    return (
        <div className="w-full border-b border-white/10 group">
            <div
                className="flex items-center justify-between py-8 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                {/* LEFT: Button + Name */}
                <div className="flex items-center gap-6">
                    <div
                        ref={arrowRef}
                        className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300"
                    >
                        <ChevronDown size={20} />
                    </div>
                    <h3 className="text-2xl md:text-4xl font-bold tracking-wider text-zinc-400 group-hover:text-white transition-colors duration-300">
                        {industry.name}
                    </h3>
                </div>

                {/* RIGHT: Initial Icons (Images) */}
                <div className="hidden md:flex items-center gap-4">
                    {industry.initialIcons.map((src, idx) => (
                        <img
                            key={idx}
                            src={src}
                            alt="industry icon"
                            className="w-24 h-24 object-contain filter grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500"
                        />
                    ))}
                </div>
            </div>

            {/* EXPANDABLE SECTION */}
            <div ref={contentRef} className="overflow-hidden h-0 opacity-0">
                <div className="pb-10 flex flex-col lg:flex-row gap-8 lg:items-center justify-between">
                    <p className="text-zinc-500 max-w-2xl text-lg font-light leading-relaxed">
                        {industry.description}
                    </p>

                    <div className="flex items-center gap-6 p-6">
                        <div className="flex gap-4">
                            {industry.expandedIcons.map((src, idx) => (
                                <img
                                    key={idx}
                                    src={src}
                                    alt="capability icon"
                                    className="w-24 h-24 object-contain hover:scale-110 transition-transform cursor-default"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const IndustriesSection = () => {
    return (
        <section className="w-full min-h-screen text-white py-24 px-6 flex flex-col items-center">
            <div className="w-full max-w-7xl">
                {/* Badge */}
                <div className="mb-12">
                    <span className="px-4 py-1.5 rounded-full text-white/70 text-[12px] font-black ">
                        Industries We Scale
                    </span>
                </div>

                {/* List Header */}
                <div className="mb-8 flex justify-between items-end border-b border-white/10 pb-4">
                    <h2 className="text-white text-3xl font-bold tracking-wider">Industry Segment</h2>
                    <h2 className="hidden md:block text-zinc-600 text-lg font-bold tracking-wider">Key Drivers</h2>
                </div>

                {/* Industry List */}
                <div className="flex flex-col">
                    {industries.map((ind) => (
                        <IndustryItem key={ind.id} industry={ind} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndustriesSection;