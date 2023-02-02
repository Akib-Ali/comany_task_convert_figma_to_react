
import './App.css'
import { CompanyLogoSection } from './compoanents/company_logo_section'
import { HeroSection } from './compoanents/herosection'
import { Navbar } from './compoanents/navbar'

function App() {
  

  return (
    <div className="App">
    <Navbar/>
    <HeroSection/>
    <CompanyLogoSection/>
     
    </div>
  )
}

export default App
