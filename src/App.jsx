import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import ROIPage from './Pages/ROIPage'
import LeakagePage from './Pages/LeekagePage'
import AboutUs from './Pages/AboutUsPage'
import CaseStudiesPage from './Pages/CaseStudiesPage'
import SmallBusinessPage from './Pages/SmallBusinessPage'
import MediumBusinessPage from './Pages/MediumBusinessPage'
import CareersPage from './Pages/CareersPage'
import LargeBusinessPage from './Pages/LargeBusinessPage'
import TermsAndConditionPage from './Pages/TermsAndConditionPage'
import PrivacyPolicyPage from './Pages/PrivacyPolicyPage'
import CookiePolicyPage from './Pages/CookiePolicyPage'
import ScrollToTop from './components/ScrollToTop'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
        <ScrollToTop />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/roi-calculator" element={<ROIPage />} />
      <Route path="/leakage-calculator" element={<LeakagePage />} />
      <Route path="/who-we-are" element={<AboutUs />} />
      <Route path="/case-studies" element={<CaseStudiesPage />} />
      <Route path="/services/small-business" element={<SmallBusinessPage />} />
      <Route path="/services/medium-business" element={<MediumBusinessPage />} />
      <Route path="/services/large-business" element={<LargeBusinessPage />} />
      <Route path="/careers" element={<CareersPage />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditionPage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      <Route path="/cookie-policy" element={<CookiePolicyPage />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
