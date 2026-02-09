import React from 'react'
import Navbar from '../components/HomePageComponents/Navbar'
import Footer from '../components/HomePageComponents/Footer'
import CareerHero from '../components/Careers/CareerHero'
import WhyWorkWithUs from '../components/Careers/WhyWorkWithUs'
import WorkingAtProfitPath from '../components/Careers/WorkingAtProfitPath'
import TeamMoments from '../components/Careers/TeamMoments'
import PerksSection from '../components/Careers/PerkSections'
import TeamTestimonials from '../components/Careers/TeamTestimonials'
import JobOpenings from '../components/Careers/JobOpenings'
import ContactSection from '../components/HomePageComponents/ContactSection'

const CareersPage = () => {
  return (
      <main
          className="relative min-h-screen text-white overflow-x-hidden bg-center bg-no-repeat bg-cover bg-fixed"
          style={{ backgroundImage: "url('/bg.png')" }}
      >
          <Navbar />
          <CareerHero />
          <WhyWorkWithUs/>
          <WorkingAtProfitPath />
          {/* <TeamMoments /> */}
          <PerksSection />
          {/* <TeamTestimonials /> */}
          <JobOpenings />
          {/* <ContactSection /> */}
          <Footer />
      </main>
  )
}

export default CareersPage
