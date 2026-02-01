import React from 'react'
import CookiePolicy from '../components/cookiePloicy'
import Navbar from '../components/HomePageComponents/Navbar'
import Footer from '../components/HomePageComponents/Footer'

const CookiePolicyPage = () => {
  return (
    <main className="bg-black text-white overflow-x-hidden">
      <Navbar />
      <CookiePolicy />
      <Footer />
    </main>
  )
}

export default CookiePolicyPage
