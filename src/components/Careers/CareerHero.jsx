import React from 'react';

const CareerHero = () => {
    const images = [
        {
            url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
            height: "h-40 md:h-80",
        },
        {
            url: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
            height: "h-48 md:h-64",
        },
        {
            url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
            height: "h-72 md:h-96",
        },
        {
            url: "https://images.unsplash.com/photo-1600880212319-474c3e2646c9?q=80&w=2070&auto=format&fit=crop",
            height: "h-56 md:h-72",
        }
    ];

    return (
        <section className="w-full text-white py-24 px-6 md:px-12 flex flex-col items-center overflow-hidden">
            <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center gap-16 lg:gap-8">

                {/* LEFT SIDE: Typography */}
                <div className="w-full lg:w-1/2 space-y-8">
                    <div className="inline-block px-3 py-1 text-[14px] font-black  tracking-wider text-zinc-400">
                        Careers
                    </div>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.85] tracking-wider ">
                        Join our <br />
                        <span className="text-zinc-700">Team.</span> <br />
                        
                    </h1>

                    
                </div>

                {/* RIGHT SIDE: Image Collage */}
                {/* <div className="w-full lg:w-1/2 flex gap-4 md:gap-6 justify-center lg:justify-end h-[600px]">

                    
                    <div className="flex flex-col gap-4 md:gap-6 self-center transform -translate-y-12">
                        <div className="w-60 md:w-56 h-72 md:h-96 rounded-2xl overflow-hidden border border-white/5 grayscale hover:grayscale-0 transition-all duration-700">
                            <img src={images[0].url} className="w-full h-full object-cover" alt="Team 1" />
                        </div>
                        <div className="w-40 md:w-56 h-48 md:h-64 rounded-2xl overflow-hidden border border-white/5 grayscale hover:grayscale-0 transition-all duration-700">
                            <img src={images[1].url} className="w-full h-full object-cover" alt="Team 2" />
                        </div>
                    </div>

                    
                    <div className="flex flex-col gap-4 md:gap-6 self-center transform translate-y-12">
                        <div className="w-40 md:w-56 h-48 md:h-64 rounded-2xl overflow-hidden border border-white/5 grayscale hover:grayscale-0 transition-all duration-700">
                            <img src={images[3].url} className="w-full h-full object-cover" alt="Team 3" />
                        </div>
                        <div className="w-40 md:w-56 h-72 md:h-96 rounded-2xl overflow-hidden border border-white/5 grayscale hover:grayscale-0 transition-all duration-700">
                            <img src={images[2].url} className="w-full h-full object-cover" alt="Team 4" />
                        </div>
                    </div>

                </div> */}

            </div>
        </section>
    );
};

export default CareerHero;