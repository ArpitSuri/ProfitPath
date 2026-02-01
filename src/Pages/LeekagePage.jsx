import React from 'react'
import Navbar from '../components/HomePageComponents/Navbar'
import Footer from '../components/HomePageComponents/Footer'
import LeakageComponent from '../components/LeekageComponent'

const LeakagePage = () => {
    return (
        <main className="bg-black text-white overflow-x-hidden">
            <Navbar />
            <LeakageComponent />
            <Footer />

        </main>
    )
}

export default LeakagePage
