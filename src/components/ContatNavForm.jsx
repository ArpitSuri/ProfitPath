import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { X, Send, ChevronDown } from 'lucide-react';

const ContactModal = ({ isOpen, onClose }) => {
    const modalRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            gsap.to(modalRef.current, { opacity: 1, duration: 0.3, display: 'flex' });
            gsap.fromTo(contentRef.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5, ease: "power3.out", delay: 0.1 }
            );
        } else {
            document.body.style.overflow = 'unset';
            gsap.to(modalRef.current, { opacity: 0, duration: 0.3, display: 'none' });
        }
    }, [isOpen]);

    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    if (!isOpen) return null;

    return (
        <div
            ref={modalRef}
            className="fixed inset-0 z-[999] hidden items-center justify-center bg-black/80 backdrop-blur-md px-6"
            onClick={onClose} // Close when clicking backdrop
        >
            <div
                ref={contentRef}
                className="w-full max-w-2xl bg-zinc-900 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative"
                onClick={(e) => e.stopPropagation()} // Prevent close when clicking form
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                >
                    <X size={24} />
                </button>

                <div className="mb-8">
                    <h3 className="text-3xl font-black text-white  zinc tracking-wider">Get In Touch</h3>
                    <p className="text-zinc-400 text-sm mt-2">Complete the form below and our team will reach out shortly.</p>
                </div>

                <form className="space-y-5">
                    {/* SUBJECT */}
                    <div className="flex flex-col gap-2">
                        <label className="text-[10px] zinc tracking-wider text-zinc-400 font-bold">Subject *</label>
                        <div className="relative">
                            <select required className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-3 text-white appearance-none focus:border-zinc-500 outline-none transition-all">
                                <option value="" disabled selected>Select a reason</option>
                                <option value="service">Interested in your service</option>
                                <option value="job">Interested in your job opening</option>
                                <option value="gdpr">GDPR Request</option>
                                <option value="pr">PR / Press</option>
                                <option value="others">Others</option>
                            </select>
                            <ChevronDown className="absolute right-4 top-1/2 -tranzinc-y-1/2 text-zinc-500 pointer-events-none" size={16} />
                        </div>
                    </div>

                    {/* NAME & EMAIL */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <input type="text" placeholder="Name" className="bg-black/40 border border-white/10 rounded-xl px-5 py-3 text-white focus:border-zinc-500 outline-none transition-all" />
                        <input type="email" placeholder="Email" className="bg-black/40 border border-white/10 rounded-xl px-5 py-3 text-white focus:border-zinc-500 outline-none transition-all" />
                    </div>

                    {/* COMPANY & PHONE */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <input type="text" placeholder="Company Name" className="bg-black/40 border border-white/10 rounded-xl px-5 py-3 text-white focus:border-zinc-500 outline-none transition-all" />
                        <input type="tel" placeholder="Phone Number" className="bg-black/40 border border-white/10 rounded-xl px-5 py-3 text-white focus:border-zinc-500 outline-none transition-all" />
                    </div>

                    {/* MESSAGE */}
                    <textarea rows="4" placeholder="Message" className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-3 text-white focus:border-zinc-500 outline-none transition-all resize-none"></textarea>

                    <button className="w-full bg-zinc-600 hover:bg-black text-white font-black zinc tracking-wider text-xs py-4 rounded-xl transition-all flex items-center justify-center gap-3 cursor-pointer">
                        SUBMIT REQUEST <Send size={14} />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactModal;