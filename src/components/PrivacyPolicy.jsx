import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { Eye, ShieldAlert, Database, Fingerprint, Mail } from 'lucide-react';

gsap.registerPlugin(ScrollToPlugin);

const PrivacyPolicy = () => {

    useEffect(() => {
        // Hero Text Entrance
        gsap.fromTo(".privacy-hero-text",
            { y: 80, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.2, ease: "expo.out" }
        );
    }, []);

    const dataPoints = [
        { title: "Identity", desc: "Name, email, and company details used for communication.", icon: <Fingerprint size={18} /> },
        { title: "Usage", desc: "How you interact with our calculators and platform tools.", icon: <Eye size={18} /> },
        { title: "Technical", desc: "IP addresses, browser types, and session durations.", icon: <Database size={18} /> },
    ];

    const scrollToSection = (id) => {
        gsap.to(window, { duration: 0.8, scrollTo: `#${id}`, ease: "power2.inOut" });
    };

    return (
        <div className="bg-black text-white min-h-screen selection:bg-zinc-500">

            {/* HERO SECTION */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden py-12">
                {/* Background Grid Effect */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                <div className="container mx-auto px-10 relative z-10 text-center">
                    <span className="text-zinc-500 font-mono tracking-wider  text-[10px] mb-4 block">Data Protection Protocol</span>
                    <h1 className="privacy-hero-text text-6xl md:text-[10vw] font-black  tracking-wider leading-none ">
                        Privacy <br /> <span className="text-zinc-800">Policy</span>
                    </h1>
                </div>
            </section>

            <div className="container mx-auto px-6 md:px-20 pb-32">

                {/* DATA DNA VISUALIZER */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
                    {dataPoints.map((point, i) => (
                        <div key={i} className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-zinc-500/50 transition-colors">
                            <div className="text-zinc-500 mb-4">{point.icon}</div>
                            <h3 className="text-lg font-bold mb-2  tracking-wider">{point.title}</h3>
                            <p className="text-sm text-zinc-500 leading-relaxed">{point.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col lg:flex-row gap-20">
                    {/* LEFT NAVIGATION */}
                    <aside className="lg:w-1/4 hidden lg:block">
                        <div className="sticky top-40 space-y-6">
                            {["Collection", "Encryption", "Cookies", "Your Rights"].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                                    className="block text-sm font-bold tracking-wider  text-zinc-600 hover:text-zinc-500 transition-colors"
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </aside>

                    {/* RIGHT CONTENT */}
                    <main className="lg:w-3/4 max-w-3xl space-y-24">

                        <section id="collection" className="scroll-mt-40">
                            <h2 className="text-4xl font-black   tracking-wider mb-10">01. Information Collection</h2>
                            <div className="prose prose-invert prose-zinc max-w-none text-zinc-400">
                                <p className="text-xl leading-relaxed mb-6">
                                    At ProfitPath, we operate on a principle of <span className="text-white">Minimum Viable Data</span>. We only collect information that is strictly necessary to provide our business intelligence services.
                                </p>
                                <p>
                                    When you use our ROI Calculators, the input data is processed in real-time. Unless you choose to save your report or create an account, these metrics are not stored on our permanent databases.
                                </p>
                            </div>
                        </section>

                        <section id="encryption" className="scroll-mt-40">
                            <h2 className="text-4xl font-black   tracking-wider mb-10">02. Encryption Standards</h2>
                            <div className="p-8 rounded-3xl bg-zinc-600/10 border border-zinc-500/20 flex items-start gap-6">
                                <ShieldAlert className="text-zinc-500 shrink-0" size={32} />
                                <div>
                                    <h4 className="text-white font-bold mb-2">Military Grade Security</h4>
                                    <p className="text-zinc-400 text-sm leading-relaxed">
                                        All data transmitted between your browser and ProfitPath is encrypted using 256-bit SSL (Secure Sockets Layer). This ensures that your proprietary financial metrics remain invisible to third-party actors.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section id="cookies" className="scroll-mt-40">
                            <h2 className="text-4xl font-black   tracking-wider  mb-10">03. Cookie Usage</h2>
                            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                                We utilize "Functional Cookies" to remember your calculator preferences and "Analytical Cookies" (like Google Analytics) to understand how visitors move through our site.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 border border-white/10 rounded-xl text-xs  tracking-wider text-zinc-500">Essential: Always On</div>
                                <div className="p-4 border border-white/10 rounded-xl text-xs  tracking-wider text-zinc-500">Marketing: Opt-in Only</div>
                            </div>
                        </section>

                        <section id="your-rights" className="scroll-mt-40">
                            <h2 className="text-4xl font-black   tracking-wider mb-10">04. Your Rights</h2>
                            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                                Under GDPR and CCPA regulations, you have the right to access, delete, or export your data at any moment.
                            </p>
                            <button className="group flex items-center gap-4 bg-white text-black px-8 py-4 rounded-full font-black  text-xs tracking-wider hover:bg-zinc-500 hover:text-white transition-all">
                                <Mail size={16} /> Request Data Export
                            </button>
                        </section>

                    </main>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;