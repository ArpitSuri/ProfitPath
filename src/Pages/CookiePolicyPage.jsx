import React from 'react'
import CookiePolicy from '../components/cookiePloicy'
import Navbar from '../components/HomePageComponents/Navbar'
import Footer from '../components/HomePageComponents/Footer'

const CookiePolicyPage = () => {
  return (
    <main
      className="relative min-h-screen text-white overflow-x-hidden bg-center bg-no-repeat bg-cover bg-fixed"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      <Navbar />
      <CookiePolicy />
      <Footer />
    </main>
  )
}

export default CookiePolicyPage
