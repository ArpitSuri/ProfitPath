import ROICalculator from "./ROICalculator";

import React from 'react'

const ROIComponent= () => {
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

export default ROIComponent
