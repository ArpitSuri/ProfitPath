import React from 'react'
import Navbar from '../components/HomePageComponents/Navbar'
import PrivacyPolicy from '../components/PrivacyPolicy'
import Footer from '../components/HomePageComponents/Footer'

const PrivacyPolicyPage = () => {
  return (
      <main className="bg-black text-white overflow-x-hidden">
        <Navbar />
        <PrivacyPolicy />
        <Footer />
        </main>
  )
}

export default PrivacyPolicyPage
