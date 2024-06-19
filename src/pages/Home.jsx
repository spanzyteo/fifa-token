import React from 'react'
import Header from '../components/Header'
import FirstBody from '../components/FirstBody'
import About from '../components/About'
import Fifanomics from '../components/Fifanomics'
import Roadmap from '../components/Roadmap'

const Home = () => {
  return <div className=" bg-black h-screen ">
    <Header />
    <FirstBody />
    <About />
    <Fifanomics  />
    <Roadmap />
  </div>
}

export default Home
