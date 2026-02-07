import CaseStudyScroll from '../components/HomePageComponents/CaseStudy'
import CompanyTray from '../components/HomePageComponents/CompanyTray'
import ContactSection from '../components/HomePageComponents/ContactSection'
import FeatureShowcase from '../components/HomePageComponents/FeatureShowCase'
import Footer from '../components/HomePageComponents/Footer'
import Hero from '../components/HomePageComponents/Hero'
import Navbar from '../components/HomePageComponents/Navbar'
import ResultsStats from '../components/HomePageComponents/ResultStats'
import StackingCards from '../components/HomePageComponents/StickyCardEffect'

const Home = () => {
  return (
    <main
      className="relative min-h-screen text-white overflow-x-hidden bg-center bg-no-repeat bg-cover bg-fixed"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      {/* Optional: Dark Overlay to ensure text readability across all sections */}
      <div className="absolute inset-0pointer-events-none" />

      {/* Content needs relative z-index to stay above the overlay */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <CompanyTray />
        <StackingCards />
        <ResultsStats />
        {/* <FeatureShowcase /> */}
        <CaseStudyScroll />
        <ContactSection />
        <Footer />
      </div>
    </main>
  )
}

export default Home