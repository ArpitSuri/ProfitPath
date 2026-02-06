import React from 'react'
import Navbar from '../components/HomePageComponents/Navbar'
import PrivacyPolicy from '../components/PrivacyPolicy'
import Footer from '../components/HomePageComponents/Footer'

const PrivacyPolicyPage = () => {
  return (
    <main
      className="relative min-h-screen text-white overflow-x-hidden bg-center bg-no-repeat bg-cover bg-fixed"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
        <Navbar />
        <PrivacyPolicy />
        <Footer />
        </main>
  )
}

export default PrivacyPolicyPage
