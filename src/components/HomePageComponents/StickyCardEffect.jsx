import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ROICalculator from '../ROICalculator';
import TalkToUsButton from './TalkToUs';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const cards = [
    {
        id: 1,
        bgColor: "#000",
        renderContent: () => (
            <div className="w-full max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* LEFT SIDE: Heading & Subheading */}
                <div className="flex flex-col space-y-6 text-center lg:text-left items-center lg:items-start">
                    <h2 className="text-5xl md:text-7xl lg:text-6xl font-black text-white leading-none tracking-wider">
                        We open more <br className="hidden lg:block" /> doors.
                    </h2>
                    <p className="text-lg md:text-xl lg:text-2xl text-zinc-400 max-w-md leading-relaxed">
                        Building the future of digital experiences through precision,
                        innovation, and world-class engineering.
                    </p>
                </div>

                {/* RIGHT SIDE: Grid of Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    {[
                        {
                            icon: "🎨", title: "No more missed opportunities.", desc: "Without a steady stream of leads, it’s impossible to gain momentum. Flowd keeps your funnel flowing." },
                        { icon: "⚡", title: "Your team just got two-thirds bigger.", desc: "Our outreach specialists become an extension of your team. You focus on closing." },
                        { icon: "🛡️", title: "Save time. Close faster.", desc: "Flowd doesn’t just toss leads over the fence—we nurture them until the sales meeting." },
                        { icon: "📱", title: "Right people, right time.", desc: "Flowd’s database of half a billion data points holds the leads you need to grow." },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="flex flex-col items-center lg:items-start p-6 md:p-8 
             bg-linear-to-br from-white/10 to-white/[0.02] 
             backdrop-blur-xl border border-white/20 
             rounded-3xl hover:border-white/40 hover:bg-white/10 
             transition-all duration-500 group shadow-2xl 
             text-center lg:text-left"
                        >
                            {/* Icon Container with Glass Effect */}
                            <div className="text-2xl mb-6 flex items-center justify-center 
                  w-14 h-14 rounded-2xl bg-white/10 border border-white/10 
                  group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300">
                                {item.icon}
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                                {item.title}
                            </h3>

                            <p className="text-sm md:text-base text-zinc-400 leading-relaxed font-questrial">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        )
    },
    {
        id: 2,
        bgColor: "#000",
        renderContent: () => (
            <div className="w-full max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* LEFT SIDE: Heading, Subheading, and CTA */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                    <h2 className="text-5xl md:text-7xl lg:text-6xl font-black text-white leading-tight tracking-wider ">
                        You close more <br className="hidden lg:block" />  deals.
                    </h2>
                    <p className="text-lg md:text-xl lg:text-xl text-purple-200/70 mt-6 max-w-md font-light">
                        With over a decade of expertise, we’re outbound obsessed.

                        Fill your pipeline with consistent, precision-targeted leads.
                    </p>
                    <TalkToUsButton  />
                </div>

                {/* RIGHT SIDE: Styled List Items */}
                <div className="flex flex-col gap-4 md:gap-6 w-full">
                    {[
                        { title: "Find them through Flowd.", desc: "We use our database to target key decision-makers with the authority and budget to act with 94% of sales meetings sat." },
                        { title: "Our experts, your experts.", desc: "Sales prospecting needs specialist skills many in-house teams lack. Flowd provides expert support with decades of combined sales experience." },
                        { title: "We open, you close.", desc: "ISalespeople spend only 34% of their time selling. Flowd delivers high-quality, ready-to-close leads straight into your CRM, freeing up time to close more deals." },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="group flex flex-col sm:flex-row items-center sm:items-start gap-4 p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl md:rounded-[2rem] transition-all duration-300 hover:bg-white/10 hover:border-white/30 lg:hover:tranzinc-x-2 text-center sm:text-left"
                        >
                            <div className="shrink-0 w-6 h-6 rounded-xl bg-emerald-400 flex items-center justify-center shadow-[0_0_20px_rgba(52,211,153,0.3)] group-hover:scale-110 transition-transform">
                                <svg className="w-5 h-5 text-emerald-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{item.title}</h3>
                                <p className="text-base md:text-lg text-purple-100/60 leading-relaxed font-light">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    },
    {
        id: 3,
        bgColor: "#000",
        renderContent: () => (
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
        )
    },
    {
        id: 4,
        bgColor: "#000",
        renderContent: () => (
            <div className="w-full max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* LEFT SIDE */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                    <h2 className="text-5xl md:text-7xl lg:text-6xl font-black text-white leading-tight tracking-wider  mb-10">
                        We secure <br /> sales meetings.
                    </h2>

                    <div className="space-y-4 md:space-y-6 w-full">
                        {[
                            { label: "Revenue Growth", value: "+140%", detail: "Avg increase." },
                            { label: "User Retention", value: "85%", detail: "Engagement." },
                            { label: "Market Reach", value: "24", detail: "Global territories." },
                        ].map((item, i) => (
                            <button
                                key={i}
                                className="group w-full flex items-center justify-between p-5 md:p-6 
                 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl 
                 hover:bg-white/10 hover:border-white/30 transition-all duration-300 
                 cursor-pointer text-left"
                            >
                                {/* Left Side: Labels & Stats */}
                                <div className="flex flex-col border-l-2 border-white/20 pl-6 group-hover:border-white transition-colors">
                                    <span className="text-white/50  tracking-wider text-[15px] md:text-lg mb-1">
                                        {item.label}
                                    </span>
                                    <div className="flex items-baseline gap-3">
                                        <span className="text-2xl md:text-3xl text-white font-bold tracking-tight">
                                            {item.value}
                                        </span>
                                        <span className="text-xs md:text-sm text-white/40 font-light italic">
                                            {item.detail}
                                        </span>
                                    </div>
                                </div>

                                {/* Right Side: Animated Arrow Button */}
                                <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 
                    rounded-full bg-white/10 border border-white/10 
                    group-hover:bg-white group-hover:text-black transition-all duration-500">
                                    <ArrowRight
                                        className="w-5 h-5 transition-transform duration-500 ease-in-out group-hover:-rotate-45"
                                    />
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="flex flex-col items-center lg:items-end gap-8 w-full">
                    <TalkToUsButton />

                    <div className="relative w-full aspect-video sm:aspect-[4/3] bg-zinc-900 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl group">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                        <div className="w-full h-full flex items-center justify-center">
                            <div className="text-white/10 text-7xl md:text-9xl font-black group-hover:scale-110 transition-transform duration-700">UI</div>
                        </div>
                        <div className="absolute bottom-0 inset-x-0 p-4 md:p-8 bg-black/60 backdrop-blur-md border-t border-white/10">
                            <p className="text-white font-bold text-sm md:text-lg">Project Alpha: Transformation</p>
                            <p className="text-white/50 text-[10px] md:text-sm italic">Jan 2026</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
];

const StackingCards = () => {
    const containerRef = useRef(null);
    const cardsRef = useRef([]);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const cardElements = cardsRef.current;

            // Check if screen is Desktop (lg breakpoint is usually 1024px)
            const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

            cardElements.forEach((card, index) => {

                // ONLY PIN ON DESKTOP
                // On mobile, cards will just scroll naturally one after another
                if (isDesktop) {
                    ScrollTrigger.create({
                        trigger: card,
                        start: "top top",
                        pin: true,
                        pinSpacing: false,
                        endTrigger: containerRef.current,
                        end: "bottom bottom",
                        invalidateOnRefresh: true,
                    });

                    // Subtle scale-down effect for desktop
                    if (index < cardElements.length - 1) {
                        gsap.to(card, {
                            scrollTrigger: {
                                trigger: cardElements[index + 1],
                                start: "top bottom",
                                end: "top top",
                                scrub: true,
                            },
                            scale: 0.95,
                            opacity: 0.5,
                            ease: "none"
                        });
                    }
                } else {
                    // OPTIONAL: Mobile-only animation (like a simple fade-in)
                    gsap.fromTo(card,
                        { opacity: 0.8, scale: 0.98 },
                        {
                            opacity: 1,
                            scale: 1,
                            scrollTrigger: {
                                trigger: card,
                                start: "top 80%",
                                end: "top 20%",
                                scrub: true
                            }
                        }
                    );
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="relative w-full bg-black">
            {cards.map((card, index) => (
                <section
                    key={card.id}
                    ref={el => (cardsRef.current[index] = el)}
                    // Added: flex-col on mobile, overflow-visible to ensure no content is hidden
                    className="w-full min-h-screen lg:h-screen flex flex-col items-center justify-center overflow-visible py-12 md:py-20 lg:py-0 border-b border-white/5 lg:border-none"
                    style={{
                        backgroundColor: card.bgColor,
                        // Maintain stacking order only on desktop
                        zIndex: index + 1
                    }}
                >
                    {/* Inner wrapper: 
                        Removed h-full on mobile to allow content to dictate height.
                        Added px-4 for safety margin.
                    */}
                    <div className="w-full px-4 lg:h-full flex items-center justify-center">
                        {card.renderContent()}
                    </div>
                </section>
            ))}
        </div>
    );
};

export default StackingCards;

// const StackingCards = () => {


//     const containerRef = useRef(null);
//     const cardsRef = useRef([]);

//     useLayoutEffect(() => {
//         let ctx = gsap.context(() => {
//             const cardElements = cardsRef.current;

//             cardElements.forEach((card, index) => {
//                 // Determine if we are on mobile to adjust pinning behavior
//                 const isMobile = window.innerWidth < 1024;

//                 ScrollTrigger.create({
//                     trigger: card,
//                     start: "top top",
//                     // On mobile, if the content is taller than the screen, 
//                     // we don't want to pin it indefinitely or it will cut off.
//                     pin: true,
//                     pinSpacing: false,
//                     endTrigger: containerRef.current,
//                     end: "bottom bottom",
//                     invalidateOnRefresh: true,
//                 });

//                 // Subtle scale-down/fade effect for the card underneath
//                 if (index < cardElements.length - 1) {
//                     gsap.to(card, {
//                         scrollTrigger: {
//                             trigger: cardElements[index + 1],
//                             start: "top bottom",
//                             end: "top top",
//                             scrub: true,
//                         },
//                         scale: 0.95, // Slight scale for depth
//                         opacity: 0.5,
//                         ease: "none"
//                     });
//                 }
//             });
//         }, containerRef);

//         return () => ctx.revert(); // Clean up GSAP
//     }, []);

//     return (
//         <div ref={containerRef} className="relative w-full bg-black">
//             {cards.map((card, index) => (
//                 <section
//                     key={card.id}
//                     ref={el => (cardsRef.current[index] = el)}
//                     // CHANGED: h-screen to min-h-screen and added responsive padding
//                     className="w-full min-h-screen lg:h-screen flex items-center justify-center overflow-hidden py-16 md:py-20 lg:py-0"
//                     style={{
//                         backgroundColor: card.bgColor,
//                         zIndex: index + 1
//                     }}
//                 >
//                     {/* Inner wrapper to handle scrolling content if it exceeds height */}
//                     <div className="w-full h-full flex items-center justify-center overflow-y-auto lg:overflow-visible">
//                         {card.renderContent()}
//                     </div>
//                 </section>
//             ))}
//         </div>
//     );
// };

// export default StackingCards;