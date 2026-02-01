import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate=useNavigate();
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    const navItems = [
        { name: 'Who are we', path: '/who-we-are' },
        { name: 'For Small Companies', path: '/services/small-business' },
        { name: 'For Medium Companies', path: '/services/medium-business' },
        { name: 'For Large Companies', path: '/services/large-business' },
        { name: 'Case Studies', path: '/case-studies' },
    ];
    return (
        <footer className="bg-black text-white pt-24 pb-12 px-6 border-t border-white/5">
            <div className="max-w-7xl mx-auto">

                {/* TOP SECTION: Newsletter */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-10 pb-20 border-b border-white/5 mb-20">
                    <div className="max-w-md">
                        <h3 className="text-3xl font-bold  tracking-wider mb-2">Subscribe to the Path</h3>
                        <p className="text-zinc-500 font-light">Get the latest marketing insights and case studies delivered to your inbox.</p>
                    </div>
                    <div className="flex w-full lg:w-auto gap-4">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="bg-white/5 border border-white/10 rounded-full px-8 py-4 w-full lg:w-80 focus:outline-none focus:border-indigo-500 transition-colors"
                        />
                        <button className="bg-white text-black px-8 py-4 rounded-full font-bold uppercase text-xs hover:bg-indigo-500 hover:text-white transition-all whitespace-nowrap">
                            Join Now
                        </button>
                    </div>
                </div>

                {/* MIDDLE SECTION: Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">

                    {/* Brand & Scroll Up */}
                    <div className="md:col-span-4 flex flex-col items-start gap-8">
                        <div className="flex items-center gap-6">
                            <h2 className="text-2xl font-black italic tracking-tighter uppercase">PROFITPATH</h2>
                            <button
                                onClick={scrollToTop}
                                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all group"
                            >
                                <span className="transform -rotate-45 group-hover:-tranzinc-y-1 transition-transform">→</span>
                            </button>
                        </div>
                        <p className="text-zinc-500 max-w-xs font-light leading-relaxed">
                            Elevating digital brands through precision engineering and data-driven marketing strategies.
                        </p>
                    </div>

                    {/* Links Menu */}
                    <div className="md:col-span-4 grid grid-cols-2 gap-8">
                        <div className="flex flex-col gap-4">
                            <h4 className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold mb-2">Navigation</h4>
                            {navItems.map((link) => (
                                <button
                                    key={link.name}
                                    onClick={() => {
                                        navigate(link.path);
                                        window.scrollTo(0, 0); // Ensures page starts at top
                                    }}
                                    className="text-zinc-400 hover:text-white transition-colors text-sm text-left w-fit cursor-pointer"
                                >
                                    {link.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Contact & Socials */}
                    <div className="md:col-span-4 flex flex-col gap-8 lg:items-end lg:text-right">
                        <div>
                            <h4 className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold mb-4">Contact</h4>
                            <p className="text-white font-medium mb-1">hello@profitpath.com</p>
                            <p className="text-zinc-500 text-sm">123 Market St, San Francisco, CA</p>
                        </div>
                        <div>
                            <h4 className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold mb-4">Follow Us</h4>
                            <div className="flex gap-6 lg:justify-end text-sm">
                                {['LinkedIn', 'Twitter', 'Instagram', 'Behance'].map((social) => (
                                    <a key={social} href="#" className="text-zinc-400 hover:text-white transition-colors uppercase tracking-widest text-[10px]">{social}</a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* BOTTOM SECTION: Legal & Copyright */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">
                    <div className="flex gap-8">
                        <p onClick={() => window.location.href = '/terms-and-conditions'} className="hover:text-white transition-colors cursor-pointer">Terms & Conditions</p>
                        <p onClick={() => window.location.href = '/privacy-policy'} className="hover:text-white transition-colors cursor-pointer">Privacy Policy</p>
                        <p onClick={() => window.location.href = '/cookie-policy'} className="hover:text-white transition-colors cursor-pointer">Cookie Policy</p>
                    </div>
                    <div className="text-zinc-600">
                        ProfitPath @ 2026. All Rights Reserved.
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;