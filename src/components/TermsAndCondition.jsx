import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ChevronRight, ShieldCheck, Scale, Lock, Gavel, AlertTriangle, Mail } from 'lucide-react';

gsap.registerPlugin(ScrollToPlugin);

const TermsAndConditions = () => {

    useEffect(() => {
        gsap.fromTo(".terms-hero-text",
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power4.out" }
        );
    }, []);

    const sections = [
        { id: "services", title: "Services Provided", icon: <Scale size={20} /> },
        { id: "bookings", title: "Booking Policy", icon: <AlertTriangle size={20} /> },
        { id: "property", title: "Intellectual Property", icon: <Lock size={20} /> },
        { id: "liability", title: "Limitation of Liability", icon: <ShieldCheck size={20} /> },
        { id: "governing", title: "Governing Law", icon: <Gavel size={20} /> },
    ];

    const scrollToSection = (id) => {
        gsap.to(window, { duration: 1, scrollTo: `#${id}`, ease: "power3.inOut" });
    };

    return (
        <div className="text-white min-h-screen font-sans selection:bg-zinc-500 selection:text-white">

            {/* HERO SECTION */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden border-b border-white/10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-500/10 via-transparent to-transparent opacity-50" />
                <div className="container mx-auto px-10 relative z-10 text-center">
                    <span className="text-zinc-400 font-mono tracking-wider text-xs mb-6 block uppercase">Effective Date: 18/11/24</span>
                    <h1 className="terms-hero-text text-6xl md:text-[12vw] font-black tracking-wider leading-none ">
                        Terms Of <br /> Service
                    </h1>
                </div>
            </section>

            <div className="container mx-auto px-6 md:px-20 py-24 flex flex-col lg:flex-row gap-16">

                {/* LEFT: STICKY NAVIGATION */}
                <aside className="lg:w-1/4">
                    <div className="sticky top-32 space-y-4">
                        <p className="text-[10px] tracking-wider text-zinc-500 font-bold mb-6 uppercase">Table of Contents</p>
                        {sections.map((sec) => (
                            <button
                                key={sec.id}
                                onClick={() => scrollToSection(sec.id)}
                                className="flex items-center gap-4 group w-full text-left"
                            >
                                <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-zinc-500/20 group-hover:border-zinc-500 transition-all">
                                    {sec.icon}
                                </span>
                                <span className="text-sm font-bold tracking-wider text-zinc-400 group-hover:text-white transition-colors">
                                    {sec.title}
                                </span>
                            </button>
                        ))}
                    </div>
                </aside>

                {/* RIGHT: CONTENT AREA */}
                <main className="lg:w-3/4 max-w-3xl space-y-20">

                    <section id="services" className="scroll-mt-32">
                        <h2 className="text-3xl font-black tracking-wider mb-8 flex items-center gap-4 text-zinc-300">
                            <span className="text-zinc-500">01.</span> Services Provided
                        </h2>
                        <div className="space-y-6 text-zinc-400 leading-relaxed text-lg font-light">
                            <p>
                                Welcome to <span className="text-white font-medium">ProfitPath</span>. By accessing our website, you agree to comply with these terms. ProfitPath is a lead generation agency; our website provides information about our agency and offers services such as booking strategy calls.
                            </p>
                            <p>
                                You agree to use our website only for lawful purposes. You must not use our website to transmit any harmful, illegal, or malicious content.
                            </p>
                        </div>
                    </section>

                    <section id="bookings" className="scroll-mt-32">
                        <h2 className="text-3xl font-black tracking-wider mb-8 flex items-center gap-4 text-zinc-300">
                            <span className="text-zinc-500">02.</span> Booking Calls & Anti-Spam
                        </h2>
                        <div className="space-y-6 text-zinc-400 leading-relaxed text-lg font-light">
                            <p>
                                You agree to provide accurate and truthful information when booking a call. <span className="text-white">Spam bookings</span>—including false information or booking without genuine interest—are strictly prohibited.
                            </p>
                            <div className="p-6 rounded-2xl bg-red-500/5 border border-red-500/20">
                                <p className="text-sm text-red-200/60 font-medium">
                                    We reserve the right to cancel any bookings suspected of being fraudulent and to take appropriate action against users engaging in such activities.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section id="property" className="scroll-mt-32">
                        <h2 className="text-3xl font-black tracking-wider mb-8 flex items-center gap-4 text-zinc-300">
                            <span className="text-zinc-500">03.</span> Intellectual Property
                        </h2>
                        <div className="space-y-6 text-zinc-400 leading-relaxed text-lg font-light">
                            <p>
                                All content on the ProfitPath website—including text, graphics, logos, and images—is the property of ProfitPath or its content suppliers.
                            </p>
                            <blockquote className="border-l-4 border-zinc-500 pl-6 py-2 text-white bg-zinc-500/5 rounded-r-xl italic">
                                "You may not use, reproduce, or distribute any content from our website without our express written permission."
                            </blockquote>
                        </div>
                    </section>

                    <section id="liability" className="scroll-mt-32">
                        <h2 className="text-3xl font-black tracking-wider mb-8 flex items-center gap-4 text-zinc-300">
                            <span className="text-zinc-500">04.</span> Limitation of Liability
                        </h2>
                        <div className="space-y-6 text-zinc-400 leading-relaxed text-lg font-light">
                            <p>
                                ProfitPath is not liable for any direct, indirect, incidental, or consequential damages arising from your use of our website. We do not warrant that our website will be uninterrupted, error-free, or free of harmful components.
                            </p>
                        </div>
                    </section>

                    <section id="governing" className="scroll-mt-32">
                        <h2 className="text-3xl font-black tracking-wider mb-8 flex items-center gap-4 text-zinc-300">
                            <span className="text-zinc-500">05.</span> Governing Law
                        </h2>
                        <div className="space-y-6 text-zinc-400 leading-relaxed text-lg font-light">
                            <p>
                                These Terms of Service are governed by and construed in accordance with the laws of <span className="text-white">The United Kingdom</span>. Any disputes shall be resolved exclusively in the courts of The United Kingdom.
                            </p>
                        </div>
                    </section>

                    {/* CONTACT INFO SECTION */}
                    <div className="pt-20 border-t border-white/10">
                        <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-[0.2em]">Contact Us</h4>
                        <div className="flex flex-col gap-4">
                            <a href="mailto:janneciofficial@gmail.com" className="group flex items-center gap-4 text-zinc-400 hover:text-white transition-all">
                                <div className="p-3 rounded-full bg-white/5 group-hover:bg-white group-hover:text-black transition-all">
                                    <Mail size={16} />
                                </div>
                                sales@profitpathgrowthpartners.com
                            </a>
                        </div>
                    </div>

                </main>
            </div>
        </div>
    );
};

export default TermsAndConditions;