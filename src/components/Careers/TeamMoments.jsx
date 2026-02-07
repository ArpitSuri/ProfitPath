import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TeamMoments = () => {
    const scrollRef = useRef(null);

    const eventImages = [
        { id: 1, url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop", title: "Global Summit" },
        { id: 2, url: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2070&auto=format&fit=crop", title: "Strategy Workshop" },
        { id: 3, url: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2070&auto=format&fit=crop", title: "Innovation Lab" },
        { id: 4, url: "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?q=80&w=2070&auto=format&fit=crop", title: "Team Retreat" },
        { id: 5, url: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=2070&auto=format&fit=crop", title: "Quarterly Review" },
        { id: 6, url: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop", title: "Hiring Mixer" },
        { id: 7, url: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop", title: "Culture Day" },
        { id: 8, url: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=2070&auto=format&fit=crop", title: "Tech Conf" },
        { id: 9, url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop", title: "Launch Party" },
        { id: 10, url: "https://images.unsplash.com/photo-1531050171654-2062217bb7e7?q=80&w=2070&auto=format&fit=crop", title: "Networking" },
    ];

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const offset = direction === 'left' ? -clientWidth / 2 : clientWidth / 2;
            scrollRef.current.scrollTo({ left: scrollLeft + offset, behavior: 'smooth' });
        }
    };

    return (
        <section className="w-full  text-white px-6 md:px-12">
            <div className="max-w-7xl mx-auto">

                {/* Carousel Container */}
                <div className="relative group">
                    <div
                        ref={scrollRef}
                        className="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-12"
                    >
                        {eventImages.map((image) => (
                            <div
                                key={image.id}
                                className="min-w-[70vw] md:min-w-[450px] aspect-video md:aspect-[4/3] snap-start relative overflow-hidden rounded-[2rem] border border-white/10 group/item"
                            >
                                <img
                                    src={image.url}
                                    alt={image.title}
                                    className="w-full h-full object-cover grayscale brightness-50 group-hover/item:grayscale-0 group-hover/item:brightness-100 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-500 flex items-end p-8">
                                    <p className="text-xs font-black  tracking-wider">{image.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Controls */}
                    <div className="hidden md:flex justify-center gap-4 mt-8">
                        <button
                            onClick={() => scroll('left')}
                            className="p-5 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all duration-300 active:scale-90"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="p-5 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all duration-300 active:scale-90"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
        </section>
    );
};

export default TeamMoments;