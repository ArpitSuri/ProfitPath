import React from 'react'
import Navbar from '../components/HomePageComponents/Navbar'
import RoiPage from '../components/ROIPage'
import Footer from '../components/HomePageComponents/Footer'

const ROIPage = () => {
  return (
      <main className="bg-black text-white overflow-x-hidden">
        <Navbar />
        <RoiPage />
        <Footer />
      
    </main>
  )
}

export default ROIPage
