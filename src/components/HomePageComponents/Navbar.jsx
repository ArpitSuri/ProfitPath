import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useNavigate } from 'react-router-dom';
import { HamburgerIcon } from 'lucide-react'; // Using standard Lucide icons
import AnimatedCalcButton from '../AnimatedCalculatorButton';
import ROICalculatorButton from '../ROICaluclatorButton';
import GetInTouchButton from '../GetInTouchButton';
import ContactModal from '../ContatNavForm';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const menuRef = useRef(null);
    const linksRef = useRef([]);
    const navigate = useNavigate();

    // 1. Scroll Logic
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // 2. GSAP Animation Logic for Mobile Menu
    useEffect(() => {
        if (isMenuOpen) {
            // Prevent background scroll
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
            <div className="w-72 shadow-2xl backdrop-blur-xl bg-black/80 p-6 border border-white/10 rounded-xl">
                <div className="flex flex-col gap-4">
                    {subLinks.map((sub) => (
                        <button
                            key={sub.name}
                            onClick={() => {
                                navigate(sub.href);
                                setIsMenuOpen(false);
                            }}
                            className="text-[12px] text-left tracking-wider text-zinc-200 hover:text-zinc-400 transition-colors font-bold cursor-pointer "
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
            <ContactModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
            {/* --- 1. HERO NAVBAR (Transparent/Initial) --- */}
            <nav className={`fixed top-0 w-full z-[100] py-8 px-10 flex items-center justify-between transition-all duration-500 ease-in-out ${isScrolled ? '-translate-y-full opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'}`}>
                <div onClick={() => navigate('/')} className="text-2xl font-black  tracking-wider text-white  cursor-pointer">
                    PROFITPATH
                </div>

                <div className="hidden lg:flex items-center gap-8 mr-20">
                    {navLinks.map((link) => (
                        <div key={link.name} className="relative group py-2">
                            <button
                                onClick={() => !link.hasDropdown && navigate(link.href)}
                                className="text-sm tracking-wider text-white/70 hover:text-white transition-colors flex items-center gap-1 cursor-pointer "
                            >
                                {link.name} {link.hasDropdown && <span className="text-[10px]">▼</span>}
                            </button>
                            {link.hasDropdown && <DesktopDropdown subLinks={link.subLinks} />}
                        </div>
                    ))}
                </div>

                {/* Mobile Trigger for Hero Nav */}
                <button onClick={() => setIsMenuOpen(true)} className="lg:hidden text-white flex items-center gap-2 font-bold text-[10px] tracking-wider ">
                    Menu <HamburgerIcon size={20} />
                </button>
            </nav>

            {/* --- 2. ACTION NAVBAR (Sticky/Scrolled) --- */}
            <nav className={`fixed top-0 w-full z-[110] bg-black/90 backdrop-blur-2xl border-b border-white/10 py-4 px-10 flex items-center justify-between transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] shadow-2xl ${isScrolled ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
                <div onClick={() => navigate('/')} className="text-xl font-black  tracking-wider text-zinc-500  cursor-pointer">
                    ProfitPath.
                </div>

                <div className="hidden lg:flex items-center gap-8">
                    <div className="flex items-center gap-6 border-r border-white/10 pr-6">
                        {navLinks.map((link) => (
                            <div key={link.name} className="relative group py-2">
                                <button
                                    onClick={() => !link.hasDropdown && navigate(link.href)}
                                    className="text-[13px] tracking-wider text-white/60 hover:text-white transition-colors flex items-center gap-1 cursor-pointer  font-medium"
                                >
                                    {link.name} {link.hasDropdown && <span className="text-[10px]">▼</span>}
                                </button>
                                {link.hasDropdown && <DesktopDropdown subLinks={link.subLinks} />}
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <ROICalculatorButton />
                        <div
                            onClick={() => setIsModalOpen(true)}
                            className="cursor-pointer"
                        >
                            <GetInTouchButton />
                        </div>
                    </div>

                </div>

                <div className="lg:hidden flex items-center gap-4">
                    <button onClick={() => navigate('/roi-calculator')} className="text-white">
                        <AnimatedCalcButton />
                    </button>
                    <button onClick={() => setIsMenuOpen(true)} className="text-white font-bold text-[10px] tracking-wider ">
                        MENU
                    </button>
                </div>
            </nav>

            {/* --- 3. MOBILE OVERLAY MENU --- */}
            <div
                ref={menuRef}
                className={`fixed inset-0 bg-black z-[150] translate-x-full flex flex-col justify-center px-12 overflow-hidden lg:hidden`}
            >
                {/* Mobile Menu Header */}
                <div className="absolute top-0 left-0 w-full p-8 flex items-center justify-between">
                    <div className="text-2xl font-black  tracking-wider text-white " onClick={() => { navigate('/'); setIsMenuOpen(false); }}>
                        PROFITPATH
                    </div>
                    <button onClick={() => setIsMenuOpen(false)} className="w-12 h-12 bg-white rounded-full flex items-center justify-center relative">
                        <span className="absolute w-5 h-0.5 bg-black rotate-45"></span>
                        <span className="absolute w-5 h-0.5 bg-black -rotate-45"></span>
                    </button>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col gap-8">
                    {navLinks.map((link, i) => (
                        <div key={link.name} className="overflow-hidden">
                            <div
                                ref={el => linksRef.current[i] = el}
                                className="flex items-center justify-between"
                            >
                                <button
                                    onClick={() => {
                                        if (!link.hasDropdown) {
                                            navigate(link.href);
                                            setIsMenuOpen(false);
                                        } else {
                                            setOpenDropdown(openDropdown === i ? null : i);
                                        }
                                    }}
                                    className="text-4xl md:text-7xl font-black text-white  hover:text-zinc-500 transition-colors text-left cursor-pointer"
                                >
                                    {link.name}
                                </button>
                                {link.hasDropdown && (
                                    <button
                                        onClick={() => setOpenDropdown(openDropdown === i ? null : i)}
                                        className="text-white text-3xl font-light w-12 h-12 border border-white/10 rounded-full flex items-center justify-center"
                                    >
                                        {openDropdown === i ? "−" : "+"}
                                    </button>
                                )}
                            </div>

                            {/* Mobile Dropdown Links */}
                            {link.hasDropdown && openDropdown === i && (
                                <div className="flex flex-col gap-4 mt-6 ml-4 border-l-2 border-zinc-500/50 pl-6 animate-in slide-in-from-left duration-300">
                                    {link.subLinks.map((sub) => (
                                        <button
                                            key={sub.name}
                                            onClick={() => {
                                                navigate(sub.href);
                                                setIsMenuOpen(false);
                                            }}
                                            className="text-xl text-left font-bold text-gray-400 hover:text-white transition-colors cursor-pointer  tracking-wider"
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