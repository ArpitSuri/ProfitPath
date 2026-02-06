import React from 'react'
import Navbar from '../components/HomePageComponents/Navbar'
import TermsAndConditions from '../components/TermsAndCondition'
import Footer from '../components/HomePageComponents/Footer'

const TermsAndConditionPage = () => {
  return (
    <main
      className="relative min-h-screen text-white overflow-x-hidden bg-center bg-no-repeat bg-cover bg-fixed"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      <Navbar/>
      <TermsAndConditions />
      <Footer />
    </main>
  )
}

export default TermsAndConditionPage
