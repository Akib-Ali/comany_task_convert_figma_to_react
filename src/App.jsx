
import './App.css'
import { CompanyLogoSection } from './compoanents/company_logo_section'
import { HeroSection } from './compoanents/herosection'
import { Navbar } from './compoanents/navbar'
import { OurServices } from './compoanents/ourServices'
import { OurSolution } from './compoanents/oursolution'
import { Services } from './compoanents/services'
import { WhatWedoSection } from './compoanents/whatwedosection'
import { WhyChooseUsSection } from './compoanents/whychooseUsSection'

function App() {


  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <CompanyLogoSection />
      <Services />
      <WhyChooseUsSection />
      <OurSolution />
      <WhatWedoSection />
      <OurServices />

    </div>
  )
}

export default App
