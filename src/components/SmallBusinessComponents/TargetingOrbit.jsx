import React from 'react';
import { motion } from 'framer-motion';

const items = [
    { label: "High-value clients", icon: "👤", position: "top" },
    { label: "More subscribers", icon: "👥", position: "right" },
    { label: "New users & signups", icon: "📝", position: "bottom" },
    { label: "New business retainers", icon: "💳", position: "left" }
];

const TargetingOrbit = () => {
    return (
        <section className="w-full min-h-[600px] bg-black flex items-center justify-center py-20 px-10 overflow-hidden">
            <div className="max-w-[1200px] w-full flex flex-col lg:flex-row items-center justify-between gap-20">

                {/* Left Side Text */}
                <div className="flex-1">
                    <h2 className="text-white text-6xl md:text-7xl font-bold tracking-wider leading-none mb-4">
                        Whether you’re <br />
                        <span className="flex items-center gap-4">
                            looking for<span className="w-3 h-3 rounded-full bg-cyan-400 mt-6" />
                        </span>
                    </h2>
                </div>

                {/* Right Side Orbit Visual */}
                <div className="flex-1 relative flex items-center justify-center">

                    {/* The Gradient Ring */}
                    <div className="relative w-80 h-80 rounded-full border border-white/5 flex items-center justify-center">
                        {/* Animated Gradient Border */}
                        <div className="absolute inset-0 rounded-full border-[2px] border-transparent bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 [mask-composite:exclude] mask-clip"
                            style={{ WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'destination-out' }} />

                        {/* Center Box */}
                        <div className="relative z-10 w-32 h-32 bg-zinc-900 rounded-2xl border border-white/10 flex items-center justify-center shadow-2xl overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-transparent" />
                            <div className="text-4xl">⚙️</div>
                        </div>

                        {/* Orbiting Elements */}
                        {/* High-value clients (Top) */}
                        <OrbitItem
                            label="High-value clients"
                            className="-top-6 left-1/2 -tranzinc-x-1/2"
                            labelClassName="-left-48"
                            color="bg-emerald-500"
                        />

                        {/* More subscribers (Right) */}
                        <OrbitItem
                            label="More subscribers"
                            className="top-1/2 -right-6 -tranzinc-y-1/2"
                            labelClassName="left-16"
                            color="bg-purple-500"
                        />

                        {/* New users & signups (Bottom) */}
                        <OrbitItem
                            label="New users & signups"
                            className="-bottom-6 left-1/2 -tranzinc-x-1/2"
                            labelClassName="left-16 top-0"
                            color="bg-cyan-500"
                        />

                        {/* New business retainers (Left) */}
                        <OrbitItem
                            label="New business retainers"
                            className="top-1/2 -left-6 -tranzinc-y-1/2"
                            labelClassName="-left-52"
                            color="bg-indigo-600"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const OrbitItem = ({ label, className, labelClassName, color }) => (
    <div className={`absolute z-20 flex items-center ${className}`}>
        <div className={`relative group`}>
            {/* The Node */}
            <div className={`w-12 h-12 ${color} rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)] border-2 border-black/50 cursor-pointer transition-transform group-hover:scale-110`}>
                <div className="text-white text-xs">✓</div>
            </div>

            {/* The Label */}
            <div className={`absolute top-1/2 -tranzinc-y-1/2 whitespace-nowrap text-white font-medium text-lg ${labelClassName}`}>
                {label}
            </div>
        </div>
    </div>
);

export default TargetingOrbit;