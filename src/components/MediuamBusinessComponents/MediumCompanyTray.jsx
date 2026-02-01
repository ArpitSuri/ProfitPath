import React from 'react';

const CompanyTray = () => {
    const companies = [
        "Google", "Amazon", "Meta", "Netflix", "Tesla",
        "Microsoft", "Apple", "Adobe", "Spotify", "Samsung"
    ];

    // We double the array to ensure a seamless infinite loop
    const displayLogos = [...companies, ...companies];

    return (
        <div className="bg-black py-5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6  text-left">
                <h2 className="text-white/40 text-sm font-bold tracking-[0.3em] uppercase mb-4">
                    trusted by
                </h2>
            </div>

            {/* The Tray Container with Perspective */}
            <div className="relative flex items-center">

                {/* Left & Right Gradient Blur (The "Edge" of the Tray) */}
                <div className="absolute inset-y-0 left-0 w-[10%] border-r bg-black z-10"></div>
                <div className="absolute inset-y-0 right-0 w-[20%] bg-linear-to-l from-zinc-950 to-transparent z-10"></div>

                {/* Scrolling Track */}
                <div className="flex animate-tray-scroll whitespace-nowrap gap-8">
                    {displayLogos.map((name, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center px-3 py-3 min-w-60 cursor-pointer group
                        "
                        >
                            {/* Logo Placeholder */}
                            <span className="text-xl font-black text-white/20 group-hover:text-white group-hover:scale-110 transition-all duration-300 tracking-tighter italic uppercase ">
                                {name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CompanyTray;