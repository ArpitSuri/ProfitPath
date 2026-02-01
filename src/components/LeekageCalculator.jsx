import React, { useState } from 'react';

const LeakageCalculator = () => {
    const [dealValue, setDealValue] = useState(0);
    const [mqlRange, setMqlRange] = useState('200-499');
    const [bookedMeetings, setBookedMeetings] = useState(25);
    const [noShows, setNoShows] = useState(30);
    const [responseTime, setResponseTime] = useState('2 days');

    const mqlOptions = ['< 100', '100-199', '200-499', '500+'];
    const responseOptions = ['< 1 day', '1 day', '2 days', '3 days+'];

    return (
        <div className="w-full bg-[#111113] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/5">
            <div className="p-8 md:p-10 space-y-8">

                {/* 01. Deal Value */}
                <div className="space-y-3">
                    <label className="text-[11px] font-black text-zinc-500   tracking-wider flex items-center gap-2">
                        Your average deal value
                    </label>
                    <div className="relative group">
                        <div className="absolute left-0 top-0 bottom-0 px-4 flex items-center bg-zinc-800/50 border-r border-zinc-700 rounded-l-2xl text-zinc-400 font-bold group-focus-within:text-zinc-400 transition-colors">
                            £ <span className="ml-1 text-[10px]">▼</span>
                        </div>
                        <input
                            type="number"
                            value={dealValue}
                            onChange={(e) => setDealValue(e.target.value)}
                            className="w-full bg-zinc-900/30 border border-zinc-800 rounded-2xl py-4 pl-16 pr-4 text-xl font-bold text-white focus:outline-none focus:border- zinc-500/50 transition-all"
                        />
                    </div>
                </div>

                {/* 02. MQL Volume */}
                <div className="space-y-3">
                    <label className="text-[11px] font-black text-zinc-500   tracking-wider flex items-center gap-2">
                        How many MQLs enter your pipeline each month? <span className="text-zinc-700 text-xs">ⓘ</span>
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        {mqlOptions.map((opt) => (
                            <button
                                key={opt}
                                onClick={() => setMqlRange(opt)}
                                className={`py-3 px-2 rounded-xl border transition-all duration-300 text-[11px] font-bold flex items-center justify-center gap-2 ${mqlRange === opt
                                        ? 'border- zinc-500 bg- zinc-500/10 text-white shadow-[0_0_15px_rgba(99,102,241,0.1)]'
                                        : 'border-zinc-800 bg-zinc-900/50 text-zinc-500 hover:border-zinc-700'
                                    }`}
                            >
                                <div className={`w-3 h-3 rounded-full border ${mqlRange === opt ? 'bg- zinc-500 border- zinc-400 shadow-[0_0_8px_rgba(99,102,241,0.6)]' : 'border-zinc-700'}`} />
                                {opt}
                            </button>
                        ))}
                    </div>
                </div>

                {/* 03. Booked Meetings Slider */}
                <div className="space-y-4">
                    <label className="text-[11px] font-black text-zinc-500   tracking-wider flex items-center gap-2">
                        What percentage of your MQLs turn into booked sales calls? <span className="text-zinc-700 text-xs">ⓘ</span>
                    </label>
                    <div className="flex items-center gap-4">
                        <div className="flex-shrink-0 flex items-center bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
                            <span className="bg-zinc-800 px-3 py-3 text-zinc-500 text-xs font-bold">%</span>
                            <input
                                type="number"
                                value={bookedMeetings}
                                onChange={(e) => setBookedMeetings(e.target.value)}
                                className="w-16 bg-transparent text-center text-white font-bold focus:outline-none"
                            />
                        </div>
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={bookedMeetings}
                            onChange={(e) => setBookedMeetings(e.target.value)}
                            className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent- zinc-500"
                        />
                    </div>
                </div>

                {/* 04. No-Shows Slider */}
                <div className="space-y-4">
                    <label className="text-[11px] font-black text-zinc-500   tracking-wider flex items-center gap-2">
                        What percentage of booked meetings result in no-shows? <span className="text-zinc-700 text-xs">ⓘ</span>
                    </label>
                    <div className="flex items-center gap-4">
                        <div className="flex-shrink-0 flex items-center bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
                            <span className="bg-zinc-800 px-3 py-3 text-zinc-500 text-xs font-bold">%</span>
                            <input
                                type="number"
                                value={noShows}
                                onChange={(e) => setNoShows(e.target.value)}
                                className="w-16 bg-transparent text-center text-white font-bold focus:outline-none"
                            />
                        </div>
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={noShows}
                            onChange={(e) => setNoShows(e.target.value)}
                            className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent- zinc-500"
                        />
                    </div>
                </div>

                {/* 05. Response Time */}
                <div className="space-y-3 pb-4">
                    <label className="text-[11px] font-black text-zinc-500   tracking-wider flex items-center gap-2">
                        How quickly does your team typically respond? <span className="text-zinc-700 text-xs">ⓘ</span>
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        {responseOptions.map((opt) => (
                            <button
                                key={opt}
                                onClick={() => setResponseTime(opt)}
                                className={`py-3 px-2 rounded-xl border transition-all duration-300 text-[11px] font-bold flex items-center justify-center gap-2 ${responseTime === opt
                                        ? 'border- zinc-500 bg- zinc-500/10 text-white shadow-[0_0_15px_rgba(99,102,241,0.1)]'
                                        : 'border-zinc-800 bg-zinc-900/50 text-zinc-500 hover:border-zinc-700'
                                    }`}
                            >
                                <div className={`w-3 h-3 rounded-full border ${responseTime === opt ? 'bg- zinc-500 border- zinc-400 shadow-[0_0_8px_rgba(99,102,241,0.6)]' : 'border-zinc-700'}`} />
                                {opt}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer Action */}
            <div className="bg-zinc-900/50 p-6 border-t border-white/5">
                <button className="w-full bg-white text-black py-5 rounded-2xl font-black text-[11px]   tracking-wider hover:bg- zinc-500 hover:text-white hover:bg-black transition-all duration-500 shadow-xl shadow-black/20">
                    Find the leaks →
                </button>
            </div>
        </div>
    );
};

export default LeakageCalculator;