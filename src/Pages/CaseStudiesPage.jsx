import CaseStudiesSection from "../components/CaseStudiesComponents/CaseStudies"
import CaseStudiesHero from "../components/CaseStudiesComponents/CaseStudiesHero"
import CompanyTray from "../components/HomePageComponents/CompanyTray"
import ContactSection from "../components/HomePageComponents/ContactSection"
import Footer from "../components/HomePageComponents/Footer"
import Navbar from "../components/HomePageComponents/Navbar"

const CaseStudiesPage = () => {
    return (
        <main
            className="relative min-h-screen text-white overflow-x-hidden bg-center bg-no-repeat bg-cover bg-fixed"
            style={{ backgroundImage: "url('/bg.png')" }}
        >
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
