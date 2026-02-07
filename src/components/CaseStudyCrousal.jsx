import React, { useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const caseStudies = [
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
        logo: "https://via.placeholder.com/60x60/3d3d3d/ffffff?text=NP",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
        layout: "text-left"
    },
    {
        id: 2,
        badge: "PRIVATE EQUITY",
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
        logo: "https://via.placeholder.com/60x60/3d3d3d/ffffff?text=KG",
        image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2073&auto=format&fit=crop",
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
        logo: "https://via.placeholder.com/60x60/3d3d3d/ffffff?text=NL",
        image: "https://images.unsplash.com/photo-1558444479-c84824d4858e?q=80&w=2070&auto=format&fit=crop",
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
        logo: "https://via.placeholder.com/60x60/3d3d3d/ffffff?text=SD",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
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
        logo: "https://via.placeholder.com/60x60/3d3d3d/ffffff?text=SB",
        image: "https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=2070&auto=format&fit=crop",
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
        logo: "https://via.placeholder.com/60x60/3d3d3d/ffffff?text=BLC",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2072&auto=format&fit=crop",
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
        logo: "https://via.placeholder.com/60x60/3d3d3d/ffffff?text=LJM",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
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
        logo: "https://via.placeholder.com/60x60/3d3d3d/ffffff?text=NAC",
        image: "https://images.unsplash.com/photo-1549923746-c50264f39a18?q=80&w=2070&auto=format&fit=crop",
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
        logo: "https://via.placeholder.com/60x60/3d3d3d/ffffff?text=CH",
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
        logo: "https://via.placeholder.com/60x60/3d3d3d/ffffff?text=PS",
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop",
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
        logo: "https://via.placeholder.com/60x60/3d3d3d/ffffff?text=RS",
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
        logo: "https://via.placeholder.com/60x60/3d3d3d/ffffff?text=CR",
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
        logo: "https://via.placeholder.com/60x60/3d3d3d/ffffff?text=BTC",
        image: "https://images.unsplash.com/photo-1551288049-bbda3865c670?q=80&w=2070&auto=format&fit=crop",
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
        logo: "https://via.placeholder.com/60x60/3d3d3d/ffffff?text=AP",
        image: "https://images.unsplash.com/photo-1444676632488-26a136c45b9b?q=80&w=2070&auto=format&fit=crop",
        layout: "text-left"
    },
    {
        id: 16,
        badge: "EMERGING GROWTH & FUNDRAISING",
        company: "AgTech Startup",
        location: "San Francisco, California",
        description: "Secured 18 qualified investor meetings in 90 days, achieving a 22% booking rate with specialized Ag VCs.",
        challenge: "Lacked investor relationships beyond immediate network; needed Series A capital.",
        solution: [
            "100,000 monthly emails to Ag investment firms and family offices",
            "2-3 sentence sequences focusing on pilot program ROI metrics",
            "Targeted GPs and Associates for maximum fund penetration"
        ],
        results: {
            revenueGrowth: "18 qualified investor meetings in 90 days",
            leadGen: "22% meeting booking rate from interested responses",
            highlights: "Connected with 8 Ag-focused firms and 3 family offices"
        },
        testimonial: {
            quote: "Bypassed the noise and secured direct lines to specialized Series A capital.",
            author: "AgTech Founding Team",
            role: "Precision Agriculture"
        },
        logo: "https://via.placeholder.com/60x60/3d3d3d/ffffff?text=AG",
        image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=2068&auto=format&fit=crop",
        layout: "text-right"
    },
    {
        id: 17,
        badge: "MARKETING AUTOMATION & SAAS",
        company: "MarTech Startup",
        location: "United States",
        description: "Generated 67 qualified investor meetings with Tier-1 VCs including Sequoia and a16z.",
        challenge: "Network limited to local angels; needed institutional capital for scaling.",
        solution: [
            "200,000 monthly emails to 10,000+ VC partners nationwide",
            "Systematic outreach to Tier-1 Enterprise Software/SaaS investors",
            "Messaging highlighting ARR growth and retention metrics"
        ],
        results: {
            revenueGrowth: "67 qualified investor meetings in 12 months",
            leadGen: "Engaged 28 Tier-1 enterprise software VCs",
            highlights: "Engagement at Sequoia, a16z, Bessemer, and Accel"
        },
        testimonial: {
            quote: "Engaged the most prestigious institutional investors in the world.",
            author: "MarTech Founding Team",
            role: "SaaS Growth"
        },
        logo: "https://via.placeholder.com/60x60/3d3d3d/ffffff?text=MT",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop",
        layout: "text-left"
    },
    {
        id: 18,
        badge: "MEDTECH & REMOTE MONITORING",
        company: "MedTech Startup",
        location: "Austin, Texas",
        description: "Raised $3M by securing 29 investor meetings in 180 days using clinical outcome data.",
        challenge: "Struggled to move beyond warm introductions despite FDA-cleared technology.",
        solution: [
            "Outreach to healthcare VCs, strategic investors, and CVCs",
            "Targeted hospital systems as potential investment partners",
            "Emphasized FDA clearance and clinical efficacy in messaging"
        ],
        results: {
            revenueGrowth: "$3M capital raised",
            leadGen: "29 qualified investor meetings in 6 months",
            highlights: "Engaged 12 institutional funds and 4 corporate venture arms"
        },
        testimonial: {
            quote: "Bypassed gatekeepers to secure institutional interest needed to scale.",
            author: "MedTech Founding Team",
            role: "Healthcare Innovation"
        },
        logo: "https://via.placeholder.com/60x60/3d3d3d/ffffff?text=MT",
        image: "https://images.unsplash.com/photo-1576091160550-2173dad99a01?q=80&w=2070&auto=format&fit=crop",
        layout: "text-right"
    },
    {
        id: 19,
        badge: "FINTECH & SMB LENDING",
        company: "FinTech Startup",
        location: "New York, New York",
        description: "Secured 15 investor meetings and 8 strategic banking partnerships in 90 days.",
        challenge: "Needed capital and banking partnerships simultaneously with limited traditional success.",
        solution: [
            "Parallel campaigns for financial services VCs and community banks",
            "Highlighted loan performance metrics and SMB success rates",
            "Positioned platform as strategic asset for traditional bank modernization"
        ],
        results: {
            revenueGrowth: "15 investor meetings in 90 days",
            leadGen: "8 strategic partner meetings with banks and credit unions",
            highlights: "Engaged 4 community banks for partnership discussions"
        },
        testimonial: {
            quote: "Found the banking partners needed to scale our lending volume.",
            author: "FinTech Founding Team",
            role: "Lending Operations"
        },
        logo: "https://via.placeholder.com/60x60/3d3d3d/ffffff?text=FT",
        image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c02?q=80&w=2070&auto=format&fit=crop",
        layout: "text-left"
    },
    {
        id: 20,
        badge: "CLEANTECH & ENERGY STORAGE",
        company: "CleanTech Startup",
        location: "Denver, Colorado",
        description: "Raised $2.1M and secured 39 climate investor meetings leveraging regulatory incentives.",
        challenge: "Difficulties reaching climate-focused investors and industrial strategic partners.",
        solution: [
            "100,000 monthly emails to climate VCs and CVC arms",
            "Targeted industrial manufacturers with venture divisions",
            "Messaging around regulatory incentives (IRA) and market timing"
        ],
        results: {
            revenueGrowth: "$2.1M capital raised",
            leadGen: "39 qualified investor meetings in 240 days",
            highlights: "Engaged 14 climate-focused firms and 5 industrial CVCs"
        },
        testimonial: {
            quote: "Turned technical pitch into a timely financial opportunity.",
            author: "CleanTech Founding Team",
            role: "Energy Innovation"
        },
        logo: "https://via.placeholder.com/60x60/3d3d3d/ffffff?text=CT",
        image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2072&auto=format&fit=crop",
        layout: "text-right"
    },
    {
        id: 21,
        badge: "EDTECH & CORPORATE TRAINING",
        company: "EdTech Startup",
        location: "Chicago, Illinois",
        description: "Raised $1.2M and secured 17 enterprise investor meetings in 90 days using SaaS metrics.",
        challenge: "Couldn't access Tier-1 enterprise investors despite strong B2B metrics.",
        solution: [
            "Outreach to enterprise software and workforce development VCs",
            "Identified HR technology strategic investors for synergy",
            "Highlighted customer acquisition and retention data"
        ],
        results: {
            revenueGrowth: "$1.2M capital raised",
            leadGen: "17 qualified investor meetings in 90 days",
            highlights: "19% booking rate; engaged 6 enterprise software firms"
        },
        testimonial: {
            quote: "Leading with retention data secured meetings previously unreachable.",
            author: "EdTech Founding Team",
            role: "Workforce Development"
        },
        logo: "https://via.placeholder.com/60x60/3d3d3d/ffffff?text=ED",
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop",
        layout: "text-left"
    }
];



const CaseStudyCarousel = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo = direction === 'left'
                ? scrollLeft - clientWidth / 2
                : scrollLeft + clientWidth / 2;

            scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    return (
        <section className="w-full min-h-screen  text-white py-24 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">

                {/* TOP ROW: Badge (Left) | Heading & Subheading (Right) */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-20">
                    <div className="lg:w-1/3">
                        <span className="px-4 py-1.5 rounded-full  text-white/70 text-[12px] font-black  tracking-wider">
                            Proven Results
                        </span>
                    </div>
                    <div className="lg:w-2/3">
                        <h2 className="text-5xl md:text-7xl font-black  tracking-wider leading-[0.9] mb-6">
                            Real Impact, <br />
                            <span className="text-zinc-700">Real Scale.</span>
                        </h2>
                        <p className="text-zinc-500 text-lg md:text-xl font-light max-w-xl">
                            We don't just deliver leads; we transform ecosystems. Explore how we’ve scaled industry leaders across the global market.
                        </p>
                    </div>
                </div>

                {/* MIDDLE ROW: Case Studies Label (Left) | Carousel (Right) */}
                <div className="flex flex-col lg:flex-row gap-12">

                    {/* Static Sidebar Label */}
                    <div className="lg:w-1/4 flex flex-col justify-between">
                        <div className="lg:hidden">
                            <h3 className="text-xl font-bold  tracking-wider text-zinc-600">Case Studies</h3>
                        </div>

                        {/* Navigation Arrows for Desktop (Bottom Left of this section) */}
                        <div className="hidden lg:flex gap-4 mt-auto">
                            <button
                                onClick={() => scroll('left')}
                                className="p-4 cursor-pointer rounded-full border border-white/10 hover:bg-white hover:text-black transition-all"
                            >
                                <ChevronLeft size={24} />
                            </button>
                            <button
                                onClick={() => scroll('right')}
                                className="p-4 cursor-pointer rounded-full border border-white/10 hover:bg-white hover:text-black transition-all"
                            >
                                <ChevronRight size={24} />
                            </button>
                        </div>
                    </div>

                    {/* Carousel Area */}
                    <div className="lg:w-3/4">
                        <div
                            ref={scrollRef}
                            className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-10"
                        >
                            {caseStudies.map((study) => (
                                <div
                                    key={study.id}
                                    className="min-w-[300px] md:min-w-[450px] snap-start group"
                                >
                                    {/* Card Image Wrapper */}
                                    <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-zinc-900 mb-6 border border-white/5">
                                        <img
                                            src={study.image}
                                            alt={study.company}
                                            className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                        />
                                        {/* Floating Badge on Card */}
                                        <div className="absolute top-6 left-6">
                                            <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[9px] font-bold tracking-wider  border border-white/10">
                                                {study.badge}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Card Footer */}
                                    <div className="flex justify-between items-center px-2">
                                        <div>
                                            <h4 className="text-xl font-bold  tracking-wider group-hover:text-zinc-400 transition-colors">
                                                {study.company}
                                            </h4>
                                            <h5 className="text-zinc-500 text-xs font-light mt-1">{study.challenge}</h5>
                                        
                                        </div>
                                        
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Mobile Arrows (Visible only on small screens) */}
                <div className="flex lg:hidden gap-4 mt-8 justify-center">
                    <button onClick={() => scroll('left')} className="p-4 rounded-full border border-white/10"><ChevronLeft /></button>
                    <button onClick={() => scroll('right')} className="p-4 rounded-full border border-white/10"><ChevronRight /></button>
                </div>
            </div>

            {/* Tailwind CSS for hiding scrollbars */}
            <style jsx>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .vertical-text { width: 0; }
      `}</style>
        </section>
    );
};

export default CaseStudyCarousel;