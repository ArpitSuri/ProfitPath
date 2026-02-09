import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ChevronDown } from 'lucide-react';

const industries = [
    {
        id: 1,
        name: "Tech",
        // Replace these paths with your actual repo image paths
        initialIcons: ["/Industries/1.svg", "/Industries/2.svg", "/Industries/3.svg", "/Industries/4.svg"],
        expandedIcons: ["/Industries/5.svg", "/Industries/6.svg", "/Industries/7.svg", "/Industries/8.svg"],
        description: "Our database is full of decision makers in the Tech industry.Here are a few of the Tech giants we’ve delivered to our clients…"
    },
    {
        id: 2,
        name: "Retail",
        initialIcons: ["/Industries/9.svg", "/Industries/10.svg", "/Industries/11.svg", "/Industries/12.svg"],
        expandedIcons: ["/Industries/13.svg", "/Industries/14.svg", "/Industries/15.svg", "/Industries/16.svg"],
        description: "Profit Path’s database is packed with contacts for your B2B to speak to.We schedule meetings for you with decision makers from companies like…"
    },
    {
        id: 3,
        name: "Software & IT",
        initialIcons: ["/Industries/17.svg", "/Industries/18.svg", "/Industries/19.svg", "/Industries/20.svg"],
        expandedIcons: ["/Industries/21.svg", "/Industries/22.svg", "/Industries/23.svg", "/Industries/24.svg"],
        description: "SaaS, industry software, web or app devs, IT security, consultancies – you name them, we know them.Our database is full of Software & IT prospects for you to target, such as…"
    },
    {
        id: 4,
        name: "Manufacturing",
        initialIcons: ["/Industries/25.svg", "/Industries/26.svg", "/Industries/27.svg", "/Industries/28.svg"],
        expandedIcons: ["/Industries/29.svg", "/Industries/30.svg", "/Industries/31.svg", "/Industries/32.svg"],
        description: "We have a database full of decision-makers in the Manufacturing industry for you to tap into through our highly-targeted outbound campaigns.Let us connect you with big names like…"
    },
    {
        id: 5,
        name: "& many more industries!",
        initialIcons: ["/Industries/33.svg", "/Industries/34.svg", "/Industries/35.svg", "/Industries/36.svg"],
        expandedIcons: ["/Industries/37.svg", "/Industries/38.svg", "/Industries/39.svg", "/Industries/40.svg"],
    },
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
                            className="w-30 h-30 object-contain filter grayscale brightness-70 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500"
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

                    <div className="flex-col items-center gap-6 p-6">
                        <div className="flex gap-4">
                            {industry.expandedIcons.map((src, idx) => (
                                <img
                                    key={idx}
                                    src={src}
                                    alt="capability icon"
                                    className="w-14 h-14 lg:w-24 lg:h-24 object-contain hover:scale-110 transition-transform cursor-default"
                                />
                            ))}
                        </div>
                        <div className="flex md:hidden gap-4">
                            {industry.initialIcons.map((src, idx) => (
                                <img
                                    key={idx}
                                    src={src}
                                    alt="capability icon"
                                    className="w-20 h-20 lg:w-24 lg:h-24 object-contain hover:scale-110 transition-transform cursor-default"
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
                        Industries 
                    </span>
                </div>

                {/* List Header */}
                <div className="mb-8 flex justify-between items-end border-b border-white/10 pb-4">
                    <h2 className="text-white text-3xl font-bold tracking-wider"> We work within.</h2>
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