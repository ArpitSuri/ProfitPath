import CaseStudyCarousel from "../components/CaseStudyCrousal"
import ContactSection from "../components/HomePageComponents/ContactSection"
import FeatureShowcase from "../components/HomePageComponents/FeatureShowCase"
import Footer from "../components/HomePageComponents/Footer"
import Navbar from "../components/HomePageComponents/Navbar"
import CompanyTray from "../components/MediuamBusinessComponents/MediumCompanyTray"
import HowWeWork from "../components/MediuamBusinessComponents/MediumHowWeWork"
import WhoAreWe from "../components/MediuamBusinessComponents/MediumWhoAreWe"
import ProcessSection from "../components/MediuamBusinessComponents/MiddleProcessSection"
import MiddleShowcase from "../components/MediuamBusinessComponents/MiddleShowCase"
import ROIComponent from "../components/ROIPage"
import GrowthExperts from "../components/SmallBusinessComponents/GrowthExpert"
import IndustriesSection from "../components/SmallBusinessComponents/IndustrySection"
import ResultsStats from "../components/SmallBusinessComponents/ResultStats"
import SmallBusinessHero from "../components/SmallBusinessComponents/SmallBusinessHero"



const MediumBusinessPage = () => {
    return (
        <main className="bg-black text-white overflow-x-hidden">
            <Navbar />
            <SmallBusinessHero />
            <MiddleShowcase />
            <WhoAreWe />
            <HowWeWork />
            <CompanyTray />
            <ProcessSection />
            <GrowthExperts />
            <ROIComponent />
            <IndustriesSection />
            <ResultsStats />
            <FeatureShowcase />
            <CaseStudyCarousel />
            <ContactSection />
            <Footer />
        </main>
    )
}

export default MediumBusinessPage
