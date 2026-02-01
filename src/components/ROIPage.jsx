// import React from 'react';
// import ROICalculator from './ROICalculator';

import ROICalculator from "./ROICalculator";

import React from 'react'

const ROIPage = () => {
  return (
    <div>
          <div className="relative w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-6 py-20 gap-12">
              {/* LEFT CONTENT */}
              <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left gap-6 md:gap-8">
                  <div className="px-4 py-1.5 rounded-full border border-zinc-500/30 bg-indigo-500/10 text-zinc-400 text-[10px] font-black uppercase tracking-[0.3em] animate-pulse">
                      ROI Calculator
                  </div>

                  <div className="space-y-4">
                      <h2 className="text-5xl md:text-7xl font-black tracking-wider leading-none  text-white">
                          Proof is in the  <br /> profit
                      </h2>
                      {/* <div className="w-20 h-1.5 bg-indigo-500 rounded-full mx-auto lg:mx-0"></div> */}
                  </div>

                  <div className="space-y-8 max-w-md">
                      {[
                          { title: "Data-Driven Strategy", desc: "We can’t predict the future, but our 10+ years experience can give a confident estimate." },
                          { title: "Instant Projections", desc: "Use our ROI calculator to find out how Flowd maximises your sales pipeline's potential." }
                      ].map((point, i) => (
                          <div key={i} className="group">
                              <p className="text-zinc-400 text-sm md:text-base font-light leading-relaxed mt-2">
                                  {point.desc}
                              </p>
                          </div>
                      ))}
                  </div>
              </div>

              {/* RIGHT CONTENT: Calculator */}
              <div className="w-full lg:w-1/2 flex justify-center lg:justify-end overflow-hidden">
                  <div className="w-full max-w-xl transform scale-90 sm:scale-100 lg:scale-90 xl:scale-100 origin-center lg:origin-right">
                      <ROICalculator />
                  </div>
              </div>
          </div>
    </div>
  )
}

export default ROIPage



// const ROIPage = () => {
//     return (
//         <section className="relative w-full min-h-screen flex items-center bg-[#0a0a0a] overflow-hidden">
            
//             {/* Background Decorative Element */}
//             <div className="absolute top-1/2 left-1/2 -tranzinc-x-1/2 -tranzinc-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

//             <div className="relative w-full h-full flex flex-col lg:flex-row items-center justify-between px-10 lg:px-24 py-20 gap-16 z-10">

//                 {/* LEFT CONTENT: Editorial Info */}
//                 <div className="w-full lg:w-1/2 flex flex-col items-start gap-10">

//                     {/* ROI Badge */}
//                     <div className="px-5 py-2 rounded-full border border-zinc-800 bg-zinc-900/50 text-indigo-400 text-[10px] font-black uppercase tracking-[0.4em] flex items-center gap-2">
//                         <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
//                         ROI Calculator
//                     </div>

//                     {/* Section Heading */}
//                     <div className="space-y-6">
//                         <h2 className="text-white text-7xl md:text-8xl font-black tracking-tighter leading-[0.85] uppercase italic">
//                             The <br />
//                             <span className="text-zinc-800 outline-text">Process</span>
//                         </h2>
//                         <div className="w-24 h-1 bg-indigo-600 rounded-full" />
//                     </div>

//                     {/* Subheadings Staggered */}
//                     <div className="space-y-10 max-w-md">
//                         <div className="group flex gap-6">
//                             <span className="text-zinc-700 text-lg font-black italic tracking-tighter">01</span>
//                             <div>
//                                 <h3 className="text-white text-xl font-bold uppercase tracking-tight group-hover:text-indigo-400 transition-colors duration-300">
//                                     Data-Driven Strategy
//                                 </h3>
//                                 <p className="text-zinc-500 text-sm font-light leading-relaxed mt-2 border-l border-zinc-800 pl-4 group-hover:border-indigo-500/50 transition-all">
//                                     We identify hidden leakages in your current funnel by analyzing 20+ performance metrics across your entire ecosystem.
//                                 </p>
//                             </div>
//                         </div>

//                         <div className="group flex gap-6">
//                             <span className="text-zinc-700 text-lg font-black italic tracking-tighter">02</span>
//                             <div>
//                                 <h3 className="text-white text-xl font-bold uppercase tracking-tight group-hover:text-indigo-400 transition-colors duration-300">
//                                     Instant Projections
//                                 </h3>
//                                 <p className="text-zinc-500 text-sm font-light leading-relaxed mt-2 border-l border-zinc-800 pl-4 group-hover:border-indigo-500/50 transition-all">
//                                     Use our proprietary modeling tool to visualize exactly how our optimization impacts your revenue growth.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* RIGHT CONTENT: The Greyish Calculator */}
//                 <div className="w-full lg:w-[45%] flex justify-center lg:justify-end">
//                     <div className="w-full max-w-lg transform lg:hover:scale-[1.02] transition-transform duration-700 ease-out shadow-[0_0_80px_rgba(0,0,0,0.5)]">
//                         <ROICalculator />
//                     </div>
//                 </div>

//             </div>

//             {/* Simple CSS for the outline text effect */}
//             <style jsx>{`
//                 .outline-text {
//                     -webkit-text-stroke: 1px #27272a;
//                     color: transparent;
//                 }
//             `}</style>
//         </section>
//     );
// };

// export default ROIPage;