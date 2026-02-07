import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import YouTube from "react-youtube";
import { Check, ArrowRight } from "lucide-react";
// import InstantQuoteButton from "./InstantQuoteButton";

export default function Hero() {
    const heroRef = useRef(null);
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
            <section className="min-h-screen text-white flex items-center pt-24 pb-12 px-6 md:px-12 lg:px-16 overflow-hidden">
                <div
                    ref={heroRef}
                    className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-12 lg:gap-16"
                >
                    {/* LEFT CONTENT */}
                    <div className="flex flex-col gap-6 w-full md:w-3/5 items-center text-center md:items-start md:text-left">
                        {/* 1. Stat Badge */}
                        <span className="rounded-full border border-white/10 px-5 py-2 text-[10px] md:text-xs text-white/80 tracking-[0.2em] uppercase flex items-center justify-center gap-3 bg-white/5 backdrop-blur-sm shadow-xl w-fit">
                            <div className="flex items-center justify-center h-5 w-5 rounded-full bg-emerald-400">
                                <Check className="h-3 w-3 text-black stroke-3" />
                            </div>
                            <span className="font-questrial">
                                $41m attributed revenue <span className="mx-2 opacity-30">•</span> 31k meetings
                            </span>
                        </span>

                        {/* 2. Main Heading */}
                        <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-7xl font-extrabold leading-[1.1] font-questrial tracking-tight text-white">
                            Accelerating Your Pipeline<br className="hidden md:block" /> To <br />
                            <span className="inline-block mt-4 border border-white/40 py-2 px-6 rounded-3xl font-light bg-white/10 backdrop-blur-md text-white whitespace-nowrap">
                                Premium Partnerships.
                            </span>
                        </h1>

                        {/* 3. Description */}
                        <p className="text-white/50 max-w-lg font-questrial text-base md:text-lg lg:text-xl leading-relaxed">
                            At <span className="text-white font-medium">ProfitPath</span>, we use premium outbound outreach to book decision makers directly onto your team's calendar.
                        </p>

                        {/* 4. CTA Group */}
                        <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto pt-4">
                            <button className="group bg-white text-black px-8 lg:px-10 py-4 lg:py-5 font-questrial rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-105 font-bold active:scale-95 cursor-pointer tracking-widest flex items-center justify-center gap-2 text-sm lg:text-base">
                                Schedule a Call
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>

                    {/* RIGHT SIDE: PLATFORM RATINGS */}
                    <div className="w-full md:w-2/5 flex flex-col sm:flex-row md:flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8 relative">

                        {/* Platform Card 1 */}
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center gap-4 p-6 lg:p-8 rounded-[2rem] transition-all duration-500 group animate-float cursor-pointer bg-white/5 border border-white/5 md:w-full lg:w-auto"
                        >
                            <div className="h-10 w-28 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                                <img
                                    src="/clutch.svg"
                                    alt="Clutch"
                                    className="w-full h-full object-contain brightness-0 invert"
                                />
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white group-hover:scale-110 transition-transform">
                                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">Top Rated Agency</p>
                            </div>
                        </a>

                        {/* Platform Card 2 */}
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center gap-4 p-6 lg:p-8 rounded-[2rem] transition-all duration-500 group animate-float-delayed lg:mt-12 cursor-pointer bg-white/5 border border-white/5 md:w-full lg:w-auto"
                        >
                            {/* Simplified Logo Placeholder for Demo */}
                            <div className="h-10 w-28 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity text-sm font-bold tracking-tighter">
                                <svg xmlns="http://www.w3.org/2000/svg" width="150" height="30" fill="none" viewBox="0 0 160 31" className="brightness-0 invert">
                                    <path d="M43.312 22.642c-1.258 0-2.432-.226-3.493-.665a7.89 7.89 0 0 1-2.771-1.923c-.778-.849-1.4-1.881-1.838-3.083-.438-1.216-.651-2.588-.651-4.129 0-2.036.368-3.776 1.117-5.232.735-1.456 1.768-2.588 3.083-3.38s2.828-1.188 4.553-1.188c2.22 0 3.988.509 5.303 1.541s2.22 2.446 2.701 4.27l-2.772.481c-.382-1.131-1.004-2.022-1.852-2.701-.848-.665-1.923-1.018-3.224-1.018-1.329-.014-2.446.283-3.323.891-.891.608-1.555 1.442-1.994 2.531s-.679 2.347-.679 3.79c-.014 1.442.212 2.701.651 3.775s1.117 1.923 2.008 2.517c.891.608 2.008.905 3.337.919 1.075.014 1.994-.184 2.771-.594s1.386-1.018 1.838-1.824.749-1.782.877-2.955h-3.662v-2.206h6.561l.042.622.014.495c0 1.739-.339 3.295-1.004 4.666a7.69 7.69 0 0 1-2.927 3.224c-1.287.778-2.842 1.174-4.666 1.174zm16.828 0c-1.414 0-2.644-.325-3.677-.962s-1.838-1.513-2.404-2.63-.848-2.418-.848-3.874c0-1.471.283-2.772.863-3.889s1.386-1.994 2.418-2.616 2.248-.933 3.634-.933c1.414 0 2.644.325 3.676.962a6.46 6.46 0 0 1 2.404 2.63c.566 1.117.849 2.404.849 3.86 0 1.471-.283 2.772-.863 3.889a6.39 6.39 0 0 1-2.418 2.63c-1.004.622-2.234.933-3.634.933zm0-2.574c1.358 0 2.361-.453 3.026-1.372.665-.905 1.004-2.093 1.004-3.521 0-1.471-.339-2.658-1.018-3.535-.679-.891-1.683-1.329-3.012-1.329-.919 0-1.669.212-2.262.622s-1.032.99-1.315 1.711-.438 1.57-.438 2.531c0 1.485.339 2.673 1.018 3.563.679.877 1.683 1.329 2.998 1.329zm15.427 2.574c-1.414 0-2.644-.325-3.677-.962s-1.838-1.513-2.404-2.63-.848-2.418-.848-3.874c0-1.471.283-2.772.863-3.889s1.386-1.994 2.418-2.616 2.248-.933 3.634-.933c1.414 0 2.644.325 3.676.962a6.46 6.46 0 0 1 2.404 2.63c.566 1.117.849 2.404.849 3.86 0 1.471-.283 2.772-.863 3.889a6.39 6.39 0 0 1-2.418 2.63c-1.018.622-2.234.933-3.634.933zm0-2.574c1.357 0 2.361-.453 3.026-1.372.665-.905 1.004-2.093 1.004-3.521 0-1.471-.339-2.658-1.018-3.535-.679-.891-1.683-1.329-3.012-1.329-.919 0-1.669.212-2.262.622s-1.032.99-1.315 1.711-.438 1.57-.438 2.531c0 1.485.339 2.673 1.018 3.563.679.877 1.669 1.329 2.998 1.329zm14.89 2.574c-1.315 0-2.446-.325-3.408-.976s-1.697-1.541-2.206-2.672c-.523-1.131-.778-2.404-.778-3.818s.255-2.687.792-3.818c.523-1.117 1.273-2.008 2.234-2.658s2.107-.976 3.436-.976 2.46.325 3.365.976 1.598 1.541 2.064 2.658c.467 1.131.693 2.39.693 3.804s-.24 2.687-.707 3.804-1.159 2.022-2.079 2.673c-.919.679-2.05 1.004-3.408 1.004zm.382-2.475c.905 0 1.626-.212 2.192-.636s.976-1.018 1.244-1.768.396-1.612.396-2.588-.127-1.838-.396-2.588-.679-1.329-1.23-1.753-1.258-.622-2.107-.622c-.905 0-1.654.226-2.234.665s-1.018 1.046-1.301 1.796-.424 1.584-.424 2.517.141 1.782.424 2.531.707 1.358 1.287 1.796c.551.424 1.273.651 2.149.651zm3.832 2.079V12.079h-.311V3.411h2.743v18.835h-2.432zm4.525-11.92V8.12h8.64v2.206h-8.64zm2.347 11.92V7.625l.043-1.145a4.96 4.96 0 0 1 .226-1.202 2.94 2.94 0 0 1 .636-1.089 3.11 3.11 0 0 1 1.174-.834c.424-.17.848-.269 1.272-.283l1.174-.042h1.782v2.248h-1.655c-.65 0-1.131.156-1.442.481-.325.325-.481.764-.481 1.357V22.26h-2.729v-.014zm9.05-16.445V3.156h2.729V5.8h-2.729zm0 16.445V8.12h2.729v14.126h-2.729zm6.137 0V8.12h2.432v3.422l-.339-.438c.169-.453.396-.877.679-1.244a3.99 3.99 0 0 1 .961-.933 4.19 4.19 0 0 1 1.202-.608c.438-.141.891-.226 1.358-.269.466-.028.905 0 1.329.071v2.559c-.467-.127-.976-.156-1.542-.099s-1.074.226-1.555.537c-.438.283-.792.636-1.046 1.046a4.35 4.35 0 0 0-.552 1.372c-.113.495-.17 1.032-.17 1.584v7.127h-2.757zm9.573 0V8.12h2.432v4.087h.311v10.04h-2.743zm8.47 0l.014-8.753c0-1.032-.254-1.838-.777-2.418s-1.216-.877-2.093-.877c-.863 0-1.556.297-2.093.891-.523.594-.792 1.372-.792 2.333l-1.301-.834c0-.919.227-1.753.665-2.475a4.68 4.68 0 0 1 1.81-1.711c.764-.424 1.612-.622 2.574-.622 1.003 0 1.852.212 2.559.636a4.15 4.15 0 0 1 1.612 1.768c.368.764.551 1.64.551 2.644l-.014 9.432h-2.715v-.014zm8.456 0l.014-8.81c0-1.018-.254-1.81-.777-2.39-.523-.566-1.216-.863-2.065-.863-.523 0-1.004.113-1.428.353-.438.24-.778.594-1.046 1.075s-.396 1.075-.396 1.782l-1.315-.665c-.014-.99.198-1.867.636-2.616a4.61 4.61 0 0 1 1.796-1.739c.763-.41 1.612-.622 2.545-.622 1.527 0 2.701.452 3.549 1.372.835.919 1.259 2.135 1.259 3.648l-.014 9.46h-2.758v.014zm11.03.382c-1.711 0-3.111-.382-4.2-1.131-1.074-.764-1.739-1.824-1.994-3.21l2.8-.438c.17.735.58 1.315 1.216 1.739s1.414.636 2.362.636c.848 0 1.527-.17 2.008-.523s.721-.834.721-1.442c0-.353-.085-.65-.255-.877s-.523-.438-1.06-.636-1.372-.453-2.475-.75c-1.216-.311-2.177-.65-2.884-1.018s-1.217-.778-1.513-1.273c-.297-.481-.453-1.075-.453-1.754 0-.848.226-1.598.679-2.234s1.089-1.131 1.923-1.485c.82-.354 1.796-.523 2.899-.523 1.074 0 2.05.17 2.884.509.849.339 1.528.82 2.051 1.442s.834 1.358.947 2.192l-2.8.509a2.3 2.3 0 0 0-.961-1.612c-.538-.396-1.245-.608-2.107-.636-.834-.028-1.499.099-2.008.41s-.778.735-.778 1.273c0 .311.099.58.297.792s.58.424 1.145.622 1.4.438 2.517.721c1.188.311 2.122.636 2.829 1.018.692.368 1.202.806 1.499 1.315s.452 1.131.452 1.852c0 1.4-.509 2.489-1.527 3.281-1.018.834-2.418 1.23-4.214 1.23z" fill="#171923"></path>
                                    <path d="M0 7.356h13.179 13.179V2.817c0-1.555-1.259-2.814-2.814-2.814L13.179.257C10.591.257 2.814.003 2.814.003 1.259.003 0 1.261 0 2.817v4.539z" fill="#dbb879"></path>
                                    <path d="M3.493 25.654l4.681 3.422a8.51 8.51 0 0 0 10.026 0l4.681-3.422c2.192-1.598 3.493-4.143 3.493-6.858V2.704c0-1.555-1.273-2.772-2.814-2.701l-2.107.24c-5.487.622-11.03.622-16.516 0L2.814.003A2.7 2.7 0 0 0 0 2.704v16.078c0 2.715 1.301 5.274 3.493 6.872z" fill="url(#GF_Gradient)"></path>
                                    <g opacity=".2"><path d="M18.684 12.645l-2.446 2.39.58 3.365c.028.141-.042.297-.156.382-.071.057-.155.071-.226.071-.057 0-.127-.014-.184-.042l-3.026-1.584-3.04 1.584a.39.39 0 0 1-.41-.028c-.127-.085-.184-.24-.156-.382l.58-3.365-2.446-2.39c-.113-.099-.141-.255-.099-.396s.17-.24.311-.269l3.38-.495 1.513-3.069c.127-.269.566-.269.707 0l1.513 3.069 3.38.495c.141.028.269.127.311.269a.37.37 0 0 1-.085.396z" fill="#000"></path></g>
                                    <path d="M18.684 12.079l-2.446 2.39.58 3.365c.028.141-.042.297-.156.382-.071.057-.155.071-.226.071-.057 0-.127-.014-.184-.042l-3.026-1.584-3.04 1.584a.39.39 0 0 1-.41-.028c-.127-.085-.184-.24-.156-.382l.58-3.365-2.446-2.39c-.113-.099-.141-.255-.099-.396s.17-.24.311-.269l3.38-.495 1.513-3.068c.127-.269.566-.269.707 0l1.513 3.068 3.38.495c.141.028.269.127.311.269a.37.37 0 0 1-.085.396z" fill="#fff"></path>
                                    <defs>
                                        <linearGradient id="GF_Gradient" x1="0" y1="15.353" x2="26.366" y2="15.353" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#dcb45a"></stop>
                                            <stop offset=".15" stop-color="#cfa84f"></stop>
                                            <stop offset=".426" stop-color="#ad8733"></stop>
                                            <stop offset=".5" stop-color="#a37d2b"></stop>
                                            <stop offset=".583" stop-color="#ad8634"></stop>
                                            <stop offset=".844" stop-color="#c69f4a"></stop>
                                            <stop offset="1" stop-color="#d0a853"></stop>
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white group-hover:scale-110 transition-transform">
                                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">Verified Partner</p>
                            </div>
                        </a>

                        {/* Background Glow */}
                        <div className="absolute -z-10 w-64 h-64 bg-emerald-500/10 blur-[120px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    </div>
                </div>
            </section>
        </>
    );
}