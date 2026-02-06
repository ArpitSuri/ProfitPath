import React from 'react';
import { Globe, Coffee, BookOpen, Heart, Laptop } from 'lucide-react';

const PerksSection = () => {
    const perks = [
        {
            icon: <Globe size={24} />,
            title: "Remote First"
        },
        {
            icon: <Laptop size={24} />,
            title: "Work Station"
        },
        {
            icon: <BookOpen size={24} />,
            title: "Edu Budget"
        },
        {
            icon: <Coffee size={24} />,
            title: "Deep Work"
        },
        {
            icon: <Heart size={24} />,
            title: "Wellness"
        }
    ];

    return (
        <section className="w-full  text-white py-24 px-6 md:px-12 flex flex-col items-center">
            <div className="w-full max-w-7xl">

                {/* HEADING & SUBHEADING */}
                <div className="mb-20 space-y-4">
                    <h2 className="text-5xl md:text-7xl font-black  tracking-wider leading-[0.9]">
                        Our Perks <br />
                    </h2>
                    <p className="text-zinc-500 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
                        At our digital marketing agency, we believe that taking care of our employees is essential to delivering exceptional results to our clients. That's why we offer a range of perks and benefits that make working with us a truly rewarding experience.
                    </p>
                </div>

                {/* 5 CARDS IN SAME LINE */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {perks.map((perk, index) => (
                        <div
                            key={index}
                            className="group relative flex flex-col items-center justify-between p-8 h-64 rounded-[2rem] border border-white/5 bg-zinc-900/20 transition-all duration-500 hover:bg-zinc-800/40 hover:border-white/20"
                        >
                            {/* Icon at Top */}
                            <div className="w-20 h-20 rounded-2xl bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-600 group-hover:text-white group-hover:border-white/20 transition-all duration-500">
                                {perk.icon}
                            </div>

                            {/* Text Heading at Bottom */}
                            <h3 className="text-lg font-black  tracking-wider text-zinc-500 group-hover:text-white transition-colors text-center">
                                {perk.title}
                            </h3>

                            {/* Background Glow */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/[0.03] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem]"></div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default PerksSection;