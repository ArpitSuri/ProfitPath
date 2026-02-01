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
      <main className="bg-black text-white overflow-x-hidden">
        <Navbar />
        <Hero />
        <StackingCards />
        <CompanyTray />
        <ResultsStats />
        <FeatureShowcase />
        <CaseStudyScroll />
        <ContactSection />
        <Footer />
    </main>
  )
}

export default Home
