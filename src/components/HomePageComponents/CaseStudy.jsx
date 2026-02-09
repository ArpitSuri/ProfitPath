import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        id: 1,
        badge: "INVESTMENT BANKING",
        company: "Nassau Street Partners",
        location: "New York City, New York",
        description: "Sourced $35M in equity for a single project and generated 500+ institutional leads through hyper-targeted private equity outreach.",
        challenge: "Reliance on traditional, slow-moving networking for high-stakes capital raises in the self-storage and real estate sectors.",
        solution: [
            "Targeted 5,000+ Family Offices and Private Equity firms",
            "Deployed automated, personalized C-suite email sequences",
            "Systematized investor relations and initial outreach"
        ],
        results: {
            revenueGrowth: "$35M equity sourced for one project",
            leadGen: "500+ qualified institutional leads",
            highlights: "Secured meetings with Blackstone, KKR, and Starwood"
        },
        testimonial: {
            quote: "Transformed our capital raising from a manual grind into a scalable, high-volume engine.",
            author: "Nassau Leadership",
            role: "Managing Partner"
        },
        logo: "/CaseStudy/1.jpg",
        image: "/CaseStudy/1.1.webp",
        layout: "text-left"
    },
    {
        id: 2,
        badge: "INVESTMENT BANKING",
        company: "Kadenwood Group",
        location: "United States",
        description: "Built a $100M+ acquisition pipeline within 12 months by automating outreach to lower-mid market business owners.",
        challenge: "Internal team was bogged down by manual prospecting, limiting the volume of proprietary deal flow.",
        solution: [
            "100,000 monthly emails to business owners in specific EBITDA brackets",
            "Automated follow-ups to maintain 'top of mind' presence",
            "Segmented outreach by industry vertical and geography"
        ],
        results: {
            revenueGrowth: "$100M+ qualified deal pipeline",
            leadGen: "40+ monthly proprietary deal leads",
            highlights: "Reduced cost-per-acquisition by 70%"
        },
        testimonial: {
            quote: "ProfitPath allowed us to focus on closing deals rather than finding them.",
            author: "Kadenwood Team",
            role: "Acquisitions"
        },
        logo: "/CaseStudy/2.png",
        image: "/CaseStudy/2.1.png",
        layout: "text-right"
    },
    {
        id: 3,
        badge: "INDUSTRIAL INGREDIENTS",
        company: "National Lecithin",
        location: "United States",
        description: "Increased monthly sales volume by 40% through direct-to-manufacturer outreach across 10+ food science verticals.",
        challenge: "Static growth due to reliance on a few large distributors; needed to build direct relationships with manufacturers.",
        solution: [
            "Targeted R&D directors and procurement heads directly",
            "Messaging focused on supply chain stability and price transparency",
            "Educational content on lecithin applications for specific food niches"
        ],
        results: {
            revenueGrowth: "40% increase in monthly direct sales",
            leadGen: "150+ monthly R&D sample requests",
            highlights: "Opened 25+ new major manufacturing accounts"
        },
        testimonial: {
            quote: "We successfully bypassed the middleman and built a direct, high-margin sales channel.",
            author: "National Lecithin",
            role: "Operations"
        },
        logo: "/CaseStudy/3.avif",
        image: "/CaseStudy/3.1.avif",
        layout: "text-left"
    },
    {
        id: 4,
        badge: "RESIDENTIAL CONTRACTOR (B2C)",
        company: "SweatDecks",
        location: "United States",
        description: "Closed $5M+ in high-ticket residential projects while slashing customer acquisition costs by 90% vs. Meta advertising.",
        challenge: "Unsustainable CAC on social media platforms threatened profitability for high-end home services.",
        solution: [
            "100,000 monthly emails to affluent homeowners in targeted zip codes",
            "Leveraged neighborhood social proof and recent nearby projects",
            "Direct response messaging for $20k-$50k ticket items"
        ],
        results: {
            revenueGrowth: "$5M+ in closed projects",
            leadGen: "500+ monthly interested leads",
            highlights: "90% reduction in CPL vs. Meta advertising"
        },
        testimonial: {
            quote: "Established a scalable, profitable acquisition channel that outperformed social ads by 10x.",
            author: "SweatDecks Leadership",
            role: "Operations"
        },
        logo: "/CaseStudy/4.avif",
        image: "/CaseStudy/4.1.jpg",
        layout: "text-right"
    },
    {
        id: 5,
        badge: "SPORTS EQUIPMENT",
        company: "Spikeball",
        location: "United States & International",
        description: "Unlocked the institutional market by generating 300+ monthly qualified leads from schools and recreation directors across 12 countries.",
        challenge: "Limited penetration in high-volume institutional segments despite strong consumer brand awareness.",
        solution: [
            "Targeted PE teachers and athletic directors nationwide",
            "Expanded outreach to 12 countries including school principals",
            "Positioned bulk-purchase offerings (10-50+ sets) as educational tools"
        ],
        results: {
            revenueGrowth: "300+ monthly interested decision-makers",
            leadGen: "Consistent pipeline for bulk institutional orders",
            highlights: "Scaled B2B acquisition channel globally"
        },
        testimonial: {
            quote: "Transformed a retail-heavy brand into a dominant player in the education segment.",
            author: "Spikeball B2B Division",
            role: "Institutional Sales"
        },
        logo: "https://imgs.search.brave.com/MCMF7BR8JpGHId7DvLQ_EGxYkY293mckaP9JUS-D_PA/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZDkxNjU2YTRk/YzI1YzMxMTJhZjEy/OWFlMTk2NzU4ZWNk/NGQ0N2IwYjZjMmIz/M2JjZjAyOGZjMzhj/NTAwZmJhZS9zcGlr/ZWJhbGwuY29tLw",
        image: "/CaseStudy/5.1.webp",
        layout: "text-left"
    },
    {
        id: 6,
        badge: "STRATEGIC COST OPTIMIZATION",
        company: "AuctionIQ",
        location: "Salt Lake City, Utah",
        description: "Achieved a 1000%+ ROI by securing high-level engagements with Fortune 1000 executives and a strategic partnership with KPMG.",
        challenge: "Exclusively reliant on referrals for $500M+ clients; previous lead gen attempts yielded zero results.",
        solution: [
            "100,000 monthly emails to finance leaders at $500M+ global orgs",
            "Hyper-concise 2-3 sentence sequences using specific case studies",
            "Secured strategic referral partners and targeted Fortune 1000 decision-makers"
        ],
        results: {
            revenueGrowth: "1000%+ ROI on engagement fees",
            leadGen: "Engaged executives at Iron Mountain, Shift Digital, and Mandarin Oriental",
            highlights: "Strategic partnership with KPMG ($36B annual revenue)"
        },
        testimonial: {
            quote: "Overcame the 'referral-only' barrier to engage multi-billion dollar organizations.",
            author: "AuctionIQ Leadership",
            role: "Strategy & Operations"
        },
        logo: "https://via.placeholder.com/60x60/3d3d3d/ffffff?text=AIQ",
        image: "https://images.unsplash.com/photo-1454165833267-02886c57ed23?q=80&w=2070&auto=format&fit=crop",
        layout: "text-right"
    },
    {
        id: 7,
        badge: "ACCOUNTING & CONSULTING",
        company: "BottomLine Concepts",
        location: "Miami, Florida",
        description: "Generated $800,000 in revenue in just 90 days by scaling outreach to SMBs ahead of critical tax credit deadlines.",
        challenge: "Intense time pressure to capture ERC market share before the 2025 deadline.",
        solution: [
            "100,000+ monthly emails to CFOs/CEOs of US-based SMBs",
            "Educational content regarding $26,000-per-employee tax credit benefits",
            "Built streamlined qualification and CPA scheduling infrastructure"
        ],
        results: {
            revenueGrowth: "$800,000 generated in 90 days",
            leadGen: "66 qualified executive meetings in 3 months",
            highlights: "Facilitated $4M in realized tax credits for clients"
        },
        testimonial: {
            quote: "Rapidly established market dominance under extreme time constraints.",
            author: "BottomLine Leadership",
            role: "Financial Consulting"
        },
        logo: "/CaseStudy/7.jpg",
        image: "/CaseStudy/7.1.jpg",
        layout: "text-left"
    },
    {
        id: 8,
        badge: "LOGISTICS & COST CONSULTING",
        company: "LJM Group",
        location: "Farmingdale, New York",
        description: "Generated $500,000+ in revenue and a $10M pipeline by pivoting outreach from SMBs to enterprise-level targets.",
        challenge: "Struggled to penetrate the enterprise market ($10M+ carrier spend) despite dominance in mid-market.",
        solution: [
            "Organized historical savings data into high-impact case studies",
            "100,000 monthly emails targeting supply chain leaders at $5M+ spenders",
            "Automated qualification and warm handoffs to senior consultants"
        ],
        results: {
            revenueGrowth: "$500,000+ in confirmed revenue",
            leadGen: "$10M+ in qualified opportunity pipeline",
            highlights: "Engaged Principal Financial, Academy Sports, and Brex"
        },
        testimonial: {
            quote: "Successfully scaled our footprint into the Fortune 500, engaging entities previously unreachable.",
            author: "LJM Leadership",
            role: "Supply Chain Strategy"
        },
        logo: "/CaseStudy/8.png",
        image: "/CaseStudy/8.1.jpg",
        layout: "text-right"
    },
    {
        id: 9,
        badge: "PREMIUM OFFSHORE CALL CENTER",
        company: "No Accent Callers",
        location: "Palm Beach, Florida",
        description: "Achieved 400% year-over-year growth and added $1.8M in ARR by successfully penetrating the enterprise market.",
        challenge: "Stagnating revenue due to dependency on word-of-mouth; needed to engage $100M+ revenue prospects.",
        solution: [
            "Built custom email infrastructure optimized for enterprise delivery",
            "Messaging focused on quality differentiation and 'no accent' branding",
            "Systematic outreach to senior marketing and sales decision-makers"
        ],
        results: {
            revenueGrowth: "$1.8M in ARR added",
            leadGen: "6-7 enterprise meetings secured monthly",
            highlights: "400% year-over-year revenue growth"
        },
        testimonial: {
            quote: "ProfitPath had amazing results for us, by far the best marketing company I've worked with.",
            author: "Ben Kaplan",
            role: "CEO & Co-Founder"
        },
        logo: "/CaseStudy/9.png",
        image: "/CaseStudy/9.svg",
        layout: "text-left"
    },
    {
        id: 10,
        badge: "EMPLOYEE BENEFITS SOLUTIONS",
        company: "Clever Health & Champion Health",
        location: "Scottsdale, Arizona",
        description: "Built an $81M qualified pipeline in record time, securing 19 enterprise meetings in 19 days.",
        challenge: "Scaling Section 125 plan acquisition in a market dominated by legacy relationship-based selling.",
        solution: [
            "Dual-track campaigns targeting CHROs and brokerage leaders",
            "Hyper-concise sequences framing cost reduction in financial terms",
            "Automated scheduling with benefits consultants upon prospect interest"
        ],
        results: {
            revenueGrowth: "$81M in qualified pipeline created",
            leadGen: "19 meetings with enterprise decision-makers in 19 days",
            highlights: "Engaged Amtrak, Asbury Automotive, and USI"
        },
        testimonial: {
            quote: "By presenting clear financial value directly to the C-suite, we bypassed the relationship barrier.",
            author: "Clever Health Team",
            role: "Benefits Brokerage"
        },
        logo: "/CaseStudy/10.png",
        image: "https://images.unsplash.com/photo-1573496130141-2097af01395c?q=80&w=2070&auto=format&fit=crop",
        layout: "text-right"
    },
    {
        id: 11,
        badge: "SAFETY MONITORING HW & SW",
        company: "Predictive Safety",
        location: "Denver, Colorado",
        description: "Generated a $31M qualified pipeline in 180 days by pivoting from trade shows to a global, data-driven strategy.",
        challenge: "Inconsistent results from word-of-mouth; difficulty reaching global stakeholders at Fortune 500s.",
        solution: [
            "Used product trial data and research to build evidence-based messaging",
            "Segmented global outreach by industry (Aviation, Mining, etc.)",
            "Targeted CHROs and COOs at organizations with 1,000+ employees"
        ],
        results: {
            revenueGrowth: "$31M in pipeline created in 6 months",
            leadGen: "Engaged 10+ global airlines and multi-billion dollar mining firms",
            highlights: "Secured meetings with RyanAir, Emirates, and Anglo American"
        },
        testimonial: {
            quote: "Unlocked doors to the world's largest aviation and mining firms.",
            author: "Predictive Safety Leadership",
            role: "Enterprise Growth"
        },
        logo: "/CaseStudy/11.png",
        image: "/CaseStudy/11.1.jpeg",
        layout: "text-left"
    },
    {
        id: 12,
        badge: "TRADE FINANCING PLATFORM",
        company: "Raistone",
        location: "New York City, New York",
        description: "Unlocked $100M+ in potential credit facilities by penetrating the Top 100 US construction firms.",
        challenge: "Needed a strategic way to position financing as a benefit to General Contractors and their subcontractors.",
        solution: [
            "Personalized email campaigns for CFOs at Top 100 US construction firms",
            "Leveraged case studies demonstrating 'win-win' for GCs and sub-contractors",
            "Positioned trade financing as a strategic tool for financial health"
        ],
        results: {
            revenueGrowth: "$100M+ in potential credit facilities created",
            leadGen: "Engaged Clark Construction ($5B/yr)",
            highlights: "Connected with Harkins Builders and 4 other firms ($300M+/yr)"
        },
        testimonial: {
            quote: "Moved beyond individual SMB acquisition to massive partnership-driven facilities.",
            author: "Raistone Strategic Growth",
            role: "Fintech Partnerships"
        },
        logo: "/CaseStudy/12.png",
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070&auto=format&fit=crop",
        layout: "text-right"
    },
    {
        id: 13,
        badge: "BANKING FINTECH",
        company: "Crescent",
        location: "United States",
        description: "Added $6M in monthly opportunities by deploying a multi-channel outreach engine across Email, LinkedIn, and calling.",
        challenge: "Aggressive growth goals hampered by a commoditized, low-differentiation banking market.",
        solution: [
            "Massive-scale email outreach to 500,000 SMB CEOs/CFOs monthly",
            "Full-time calling infrastructure to dial interested leads instantly",
            "LinkedIn outreach with demo incentives to drive high-intent meetings"
        ],
        results: {
            revenueGrowth: "$6M in monthly opportunities added (LTV)",
            leadGen: "400+ monthly interested leads",
            highlights: "Established predictable acquisition engine in competitive sector"
        },
        testimonial: {
            quote: "Turned a commoditized service into a high-growth acquisition machine.",
            author: "Crescent Growth Team",
            role: "FinTech Operations"
        },
        logo: "/CaseStudy/13.png",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop",
        layout: "text-left"
    },
    {
        id: 14,
        badge: "ALTERNATIVE FINANCING SOLUTIONS",
        company: "BigThink Capital",
        location: "Melville, New York",
        description: "Generated 1,500+ exclusive monthly leads and $560k+ in revenue by bypassing shared lead platforms.",
        challenge: "Compressed margins due to non-exclusive leads from platforms like LendingTree.",
        solution: [
            "1,000,000+ monthly SMB emails delivering proprietary leads",
            "Exclusive lead delivery system through Arvio Capital",
            "Leveraged financial networks for introductions to international lenders"
        ],
        results: {
            revenueGrowth: "$560,000+ in added annualized revenue",
            leadGen: "1,500+ qualified, exclusive leads generated monthly",
            highlights: "Facilitated partnership with RTMI Capital (Israel)"
        },
        testimonial: {
            quote: "Bypassing shared lead platforms allowed us to reclaim our margins.",
            author: "BigThink Leadership",
            role: "Financial Strategy"
        },
        logo: "/CaseStudy/14.png",
        image: "/CaseStudy/14.1.webp",
        layout: "text-right"
    },
    {
        id: 15,
        badge: "BOUTIQUE INVESTMENT BANK",
        company: "Amaretto Partners",
        location: "New York City, United States",
        description: "Sourced $209M+ in capital for clients and established a permanent outreach infrastructure.",
        challenge: "Intermittent success with internal outreach; lacked consistency for client acquisition and capital raising.",
        solution: [
            "Dual-phase strategy: client acquisition followed by capital raising support",
            "Targeted campaigns to generate investor interest in specific offerings",
            "Handed over messaging frameworks for ongoing independent use"
        ],
        results: {
            revenueGrowth: "$209M+ in capital sourced for clients",
            leadGen: "Secured engagement with Half Moon Capital ($250M fundraise)",
            highlights: "$200M+ debt secured for mixed-use development"
        },
        testimonial: {
            quote: "Post-engagement, we continue to use ProfitPath's infrastructure with excellent results.",
            author: "Tomer Brenner",
            role: "Founder & Managing Director"
        },
        logo: "/CaseStudy/15.png",
        image: "https://images.unsplash.com/photo-1444676632488-26a136c45b9b?q=80&w=2070&auto=format&fit=crop",
        layout: "text-left"
    },
];

/* ===============================
   Rolling Number (FIXED)
================================ */
const RollingNumber = ({ value, isActive }) => {
    const [displayValue, setDisplayValue] = useState(0);
    const objRef = useRef({ val: 0 });

    const numericValue = parseFloat(value.replace(/[^0-9.]/g, "")) || 0;
    const suffix = value.replace(/[0-9.]/g, "");

    useEffect(() => {
        if (!isActive) {
            setDisplayValue(0);
            objRef.current.val = 0;
            return;
        }

        gsap.to(objRef.current, {
            val: numericValue,
            duration: 1.8,
            ease: "power3.out",
            onUpdate: () => {
                setDisplayValue(Math.floor(objRef.current.val));
            },
        });
    }, [isActive, numericValue]);

    return <span>{displayValue}{suffix}</span>;
};

/* ===============================
   Main Component
================================ */
const CaseStudyScroll = () => {
    const containerRef = useRef(null);
    const rightSideRef = useRef(null);

    const [activeIndex, setActiveIndex] = useState(-1);

    const maxIndex = projects.length - 1;

    const setSafeIndex = (i) => {
        const max = projects.length - 1;
        if (i < 0 || i > max) return;
        setActiveIndex(i);
    };

    /* ===============================
       Scroll Logic (GSAP SAFE)
    ================================ */
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Pin right panel
            ScrollTrigger.create({
                trigger: containerRef.current,
                start: "top top",
                end: () =>
                    "+=" +
                    (containerRef.current.scrollHeight - window.innerHeight),
                pin: rightSideRef.current,
            });



            // Section-based index switching
            projects.forEach((_, i) => {
                ScrollTrigger.create({
                    trigger: `.case-section-${i}`,
                    start: "center center",
                    end: "bottom center",
                    onEnter: () => {
                        if (i <= maxIndex) setSafeIndex(i);
                    },
                    onEnterBack: () => {
                        if (i <= maxIndex) setSafeIndex(i);
                    },
                });
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    const displayIndex =
        activeIndex < 0 ? 0 : Math.min(activeIndex, maxIndex);

    return (
        <div
            ref={containerRef}
            className="relative flex flex-col lg:flex-row"
        >
            {/* LEFT SIDE */}
            <div className="w-full lg:w-1/2 px-10 md:px-24">
                {projects.map((item, i) => (
                    <div
                        key={item.id}
                        className={`case-section-${i} h-screen flex flex-col justify-center py-24`}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-20 h-20 rounded-xl flex items-center justify-center text-xs font-bold text-white overflow-hidden">
                                {item.logo.includes("http") ? (
                                    <img
                                        src={item.logo}
                                        alt=""
                                        className="w-full h-full object-cover opacity-50"
                                    />
                                ) : (
                                        <img
                                            src={item.logo}
                                            alt=""
                                            className="w-full h-full object-cover"
                                        />
                                )}
                            </div>
                            <span className="text-zinc-400 font-mono tracking-wider text-xs">
                                {item.badge}
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-black text-white leading-none mb-6">
                            {item.company}
                        </h2>

                        <p className="text-lg text-zinc-400 max-w-md mb-10">
                            {item.description}
                        </p>

                        {/* STATS */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-10 border-y border-white/10">
                            <div>
                                <span className="text-xs text-zinc-500 font-bold">Impact</span>
                                <div className="text-2xl font-black text-white">
                                    <RollingNumber
                                        value={item.results.revenueGrowth}
                                        isActive={activeIndex === i}
                                    />
                                </div>
                            </div>

                            <div>
                                <span className="text-xs text-zinc-500 font-bold">Acquisition</span>
                                <div className="text-2xl font-black text-white">
                                    <RollingNumber
                                        value={item.results.leadGen}
                                        isActive={activeIndex === i}
                                    />
                                </div>
                            </div>

                            <div>
                                <span className="text-xs text-zinc-500 font-bold">Key Result</span>
                                <div className="text-2xl font-black text-white">
                                    <RollingNumber
                                        value={item.results.highlights}
                                        isActive={activeIndex === i}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* RIGHT SIDE */}
            <div
                ref={rightSideRef}
                className="hidden lg:flex w-1/2 h-screen items-center justify-center"
            >
                <div className="relative w-full h-full overflow-hidden bg-zinc-900 border-l border-white/10">
                    {projects.map((item, i) => (
                        <div
                            key={item.id}
                            className={`absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]
                ${activeIndex === i
                                    ? "opacity-100 scale-100"
                                    : "opacity-0 scale-125 translate-y-10"}
              `}
                        >
                            <img
                                src={item.image}
                                alt={item.company}
                                className="w-full h-full object-cover brightness-50"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-zinc-500/20 to-black/60" />
                            <div className="absolute top-12 right-12 text-white/10 text-6xl font-black">
                                {item.company}
                            </div>
                        </div>
                    ))}

                    {/* INDEX */}
                    <div className="absolute bottom-12 right-12 mix-blend-difference">
                        <span className="text-white text-9xl font-black opacity-20">
                            {displayIndex + 1 < 10
                                ? `0${displayIndex + 1}`
                                : displayIndex + 1}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CaseStudyScroll;
