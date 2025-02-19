import React from 'react'
import Navbar from './Components/Header/Navbar'
import Home from './Components/Content/Home'
import News from './Components/Content/News'
// import TechStack from './Components/Content/TechStack'
import Publications from './Components/Content/Publications'
import Experience from './Components/Content/Experience'
import Education from './Components/Content/Education'
import TechnicalSkills from './Components/Content/Technical'
import CandidatesAndInterns from './Components/Content/Supervision'
//import EducationExperience from './Components/Content/EduExp'
import ResearchAndService from './Components/Content/Service'
import Teaching from './Components/Content/Teaching'
import Talks from './Components/Content/Talks'
import Footer from './Components/Footer/Footer'
import { useEffect, useState } from 'react'
import { BallTriangle } from 'react-loader-spinner'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  const [loading, setLoading] = useState(false)

  //for loading screen
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])


  return (
    <>
      {loading ?
        <div className="bg-slate-900 h-[100vh] flex justify-center items-center">
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#ffffff"
            ariaLabel="ball-triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>

        :

        <>
          <Navbar />
          <Home />
          <News />
          <Education />
          <Experience />
          <Teaching />
          <CandidatesAndInterns />
          <Publications />
          <Talks />
          <ResearchAndService />
          <TechnicalSkills />
          <Footer />
          <Analytics />
          <SpeedInsights />
        </>}

    </>
  )
}

export default App

//<Footer />
//<Contact />
//<TechStack />