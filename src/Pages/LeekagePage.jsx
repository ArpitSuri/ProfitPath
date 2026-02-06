import React from 'react'
import Navbar from '../components/HomePageComponents/Navbar'
import Footer from '../components/HomePageComponents/Footer'
import LeakageComponent from '../components/LeekageComponent'

const LeakagePage = () => {
    return (
        <main
            className="relative min-h-screen text-white overflow-x-hidden bg-center bg-no-repeat bg-cover bg-fixed"
            style={{ backgroundImage: "url('/bg.png')" }}
        >
            <Navbar />
            <LeakageComponent />
            <Footer />

        </main>
    )
}

export default LeakagePage
