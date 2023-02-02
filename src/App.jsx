
import './App.css'
import { CompanyLogoSection } from './compoanents/company_logo_section'
import { HeroSection } from './compoanents/herosection'
import { Navbar } from './compoanents/navbar'
import { Services } from './compoanents/services'

function App() {
  

  return (
    <div className="App">
    <Navbar/>
    <HeroSection/>
    <CompanyLogoSection/>
    <Services/>
     
    </div>
  )
}

export default App
