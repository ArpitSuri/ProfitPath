import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SplitScrollAnimation = () => {
    const leftSideRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const sections = [
        {
            id: 1,
            leftTitle: "Step 01",
            leftSubtitle: "Discovery Phase",
            leftDescription: "We begin by understanding your vision, goals, and challenges to create a solid foundation.",
            leftIcon: "🔍",
            rightTitle: "Discover",
            rightSubtitle: "Understanding Your Vision",
            rightDescription: "Through collaborative workshops and deep-dive sessions, we uncover opportunities and define clear objectives for your project.",
            rightEmoji: "🌟",
            gradient: "from-purple-600 to-pink-600"
        },
        {
            id: 2,
            leftTitle: "Step 02",
            leftSubtitle: "Design & Strategy",
            leftDescription: "Creating beautiful, user-centric designs that align with your brand and business objectives.",
            leftIcon: "🎨",
            rightTitle: "Design",
            rightSubtitle: "Crafting Excellence",
            rightDescription: "Our designers create stunning interfaces that combine aesthetics with functionality, ensuring every pixel serves a purpose.",
            rightEmoji: "✨",
            gradient: "from-blue-600 to-cyan-600"
        },
        {
            id: 3,
            leftTitle: "Step 03",
            leftSubtitle: "Development",
            leftDescription: "Building robust, scalable solutions using cutting-edge technologies and best practices.",
            leftIcon: "⚙️",
            rightTitle: "Build",
            rightSubtitle: "Bringing Ideas to Life",
            rightDescription: "Our engineering team transforms designs into powerful, performant applications that scale with your business.",
            rightEmoji: "🚀",
            gradient: "from-emerald-600 to-teal-600"
        },
        {
            id: 4,
            leftTitle: "Step 04",
            leftSubtitle: "Testing & Launch",
            leftDescription: "Rigorous testing and smooth deployment to ensure everything works perfectly.",
            leftIcon: "🎯",
            rightTitle: "Launch",
            rightSubtitle: "Going Live",
            rightDescription: "We ensure a flawless launch with comprehensive testing, monitoring, and support to make your debut a success.",
            rightEmoji: "🎉",
            gradient: "from-orange-600 to-red-600"
        },
        {
            id: 5,
            leftTitle: "Step 05",
            leftSubtitle: "Growth & Support",
            leftDescription: "Continuous optimization and support to help your product thrive and evolve.",
            leftIcon: "📈",
            rightTitle: "Grow",
            rightSubtitle: "Scaling Success",
            rightDescription: "Post-launch, we provide ongoing support, analytics, and enhancements to keep you ahead of the competition.",
            rightEmoji: "💎",
            gradient: "from-indigo-600 to-purple-600"
        }
    ];

    useEffect(() => {
        const leftCards = leftSideRef.current.querySelectorAll('.scroll-section');

        leftCards.forEach((card, index) => {
            ScrollTrigger.create({
                trigger: card,
                start: 'top center',
                end: 'bottom center',
                onEnter: () => setActiveIndex(index),
                onEnterBack: () => setActiveIndex(index)
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div className="bg-zinc-950">
            {/* Hero Section */}
            <div className="h-screen flex items-center justify-center px-6 bg-gradient-to-br from-zinc-900 via-purple-900 to-zinc-900">
                <div className="text-center max-w-4xl">
                    <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
                        Split Scroll
                    </h1>
                    <p className="text-xl md:text-2xl text-zinc-300 mb-8">
                        Left side scrolls, right side stays sticky
                    </p>
                    <div className="mt-12 animate-bounce">
                        <svg className="w-8 h-8 mx-auto text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Main Split Section */}
            <div className="relative lg:flex">
                {/* Left Side - Scrolling Content */}
                <div ref={leftSideRef} className="w-full lg:w-1/2 bg-zinc-900">
                    <div className="max-w-2xl mx-auto px-6 md:px-12 py-20">
                        <h2 className="text-5xl font-bold text-white mb-6">Our Process</h2>
                        <p className="text-xl text-zinc-400 mb-20">
                            A proven approach to deliver exceptional results
                        </p>

                        {sections.map((section, index) => (
                            <div
                                key={section.id}
                                className="scroll-section min-h-screen flex items-center"
                            >
                                <div className="w-full bg-zinc-800 rounded-3xl p-10 border border-zinc-700 hover:border-zinc-600 transition-all duration-300">
                                    <div className="text-6xl mb-6">{section.leftIcon}</div>
                                    <div className="text-purple-400 font-bold text-lg mb-2">
                                        {section.leftTitle}
                                    </div>
                                    <h3 className="text-4xl font-bold text-white mb-4">
                                        {section.leftSubtitle}
                                    </h3>
                                    <p className="text-xl text-zinc-300 leading-relaxed">
                                        {section.leftDescription}
                                    </p>
                                    <div className="mt-8 flex items-center text-zinc-400">
                                        <div className="w-12 h-1 bg-purple-500 mr-4"></div>
                                        <span className="text-sm font-semibold">
                                            {String(index + 1).padStart(2, '0')} / {String(sections.length).padStart(2, '0')}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side - Sticky Content */}
                <div className="w-full lg:w-1/2 lg:sticky lg:top-0 lg:h-screen bg-zinc-950">
                    <div className="h-screen flex items-center justify-center p-6 md:p-12">
                        <div className="max-w-xl w-full">
                            {sections.map((section, index) => (
                                <div
                                    key={section.id}
                                    className={`transition-all duration-700 ${activeIndex === index
                                            ? 'opacity-100 scale-100'
                                            : 'opacity-0 scale-95 absolute'
                                        }`}
                                >
                                    <div className={`bg-gradient-to-br ${section.gradient} rounded-3xl p-1 shadow-2xl`}>
                                        <div className="bg-zinc-900/40 backdrop-blur-xl rounded-3xl p-10 h-full">
                                            <div className="text-7xl mb-6">{section.rightEmoji}</div>
                                            <div className="text-sm font-bold text-white/70 uppercase tracking-wider mb-2">
                                                {section.rightSubtitle}
                                            </div>
                                            <h3 className="text-5xl font-bold text-white mb-6">
                                                {section.rightTitle}
                                            </h3>
                                            <p className="text-xl text-white/90 leading-relaxed mb-8">
                                                {section.rightDescription}
                                            </p>
                                            <button className="bg-white text-zinc-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-zinc-100 transition-all shadow-xl hover:scale-105">
                                                Learn More →
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="h-screen flex items-center justify-center bg-zinc-900 px-6">
                <div className="text-center max-w-2xl">
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                        Ready to Begin?
                    </h2>
                    <p className="text-xl text-zinc-400 mb-10">
                        Let's create something extraordinary together
                    </p>
                    <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-5 rounded-full font-bold text-xl hover:shadow-2xl hover:scale-105 transition-all">
                        Start Your Project
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SplitScrollAnimation;