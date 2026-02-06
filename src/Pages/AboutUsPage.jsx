import AboutQuote from "../components/AboutUsPageComponent/AboutQuote"
import AboutSecondary from "../components/AboutUsPageComponent/AboutSecondary"
import AboutHero from "../components/AboutUsPageComponent/AboutUsHero"
import FounderSection from "../components/AboutUsPageComponent/FounderSection"
import TeamSection from "../components/AboutUsPageComponent/TeamSection"
import ValuesCarousel from "../components/AboutUsPageComponent/ValueCrousal"
import ContactSection from "../components/HomePageComponents/ContactSection"
import Footer from "../components/HomePageComponents/Footer"
import Navbar from "../components/HomePageComponents/Navbar"

const AboutUs = () => {
    return (
        <main
            className="relative min-h-screen text-white overflow-x-hidden bg-center bg-no-repeat bg-cover bg-fixed"
            style={{ backgroundImage: "url('/bg.png')" }}
        >
            <Navbar />
            <AboutHero />
            <AboutSecondary />
            <FounderSection />
            <AboutQuote />
            <ValuesCarousel />
            <TeamSection />
            <ContactSection />
            <Footer />
        </main>
    )
}

export default AboutUs
