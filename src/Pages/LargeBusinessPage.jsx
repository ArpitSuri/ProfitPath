import React from 'react'
import Navbar from '../components/HomePageComponents/Navbar'
import Footer from '../components/HomePageComponents/Footer'
import SmallBusinessHero from '../components/SmallBusinessComponents/SmallBusinessHero'
import MiddleShowcase from '../components/MediuamBusinessComponents/MiddleShowCase'
import WhoAreWe from '../components/MediuamBusinessComponents/MediumWhoAreWe'
import GrowthExperts from '../components/SmallBusinessComponents/GrowthExpert'
import HowWeWork from '../components/MediuamBusinessComponents/MediumHowWeWork'
import IndustriesSection from '../components/SmallBusinessComponents/IndustrySection'
import CaseStudyCarousel from '../components/CaseStudyCrousal'
import ContactSection from '../components/HomePageComponents/ContactSection'
import ROIComponent from '../components/ROIPage'
import LargeBusinessHero from '../components/largeBuinessComponents/LargeBusinessHero'
import Testimonials from '../components/TestimonialsComponent'
const LargeBusinessPage = () => {
  return (
    <main
      className="relative min-h-screen text-white overflow-x-hidden bg-center bg-no-repeat bg-cover bg-fixed"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
        <Navbar />
        <LargeBusinessHero />
        <MiddleShowcase />
        <WhoAreWe />
        <GrowthExperts />
        <HowWeWork />
        <ROIComponent />
        <IndustriesSection />
        <CaseStudyCarousel />
        {/* <ContactSection /> */}
      <Testimonials/>
        
        <Footer />
        </main>
  )
}

export default LargeBusinessPage
