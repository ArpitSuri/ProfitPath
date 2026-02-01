import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ChevronRight, ShieldCheck, Scale, Lock } from 'lucide-react';

gsap.registerPlugin(ScrollToPlugin);

const TermsAndConditions = () => {

    useEffect(() => {
        gsap.fromTo(".terms-hero-text",
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power4.out" }
        );
    }, []);

    const sections = [
        { id: "acceptance", title: "Acceptance of Terms", icon: <ShieldCheck size={20} /> },
        { id: "services", title: "Professional Services", icon: <Scale size={20} /> },
        { id: "privacy", title: "Data & Privacy", icon: <Lock size={20} /> },
    ];

    const scrollToSection = (id) => {
        gsap.to(window, { duration: 1, scrollTo: `#${id}`, ease: "power3.inOut" });
    };

    return (
        <div className="bg-black text-white min-h-screen font-sans selection:bg-zinc-500 selection:text-white">

            {/* HERO SECTION */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden border-b border-white/10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-500/10 via-transparent to-transparent opacity-50" />
                <div className="container mx-auto px-10 relative z-10 text-center">
                    <span className="text-zinc-400 font-mono tracking-wider  text-xs mb-6 block">Legal Documentation</span>
                    <h1 className="terms-hero-text text-6xl md:text-[12vw] font-black  tracking-wider leading-none ">
                        Terms & <br /> Conditions
                    </h1>
                </div>
            </section>

            <div className="container mx-auto px-6 md:px-20 py-24 flex flex-col lg:flex-row gap-16">

                {/* LEFT: STICKY NAVIGATION */}
                <aside className="lg:w-1/4">
                    <div className="sticky top-32 space-y-4">
                        <p className="text-[10px]  tracking-wider text-slate-500 font-bold mb-6">Table of Contents</p>
                        {sections.map((sec) => (
                            <button
                                key={sec.id}
                                onClick={() => scrollToSection(sec.id)}
                                className="flex items-center gap-4 group w-full text-left"
                            >
                                <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-zinc-500/20 group-hover:border-zinc-500 transition-all">
                                    {sec.icon}
                                </span>
                                <span className="text-sm font-bold tracking-wider text-slate-400 group-hover:text-white transition-colors">
                                    {sec.title}
                                </span>
                            </button>
                        ))}
                        <div className="mt-12 p-6 rounded-2xl bg-zinc-500/5 border border-zinc-500/20">
                            <p className="text-xs text-slate-400 leading-relaxed">
                                Last Updated: <span className="text-white font-bold">October 2023</span><br />
                                Next Review: <span className="text-white font-bold">October 2024</span>
                            </p>
                        </div>
                    </div>
                </aside>

                {/* RIGHT: CONTENT AREA */}
                <main className="lg:w-3/4 max-w-3xl space-y-20">

                    {/* SECTION 1 */}
                    <section id="acceptance" className="scroll-mt-32">
                        <h2 className="text-3xl font-black   tracking-wider mb-8 flex items-center gap-4">
                            <span className="text-zinc-500">01.</span> Acceptance of Terms
                        </h2>
                        <div className="space-y-6 text-slate-400 leading-relaxed text-lg font-light">
                            <p>
                                By accessing or using the <span className="text-white font-medium">ProfitPath</span> platform, you agree to be bound by these Terms and Conditions. Our services are designed for professional entities seeking business growth through algorithmic optimization.
                            </p>
                            <p>
                                If you do not agree with any part of these terms, you must immediately discontinue use of our consulting tools, calculators, and proprietary software.
                            </p>
                        </div>
                    </section>

                    {/* SECTION 2 */}
                    <section id="services" className="scroll-mt-32">
                        <h2 className="text-3xl font-black   tracking-wider mb-8 flex items-center gap-4">
                            <span className="text-zinc-500">02.</span> Professional Services
                        </h2>
                        <div className="space-y-6 text-slate-400 leading-relaxed text-lg font-light">
                            <p>
                                ProfitPath provides business intelligence, ROI calculation tools, and growth strategy services. While our algorithms are highly accurate, they are intended for guidance:
                            </p>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    "No financial guarantee on specific ROI",
                                    "Proprietary algorithm protection",
                                    "Client confidentiality standards",
                                    "Third-party integration limits"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-white font-bold bg-white/5 p-4 rounded-xl border border-white/10">
                                        <ChevronRight size={14} className="text-zinc-500" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    {/* SECTION 3 */}
                    <section id="privacy" className="scroll-mt-32">
                        <h2 className="text-3xl font-black   tracking-wider mb-8 flex items-center gap-4">
                            <span className="text-zinc-500">03.</span> Data & Privacy
                        </h2>
                        <div className="space-y-6 text-slate-400 leading-relaxed text-lg font-light">
                            <p>
                                Your data security is our primary focus. We utilize military-grade encryption for all "Leakage Calculator" inputs and ROI projections.
                            </p>
                            <blockquote className="border-l-4 border-zinc-500 pl-6 py-2  text-white bg-zinc-500/5 rounded-r-xl">
                                "ProfitPath never sells client data. All uploaded business metrics are purged from our live servers following 90 days of inactivity unless otherwise contracted."
                            </blockquote>
                        </div>
                    </section>

                    {/* FOOTER CALL TO ACTION */}
                    <div className="pt-20 border-t border-white/10">
                        <p className="text-slate-500 text-sm mb-8">
                            Have questions regarding these terms? Our legal team is available for clarification.
                        </p>
                        <button className="px-10 py-4 bg-white text-black font-black  tracking-wider text-xs hover:bg-zinc-500 hover:text-white transition-all rounded-full">
                            Contact Legal Dept
                        </button>
                    </div>

                </main>
            </div>
        </div>
    );
};

export default TermsAndConditions;