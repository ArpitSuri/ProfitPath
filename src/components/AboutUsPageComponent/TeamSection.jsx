import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const team = [
    // LEADERSHIP
    {
        name: "Marcus Thorne",
        role: "Director of Growth",
        quote: "Growth is a science of small iterations and massive conviction.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop"
    },
    {
        name: "Elena Rossi",
        role: "Head of Strategy",
        quote: "Data tells you what is happening; strategy tells you why it matters.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
    },
    {
        name: "David Chen",
        role: "Lead Analyst",
        quote: "Precision is the only currency that matters in a saturated market.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
    },
    {
        name: "Sarah Jenkins",
        role: "Chief Operations Officer",
        quote: "Scale is the byproduct of perfectly tuned internal systems.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
    },
    {
        name: "Julian Vane",
        role: "Creative Director",
        quote: "Aesthetics capture attention, but logic retains it.",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop"
    },
    {
        name: "Amara Okoro",
        role: "Client Success Partner",
        quote: "We don't manage accounts; we architect long-term partnerships.",
        image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1974&auto=format&fit=crop"
    },

    // GROWTH & PERFORMANCE
    {
        name: "Leo Sterling",
        role: "Lead Performance Engineer",
        quote: "If a campaign isn't breaking records, it's breaking our process.",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop"
    },
    {
        name: "Isabella Moretti",
        role: "Conversion Specialist",
        quote: "Small friction points are the silent killers of high-intent traffic.",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop"
    },
    {
        name: "Thomas Wright",
        role: "B2B Prospecting Lead",
        quote: "Personalization at scale is the only way to beat the inbox noise.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
    },
    {
        name: "Chloe Dupont",
        role: "Growth Marketer",
        quote: "Marketing is math disguised as art.",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop"
    },
    {
        name: "Ryan Baxter",
        role: "Paid Media Architect",
        quote: "Budgets are finite, but the data we extract from them is infinite.",
        image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=2048&auto=format&fit=crop"
    },
    {
        name: "Maya Patel",
        role: "Retention Strategist",
        quote: "The second sale is where the real profit margin lives.",
        image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=1974&auto=format&fit=crop"
    },

    // TECH & DATA
    {
        name: "Dr. Aris Thorne",
        role: "Data Scientist",
        quote: "Patterns exist in the chaos; we simply have the tools to see them.",
        image: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=2071&auto=format&fit=crop"
    },
    {
        name: "Felix Klein",
        role: "Full Stack Developer",
        quote: "Code should be as invisible as it is functional.",
        image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop"
    },
    {
        name: "Sofia Lind",
        role: "UX Researcher",
        quote: "Users don't read; they scan for relevance. We provide it.",
        image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1974&auto=format&fit=crop"
    },
    {
        name: "Oscar Wilde",
        role: "Automation Engineer",
        quote: "Efficiency isn't about doing more; it's about doing less, better.",
        image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=1974&auto=format&fit=crop"
    },
    {
        name: "Nora Quinn",
        role: "Cybersecurity Lead",
        quote: "Growth is worthless without the security to protect it.",
        image: "https://images.unsplash.com/photo-1598550874175-4d0fe4a7c7ea?q=80&w=1974&auto=format&fit=crop"
    },
    {
        name: "Jameson Ford",
        role: "Technical Architect",
        quote: "Infrastructure must always be three steps ahead of the growth curve.",
        image: "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=1964&auto=format&fit=crop"
    }
];

const TeamSection = () => {
    return (
        <section className="relative w-full py-32 bg-[#0a0a0a] overflow-hidden border-t border-zinc-900">
            <div className="max-w-[1440px] mx-auto px-10 lg:px-24">

                {/* Header Section */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
                    <div className="flex flex-col items-start">
                        <div className="mb-6 px-5 py-2 rounded-full bg-zinc-900/50 text- zinc-400 text-[10px] font-black   tracking-[0.4em] flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg- zinc-500" />
                            Our Team
                        </div>
                        <h2 className="text-white text-6xl lg:text-7xl font-black tracking-tighter leading-none  ">
                            The <span className="text- zinc-500">Minds</span> Behind <br />
                            The <span className="text-zinc-800 outline-text">Machine</span>
                        </h2>
                    </div>
                    <p className="text-zinc-500 text-lg font-light max-w-sm border-l border-zinc-800 pl-6 lg:mb-2">
                        A collective of specialists obsessed with turning complex data into predictable revenue.
                    </p>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                    {team.map((member, index) => (
                        <TeamCard key={index} member={member} />
                    ))}
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

const TeamCard = ({ member }) => {
    const overlayRef = useRef(null);
    const quoteRef = useRef(null);

    const onHover = () => {
        gsap.to(overlayRef.current, { opacity: 1, duration: 0.4, ease: "power2.out" });
        gsap.fromTo(quoteRef.current,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, delay: 0.1, ease: "back.out(1.7)" }
        );
    };

    const onLeave = () => {
        gsap.to(overlayRef.current, { opacity: 0, duration: 0.3, ease: "power2.in" });
    };

    return (
        <div className="group">
            {/* Image Container */}
            <div
                className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-zinc-800 mb-6 cursor-crosshair"
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
            >
                <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-110"
                />

                {/* Hover Overlay */}
                <div
                    ref={overlayRef}
                    className="absolute inset-0 bg-zinc-600/90 flex flex-col items-center justify-center p-8 text-center opacity-0 transition-opacity"
                >
                    <span className="text-white text-5xl font-serif mb-4">“</span>
                    <p ref={quoteRef} className="text-white text-lg font-bold italic leading-tight">
                        {member.quote}
                    </p>
                </div>
            </div>

            {/* Member Details */}
            <div className="px-2">
                <h3 className="text-white text-2xl font-black   tracking-tight mb-1">
                    {member.name}
                </h3>
                <p className="text-zinc-500 text-xs font-bold   tracking-[0.2em]">
                    {member.role}
                </p>
            </div>
        </div>
    );
};

export default TeamSection;