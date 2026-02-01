import CaseStudiesSection from "../components/CaseStudiesComponents/CaseStudies"
import CaseStudiesHero from "../components/CaseStudiesComponents/CaseStudiesHero"
import CompanyTray from "../components/HomePageComponents/CompanyTray"
import ContactSection from "../components/HomePageComponents/ContactSection"
import Footer from "../components/HomePageComponents/Footer"
import Navbar from "../components/HomePageComponents/Navbar"

const CaseStudiesPage = () => {
    return (
        <main className="bg-black text-white overflow-x-hidden">
            <Navbar />
            <CaseStudiesHero />
            <CompanyTray />
            <CaseStudiesSection />
            <ContactSection />
            <Footer />
        </main>
    )
}

export default CaseStudiesPage
