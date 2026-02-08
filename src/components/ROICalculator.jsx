// import React, { useState } from 'react';

// const ROICalculator = () => {
//     const [budget, setBudget] = useState('$10K-$50K');
//     const [clv, setClv] = useState(250000);
//     const [convRate, setConvRate] = useState(0);

//     const budgetOptions = ['$3.5K-$5K', '$5K-$10K', '$10K-$50K', '$50K+'];

//     return (
//         <div className="w-full bg-[#18181b] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/5">
//             <div className="p-8 md:p-10">
//                 <h2 className="text-2xl md:text-3xl font-bold text-white mb-10 tracking-tight">
//                     Get your free prospecting quote
//                 </h2>

//                 <div className="space-y-10">
//                     {/* 01. Budget */}
//                     <div className="space-y-4">
//                         <label className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] flex items-center gap-2">
//                             <span className="text-zinc-300 italic text-lg">01.</span> Monthly Budget
//                         </label>
//                         <div className="grid grid-cols-2 gap-2">
//                             {budgetOptions.map((opt) => (
//                                 <button
//                                     key={opt}
//                                     onClick={() => setBudget(opt)}
//                                     className={`py-3 px-2 rounded-xl border transition-all duration-300 text-[11px] font-bold ${budget === opt
//                                             ? 'border-zinc-500 bg-zinc-500/10 text-zinc-400 shadow-[0_0_20px_rgba(99,102,241,0.15)]'
//                                             : 'border-zinc-800 bg-zinc-900/50 text-zinc-500 hover:border-zinc-700 hover:text-zinc-300'
//                                         }`}
//                                 >
//                                     {opt}
//                                 </button>
//                             ))}
//                         </div>
//                     </div>

//                     {/* 02. LTV */}
//                     <div className="space-y-4">
//                         <label className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] flex items-center gap-2">
//                             <span className="text-zinc-300 italic text-lg">02.</span> Lifetime Value
//                         </label>
//                         <div className="relative group">
//                             <span className="absolute left-4 top-1/2 -tranzinc-y-1/2 text-zinc-600 font-bold group-focus-within:text-zinc-300 transition-colors">$</span>
//                             <input
//                                 type="number"
//                                 value={clv}
//                                 onChange={(e) => setClv(e.target.value)}
//                                 className="w-full bg-zinc-900/50 border border-zinc-800 rounded-2xl py-4 pl-10 pr-4 text-xl font-bold text-white focus:outline-none focus:border-zinc-500/50 focus:bg-zinc-900 transition-all"
//                             />
//                         </div>
//                     </div>

//                     {/* 03. Conv Rate */}
//                     <div className="space-y-4">
//                         <div className="flex justify-between items-end">
//                             <label className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] flex items-center gap-2">
//                                 <span className="text-zinc-300 italic text-lg">03.</span> Conv. Rate
//                             </label>
//                             <span className="text-2xl font-black text-white tabular-nums">
//                                 {convRate}<span className="text-zinc-500 text-sm ml-1">%</span>
//                             </span>
//                         </div>
//                         <div className="relative h-6 flex items-center">
//                             <input
//                                 type="range"
//                                 min="0"
//                                 max="100"
//                                 value={convRate}
//                                 onChange={(e) => setConvRate(e.target.value)}
//                                 className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-zinc-300"
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Footer Form */}
//             <div className="bg-zinc-900/80 p-8 flex flex-col gap-4 border-t border-white/5">
//                 <div className="flex gap-3">
//                     <input
//                         type="text"
//                         placeholder="Name"
//                         className="w-1/2 bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500/50 transition-all"
//                     />
//                     <input
//                         type="text"
//                         placeholder="Company"
//                         className="w-1/2 bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500/50 transition-all"
//                     />
//                 </div>
//                 <button className="group w-full bg-white text-black py-4 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all duration-500 flex items-center justify-center gap-2 cursor-pointer">
//                     Reveal Potential ROI
//                     <span className="text-lg group-hover:tranzinc-x-1 transition-transform">→</span>
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default ROICalculator;

// import React, { useState, useEffect } from 'react';

// const ROICalculator = () => {
//     // Input States
//     const [investment, setInvestment] = useState(5000);
//     const [emailsSent, setEmailsSent] = useState(10000);
//     const [replyRate, setReplyRate] = useState(3);
//     const [interestRate, setInterestRate] = useState(15);
//     const [bookingRate, setBookingRate] = useState(20);
//     const [showRate, setShowRate] = useState(80);
//     const [closeRate, setCloseRate] = useState(20);
//     const [dealSize, setDealSize] = useState(10000);

//     // Output States
//     const [results, setResults] = useState({});

//     useEffect(() => {
//         const realReplies = Math.floor(emailsSent * (replyRate / 100));
//         const interestedLeads = Math.floor(realReplies * (interestRate / 100));
//         const bookedMeetings = Math.floor(interestedLeads * (bookingRate / 100));
//         const liveMeetings = Math.floor(bookedMeetings * (showRate / 100));
//         const dealsWon = Math.floor(liveMeetings * (closeRate / 100));
//         const totalRevenue = dealsWon * dealSize;
//         const netReturn = totalRevenue - investment;
//         const roiMultiple = investment > 0 ? (totalRevenue / investment).toFixed(1) : 0;

//         setResults({
//             realReplies,
//             interestedLeads,
//             bookedMeetings,
//             liveMeetings,
//             dealsWon,
//             totalRevenue,
//             netReturn,
//             roiMultiple
//         });
//     }, [investment, emailsSent, replyRate, interestRate, bookingRate, showRate, closeRate, dealSize]);

//     const SliderInput = ({ label, value, onChange, min, max, step = 1, unit = "", isCurrency = false, index }) => (
//         <div className="space-y-3">
//             <div className="flex justify-between items-end">
//                 <label className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] flex items-center gap-2">
//                     <span className="text-zinc-300 italic text-sm">{index}.</span> {label}
//                 </label>
//                 <span className="text-lg font-black text-white tabular-nums">
//                     {isCurrency && "$"}{value.toLocaleString()}{unit}
//                 </span>
//             </div>
//             <input
//                 type="range"
//                 min={min}
//                 max={max}
//                 step={step}
//                 value={value}
//                 onChange={(e) => onChange(Number(e.target.value))}
//                 className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-white hover:accent-zinc-300 transition-all"
//             />
//         </div>
//     );

//     return (
//         <div className="w-full max-w-4xl mx-auto bg-[#18181b] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/5 font-sans">
//             <div className="grid lg:grid-cols-2">

//                 {/* Inputs Section */}
//                 <div className="p-8 md:p-10 border-b lg:border-b-0 lg:border-r border-white/5">
//                     <h2 className="text-2xl font-bold text-white mb-8 tracking-tight">Campaign Inputs</h2>
//                     <div className="space-y-8">
//                         <SliderInput index="01" label="Total Investment" value={investment} onChange={setInvestment} min={500} max={50000} step={500} isCurrency />
//                         <SliderInput index="02" label="Total Emails Sent" value={emailsSent} onChange={setEmailsSent} min={1000} max={100000} step={1000} />
//                         <SliderInput index="03" label="Real Reply Rate" value={replyRate} onChange={setReplyRate} min={0.1} max={10} step={0.1} unit="%" />
//                         <SliderInput index="04" label="Interested Rate" value={interestRate} onChange={setInterestRate} min={1} max={50} unit="%" />
//                         <SliderInput index="05" label="Booking Rate" value={bookingRate} onChange={setBookingRate} min={1} max={100} unit="%" />
//                         <SliderInput index="06" label="Meeting Show Rate" value={showRate} onChange={setShowRate} min={1} max={100} unit="%" />
//                         <SliderInput index="07" label="Close Rate" value={closeRate} onChange={setCloseRate} min={1} max={100} unit="%" />
//                         <SliderInput index="08" label="Avg Deal Size" value={dealSize} onChange={setDealSize} min={1000} max={100000} step={1000} isCurrency />
//                     </div>
//                 </div>

//                 {/* Results Section */}
//                 {/* <div className="bg-zinc-900/40 p-8 md:p-10 flex flex-col">
//                     <h2 className="text-2xl font-bold text-white mb-8 tracking-tight">Projected Returns</h2>

//                     <div className="grid grid-cols-2 gap-4 mb-8">
//                         <ResultCard label="Real Replies" value={results.realReplies} />
//                         <ResultCard label="Interested" value={results.interestedLeads} />
//                         <ResultCard label="Booked" value={results.bookedMeetings} />
//                         <ResultCard label="Live Meets" value={results.liveMeetings} />
//                     </div>

//                     <div className="space-y-4 mt-auto">
//                         <div className="bg-zinc-800/30 p-6 rounded-2xl border border-white/5">
//                             <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">Total Revenue</p>
//                             <p className="text-4xl font-black text-white">${results.totalRevenue?.toLocaleString()}</p>
//                         </div>

//                         <div className="grid grid-cols-2 gap-4">
//                             <div className="bg-zinc-800/30 p-6 rounded-2xl border border-white/5">
//                                 <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">Net Return</p>
//                                 <p className="text-xl font-bold text-emerald-400">${results.netReturn?.toLocaleString()}</p>
//                             </div>
//                             <div className="bg-zinc-800/30 p-6 rounded-2xl border border-white/5">
//                                 <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">ROI Multiple</p>
//                                 <p className="text-xl font-bold text-zinc-200">{results.roiMultiple}x</p>
//                             </div>
//                         </div>

//                         <button className="group w-full bg-white text-black py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-zinc-200 transition-all duration-300 flex items-center justify-center gap-3 mt-4">
//                             Download Full Audit
//                             <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
//                         </button>
//                     </div>
//                 </div> */}
//             </div>
//         </div>
//     );
// };

// const ResultCard = ({ label, value }) => (
//     <div className="bg-zinc-950/50 p-4 rounded-xl border border-white/5">
//         <p className="text-[9px] font-black text-zinc-600 uppercase tracking-tighter mb-1">{label}</p>
//         <p className="text-2xl font-bold text-white">{value}</p>
//     </div>
// );

// export default ROICalculator;

// import React, { useState, useEffect } from 'react';

// const ROICalculator = () => {
//     // Campaign Input States
//     const [investment, setInvestment] = useState(5000);
//     const [emailsSent, setEmailsSent] = useState(10000);
//     const [replyRate, setReplyRate] = useState(2.5);
//     const [interestRate, setInterestRate] = useState(12);
//     const [bookingRate, setBookingRate] = useState(15);
//     const [showRate, setShowRate] = useState(80);
//     const [closeRate, setCloseRate] = useState(20);
//     const [dealSize, setDealSize] = useState(15000);

//     // This state holds the math, but we won't render it in the UI per your request
//     const [internalCalc, setInternalCalc] = useState({});

//     useEffect(() => {
//         const realReplies = Math.floor(emailsSent * (replyRate / 100));
//         const interestedLeads = Math.floor(realReplies * (interestRate / 100));
//         const bookedMeetings = Math.floor(interestedLeads * (bookingRate / 100));
//         const liveMeetings = Math.floor(bookedMeetings * (showRate / 100));
//         const dealsWon = Math.floor(liveMeetings * (closeRate / 100));
//         const totalRevenue = dealsWon * dealSize;

//         setInternalCalc({
//             totalRevenue,
//             netReturn: totalRevenue - investment,
//             roi: investment > 0 ? (totalRevenue / investment).toFixed(1) : 0
//         });
//     }, [investment, emailsSent, replyRate, interestRate, bookingRate, showRate, closeRate, dealSize]);

//     const SliderField = ({ label, value, onChange, min, max, step = 1, symbol = "", isPrefix = false }) => (
//         <div className="group space-y-4 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-white/10 transition-all">
//             <div className="flex justify-between items-center">
//                 <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em]">
//                     {label}
//                 </label>
//                 <div className="bg-zinc-800/50 px-3 py-1 rounded-lg border border-white/10">
//                     <span className="text-sm font-black text-white tabular-nums">
//                         {isPrefix && symbol}{value.toLocaleString()}{!isPrefix && symbol}
//                     </span>
//                 </div>
//             </div>
//             <input
//                 type="range"
//                 min={min}
//                 max={max}
//                 step={step}
//                 value={value}
//                 onChange={(e) => onChange(Number(e.target.value))}
//                 className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-white hover:accent-indigo-400 transition-all"
//             />
//         </div>
//     );

//     return (
//         <div className="w-full max-w-2xl mx-auto bg-[#09090b] rounded-[3rem] p-1 shadow-2xl">
//             <div className="bg-[#121214] rounded-[2.8rem] border border-white/10 overflow-hidden">
//                 <div className="p-8 md:p-12">
//                     <header className="mb-12">
//                         <div className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-black uppercase tracking-widest mb-4">
//                             ROI Engine v2.0
//                         </div>
//                         <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
//                             Configure your <span className="text-zinc-500 italic">prospecting</span> parameters.
//                         </h2>
//                     </header>

//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         <SliderField label="Total Investment" value={investment} onChange={setInvestment} min={500} max={20000} step={500} symbol="$" isPrefix />
//                         <SliderField label="Avg Deal Size" value={dealSize} onChange={setDealSize} min={1000} max={100000} step={1000} symbol="$" isPrefix />
//                         <SliderField label="Total Emails" value={emailsSent} onChange={setEmailsSent} min={1000} max={50000} step={1000} />
//                         <SliderField label="Reply Rate" value={replyRate} onChange={setReplyRate} min={0.1} max={10} step={0.1} symbol="%" />
//                         <SliderField label="Interested Rate" value={interestRate} onChange={setInterestRate} min={1} max={50} symbol="%" />
//                         <SliderField label="Booking Rate" value={bookingRate} onChange={setBookingRate} min={1} max={100} symbol="%" />
//                         <SliderField label="Show Rate" value={showRate} onChange={setShowRate} min={1} max={100} symbol="%" />
//                         <SliderField label="Close Rate" value={closeRate} onChange={setCloseRate} min={1} max={100} symbol="%" />
//                     </div>

//                     <div className="mt-12 pt-8 border-t border-white/5">
//                         <button
//                             onClick={() => console.log("Final Calculation Data:", internalCalc)}
//                             className="group relative w-full overflow-hidden bg-white text-black py-6 rounded-2xl font-black text-xs uppercase tracking-[0.3em] hover:bg-indigo-500 hover:text-white transition-all duration-500"
//                         >
//                             <span className="relative z-10 flex items-center justify-center gap-3">
//                                 Generate ROI Analysis
//                                 <span className="text-xl group-hover:translate-x-2 transition-transform duration-300">→</span>
//                             </span>
//                         </button>
//                         <p className="text-center text-zinc-600 text-[9px] uppercase tracking-widest mt-6">
//                             Calculations are based on real-time industry benchmarks
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ROICalculator;

// import React, { useState, useEffect } from 'react';

// const ROICalculator = () => {
//     const [investment, setInvestment] = useState(5000);
//     const [emailsSent, setEmailsSent] = useState(10000);
//     const [replyRate, setReplyRate] = useState(2.5);
//     const [interestRate, setInterestRate] = useState(12);
//     const [bookingRate, setBookingRate] = useState(15);
//     const [showRate, setShowRate] = useState(80);
//     const [closeRate, setCloseRate] = useState(20);
//     const [dealSize, setDealSize] = useState(15000);

//     // Form states
//     const [email, setEmail] = useState('');
//     const [company, setCompany] = useState('');

//     const [internalCalc, setInternalCalc] = useState({});

//     useEffect(() => {
//         const realReplies = Math.floor(emailsSent * (replyRate / 100));
//         const interestedLeads = Math.floor(realReplies * (interestRate / 100));
//         const bookedMeetings = Math.floor(interestedLeads * (bookingRate / 100));
//         const liveMeetings = Math.floor(bookedMeetings * (showRate / 100));
//         const dealsWon = Math.floor(liveMeetings * (closeRate / 100));
//         const totalRevenue = dealsWon * dealSize;

//         setInternalCalc({ totalRevenue, roi: (totalRevenue / investment).toFixed(1) });
//     }, [investment, emailsSent, replyRate, interestRate, bookingRate, showRate, closeRate, dealSize]);

//     const SliderField = ({ label, value, onChange, min, max, step = 1, symbol = "", isPrefix = false }) => {
//         // Calculate percentage for the "tail" effect
//         const percentage = ((value - min) / (max - min)) * 100;

//         return (
//             <div className="group space-y-4 py-6 border-b border-white/5 last:border-0">
//                 <div className="flex justify-between items-end">
//                     <label className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em]">
//                         {label}
//                     </label>
//                     <span className="text-xl font-bold text-white tabular-nums">
//                         {isPrefix && symbol}{value.toLocaleString()}{!isPrefix && symbol}
//                     </span>
//                 </div>
//                 <div className="relative flex items-center">
//                     <input
//                         type="range"
//                         min={min}
//                         max={max}
//                         step={step}
//                         value={value}
//                         onChange={(e) => onChange(Number(e.target.value))}
//                         className="w-full h-[3px] bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-white transition-all"
//                         style={{
//                             background: `linear-gradient(to right, white 0%, white ${percentage}%, #27272a ${percentage}%, #27272a 100%)`
//                         }}
//                     />
//                 </div>
//             </div>
//         );
//     };

//     return (
//         <div className="w-full max-w-xl mx-auto bg-[#09090b] rounded-[3rem] p-1 shadow-2xl border border-white/5">
//             <div className="bg-[#0c0c0e] rounded-[2.8rem] overflow-hidden">
//                 <div className="p-2 md:p-8">
//                     <header className="mb-8 text-center">
//                         <h2 className="text-2xl font-bold text-white tracking-wider">Get your free prospecting quote</h2>
//                     </header>

//                     {/* Single Column Sliders */}
//                     <div className="flex flex-col">
//                         <SliderField label="Total Investment" value={investment} onChange={setInvestment} min={500} max={20000} step={500} symbol="$" isPrefix />
//                         <SliderField label="Avg Deal Size" value={dealSize} onChange={setDealSize} min={1000} max={100000} step={1000} symbol="$" isPrefix />
//                         <SliderField label="Total Emails" value={emailsSent} onChange={setEmailsSent} min={1000} max={50000} step={1000} />
//                         <SliderField label="Reply Rate" value={replyRate} onChange={setReplyRate} min={0.1} max={10} step={0.1} symbol="%" />
//                         <SliderField label="Interested Rate" value={interestRate} onChange={setInterestRate} min={1} max={50} symbol="%" />
//                         <SliderField label="Booking Rate" value={bookingRate} onChange={setBookingRate} min={1} max={100} symbol="%" />
//                         <SliderField label="Show Rate" value={showRate} onChange={setShowRate} min={1} max={100} symbol="%" />
//                         <SliderField label="Close Rate" value={closeRate} onChange={setCloseRate} min={1} max={100} symbol="%" />
//                     </div>

//                     {/* Company & Email Section */}
//                     <div className="mt-10 space-y-4">
//                         <div className="grid grid-cols-1 gap-4">
//                             <div className="space-y-2">
//                                 <label className="text-[10px] font-black text-zinc-600 uppercase tracking-widest ml-2">Company Name</label>
//                                 <input
//                                     type="text"
//                                     placeholder="Enter company..."
//                                     value={company}
//                                     onChange={(e) => setCompany(e.target.value)}
//                                     className="w-full bg-zinc-900/50 border border-zinc-800 rounded-2xl px-6 py-4 text-white placeholder:text-zinc-700 focus:outline-none focus:border-white/20 transition-all"
//                                 />
//                             </div>
//                             <div className="space-y-2">
//                                 <label className="text-[10px] font-black text-zinc-600 uppercase tracking-widest ml-2">Business Email</label>
//                                 <input
//                                     type="email"
//                                     placeholder="name@company.com"
//                                     value={email}
//                                     onChange={(e) => setEmail(e.target.value)}
//                                     className="w-full bg-zinc-900/50 border border-zinc-800 rounded-2xl px-6 py-4 text-white placeholder:text-zinc-700 focus:outline-none focus:border-white/20 transition-all"
//                                 />
//                             </div>
//                         </div>

//                         <button
//                             className="group relative w-full overflow-hidden bg-white text-black py-6 rounded-[2rem] font-black text-[11px] uppercase tracking-[0.3em] hover:bg-zinc-200 transition-all duration-300 mt-6"
//                         >
//                             <span className="relative z-10 flex items-center justify-center gap-3">
//                                 Generate ROI Analysis
//                             </span>
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ROICalculator;

import React, { useState, useEffect } from 'react';

const ROICalculator = () => {
    const [investment, setInvestment] = useState(5000);
    const [emailsSent, setEmailsSent] = useState(10000);
    const [replyRate, setReplyRate] = useState(2.5);
    const [interestRate, setInterestRate] = useState(12);
    const [bookingRate, setBookingRate] = useState(15);
    const [showRate, setShowRate] = useState(80);
    const [closeRate, setCloseRate] = useState(20);
    const [dealSize, setDealSize] = useState(15000);

    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');
    const [internalCalc, setInternalCalc] = useState({ totalRevenue: 0, roi: 0 });

    useEffect(() => {
        const realReplies = Math.floor(emailsSent * (replyRate / 100));
        const interestedLeads = Math.floor(realReplies * (interestRate / 100));
        const bookedMeetings = Math.floor(interestedLeads * (bookingRate / 100));
        const liveMeetings = Math.floor(bookedMeetings * (showRate / 100));
        const dealsWon = Math.floor(liveMeetings * (closeRate / 100));
        const totalRevenue = dealsWon * dealSize;

        setInternalCalc({
            totalRevenue,
            roi: investment > 0 ? (totalRevenue / investment).toFixed(1) : 0
        });
    }, [investment, emailsSent, replyRate, interestRate, bookingRate, showRate, closeRate, dealSize]);

    const SliderField = ({ label, value, onChange, min, max, step = 1, symbol = "", isPrefix = false }) => {
        const percentage = ((value - min) / (max - min)) * 100;

        return (
            <div className="space-y-2 py-3 border-b border-white/5 last:border-0 md:border-b-0">
                <div className="flex justify-between items-end">
                    <label className="text-[9px] font-black text-zinc-500 uppercase tracking-wider">
                        {label}
                    </label>
                    <span className="text-sm font-bold text-white tabular-nums">
                        {isPrefix && symbol}{value.toLocaleString()}{!isPrefix && symbol}
                    </span>
                </div>
                <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={value}
                    onChange={(e) => onChange(Number(e.target.value))}
                    className="w-full h-[3px] bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-white"
                    style={{ background: `linear-gradient(to right, white 0%, white ${percentage}%, #27272a ${percentage}%, #27272a 100%)` }}
                />
            </div>
        );
    };

    return (
        <div className="w-full max-w-3xl mx-auto bg-[#09090b] rounded-[2.5rem] p-1 shadow-2xl border border-white/5 overflow-hidden">
            <div className="bg-[#0c0c0e] rounded-[2.3rem] p-6 md:p-8">
                <header className="mb-6">
                    <h2 className="text-xl font-bold text-white tracking-tight text-center">ROI Prospecting Analysis</h2>
                </header>

                {/* Grid Container for Sliders */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
                    <div className="space-y-1">
                        <SliderField label="Total Investment" value={investment} onChange={setInvestment} min={500} max={20000} step={500} symbol="$" isPrefix />
                        <SliderField label="Avg Deal Size" value={dealSize} onChange={setDealSize} min={1000} max={100000} step={1000} symbol="$" isPrefix />
                        <SliderField label="Total Emails" value={emailsSent} onChange={setEmailsSent} min={1000} max={50000} step={1000} />
                        <SliderField label="Reply Rate" value={replyRate} onChange={setReplyRate} min={0.1} max={10} step={0.1} symbol="%" />
                    </div>
                    <div className="space-y-1">
                        <SliderField label="Interested Rate" value={interestRate} onChange={setInterestRate} min={1} max={50} symbol="%" />
                        <SliderField label="Booking Rate" value={bookingRate} onChange={setBookingRate} min={1} max={100} symbol="%" />
                        <SliderField label="Show Rate" value={showRate} onChange={setShowRate} min={1} max={100} symbol="%" />
                        <SliderField label="Close Rate" value={closeRate} onChange={setCloseRate} min={1} max={100} symbol="%" />
                    </div>
                </div>

                {/* Bottom Summary & Form */}
                <div className="mt-8 pt-6 border-t border-white/10">
                    {/* <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6 px-4">
                        <div className="text-center md:text-left">
                            <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">Est. Revenue</p>
                            <p className="text-2xl font-black text-white">${internalCalc.totalRevenue.toLocaleString()}</p>
                        </div>
                        <div className="h-10 w-px bg-white/10 hidden md:block" />
                        <div className="text-center md:text-left">
                            <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">Expected ROI</p>
                            <p className="text-2xl font-black text-emerald-400">{internalCalc.roi}x</p>
                        </div>
                    </div> */}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                        <input
                            type="text"
                            placeholder="Company Name"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            className="bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-700 focus:outline-none focus:border-white/20 transition-all"
                        />
                        <input
                            type="email"
                            placeholder="Business Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-700 focus:outline-none focus:border-white/20 transition-all"
                        />
                    </div>

                    <button className="w-full bg-white text-black py-4 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-zinc-200 transition-all active:scale-[0.98]">
                        Generate Full Analysis
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ROICalculator;