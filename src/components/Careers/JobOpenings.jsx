import React, { useState } from 'react';
import { ArrowUpRight, X, MapPin, Clock, Briefcase } from 'lucide-react';

const JobOpenings = () => {
    const [selectedJob, setSelectedJob] = useState(null);

    const jobs = [
        {
            id: 1,
            title: "Full Stack Engineer",
            location: "Remote / New York",
            type: "Full-Time",
            description: "We are looking for a dev who treats code like architecture. You will be building high-performance growth engines and custom API integrations.",
            requirements: ["3+ Years React/Node experience", "Experience with AWS/GCP", "Deep understanding of performance optimization."]
        },
        {
            id: 2,
            title: "Growth Strategist",
            location: "Remote / London",
            type: "Full-Time",
            description: "You are the architect of the funnel. You understand human behavior and data in equal measure.",
            requirements: ["Proven track record in B2B scaling", "Expertise in paid acquisition", "Analytical mindset."]
        },
        {
            id: 3,
            title: "UI/UX Designer",
            location: "Remote",
            type: "Contract",
            description: "Join us to define the visual language of the next generation of fintech and e-commerce.",
            requirements: ["Expertise in Figma", "Strong portfolio of minimalist design", "Experience with Framer/Webflow."]
        },
        {
            id: 4,
            title: "Data Analyst",
            location: "Remote / Dubai",
            type: "Full-Time",
            description: "Turn raw data into actionable growth maps. You will be the eyes of our execution team.",
            requirements: ["SQL/Python mastery", "Experience with BigQuery", "Ability to tranzinc data into strategy."]
        }
    ];

    return (
        <section className="w-full  text-white py-24 px-6 md:px-12 relative">
            <div className="max-w-7xl mx-auto">

                {/* 1. HEADING IN MIDDLE AT TOP */}
                <div className="text-center mb-24">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600 block mb-4">
                        Join the collective
                    </span>
                    <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85]">
                        Open <span className="text-zinc-800">Positions.</span>
                    </h2>
                </div>

                {/* 2. TWO LISTS (2 Column Grid) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-0">
                    {jobs.map((job) => (
                        <div
                            key={job.id}
                            className="group flex items-center justify-between py-8 border-b border-white/10 hover:border-white transition-all duration-500 cursor-pointer"
                            onClick={() => setSelectedJob(job)}
                        >
                            <div>
                                <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight group-hover:tranzinc-x-2 transition-transform duration-500">
                                    {job.title}
                                </h3>
                                <p className="text-zinc-600 text-xs font-black uppercase tracking-widest mt-2 group-hover:tranzinc-x-2 transition-transform duration-500 delay-75">
                                    {job.location} • {job.type}
                                </p>
                            </div>

                            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                                <ArrowUpRight size={20} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 3. MODAL COMPONENT */}
            {selectedJob && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 backdrop-blur-xl bg-black/80 animate-fadeIn mt-25">
                    <div className="bg-zinc-900 border border-white/10 w-full max-w-2xl rounded-[2.5rem] overflow-hidden relative shadow-2xl">

                        {/* Modal Header */}
                        <div className="p-8 md:p-12 border-b border-white/5 flex justify-between items-start">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4">
                                    {selectedJob.title}
                                </h2>
                                <div className="flex flex-wrap gap-4">
                                    <span className="flex items-center gap-2 text-zinc-500 text-xs font-bold uppercase tracking-widest">
                                        <MapPin size={14} /> {selectedJob.location}
                                    </span>
                                    <span className="flex items-center gap-2 text-zinc-500 text-xs font-bold uppercase tracking-widest">
                                        <Briefcase size={14} /> {selectedJob.type}
                                    </span>
                                </div>
                            </div>
                            <button
                                onClick={() => setSelectedJob(null)}
                                className="p-3 rounded-full bg-white/5 hover:bg-white hover:text-black transition-all"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="p-8 md:p-12 space-y-8 overflow-y-auto max-h-[60vh]">
                            <div>
                                <h4 className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.3em] mb-4">The Role</h4>
                                <p className="text-zinc-300 text-lg font-light leading-relaxed">{selectedJob.description}</p>
                            </div>

                            <div>
                                <h4 className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.3em] mb-4">Requirements</h4>
                                <ul className="space-y-3">
                                    {selectedJob.requirements.map((req, i) => (
                                        <li key={i} className="flex items-center gap-3 text-zinc-400 font-light">
                                            <div className="w-1 h-1 rounded-full bg-white"></div>
                                            {req}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <button className="w-full py-5 bg-white text-black font-black uppercase tracking-widest text-xs hover:bg-zinc-200 transition-all rounded-xl mt-4">
                                Apply for this Position
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default JobOpenings;