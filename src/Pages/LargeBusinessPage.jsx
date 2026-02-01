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
const LargeBusinessPage = () => {
  return (
      <main className="bg-black text-white overflow-x-hidden">
        <Navbar />
        <SmallBusinessHero />
        <MiddleShowcase />
        <WhoAreWe />
        <GrowthExperts />
        <HowWeWork />
        <ROIComponent />
        <IndustriesSection />
        <CaseStudyCarousel />
        <ContactSection />
        
        <Footer />
        </main>
  )
}

export default LargeBusinessPage
