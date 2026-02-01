import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import YouTube from "react-youtube";

export default function CaseStudiesHero() {
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
            <section className="min-h-[80vh] text-white flex items-center px-6 md:px-16">
                <div
                    ref={heroRef}
                    className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-12"
                >
                    {/* LEFT CONTENT */}
                    <div className="flex flex-col gap-6 md:w-1/2 px-20">
                        <span className="inline-block w-fit rounded-full  font-questrial px-4 py-1 text-[14px] text-white/70">
                           Case Studies
                        </span>
                        <h1 className="text-6xl md:text-8xl font-light leading-tight font-questrial">
                            Success  <br />
                            <span className="text-white/60">Stories.</span>
                        </h1>
                        <p className="text-white/70 max-w-md font-questrial text-xl">
                            Trusted by 300+ clients
                        </p>
                    </div>

                    {/* RIGHT VIDEO PREVIEW - Listeners moved here */}
                    <div
                        className="md:w-1/2 w-full relative group cursor-pointer"
                        onMouseEnter={() => videoRef.current?.play()}
                        onMouseLeave={() => videoRef.current?.pause()}
                        onClick={() => setOpen(true)}
                    >
                        <video
                            ref={videoRef}
                            src="/preview.mp4"
                            muted
                            loop
                            playsInline
                            preload="auto"
                            className="rounded-xl w-full object-cover "
                        />

                        {/* Hover Overlay - Added pointer-events-none so it doesn't block clicks */}
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center pointer-events-none">
                            {/* Animated Container */}
                            <div className="transform scale-90 group-hover:scale-100 transition-transform duration-500 ease-out">
                                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-8 py-4 rounded-full shadow-2xl">

                                    {/* Text */}
                                    <span className="font-questrial text-white font-medium tracking-wide uppercase text-sm">
                                        Success Stories
                                    </span>

                                    {/* Play Icon Circle */}
                                    <div className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center pl-1 shadow-lg">
                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="w-5 h-5"
                                        >
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* MODAL */}
            {open && (
                <div
                    className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-10"
                    onKeyDown={(e) => e.key === 'Escape' && setOpen(false)}
                >
                    {/* Backdrop with a deeper blur and fade-in */}
                    <div
                        className="absolute inset-0 bg-black/95 backdrop-blur-xl transition-opacity duration-500"
                        onClick={() => setOpen(false)}
                    />

                    {/* Modal Container */}
                    <div className="relative w-full max-w-6xl aspect-video rounded-2xl overflow-hidden shadow-[0_0_50px_-12px_rgba(255,255,255,0.2)] border border-white/10 bg-black">

                        {/* Close Button - Moved inside for a cleaner mobile look or top-right */}
                        <button
                            className="absolute top-4 right-4 z-110 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white/70 hover:text-white cursor-pointer hover:bg-white/10 transition-all border border-white/10 backdrop-blur-md"
                            onClick={() => setOpen(false)}
                        >
                            <span className="text-xl">✕</span>
                        </button>

                        {/* YouTube Wrapper */}
                        <div className="w-full h-full">
                            <YouTube
                                videoId="e7bAynmPDJs"
                                className="w-full h-full"
                                iframeClassName="w-full h-full" // v4 Tailwind might need this for the actual iframe
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