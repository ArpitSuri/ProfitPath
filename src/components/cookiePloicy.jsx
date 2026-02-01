import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { Cookie, Info, Settings, BarChart3, ShieldCheck } from 'lucide-react';

const CookiePolicy = () => {

    useEffect(() => {
        gsap.fromTo(".cookie-hero-text",
            { y: 70, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
        );
    }, []);

    const cookieTypes = [
        {
            title: "Strictly Necessary",
            desc: "Essential for the website to function. These cannot be switched off.",
            icon: <ShieldCheck size={20} className="text-emerald-500" />,
            list: ["Session Security", "Authentication", "Load Balancing"]
        },
        {
            title: "Performance & Analytics",
            desc: "Help us understand how visitors interact with our calculators.",
            icon: <BarChart3 size={20} className="text-zinc-500" />,
            list: ["Google Analytics", "Hotjar", "Traffic Sources"]
        },
        {
            title: "Functional",
            desc: "Remembering your preferences, such as currency or language.",
            icon: <Settings size={20} className="text-amber-500" />,
            list: ["Region Settings", "UI Personalization"]
        }
    ];

    return (
        <div className="bg-black text-white min-h-screen selection:bg-zinc-500">

            {/* HERO SECTION */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 overflow-hidden opacity-20">
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-zinc-600/30 blur-[120px] rounded-full" />
                </div>

                <div className="container mx-auto px-10 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
                        <Cookie size={14} className="text-zinc-400" />
                        <span className="text-[10px] font-black  tracking-wider">Cookie Protocol</span>
                    </div>
                    <h1 className="cookie-hero-text text-7xl md:text-[11vw] font-black  tracking-wider leading-none ">
                        Cookie <br /> <span className="text-zinc-800">Usage</span>
                    </h1>
                </div>
            </section>

            <div className="container mx-auto px-6 md:px-20 py-24">
                <div className="max-w-4xl mx-auto">

                    {/* INTRO */}
                    <div className="flex flex-col md:flex-row gap-12 mb-24 items-start">
                        <div className="md:w-1/3">
                            <h2 className="text-xl font-bold  tracking-wider text-zinc-500">How we use <br /> digital tracers.</h2>
                        </div>
                        <div className="md:w-2/3">
                            <p className="text-zinc-400 text-lg leading-relaxed">
                                To ensure the ProfitPath platform remains optimized for high-performance business analysis, we use cookies. These are small data fragments stored on your device that help us provide a seamless, secure, and personalized experience.
                            </p>
                        </div>
                    </div>

                    {/* COOKIE CATEGORIES GRID */}
                    <div className="grid grid-cols-1 gap-6 mb-24">
                        {cookieTypes.map((type, i) => (
                            <div key={i} className="group p-8 rounded-3xl bg-zinc-900/40 border border-white/5 hover:bg-zinc-900/60 transition-all">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                    <div className="flex items-start gap-5">
                                        <div className="mt-1">{type.icon}</div>
                                        <div>
                                            <h3 className="text-xl font-bold  tracking-wider  mb-2">{type.title}</h3>
                                            <p className="text-zinc-500 text-sm max-w-md">{type.desc}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {type.list.map((tag) => (
                                            <span key={tag} className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-bold  text-zinc-400 group-hover:border-zinc-500/30 transition-colors">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* MANAGEMENT SECTION */}
                    <div className="p-12 rounded-[2rem] bg-zinc-600 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
                        {/* Decorative background icon */}
                        <Cookie className="absolute -bottom-10 -right-10 text-white/10 w-64 h-64 -rotate-12" />

                        <div className="relative z-10 text-center md:text-left">
                            <h3 className="text-2xl font-black   tracking-wider text-white mb-2">Control your data</h3>
                            <p className="text-zinc-100 text-sm max-w-sm">
                                You can update your preferences or revoke consent for non-essential cookies at any time.
                            </p>
                        </div>

                        <button className="relative z-10 px-8 py-4 bg-white text-black font-black  text-xs tracking-wider rounded-full hover:scale-105 transition-transform active:scale-95 shadow-xl">
                            Adjust Settings
                        </button>
                    </div>

                    {/* DETAILED TABLE */}
                    <div className="mt-32">
                        <div className="flex items-center gap-3 mb-10">
                            <Info size={18} className="text-zinc-500" />
                            <h4 className="text-xs font-black  tracking-wider text-zinc-500">Specific Cookie Inventory</h4>
                        </div>

                        <div className="w-full overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-white/10 text-[10px]  tracking-wider text-zinc-600">
                                        <th className="pb-4 pr-4">Provider</th>
                                        <th className="pb-4 pr-4">Purpose</th>
                                        <th className="pb-4 pr-4">Expiry</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm text-zinc-400">
                                    <tr className="border-b border-white/5">
                                        <td className="py-6 font-bold text-white">Google Analytics</td>
                                        <td className="py-6">Traffic patterns and engagement metrics</td>
                                        <td className="py-6">2 Years</td>
                                    </tr>
                                    <tr className="border-b border-white/5">
                                        <td className="py-6 font-bold text-white">ProfitPath Auth</td>
                                        <td className="py-6">Maintaining secure user session</td>
                                        <td className="py-6">Session</td>
                                    </tr>
                                    <tr>
                                        <td className="py-6 font-bold text-white">Cloudflare</td>
                                        <td className="py-6">Protection against DDoS and bot attacks</td>
                                        <td className="py-6">1 Year</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CookiePolicy;