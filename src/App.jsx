
import './App.css'
import { CompanyLogoSection } from './compoanents/company_logo_section'
import { HeroSection } from './compoanents/herosection'
import { Navbar } from './compoanents/navbar'
import { Services } from './compoanents/services'
import { WhyChooseUsSection } from './compoanents/whychooseUsSection'

function App() {
  

  return (
    <div className="App">
    <Navbar/>
    <HeroSection/>
    <CompanyLogoSection/>
    <Services/>
    <WhyChooseUsSection/>
     
    </div>
  )
}

export default App
