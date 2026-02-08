import React from 'react';

const Testimonials = () => {
    const reviews = [
        {
            name: "Michael Davidson",
            profession: "Founder, Arkbridge",
            location: "Beverly Hills, California",
            summary: "Their value, transparency, and expertise impress us.",
            rating: 5,
            review: "ProfitPath Growth Partners has helped the client achieve a 27% response rate to cold emails, book over 300 meetings, and generate 235,000 in net new revenue. Their support has also enabled the client to focus on actual revenue-generating activities. Moreover, the team is timely and transparent."
        },
        {
            name: "Sumit D",
            profession: "CEO, LeadsProspectr",
            location: "Texas, United States",
            summary: "The results they generated were impressive.",
            rating: 5,
            review: "Thanks to ProfitPath Growth Partners' work, the client made over $100,000. The team delivered the project ahead of time, and the client communicated with them via virtual meetings. Overall, the client was impressed with the results ProfitPath Growth Partners generated."
        },
        {
            name: "Don Wilson",
            profession: "CEO, Axlab Agency",
            location: "United States",
            summary: "The team was very knowledgeable and helpful.",
            rating: 5,
            review: "ProfitPath Growth Partners helped the client achieve 100% customer satisfaction, take on more end clients, and maintain a solid profit margin. The team was very professional and had minimal overhead. They also managed the project seamlessly, delivered on time, and responded promptly."
        },
        {
            name: "Ariful Asif",
            profession: "Founder, Data Enrichment Platform",
            location: "Paradise Valley, Arizona",
            summary: "ProfitPath Growth Partners are skilled in multi-channel marketing strategies so they just crushed it.",
            rating: 5,
            review: "ProfitPath Growth Partners successfully booked meetings, leaving the client fully satisfied with the engagement. The team was highly responsive, helpful, and punctual. Moreover, their expertise in B2B lead generation and multi-channel marketing strategies was commendable."
        },
        {
            name: "Zack Mera",
            profession: "CTO, AI Development Company",
            location: "Toronto, Ontario",
            summary: "They do great work all around.",
            rating: 5,
            review: "ProfitPath Growth Partners helps us generate a high-quality pipeline. Delivers on measurable ROI, scalability, and predictability in acquisition. The team delivers on time and is effective. Their ability to tailor messaging by industry stands out."
        },
        {
            name: "Ganes Thapa",
            profession: "Founder, Software Dev Company",
            location: "Kathmandu, Nepal",
            summary: "We were satisfied with the results we were getting.",
            rating: 5,
            review: "ProfitPath Growth Partners delivered 5–20 hot leads every month during the contract period, meeting the client's expectations. The team was punctual and professional, and the client was satisfied with the quality of their work. ProfitPath Growth Partners communicated via virtual meetings and email."
        },
        {
            name: "Anton Maghami",
            profession: "CEO, Argor & Co",
            location: "Washington, District of Columbia",
            summary: "They did everything amazingly!",
            rating: 5,
            review: "ProfitPath Growth Partners helped the client boost sales. The team impressed the client with their professionalism, deliverables, and timeliness. ProfitPath Growth Partners communicated via virtual meetings, email, and a messaging app."
        },
        {
            name: "Anonymous",
            profession: "Executive, Week.end",
            location: "Jacksonville, Florida",
            summary: "Their outreach efforts consistently produced meetings with qualified prospects.",
            rating: 5,
            review: "ProfitPath Growth Partners' work led to booking appointments for the client, showcasing the effectiveness of their work. The team communicated clearly and was receptive to feedback. ProfitPath Growth Partners' custom approach, meticulous follow-up, and accountability for results were impressive."
        },
        {
            name: "Saadi Sabah",
            profession: "Founder, Plutus Accounting Solutions LLC",
            location: "Boca Raton, Florida",
            summary: "Their honesty, speed, and execution have stood out.",
            rating: 5,
            review: "ProfitPath Growth Partners has successfully completed the project, resulting in a noticeable increase in the client's sales calendar. The team delivers work on time and has been responsive to the client's needs. The client has also praised the team's honesty, speed, and execution quality."
        },
    ];

    return (
        <section className="py-20 px-6 bg-[#09090b]">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-12 text-center md:text-left">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Success Stories
                    </h2>
                    <p className="text-zinc-500 max-w-2xl">
                        See how we've helped B2B companies scale their outbound systems.
                        All reviews are verified via Clutch.
                    </p>
                </div>

                {/* Grid Layout: 1 col on mobile, 2 on tablet, 3 on desktop */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reviews.map((item, index) => (
                        <a
                            key={index}
                            href="https://clutch.co/profile/profitpath-growth-partners#reviews"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col justify-between p-8 bg-[#0c0c0e] border border-white/5 rounded-[2rem] hover:border-white/20 transition-all duration-300"
                        >
                            <div>
                                {/* Stars & Summary */}
                                <div className="flex items-center gap-1 mb-4">
                                    {[...Array(item.rating)].map((_, i) => (
                                        <svg key={i} className="w-4 h-4 text-zinc-400 fill-current" viewBox="0 0 24 24">
                                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                        </svg>
                                    ))}
                                </div>
                                <h3 className="text-white font-bold text-lg mb-3 leading-tight">
                                    "{item.summary}"
                                </h3>
                                <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                                    {item.review}
                                </p>
                            </div>

                            {/* Author Info */}
                            <div className="pt-6 border-t border-white/5 flex justify-between items-end">
                                <div>
                                    <p className="text-white font-bold text-sm uppercase tracking-wider">{item.name}</p>
                                    <p className="text-zinc-600 text-xs font-medium">
                                        {item.profession} • {item.location}
                                    </p>
                                </div>
                                {/* Clutch Logo/Icon Shortcut */}
                                <div className="opacity-30 group-hover:opacity-100 transition-opacity">
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 18c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z" />
                                    </svg>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Bottom Call to Action */}
                <div className="mt-12 text-center">
                    <a
                        href="https://clutch.co/profile/profitpath-growth-partners#reviews"
                        target="_blank"
                        className="text-xs font-black text-zinc-500 uppercase tracking-[0.3em] hover:text-white transition-colors"
                    >
                        View all reviews 
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;