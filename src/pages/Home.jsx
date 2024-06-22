import React from 'react'
import Header from '../components/Header'
import FirstBody from '../components/FirstBody'
import About from '../components/About'
import Fifanomics from '../components/Fifanomics'
import Roadmap from '../components/Roadmap'
import JoinNow from '../components/JoinNow'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import LiveStream from '../components/LiveStream'
// import Modal from '../components/Modal'

const Home = () => (
  <div className=" bg-black h-screen relative">
    <Header />
    <FirstBody />
    <Sidebar />
    {/* <Modal /> */}
    <LiveStream />
    <About />
    <Fifanomics />
    <Roadmap />
    <JoinNow />
    <Footer />
  </div>
)

export default Home
