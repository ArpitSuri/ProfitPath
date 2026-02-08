import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { Eye, ShieldAlert, Database, Fingerprint, Mail, Users, Calendar, Trash2 } from 'lucide-react';

gsap.registerPlugin(ScrollToPlugin);

const PrivacyPolicy = () => {

    useEffect(() => {
        // Hero Text Entrance
        gsap.fromTo(".privacy-hero-text",
            { y: 80, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.2, ease: "expo.out" }
        );
    }, []);

    // Updated based on your content: We collect name, email for booking.
    const dataPoints = [
        { title: "Personal Info", desc: "Name and email address collected during the call booking process.", icon: <Fingerprint size={18} /> },
        { title: "Purpose", desc: "Used exclusively to provide our services and facilitate your bookings.", icon: <Calendar size={18} /> },
        { title: "Zero Sharing", desc: "Your personal data is never shared with any third-party organizations.", icon: <ShieldAlert size={18} /> },
    ];

    const scrollToSection = (id) => {
        gsap.to(window, { duration: 0.8, scrollTo: `#${id}`, ease: "power2.inOut" });
    };

    return (
        <div className="text-white min-h-screen selection:bg-zinc-500">

            {/* HERO SECTION */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden py-12">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                <div className="container mx-auto px-10 relative z-10 text-center">
                    <span className="text-zinc-500 font-mono tracking-wider text-[10px] mb-4 block uppercase">Last Updated: 04/11/23</span>
                    <h1 className="privacy-hero-text text-6xl md:text-[10vw] font-black tracking-wider leading-none ">
                        Privacy <br /> <span className="text-zinc-800">Policy</span>
                    </h1>
                </div>
            </section>

            <div className="container mx-auto px-6 md:px-20 pb-32">

                {/* SUMMARY CARDS */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
                    {dataPoints.map((point, i) => (
                        <div key={i} className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-zinc-500/50 transition-colors">
                            <div className="text-zinc-500 mb-4">{point.icon}</div>
                            <h3 className="text-lg font-bold mb-2 tracking-wider">{point.title}</h3>
                            <p className="text-sm text-zinc-500 leading-relaxed">{point.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col lg:flex-row gap-20">
                    {/* LEFT NAVIGATION */}
                    <aside className="lg:w-1/4 hidden lg:block">
                        <div className="sticky top-40 space-y-6">
                            {["Collection", "Purpose", "Sharing", "Children", "Contact"].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item.toLowerCase())}
                                    className="block text-sm font-bold tracking-wider text-zinc-600 hover:text-zinc-500 transition-colors"
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </aside>

                    {/* RIGHT CONTENT */}
                    <main className="lg:w-3/4 max-w-3xl space-y-24">

                        <section id="collection" className="scroll-mt-40">
                            <h2 className="text-4xl font-black tracking-wider mb-10 text-zinc-300">01. Information We Collect</h2>
                            <div className="prose prose-invert prose-zinc max-w-none text-zinc-400">
                                <p className="text-xl leading-relaxed mb-6">
                                    Welcome to ProfitPath. We are committed to protecting your privacy and ensuring your personal information is handled in a <span className="text-white">safe and responsible manner</span>.
                                </p>
                                <p>
                                    When you book a call with us, we collect your name, email address, and other relevant information provided. We do not collect any non-personal data or tracking metrics beyond what is necessary for our direct communication.
                                </p>
                            </div>
                        </section>

                        <section id="purpose" className="scroll-mt-40">
                            <h2 className="text-4xl font-black tracking-wider mb-10 text-zinc-300">02. Purpose of Collection</h2>
                            <div className="p-8 rounded-3xl bg-zinc-600/10 border border-zinc-500/20 flex items-start gap-6">
                                <Users className="text-zinc-500 shrink-0" size={32} />
                                <div>
                                    <h4 className="text-white font-bold mb-2">Service Provision</h4>
                                    <p className="text-zinc-400 text-sm leading-relaxed">
                                        We collect personal data exclusively to provide you with our services, including allowing you to book calls with us. This information helps us understand your specific business needs and ensures we provide a high-quality, tailored experience.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section id="sharing" className="scroll-mt-40">
                            <h2 className="text-4xl font-black tracking-wider mb-10 text-zinc-300">03. Data Sharing</h2>
                            <div className="prose prose-invert prose-zinc max-w-none text-zinc-400">
                                <p className="text-lg leading-relaxed">
                                    We maintain a strict policy regarding your information: <span className="text-white">We do not share your personal data with any third parties.</span> Your information is for internal use at ProfitPath only.
                                </p>
                            </div>
                        </section>

                        <section id="children" className="scroll-mt-40">
                            <h2 className="text-4xl font-black tracking-wider mb-10 text-zinc-300">04. Children's Privacy</h2>
                            <div className="p-8 rounded-3xl bg-red-900/10 border border-red-500/20 flex items-start gap-6">
                                <Trash2 className="text-red-500/50 shrink-0" size={32} />
                                <div>
                                    <h4 className="text-white font-bold mb-2">Under 13 Policy</h4>
                                    <p className="text-zinc-400 text-sm leading-relaxed">
                                        We do not knowingly collect any data from children under the age of 13. If we become aware that we have inadvertently received personal data from a child under the age of 13, we will immediately delete such information from our records.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section id="contact" className="scroll-mt-40">
                            <h2 className="text-4xl font-black tracking-wider mb-10 text-zinc-300">05. Contact Us</h2>
                            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                                If you have any questions about this Privacy Policy or wish to discuss how your data is handled, please reach out to our team.
                            </p>
                            <a
                                href="mailto:sales@profitpathgrowthpartners.com"
                                className="group inline-flex items-center gap-4 bg-white text-black px-8 py-4 rounded-full font-black text-xs tracking-wider hover:bg-zinc-500 hover:text-white transition-all"
                            >
                                <Mail size={16} /> sales@profitpathgrowthpartners.com
                            </a>
                        </section>

                    </main>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;