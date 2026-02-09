import React from 'react';

const CompanyTray = () => {
    // Array of image numbers (1.png through 10.png)
    const logos = Array.from({ length: 11 }, (_, i) => `/companies/${i + 1}.png`);

    // Double the array for a seamless infinite loop
    const displayLogos = [...logos, ...logos];

    return (
        <div className=" overflow-hidden py-10">
            {/* Styles for the custom animation */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes tray-scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-tray-scroll {
                    animation: tray-scroll 30s linear infinite;
                }
            `}} />

            <div className="max-w-7xl mx-auto px-6 text-left">
                <h2 className="text-white/40 text-sm font-bold tracking-wider mb-6">
                We've set meetings with
                </h2>
            </div>

            {/* The Tray Container */}
            <div className="relative flex items-center">
                {/* Left & Right Side Blurs for "Fade" effect */}
                <div className="absolute inset-y-0 left-0 w-[15%] bg-gradient-to-r from-black to-transparent z-10"></div>
                <div className="absolute inset-y-0 right-0 w-[15%] bg-gradient-to-l from-black to-transparent z-10"></div>

                {/* Scrolling Track */}
                <div className="flex animate-tray-scroll whitespace-nowrap gap-6 w-max">
                    {displayLogos.map((src, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center px-10 py-4 min-w-[200px] 
                                     transition-all duration-300 
                                     group cursor-pointer"
                        >
                            <img
                                src={src}
                                alt={`Partner logo ${index}`}
                                className="h-15 w-auto object-contain  group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 filter grayscale group-hover:grayscale-0"
                                // Adding error handling in case an image is missing
                                onError={(e) => e.target.style.display = 'none'}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CompanyTray;