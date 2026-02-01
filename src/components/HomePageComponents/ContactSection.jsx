import { Check } from 'lucide-react';
import React, { useState } from 'react';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        service: "",
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const services = [
        "Digital Strategy",
        "Content Marketing",
        "UI/UX Design",
        "Paid Advertising",
        "Brand Identity"
    ];

    return (
        <section className="bg-black py-24 px-6 min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 w-full">

                {/* LEFT SIDE: Copy & Identity */}
                <div className="flex flex-col ">
                    <span className="w-fit px-4 py-2 rounded-full bg-zinc-500/10 border border-zinc-500/20 text-zinc-400 text-xs font-bold uppercase tracking-wider mb-8 mt-8">
                    <Check className="inline-block w-4 h-4 mr-2 stroke-2" />
                        Talk to Us
                    </span>

                    <h2 className="text-4xl md:text-6xl font-black text-white leading-none  tracking-wider mb-8">
                       Got a question? 
                    </h2>

                    <p className="text-xl text-zinc-400 max-w-md leading-relaxed font-light ">
                        Use the contact form to get in touch. We aim to respond to all enquiries within 2 working days.
                    </p>
                </div>

                {/* RIGHT SIDE: The Form */}
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[3rem] shadow-2xl">
                    <form className="space-y-6">

                        {/* Service Dropdown */}
                        <div className="flex flex-col gap-2">
                            <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-2">What are you seeking?</label>
                            <select
                                className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-zinc-500 transition-colors appearance-none cursor-pointer"
                                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                            >
                                <option value="" disabled selected>Select a Service</option>
                                {services.map((service, i) => (
                                    <option key={i} value={service}>{service}</option>
                                ))}
                            </select>
                        </div>

                        {/* Name & Email Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-2">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    className="bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-zinc-500 transition-colors"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-2">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="john@example.com"
                                    className="bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-zinc-500 transition-colors"
                                />
                            </div>
                        </div>

                        {/* Phone Number */}
                        <div className="flex flex-col gap-2">
                            <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-2">Phone Number</label>
                            <input
                                type="tel"
                                placeholder="+1 (555) 000-0000"
                                className="bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-zinc-500 transition-colors"
                            />
                        </div>

                        {/* Message */}
                        <div className="flex flex-col gap-2">
                            <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-2">Tell us about your project</label>
                            <textarea
                                rows="4"
                                placeholder="Share your goals..."
                                className="bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-zinc-500 transition-colors resize-none"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button className="w-full bg-white text-black font-black uppercase tracking-widest py-5 rounded-2xl hover:bg-zinc-500 hover:text-white transition-all duration-500 shadow-xl active:scale-95 cursor-pointer">
                            Send Inquiry
                        </button>
                    </form>
                </div>

            </div>
        </section>
    );
};

export default ContactSection;