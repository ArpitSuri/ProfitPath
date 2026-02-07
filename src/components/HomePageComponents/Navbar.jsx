import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useNavigate } from 'react-router-dom';
import { Menu, ChevronDown } from 'lucide-react';
import AnimatedCalcButton from '../AnimatedCalculatorButton';
import ROICalculatorButton from '../ROICaluclatorButton';
import GetInTouchButton from '../GetInTouchButton';
import ContactModal from '../ContatNavForm';

import logo from '/Logo.png';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const menuRef = useRef(null);
    const linksRef = useRef([]);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
            gsap.to(menuRef.current, { x: 0, duration: 0.7, ease: "expo.out" });
            gsap.fromTo(linksRef.current,
                { x: 100, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.5, stagger: 0.08, delay: 0.3, ease: "power4.out" }
            );
        } else {
            document.body.style.overflow = 'unset';
            gsap.to(menuRef.current, { x: '100%', duration: 0.5, ease: "expo.in" });
        }
    }, [isMenuOpen]);

    const navLinks = [
        { name: "About Us", href: "/who-we-are" },
        { name: "Leakage Calculator", href: "/leakage-calculator" },
        {
            name: "Services",
            href: "#",
            hasDropdown: true,
            subLinks: [
                { name: "For Small Companies", href: "/services/small-business" },
                { name: "For Medium Companies", href: "/services/medium-business" },
                { name: "For Large Companies", href: "/services/large-business" }
            ]
        },
        { name: "Case Studies", href: "/case-studies" },
        { name: "Careers", href: "/careers" },
    ];

    const DesktopDropdown = ({ subLinks }) => (
        <div className="absolute top-full left-0 pt-4 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-[200]">
            <div className="w-64 shadow-2xl backdrop-blur-xl bg-black/90 p-5 border border-white/10 rounded-xl">
                <div className="flex flex-col gap-3">
                    {subLinks.map((sub) => (
                        <button
                            key={sub.name}
                            onClick={() => {
                                navigate(sub.href);
                                setIsMenuOpen(false);
                            }}
                            className="text-[11px] md:text-[12px] text-left tracking-wider text-zinc-200 hover:text-white transition-colors font-bold cursor-pointer"
                        >
                            {sub.name}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );

    return (
        <>
            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            {/* --- 1. HERO NAVBAR (Initial) --- */}
            <nav className={`fixed top-0 w-full z-[100] bg-black py-3 px-6 md:px-8 lg:px-12 flex items-center justify-between transition-all duration-500 ease-in-out ${isScrolled ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
                <div onClick={() => navigate('/')} className="cursor-pointer shrink-0">
                    <img src={logo} alt="ProfitPath Logo" className="h-8 md:h-13 w-auto object-contain" />
                </div>

                {/* Visible on Tablets (md) and up */}
                <div className="hidden md:flex items-center gap-4 lg:gap-8">
                    {navLinks.map((link) => (
                        <div key={link.name} className="relative group py-2">
                            <button
                                onClick={() => !link.hasDropdown && navigate(link.href)}
                                className="text-[14px] lg:text-sm tracking-wider text-white/70 hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
                            >
                                {link.name} {link.hasDropdown && <ChevronDown size={12} className="opacity-50" />}
                            </button>
                            {link.hasDropdown && <DesktopDropdown subLinks={link.subLinks} />}
                        </div>
                    ))}
                </div>

                <button onClick={() => setIsMenuOpen(true)} className="md:hidden text-white">
                    <Menu size={24} />
                </button>
            </nav>

            {/* --- 2. ACTION NAVBAR (Sticky) --- */}
            <nav className={`fixed top-0 w-full z-[110] bg-black/90 backdrop-blur-2xl border-b border-white/10 py-3 px-4 md:px-8 lg:px-12 flex items-center justify-between transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] shadow-2xl ${isScrolled ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
                <div onClick={() => navigate('/')} className="cursor-pointer shrink-0">
                    <img src={logo} alt="ProfitPath Logo" className="h-8 md:h-10 w-auto object-contain" />
                </div>

                <div className="hidden md:flex items-center gap-3 lg:gap-8">
                    <div className="flex items-center gap-3 lg:gap-6 border-r border-white/10 pr-4 lg:pr-6">
                        {navLinks.map((link) => (
                            <div key={link.name} className="relative group py-2">
                                <button
                                    onClick={() => !link.hasDropdown && navigate(link.href)}
                                    className="text-[12px] lg:text-[13px] tracking-wider text-white/60 hover:text-white transition-colors flex items-center gap-1 font-medium"
                                >
                                    {link.name} {link.hasDropdown && <ChevronDown size={10} />}
                                </button>
                                {link.hasDropdown && <DesktopDropdown subLinks={link.subLinks} />}
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center gap-3 lg:gap-4">
                        {/* ROICalculator is text-heavy, might hide on small tablets if needed, or keep for MD */}
                        <div className="hidden lg:block">
                            <ROICalculatorButton />
                        </div>
                        <div onClick={() => setIsModalOpen(true)} className="cursor-pointer scale-90 lg:scale-100">
                            <GetInTouchButton />
                        </div>
                    </div>
                </div>

                {/* Mobile/Small Tablet Toggle */}
                <div className="md:hidden flex items-center gap-3">
                    <button onClick={() => navigate('/roi-calculator')} className="text-white h-9 w-9">
                        <AnimatedCalcButton />
                    </button>
                    <button onClick={() => setIsMenuOpen(true)} className="text-white">
                        <Menu size={24} />
                    </button>
                </div>
            </nav>

            {/* --- 3. MOBILE OVERLAY MENU --- */}
            <div
                ref={menuRef}
                className="fixed inset-0 bg-black z-[150] translate-x-full flex flex-col justify-center px-8 md:px-20 overflow-hidden"
            >
                {/* Close Button & Logo */}
                <div className="absolute top-0 left-0 w-full p-6 md:p-10 flex items-center justify-between">
                    <img src={logo} alt="Logo" className="h-8 w-auto" />
                    <button onClick={() => setIsMenuOpen(false)} className="w-12 h-12 bg-white rounded-full flex items-center justify-center relative">
                        <span className="absolute w-6 h-0.5 bg-black rotate-45"></span>
                        <span className="absolute w-6 h-0.5 bg-black -rotate-45"></span>
                    </button>
                </div>

                <div className="flex flex-col gap-6 md:gap-10">
                    {navLinks.map((link, i) => (
                        <div key={link.name} className="overflow-hidden">
                            <div ref={el => linksRef.current[i] = el} className="flex items-center justify-between">
                                <button
                                    onClick={() => {
                                        if (!link.hasDropdown) {
                                            navigate(link.href);
                                            setIsMenuOpen(false);
                                        } else {
                                            setOpenDropdown(openDropdown === i ? null : i);
                                        }
                                    }}
                                    className="text-4xl md:text-6xl lg:text-7xl font-black text-white hover:text-emerald-400 transition-colors text-left"
                                >
                                    {link.name}
                                </button>
                                {link.hasDropdown && (
                                    <button
                                        onClick={() => setOpenDropdown(openDropdown === i ? null : i)}
                                        className="text-white text-2xl w-12 h-12 border border-white/20 rounded-full"
                                    >
                                        {openDropdown === i ? "−" : "+"}
                                    </button>
                                )}
                            </div>

                            {link.hasDropdown && openDropdown === i && (
                                <div className="flex flex-col gap-4 mt-6 ml-4 border-l-2 border-white/10 pl-6 animate-in slide-in-from-left">
                                    {link.subLinks.map((sub) => (
                                        <button
                                            key={sub.name}
                                            onClick={() => { navigate(sub.href); setIsMenuOpen(false); }}
                                            className="text-xl md:text-2xl text-left font-bold text-gray-400 hover:text-white transition-colors"
                                        >
                                            {sub.name}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Navbar;