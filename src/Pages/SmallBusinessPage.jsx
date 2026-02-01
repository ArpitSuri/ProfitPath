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



const SmallBusinessPage = () => {
    return (
        <main className="bg-black text-white overflow-x-hidden">
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
            <ContactSection />
            <Footer />
        </main>
    )
}

export default SmallBusinessPage
