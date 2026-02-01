import React from 'react'
import Navbar from '../components/HomePageComponents/Navbar'
import Footer from '../components/HomePageComponents/Footer'
import ROIComponent from '../components/ROIPage'

const ROIPage = () => {
  return (
      <main className="bg-black text-white overflow-x-hidden">
        <Navbar />
        <ROIComponent />
        <Footer />
      
    </main>
  )
}

export default ROIPage
