import React from 'react'
import Header from '../components/Header'
import FirstBody from '../components/FirstBody'
import About from '../components/About'
import Fifanomics from '../components/Fifanomics'
import Roadmap from '../components/Roadmap'
import JoinNow from '../components/JoinNow'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'

const Home = () => (
  <div className=" bg-black h-screen relative">
    <Header />
    <FirstBody />
    <Sidebar />
    <About />
    <Fifanomics />
    <Roadmap />
    <JoinNow />
    <Footer />
  </div>
)

export default Home
