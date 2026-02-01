import React, { useState } from 'react';

const ROICalculator = () => {
    const [budget, setBudget] = useState('£10K-£50K');
    const [clv, setClv] = useState(250000);
    const [convRate, setConvRate] = useState(0);

    const budgetOptions = ['£3.5K-£5K', '£5K-£10K', '£10K-£50K', '£50K+'];

    return (
        <div className="w-full bg-[#18181b] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/5">
            <div className="p-8 md:p-10">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-10 tracking-tight">
                    Get your free prospecting quote
                </h2>

                <div className="space-y-10">
                    {/* 01. Budget */}
                    <div className="space-y-4">
                        <label className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] flex items-center gap-2">
                            <span className="text-zinc-300 italic text-lg">01.</span> Monthly Budget
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                            {budgetOptions.map((opt) => (
                                <button
                                    key={opt}
                                    onClick={() => setBudget(opt)}
                                    className={`py-3 px-2 rounded-xl border transition-all duration-300 text-[11px] font-bold ${budget === opt
                                            ? 'border-zinc-500 bg-zinc-500/10 text-zinc-400 shadow-[0_0_20px_rgba(99,102,241,0.15)]'
                                            : 'border-zinc-800 bg-zinc-900/50 text-zinc-500 hover:border-zinc-700 hover:text-zinc-300'
                                        }`}
                                >
                                    {opt}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* 02. LTV */}
                    <div className="space-y-4">
                        <label className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] flex items-center gap-2">
                            <span className="text-zinc-300 italic text-lg">02.</span> Lifetime Value
                        </label>
                        <div className="relative group">
                            <span className="absolute left-4 top-1/2 -tranzinc-y-1/2 text-zinc-600 font-bold group-focus-within:text-zinc-300 transition-colors">£</span>
                            <input
                                type="number"
                                value={clv}
                                onChange={(e) => setClv(e.target.value)}
                                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-2xl py-4 pl-10 pr-4 text-xl font-bold text-white focus:outline-none focus:border-zinc-500/50 focus:bg-zinc-900 transition-all"
                            />
                        </div>
                    </div>

                    {/* 03. Conv Rate */}
                    <div className="space-y-4">
                        <div className="flex justify-between items-end">
                            <label className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] flex items-center gap-2">
                                <span className="text-zinc-300 italic text-lg">03.</span> Conv. Rate
                            </label>
                            <span className="text-2xl font-black text-white tabular-nums">
                                {convRate}<span className="text-zinc-500 text-sm ml-1">%</span>
                            </span>
                        </div>
                        <div className="relative h-6 flex items-center">
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={convRate}
                                onChange={(e) => setConvRate(e.target.value)}
                                className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-zinc-300"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Form */}
            <div className="bg-zinc-900/80 p-8 flex flex-col gap-4 border-t border-white/5">
                <div className="flex gap-3">
                    <input
                        type="text"
                        placeholder="Name"
                        className="w-1/2 bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500/50 transition-all"
                    />
                    <input
                        type="text"
                        placeholder="Company"
                        className="w-1/2 bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500/50 transition-all"
                    />
                </div>
                <button className="group w-full bg-white text-black py-4 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all duration-500 flex items-center justify-center gap-2 cursor-pointer">
                    Reveal Potential ROI
                    <span className="text-lg group-hover:tranzinc-x-1 transition-transform">→</span>
                </button>
            </div>
        </div>
    );
};

export default ROICalculator;