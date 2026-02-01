import React from 'react'
import Navbar from '../components/HomePageComponents/Navbar'
import Footer from '../components/HomePageComponents/Footer'
import SmallBusinessHero from '../components/SmallBusinessComponents/SmallBusinessHero'
import MiddleShowcase from '../components/MediuamBusinessComponents/MiddleShowCase'
import WhoAreWe from '../components/MediuamBusinessComponents/MediumWhoAreWe'
import GrowthExperts from '../components/SmallBusinessComponents/GrowthExpert'
import HowWeWork from '../components/MediuamBusinessComponents/MediumHowWeWork'
import ROIPage from './ROIPage'
import IndustriesSection from '../components/SmallBusinessComponents/IndustrySection'
import CaseStudyCarousel from '../components/CaseStudyCrousal'
import ContactSection from '../components/HomePageComponents/ContactSection'
const LargeBusinessPage = () => {
  return (
      <main className="bg-black text-white overflow-x-hidden">
        <Navbar />
        <SmallBusinessHero />
        <MiddleShowcase />
        <WhoAreWe />
        <GrowthExperts />
        <HowWeWork />
        <ROIPage />
        <IndustriesSection />
        <CaseStudyCarousel />
        <ContactSection />
        
        <Footer />
        </main>
  )
}

export default LargeBusinessPage
