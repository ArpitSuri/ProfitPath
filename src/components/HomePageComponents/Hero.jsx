import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import YouTube from "react-youtube";
import { Check, ArrowRight } from "lucide-react";
import InstantQuoteButton from "./InstantQuoteButton";

export default function Hero() {
    const heroRef = useRef(null);
    const videoRef = useRef(null);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (heroRef.current) {
            gsap.fromTo(
                heroRef.current.children,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.9,
                    stagger: 0.15,
                    ease: "power3.out",
                }
            );
        }
    }, []);

    return (
        <>
            <section className="min-h-screen bg-black text-white flex items-center pt-24 pb-12 px-6 md:px-16 overflow-hidden">
                <div
                    ref={heroRef}
                    className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-10 lg:gap-16"
                >
                    {/* LEFT CONTENT */}
                    <div className="flex flex-col gap-6 w-full md:w-1/2 items-center text-center md:items-start md:text-left">
                        {/* 1. Stat Badge: Glassmorphism look */}
                        <span className="rounded-full border border-white/10 px-5 py-2 text-[10px] md:text-xs text-white/80 tracking-[0.2em] uppercase flex items-center justify-center gap-3 bg-white/5 backdrop-blur-sm shadow-xl">
                            <div className="flex items-center justify-center h-5 w-5 rounded-full bg-emerald-400">
                                <Check className="h-3 w-3 text-black stroke-3" />
                            </div>
                            <span className="font-questrial">
                                £41m attributed revenue <span className="mx-2 opacity-30">•</span> 31k meetings
                            </span>
                        </span>

                        {/* 2. Main Heading: High-end Typography */}
                        <h1 className="text-5xl sm:text-6xl lg:text-6xl font-extrabold leading-[1.05] font-questrial tracking-tight text-white">
                            Connecting You <br/> With <br />
                            <span className="inline-block mt-4 border border-white/40 py-2 px-6 rounded-3xl font-light bg-white/10 backdrop-blur-md text-white">
                                Your Dream Clients
                            </span>
                        </h1>

                        {/* 3. Description: Better legibility */}
                        <p className="text-white/50 max-w-lg font-questrial text-lg md:text-xl leading-relaxed">
                            At <span className="text-white font-medium">ProfitPath</span>, we use premium outbound outreach to book decision makers directly onto your team's calendar.
                        </p>

                        {/* 4. CTA Group: Primary & Secondary hierarchy */}
                        <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto pt-4">
                            {/* Primary Call to Action */}
                            <button className="group bg-white text-black px-10 py-5 font-questrial rounded-full font-black transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-105 active:scale-95 cursor-pointer text-sm  tracking-widest flex items-center justify-center gap-2">
                                Schedule a Call
                                <ArrowRight className="w-4 h-4 group-hover:tranzinc-x-1 transition-transform" />
                            </button>

                            {/* Secondary Call to Action */}
                            <InstantQuoteButton />
                        </div>
                    </div>

                    {/* RIGHT VIDEO PREVIEW */}
                    <div
                        className="w-full md:w-1/2 relative group cursor-pointer aspect-video md:aspect-auto"
                        onMouseEnter={() => videoRef.current?.play()}
                        onMouseLeave={() => videoRef.current?.pause()}
                        onClick={() => setOpen(true)}
                    >
                        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-2xl">
                            <video
                                ref={videoRef}
                                src="/preview.mp4"
                                muted
                                loop
                                playsInline
                                preload="auto"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/40 opacity-100 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center pointer-events-none">
                                <div className="transform tranzinc-y-4 group-hover:tranzinc-y-0 transition-all duration-500 ease-out">
                                    <div className="flex items-center gap-4 bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-3 rounded-full">
                                        <span className="font-questrial text-white font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs">
                                            Play Success Story
                                        </span>
                                        <div className="w-8 h-8 md:w-10 md:h-10 bg-white text-black rounded-full flex items-center justify-center pl-1 shadow-lg">
                                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 md:w-5 md:h-5">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative background glow for the video */}
                        <div className="absolute -inset-4 bg-white/5 blur-3xl rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    </div>
                </div>
            </section>

            {/* MODAL */}
            {open && (
                <div
                    className="fixed inset-0 z-200 flex items-center justify-center p-4"
                    onKeyDown={(e) => e.key === 'Escape' && setOpen(false)}
                >
                    <div
                        className="absolute inset-0 bg-black/95 backdrop-blur-2xl transition-opacity animate-in fade-in duration-500"
                        onClick={() => setOpen(false)}
                    />

                    <div className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black scale-in animate-in zoom-in-95 duration-300">
                        <button
                            className="absolute top-4 right-4 z-210 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white/70 hover:text-white cursor-pointer hover:bg-white/10 transition-all border border-white/10 backdrop-blur-md"
                            onClick={() => setOpen(false)}
                        >
                            ✕
                        </button>

                        <div className="w-full h-full">
                            <YouTube
                                videoId="wDchsz8nmbo"
                                className="w-full h-full"
                                iframeClassName="w-full h-full"
                                opts={{
                                    width: "100%",
                                    height: "100%",
                                    playerVars: {
                                        autoplay: 1,
                                        rel: 0,
                                        modestbranding: 1,
                                    },
                                }}
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}