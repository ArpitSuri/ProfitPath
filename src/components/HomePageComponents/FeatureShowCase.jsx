import React from 'react';
import TalkToUsButton from './TalkToUs';

const FeatureShowcase = () => {
    const features = [
        {
            badge: "Discovery",
            week: "Week 1",
            title: "Discovery",
            desc: "We begin by understanding your sales teams goals and your ICP",
            icon: "🔍",
            // Neutral glass gradients
            color: "from-white/[0.08] to-transparent"
        },
        {
            badge: "Design",
            title: "Strategy",
            week: "Week 2-3",
            desc: "We start building your growth strategy to drive demand and pipeline value",
            icon: "🎨",
            color: "from-white/[0.05] to-transparent"
        },
        {
            badge: "Growth",
            title: "Go live",
            week: "Week 4",
            desc: "Once we have agreed your new prospecting strategy, we go live!",
            icon: "🚀",
            color: "from-white/[0.08] to-transparent"
        }
    ];

    return (
        <section className="bg-black py-24 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                {/* LEFT SIDE: Heading & List */}
                <div className="flex flex-col">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-16 tracking-wider">
                        How it works<span className="text-zinc-600">.</span>
                    </h2>

                    <div className="space-y-8">
                        {features.map((item, i) => (
                            <div key={i} className="relative group">
                                {/* Connection Line (Optional: visual guide between steps) */}
                                {i !== features.length - 1 && (
                                    <div className="absolute left-14 top-24 w-px h-12 bg-linear-to-b from-white/20 to-transparent hidden md:block" />
                                )}

                                {/* Card Container */}
                                <div className={`
                                    relative flex flex-col md:flex-row items-center md:items-start gap-6 p-8 
                                    rounded-[2.5rem] bg-linear-to-br ${item.color}
                                    backdrop-blur-xl border border-white/10 
                                    transition-all duration-500 
                                    hover:bg-white/[0.12] hover:border-white/20 hover:-tranzinc-y-1
                                    shadow-[0_20px_50px_rgba(0,0,0,0.5)]
                                `}>

                                    {/* Icon Container with Glass Effect */}
                                    <div className="shrink-0 text-3xl w-20 h-20 flex items-center justify-center 
                                        rounded-3xl bg-zinc-900/50 border border-white/10 
                                        shadow-inner backdrop-blur-md group-hover:scale-110 transition-transform duration-500">
                                        {item.icon}
                                    </div>

                                    <div className="flex flex-col text-center md:text-left">
                                        {/* Badge & Week */}
                                        <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                                            <span className="px-3 py-1 rounded-full bg-white text-[10px] font-bold uppercase tracking-widest text-black">
                                                {item.badge}
                                            </span>
                                            <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-medium">
                                                {item.week}
                                            </span>
                                        </div>

                                        <h3 className="text-2xl font-bold text-white mb-2 tracking-tight transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-zinc-400 leading-relaxed font-light text-sm md:text-base max-w-sm">
                                            {item.desc}
                                        </p>
                                    </div>

                                    {/* Subtle "Glow" behind each item on hover */}
                                    <div className="absolute -inset-1 bg-white/5 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT SIDE: Image */}
                <div className="relative group lg:mt-0 mt-12">
                    {/* Background "Glass" glow */}
                    <div className="absolute -inset-10 bg-zinc-800/20 rounded-full blur-[120px] opacity-50 group-hover:opacity-80 transition-opacity" />

                    <div className="relative rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
                        {/* Overlay to darken image slightly for that premium feel */}
                        <div className="absolute inset-0 bg-black/20 z-10" />

                        <img
                            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000"
                            alt="Process Flow"
                            className="w-full aspect-4/5 object-cover transition-transform duration-1000 group-hover:scale-105"
                        />

                        {/* Floating Glass CTA Card on Image */}
                        <div className="absolute bottom-8 left-8 right-8 z-20 backdrop-blur-2xl bg-black/40 border border-white/10 p-8 rounded-4xl flex flex-col md:flex-row items-center justify-between gap-6">
                            <div>
                                <h4 className="text-white font-bold text-xl">Ready to scale?</h4>
                                <p className="text-zinc-400 text-sm">Book your discovery call today.</p>
                            </div>
                            <TalkToUsButton />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default FeatureShowcase;