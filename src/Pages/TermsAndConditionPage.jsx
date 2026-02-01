import React from 'react'
import Navbar from '../components/HomePageComponents/Navbar'
import TermsAndConditions from '../components/TermsAndCondition'
import Footer from '../components/HomePageComponents/Footer'

const TermsAndConditionPage = () => {
  return (
      <main className="bg-black text-white overflow-x-hidden">
      <Navbar/>
      <TermsAndConditions />
      <Footer />
    </main>
  )
}

export default TermsAndConditionPage
