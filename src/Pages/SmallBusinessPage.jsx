import CaseStudyCarousel from "../components/CaseStudyCrousal"
import ContactSection from "../components/HomePageComponents/ContactSection"
import FeatureShowcase from "../components/HomePageComponents/FeatureShowCase"
import Footer from "../components/HomePageComponents/Footer"
import Navbar from "../components/HomePageComponents/Navbar"
import ROIComponent from "../components/ROIPage"
import MiddleShowcase from "../components/SmallBusinessComponents/FeatureShowCase"
import GrowthExperts from "../components/SmallBusinessComponents/GrowthExpert"
import IndustriesSection from "../components/SmallBusinessComponents/IndustrySection"
import ResultsStats from "../components/SmallBusinessComponents/ResultStats"
import SmallBusinessHero from "../components/SmallBusinessComponents/SmallBusinessHero"
import TargetingOrbit from "../components/SmallBusinessComponents/TargetingOrbit"
import Testimonials from "../components/TestimonialsComponent"



const SmallBusinessPage = () => {
    return (
        <main
            className="relative min-h-screen text-white overflow-x-hidden bg-center bg-no-repeat bg-cover bg-fixed"
            style={{ backgroundImage: "url('/bg.png')" }}
        >
            <Navbar />
            <SmallBusinessHero />
            <MiddleShowcase />
            <FeatureShowcase />
            <TargetingOrbit />
            <IndustriesSection />
            <GrowthExperts />
            <ROIComponent />
            <CaseStudyCarousel />
            <ResultsStats />
            {/* <ContactSection /> */}
            <Testimonials />
            <Footer />
        </main>
    )
}

export default SmallBusinessPage
